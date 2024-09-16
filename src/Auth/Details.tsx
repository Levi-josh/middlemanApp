import { useState,FormEvent,useRef} from "react"
import { FaCamera } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"
import { motion } from 'framer-motion';

interface errorMessage {
  errorMessage: String,
}
const Details = () => {
    const navigate = useNavigate()
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [username, setUsername] = useState<string>('');
    const [errorMsg,setErrorMsg] = useState<errorMessage|null>()
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [ran,setRan]=useState(false)
    const id = localStorage.getItem('Id')

    const handSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if (!selectedFile || !id) return;
        setRan(true)
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('username', username);
        formData.append('id', id );
    
        const option = {
          method: 'POST',
          body: formData,
        };
        try {
              const response = await fetch(`https://middlemanbackend.onrender.com/getPfp`, option);
              const data = await response.json()
              data&&navigate('/')
        }
        catch (err:any) {
          setErrorMsg(err)
        }
          
    }
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setSelectedFile(file);
        if (file) {
          const preview = URL.createObjectURL(file);
          setPreviewUrl(preview);
        } else {
          setPreviewUrl(null);
        }
      };

  return (
    <div  className="flex flex-col fixed items-center justify-center  bg-black  gap-7 w-full h-screen ">
        <form onSubmit={handSubmit} className='w-109 md:w-107 h-108 sm:h-107  lg:w-105 flex items-center flex-col justify-between lg:justify-start lg:gap-10 '>
          <div className="gap-5 sm:gap-7 lg:gap-10 flex flex-col items-center w-full">
            <div className="flex items-center flex-col gap-3">
            <div className='sm:w-20 relative overflow-hidden sm:h-20 w-14 h-14 rounded-full flex justify-center items-center text-white bg-purple'>
            {previewUrl && <img src={previewUrl} alt="Profile Preview" />}
                <div  className="absolute  flex justify-center items-center w-full h-full z-10 bg-transparent" >
                <input type="file" required accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} ref={fileInputRef}  />
                <FaCamera onClick={() => fileInputRef.current?.click()}/>
                </div>
            </div>
            <p className="text-white font-semibold lg:text-lg">Select a photo</p>
            </div>
            <input type="text" required className="w-full h-10 sm:h-12 lg:h-10 bg-black border border-solid  border-demotext  text-white outline-none rounded-lg placeholder:pl-1  pl-3 sm:py-1 placeholder:text-white" onChange={e=>{setUsername(e.target.value)}} value={username} placeholder="Enter a username"  />
            <select required className="outline-none w-full h-10 sm:h-12 lg:h-10 rounded-lg  text-white border border-solid border-demotext  bg-black px-3 placeholder-white">
                <option value="" disabled selected>Select gender</option>
                <option className="">Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
            </select>
          </div>
          <p className={`text-sm text-red-500 sm:text-base font-semibold ${errorMsg?.errorMessage?'visible':'invisible'} `}>{errorMsg?.errorMessage}</p>
          <button className="bg-purple text-white flex justify-center items-center  w-full rounded-lg h-10  sm:h-12 lg:w-108 xl:w-107">{!ran?`Continue`:<motion.div animate={{rotate:360}} transition={{duration:1,repeat: Infinity, ease: 'linear'}} className='' >                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 18V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.929 4.929L7.757 7.757" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.243 16.243L19.071 19.071" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18 12H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.929 19.071L7.757 16.243" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.243 7.757L19.071 4.929" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></motion.div>}
          </button>
        </form>
    </div>
  )
}

export default Details
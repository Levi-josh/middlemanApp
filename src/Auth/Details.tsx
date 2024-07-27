import { useState,FormEvent,useRef} from "react"
import { FaCamera } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const Details = () => {
    const navigate = useNavigate()
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [username, setUsername] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const option = {
              method: 'Post',
              headers: {
                  'content-type': 'application/json',
              },
              body:JSON.stringify({username})
        }
        try {
              const response = await fetch(` http://localhost:3500/details`, option);
              const data = await response.json()
              data && navigate('/')
        }
        catch (err) {
        console.log(err)
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
    <div  className="flex flex-col items-center justify-center  bg-black  gap-7 w-full h-screen ">
        <form onSubmit={handSubmit} className='w-109 md:w-107 h-108 sm:h-107  lg:w-106 xl:w-105 flex items-center flex-col gap-5 sm:gap-7 lg:gap-10'>
            <div className="flex items-center flex-col gap-3">
            <div className='sm:w-28 relative overflow-hidden sm:h-28 w-24 h-24 rounded-full flex justify-center items-center text-white bg-purple'>
            {previewUrl && <img src={previewUrl} alt="Profile Preview" />}
                <div  className="absolute  flex justify-center items-center w-full h-full z-10 bg-transparent" >
                <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} ref={fileInputRef}  />
                <FaCamera onClick={() => fileInputRef.current?.click()}/>
                </div>
            </div>
            <p className="text-white font-semibold lg:text-lg">Select a photo</p>
            </div>
            <input type="text" className="w-full h-10 sm:h-12 lg:h-10 bg-black border border-solid  border-demotext  text-white outline-none rounded-lg placeholder:pl-1  pl-3 sm:py-1 placeholder:text-white" onChange={e=>{setUsername(e.target.value)}} value={username} placeholder="Enter a username"  />
            
            <select className="outline-none w-full h-10 sm:h-12 lg:h-10 rounded-lg  text-white border border-solid border-demotext  bg-black px-3 placeholder-white">
                <option value="" disabled selected>Select gender</option>
                <option className="">Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
            </select>
          
            <button className="w-full h-10 bg-purple sm:h-12 lg:h-10 text-white rounded-lg">Continue</button>
        </form>
    </div>
  )
}

export default Details
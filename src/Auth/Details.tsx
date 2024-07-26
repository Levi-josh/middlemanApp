import { useState,FormEvent} from "react"
import { useNavigate } from "react-router-dom"

const Details = () => {
    const [text,setText]=useState("")
    const navigate = useNavigate()

    const handSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const option = {
              method: 'Post',
              headers: {
                  'content-type': 'application/json',
              },
              body:JSON.stringify({text})
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
  return (
    <div  className="flex flex-col items-center pt-24 bg-black  gap-7 w-full h-screen px-4">
        <form onSubmit={handSubmit} className='w-full flex items-center flex-col gap-5'>
            <div className='sm:w-28 relative overflow-hidden sm:h-28 w-24 h-24 rounded-full flex justify-center items-center text-white bg-purple'>
                <img/>
                <div  className="absolute  flex justify-center items-center w-full h-full z-10 bg-transparent">
                    <input type="file" />
                </div>
            </div>
            <input type="text" className="w-full h-10 bg-black border border-solid  border-demotext  text-white outline-none rounded-lg placeholder:pl-1  pl-3 sm:py-1 placeholder:text-white" onChange={e=>{setText(e.target.value)}} value={text} placeholder="Enter a username"  />
            
            <select className="outline-none w-full h-10 rounded-lg text-white border border-solid border-demotext  bg-black px-3">
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
            </select>
          
            <button className="w-full h-10 bg-purple text-white rounded-lg">Continue</button>
        </form>
    </div>
  )
}

export default Details
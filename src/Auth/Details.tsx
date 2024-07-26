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
              const response = await fetch(` http://localhost:3500/signup`, option);
              const data = await response.json()
              data && navigate('/')
        }
        catch (err) {
        console.log(err)
        }
          
    }
  return (
    <div  className="flex flex-col items-center pt-24 bg-black  gap-7 w-full h-full px-4">
        <form onSubmit={handSubmit} className='w-full flex items-center flex-col gap-5'>
            <div className='sm:w-28 sm:h-28 w-24 h-24 rounded-full flex justify-center items-center text-white bg-purple'>
                <img/>
            </div>
            <input type="text" className="w-full h-10 bg-black border border-solid  border-demotext  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white" onChange={e=>{setText(e.target.value)}} value={text} placeholder="Enter a username"  />
            <button>Continue</button>
        </form>
    </div>
  )
}

export default Details
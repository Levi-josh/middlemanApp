import { useSearchParams} from "react-router-dom"
const Overview2 = () => {
  const [searchParams] = useSearchParams();
  const loggedIn2 = searchParams.get('loggedIn');
console.log(`loggin:${loggedIn2}` )
return (
<div className=" w-full h-screen">
</div>
  )
}

export default Overview2
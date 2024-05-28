import { useNavigate } from "react-router-dom"

const SthirdParty = () => {
  const navigate = useNavigate()
  const continueVerification = ()=>{
    navigate('/market/verify')
  }
  return (
    <div className="w-full h-full px-4 pt-32 ">
      <div>
        <p className="text-white">You were choosen to be a thirdparty to this transaction by the seller.</p>
        <p className="text-white">Your work as a thirdparty for the seller is to deliver the products or goods for the seller,so when the receiver or buyer comes for the goods you are meant to ask him/her to verify on your device before collection.</p>
        <p className="text-white">Click on continue to verify the buyer.</p>
      </div>
      <button className="bg-purple text-white fixed bottom-14 w-103 rounded-full h-1005 right-4" onClick={continueVerification}>Continue</button>
      <button className=" text-white bg-black fixed bottom-14 w-103 rounded-full h-1005 left-4">Reject</button>
    </div>
  )
}

export default SthirdParty
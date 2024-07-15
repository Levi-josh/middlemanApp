

const BthirdParty = () => {
  return (
    <div className="w-full h-full px-4 pt-24  ">
      <div>
        <p className="text-white">You were choosen to be a thirdparty to this transaction by the buyer.</p>
        <p className="text-white">Your work as a thirdparty for the buyer is to receive the products or goods from the seller, but before that you are meant to verify in the sellers device to know if you are the right person.</p>
      </div>
      <button className="bg-purple text-white fixed bottom-14 w-103 rounded-full h-1005 right-4">Continue</button>
      <button className=" text-white bg-black fixed bottom-14 w-103 rounded-full h-1005 left-4">Reject</button>
    </div>
  )
}

export default BthirdParty
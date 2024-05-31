import { Outlet, useNavigate } from "react-router-dom"
import MktHearder from "../../Header/MktHearder"
import { useEffect } from "react"



const Market = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    const details = {
    buyOrSell: [
      { options: 'Buyer', choosen: false },
      { options: 'Seller', choosen: false},
      { options: 'SellThirdParty', choosen: false },
      { options: 'buyThirdParty', choosen: false },
    ],
    deals: {
      offer:[{options:'accept',choosen:true},{options:'reject',choosen:false}]
    },
    thirdOrSecond: [
      { options: 'secondParty', choosen: false },
      { options: 'thirdParty', choosen: false },
    ],
    complete:false
  }
    const choosen = details.buyOrSell.filter(prev=>prev.choosen == true)
    const agreement = details.deals.offer.filter(prev=>prev.choosen == true)
   
    if(choosen[0]?.options=='Buyer'&& Object.keys(details.deals).length === 0 && !details.complete){
      navigate('/market/pending')
    }
    if(choosen[0]?.options=='Buyer'&& Object.keys(details.deals).length > 0 && !details.complete){
      navigate('/market/buyer')
    }
    if(choosen[0]?.options=='Seller' && !details.complete){
      navigate('/market/seller')
    }
    if(choosen[0]?.options=='SellThirdParty' && !details.complete && !agreement.length){
      navigate('/market/SthirdParty')
    }
    if(choosen[0]?.options=='SellThirdParty' && !details.complete && agreement[0]?.options == 'accept'){
      navigate('/market/verify')
    }
    if(choosen[0]?.options=='buyThirdParty' && !details.complete){
      navigate('/market/buyer')
    }
    if(details.complete){
      navigate('/market/comfirmed')
    }
  },[])
  return (
    <div className="bg-black2 w-full h-screen fixed">
        <MktHearder/>
        <Outlet/>
    </div>
  )
}

export default Market
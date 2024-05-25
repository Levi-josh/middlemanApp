
import ChatHeader from "../../Header/ChatHeader"
import ChatFooter from "../../Footer/ChatFooter"
const Chatitems = () => {
  const chats = [{from:'josh',to:'vick',message:'Hwfa guy',msgTime:'5mins ago'},
  {from:'vick',to:'josh',message:'i dey i never see the money',msgTime:'5mins ago'},
  {from:'josh',to:'vick',message:'I know guy calm down i go give you the money just excesize little patieance',msgTime:'3mins ago'},
  {from:'vick',to:'josh',message:'shey i tell you say i need that money before thursday',msgTime:'2mins ago'},
  {from:'vick',to:'josh',message:'the person wey get am done the ask for am',msgTime:'2mins ago'},
  {from:'josh',to:'vick',message:'see wetin go happen i go come your shop before evening make i see if the stuff go fit come out',msgTime:'just now'},
]
  return (
    <div className="bg-black2 h-screen w-full  overflow-y-auto ">
    <ChatHeader/>
    <div className={`pt-24 gap-5 px-4 w-full h-full      `}>
      {chats.map(prev => <div className={`text-white ${prev.from=='josh'?'mr-0':'ml-0'} h-auto  mt-5 m-auto   w-auto max-w-56 bg-purple rounded-lg`}>
      <p>{prev.message}</p>
      <p className="">{prev.msgTime}</p>
    </div>)}
    </div>
    <ChatFooter/>
    </div>
  )
}

export default Chatitems
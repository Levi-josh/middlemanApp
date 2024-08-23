

interface FooterProps {
  goToSlide: (index: number) => void;
  fromChat:Boolean

}

const Footer:React.FC<FooterProps> = ({ goToSlide,fromChat }) => {
  return (
    <div className="text-white flex items-center justify-evenly w-full h-1008 lg:hidden bg-black fixed bottom-0 z-10">
        {/* <div className="absolute w-20 rounded-full h-1 bg-purple top-0"></div> */}
    <div className="flex flex-col items-center" onClick={()=>goToSlide(0)}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill={`${fromChat?'none':'white'}`} xmlns="http://www.w3.org/2000/svg">
    <path d="M3 10.5L12 3L21 10.5V19C21 19.5523 20.5523 20 20 20H15C14.4477 20 14 19.5523 14 19V14C14 13.4477 13.5523 13 13 13H11C10.4477 13 10 13.4477 10 14V19C10 19.5523 9.55228 20 9 20H4C3.44772 20 3 19.5523 3 19V10.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </div>
    <div className="flex flex-col items-center" onClick={()=>goToSlide(1)}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill={`${fromChat?'white':'none'}`} xmlns="http://www.w3.org/2000/svg">
  <path d="M21 15C21 16.1046 20.1046 17 19 17H7L3 21V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
    </div>
  )
}

export default Footer
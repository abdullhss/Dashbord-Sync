import React , {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai' 
import { FiShoppingCart } from 'react-icons/fi' 
import { BsChatLeft } from 'react-icons/bs' 
import { RiNotification3Line } from 'react-icons/ri' 
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import {Cart , Chat , Notification , UserProfile} from './Index'
import { useStateContext } from '../contexts/ContextProvider'

let NavBtn =  ({title , fun , color , dotColor , icone}) => {
  return(
    <TooltipComponent content={title} position = "BottomCenter">
      <button type="button" onClick={fun} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
        <span style={{background:dotColor}} className="absolute inline-flex rounded-full  h-2 w-2 right-2 top-2" />
          {icone}
      </button>
    </TooltipComponent>
  )
}
export default function Navbar() {
  const {activeMenu , setActiveMenu , isClicked , setIsClicked , handelClick ,screenSize ,setScreenSize , currentColor} = useStateContext() ; 
  useEffect(()=>{
    let handleRezise = () =>{
      setScreenSize(window.innerWidth)
    }
    window.addEventListener("resize" , handleRezise);
    handleRezise() ;

    return ()=>{ window.removeEventListener('resize' ,handleRezise)}
  } , [])
  useEffect(()=>{
    if(screenSize <= 900){
      setActiveMenu(false)
    }
    else{
      setActiveMenu(true)
    }
  } , [screenSize])
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavBtn title={"Menu"} fun={()=>{setActiveMenu( !activeMenu )}} color={currentColor} icone={<AiOutlineMenu/>} ></NavBtn>
      <div className="flex ">
        <NavBtn title={"Cart"} fun={()=>{handelClick("cart")}} color={currentColor} icone={<FiShoppingCart/>}></NavBtn>
        <NavBtn title={"Chat"} dotColor={"#03c9D7"} fun={()=>{handelClick("chat")}} color={currentColor} icone={<BsChatLeft/>}></NavBtn>
        <NavBtn title={"Notification"}  dotColor={"#03c9D7"} fun={()=>{handelClick("notification")}} color={currentColor} icone={<RiNotification3Line/>}></NavBtn>
        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={()=>{handelClick("userProfile")}}>
            <img src={avatar} className="rounded-full w-8 h-8" />
            <p><span className="text-gray-400 text-14">Hi,</span> <span className="text-gray-400 font-bold ml-1 text-14">Abdullah</span></p>
            <MdKeyboardArrowDown  className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.userProfile && <UserProfile/>}
        {isClicked.notification && <Notification/>}
      </div>

    </div>
  )
}

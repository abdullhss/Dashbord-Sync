import React from 'react'
import {Link , NavLink} from "react-router-dom" 
import {SiShopware} from "react-icons/si"
import {MdOutlineCancel} from "react-icons/md"
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {links} from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

export default function Sidebar() {
  const {activeMenu , setActiveMenu , screenSize ,currentColor } = useStateContext() ;
  const activeLink = "flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2"
  const normalLink = "flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2"
  
  const HandelColseSidebar = ()=>{
    if(activeMenu && screenSize > 900){
      setActiveMenu(false)
    }
  }

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 ">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={ HandelColseSidebar } className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900 " >
              <SiShopware/>
              <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter"> 
              <button type="button" onClick={()=>setActiveMenu((pre)=>!pre) } className="text-3xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                <MdOutlineCancel/>
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            {links.map((i)=>{
              return(
                <div kye={i.title}>
                  <p className="text-gray-400 m-3 mt-4 uppercase" >
                    {i.title}
                  </p>
                  {i.links.map((link)=>{
                    return(
                      <NavLink to={`/${link.name}`} kye={link.name} onClick={HandelColseSidebar} style={({isActive})=>(isActive ? {backgroundColor:currentColor} : {backgroundColor:""})} className={({isActive})=> isActive ? activeLink : normalLink  }>
                        {link.icon}
                        <span className="capitalize">{link.name}</span>
                      </NavLink>
                    )
                  })}
                </div>
            )})}
          </div>
        </>
      )}
    </div>
  )
}

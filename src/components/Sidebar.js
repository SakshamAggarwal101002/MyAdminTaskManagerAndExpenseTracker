import React,{useEffect} from 'react'
import {Link,NavLink} from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {links} from '../data/dummy';
import {useStateContext} from '../contexts/ContextProvider';
export default function Sidebar() {
  const {activeMenu,setActiveMenu,screenSize,currentColor} = useStateContext();
 const handleCloseSideBar =()=>{
  if(activeMenu && screenSize <=900){
    setActiveMenu(false);
  }
 }
  const activeLink =`flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-900 font-extrabold text-md m-2 `;
  const normalLink ='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray hover:text-indigo-600 m-2';
  
  return (
    <div class ="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto">
      {
        activeMenu && (<>
        <div class ="flex justify-between items-center">
         <Link to="/" onClick ={handleCloseSideBar}
         class ="items-center gap-3 ml-3 mt-4 flex text-2xl font-extrabold tracking-tight dark:text-white text-slate-900"
         >
          <div style ={{color:`${currentColor}`}}><SiShopware/> </div>
          <span>Shoppy</span>
         </Link>
         <TooltipComponent content="Menu" position ="BottomCenter">
          <button type="button" onClick ={()=>setActiveMenu(
            (prevActiveMenu)=>
              !prevActiveMenu
          )} class ="text-xl
          rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
          >
            <MdOutlineCancel/>
          </button>
         </TooltipComponent>
        </div>
        <div class ="mt-10 mb-10">
          {links.map((item)=>(
            <div key ={item.title}>
              <p class =" m-3 mt-4 uppercase" style ={{color:`${currentColor}`}}>
                {item.title}
              </p>
              {item.links.map((Link)=>(
                <NavLink to={`/${Link.name}`}
                key ={Link.name}
                onClick ={handleCloseSideBar}
                className ={({ isActive })=> isActive ? activeLink :normalLink}
                style ={({isActive})=>({backgroundColor : isActive ?currentColor : ''})}
                >
                {Link.icon}
                <span class ="capitalize">
                  {Link.name}
                </span>
                </NavLink>
              ))}
            </div>
          ))
          }
        </div>
        </>)
      }
    </div>
  )
}

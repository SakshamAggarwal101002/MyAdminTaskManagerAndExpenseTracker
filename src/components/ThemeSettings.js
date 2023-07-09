import React from 'react'
import {MdOutlineCancel} from 'react-icons/md';
import {BsCheck} from 'react-icons/bs';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {themeColors} from '../data/dummy';
import {useStateContext} from '../contexts/ContextProvider';
export default function ThemeSettings() {
  const {setColor,setMode,currentMode,currentColor,setThemeSettings} =useStateContext();
  return (
    <div class ="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div class =" float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484852] w-400" >
      <div class ="flex items-center justify-between  p-4 ml-4" >
      <p class ="font-bold text-xl">
       Settings
      </p>
      <button 
      type ="button"
      onClick ={()=>setThemeSettings(false)}
      class ="rounded-[50%] text-gray-500 dark:text-gray-300 text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray dark:hover:text-gray-900"
      >
      <MdOutlineCancel/>
      </button>
      </div>
      <div class ="flex-col border-4 border-color p-4
      dark:border-white ml-4 mr-4">
      <p class ="font-semibold text-lg">
       Theme Options
      </p>
      <div class ="mt-4">
        <input
        type="radio"
        id="light"
        name ="theme"
        value ="Light"
        class =" cursor-pointer"
        checked ={currentMode ==='Light'}
        onClick ={()=>setMode('Light')}
        />
        <label  htmlFor="Light"
        class ="ml-2 text-md cursor-pointer"
        >
         Light
        </label>
      </div>
      <div class ="mt-4">
        <input
        type="radio"
        id="dark"
        name ="theme"
        value ="Dark"
        class =" cursor-pointer"
        checked ={currentMode ==='Dark'}
        onClick ={()=>setMode('Dark')}
       
        />
        <label  htmlFor="Dark"
        class ="ml-2 text-md cursor-pointer"
        >
         Dark
        </label>
      </div>
      </div>
      <div class ="flex-col border-4 border-color
      dark:border-white p-4 ml-4 mr-4 mt-2">
      <p class ="font-semibold text-lg">
       Theme Colors
      </p>
      <div class ="flex gap-3">
          {themeColors.map((item,index)=>(
            <TooltipComponent
            key ={index}
            content ={item.name}
            position ="TopCenter"
            >
              <div class ="relative mt-4 cursor-pointer flex gap-5 items-center">
                <button
                type ="button"
                class = {`h-10 w-10 rounded-full
                cursor-pointer
                `}
                value ={item.color}
                style ={{backgroundColor:item.color}}
                onClick ={setColor}
                >
                  <BsCheck class ={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block':'hidden'}`}
                  />
                </button>
              </div>
            </TooltipComponent>
          ))

          }
      </div>
      </div>
      </div>
    </div>
  )
}

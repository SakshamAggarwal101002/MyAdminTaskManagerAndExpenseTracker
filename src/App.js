import React,{useEffect} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {Navbar,Footer,Sidebar,ThemeSettings} from './components/index.js';
import {Ecommerce,Orders,Calendar,Employees,Customers,Kanban,Area,ColorPicker,Editor,Line} from './pages/index.js';
import './App.css';
import {useStateContext} from './contexts/ContextProvider';
function App() {
  const {activeMenu,setActiveMenu,themeSettings,setThemeSettings,currentColor,currentMode} = useStateContext();

  return (
    <BrowserRouter>
   <div class ={currentMode ==='Dark' ? 'dark' :''}>
    <div class ="flex relative dark:bg-main-dark-bg  " >
<div class ="fixed right-4 bottom-4" style ={{zIndex: '1000'}}>
<TooltipComponent content= "Settings" position ="top">
<button type ="button" class="text-3x1 p-3 hover:drop-shadow-x1 hover:bg-light-gray text-white"
style ={{ background:`${currentColor}`,
borderRadius : '50%'}}
onClick={() =>setThemeSettings(true)}
>
  <FiSettings/>
</button>
</TooltipComponent>
</div>
    {activeMenu ? (
    <div class ="w-72 fixed sidebar  dark:bg-secondary-dark-bg bg-white" >
      <Sidebar/>
    </div>
      ):(
      <div class ="w-0 dark:bg-secondary-dark-bg">
        <Sidebar/>
      </div>
      )}
      <div class ={
        activeMenu ? 'dark:bg-main-bg bg-main-bg min-hscreen md:ml-72 w-full' : 'dark:bg-main-bg bg-main-bg min-hscreen flex-2 w-full'
      }>
     
      <div class ="static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
        <Navbar/>
      </div>
      <div>
       {themeSettings && <ThemeSettings/>}
        <Routes>
          {/* dashboard */ }
          <Route path ="/" element ={<Ecommerce/>}/>
          <Route path ="/ecommerce" element ={<Ecommerce/>}/>
           {/* pages */ }
          <Route path ="/orders" element ={<Orders/>}/>
          <Route path ="/employees" element ={<Employees/>}/>
          <Route path ="/customers" element ={<Customers/>}/>
           {/* apps */ }
          <Route path ="/kanban" element ={<Kanban/>}/>
          <Route path ="/editor" element ={<Editor/>}/>
          <Route path ="/calendar" element ={<Calendar/>}/>
          <Route path ="/color-picker" element ={<ColorPicker/>}/>
          {/* charts */}
          <Route path ="/line" element ={<Line/>}/>
          <Route path ="/area" element ={<Area/>}/>
         
        </Routes>
        </div>
      </div>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App


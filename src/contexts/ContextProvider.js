import React, {createContext,useState,useContext} from 'react';
const StateContext = createContext();
const initialState ={
    chat:false,
    cart:false,
    userProfile : false,
    notification : false,
}
export const ContextProvider =({children}) => {
    const [activeMenu,setActiveMenu] =useState(false);
    const [isClicked,setIsClicked] =useState(initialState);
    const [screenSize,setScreenSize] =useState(undefined);
    const handleClick =(clicked)=>{
        setIsClicked({...initialState,[clicked]:true});
    }
    const [currentColor,setCurrentColor]=useState('#03C9D7');
    const [currentMode,setCurrentMode]=useState('Light');
    const [themeSettings,setThemeSettings]=useState(false);
    const setMode =(e)=>{
        setCurrentMode(e);
      
        localStorage.setItem('theme',e);
setThemeSettings(false);
console.log(currentMode);
    }
    const setColor =(e)=>{
        setCurrentColor(e.target.value);
        localStorage.setItem('colorMode',e.target.value);
        setThemeSettings(false);
        console.log(currentColor);
    }
    return (
        <StateContext.Provider
        value ={{activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize,currentColor,currentMode,themeSettings,setThemeSettings,setMode,setColor}}>
         {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);
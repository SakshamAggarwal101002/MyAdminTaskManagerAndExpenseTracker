import React from 'react'
import {useStateContext} from '../contexts/ContextProvider';
const Header = ({category,title}) => {
  const {currentColor} =useStateContext();
  return (
    <div class ="mb-10">
      <p class ="text-gray-900 font-bold">
        {category}
      </p>
      <p class ="text-3xl font-extrabold tracking-tight" style ={{color:currentColor}}>
        {title}
      </p>
    </div>
  )
}

export default Header


import React from 'react'
import {BsCurrencyDollar} from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';
import {Stacked,Pie,Button,SparkLine} from '../components';
import {earningData,SparklineAreaData,ecomPieChartData} from '../data/dummy';
import {useStateContext} from '../contexts/ContextProvider';
import photo from '../data/welcome-bg.svg';
export default function Ecommerce() {
  const {currentColor} =useStateContext();
  return (
    <div class ="mt-12">
      <div class ="lg:flex-nowrap justify-center">
       <div style ={{backgroundImage: `url(${photo})`,}} class =" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full pl-5  pt-9 m-3  bg-hero-pattern bg-no-repeat bg-cover bg-center">
      
       <div class ="flex justify-between items-center">
        <div>
         <p class ="font-bold text-gray-400 w-full">
         Earnings
         </p>
         <p class ="text-2xl">$100377
         </p>
         </div>
        </div>
    
        <div class ="mt-6 w-full">
         <Button color="white"
         bgColor={currentColor}
         text="Download"
         borderRadius="10px"
         size="md"
         />
        </div>
       </div>
       <div class ="flex m-4 flex-wrap justify-center gap-1 items-center">
        {earningData.map((item)=>(
          <div key ={item.title}
          class ="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
          >
          <button type ="button"
          style ={{color: item.iconColor,
          backgroundColor: item.iconBg}}
          class ="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
          >
          {item.icon}
          </button>
          <p class ="mt-3">
           <span class ="text-lg font-semibold">
            {item.amount}
           </span>
           <span class ={`text-sm text-${item.pcColor} ml-2`}>
            {item.percentage}
           </span>
          </p>
          <p class ="text-sm text-gray-400 mt-1">
           {item.title}
          </p>
            </div>
        ))}
       </div>
      </div>
      <div class ="flex gap-10 m-10 flex-wrap justify-center">
        <div class ="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  p-4 rounded-2xl md:w-780">
         <div class ="flex justify-between">
          <p class ="font-semibold text-xl" style ={{color:`${currentColor}`}}>Revenue Updates</p> 
          <div class ="flex items-center gap-4">
          <p class ="flex items-center gap-2 text-red-600 hover:drop-shadow-xl">
            <span>
              <GoPrimitiveDot/>
            </span>
            <span>
              Expense
            </span>
          </p>
          <p class ="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
            <span>
              <GoPrimitiveDot/>
            </span>
            <span>
              Budget
            </span>
          </p>
         
         </div>
        </div>
        <div class ="mt-10 flex gap-10 flex-wrap justify-center">
        <div class ="border-r-1 border-color m-4 pr-10">
      <div>
        <p>
          <span class ="text-3xl font-semibold">
       $10987
          </span>
          <span class ="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-600 400 text-xs ml-3">
            67%
          </span>
        </p>
        <p class ="text-gray-500 mt-1">
          Budget</p>
      </div>
      <div class ="mt-8">
        <p>
          <span class ="text-3xl font-semibold">
       $5675
          </span>
        </p>
        <p class ="text-gray-500 mt-1">
          Expense</p>
      </div>
      <div class ="mt-5">
        <SparkLine
       currentColor ={currentColor}
        id="line-sparkline"
        type ="Line"
        height ="80px"
        width ="250px"
        data ={SparklineAreaData}
        color ={currentColor}
        ></SparkLine>
      </div>
      <div class ="mt-10">
        <Button color="white"
        bgColor={currentColor}
        text="Download Report"
        borderRadius="10px"
        >
        </Button>
      </div>
        </div>
        <div>
        <Stacked
        width="320px"
        height="360px"
        />
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

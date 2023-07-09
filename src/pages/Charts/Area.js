import React from 'react'
import {Header} from '../../components'
import {ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,DateTime,Legend,SplineAreaSeries} from '@syncfusion/ej2-react-charts';
import {areaCustomSeries,areaPrimaryXAxis,areaPrimaryYAxis} from '../../data/dummy';
import {useStateContext} from '../../contexts/ContextProvider';
export default function Area() {
  const {currentMode} =useStateContext();
  return (
    <div class ="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg- rounded-3xl">
    <Header category ="Chart" title ="Inflation Rate In Percentage"/>
    <div class ="w-full">
    <ChartComponent
    id ="area-chart"
    height ="420px"
    primaryXAxis ={areaPrimaryXAxis}
    primaryYAxis ={areaPrimaryYAxis}
    chartArea ={{border:{width:4}}}
    tooltip ={{enable:true}}
    // background ={currentMode ==='Dark'? '#33373E':'#fff'}
    >
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item,index)=>
        <SeriesDirective key={index} {...item} />
        )}
      </SeriesCollectionDirective>
      <Inject services={[DateTime,Legend,SplineAreaSeries]} />
    </ChartComponent>
    </div>
  </div>
  )
}

import React from 'react'
import {ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,LineSeries,DateTime,Legend,Tooltip} from '@syncfusion/ej2-react-charts';
import {lineCustomSeries,LinePrimaryXAxis,LinePrimaryYAxis} from '../../data/dummy';
import {useStateContext} from '../../contexts/ContextProvider';
export default function LineChart() {
  const {currentMode} =useStateContext();
  return (
    <ChartComponent
    id ="line-chart"
    height ="420px"
    primaryXAxis ={LinePrimaryXAxis}
    primaryYAxis ={LinePrimaryYAxis}
    chartArea ={{border:{width:4}}}
    tooltip ={{enable:true}}
    // background ={currentMode ==='Dark'? '#33373E':'#fff'}
    >
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item,index)=>
        <SeriesDirective key={index} {...item} />
        )}
      </SeriesCollectionDirective>
      <Inject services={[LineSeries,DateTime,Legend,Tooltip]} />
    </ChartComponent>
  )
}

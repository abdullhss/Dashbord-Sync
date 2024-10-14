import React from 'react'
import { ChartComponent , SeriesCollectionDirective , SeriesDirective , Inject , DateTime , Legend , Tooltip, LineSeries, SplineAreaSeries } from '@syncfusion/ej2-react-charts'
import { areaCustomSeries , areaPrimaryXAxis , areaPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import {Header} from "../../components/Index"
export default function Area() {
  const {currentMode} = useStateContext() ;

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category={"Area"} title={"Inflation Rate"}/>
      <div className='w-full'>
      <ChartComponent
      id='area-chart'
      height='420px'
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      chartArea={{border:{width:0}}}
      tooltip={{enable:true}}
      background={currentMode == "Dark" ? "#33373E" : "#FFF"}
      >
        <Inject services={[DateTime , Legend , SplineAreaSeries]}/>
        
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item , idx)=><SeriesDirective key={idx} {...item}/>)}
        </SeriesCollectionDirective>

      </ChartComponent>
      </div>
      </div>
  )
}

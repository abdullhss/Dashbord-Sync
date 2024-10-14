import React from 'react'
import { ChartComponent , SeriesCollectionDirective , SeriesDirective , Inject , DateTime , Legend , Tooltip, LineSeries } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries , LinePrimaryXAxis , LinePrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

export default function Line() {
  const {currentMode} = useStateContext() ;
  return (
    <div>
      <ChartComponent
      id='line-chart'
      height='420px'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{border:{width:0}}}
      tooltip={{enable:true}}
      background={currentMode == "Dark" ? "#33373E" : "#FFF"}
      >
        <Inject services={[DateTime , Legend , Tooltip , LineSeries]}/>
        
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item , idx)=><SeriesDirective key={idx} {...item}/>)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

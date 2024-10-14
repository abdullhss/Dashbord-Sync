import React from 'react'
import { ChartComponent , SeriesCollectionDirective ,SeriesDirective , Inject , Legend , Category , StackingColumnSeries , Tooltip } from '@syncfusion/ej2-react-charts' 
import { stackedPrimaryXAxis , stackedPrimaryYAxis  , stackedCustomSeries } from '../../data/dummy'

export default function Stacked({width , height}) {
  return (
    <ChartComponent 
      width={width}
      height={height}
      id='charts'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{border:{width:0}}}
      tooltip={{enable:true}}
      legendSettings={{background:"white"}}
      >
      <Inject services={[Legend , Category , StackingColumnSeries , Tooltip]} />
      
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((ele , idx)=> <SeriesDirective key={idx} {...ele}/> )}
      </SeriesCollectionDirective>
    </ChartComponent>
)
}

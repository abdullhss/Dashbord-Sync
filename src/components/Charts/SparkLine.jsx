import React from 'react'
import {SparklineComponent , Inject , SparklineTooltip} from "@syncfusion/ej2-react-charts"
export default function SparkLine({ currentColor, id , type , height , width , data , color}) {
  console.log(id , height , width , color , currentColor , data , type );
  
  return (
    <SparklineComponent
    id={id}
    height = {height}
    width = {width}
    lineWidth = {1}
    valueType="Numeric"
    fill={color}
    border = {{color:currentColor , width:2}}
    dataSource = {data}
    xName = "x"
    yName = "y"
    type={type}
    tooltipSettings={{
      visible: true,
      format: 'x = ${x} : y = ${y}',
      trackLineSettings:{
        visible:true
      }
    }}
    >
      <Inject services = {[SparklineTooltip]} ></Inject>
    </SparklineComponent>
  )
}

import React from 'react'
import {GridComponent , ColumnsDirective , ColumnDirective , Page ,Search , Edit  , Inject , Toolbar , Selection , Sort , Filter } from "@syncfusion/ej2-react-grids"
import {customersData , customersGrid } from "../data/dummy"
import {Header} from "../components/Index"

export default function Customers() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Customers" category="Page"/> 
      <GridComponent dataSource={customersData} allowPaging toolbar={["Search" , "Delete"]} editSettings={{allowDeleting :true , allowEditing:true}} width="auto" allowSelection allowSorting >
        <ColumnsDirective>
          {customersGrid.map((item , idx )=><ColumnDirective key={idx} {...item}/>)}
        </ColumnsDirective>
        <Inject services={[ Page  ,  Search , Toolbar , Edit , Selection , Sort , Filter]}/> 
      </GridComponent>
    </div>
  )
}

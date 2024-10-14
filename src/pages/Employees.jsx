import React from 'react'
import {GridComponent , ColumnsDirective , ColumnDirective , Page ,Search , Edit , Inject , Toolbar} from "@syncfusion/ej2-react-grids"
import {employeesData , employeesGrid } from "../data/dummy"
import {Header} from "../components/Index"

export default function Employees() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <Header title="Employees" category="Page"/> 
      <GridComponent dataSource={employeesData} allowPaging toolbar={["Search"]} width="auto">
        <ColumnsDirective>
          {employeesGrid.map((item , idx )=><ColumnDirective key={idx} {...item}/>)}
        </ColumnsDirective>
        <Inject services={[ Page  ,  Search , Toolbar]}/> 
      </GridComponent>

    </div>
  )
}

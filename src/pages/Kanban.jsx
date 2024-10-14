import React from 'react'
import { KanbanComponent , ColumnDirective , ColumnsDirective, Inject } from '@syncfusion/ej2-react-kanban'
import {Header} from '../components/Index'
import { kanbanData , kanbanGrid } from '../data/dummy'

export default function Kanban() {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Kanpan" />

      <KanbanComponent 
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{contentField:"Summary" , headerField:"Id"}}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item , idx)=><ColumnDirective key={idx} {...item}/>)}
        </ColumnsDirective>
        
        <Inject />
      </KanbanComponent>
    </div>
  )
}

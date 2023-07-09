import React from 'react'
import {GridComponent,ColumnsDirective,ColumnDirective,Page,Inject,Toolbar,Edit,Sort,Filter,Selection} from'@syncfusion/ej2-react-grids';
import {customersData,customersGrid} from '../data/dummy';
import {Header} from '../components';
const Customers = () => {
  return (
    <div class ="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl" >
      <Header category="Page" title ="Customers"/>
      <GridComponent
      id="gridcompcustomers"
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings ={{allowDeleting:true,
      allowEditing:true}}
      >
        <ColumnsDirective>
        {
          customersGrid.map((item,index)=>
          <ColumnDirective key={index} {...item}/>
          )
        }
        </ColumnsDirective>
      <Inject services={[Page,Toolbar,Selection,Sort,Filter,Edit]}/>
      </GridComponent>
    </div>
  )
}

export default Customers



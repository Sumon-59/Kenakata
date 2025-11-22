import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Sort,
  Search,
  Filter,
  Inject,
} from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid ,contextMenuItems} from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="page" title="Employees" />

      <GridComponent
        dataSource={employeesData}
        allowPaging={true}
        allowSorting={true}
        contextMenuItems={contextMenuItems}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[ Page, Search , Filter, Sort ]}
        />
      </GridComponent>
    </div>
  );
};

export default Employees;

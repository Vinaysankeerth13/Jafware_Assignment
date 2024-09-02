import React, { useState } from 'react';
import Widget from './Widget';
import { dummyData } from '../utils/data';

const Dashboard = () => {
 
  const [selectedMonth, setSelectedMonth] = useState('January');


  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };


  const filteredData = dummyData.filter(item => item.month === selectedMonth);

  return (
    <div className="p-4 text-orange bg-offwhite">
     
      <div className="mb-4">
        <label htmlFor="month" className="mr-2 text-black">Month:</label>
        <select
          id="month"
          value={selectedMonth}
          onChange={handleMonthChange}
          className="p-2 border rounded-md"
        >
        
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>


      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map(item => (
          <Widget
            key={item.id}
            title={item.title}
            value={item.value}
            type={item.type}
            data={item.data}
            categories={item.categories}
            month={item.month}
          />
        ))}
      </main>
    </div>
  );
};

export default Dashboard;

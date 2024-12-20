import React from 'react';

const BarChart = () => {
    const data = [
      { month: 'Jan', sales: 4000 },
      { month: 'Feb', sales: 3000 },
      { month: 'Mar', sales: 5000 },
      { month: 'Apr', sales: 2780 },
      { month: 'May', sales: 1890 },
      { month: 'Jun', sales: 2390 },
    ];
}

return (
    <div className="BarChart Image">
      <h2 className="BarChart Image Title">Monthly Sales</h2>
      <Chart type="bar" data={data} options={options} />
    </div>
  );

export default BarChart;

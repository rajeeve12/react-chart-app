import React from 'react';

const LineChart = () => {
    const data = [
      { month: 'Jan', profits: 2200 },
      { month: 'Feb', profits: 1250 },
      { month: 'Mar', profits: 2800 },
      { month: 'Apr', profits: 1500 },
      { month: 'May', profits: 900 },
      { month: 'Jun', profits: 1400 },
    ];

  
    return (
      <div className="w-full h-64">
        <h2 className="text-xl font-semibold mb-4">Monthly Profits</h2>
        <Chart type="line" data={data} options={options} />
      </div>
    );
  };
  
  export default LineChart;
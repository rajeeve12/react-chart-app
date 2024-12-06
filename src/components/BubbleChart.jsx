import React from 'react';
const BubbleChart = () => {
    const data = [
      { sales: 4000, profits: 2100, expenses: 1000, name: 'Jan' },
      { sales: 3000, profits: 1800, expenses: 1200, name: 'Feb' },
      { sales: 5000, profits: 2800, expenses: 1300, name: 'Mar' },
      { sales: 2780, profits: 1500, expenses: 1400, name: 'Apr' },
      { sales: 1890, profits: 900, expenses: 1100, name: 'May' },
      { sales: 2390, profits: 1400, expenses: 1500, name: 'Jun' },
    ];
}
return (
    <div className="BubbleChart Image">
      <h2 className="BubbleChart Image Sales">Sales, Profits, and Expenses Overview</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BubbleChart
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
        </BubbleChart>
      </ResponsiveContainer>
    </div>
  );
export default BubbleChart;

   
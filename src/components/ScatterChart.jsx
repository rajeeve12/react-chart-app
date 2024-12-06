import React from 'react';

const ScatterPlot = () => {
    const data = [
      { expenses: 1000, profits: 2100, name: 'Jan' },
      { expenses: 1200, profits: 1800, name: 'Feb' },
      { expenses: 1300, profits: 2800, name: 'Mar' },
      { expenses: 1400, profits: 1500, name: 'Apr' },
      { expenses: 1100, profits: 900, name: 'May' },
      { expenses: 1500, profits: 1400, name: 'Jun' },
    ];}


    return (
        <div className="w-full h-64">
          <h2 className="text-xl font-semibold mb-4">Expenses vs. Profits</h2>
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
            >
        </ScatterChart>
        </ResponsiveContainer>
        </div>
      );


export default ScatterPlot;

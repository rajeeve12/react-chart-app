import React from "react";

const data = [
    { name: 'Jan', sales: 4000, revenue: 2400 },
    { name: 'Feb', sales: 3000, revenue: 1398 },
    { name: 'Mar', sales: 2000, revenue: 9800 },
  ];

  const Chart = ({ type = 'line', data = [], options = {} }) => {
    const chartRef = useRef(null);
  
//Initializing chart
    useEffect(() => {
      return () => {
        if (chartRef.current) {
          chartRef.current = null;
      }}})}

      const renderChart = () => {
        const commonProps = {
          width: options.width || '100%',
          height: options.height || 400,
          data: data,
          margin: options.margin || { top: 20, right: 30, left: 20, bottom: 5 }
        };
    }
        return <div>Unsupported chart type: {type}</div>;
    

      export default Chart;


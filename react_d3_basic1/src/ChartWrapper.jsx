// NOTE - This is a Chart Wrapper File which is going to be a React Component to render D3 Code
import { useState, useEffect, useRef } from 'react';

import D3Chart from './D3Chart';

const ChartWrapper = () => {
  const chartArea = useRef(null);
  const [chart] = useState(null);

  useEffect(() => {
    // creating an instance of D3Chart &
    // passing 'div' element here which lets us attach our D3 elements onto this div in our D3Chart.js file
    if (!chart) new D3Chart(chartArea.current);
  }, [chart]);

  return <div ref={chartArea}>Chart Wrapper</div>;
};

export default ChartWrapper;

// NOTE - This is a Chart Wrapper File which is going to be a React Component to render D3 Code
import { useEffect, useRef } from 'react';

import D3Chart from './D3Chart';

const ChartWrapper = () => {
  const chartArea = useRef(null);

  useEffect(() => {
    // creating an instance of D3Chart &
    // passing 'div' element here which lets us attach our D3 elements onto this div from our D3Chart.js file
    new D3Chart(chartArea.current);
  }, []);

  return <div ref={chartArea}></div>;
};

export default ChartWrapper;

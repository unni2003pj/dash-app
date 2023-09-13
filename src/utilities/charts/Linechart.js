import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import LineData from './linechart.json';

const LineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    setData(LineData)
    // fetch(LineData)
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    //   .catch((error) => {
    //     console.log('fetch data failed', error);
    //   });
      // console.log({LineData})
  };
  const config = {
    data,
    xField: 'month',
    yField: 'rate',
    seriesField: 'name',
    shadowBlur: 10,
    shadowOffsetX: 5,
    shadowOffsetY: 5,
    yAxis: {
      label: {
        formatter: (v) => `${(v)}`,
      },
    },
    legend: {
      position: 'top',
    },
    smooth: true,
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
    colorField: ['Success', 'Pending', 'Failed' ],// or seriesField in some cases
    color: ['#EA5455', '#FF9F43', '#28C76F'],
  };

  return <Line {...config} />;
};

// ReactDOM.render(<DemoLine />, document.getElementById('container'));

export default LineChart;
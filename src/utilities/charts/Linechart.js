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
  };

  const config = {
    data,
    height: 180,
    xField: 'month',
    yField: 'rate',
    seriesField: 'name',
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 1500,
      },
    },
    colorField: ['Success', 'Pending', 'Failed' ],
    color: ['#EA5455', '#FF9F43', '#28C76F'],
    legend: false,
  };

  return <Line {...config} />;
};

export default LineChart;
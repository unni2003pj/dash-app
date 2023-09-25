import React from 'react';
import { Bar } from '@ant-design/plots';

const Barchart = () => {
  const data = [
    {
      month: 'January',
      rate: 100,
    },
    {
      month: 'February',
      rate: 700,
    },
    {
      month: 'March',
      rate: 450,
    },
    {
      month: 'April',
      rate: 900,
    },
    {
      month: 'May',
      rate: 300,
    },
    {
      month: 'June',
      rate: 650,
    },
    
  ];
  const config = {
    data,
    height: 307,
    xField: 'rate',
    yField: 'month',
    seriesField: 'month',
    legend: false,
    color: ['#0081A7', '#00AFB9', '#F07167', '#9F86C0', '#619B8A', '#00B4D8'],
    barBackground: {
      style: {
        fill: '#000000',
        fillOpacity: 0.05,
        radius: 30,
      }
    },
    barStyle: {
      radius: [30, 30, 0, 0],
    },
  };

  return <Bar {...config} />;
};

export default Barchart;
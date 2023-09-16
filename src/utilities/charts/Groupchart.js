import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';
import ColumnData from './columndata.json';

const Groupchart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    setData(ColumnData)
  };

  const config = {
    data,
    height: 180,
    xField: 'city',
    yField: 'value',
    seriesField: 'type',
    isGroup: true,
    color: ['rgb(40 199 111 / 40%)', 'rgb(24 164 255 / 40%)', 'rgb(255 159 67 / 40%)', 'rgb(234 83 83 / 40%)'],
    columnStyle: {
      radius: [3, 3, 0, 0],
      lineDash: [1, 3],
    },
    legend: false,
  };

  return <Column {...config} />;
};

export default Groupchart;
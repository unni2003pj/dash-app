import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';
import LineData from './linechart.json';

const Groupchart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    setData(LineData)
    // fetch('https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json')
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    //   .catch((error) => {
    //     console.log('fetch data failed', error);
    //   });
  };
  const config = {
    data,
    xField: 'month',
    yField: 'rate',
    seriesField: 'name',
    lineWidth: 1,
    isGroup: true,
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
    color: ['#EA5455', '#FF9F43', '#28C76F'],
  };

  return <Column {...config} />;
};

// ReactDOM.render(<DemoColumn />, document.getElementById('container'));

export default Groupchart;
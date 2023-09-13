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
    // fetch('https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json')
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    //   .catch((error) => {
    //     console.log('fetch data failed', error);
    //   });
  };
  const config = {
    data,
    xField: 'city',
    yField: 'value',
    seriesField: 'type',
    isGroup: true,
    color: ['#28C76F', '#18A4FF', '#FF9F43', '#EA5455'],
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  };

  return <Column {...config} />;
};

// ReactDOM.render(<DemoColumn />, document.getElementById('container'));

export default Groupchart;
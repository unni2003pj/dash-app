import React from 'react';
import { Gauge } from '@ant-design/plots';

const Gaugechart = () => {
  const config = {
    height: 224,
    percent: 0.85,
    range: {
      color: 'l(0) 0:rgb(0 207 232 / 0%) 1:#00CFE8',
    },
    type: 'meter',  
    
    innerRadius: 0.77,
    indicator: false,
    
    statistic: {
      
      content: {
        offsetY: -85,
        style: {
          fontSize: '0.825em',
          lineHeight: '1.05em',
          color: 'rgba(75, 70, 92, 0.6)',
          whiteSpace: 'normal',
          maxWidth: '66px',
        },
        formatter: () => 'Complaint Resolution Rate',
      },
      title: {
        offsetY: -28,
        style: {
          fontSize: '1.35em',
          color: '#4B535E',
          fontWeight: '600',
          lineHeight: '1.8em',
          
        },
        formatter: () => '85%',
      },
    },
  };

  return <Gauge {...config} />;
};

export default Gaugechart;
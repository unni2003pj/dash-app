import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RingProgress } from '@ant-design/plots';

const Ringchart = (props) => {
  const config = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.6,
    color: [props.fgColor, props.bgColor],
    innerRadius: .75,
    radius: 0.98,
    content: {
      offsetY: -85,
      style: {
        fontSize: '13.2px',
        lineHeight: '16.8px',
        color: 'rgba(75, 70, 92, 0.6)',
        whiteSpace: 'normal',
        maxWidth: '66px',
      },
      formatter: () => 'Complaint Resolution Rate',
    },
    title: {
      offsetY: -28,
      style: {
        fontSize: '21.6px',
        color: '#4B535E',
        fontWeight: '600',
        lineHeight: '28.8px',
        
      },
      formatter: () => '85%',
    },
    
  };
  return <RingProgress {...config} />;
};

//ReactDOM.render(<DemoRingProgress />, document.getElementById('container'));

export default Ringchart;

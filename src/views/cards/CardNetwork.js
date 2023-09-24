import React from 'react';
import {Col, Row} from 'antd';
import {Card} from 'antd';
import Ringchart from '../../utilities/charts/Ringchart';

function CardNetwork() {

    return(

        <Card>
            <div className='card-panel-wrapper'>
                <div className='card-panel-header div-flex-between'>
                    <div className='card-panel-header-left'>
                        <h5>Network Experience</h5>
                    </div>
                    <div className='card-panel-header-right'>

                    </div>
                </div>
                <div className='card-panel-body'>
                    <Row gutter={[16, 16]} align="middle" className='mb-4'>
                        <Col lg={12} md={12} xs={24} span={12}>

                            <div className='network-block div-flex-center'>
                                <Ringchart fgColor={'#F20000'} bgColor={'#fbdddd'} />
                                <ul className="chart-denotation">
                                    <li className="failed">
                                        <label>No. of Dropped Calls</label>
                                    </li>
                                </ul>
                            </div>

                        </Col>
                        <Col lg={12} md={12} xs={24} span={12}>
                            <div className='signal-chart-block'>
                                <label><span>Fair</span> Network Quality</label>
                                <ul className='signal-chart'>
                                    <li className='active'>
                                        <span>20%</span>
                                    </li>
                                    <li className='active'>
                                        <span>40%</span>
                                    </li>
                                    <li className='active'>
                                        <span>60%</span>
                                    </li>
                                    <li>
                                        <span>80%</span>
                                    </li>
                                    <li>
                                        <span>100%</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Card>

    )

}

export default CardNetwork
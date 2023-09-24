import React from 'react';
import {Col, Row} from 'antd';
import {Card, Progress } from 'antd';
import Ringchart from '../../utilities/charts/Ringchart';
import {
    IconVoicesm
} from '../../utilities/Iconsheet';

function CardRingChart() {

    return(

        <Card className='p-0'>
            <div className='card-panel-wrapper'>
                <div className='card-panel-header div-flex-between'>
                    <div className='card-panel-header-left'>
                        <h5>Usage Details</h5>
                    </div>
                    <div className='card-panel-header-right'>
                        <div className='progress-block medium'>
                            <p>Overall Consumption Level</p>
                            <label>Medium</label>
                            <Progress percent={66} size="small" status="active" />
                        </div>
                    </div>
                </div>
                <div className='card-panel-body'>
                    <Row className='mb-2'>
                        <Col span={24} >
                            <div className='ring-chart-block'>
                                <Ringchart fgColor={'#FF9F43'} bgColor={'#fff0e1'} />
                                <div className='short-card horizontal-card'>
                                    <div className='figure-box div-flex-between mb-2'>
                                        <figure className='icon-box sandal round'>
                                            <IconVoicesm color="#FF9F43" /> Voice
                                        </figure>

                                    </div>
                                    <div className='short-card-details'>
                                        <ul className="short-card-status">
                                            <li>
                                                <p>2000 Min</p>
                                                <label>Total</label>
                                            </li>
                                            <li>
                                                <p>1000 Min</p>
                                                <label>Used</label>
                                            </li>
                                            <li>
                                                <p>1000 Min</p>
                                                <label>Balance</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col span={24} >
                            <div className='ring-chart-block'>
                                <Ringchart fgColor={'#28C76F'} bgColor={'#ddf6e8'} />
                                <div className='short-card horizontal-card'>
                                    <div className='figure-box div-flex-between mb-2'>
                                        <figure className='icon-box sandal round'>
                                            <IconVoicesm color="#FF9F43" /> Voice
                                        </figure>

                                    </div>
                                    <div className='short-card-details'>
                                        <ul className="short-card-status">
                                            <li>
                                                <p>2000 Min</p>
                                                <label>Total</label>
                                            </li>
                                            <li>
                                                <p>1000 Min</p>
                                                <label>Used</label>
                                            </li>
                                            <li>
                                                <p>1000 Min</p>
                                                <label>Balance</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} >
                            <div className='ring-chart-block'>
                                <Ringchart fgColor={'#18A4FF'} bgColor={'#daf0ff'} />
                                <div className='short-card horizontal-card'>
                                    <div className='figure-box div-flex-between mb-2'>
                                        <figure className='icon-box sandal round'>
                                            <IconVoicesm color="#FF9F43" /> Voice
                                        </figure>

                                    </div>
                                    <div className='short-card-details'>
                                        <ul className="short-card-status">
                                            <li>
                                                <p>2000 Min</p>
                                                <label>Total</label>
                                            </li>
                                            <li>
                                                <p>1000 Min</p>
                                                <label>Used</label>
                                            </li>
                                            <li>
                                                <p>1000 Min</p>
                                                <label>Balance</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24} >
                            <div className='ring-chart-more-info'>
                                <ul className="short-card-status">
                                    <li>
                                        <p>Average No. of Calls</p>
                                        <label>Per month</label>
                                    </li>
                                    <li>
                                        <p>120</p>
                                        <label>Total</label>
                                    </li>
                                    <li>
                                        <p>22</p>
                                        <label>International</label>
                                    </li>
                                    <li>
                                        <p>178</p>
                                        <label>Roaming</label>
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

export default CardRingChart
import React, {useState} from 'react';
import { Col, Row } from 'antd';
import { Card} from 'antd';
import Gaugechart from '../../utilities/charts/Gaugechart';
import {
    IconDispute,
    IconInteraction,
    IconProgress,
    IconInteractionLg,
    IconCallCenter,
    IconStability
} from '../../utilities/Iconsheet';


function CardGaugeChart() {

    return(

        <Card>
            <div className='card-panel-wrapper'>
                <div className='card-panel-header div-flex-between'>
                    <div className='card-panel-header-left'>
                        <h5>Customer Service Experience</h5>
                    </div>
                    <div className='card-panel-header-right'>
                    </div>
                </div>
                <div className='card-panel-body'>
                    <Row gutter={[16, 16]}>
                        <Col lg={12} xs={24} span={12}>
                            <Gaugechart />
                        </Col>
                        <Col lg={12} xs={24} span={12}>
                            <ul className='graph-note'>
                                <li>
                                    <figure className='icon-box sea-blue'>
                                        <IconInteraction/>
                                    </figure>
                                    <div className='graph-note-details'>
                                        <p>10 Minutes</p>
                                        <label>Last Interaction</label>
                                    </div>
                                </li>
                                <li>
                                    <figure className='icon-box sea-blue'>
                                        <IconProgress/>
                                    </figure>
                                    <div className='graph-note-details'>
                                        <p>20 Cases</p>
                                        <label>In Progress</label>
                                    </div>
                                </li>
                                <li>
                                    <figure className='icon-box sea-blue'>
                                        <IconDispute/>
                                    </figure>
                                    <div className='graph-note-details'>
                                        <p>12</p>
                                        <label>No. of Disputes</label>
                                    </div>
                                </li>
                                <li>
                                    <figure className='icon-box sea-blue'>
                                        <IconInteractionLg/>
                                    </figure>
                                    <div className='graph-note-details'>
                                        <p>No. of Disputes</p>
                                        <label>Mode of Interaction</label>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                        <Col span={24}>
                            <ul className='graph-note bordered'>
                                <li>
                                    <figure className='icon-box sea-blue'>
                                        <IconCallCenter/>
                                    </figure>
                                    <div className='graph-note-details'>
                                        <p>12 Calls</p>
                                        <label>Average No. of Call to Call Center Per Month</label>
                                    </div>
                                </li>
                                <li>
                                    <figure className='icon-box sea-blue'>
                                        <IconStability/>
                                    </figure>
                                    <div className='graph-note-details'>
                                        <p>Network Stability Issues</p>
                                        <label>Last Interaction Topic</label>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        </Card>

    )

}

export default CardGaugeChart
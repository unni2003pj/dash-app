import React, {useState} from 'react';
import { Col, Row } from 'antd';
import {Card, Tag } from 'antd';
import {
    CardOverlay,
    Iconfb,
    Icontw,
    Iconig,
    Iconyt
} from '../../utilities/Iconsheet';

function CardSocial() {

    return(

        <Card>
            <div className='short-card horizontal-card'>
                <div className='card-panel-header div-flex-between'>
                    <div className='card-panel-header-left'>
                        <h5>Digital Behaviour</h5>
                    </div>
                    <div className='card-panel-header-right'>
                        <button className='action-button'>
                            <Tag bordered={false} className='sea-blue'>Use E-bill</Tag>
                        </button>
                    </div>
                </div>
                <div className='short-card-details'>

                    <Row gutter={[16, 16]}>
                        <Col lg={12} md={12} xs={24} span={12}>
                            <div className='social-block'>
                                <p>Social Media Handles</p>
                                <ul className='social-media-list'>
                                    <li>
                                        <Iconfb color="#4B465C" />
                                    </li>
                                    <li>
                                        <Icontw color="#4B465C" />
                                    </li>
                                    <li>
                                        <Iconig color="#4B465C" />
                                    </li>
                                    <li>
                                        <Iconyt color="#4B465C" />
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={12} md={12} xs={24} span={12}>
                            <div className='social-block'>
                                <p>Area of Interest</p>
                                <Tag bordered={false} className='sea-blue'>Sports Person, Influencer</Tag>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='card-overlay'>
                <CardOverlay color="#18A4FF" />
            </div>
        </Card>

    )

}

export default CardSocial
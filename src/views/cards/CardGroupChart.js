import React, {useState} from 'react';
import {Card, Select } from 'antd';
import Groupchart from '../../utilities/charts/Groupchart';

function CardGroupChart() {

    return(

        <Card>
            <div className='card-panel-wrapper'>
                <div className='card-panel-header div-flex-between chart-mob'>
                    <div className='card-panel-header-left'>
                        <h5>Complaint Details</h5>
                    </div>
                    <div className='card-panel-header-right'>
                        <div className='select-box'>
                            <Select defaultValue="Bar Graph" >
                                <option value="Line Graph">Line Graph</option>
                                <option value="Bar Graph">Bar Graph</option>
                                <option value="Gauge Graph">Gauge Graph</option>
                            </Select>
                        </div>
                        <div className='select-box'>
                            <Select defaultValue="Monthly" >
                                <option value="Monthly">Monthly</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Yearly">Yearly</option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className='card-panel-body'>
                    <ul className='chart-denotation'>
                        <li className='total'>
                            <p>259</p>
                            <label>Total</label>
                        </li>
                        <li className='success'>
                            <p>57</p>
                            <label>Sucess</label>
                        </li>
                        <li className='pending'>
                            <p>49</p>
                            <label>Sucess</label>
                        </li>
                        <li className='failed'>
                            <p>76</p>
                            <label>Sucess</label>
                        </li>
                    </ul>
                    <Groupchart />

                </div>
            </div>
        </Card>

    )

}

export default CardGroupChart
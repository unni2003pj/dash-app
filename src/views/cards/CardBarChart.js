import React from 'react';
import { Card, Select} from 'antd';
import Barchart from '../../utilities/charts/Barchart';
import {IconMore} from '../../utilities/Iconsheet';

function CardBarChart() {

    return(

        <Card>
            <div className='card-panel-wrapper'>
                <div className='card-panel-header div-flex-between'>
                    <div className='card-panel-header-left'>
                        <h5>Revenue and Billing</h5>
                    </div>
                    <div className='card-panel-header-right'>
                        <div className='select-box'>
                            <Select defaultValue="Last 6 Months" >
                                <option value="Last 3 Months">Last 3 Months</option>
                                <option value="Last 6 Months">Last 6 Months</option>
                                <option value="Last 9 Months">Last 9 Months</option>
                            </Select>
                        </div>
                        <button className='action-link'>
                            <IconMore color="#4B465C" />
                            <span>More Details</span>
                        </button>
                    </div>
                </div>
                <div className='card-panel-body'>

                    <Barchart />

                </div>
            </div>
        </Card>

    )

}

export default CardBarChart
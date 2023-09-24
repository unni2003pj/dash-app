import React from 'react';
import {Card, Tag} from 'antd';
import {
    IconMore,
    CardOverlay,
    IconInvoice
} from '../../utilities/Iconsheet';

function CardStatThree() {

    return(

        <Card>
            <div className='short-card horizontal-card'>
                <div className='div-flex-between mb-4'>
                    <figure className='icon-box sea-blue'>
                        <IconInvoice color="#00CFE8" />
                    </figure>
                    <button className='action-link'>
                        <IconMore color="#4B465C" />
                        <span>More Details</span>
                    </button>
                </div>
                <div className='short-card-details'>
                    <h5>$120</h5>
                    <ul className='short-card-status'>
                        <li>
                            <label>Last Invoice Generated on 27 Jun 2023</label>
                        </li>
                    </ul>
                    <div className='short-card-bottom div-flex-between'>
                        <p>Invoice Details</p>
                        <button>
                            <Tag bordered={false} className='olive-green'>Download</Tag>
                        </button>
                    </div>
                </div>
            </div>
            <div className='card-overlay'>
                <CardOverlay color="#00CFE8" />
            </div>
        </Card>

    )

}

export default CardStatThree
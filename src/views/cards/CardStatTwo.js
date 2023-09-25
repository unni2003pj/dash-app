import React from 'react';
import {Card, Progress} from 'antd';
import {
    CardOverlay,
    IconRate
} from '../../utilities/Iconsheet';

function CardStatTwo() {

    return(

        <Card>
            <div className='short-card horizontal-card'>
                <div className='div-flex-between mb-4'>
                    <figure className='icon-box sky-blue'>
                        <IconRate color="#18A4FF" />
                    </figure>
                    <div className='progress-block high'>
                        <label>High</label>
                        <Progress percent={90} size="small" status="active" />
                    </div>
                </div>
                <div className='short-card-details'>
                    <h5>80%</h5>
                    <ul className='short-card-status'>
                        <li>
                            <label>02 Feb 2022  to 02 Feb 2023</label>
                        </li>
                    </ul>
                    <div className='short-card-bottom div-flex-between'>
                        <p>Repurchasing rate</p>
                    </div>
                </div>
            </div>
            <div className='card-overlay'>
                <CardOverlay color="#46B6FF" />
            </div>
        </Card>

    )

}

export default CardStatTwo
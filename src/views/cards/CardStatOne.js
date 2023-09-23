import React, {useState} from 'react';
import {Card, Tag} from 'antd';
import {
    IconCall, 
    IconMail, 
    CardOverlay,
    IconAnnounce,
    IconMsglg

} from '../../utilities/Iconsheet';

function CardStatOne() {

    return(

        <Card>
            <div className='short-card horizontal-card'>
                <div className='div-flex-between mb-4'>
                    <figure className='icon-box olive-green'>
                        <IconAnnounce color="#28C76F" />
                    </figure>
                    <ul className='button-list'>
                        <li>
                            <button>
                                <IconCall color="#4B465C" />
                            </button>
                        </li>
                        <li>
                            <button>
                                <IconMail color="#4B465C" />
                            </button>
                        </li>
                        <li>
                            <button>
                                <IconMsglg color="#4B465C" />
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='short-card-details'>
                    <h5>$500 <span className='red-shade-text'>(-50%)</span></h5>
                    <ul className='short-card-status'>
                        <li>
                            <label>Customer Since 2020</label>
                        </li>
                    </ul>
                    <div className='short-card-bottom div-flex-between'>
                        <p>Customer Lifetime Value</p>
                        <button>
                            <Tag bordered={false} className='olive-green'>+ Add Offer</Tag>
                        </button>
                    </div>
                </div>
            </div>
            <div className='card-overlay'>
                <CardOverlay color="#28C76F" />
            </div>
        </Card>

    )

}

export default CardStatOne
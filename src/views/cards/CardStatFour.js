import React, {useState} from 'react';
import {Card, Tag} from 'antd';
import {
    IconCall, 
    IconMail, 
    IconMsglg,
    CardOverlay,
    IconBill,
} from '../../utilities/Iconsheet';

function CardStatFour() {

    return(

        <Card>
            <div className='short-card horizontal-card'>
                <div className='div-flex-between mb-4'>
                    <figure className='icon-box red-shade'>
                        <IconBill color="#EA5455" />
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
                    <h5>$80</h5>
                    <ul className='short-card-status'>
                        <li>
                            <label>Last Bill Date 01 Jul 2023</label>
                        </li>
                    </ul>
                    <div className='short-card-bottom div-flex-between'>
                        <p>Last Bill</p>
                        <button>
                            <Tag bordered={false} className='olive-green'>Pay Now</Tag>
                        </button>
                    </div>
                </div>
            </div>
            <div className='card-overlay'>
                <CardOverlay color="#EA5455" />
            </div>
        </Card>

    )

}

export default CardStatFour
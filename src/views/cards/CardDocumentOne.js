import React, {useState} from 'react';
import {Card} from 'antd';
import {
    IconAvatar
} from '../../utilities/Iconsheet';

function CardDocumentOne() {

    return(

        <Card>
            <div className='short-card horizontal-card'>
                <div className='div-flex-between mb-1'>
                    <figure className='icon-box blue-berry round'>
                        <IconAvatar color="#634CE3" />
                    </figure>
                </div>
                <div className='short-card-details'>
                    <h5>Identity Card</h5>
                    <ul className='short-card-status'>
                        <li>
                            <p>1234567890</p>
                            <label>02 Jul 2023</label>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>

    )

}

export default CardDocumentOne
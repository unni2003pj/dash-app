import React from 'react';
import {Card} from 'antd';
import {IconCard} from '../../utilities/Iconsheet';

function CardDocumentTwo() {

    return(

        <Card>
            <div className='short-card horizontal-card'>
                <div className='div-flex-between mb-1'>
                    <figure className='icon-box blue-berry round'>
                        <IconCard color="#634CE3" />
                    </figure>
                </div>
                <div className='short-card-details'>
                    <h5>GST Document</h5>
                    <ul className='short-card-status'>
                        <li>
                            <p>GSTIN 123 456 7890</p>
                            <label>02 Jul 2023</label>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>

    )

}

export default CardDocumentTwo
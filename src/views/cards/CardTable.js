import React, {useState} from 'react';
import {Table} from 'react-bootstrap';
import {Card} from 'antd';
import {
    IconMore

} from '../../utilities/Iconsheet';

function CardTable() {

    return(

        <Card className='p-0'>
            <div className='card-panel-wrapper'>
                <div className='card-panel-header div-flex-between'>
                    <div className='card-panel-header-left'>
                        <h5>Payment History</h5>
                    </div>
                    <div className='card-panel-header-right'>
                        <button className='action-link'>
                            <IconMore color="#4B465C" />
                            <span>More Details</span>
                        </button>
                    </div>
                </div>
                <div className='card-panel-body'>
                    <div className='scrollable'>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Transaction ID</th>
                                    <th>Payment Number</th>
                                    <th>Amount</th>
                                    <th>Payment Method</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>$130</td>
                                    <td></td>
                                    <td className='red-shade-text'>Unpaid</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>$130</td>
                                    <td></td>
                                    <td className='red-shade-text'>Unpaid</td>
                                </tr>
                                <tr>
                                    <td>14 May 2023</td>
                                    <td>ABC 1234567890</td>
                                    <td>SO12345</td>
                                    <td>$130</td>
                                    <td>Debit Card</td>
                                    <td className='olive-green-text'>Paid</td>
                                </tr>
                                <tr>
                                    <td>14 May 2023</td>
                                    <td>ABC 1234567890</td>
                                    <td>SO12345</td>
                                    <td>$130</td>
                                    <td>Debit Card</td>
                                    <td className='olive-green-text'>Paid</td>
                                </tr>
                                <tr>
                                    <td>14 May 2023</td>
                                    <td>ABC 1234567890</td>
                                    <td>SO12345</td>
                                    <td>$130</td>
                                    <td>Debit Card</td>
                                    <td className='olive-green-text'>Paid</td>
                                </tr>
                                <tr>
                                    <td>14 May 2023</td>
                                    <td>ABC 1234567890</td>
                                    <td>SO12345</td>
                                    <td>$130</td>
                                    <td>Debit Card</td>
                                    <td className='olive-green-text'>Paid</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </Card>

    )

}

export default CardTable
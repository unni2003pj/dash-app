import React, {useState} from 'react';
import { Card, Menu, Dropdown} from 'antd';
import {
    IconDotright,
    IconVoice,
} from '../../utilities/Iconsheet';

function CardVoice() {

    return(

        <Card>
            <div className='short-card'>
                <figure className='icon-box red-shade'>
                    <IconVoice color="#EA5455"/>
                </figure>
                <div className='short-card-details'>
                    <h5>12 Months Voice Pack</h5>
                    <p>Asset Number<span>0637230</span></p>
                    <ul className='short-card-status'>
                        <li>
                            <label>Status</label>
                            <p className='red-shade-text'>Suspended</p>
                        </li>
                        <li>
                            <label>Start Dat</label>
                            <p>12/02/2023</p>
                        </li>
                        <li>
                            <label>Validity Till</label>
                            <p>None</p>
                        </li>
                    </ul>
                    <button className='more-option-drop'>
                        <Dropdown
                            overlay={(
                            <Menu>
                                <Menu.Item key="0">Edit</Menu.Item>
                                <Menu.Item key="1">Delete</Menu.Item>
                                <Menu.Item key="2">Preview</Menu.Item>
                            </Menu>
                            )}
                            trigger={['click']}>
                            <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <IconDotright color="#4B465C"/>
                            </span>
                        </Dropdown>
                    </button>
                </div>
            </div>
        </Card>

    )

}

export default CardVoice
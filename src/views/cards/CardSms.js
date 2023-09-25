import React from 'react';
import {Card, Menu, Dropdown } from 'antd';
import {
    IconDotright,
    IconMsglg
} from '../../utilities/Iconsheet';

function CardSms() {

    return(

        <Card>
            <div className='short-card'>
                <figure className='icon-box'>
                    <IconMsglg color="#4B465C"/>
                </figure>
                <div className='short-card-details'>
                    <h5>100 SMS Pack</h5>
                    <p>Asset Number<span>0637230</span></p>
                    <ul className='short-card-status'>
                        <li>
                            <label>Status</label>
                            <p>Inactive</p>
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

export default CardSms
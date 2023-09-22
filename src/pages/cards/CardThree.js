import React, {useState} from 'react';
import { Col, Row } from 'antd';
import { Button, Space, Card, Breadcrumb, Menu, Dropdown, Avatar, Tag, Progress, Select, Drawer, Checkbox, Radio } from 'antd';


import {
    IconAdd, 
    IconTableimport, 
    IconTableexport, 
    IconSettings, 
    IconCustomize, 
    IconBack, 
    IconCall, 
    IconMail, 
    IconMsg, 
    IconActivities, 
    IconMore, 
    IconDotbottom, 
    IconAddlg, 
    IconSettingslg, 
    IconPhone, 
    IconDotright,
    IconMsglg,
    IconData,
    IconVoice,
    IconDocument,
    IconAvatar,
    IconCard,
    CardOverlay,
    IconAnnounce,
    IconRate,
    IconInvoice,
    IconBill,
    IconVoicesm,
    Iconfb,
    Icontw,
    Iconig,
    Iconyt

} from '../../utilities/Iconsheet';

import { Column } from '@ant-design/plots';


function CardThree() {

    return(

        <Card>
                                                            <div className='short-card'>
                                                                <figure className='icon-box olive-green'>
                                                                    <IconData color="#28C76F"/>
                                                                </figure>
                                                                <div className='short-card-details'>
                                                                    <h5>50 GB Data Booster</h5>
                                                                    <p>Asset Number<span>0637230</span></p>
                                                                    <ul className='short-card-status'>
                                                                        <li>
                                                                            <label>Status</label>
                                                                            <p className='olive-green-text'>Active</p>
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

export default CardThree
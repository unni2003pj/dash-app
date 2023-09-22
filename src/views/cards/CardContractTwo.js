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


function CardContractTwo() {

    return(

        <Card>
            <div className='short-card horizontal-card'>
                <div className='div-flex-between mb-1'>
                    <figure className='icon-box red-shade round'>
                        <IconDocument color="#EA5455" />
                    </figure>
                    <button className='action-button'>
                        <Tag bordered={false} className='red-shade'>Download Document</Tag>
                    </button>
                </div>
                <div className='short-card-details'>
                    <h5>CON12345</h5>
                    <ul className='short-card-status'>
                        <li>
                            <label>Status</label>
                            <p className='red-shade-text'>Expired</p>
                        </li>
                        <li>
                            <label>Duration</label>
                            <p>365 Days</p>
                        </li>
                        <li>
                            <label>Start Date</label>
                            <p>12 Jul 2023</p>
                        </li>
                        <li>
                            <label>End Date</label>
                            <p>12 Jul 2024</p>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>

    )

}

export default CardContractTwo
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


function CardDocumentThree() {

    return(

        <Card>
            <div className='short-card horizontal-card'>
                <div className='div-flex-between mb-1'>
                    <figure className='icon-box blue-berry round'>
                        <IconCard color="#634CE3" />
                    </figure>
                </div>
                <div className='short-card-details'>
                    <h5>TAN Number</h5>
                    <ul className='short-card-status'>
                        <li>
                            <p>TAN 123 456 7890</p>
                            <label>02 Jul 2023</label>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>

    )

}

export default CardDocumentThree
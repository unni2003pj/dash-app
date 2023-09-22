
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


function CardHeader() {

    return(

        <div className='card-panel-header div-flex-between'>
            <div className='card-panel-header-left'>
                <h5>Asset Information<Tag bordered={false} className='sky-blue'>SIM 123 456 78</Tag></h5>
            </div>
            <div className='card-panel-header-right'>
                <button className='action-link'>
                    <IconAddlg color="#4B465C" />
                    <span>Add</span>
                </button>
                <button className='action-link'>
                    <IconSettingslg color="#4B465C" />
                    <span>Manage Assets</span>
                </button>
            </div>
        </div>

    )

}

export default CardHeader
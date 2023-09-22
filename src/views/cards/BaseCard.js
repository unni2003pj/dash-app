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


function BaseCard() {

    return(

        <Card>
            <div className='card-panel-wrapper'>

            </div>
        </Card>

    )

}

export default BaseCard

import React from 'react';
import {Tag} from 'antd';
import {
    IconAddlg, 
    IconSettingslg

} from '../../utilities/Iconsheet';

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
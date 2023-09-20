import React, {useState} from 'react';
import { MenuOutlined, AppstoreAddOutlined, ContainerOutlined, GroupOutlined, WalletOutlined } from '@ant-design/icons';

const Sidebar = () => {

    const [sidebarExpand, setSidebarToggle] = useState(false);
    return(
        <aside className={`side-bar ${sidebarExpand ? '' : 'skew'}`}>

            <button className="side-bar-button" onClick={() => setSidebarToggle(!sidebarExpand)}>
                <span className="section-icon menu-icon">
                    <MenuOutlined />
                </span>
                <span className="section-text">Menu text</span>
            </button>

            <div className="menu-wrapper">
                <button className="side-bar-button active">
                    <span className="section-icon">
                        <AppstoreAddOutlined />
                    </span>
                    <span className="section-text">Menu text</span>
                </button>
                <button className="side-bar-button">
                    <span className="section-icon">
                        <ContainerOutlined />
                    </span>
                    <span className="section-text">Menu text</span>
                </button>
                <button className="side-bar-button">
                    <span className="section-icon">
                        <GroupOutlined />
                    </span>
                    <span className="section-text">Menu text</span>
                </button>
                <button className="side-bar-button">
                    <span className="section-icon">
                        <WalletOutlined />
                    </span>
                    <span className="section-text">Menu text</span>
                </button>
            </div>
            
        </aside>
    )
    }

export default Sidebar

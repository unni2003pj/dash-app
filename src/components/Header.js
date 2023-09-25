import React from 'react';
import { Input, Space } from 'antd';
import { BellOutlined, SettingOutlined, QuestionCircleOutlined, MenuOutlined } from '@ant-design/icons';
import Logo from '../assets/images/standard-chartered-logo.svg';

class Header extends React.Component{
    
    render(){

        const { Search } = Input;
        const sidebarToggle= () => {
         document.querySelector(".wrapper").classList.toggle("sidebar-active")
        }
        return(

            <header className="header-block">

                <div className='header-left div-flex-center'>
                    <nav className="mob-toggle" onClick={() => sidebarToggle()}>
                        <MenuOutlined />
                    </nav>

                    <figure className="brand-logo">
                        <img src={Logo} alt="Logo" height={35}/>
                    </figure>
                </div>

                <div className='search-bar'>
                    <Space direction="vertical">
                        <Search placeholder="Search here"/>
                    </Space>
                </div>

                <div className='header-block-right'>
                    <button className='right-button'>
                        <BellOutlined style={{ fontSize: '16px'}}/>
                    </button>
                    <button className='right-button'>
                        <SettingOutlined />
                    </button>
                    <button className='right-button'>
                        <QuestionCircleOutlined />
                    </button>
                </div>
                
            </header>
        )
    }
}

export default Header

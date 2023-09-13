import React, {useState} from 'react';
import { Col, Row } from 'antd';
import { Button, Space, Card, Breadcrumb, Menu, Dropdown, Avatar, Tag } from 'antd';

import Linechart from '../utilities/charts/Linechart';
import Groupchart from '../utilities/charts/Groupchart';


function Dashboard() {
    // const { TabPane } = Tabs;

    const [tab, setTab] = useState(1);
    function tabChange(t) {
        setTab(t)
    }

    return(
        <main className='content'>

            <div className='pinned-card-wrapper'>
                
                <div className='pinned-filter-header div-flex-between'>
                    <div className='filter-header-left'>
                        <Breadcrumb>
                            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item>All Accounts</Breadcrumb.Item>
                            <Breadcrumb.Item>CSmartDev2023</Breadcrumb.Item>
                        </Breadcrumb>
                        <h1>Dummy Dashboard</h1>
                    </div>
                    <div className='filter-header-right'>
                        <Space wrap>
                            <Button type="primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M8.00008 3.83325V13.1666" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.33325 8.50008H12.6666" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Button>
                            <Button type="primary" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M1.79159 9.50008C1.79159 9.98333 2.18334 10.3751 2.66659 10.3751C3.14983 10.3751 3.54159 9.98333 3.54159 9.50008H1.79159ZM7.99992 12.9584C7.51667 12.9584 7.12492 13.3502 7.12492 13.8334C7.12492 14.3167 7.51667 14.7084 7.99992 14.7084V12.9584ZM2.66659 6.29175C2.18334 6.29175 1.79159 6.6835 1.79159 7.16675C1.79159 7.65 2.18334 8.04175 2.66659 8.04175V6.29175ZM13.3333 8.04175C13.8165 8.04175 14.2083 7.65 14.2083 7.16675C14.2083 6.6835 13.8165 6.29175 13.3333 6.29175V8.04175ZM7.54158 3.16675C7.54158 2.6835 7.14983 2.29175 6.66658 2.29175C6.18334 2.29175 5.79158 2.6835 5.79158 3.16675H7.54158ZM5.79158 10.8334C5.79158 11.3167 6.18334 11.7084 6.66658 11.7084C7.14983 11.7084 7.54158 11.3167 7.54158 10.8334H5.79158ZM1.33325 12.2917C0.850003 12.2917 0.458252 12.6835 0.458252 13.1667C0.458252 13.65 0.850003 14.0417 1.33325 14.0417V12.2917ZM5.99992 14.0417C6.48317 14.0417 6.87492 13.65 6.87492 13.1667C6.87492 12.6835 6.48317 12.2917 5.99992 12.2917V14.0417ZM4.61864 10.548C4.27693 10.2063 3.72291 10.2063 3.3812 10.548C3.03949 10.8897 3.03949 11.4438 3.3812 11.7855L4.61864 10.548ZM5.99992 13.1667L6.61864 13.7855C6.96035 13.4438 6.96035 12.8897 6.61864 12.548L5.99992 13.1667ZM3.3812 14.548C3.03949 14.8897 3.03949 15.4438 3.3812 15.7855C3.72291 16.1272 4.27693 16.1272 4.61864 15.7855L3.3812 14.548ZM3.54159 9.50008V4.50008H1.79159V9.50008H3.54159ZM3.54159 4.50008C3.54159 4.24695 3.74679 4.04175 3.99992 4.04175V2.29175C2.78029 2.29175 1.79159 3.28045 1.79159 4.50008H3.54159ZM3.99992 4.04175H11.9999V2.29175H3.99992V4.04175ZM11.9999 4.04175C12.253 4.04175 12.4583 4.24695 12.4583 4.50008H14.2083C14.2083 3.28045 13.2195 2.29175 11.9999 2.29175V4.04175ZM12.4583 4.50008V12.5001H14.2083V4.50008H12.4583ZM12.4583 12.5001C12.4583 12.7532 12.253 12.9584 11.9999 12.9584V14.7084C13.2195 14.7084 14.2083 13.7197 14.2083 12.5001H12.4583ZM11.9999 12.9584H7.99992V14.7084H11.9999V12.9584ZM2.66659 8.04175H13.3333V6.29175H2.66659V8.04175ZM5.79158 3.16675V10.8334H7.54158V3.16675H5.79158ZM1.33325 14.0417H5.99992V12.2917H1.33325V14.0417ZM3.3812 11.7855L5.3812 13.7855L6.61864 12.548L4.61864 10.548L3.3812 11.7855ZM5.3812 12.548L3.3812 14.548L4.61864 15.7855L6.61864 13.7855L5.3812 12.548Z" fill="white"/>
                                </svg>
                            </Button>
                            <Button type="primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M7.66675 14.7084C8.15 14.7084 8.54175 14.3167 8.54175 13.8334C8.54175 13.3502 8.15 12.9584 7.66675 12.9584V14.7084ZM12.4584 9.50008C12.4584 9.98333 12.8502 10.3751 13.3334 10.3751C13.8167 10.3751 14.2084 9.98333 14.2084 9.50008H12.4584ZM2.66675 6.29175C2.1835 6.29175 1.79175 6.6835 1.79175 7.16675C1.79175 7.65 2.1835 8.04175 2.66675 8.04175V6.29175ZM13.3334 8.04175C13.8167 8.04175 14.2084 7.65 14.2084 7.16675C14.2084 6.6835 13.8167 6.29175 13.3334 6.29175V8.04175ZM7.54175 3.16675C7.54175 2.6835 7.15 2.29175 6.66675 2.29175C6.1835 2.29175 5.79175 2.6835 5.79175 3.16675H7.54175ZM5.79175 13.8334C5.79175 14.3167 6.1835 14.7084 6.66675 14.7084C7.15 14.7084 7.54175 14.3167 7.54175 13.8334H5.79175ZM9.33341 12.2917C8.85017 12.2917 8.45841 12.6835 8.45841 13.1667C8.45841 13.65 8.85017 14.0417 9.33341 14.0417V12.2917ZM14.0001 14.0417C14.4833 14.0417 14.8751 13.65 14.8751 13.1667C14.8751 12.6835 14.4833 12.2917 14.0001 12.2917V14.0417ZM12.6188 10.548C12.2771 10.2063 11.7231 10.2063 11.3814 10.548C11.0397 10.8897 11.0397 11.4438 11.3814 11.7855L12.6188 10.548ZM14.0001 13.1667L14.6188 13.7855C14.9605 13.4438 14.9605 12.8897 14.6188 12.548L14.0001 13.1667ZM11.3814 14.548C11.0397 14.8897 11.0397 15.4438 11.3814 15.7855C11.7231 16.1272 12.2771 16.1272 12.6188 15.7855L11.3814 14.548ZM7.66675 12.9584H4.00008V14.7084H7.66675V12.9584ZM4.00008 12.9584C3.74695 12.9584 3.54175 12.7532 3.54175 12.5001H1.79175C1.79175 13.7197 2.78045 14.7084 4.00008 14.7084V12.9584ZM3.54175 12.5001V4.50008H1.79175V12.5001H3.54175ZM3.54175 4.50008C3.54175 4.24695 3.74695 4.04175 4.00008 4.04175V2.29175C2.78045 2.29175 1.79175 3.28045 1.79175 4.50008H3.54175ZM4.00008 4.04175H12.0001V2.29175H4.00008V4.04175ZM12.0001 4.04175C12.2532 4.04175 12.4584 4.24695 12.4584 4.50008H14.2084C14.2084 3.28045 13.2197 2.29175 12.0001 2.29175V4.04175ZM12.4584 4.50008V9.50008H14.2084V4.50008H12.4584ZM2.66675 8.04175H13.3334V6.29175H2.66675V8.04175ZM5.79175 3.16675V13.8334H7.54175V3.16675H5.79175ZM9.33341 14.0417H14.0001V12.2917H9.33341V14.0417ZM11.3814 11.7855L13.3814 13.7855L14.6188 12.548L12.6188 10.548L11.3814 11.7855ZM13.3814 12.548L11.3814 14.548L12.6188 15.7855L14.6188 13.7855L13.3814 12.548Z" fill="white"/>
                                </svg>
                            </Button>
                            <Button type="primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M2.66675 4.16675H13.3334" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.0001 3.16675V5.16675" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2.66675 8.50008H13.3334" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5 7.5V9.5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2.66675 12.8333H13.3334" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.0001 11.8333V13.8333" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Button>
                            <Button type="primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M2 14.5001H4.66667L13.3333 5.83345C14.0697 5.09707 14.0697 3.90317 13.3333 3.16679C12.597 2.43041 11.403 2.43041 10.6667 3.16679L2 11.8335V14.5001" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.66675 4.16675L12.3334 6.83341" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8 5.83333L4.66667 2.5L2 5.16667L5.33333 8.5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4.66675 5.83325L3.66675 6.83325" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.6667 8.5L14 11.8333L11.3333 14.5L8 11.1667" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.6667 11.8333L9.66675 12.8333" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Customize</span>
                            </Button>
                        </Space>
                    </div>
                </div>

                <div className='pinned-main-card'>
                    <Card>

                        <div className='card-action-area div-flex-between'>
                            <div className='card-action-left'>
                                <button className='action-link'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M5 12H19" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M5 12L11 18" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M5 12L11 18" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M5 12L11 6" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M5 12L11 6" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>Back</span>
                                </button>
                                <button className='action-link'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 20.1046 19.1046 21 18 21C9.92765 20.5094 3.49056 14.0724 3 6C3 4.89543 3.89543 4 5 4" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 20.1046 19.1046 21 18 21C9.92765 20.5094 3.49056 14.0724 3 6C3 4.89543 3.89543 4 5 4" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 9L20 4" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 9L20 4" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16 4H20V8" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16 4H20V8" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>Call</span>
                                </button>
                                <button className='action-link'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3 7L12 13L21 7" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3 7L12 13L21 7" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>Email</span>
                                </button>
                                <button className='action-link'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M5 12H19" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M5 12L11 18" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M5 12L11 18" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M5 12L11 6" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M5 12L11 6" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>Message</span>
                                </button>
                                <button className='action-link'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 12H7L10 20L14 4L17 12H21" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3 12H7L10 20L14 4L17 12H21" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>Activities</span>
                                </button>
                            </div>
                            <div className='card-action-right'>
                                <button className='action-link'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="9" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="12" cy="12" r="9" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 9L9 15" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 9L9 15" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 15V9H9" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 15V9H9" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>More Details</span>
                                </button>
                                <button className='action-link stand-alone'>
                                    <Dropdown
                                        menu={(
                                        <Menu>
                                            <Menu.Item key="0">Edit</Menu.Item>
                                            <Menu.Item key="1">Delete</Menu.Item>
                                            <Menu.Item key="2">Preview</Menu.Item>
                                        </Menu>
                                        )}
                                        trigger={['click']}>
                                        <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <circle cx="5" cy="12" r="1" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                            <circle cx="5" cy="12" r="1" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                            <circle cx="12" cy="12" r="1" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                            <circle cx="12" cy="12" r="1" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                            <circle cx="19" cy="12" r="1" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                            <circle cx="19" cy="12" r="1" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </span>
                                    </Dropdown>
                                </button>

                            </div>
                        </div>

                        <div className='card-content-area'>
                            <div className='nav-tab-wrapper'>
                                <div className="dashboard-nav-tab">
                                    <nav className={tab===1? "nav-tab active": "nav-tab"} onClick={()=>tabChange(1)}>Account Details</nav>
                                    <nav className={tab===2? "nav-tab active": "nav-tab"} onClick={()=>tabChange(2)}>Customer 360</nav>
                                </div>
                                <div className='dashbaord-data-wrapper div-flex'>
                                    <Avatar>MQ</Avatar>
                                    <div className='dashboard-data-right'>
                                        <div className='dashboard-data-right-top'>
                                            <h5>Standard Chartered</h5>
                                            <Row gutter={16}> 
                                                <Col span={4}>
                                                    <div className='short-description'>
                                                        <label>Account Number</label>
                                                        <p>AD001122</p>
                                                    </div>
                                                </Col>
                                                <Col span={4}>
                                                    <div className='short-description'>
                                                        <label>Customer Type</label>
                                                        <p>Business</p>
                                                    </div>
                                                </Col>
                                                <Col span={4}>
                                                    <div className='short-description'>
                                                        <label>Total Revenue</label>
                                                        <p>$5000.00</p>
                                                    </div>
                                                </Col>
                                                <Col span={4}>
                                                    <div className='short-description'>
                                                        <label>Customer Rating</label>
                                                        <p>AD001122</p>
                                                    </div>
                                                </Col>
                                                <Col span={4}>
                                                    <div className='short-description'>
                                                        <label>KYC Status</label>
                                                        <p>Verified</p>
                                                    </div>
                                                </Col>
                                                <Col span={4}>
                                                    <div className='short-description'>
                                                        <label>Loyality Points</label>
                                                        <p>100</p>
                                                    </div>
                                                </Col>
                                                <Col span={4}>
                                                    <div className='short-description'>
                                                        <label>Phone Number</label>
                                                        <p>+123 456 7890</p>
                                                    </div>
                                                </Col>
                                                <Col span={4}>
                                                    <div className='short-description'>
                                                        <label>Status</label>
                                                        <p>Active</p>
                                                    </div>
                                                </Col>
                                                <Col span={4}>
                                                    <div className='short-description'>
                                                        <label>Platform</label>
                                                        <p>Postpaid</p>
                                                    </div>
                                                </Col>
                                                <Col span={4}>
                                                    <div className='short-description'>
                                                        <label>Credit Score</label>
                                                        <p>Good</p>
                                                    </div>
                                                </Col>
                                                <Col span={4}>
                                                    <div className='short-description'>
                                                        <label>Balance</label>
                                                        <p>$200.00</p>
                                                    </div>
                                                </Col>
                                                <Col span={4}>
                                                    <div className='short-description'>
                                                        <label>Address</label>
                                                        <p>Lorem Ipsum, CA</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className='dashboard-data-right-bottom'>
                                            <ul className='short-description-wrapper'>
                                                <li>
                                                    <div className='short-description'>
                                                        <label>Assigned to</label>
                                                        <div className='tag-group'>
                                                            <Tag bordered={false} className='olive-green'>John Doe</Tag>
                                                            <Tag bordered={false} className='olive-green'>3+ more</Tag>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='short-description'>
                                                        <label>Related Contacts</label>
                                                        <div className='tag-group'>
                                                            <Tag bordered={false} className='sea-blue'>SCB</Tag>
                                                            <Tag bordered={false} className='sea-blue'>3+ more</Tag>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='short-description'>
                                                        <label>Documents</label>
                                                        <div className='tag-group'>
                                                            <Tag bordered={false} className='sandal'>Aadhar</Tag>
                                                            <Tag bordered={false} className='sandal'>3+ more</Tag>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='short-description'>
                                                        <label>Complaints / Ticket</label>
                                                        <div className='tag-group'>
                                                            <Tag bordered={false} className='blue-berry'>FYI</Tag>
                                                            <Tag bordered={false} className='blue-berry'>3+ more</Tag>
                                                        </div>
                                                    </div>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Card>

                </div>

            </div>

            <div className='non-sticky-wrapper'>

                <div className="nav-tab-holder">
                    
                    { tab === 1 &&

                        <div className="tab-pane">

                            <Row gutter={16}>
                                <Col span={24}>
                                    <Card>
                                        <div className='card-panel-wrapper'>
                                            <div className='card-panel-header div-flex-between'>
                                                <div className='card-panel-header-left'>
                                                    <h5>Asset Information<Tag bordered={false} className='sky-blue'>SIM 123 456 78</Tag></h5>
                                                </div>
                                                <div className='card-panel-header-right'>
                                                    <button className='action-link'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 5V19" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M12 5V19" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M5 12H19" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M5 12H19" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                        <span>Add</span>
                                                    </button>
                                                    <button className='action-link'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M4 5.5H20" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M4 5.5H20" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M16.5 4V7" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M16.5 4V7" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M4 12H20" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M4 12H20" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M7.5 10.5V13.5" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M7.5 10.5V13.5" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M4 18.5H20" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M4 18.5H20" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M16.5 17V20" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M16.5 17V20" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                        <span>Manage Assets</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='card-panel-body'>
                                                <Row gutter={16}>
                                                    <Col span={6}>
                                                        <Card>
                                                            <div className='short-card'>
                                                                <figure className='icon-box olive-green'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                                    <rect x="7.58331" y="4.33325" width="10.8333" height="17.3333" rx="1" stroke="#28C76F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M11.9167 5.41667H14.0834" stroke="#28C76F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M13 18.4166V18.4275" stroke="#28C76F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    </svg>
                                                                </figure>
                                                                <div className='short-card-details'>
                                                                    <h5>iPhone 14 Pro</h5>
                                                                    <p>Asset Number <span>0637230</span></p>
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
                                                                            menu={(
                                                                            <Menu>
                                                                                <Menu.Item key="0">Edit</Menu.Item>
                                                                                <Menu.Item key="1">Delete</Menu.Item>
                                                                                <Menu.Item key="2">Preview</Menu.Item>
                                                                            </Menu>
                                                                            )}
                                                                            trigger={['click']}>
                                                                            <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                                                <circle cx="12.5999" cy="12" r="1" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="12" r="1" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="19" r="1" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="19" r="1" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="5" r="1" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="5" r="1" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                </svg>
                                                                            </span>
                                                                        </Dropdown>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col span={6}>
                                                        <Card>
                                                            <div className='short-card'>
                                                                <figure className='icon-box'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                                                                    <path d="M13.8001 21.6667L10.5501 18.4167H8.38342C6.5885 18.4167 5.13342 16.9617 5.13342 15.1667V8.66675C5.13342 6.87182 6.5885 5.41675 8.38342 5.41675H19.2168C21.0117 5.41675 22.4668 6.87182 22.4668 8.66675V15.1667C22.4668 16.9617 21.0117 18.4167 19.2168 18.4167H17.0501L13.8001 21.6667" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M13.8001 21.6667L10.5501 18.4167H8.38342C6.5885 18.4167 5.13342 16.9617 5.13342 15.1667V8.66675C5.13342 6.87182 6.5885 5.41675 8.38342 5.41675H19.2168C21.0117 5.41675 22.4668 6.87182 22.4668 8.66675V15.1667C22.4668 16.9617 21.0117 18.4167 19.2168 18.4167H17.0501L13.8001 21.6667" stroke="white" strokeOpacity="0.5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M9.46667 9.74992H18.1333" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M9.46667 9.74992H18.1333" stroke="white" strokeOpacity="0.5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M9.46667 14.0834H15.9667" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M9.46667 14.0834H15.9667" stroke="white" strokeOpacity="0.5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    </svg>
                                                                </figure>
                                                                <div className='short-card-details'>
                                                                    <h5>100 SMS Pack</h5>
                                                                    <p>Asset Number <span>0637230</span></p>
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
                                                                            menu={(
                                                                            <Menu>
                                                                                <Menu.Item key="0">Edit</Menu.Item>
                                                                                <Menu.Item key="1">Delete</Menu.Item>
                                                                                <Menu.Item key="2">Preview</Menu.Item>
                                                                            </Menu>
                                                                            )}
                                                                            trigger={['click']}>
                                                                            <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                                                <circle cx="12.5999" cy="12" r="1" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="12" r="1" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="19" r="1" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="19" r="1" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="5" r="1" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="5" r="1" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                </svg>
                                                                            </span>
                                                                        </Dropdown>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col span={6}>
                                                        <Card>
                                                            <div className='short-card'>
                                                                <figure className='icon-box olive-green'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                                                                    <path d="M17.9333 4.33342L17.9333 21.6667" stroke="#28C76F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M6.0166 18.4167L9.2666 21.6667" stroke="#28C76F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M21.1833 7.58325L17.9333 4.33325" stroke="#28C76F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M9.2666 21.6666L9.2666 4.33325" stroke="#28C76F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    </svg>
                                                                </figure>
                                                                <div className='short-card-details'>
                                                                    <h5>100 SMS Pack</h5>
                                                                    <p>Asset Number <span>0637230</span></p>
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
                                                                            menu={(
                                                                            <Menu>
                                                                                <Menu.Item key="0">Edit</Menu.Item>
                                                                                <Menu.Item key="1">Delete</Menu.Item>
                                                                                <Menu.Item key="2">Preview</Menu.Item>
                                                                            </Menu>
                                                                            )}
                                                                            trigger={['click']}>
                                                                            <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                                                <circle cx="12.5999" cy="12" r="1" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="12" r="1" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="19" r="1" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="19" r="1" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="5" r="1" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="5" r="1" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                </svg>
                                                                            </span>
                                                                        </Dropdown>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col span={6}>
                                                        <Card>
                                                            <div className='short-card'>
                                                                <figure className='icon-box red-shade'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                                                                    <path d="M5.81657 4.33325H10.1499L12.3166 9.74992L9.60824 11.3749C10.7684 13.7274 12.6724 15.6314 15.0249 16.7916L16.6499 14.0833L22.0666 16.2499V20.5833C22.0666 21.7799 21.0965 22.7499 19.8999 22.7499C11.1549 22.2185 4.18134 15.245 3.6499 6.49992C3.6499 5.3033 4.61995 4.33325 5.81657 4.33325" stroke="#EA5455" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M16.6499 7.58325C17.8465 7.58325 18.8166 8.5533 18.8166 9.74992" stroke="#EA5455" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M16.6499 3.25C20.2398 3.25 23.1499 6.16015 23.1499 9.75" stroke="#EA5455" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    </svg>
                                                                </figure>
                                                                <div className='short-card-details'>
                                                                    <h5>100 SMS Pack</h5>
                                                                    <p>Asset Number <span>0637230</span></p>
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
                                                                            menu={(
                                                                            <Menu>
                                                                                <Menu.Item key="0">Edit</Menu.Item>
                                                                                <Menu.Item key="1">Delete</Menu.Item>
                                                                                <Menu.Item key="2">Preview</Menu.Item>
                                                                            </Menu>
                                                                            )}
                                                                            trigger={['click']}>
                                                                            <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                                                <circle cx="12.5999" cy="12" r="1" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="12" r="1" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="19" r="1" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="19" r="1" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="5" r="1" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                <circle cx="12.5999" cy="5" r="1" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                </svg>
                                                                            </span>
                                                                        </Dropdown>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>

                            <Row gutter={16}>

                                <Col span={12}>
                                    <Card>
                                        <div className='card-panel-wrapper'>
                                            <div className='card-panel-header div-flex-between'>
                                                <div className='card-panel-header-left'>
                                                    <h5>Contracts</h5>
                                                </div>
                                                <div className='card-panel-header-right'>
                                                    <button className='action-link'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 5V19" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M12 5V19" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M5 12H19" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M5 12H19" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                        <span>Add</span>
                                                    </button>
                                                    <button className='action-link'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M4 5.5H20" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M4 5.5H20" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M16.5 4V7" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M16.5 4V7" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M4 12H20" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M4 12H20" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M7.5 10.5V13.5" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M7.5 10.5V13.5" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M4 18.5H20" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M4 18.5H20" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M16.5 17V20" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M16.5 17V20" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                        <span>Manage Assets</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='card-panel-body'>
                                                <Row gutter={16}>
                                                    <Col span={12}>
                                                        <Card>
                                                            <div className='short-card horizontal-card'>
                                                                <figure className='icon-box olive-green round'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                                    <path d="M15.1667 4.33325V8.66658C15.1667 9.26489 15.6517 9.74992 16.25 9.74992H21.6667" stroke="#28C76F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.1905 21.6666H6.8095C5.44194 21.6666 4.33331 20.8043 4.33331 19.7407V6.25918C4.33331 5.19552 5.44194 4.33325 6.8095 4.33325H15.4762L21.6666 9.14807V19.7407C21.6666 20.8043 20.558 21.6666 19.1905 21.6666Z" stroke="#28C76F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M8.66669 8.66667H10.8334" stroke="#28C76F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M8.66669 12.9999H17.3334" stroke="#28C76F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M8.66669 17.3334H17.3334" stroke="#28C76F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    </svg>
                                                                </figure>
                                                                <div className='short-card-details'>
                                                                    <h5>100 SMS Pack</h5>
                                                                    <ul className='short-card-status'>
                                                                        <li>
                                                                            <label>Status</label>
                                                                            <p className='olive-green-text'>Active</p>
                                                                        </li>
                                                                        <li>
                                                                            <label>Duration</label>
                                                                            <p>12/02/2023</p>
                                                                        </li>
                                                                        <li>
                                                                            <label>Start Date</label>
                                                                            <p>12/02/2023</p>
                                                                        </li>
                                                                        <li>
                                                                            <label>End Date</label>
                                                                            <p>None</p>
                                                                        </li>
                                                                    </ul>
                                                                    <button className='more-option-drop'>
                                                                        <Tag bordered={false} className='olive-green'>Download Document</Tag>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Card>
                                                            <div className='short-card horizontal-card'>
                                                                <figure className='icon-box red-shade round'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                                                                    <path d="M15.9166 4.33325V8.66658C15.9166 9.26489 16.4017 9.74992 17 9.74992H22.4166" stroke="#EA5455" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.9405 21.6666H7.55956C6.192 21.6666 5.08337 20.8043 5.08337 19.7407V6.25918C5.08337 5.19552 6.192 4.33325 7.55956 4.33325H16.2262L22.4167 9.14807V19.7407C22.4167 20.8043 21.3081 21.6666 19.9405 21.6666Z" stroke="#EA5455" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M9.41663 8.66667H11.5833" stroke="#EA5455" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M9.41663 12.9999H18.0833" stroke="#EA5455" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M9.41663 17.3334H18.0833" stroke="#EA5455" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    </svg>
                                                                </figure>
                                                                <div className='short-card-details'>
                                                                    <h5>100 SMS Pack</h5>
                                                                    <ul className='short-card-status'>
                                                                        <li>
                                                                            <label>Status</label>
                                                                            <p className='olive-green-text'>Active</p>
                                                                        </li>
                                                                        <li>
                                                                            <label>Duration</label>
                                                                            <p>12/02/2023</p>
                                                                        </li>
                                                                        <li>
                                                                            <label>Start Date</label>
                                                                            <p>12/02/2023</p>
                                                                        </li>
                                                                        <li>
                                                                            <label>End Date</label>
                                                                            <p>None</p>
                                                                        </li>
                                                                    </ul>
                                                                    <button className='more-option-drop'>
                                                                        <Tag bordered={false} className='red-shade'>Download Document</Tag>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>

                                <Col span={12}>
                                    <Card>
                                        <div className='card-panel-wrapper'>
                                            <div className='card-panel-header div-flex-between'>
                                                <div className='card-panel-header-left'>
                                                    <h5>Documents</h5>
                                                </div>
                                                <div className='card-panel-header-right'>
                                                    <button className='action-link'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 5V19" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M12 5V19" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M5 12H19" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M5 12H19" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                        <span>Add</span>
                                                    </button>
                                                    <button className='action-link'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M4 5.5H20" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M4 5.5H20" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M16.5 4V7" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M16.5 4V7" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M4 12H20" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M4 12H20" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M7.5 10.5V13.5" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M7.5 10.5V13.5" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M4 18.5H20" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M4 18.5H20" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M16.5 17V20" stroke="#4B465C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M16.5 17V20" stroke="white" strokeOpacity="0.6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                        <span>Manage Assets</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='card-panel-body'>
                                                <Row gutter={16}>
                                                    <Col span={8}>
                                                        <Card>
                                                            <div className='short-card horizontal-card'>
                                                                <figure className='icon-box blue-berry round'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                                                                    <circle cx="13.5" cy="7.58333" r="4.33333" stroke="#634CE3" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M7 22.75V20.5833C7 18.1901 8.9401 16.25 11.3333 16.25H15.6667C18.0599 16.25 20 18.1901 20 20.5833V22.75" stroke="#634CE3" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    </svg>
                                                                </figure>
                                                                <div className='short-card-details'>
                                                                    <h5>Identity Card</h5>
                                                                    <ul className='short-card-status'>
                                                                        <li>
                                                                            <p>1234567890</p>
                                                                            <label>02/02/2025</label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Card>
                                                            <div className='short-card horizontal-card'>
                                                                <figure className='icon-box blue-berry round'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                                    <path d="M3.25 8.66675C3.25 6.87182 4.70507 5.41675 6.5 5.41675H19.5C21.2949 5.41675 22.75 6.87182 22.75 8.66675V17.3334C22.75 19.1283 21.2949 20.5834 19.5 20.5834H6.5C4.70508 20.5834 3.25 19.1283 3.25 17.3334V8.66675Z" stroke="#634CE3" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M6.5 9.75H9.75" stroke="#634CE3" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M6.5 13H9.75" stroke="#634CE3" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M6.5 16.25H9.75" stroke="#634CE3" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M15.9575 9.8014L13.4297 10.7282C13.1697 10.8235 13 11.0381 13 11.2735V12.6741C13 14.3279 14.3867 15.8745 16.25 16.25C18.1133 15.8745 19.5 14.3279 19.5 12.6741V11.2735C19.5 11.0381 19.3303 10.8235 19.0703 10.7282L16.5425 9.8014C16.3583 9.73287 16.1417 9.73287 15.9575 9.8014Z" stroke="#634CE3" strokeWidth="1.75"/>
                                                                    </svg>
                                                                </figure>
                                                                <div className='short-card-details'>
                                                                    <h5>Identity Card</h5>
                                                                    <ul className='short-card-status'>
                                                                        <li>
                                                                            <p>1234567890</p>
                                                                            <label>02/02/2025</label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Card>
                                                            <div className='short-card horizontal-card'>
                                                                <figure className='icon-box blue-berry round'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                                                                    <path d="M3.75 8.66675C3.75 6.87182 5.20507 5.41675 7 5.41675H20C21.7949 5.41675 23.25 6.87182 23.25 8.66675V17.3334C23.25 19.1283 21.7949 20.5834 20 20.5834H7C5.20508 20.5834 3.75 19.1283 3.75 17.3334V8.66675Z" stroke="#634CE3" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M7 9.75H10.25" stroke="#634CE3" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M7 13H10.25" stroke="#634CE3" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M7 16.25H10.25" stroke="#634CE3" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M16.4575 9.8014L13.9297 10.7282C13.6697 10.8235 13.5 11.0381 13.5 11.2735V12.6741C13.5 14.3279 14.8867 15.8745 16.75 16.25C18.6133 15.8745 20 14.3279 20 12.6741V11.2735C20 11.0381 19.8303 10.8235 19.5703 10.7282L17.0425 9.8014C16.8583 9.73287 16.6417 9.73287 16.4575 9.8014Z" stroke="#634CE3" strokeWidth="1.75"/>
                                                                    </svg>
                                                                </figure>
                                                                <div className='short-card-details'>
                                                                    <h5>Identity Card</h5>
                                                                    <ul className='short-card-status'>
                                                                        <li>
                                                                            <p>1234567890</p>
                                                                            <label>02/02/2025</label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>

                            </Row>

                            <Row gutter={16}>

                                <Col span={12}>
                                    <Card>
                                        <div className='card-panel-wrapper'>
                                            <div className='card-panel-header div-flex-between'>
                                                <div className='card-panel-header-left'>
                                                    <h5>Order Details</h5>
                                                </div>
                                                <div className='card-panel-header-right'>
                                                    
                                                </div>
                                            </div>
                                            <div className='card-panel-body'>
                                                <div className='chart-wrapper'>
                                                    <Linechart/>
                                                </div> 
                                            </div>
                                        </div>
                                    </Card>
                                </Col>

                                <Col span={12}>
                                    <Card>
                                        <div className='card-panel-wrapper'>
                                            <div className='card-panel-header div-flex-between'>
                                                <div className='card-panel-header-left'>
                                                    <h5>Complaint Details</h5>
                                                </div>
                                                <div className='card-panel-header-right'>
                                                    
                                                </div>
                                            </div>
                                            <div className='card-panel-body'>

                                                <Groupchart/>

                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    }
                    { tab === 2 &&

                        <div className="tab-pane">
                            <Row gutter={16}>
                                <Col>
                                    <Card>dshfihbsadifbhsauiedhfiushuihsf</Card>
                                </Col>
                                <Col>
                                    <Card>dshfihbsadifbhsauiedhfiushuihsf</Card>
                                </Col>
                                <Col>
                                    <Card>dshfihbsadifbhsauiedhfiushuihsf</Card>
                                </Col>
                                <Col>
                                    <Card>dshfihbsadifbhsauiedhfiushuihsf</Card>
                                </Col>
                                <Col>
                                    <Card>dshfihbsadifbhsauiedhfiushuihsf</Card>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col>
                                    <Card>dshfihbsadifbhsauiedhfiushuihsf</Card>
                                </Col>
                                <Col>   
                                    <Row>
                                        <Col>  
                                            <Card>dshfihbsadifbhsauiedhfiushuihsf</Card>
                                        </Col>
                                        <Col>  
                                            <Card>dshfihbsadifbhsauiedhfiushuihsf</Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col>
                                    <Card>dshfihbsadifbhsauiedhfiushuihsf</Card>
                                </Col>
                                <Col>
                                    <Row gutter={16}>
                                        <Col>  
                                            <Card>dshfihbsadifbhsauiedhfiushuihsf</Card>
                                        </Col>
                                        <Col>  
                                            <Card>dshfihbsadifbhsauiedhfiushuihsf</Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    }
                </div>
            </div>
        </main> 
    )
}

export default Dashboard

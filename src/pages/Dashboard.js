import React, {useState} from 'react';
import { Col, Row } from 'antd';
import { Button, Space, Card, Breadcrumb, Menu, Dropdown, Avatar, Tag, Progress } from 'antd';

import Linechart from '../utilities/charts/Linechart';
import Groupchart from '../utilities/charts/Groupchart';
import Barchart from '../utilities/charts/Barchart';
import Gaugechart from '../utilities/charts/Gaugechart';
import Ringchart from '../utilities/charts/Ringchart';

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
    IconBill

} from '../utilities/Iconsheet';


function Dashboard() {
    // const { TabPane } = Tabs;

    const [tab, setTab] = useState(1);
    function tabChange(t) {
        setTab(t)
    }

    return(
        <main className='content'>

            <div className='pinned-card-wrapper mb-5'>
                
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
                                <IconAdd color="white"/>
                            </Button>
                            <Button type="primary" >
                                <IconTableimport color="white"/>
                            </Button>
                            <Button type="primary">
                                <IconTableexport color="white"/>
                            </Button>
                            <Button type="primary">
                                <IconSettings color="white"/>
                            </Button>
                            <Button type="primary">
                                <IconCustomize color="white"/>
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
                                    <IconBack color='#4B465C'/>
                                    <span>Back</span>
                                </button>
                                <button className='action-link'>
                                    <IconCall color="#4B465C"/>
                                    <span>Call</span>
                                </button>
                                <button className='action-link'>
                                    <IconMail color="#4B465C"/>
                                    <span>Email</span>
                                </button>
                                <button className='action-link'>
                                    <IconMsg color="#4B465C"/>
                                    <span>Message</span>
                                </button>
                                <button className='action-link'>
                                    <IconActivities color="#4B465C"/>
                                    <span>Activities</span>
                                </button>
                            </div>
                            <div className='card-action-right'>
                                <button className='action-link'>
                                    <IconMore color="#4B465C"/>
                                    <span>More Details</span>
                                </button>
                                <button className='action-link stand-alone'>
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
                                            <IconDotbottom color="#4B465C"/>
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

                            <Row gutter={[16, 16]}>
                                <Col span={24}>
                                    <Card className='mb-5'>
                                        <div className='card-panel-wrapper'>
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
                                                        <IconSettingslg color="#4B465C"/>
                                                        <span>Manage Assets</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='card-panel-body'>
                                                <Row gutter={[16, 16]}>
                                                    <Col span={6}>
                                                        <Card>
                                                            <div className='short-card'>
                                                                <figure className='icon-box olive-green'>
                                                                    <IconPhone color="#28C76F"/>
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
                                                    </Col>
                                                    <Col span={6}>
                                                        <Card>
                                                            <div className='short-card'>
                                                                <figure className='icon-box'>
                                                                    <IconMsglg color="#4B465C"/>
                                                                </figure>
                                                                <div className='short-card-details'>
                                                                    <h5>100 SMS Pack</h5>
                                                                    <p>Asset Number <span>0637230</span></p>
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
                                                    </Col>
                                                    <Col span={6}>
                                                        <Card>
                                                            <div className='short-card'>
                                                                <figure className='icon-box olive-green'>
                                                                    <IconData color="#28C76F"/>
                                                                </figure>
                                                                <div className='short-card-details'>
                                                                    <h5>50 GB Data Booster</h5>
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
                                                    </Col>
                                                    <Col span={6}>
                                                        <Card>
                                                            <div className='short-card'>
                                                                <figure className='icon-box red-shade'>
                                                                   <IconVoice color="#EA5455"/>
                                                                </figure>
                                                                <div className='short-card-details'>
                                                                    <h5>12 Months Voice Pack</h5>
                                                                    <p>Asset Number <span>0637230</span></p>
                                                                    <ul className='short-card-status'>
                                                                        <li>
                                                                            <label>Status</label>
                                                                            <p className='red-shade-text'>Suspended</p>
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
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>

                            <Row gutter={[16, 16]}>
                                <Col span={12}>
                                    <Card className='mb-5'>
                                        <div className='card-panel-wrapper'>
                                            <div className='card-panel-header div-flex-between'>
                                                <div className='card-panel-header-left'>
                                                    <h5>Contracts</h5>
                                                </div>
                                                <div className='card-panel-header-right'>
                                                    <button className='action-link'>
                                                        <IconAddlg color="#4B465C" />
                                                        <span>Add</span>
                                                    </button>
                                                    <button className='action-link'>
                                                        <IconSettingslg color="#4B465C"/>
                                                        <span>Manage Assets</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='card-panel-body'>
                                                <Row gutter={[16, 16]}>
                                                    <Col span={12}>
                                                        <Card>
                                                            <div className='short-card horizontal-card'>
                                                                <div className='div-flex-between mb-4'>
                                                                    <figure className='icon-box olive-green round'>
                                                                        <IconDocument color="#28C76F"/>
                                                                    </figure>
                                                                    <button>
                                                                        <Tag bordered={false} className='olive-green'>Download Document</Tag>
                                                                    </button>
                                                                </div>
                                                                <div className='short-card-details'>
                                                                    <h5>CON12345</h5>
                                                                    <ul className='short-card-status'>
                                                                        <li>
                                                                            <label>Status</label>
                                                                            <p className='olive-green-text'>Active</p>
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
                                                    </Col>
                                                    <Col span={12}>
                                                        <Card>
                                                            <div className='short-card horizontal-card'>
                                                                <div className='div-flex-between mb-4'>
                                                                    <figure className='icon-box red-shade round'>
                                                                        <IconDocument color="#EA5455"/>
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
                                                        <IconAddlg color="#4B465C" />
                                                        <span>Add</span>
                                                    </button>
                                                    <button className='action-link'>
                                                        <IconSettingslg color="#4B465C"/>
                                                        <span>Manage Assets</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='card-panel-body'>
                                                <Row gutter={[16, 16]}>
                                                    <Col span={8}>
                                                        <Card>
                                                            <div className='short-card horizontal-card'>
                                                                <div className='div-flex-between mb-4'>
                                                                    <figure className='icon-box blue-berry round'>
                                                                        <IconAvatar color="#634CE3"/>
                                                                    </figure>
                                                                </div>
                                                                <div className='short-card-details'>
                                                                    <h5>Identity Card</h5>
                                                                    <ul className='short-card-status'>
                                                                        <li>
                                                                            <p>1234567890</p>
                                                                            <label>02 Jul 2023</label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Card>
                                                            <div className='short-card horizontal-card'>
                                                                <div className='div-flex-between mb-4'>
                                                                    <figure className='icon-box blue-berry round'>
                                                                        <IconCard color="#634CE3"/>
                                                                    </figure>
                                                                </div>
                                                                <div className='short-card-details'>
                                                                    <h5>GST Document</h5>
                                                                    <ul className='short-card-status'>
                                                                        <li>
                                                                            <p>GSTIN 123 456 7890</p>
                                                                            <label>02 Jul 2023</label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Card>
                                                            <div className='short-card horizontal-card'>
                                                                <div className='div-flex-between mb-4'>
                                                                    <figure className='icon-box blue-berry round'>
                                                                        <IconCard color="#634CE3"/>
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
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>

                            <Row gutter={[16, 16]}>
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
                            <Row gutter={[16, 16]} className='mb-4'>
                                <Col span={6}>
                                    <Card>
                                        <div className='short-card horizontal-card'>
                                            <div className='div-flex-between mb-4'>
                                                <figure className='icon-box olive-green'>
                                                    <IconAnnounce color="#28C76F"/>
                                                </figure>
                                                <ul className='button-list'>
                                                    <li>
                                                        <button>
                                                            <IconCall color="#4B465C"/>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <IconMail color="#4B465C"/>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <IconMsglg color="#4B465C"/>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='short-card-details'>
                                                <h5>$500 <span className='red-shade-text'>(-50%)</span></h5>
                                                <ul className='short-card-status'>
                                                    <li>
                                                        <label>Customer Since 2020</label>
                                                    </li>
                                                </ul>
                                                <div className='short-card-bottom div-flex-between'>
                                                    <p>Customer Lifetime Value</p>
                                                    <button>
                                                        <Tag bordered={false} className='olive-green'>+ Add Offer</Tag>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-overlay'>
                                            <CardOverlay color="#28C76F"/>
                                        </div>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card>
                                        <div className='short-card horizontal-card'>
                                            <div className='div-flex-between mb-4'>
                                                <figure className='icon-box sky-blue'>
                                                    <IconRate color="#18A4FF"/>
                                                </figure>
                                                <Progress percent={90} size="small" status="active" />
                                            </div>
                                            <div className='short-card-details'>
                                                <h5>80%</h5>
                                                <ul className='short-card-status'>
                                                    <li>
                                                        <label>02 Feb 2022  to 02 Feb 2023</label>
                                                    </li>
                                                </ul>
                                                <div className='short-card-bottom div-flex-between'>
                                                    <p>Repurchasing rate</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-overlay'>
                                            <CardOverlay color="#46B6FF"/>
                                        </div>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card>
                                        <div className='short-card horizontal-card'>
                                            <div className='div-flex-between mb-4'>
                                                <figure className='icon-box sea-blue'>
                                                    <IconInvoice color="#00CFE8"/>
                                                </figure>
                                                <button className='action-link'>
                                                    <IconMore color="#4B465C"/>
                                                    <span>More Details</span>
                                                </button>
                                            </div>
                                            <div className='short-card-details'>
                                                <h5>$120</h5>
                                                <ul className='short-card-status'>
                                                    <li>
                                                        <label>Last Invoice Generated on 27 Jun 2023</label>
                                                    </li>
                                                </ul>
                                                <div className='short-card-bottom div-flex-between'>
                                                    <p>Invoice Details</p>
                                                    <button>
                                                        <Tag bordered={false} className='olive-green'>Download</Tag>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-overlay'>
                                            <CardOverlay color="#00CFE8"/>
                                        </div>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card>
                                        <div className='short-card horizontal-card'>
                                            <div className='div-flex-between mb-4'>
                                                <figure className='icon-box red-shade'>
                                                    <IconBill color="#EA5455"/>
                                                </figure>
                                                <ul className='button-list'>
                                                    <li>
                                                        <button>
                                                            <IconCall color="#4B465C"/>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <IconMail color="#4B465C"/>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <IconMsglg color="#4B465C"/>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='short-card-details'>
                                                <h5>$80</h5>
                                                <ul className='short-card-status'>
                                                    <li>
                                                        <label>Last Bill Date 01 Jul 2023</label>
                                                    </li>
                                                </ul>
                                                <div className='short-card-bottom div-flex-between'>
                                                    <p>Last Bill</p>
                                                    <button>
                                                        <Tag bordered={false} className='olive-green'>Pay Now</Tag>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-overlay'>
                                            <CardOverlay color="#EA5455"/>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                            
                            <Row gutter={[16, 16]}>
                                <Col span={12}>
                                    <Row gutter={[16, 16]}>
                                        <Col span={24}>
                                            <Card>
                                                <div className='card-panel-wrapper'>
                                                    <div className='card-panel-header div-flex-between'>
                                                        <div className='card-panel-header-left'>
                                                            <h5>Revenue and Billing</h5>
                                                        </div>
                                                        <div className='card-panel-header-right'>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className='card-panel-body'>

                                                        <Barchart/>

                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col span={24}>
                                            <Card>
                                                <div className='card-panel-wrapper'>
                                                    <div className='card-panel-header div-flex-between'>
                                                        <div className='card-panel-header-left'>
                                                            <h5>Payment History</h5>
                                                        </div>
                                                        <div className='card-panel-header-right'>
                                                            <button className='action-link'>
                                                                <IconMore color="#4B465C"/>
                                                                <span>More Details</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className='card-panel-body'>
                                                        <div className='scrollable'>
                                                            <table className='table'>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Date</th>
                                                                        <th>Transaction ID</th>
                                                                        <th>Payment Number</th>
                                                                        <th>Amount</th>
                                                                        <th>Payment Method</th>
                                                                        <th>Status</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td>$130</td>
                                                                        <td></td>
                                                                        <td className='red-shade-text'>Unpaid</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>14 May 2023</td>
                                                                        <td>ABC 1234567890</td>
                                                                        <td>SO12345</td>
                                                                        <td>$130</td>
                                                                        <td>Debit Card</td>
                                                                        <td className='olive-green-text'>Paid</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>14 May 2023</td>
                                                                        <td>ABC 1234567890</td>
                                                                        <td>SO12345</td>
                                                                        <td>$130</td>
                                                                        <td>Debit Card</td>
                                                                        <td className='olive-green-text'>Paid</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>14 May 2023</td>
                                                                        <td>ABC 1234567890</td>
                                                                        <td>SO12345</td>
                                                                        <td>$130</td>
                                                                        <td>Debit Card</td>
                                                                        <td className='olive-green-text'>Paid</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>14 May 2023</td>
                                                                        <td>ABC 1234567890</td>
                                                                        <td>SO12345</td>
                                                                        <td>$130</td>
                                                                        <td>Debit Card</td>
                                                                        <td className='olive-green-text'>Paid</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>14 May 2023</td>
                                                                        <td>ABC 1234567890</td>
                                                                        <td>SO12345</td>
                                                                        <td>$130</td>
                                                                        <td>Debit Card</td>
                                                                        <td className='olive-green-text'>Paid</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={12}>
                                    <Row gutter={[16, 16]}>
                                        <Col span={12}>
                                            <Card>
                                                <div className='card-panel-wrapper'>
                                                    <div className='card-panel-header div-flex-between'>
                                                        <div className='card-panel-header-left'>
                                                            <h5>Customer Service Experience</h5>
                                                        </div>
                                                        <div className='card-panel-header-right'>
                                                            <button className='action-link'>
                                                                <IconMore color="#4B465C"/>
                                                                <span>More Details</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className='card-panel-body'>
                                                        <Row gutter={[16, 16]}>
                                                            <Col span={12}>
                                                                <Gaugechart/>
                                                            </Col>
                                                            <Col span={12}>
                                                                <ul className='graph-note'>
                                                                    <li>
                                                                        <figure className='icon-box sea-blue'>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                                            <circle cx="14" cy="14" r="10.5" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M14 8.16675V14.0001L17.5 17.5001" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            </svg>
                                                                        </figure>
                                                                        <div className='graph-note-details'>
                                                                            <p>10 Minutes</p>
                                                                            <label>Last Interaction</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <figure className='icon-box sea-blue'>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                                            <circle cx="14" cy="14" r="10.5" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M14 8.16675V14.0001L17.5 17.5001" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            </svg>
                                                                        </figure>
                                                                        <div className='graph-note-details'>
                                                                            <p>20 Cases</p>
                                                                            <label>In Progress</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <figure className='icon-box sea-blue'>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                                            <circle cx="14" cy="14" r="10.5" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M14 8.16675V14.0001L17.5 17.5001" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            </svg>
                                                                        </figure>
                                                                        <div className='graph-note-details'>
                                                                            <p>12</p>
                                                                            <label>No. of Disputes</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <figure className='icon-box sea-blue'>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                                            <circle cx="14" cy="14" r="10.5" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M14 8.16675V14.0001L17.5 17.5001" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            </svg>
                                                                        </figure>
                                                                        <div className='graph-note-details'>
                                                                            <p>No. of Disputes</p>
                                                                            <label>Mode of Interaction</label>
                                                                        </div>
                                                                    </li>
                                                                </ul>   
                                                            </Col>
                                                            <Col span={24}>
                                                            <ul className='graph-note bordered'>
                                                                    <li>
                                                                        <figure className='icon-box sea-blue'>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                                            <circle cx="14" cy="14" r="10.5" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M14 8.16675V14.0001L17.5 17.5001" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            </svg>
                                                                        </figure>
                                                                        <div className='graph-note-details'>
                                                                            <p>12 Calls</p>
                                                                            <label>Average No. of Call to Call Center Per Month</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <figure className='icon-box sea-blue'>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                                            <circle cx="14" cy="14" r="10.5" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M14 8.16675V14.0001L17.5 17.5001" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            </svg>
                                                                        </figure>
                                                                        <div className='graph-note-details'>
                                                                            <p>Network Stability Issues</p>
                                                                            <label>Last Interaction Topic</label>
                                                                        </div>
                                                                    </li>
                                                                </ul> 
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
                                                            <h5>Usage Details</h5>
                                                        </div>
                                                        <div className='card-panel-header-right'>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className='card-panel-body'>
                                                        <Row className='mb-2'>
                                                            <Col span={24} >
                                                                <div className='ring-chart-block'>
                                                                    <Ringchart/>
                                                                    <div className='short-card horizontal-card'>
                                                                        <div className='div-flex-between mb-2'>
                                                                            <figure className='icon-box sandal round'>
                                                                                <IconVoice color="#FF9F43"/> Voice
                                                                            </figure>
                                                                            
                                                                        </div>
                                                                        <div className='short-card-details'>
                                                                            <ul class="short-card-status">
                                                                                <li>
                                                                                    <p>2000 Min</p>
                                                                                    <label>Total</label>
                                                                                </li>
                                                                                <li>
                                                                                    <p>1000 Min</p>
                                                                                    <label>Used</label>
                                                                                </li>
                                                                                <li>
                                                                                    <p>1000 Min</p>
                                                                                    <label>Balance</label>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row className='mb-2'>
                                                        <Col span={24} >
                                                                <div className='ring-chart-block'>
                                                                    <Ringchart/>
                                                                    <div className='short-card horizontal-card'>
                                                                        <div className='div-flex-between mb-2'>
                                                                            <figure className='icon-box sandal round'>
                                                                                <IconVoice color="#FF9F43"/> Voice
                                                                            </figure>
                                                                            
                                                                        </div>
                                                                        <div className='short-card-details'>
                                                                            <ul class="short-card-status">
                                                                                <li>
                                                                                    <p>2000 Min</p>
                                                                                    <label>Total</label>
                                                                                </li>
                                                                                <li>
                                                                                    <p>1000 Min</p>
                                                                                    <label>Used</label>
                                                                                </li>
                                                                                <li>
                                                                                    <p>1000 Min</p>
                                                                                    <label>Balance</label>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                        <Col span={24} >
                                                                <div className='ring-chart-block'>
                                                                    <Ringchart/>
                                                                    <div className='short-card horizontal-card'>
                                                                        <div className='div-flex-between mb-2'>
                                                                            <figure className='icon-box sandal round'>
                                                                                <IconVoice color="#FF9F43"/> Voice
                                                                            </figure>
                                                                            
                                                                        </div>
                                                                        <div className='short-card-details'>
                                                                            <ul class="short-card-status">
                                                                                <li>
                                                                                    <p>2000 Min</p>
                                                                                    <label>Total</label>
                                                                                </li>
                                                                                <li>
                                                                                    <p>1000 Min</p>
                                                                                    <label>Used</label>
                                                                                </li>
                                                                                <li>
                                                                                    <p>1000 Min</p>
                                                                                    <label>Balance</label>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Card>
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

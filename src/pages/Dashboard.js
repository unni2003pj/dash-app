import React, {useState} from 'react';
import { Col, Row } from 'antd';
import { Button, Space, Card, Breadcrumb, Menu, Dropdown, Avatar, Tag, Progress, Select } from 'antd';

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
    IconBill,
    IconVoicesm

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
                                                    </Col>
                                                    <Col span={6}>
                                                        <Card>
                                                            <div className='short-card'>
                                                                <figure className='icon-box'>
                                                                    <IconMsglg color="#4B465C"/>
                                                                </figure>
                                                                <div className='short-card-details'>
                                                                    <h5>100 SMS Pack</h5>
                                                                    <p>Asset Number<span>0637230</span></p>
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
                                                    </Col>
                                                    <Col span={6}>
                                                        <Card>
                                                            <div className='short-card'>
                                                                <figure className='icon-box red-shade'>
                                                                   <IconVoice color="#EA5455"/>
                                                                </figure>
                                                                <div className='short-card-details'>
                                                                    <h5>12 Months Voice Pack</h5>
                                                                    <p>Asset Number<span>0637230</span></p>
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
                                                                <div className='div-flex-between mb-1'>
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
                                                                <div className='div-flex-between mb-1'>
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
                                                                <div className='div-flex-between mb-1'>
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
                                                                <div className='div-flex-between mb-1'>
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
                                                                <div className='div-flex-between mb-1'>
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
                                                    <div className='select-box'>
                                                        <Select defaultValue="Line Graph" >
                                                            <option value="Line Graph">Line Graph</option>
                                                            <option value="Bar Graph">Bar Graph</option>
                                                            <option value="Gauge Graph">Gauge Graph</option>
                                                        </Select>
                                                    </div>
                                                    <div className='select-box'>
                                                        <Select defaultValue="Monthly" >
                                                            <option value="Monthly">Monthly</option>
                                                            <option value="Weekly">Weekly</option>
                                                            <option value="Yearly">Yearly</option>
                                                        </Select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card-panel-body'>
                                                <div className='chart-wrapper'>
                                                    <ul className='chart-denotation'>
                                                        <li className='total'>
                                                            <p>259</p>
                                                            <label>Total</label>
                                                        </li>
                                                        <li className='success'>
                                                            <p>57</p>
                                                            <label>Sucess</label>
                                                        </li>
                                                        <li className='pending'>
                                                            <p>49</p>
                                                            <label>Sucess</label>
                                                        </li>
                                                        <li className='failed'>
                                                            <p>76</p>
                                                            <label>Sucess</label>
                                                        </li>
                                                    </ul>
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
                                                    <div className='select-box'>
                                                        <Select defaultValue="Bar Graph" >
                                                            <option value="Line Graph">Line Graph</option>
                                                            <option value="Bar Graph">Bar Graph</option>
                                                            <option value="Gauge Graph">Gauge Graph</option>
                                                        </Select>
                                                    </div>
                                                    <div className='select-box'>
                                                        <Select defaultValue="Monthly" >
                                                            <option value="Monthly">Monthly</option>
                                                            <option value="Weekly">Weekly</option>
                                                            <option value="Yearly">Yearly</option>
                                                        </Select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card-panel-body'>
                                                <ul className='chart-denotation'>
                                                    <li className='total'>
                                                        <p>259</p>
                                                        <label>Total</label>
                                                    </li>
                                                    <li className='success'>
                                                        <p>57</p>
                                                        <label>Sucess</label>
                                                    </li>
                                                    <li className='pending'>
                                                        <p>49</p>
                                                        <label>Sucess</label>
                                                    </li>
                                                    <li className='failed'>
                                                        <p>76</p>
                                                        <label>Sucess</label>
                                                    </li>
                                                </ul>
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
                                                <div className='progress-block high'>
                                                    <label>High</label>
                                                    <Progress percent={90} size="small" status="active" />
                                                </div>
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
                                                            <div className='select-box'>
                                                                <Select defaultValue="Last 6 Months" >
                                                                    <option value="Last 3 Months">Last 3 Months</option>
                                                                    <option value="Last 6 Months">Last 6 Months</option>
                                                                    <option value="Last 9 Months">Last 9 Months</option>
                                                                </Select>
                                                            </div>
                                                            <button className='action-link'>
                                                                <IconMore color="#4B465C"/>
                                                                <span>More Details</span>
                                                            </button>
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
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 24.5V5.83333C3.5 4.54467 4.84315 3.5 6.5 3.5H21.5C23.1569 3.5 24.5 4.54467 24.5 5.83333V24.5L20 22.1667L17 24.5L14 22.1667L11 24.5L8 22.1667L3.5 24.5Z" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M9.33337 12.8334C9.33337 12.1891 9.85571 11.6667 10.5 11.6667V11.6667C11.1444 11.6667 11.6667 12.1891 11.6667 12.8334V14.0001C11.6667 14.6444 11.1444 15.1667 10.5 15.1667V15.1667C9.85571 15.1667 9.33337 14.6444 9.33337 14.0001V12.8334Z" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M16.3334 12.8334C16.3334 12.1891 16.8557 11.6667 17.5 11.6667V11.6667C18.1444 11.6667 18.6667 12.1891 18.6667 12.8334V14.0001C18.6667 14.6444 18.1444 15.1667 17.5 15.1667V15.1667C16.8557 15.1667 16.3334 14.6444 16.3334 14.0001V12.8334Z" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M9.33337 12.8334V11.2424C9.33337 8.89942 11.4227 7.00002 14 7.00002C16.5774 7.00002 18.6667 8.89942 18.6667 11.2424V12.8334" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M17.5 15.1667C17.5 16.7131 16.4553 18.6667 15.1666 18.6667" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                                            <path d="M8.16667 15.1665V5.83322C8.16667 5.18888 7.64433 4.66655 7 4.66655H4.66667C4.02233 4.66655 3.5 5.18888 3.5 5.83322V13.9999C3.5 14.6442 4.02233 15.1665 4.66667 15.1665H8.16667C10.744 15.1665 12.8333 17.2559 12.8333 19.8332V20.9999C12.8333 22.2885 13.878 23.3332 15.1667 23.3332C16.4553 23.3332 17.5 22.2885 17.5 20.9999V15.1665H21C22.2887 15.1665 23.3333 14.1219 23.3333 12.8332L22.1667 6.99988C21.822 5.52958 20.8707 4.57829 19.8333 4.66655H11.6667C9.73367 4.66655 8.16667 6.23355 8.16667 8.16655" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 22.2727L8.27273 17.5H19.4091C20.2877 17.5 21 16.7877 21 15.9091V5.09091C21 4.21227 20.2877 3.5 19.4091 3.5H5.09091C4.21227 3.5 3.5 4.21227 3.5 5.09091V22.2727Z" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M7.58337 8.16675H16.9167" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M7.58337 12.8333H14.5834" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M11.6667 17.5001V19.8334C11.6667 20.4777 12.189 21.0001 12.8333 21.0001H21L24.5 24.5001V12.8334C24.5 12.1891 23.9777 11.6667 23.3333 11.6667H21" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                                            <path d="M5.83333 4.6665H10.5L12.8333 10.4998L9.91667 12.2498C11.1661 14.7833 13.2165 16.8337 15.75 18.0832L17.5 15.1665L23.3333 17.4998V22.1665C23.3333 23.4552 22.2887 24.4998 21 24.4998C11.5823 23.9275 4.07232 16.4176 3.5 6.99984C3.5 5.71117 4.54467 4.6665 5.83333 4.6665" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M17.5 8.1665C18.7887 8.1665 19.8333 9.21117 19.8333 10.4998" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M17.5 3.5C21.366 3.5 24.5 6.63401 24.5 10.5" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 22.2727L8.27273 17.5H19.4091C20.2877 17.5 21 16.7877 21 15.9091V5.09091C21 4.21227 20.2877 3.5 19.4091 3.5H5.09091C4.21227 3.5 3.5 4.21227 3.5 5.09091V22.2727Z" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M7.58337 8.16675H16.9167" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M7.58337 12.8333H14.5834" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M11.6667 17.5001V19.8334C11.6667 20.4777 12.189 21.0001 12.8333 21.0001H21L24.5 24.5001V12.8334C24.5 12.1891 23.9777 11.6667 23.3333 11.6667H21" stroke="#00CFE8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                            <div className='progress-block medium'>
                                                                <p>Overall Consumption Level</p>
                                                                <label>Medium</label>
                                                                <Progress percent={66} size="small" status="active" />
                                                            </div>
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
                                                                                <IconVoicesm color="#FF9F43"/> Voice
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
                                                                                <IconVoicesm color="#FF9F43"/> Voice
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
                                                                                <IconVoicesm color="#FF9F43"/> Voice
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
                                                                <div className='ring-chart-more-info'>
                                                                    <ul class="short-card-status">
                                                                        <li>
                                                                            <p>Average No. of Calls</p>
                                                                            <label>Per month</label>
                                                                        </li>
                                                                        <li>
                                                                            <p>120</p>
                                                                            <label>Total</label>
                                                                        </li>
                                                                        <li>
                                                                            <p>22</p>
                                                                            <label>International</label>
                                                                        </li>
                                                                        <li>
                                                                            <p>178</p>
                                                                            <label>Roaming</label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
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
                                                            <h5>Network Experience</h5>
                                                        </div>
                                                        <div className='card-panel-header-right'>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className='card-panel-body'>
                                                        <Row gutter={[16, 16]}>
                                                            <Col span={12}>
                                                                <Ringchart/>     
                                                            </Col> 
                                                            <Col span={12}>     
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card>
                                                <div className='short-card horizontal-card'>
                                                    <div className='card-panel-header div-flex-between'>
                                                        <div className='card-panel-header-left'>
                                                            <h5>Network Experience</h5>
                                                        </div>
                                                        <div className='card-panel-header-right'>
                                                            
                                                        </div>
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

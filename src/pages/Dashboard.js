import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { Button, Space, Card, Breadcrumb, Menu, Dropdown, Select, Avatar, Tag, Drawer, Checkbox, Radio } from 'antd';
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
    IconSettingslg
} from '../utilities/Iconsheet';
import Container from '../utilities/dnd/Container';
import CardIphone from '../views/cards/CardIphone';
import CardSms from '../views/cards/CardSms';
import CardData from '../views/cards/CardData';
import CardVoice from '../views/cards/CardVoice';
import CardContractOne from '../views/cards/CardContractOne';
import CardContractTwo from '../views/cards/CardContractTwo';
import CardDocumentOne from '../views/cards/CardDocumentOne';
import CardDocumentTwo from '../views/cards/CardDocumentTwo';
import CardDocumentThree from '../views/cards/CardDocumentThree';
import CardLineChart from '../views/cards/CardLineChart';
import CardGroupChart from '../views/cards/CardGroupChart';

function Dashboard() {
    
    const [tab, setTab] = useState(2);
    function tabChange(t) {
        setTab(t)
    }

    const [visible, setVisible] = useState(false);

    return (
        <main className='content'>

            <div className='pinned-card-wrapper mb-3'>

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
                        <Space wrap className='hide'>
                            <Button type="primary" 
                            onClick={() => {
                                setVisible(true);
                            }}>
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
                        <Space className=''>
                            <Button type="primary" className='grey-btn'>
                                <IconAdd color="#4B465C"/>
                                <span>Add Row</span>
                            </Button>
                            <Button type="primary" className='purple-btn'>
                                <IconAdd color="#4B465C"/>
                                <span>Add Column</span>
                            </Button>
                            <Button type="primary" className='general-btn'>
                                <IconCustomize color="white" />
                                <span>Exit Customization</span>
                            </Button>
                            <Drawer
                                title="Add Widget"
                                placement="right"
                                visible={visible}
                                width='500'
                                onClose={() => {
                                    setVisible(false)
                                }}
                            >
                                <div className='input-block'>
                                    <label>Module Status <span className='mandate'>*</span></label>
                                    <div className='checkbox-wrapper'>
                                        <Checkbox>Show</Checkbox>
                                        <Checkbox>Hide</Checkbox>
                                    </div>
                                </div>

                                <div className='input-block'>
                                    <div className='each-radio-panel active'>
                                        <input type='radio' className='radio-active' name='widget' />
                                        <label>Default Widgets</label>
                                        <p>You cannot customize this widget</p>
                                    </div>
                                    <div className='each-radio-panel'>
                                        <input type='radio' name='widget' />
                                        <label>Static Widgets</label>
                                        <p>You cannot customize this widget</p>
                                    </div>
                                    <div className='each-radio-panel'>
                                        <input type='radio' name='widget' />
                                        <label>Dynamic Widgets</label>
                                        <p>You cannot customize this widget</p>
                                    </div>
                                </div>
                                <div className='input-block'>
                                    <label>Module Action <span className='mandate'>*</span></label>
                                    <Radio.Group>
                                        <Radio value={1}>Add  New Widget </Radio>
                                        <Radio value={2}>Add from Widget Gallery</Radio>
                                    </Radio.Group>
                                </div>
                                <div className='input-block'>
                                    <label>Select Module *</label>
                                    <div className='select-box'>
                                        <Select defaultValue="Line Graph" style={{ height: 48 }} >
                                            <option value="Select Module">Select Module</option>
                                            <option value="Line Graph">Line Graph</option>
                                            <option value="Bar Graph">Bar Graph</option>
                                            <option value="Gauge Graph">Gauge Graph</option>
                                        </Select>
                                    </div>
                                </div>
                                <div className='input-block'>
                                    <label>Select Related Module *</label>
                                    <div className='select-box'>
                                        <Select defaultValue="Line Graph" style={{ height: 48 }} >
                                            <option value="Select Module">Select Related Module</option>
                                            <option value="Line Graph">Line Graph</option>
                                            <option value="Bar Graph">Bar Graph</option>
                                            <option value="Gauge Graph">Gauge Graph</option>
                                        </Select>
                                    </div>
                                </div>
                                <div className='input-block'>
                                    <label>Select Group By Field *</label>
                                    <div className='select-box'>
                                        <Select defaultValue="Line Graph" style={{ height: 48 }} >
                                            <option value="Select Module">Select Group By Field</option>
                                            <option value="Line Graph">Line Graph</option>
                                            <option value="Bar Graph">Bar Graph</option>
                                            <option value="Gauge Graph">Gauge Graph</option>
                                        </Select>
                                    </div>
                                </div>
                                {/* <Button type="primary">Add Widgets</Button> */}
                            </Drawer>
                        </Space>
                    </div>
                </div>

                <div className='pinned-main-card'>
                    <Card>
                        <div className='card-action-area div-flex-between'>
                            <div className='card-action-left'>
                                <button className='action-link'>
                                    <IconBack color='#4B465C' />
                                    <span>Back</span>
                                </button>
                                <button className='action-link'>
                                    <IconCall color="#4B465C" />
                                    <span>Call</span>
                                </button>
                                <button className='action-link'>
                                    <IconMail color="#4B465C" />
                                    <span>Email</span>
                                </button>
                                <button className='action-link'>
                                    <IconMsg color="#4B465C" />
                                    <span>Message</span>
                                </button>
                                <button className='action-link'>
                                    <IconActivities color="#4B465C" />
                                    <span>Activities</span>
                                </button>

                            </div>
                            <div className='card-action-right'>
                                <button className='action-link'>
                                    <IconMore color="#4B465C" />
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
                                            <IconDotbottom color="#4B465C" />
                                        </span>
                                    </Dropdown>
                                </button>
                            </div>
                        </div>

                        <div className='card-content-area'>
                            <div className='nav-tab-wrapper'>
                                <div className="dashboard-nav-tab">
                                    <nav className={tab === 1 ? "nav-tab active" : "nav-tab"} onClick={() => tabChange(1)}>Account Details</nav>
                                    <nav className={tab === 2 ? "nav-tab active" : "nav-tab"} onClick={() => tabChange(2)}>Customer 360</nav>
                                </div>

                                <div className='dashbaord-data-wrapper div-flex'>
                                    <Avatar>MQ</Avatar>
                                    <div className='dashboard-data-right'>
                                        <div className='dashboard-data-right-top'>
                                            <h5>Standard Chartered</h5>
                                            <Row gutter={16}>
                                                <Col xxl={4} lg={6} md={12} sm={12} xs={12} span={4}>
                                                    <div className='short-description'>
                                                        <label>Account Number</label>
                                                        <p>AD001122</p>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} lg={6} md={12} sm={12} xs={12} span={4}>
                                                    <div className='short-description'>
                                                        <label>Customer Type</label>
                                                        <p>Business</p>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} lg={6} md={12} sm={12} xs={12} span={4}>
                                                    <div className='short-description'>
                                                        <label>Total Revenue</label>
                                                        <p>$5000.00</p>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} lg={6} md={12} sm={12} xs={12} span={4}>
                                                    <div className='short-description'>
                                                        <label>Customer Rating</label>
                                                        <p>AD001122</p>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} lg={6} md={12} sm={12} xs={12} span={4}>
                                                    <div className='short-description'>
                                                        <label>KYC Status</label>
                                                        <p>Verified</p>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} lg={6} md={12} sm={12} xs={12} span={4}>
                                                    <div className='short-description'>
                                                        <label>Loyality Points</label>
                                                        <p>100</p>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} lg={6} md={12} sm={12} xs={12} span={4}>
                                                    <div className='short-description'>
                                                        <label>Phone Number</label>
                                                        <p>+123 456 7890</p>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} lg={6} md={12} sm={12} xs={12} span={4}>
                                                    <div className='short-description'>
                                                        <label>Status</label>
                                                        <p>Active</p>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} lg={6} md={12} sm={12} xs={12} span={4}>
                                                    <div className='short-description'>
                                                        <label>Platform</label>
                                                        <p>Postpaid</p>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} lg={6} md={12} sm={12} xs={12} span={4}>
                                                    <div className='short-description'>
                                                        <label>Credit Score</label>
                                                        <p>Good</p>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} lg={6} md={12} sm={12} xs={12} span={4}>
                                                    <div className='short-description'>
                                                        <label>Balance</label>
                                                        <p>$200.00</p>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} lg={6} md={12} sm={12} xs={12} span={4}>
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

                    {tab === 1 &&

                        <div className="tab-pane">

                            <Row gutter={[16, 16]} className='mb-3'>

                                <Col span={24}>
                                    <Card>
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
                                                        <IconSettingslg color="#4B465C" />
                                                        <span>Manage Assets</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='card-panel-body'>
                                                <Row gutter={[16, 16]}>
                                                    <Col>
                                                        <CardIphone />
                                                    </Col>
                                                    <Col>
                                                        <CardSms />
                                                    </Col>
                                                    <Col>
                                                        <CardData />
                                                    </Col>
                                                    <Col>
                                                        <CardVoice />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>

                            </Row>

                            <Row gutter={[16, 16]} className='mb-3'>

                                <Col xl={12} lg={24} xs={24} span={12}>
                                    <Card>
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
                                                        <IconSettingslg color="#4B465C" />
                                                        <span>Manage Assets</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='card-panel-body'>
                                                <Row gutter={[16, 16]}>
                                                    <Col xl={12} lg={12} xs={24} span={12}>
                                                        <CardContractOne />
                                                    </Col>
                                                    <Col xl={12} lg={12} xs={24} span={12}>
                                                        <CardContractTwo />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>

                                <Col xl={12} lg={24} xs={24} span={12}>
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
                                                        <IconSettingslg color="#4B465C" />
                                                        <span>Manage Assets</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='card-panel-body'>
                                                <Row gutter={[16, 16]}>
                                                    <Col xl={8} lg={8} xs={24} span={8}>
                                                        <CardDocumentOne />
                                                    </Col>
                                                    <Col xl={8} lg={8} xs={24} span={8}>
                                                        <CardDocumentTwo />
                                                    </Col>
                                                    <Col xl={8} lg={8} xs={24} span={8}>
                                                        <CardDocumentThree />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>

                            </Row>

                            <Row gutter={[16, 16]}>

                                <Col xl={12} lg={24} xs={24} span={12}>
                                    <CardLineChart />
                                </Col>

                                <Col xl={12} lg={24} xs={24} span={12}>
                                    <CardGroupChart />
                                </Col>

                            </Row>

                        </div>
                    }

                    {tab === 2 &&

                        <div className="tab-pane">

                            <Container />

                            {/* <Row gutter={[16, 16]} className='mb-4'>
                                <Col xl={6} lg={12} xs={24} span={6}>
                                    <CardStatOne/>
                                </Col>
                                <Col xl={6} lg={12} xs={24} span={6}>
                                    <CardStatTwo/>
                                </Col>
                                <Col xl={6} lg={12} xs={24} span={6}>
                                    <CardStatThree/>
                                </Col>
                                <Col xl={6} lg={12} xs={24} span={6}>
                                    <CardStatFour/>
                                </Col>
                            </Row>

                            <Row gutter={[16, 16]}>
                                <Col xl={12} lg={24} xs={24} span={12}>
                                    <Row gutter={[16, 16]}>
                                        <Col span={24}>
                                            <CardBarChart/>
                                        </Col>
                                        <Col span={24}>
                                            <CardTable/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={12} lg={24} xs={24} span={12}>
                                    <Row gutter={[16, 16]}>
                                        <Col xl={12} lg={24} xs={24} span={12}>
                                            <CardGaugeChart/>
                                        </Col>
                                        <Col xl={12} lg={24} xs={24} span={12}>
                                            <CardRingChart/>
                                        </Col>
                                        <Col xl={12} lg={24} xs={24} span={12}>
                                            <CardNetwork/>
                                        </Col>
                                        <Col xl={12} lg={24} xs={24} span={12}>
                                            <CardSocial/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row> */}

                        </div>
                    }

                </div>

            </div>

        </main>
    )
}

export default Dashboard

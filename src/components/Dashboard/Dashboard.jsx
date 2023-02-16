import React from 'react';
import styles from './Dashboard.module.scss';
import { Link } from 'react-router-dom';
import PageHeader from '../../Layouts/PageHeader/PageHeader';
import { Card, Col, OverlayTrigger, ProgressBar, Row, Tooltip, Table, Tab, Nav } from 'react-bootstrap';
import { AllProduct, Worldmap, Shipped, Pending, Cancelled, SalesAnalytics, RecentOrder, TotalUser, TotalProfit, TotalExpenses, TotalCost } from '../../Data/DataDashBoard/DashBoardData';

const Dashboard = () => {

  return (

    <div className={styles.Dashboard}>
      <PageHeader titles="Dashboard 01" active="Dashboard 01" items={['Home']} />

      {/* <!-- ROW-1 --> */}

      <Row>
        <Col lg={12} md={12} sm={12} xl={12}>
          <Row>
            <Col lg={6} md={6} sm={12} xxl={3}>
              <Card className="overflow-hidden">
                <Card.Body>
                  <div className="d-flex" >
                    <div className="mt-2">
                      <h6 className="">Total Users</h6>
                      <h2 className="mb-0 number-font">44,278</h2>
                    </div>
                    <div className="ms-auto">
                      <div className="chart-wrapper mt-1">
                        <TotalUser />
                      </div>
                    </div>
                  </div>
                  <span className="text-muted fs-12"><span className="text-secondary mx-2"><i
                    className="fe fe-arrow-up-circle  text-secondary"></i> 5%</span>
                    Last week</span>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6} sm={12} xxl={3}>
              <div className="card overflow-hidden">
                <Card.Body>
                  <div className="d-flex">
                    <div className="mt-2">
                      <h6 className="">Total Profit</h6>
                      <h2 className="mb-0 number-font">67,987</h2>
                    </div>
                    <div className="ms-auto">
                      <div className="chart-wrapper mt-1">
                        <TotalProfit />
                      </div>
                    </div>
                  </div>
                  <span className="text-muted fs-12"><span className="text-pink mx-2"><i
                    className="fe fe-arrow-down-circle text-pink"></i> 0.75%</span>
                    Last 6 days</span>
                </Card.Body>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xxl={3}>
              <div className="card overflow-hidden">
                <Card.Body>
                  <div className="d-flex">
                    <div className="mt-2">
                      <h6 className="">Total Expenses</h6>
                      <h2 className="mb-0 number-font">$76,965</h2>
                    </div>
                    <div className="ms-auto">
                      <div className="chart-wrapper mt-1">
                        <TotalExpenses />
                      </div>
                    </div>
                  </div>
                  <span className="text-muted fs-12"><span className="text-green mx-2"><i
                    className="fe fe-arrow-up-circle text-green"></i> 0.9%</span>
                    Last 9 days</span>
                </Card.Body>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xxl={3}>
              <Card className="overflow-hidden">
                <Card.Body>
                  <div className="d-flex">
                    <div className="mt-2">
                      <h6 className="">Total Cost</h6>
                      <h2 className="mb-0 number-font">$59,765</h2>
                    </div>
                    <div className="ms-auto">
                      <div className="chart-wrapper mt-1">
                        <TotalCost />
                      </div>
                    </div>
                  </div>
                  <span className="text-muted fs-12"><span className="text-warning mx-2"><i
                    className="fe fe-arrow-up-circle text-warning"></i> 0.6%</span>
                    Last year</span>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <!-- ROW-1 END --> */}

      {/* <!-- ROW-2 --> */}
      <Row>
        <Col sm={12} md={12} lg={12} xl={8} xxl={9}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Sales Analytics</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="chartjs-wrapper-demo myChartSaah">
                <SalesAnalytics />
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} sm={12} lg={12} xl={4} xxl={3}>
          <Card className="overflow-hidden">
            <Card.Body className="pb-0 bg-recentorder">
              <Card.Title as="h3" className="text-white">Recent Orders</Card.Title>
              <div className="chartjs-wrapper-demo">
                <RecentOrder />
              </div>
            </Card.Body>
            <div id="flotback-chart" className="flot-background"></div>
            <Card.Body>
              <div className="d-flex mb-4 mt-3">
                <div
                  className="avatar avatar-md bg-secondary-transparent text-secondary bradius me-3">
                  <i className="fe fe-check"></i>
                </div>
                <div className="">
                  <h6 className="mb-1 fw-semibold">Delivered Orders</h6>
                  <p className="fw-normal fs-12"> <span className="text-success mx-1">3.5%</span>
                    increased </p>
                </div>
                <div className=" ms-auto my-auto">
                  <p className="fw-bold fs-20"> 1,768 </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="avatar  avatar-md bg-pink-transparent text-pink bradius me-3">
                  <i className="fe fe-x"></i>
                </div>
                <div className="">
                  <h6 className="mb-1 fw-semibold">Cancelled Orders</h6>
                  <p className="fw-normal fs-12"> <span className="text-success mx-1">1.2%</span>
                    increased </p>
                </div>
                <div className=" ms-auto my-auto">
                  <p className="fw-bold fs-20 mb-0"> 3,675 </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-2 END --> */}

      {/* <!-- ROW-3 --> */}
      <Row>
        <Col xl={4} md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h4" className="fw-semibold">Daily Activity</Card.Title>
            </Card.Header>
            <Card.Body className="pb-0">
              <ul className="task-list">
                <li className="d-sm-flex">
                  <div>
                    <i className="task-icon bg-primary"></i>
                    <h6 className="fw-semibold">Task Finished<span
                      className="text-muted fs-11 ms-2 fw-normal">09 July 2021</span>
                    </h6>
                    <p className="text-muted fs-12">Adam Berry finished task on<Link to="#"
                      className="fw-semibold"> Project Management</Link></p>
                  </div>
                  <div className="ms-auto d-md-flex">
                    <Link to="#" ><OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}><span className="fe fe-edit me-2 text-muted"></span></OverlayTrigger></Link>
                    <Link to="#" ><OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}><span className="fe fe-trash-2 text-muted"></span></OverlayTrigger></Link>
                  </div>
                </li>
                <li className="d-sm-flex">
                  <div>
                    <i className="task-icon bg-secondary"></i>
                    <h6 className="fw-semibold">New Comment<span
                      className="text-muted fs-11 ms-2 fw-normal">05 July 2021</span>
                    </h6>
                    <p className="text-muted fs-12">Victoria commented on Project <Link
                      to="#" className="fw-semibold"> AngularJS Template</Link></p>
                  </div>
                  <div className="ms-auto d-md-flex">
                    <Link to="#" ><OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}><span className="fe fe-edit me-2 text-muted"></span></OverlayTrigger></Link>
                    <Link to="#" ><OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}><span className="fe fe-trash-2 text-muted"></span></OverlayTrigger></Link>
                  </div>
                </li>
                <li className="d-sm-flex">
                  <div>
                    <i className="task-icon bg-success"></i>
                    <h6 className="fw-semibold">New Comment<span
                      className="text-muted fs-11 ms-2 fw-normal">25 June 2021</span>
                    </h6>
                    <p className="text-muted fs-12">Victoria commented on Project <Link
                      to="#" className="fw-semibold"> AngularJS Template</Link></p>
                  </div>
                  <div className="ms-auto d-md-flex">
                    <Link to="#" ><OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}><span className="fe fe-edit me-2 text-muted"></span></OverlayTrigger></Link>
                    <Link to="#" ><OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}><span className="fe fe-trash-2 text-muted"></span></OverlayTrigger></Link>
                  </div>
                </li>
                <li className="d-sm-flex">
                  <div>
                    <i className="task-icon bg-warning"></i>
                    <h6 className="fw-semibold">Task Overdue<span
                      className="text-muted fs-11 ms-2 fw-normal">14 June 2021</span>
                    </h6>
                    <p className="text-muted mb-0 fs-12">Petey Cruiser finished task <Link
                      to="#" className="fw-semibold"> Integrated management</Link></p>
                  </div>
                  <div className="ms-auto d-md-flex">
                    <Link to="#" ><OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}><span className="fe fe-edit me-2 text-muted"></span></OverlayTrigger></Link>
                    <Link to="#" ><OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}><span className="fe fe-trash-2 text-muted"></span></OverlayTrigger></Link>
                  </div>
                </li>
                <li className="d-sm-flex">
                  <div>
                    <i className="task-icon bg-danger"></i>
                    <h6 className="fw-semibold">Task Overdue<span
                      className="text-muted fs-11 ms-2 fw-normal">29 June 2021</span>
                    </h6>
                    <p className="text-muted mb-0 fs-12">Petey Cruiser finished task <Link
                      to="#" className="fw-semibold"> Integrated management</Link></p>
                  </div>
                  <div className="ms-auto d-md-flex">
                    <Link to="#" ><OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}><span className="fe fe-edit me-2 text-muted"></span></OverlayTrigger></Link>
                    <Link to="#" ><OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}><span className="fe fe-trash-2 text-muted"></span></OverlayTrigger></Link>
                  </div>
                </li>
                <li className="d-sm-flex">
                  <div>
                    <i className="task-icon bg-info"></i>
                    <h6 className="fw-semibold">Task Finished<span
                      className="text-muted fs-11 ms-2 fw-normal">09 July 2021</span>
                    </h6>
                    <p className="text-muted fs-12">Adam Berry finished task on<Link to="#"
                      className="fw-semibold"> Project Management</Link></p>
                  </div>
                  <div className="ms-auto d-md-flex">
                    <Link to="#" ><OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}><span className="fe fe-edit me-2 text-muted"></span></OverlayTrigger></Link>
                    <Link to="#" ><OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}><span className="fe fe-trash-2 text-muted"></span></OverlayTrigger></Link>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={12}>
          <Card className="overflow-hidden">
            <Card.Header>
              <div>
                <Card.Title as="h3">Sales Report by Locations with Devices</Card.Title>
              </div>
            </Card.Header>
            <Card.Body className="p-0 mt-2">
              <div className="text-center">
                <Worldmap />
              </div>
              <div className="table-responsive mt-2 text-center">
                <Table className="text-nowrap border-dashed mb-0">
                  <thead>
                    <tr>
                      <th className="text-start">Device</th>
                      <th className="">USA</th>
                      <th className="">India</th>
                      <th className="">Bahrain</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-start p-4"><span
                        className="sales-icon text-primary mx-2 brround bg-primary-transparent p-2"><svg
                          xmlns="http://www.w3.org/2000/svg" width="18"
                          height="18" fill="currentColor" className="bi
                                    bi-phone" viewBox="0 0 16 16">
                          <path
                            d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg></span><span className="mobile">Mobiles</span>
                      </td>
                      <td className="p-4">17%</td>
                      <td className="p-4">22%</td>
                      <td className="p-4">11%</td>
                    </tr>
                    <tr>
                      <td className="text-start p-4"><span
                        className="sales-icon text-secondary mx-2 brround bg-secondary-transparent p-2"><svg
                          xmlns="http://www.w3.org/2000/svg" width="18"
                          height="18" fill="currentColor
                                " className="bi bi-display" viewBox="0 0 16 16">
                          <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46
                                    0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757
                                    0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
                        </svg></span>Desktops</td>
                      <td className="p-4">34%</td>
                      <td className="p-4">76%</td>
                      <td className="p-4">58%</td>
                    </tr>
                    <tr>
                      <td className="text-start p-4"><span
                        className="sales-icon text-danger mx-2 brround bg-danger-transparent p-2"><svg
                          xmlns="http://www.w3.org/2000/svg" width="18"
                          height="18" fill="currentColor" className="bi bi-tablet
                                " viewBox="0 0 16 16">
                          <path
                            d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg></span>Tablets</td>
                      <td className="p-4">56%</td>
                      <td className="p-4">83%</td>
                      <td className="p-4">66%</td>
                    </tr>
                  </tbody>
                </Table>
                {/* <!--end /table--> */}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h3" className="fw-semibold">Browser Usage</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="browser-stats">
                <Row className="mb-4">
                  <Col sm={2} lg={3} xl={3} xxl={2} className="mb-sm-0 mb-3">
                    <img src={require("../../assets/images/browsers/chrome.svg").default} className="img-fluid" alt="img"
                    />
                  </Col>
                  <Col sm={10} lg={9} xl={9} xxl={10} className="ps-sm-0">
                    <div className="d-flex align-items-end justify-content-between mb-1">
                      <h6 className="mb-1">Chrome</h6>
                      <h6 className="fw-semibold mb-1">35,502 <span
                        className="text-success fs-11">(<i
                          className="fe fe-arrow-up"></i>12.75%)</span></h6>
                    </div>
                    <ProgressBar variant='primary' className="h-2 mb-3 " now={70} />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col sm={2} lg={3} xl={3} xxl={2} className="mb-sm-0 mb-3">
                    <img src={require("../../assets/images/browsers/opera.svg").default} className="img-fluid"
                      alt="img" />
                  </Col>
                  <Col sm={10} lg={9} xl={9} xxl={10} className="ps-sm-0">
                    <div className="d-flex align-items-end justify-content-between mb-1">
                      <h6 className="mb-1">Opera</h6>
                      <h6 className="fw-semibold mb-1">12,563 <span
                        className="text-danger fs-11">(<i
                          className="fe fe-arrow-down"></i>15.12%)</span></h6>
                    </div>
                    <ProgressBar variant='secondary' className="h-2 mb-3 " now={40} />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col sm={2} lg={3} xl={3} xxl={2} className="mb-sm-0 mb-3">
                    <img src={require("../../assets/images/browsers/uc-browser.svg").default} className="img-fluid"
                      alt="img" />
                  </Col>
                  <Col sm={10} lg={9} xl={9} xxl={10} className="ps-sm-0">
                    <div className="d-flex align-items-end justify-content-between mb-1">
                      <h6 className="mb-1">UC</h6>
                      <h6 className="fw-semibold mb-1">25,364 <span
                        className="text-success fs-11">(<i
                          className="fe fe-arrow-down"></i>24.37%)</span></h6>
                    </div>
                    <ProgressBar variant='success' className="h-2 mb-3 " now={50} />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col sm={2} lg={3} xl={3} xxl={2} className="mb-sm-0 mb-3">
                    <img src={require("../../assets/images/browsers/firefox.svg").default} className="img-fluid"
                      alt="img" />
                  </Col>
                  <Col sm={10} lg={9} xl={9} xxl={10} className="ps-sm-0">
                    <div className="d-flex align-items-end justify-content-between mb-1">
                      <h6 className="mb-1">Firefox</h6>
                      <h6 className="fw-semibold mb-1">14,635 <span
                        className="text-success fs-11">(<i
                          className="fe fe-arrow-down"></i>15.63%)</span></h6>
                    </div>
                    <ProgressBar variant='danger' className="h-2 mb-3 " now={50} />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col sm={2} lg={3} xl={3} xxl={2} className="mb-sm-0 mb-3">
                    <img src={require("../../assets/images/browsers/edge.svg").default} className="img-fluid"
                      alt="img" />
                  </Col>
                  <Col sm={10} lg={9} xl={9} xxl={10} className="ps-sm-0">
                    <div className="d-flex align-items-end justify-content-between mb-1">
                      <h6 className="mb-1">Edge</h6>
                      <h6 className="fw-semibold mb-1">15,453 <span
                        className="text-danger fs-11">(<i
                          className="fe fe-arrow-down"></i>23.70%)</span></h6>
                    </div>
                    <ProgressBar variant='warning' className="h-2 mb-3 " now={10} />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col sm={2} lg={3} xl={3} xxl={2} className="mb-sm-0 mb-3">
                    <img src={require("../../assets/images/browsers/safari.svg").default} className="img-fluid"
                      alt="img" />
                  </Col>
                  <Col sm={10} lg={9} xl={9} xxl={10} className="ps-sm-0">
                    <div className="d-flex align-items-end justify-content-between mb-1">
                      <h6 className="mb-1">Safari</h6>
                      <h6 className="fw-semibold mb-1">10,054 <span
                        className="text-success fs-11">(<i
                          className="fe fe-arrow-up"></i>11.04%)</span></h6>
                    </div>
                    <ProgressBar variant='info' className="h-2 mb-3 " now={40} />
                  </Col>
                </Row>
                <Row>
                  <Col sm={2} lg={3} xl={3} xxl={2} className="mb-sm-0 mb-3">
                    <img src={require("../../assets/images/browsers/netscape.svg").default} className="img-fluid"
                      alt="img" />
                  </Col>
                  <Col sm={10} lg={9} xl={9} xxl={10} className="ps-sm-0">
                    <div className="d-flex align-items-end justify-content-between mb-1">
                      <h6 className="mb-1">Netscape</h6>
                      <h6 className="fw-semibold mb-1">35,502 <span
                        className="text-success fs-11">(<i
                          className="fe fe-arrow-up"></i>12.75%)</span></h6>
                    </div>
                    <ProgressBar variant='green' className="h-2 mb-3 " now={30} />
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW-3 END --> */}

      {/* <!-- ROW-4 --> */}
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h3" className="mb-0">Product Sales</Card.Title>
            </Card.Header>
            <Card.Body className="pt-4">
              <div className="">
                <div className="panel panel-primary">
                  <div className="tabs-menu-body pt-0">
                    <div className="tab-content p-0">
                      <div className="tab-pane active">
                        <div className="table-responsive">
                          <Tab.Container id="left-tabs-example table-bordered" defaultActiveKey="AllProducts">
                            <Nav variant="pills" className='product-sale'>
                              <Nav.Item>
                                <Nav.Link eventKey="AllProducts" className="text-dark">All Products</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="Shipped" className="text-dark">Shipped</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="Pending" className="text-dark">Pending</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="Cancelled" className="text-dark">Cancelled</Nav.Link>
                              </Nav.Item>
                            </Nav>
                            <Tab.Content>
                              <Tab.Pane eventKey="AllProducts">
                                <AllProduct />
                              </Tab.Pane>
                              <Tab.Pane eventKey="Shipped">
                                <Shipped />
                              </Tab.Pane>
                              <Tab.Pane eventKey="Pending">
                                <Pending />
                              </Tab.Pane>
                              <Tab.Pane eventKey="Cancelled">
                                <Cancelled />
                              </Tab.Pane>
                            </Tab.Content>
                          </Tab.Container>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>

        </Col>
      </Row>
      {/* <!-- ROW-4 END --> */}
    </div>
  )
};

export default Dashboard;

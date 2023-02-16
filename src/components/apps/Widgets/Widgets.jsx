import React from 'react';
import { Button, Card, Col, ProgressBar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './Widgets.module.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { TotalRevenue, SupportCost, TotalRequest, RequestsAnswered, Gallery } from '../../../Data/App/DataWidgets';


const Widgets = () => {
  return (

    <div className={styles.Widgets}>
      <PageHeader titles="Widgets" active="Widgets" items={['Home']} />
      {/* <!-- ROW OPEN --> */}
      <Row>
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="text-center">
                <small className="text-muted">New users</small>
                <h2 className="mb-2 mt-0">2,897</h2>
                <CircularProgressbar className="mt-3 mb-3 chart-dropshadow-secondary w-25" value={60} styles={buildStyles({ pathColor: "#05c3fb", })} />
                <div className="chart-circle-value-3 text-secondary fs-20 mt-4">
                  <i className="icon icon-user-follow"></i>
                </div>
                <p className="mb-0 text-start"><span className="dot-label bg-secondary me-2"></span>Monthly users <span className="float-end">60%</span></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="widget text-center">
                <small className="text-muted">Total Tax</small>
                <h2 className="mb-2 mt-0">$7,543</h2>
                <CircularProgressbar className="mt-3 mb-3 chart-dropshadow-success w-25" value={75} styles={buildStyles({ pathColor: "#09ad95", })} />
                <div className="chart-circle-value-3 text-success fs-20"><i className="icon icon-briefcase mt-4"></i></div>
                <p className="mb-0 text-start"><span className="dot-label bg-success me-2"></span>Monthly Income <span className="float-end">$5,863</span></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="widget text-center">
                <small className="text-muted">Total Profit</small>
                <h2 className="mb-2 mt-0">$4,468</h2>
                <CircularProgressbar className="mt-3 mb-3 chart-dropshadow-warning w-25" value={85} styles={buildStyles({ pathColor: "#f7b731", })} />
                <div className="chart-circle-value-3 text-warning fs-20"><i className="icon icon-chart mt-4"></i></div>
                <p className="mb-0 text-start"><span className="dot-label bg-warning me-2"></span>Monthly Profit <span className="float-end">$9,234</span></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="widget text-center">
                <small className="text-muted">Total Sales</small>
                <h2 className="mb-2 mt-0">$6,974</h2>
                <CircularProgressbar className="mt-3 mb-3 chart-dropshadow-danger w-25" value={50} styles={buildStyles({ pathColor: "#e82646", })} />
                <div className="chart-circle-value-3 text-danger fs-20"><i className="icon icon-basket mt-4"></i></div>
                <p className="mb-0 text-start"><span className="dot-label bg-danger me-2"></span>Monthly Sales <span className="float-end">$8,097</span></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW CLOSED --> */}

      {/* <!-- ROW OPEN --> */}
      <Row className="row-cards">
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Header className="pb-0 border-bottom-0">
              <Card.Title>Total Revenue</Card.Title>
              <div className="card-options">
                <Link className="btn btn-sm btn-primary" to="#"><i className="fa fa-bar-chart mb-0"></i></Link>
              </div>
            </Card.Header>
            <Card.Body className="pt-0">
              <h3 className="d-inline-block mb-2">46,789</h3>
              <ProgressBar className="h-2 mt-2 mb-2" variant="primary" now={50} />
              <div className="float-start">
                <div className="mt-2">
                  <i className="fa fa-caret-up text-success"></i>
                  <span className='mx-1'>12% increase</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Header className="pb-0 border-bottom-0">
              <Card.Title>Total Requests</Card.Title>
              <div className="card-options">
                <Link className="btn btn-sm btn-success" to="#"><i className="fa fa-send-o mb-0"></i></Link>
              </div>
            </Card.Header>
            <Card.Body className="pt-0">
              <h3 className="d-inline-block mb-2">23,536</h3>
              <ProgressBar className="h-2 mt-2 mb-2" variant="success" now={50} />
              <div className="float-start">
                <div className="mt-2">
                  <i className="fa fa-caret-down text-success"></i>
                  <span className='mx-1'>5% decrease</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Header className="pb-0 border-bottom-0">
              <Card.Title>Requests Answered</Card.Title>
              <div className="card-options">
                <Link className="btn btn-sm btn-warning" to="#"><i className="fa fa-mail-reply mb-0"></i></Link>
              </div>
            </Card.Header>
            <Card.Body className="pt-0">
              <h3 className="d-inline-block mb-2">32,784</h3>
              <ProgressBar className="progress h-2 mt-2 mb-2" variant="warning" now={50} />
              <div className="float-start">
                <div className="mt-2">
                  <i className="fa fa-caret-up text-warning"></i>
                  <span className='mx-1'>10% increase</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Header className="pb-0 border-bottom-0">
              <Card.Title>Support Cost</Card.Title>
              <div className="card-options">
                <Link className="btn btn-sm btn-danger" to="#"><i className="fa fa-money mb-0"></i></Link>
              </div>
            </Card.Header>
            <Card.Body className="pt-0">
              <h3 className="d-inline-block mb-2">14,563</h3>
              <ProgressBar className="progress h-2 mt-2 mb-2" variant="danger" now={50} />
              <div className="float-start">
                <div className="mt-2">
                  <i className="fa fa-caret-down text-danger"></i>
                  <span className='mx-1'>15% decrease</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW CLOSED --> */}

      {/* <!-- ROW OPEN --> */}
      <Row>
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card className="bg-primary img-card box-primary-shadow">
            <Card.Body>
              <div className="d-flex">
                <div className="text-white">
                  <h2 className="mb-0 number-font">7,865</h2>
                  <p className="text-white mb-0">Total Followers </p>
                </div>
                <div className="ms-auto"> <i className="fa fa-user-o text-white fs-30 me-2 mt-2"></i> </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card className="bg-secondary img-card box-secondary-shadow">
            <Card.Body>
              <div className="d-flex">
                <div className="text-white">
                  <h2 className="mb-0 number-font">86,964</h2>
                  <p className="text-white mb-0">Total Likes</p>
                </div>
                <div className="ms-auto"> <i className="fa fa-heart-o text-white fs-30 me-2 mt-2"></i> </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card className="bg-success img-card box-success-shadow">
            <Card.Body>
              <div className="d-flex">
                <div className="text-white">
                  <h2 className="mb-0 number-font">98</h2>
                  <p className="text-white mb-0">Total Comments</p>
                </div>
                <div className="ms-auto"> <i className="fa fa-comment-o text-white fs-30 me-2 mt-2"></i> </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card className="bg-info img-card box-info-shadow">
            <Card.Body>
              <div className="d-flex">
                <div className="text-white">
                  <h2 className="mb-0 number-font">893</h2>
                  <p className="text-white mb-0">Total Posts</p>
                </div>
                <div className="ms-auto"> <i className="fa fa-envelope-o text-white fs-30 me-2 mt-2"></i> </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW CLOSED --> */}

      {/* <!-- ROW OPEN --> */}
      <Row>
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="card-order">
                {/* <!-- <h6 className="mb-2">Orders</h6> --> */}
                <h2 className="text-end"><i className="fa fa-cart-plus icon-size float-start text-danger text-danger-shadow border-danger brround p-3"></i><span>$7,543</span></h2>
                <p className="mb-0 pt-5">This Week Orders<span className="float-end">60%</span></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="card-widget">
                {/* <!-- <h6 className="mb-2">Total Tax</h6> --> */}
                <h2 className="text-end"><i className="mdi mdi-eye icon-size float-start text-warning text-warning-shadow border-solid border-warning brround p-3"></i><span>5,578</span></h2>
                <p className="mb-0 pt-5">This Week Views<span className="float-end">35%</span></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="card-widget">
                {/* <!-- <h6 className="mb-2">Total Profit</h6> --> */}
                <h2 className="text-end"><i className="icon-size mdi mdi-currency-usd float-start text-primary text-primary-shadow border-solid border-primary brround p-3"></i><span>$2,987</span></h2>
                <p className="mb-0 pt-5">This Week Earnings<span className="float-end">74%</span></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="card-widget">
                {/* <!-- <h6 className="mb-2">Total Sales</h6> --> */}
                <h2 className="text-end"><i className="mdi mdi-comment-account-outline icon-size float-start text-success text-success-shadow border-solid border-success brround p-3"></i><span>9743</span></h2>
                <p className="mb-0 pt-5">This Week Comments<span className="float-end">789</span></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW END --> */}

      {/* <!-- ROW OPEN --> */}
      <Row>
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card className="overflow-hidden">
            <Card.Body className="pb-0">
              <div className="float-start">
                <p className="mb-1">Total Revenue</p>
                <h2 className="counter mb-0">7,865</h2>
              </div>
              <div className="float-end">
                <span className="mini-stat-icon bg-info"><i className="fa fa-bar-chart"></i></span>
              </div>
            </Card.Body>
            <Card.Body className="pt-0 pb-0 border-top-0 overflow-hidden">
              <div className="chart-wrapper overflow-hidden">
                <TotalRevenue />
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body className="pb-0">
              <div className="float-start">
                <p className="mb-1">Support Cost</p>
                <h2 className="counter mb-0">5,974</h2>
              </div>
              <div className="float-end">
                <span className="mini-stat-icon bg-danger"><i className="fa fa-money"></i></span>
              </div>
            </Card.Body>
            <Card.Body className="pt-0 pb-0 border-top-0 overflow-hidden">
              <div className="chart-wrapper">
                <SupportCost />
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body className="pb-0">
              <div className="float-start">
                <p className="mb-1">Total Requests</p>
                <h2 className="counter mb-0">8,678</h2>
              </div>
              <div className="float-end">
                <span className="mini-stat-icon bg-success"><i className="fa fa-send-o"></i></span>
              </div>
            </Card.Body>
            <Card.Body className="pt-0 pb-0 border-top-0 overflow-hidden">
              <div className="chart-wrapper">
                <TotalRequest />
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body className="pb-0">
              <div className="float-start">
                <p className="mb-1">Requests Answered</p>
                <h2 className="counter mb-0">4,543</h2>
              </div>
              <div className="float-end">
                <span className="mini-stat-icon bg-warning"><i className="fa fa-mail-reply"></i></span>
              </div>
            </Card.Body>
            <Card.Body className="pt-0 pb-0 border-top-0 overflow-hidden">
              <div className="chart-wrapper">
                <RequestsAnswered />
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW CLOSED --> */}

      {/* <!-- ROW OPEN --> */}
      <Row>
        <Col sm={6} xl={3} md={6} lg={6}>
          <Card>
            <Card.Body className="text-center">
              <h6 className=""><span className="text-primary"><i className="fe fe-file-text mx-2 fs-20 text-primary-shadow"></i></span>Total Projects</h6>
              <h3 className="text-dark counter mt-0 mb-3 number-font">7,896</h3>
              <ProgressBar className="h-1 mt-0 mb-2" variant="primary" now={70} />
              <Row className="mt-4">
                <Col className="text-center"> <span className="text-muted">Weekly</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">8</h4>
                </Col>
                <Col className="text-center"> <span className="text-muted">Monthly</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font2">23</h4>
                </Col>
                <Col className="text-center"> <span className="text-muted">Total</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font3">31</h4>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} xl={3} md={6} lg={6}>
          <Card className="overflow-hidden">
            <Card.Body className="text-center">
              <h6 className=""><span className="text-secondary"><i className="fe fe-users mx-2 fs-20 text-secondary-shadow"></i></span>Total Employees</h6>
              <h3 className="text-dark counter mt-0 mb-3 number-font">2,897</h3>
              <ProgressBar className="h-1 mt-0 mb-2" variant="secondary" now={50} />
              <Row className="mt-4">
                <Col className="text-center"> <span className="text-muted">Male</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">378</h4>
                </Col>
                <Col className="text-center"> <span className="text-muted">Female</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">689</h4>
                </Col>
                <Col className="text-center"> <span className="text-muted">Total</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">1,069</h4>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} xl={3} md={6} lg={6}>
          <Card className="overflow-hidden">
            <Card.Body className="text-center">
              <h6 className=""><span className="text-success"><i className="fe fe-award mx-2 fs-20 text-success-shadow"></i></span>Ongoing Projects</h6>
              <h3 className="text-dark counter mt-0 mb-3 number-font">1,567</h3>
              <ProgressBar className="h-1 mt-0 mb-2" variant="success" now={60} />
              <Row className="mt-4">
                <Col className="text-center"> <span className="text-muted">Weekly</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">5</h4>
                </Col>
                <Col className="text-center"> <span className="text-muted">Monthly</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">20</h4>
                </Col>
                <Col className="text-center"> <span className="text-muted">Total</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">25</h4>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} xl={3} md={6} lg={6}>
          <Card className="overflow-hidden">
            <Card.Body className="text-center">
              <h6 className=""><span className="text-info"><i className="fe fe-tag mx-2 fs-20 text-info-shadow"></i></span>Total Tasks</h6>
              <h3 className="text-dark counter mt-0 mb-3 number-font">4,293</h3>
              <ProgressBar className="h-1 mt-0 mb-2" variant="info" now={40} />
              <Row className="mt-4">
                <Col className="text-center"> <span className="text-muted">Weekly</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">35</h4>
                </Col>
                <Col className="text-center"> <span className="text-muted">Monthly</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">56</h4>
                </Col>
                <Col className="text-center"> <span className="text-muted">Total</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">91</h4>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW CLOSED --> */}

      {/* <!-- ROW OPEN --> */}
      <Row>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="widgets-cards bg-primary box-primary-shadow">
            <Card.Body className="d-flex justify-content-center align-items-center">

              <CircularProgressbar className="chart-circle chart-circle-sm ms-3 mt-1" styles={buildStyles({ textColor: "white", pathColor: "#3c5998" })} value={70} text={`${70}%`} />

              <div className="wrp text-wrapper text-white p-3">
                <p className="mt-0">$8758</p>
                <p className="mt-1 mb-0">This Week Orders</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="widgets-cards bg-success box-success-shadow">
            <Card.Body className="d-flex justify-content-center align-items-center">


              <CircularProgressbar className="chart-circle chart-circle-sm ms-3 mt-1" styles={buildStyles({ textColor: "white", pathColor: "#0e8c79" })} value={17} text={`${17}%`} />

              <div className="wrp text-wrapper text-white p-3">
                <p className="mt-0">6477</p>
                <p className=" mt-1 mb-0">This Week Views</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="widgets-cards bg-warning box-warning-shadow">
            <Card.Body className="d-flex justify-content-center align-items-center">
              <CircularProgressbar className="chart-circle chart-circle-sm ms-3 mt-1" styles={buildStyles({ textColor: "white", pathColor: "#c68806" })} value={42} text={`${42}%`} />
              <div className="wrp text-wrapper text-white p-3">
                <p className="mt-0">7847</p>
                <p className=" mt-1 mb-0">This Week Earnings</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="widgets-cards bg-danger box-danger-shadow">
            <Card.Body className="d-flex justify-content-center align-items-center">
              <CircularProgressbar className="chart-circle chart-circle-sm ms-3 mt-1" styles={buildStyles({ textColor: "white", pathColor: "#c21a1a" })} value={37} text={`${37}%`} />
              <div className="wrp text-wrapper text-white p-3">
                <p className="mt-0">345</p>
                <p className=" mt-1 mb-0">This Week Comments</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} lg={6} md={12} xl={3}>
          <Card>
            <Row>
              <div className="col-4">
                <div className="circle-icon bg-primary text-center align-self-center box-primary-shadow bradius overflow-hidden">
                  <img src={require("../../../assets/images/svgs/circle.svg").default} alt="img" className="card-img-absolute" />
                  <i className="lnr lnr-user fs-30  text-white mt-4"></i>
                </div>
              </div>
              <div className="col-8">
                <Card.Body className="p-4">
                  <h2 className="mb-2 fw-normal mt-2">9,678</h2>
                  <h5 className="fw-normal mb-0">Total Requests</h5>
                </Card.Body>
              </div>
            </Row>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} lg={6} md={12} xl={3}>
          <Card>
            <Row>
              <div className="col-4">
                <div className="card-img-absolute circle-icon bg-secondary align-items-center text-center box-secondary-shadow bradius overflow-hidden">
                  <img src={require("../../../assets/images/svgs/circle.svg").default} alt="img" className="card-img-absolute" />
                  <i className="lnr lnr-briefcase fs-30 text-white mt-4"></i>
                </div>
              </div>
              <div className="col-8">
                <Card.Body className="p-4">
                  <h2 className="mb-2 fw-normal mt-2">10,257</h2>
                  <h5 className="fw-normal mb-0">Total Revenue</h5>
                </Card.Body>
              </div>
            </Row>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} lg={6} md={12} xl={3}>
          <Card>
            <Row>
              <div className="col-4">
                <div className="card-img-absolute  circle-icon bg-success align-items-center text-center box-success-shadow bradius overflow-hidden">
                  <img src={require("../../../assets/images/svgs/circle.svg").default} alt="img" className="card-img-absolute" />
                  <i className="lnr lnr-gift fs-30 text-white mt-4"></i>
                </div>
              </div>
              <div className="col-8">
                <Card.Body className="p-4">
                  <h2 className="mb-2 fw-normal mt-2">$67,953</h2>
                  <h5 className="fw-normal mb-0">Total Profit</h5>
                </Card.Body>
              </div>
            </Row>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} lg={6} md={12} xl={3}>
          <Card>
            <Row>
              <div className="col-4">
                <div className="card-img-absolute circle-icon bg-danger align-items-center text-center box-danger-shadow bradius overflow-hidden">
                  <img src={require("../../../assets/images/svgs/circle.svg").default} alt="img" className="card-img-absolute" />
                  <i className=" lnr lnr-cart fs-30 text-white mt-4"></i>
                </div>
              </div>
              <div className="col-8">
                <Card.Body className="p-4">
                  <h2 className="mb-2 fw-normal mt-2">7,632</h2>
                  <h5 className="fw-normal mb-0">Total Sales</h5>
                </Card.Body>
              </div>
            </Row>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW CLOSED --> */}

      {/* <!-- ROW OPEN --> */}
      <Row>
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body className="text-center">
              <i className="fa fa-firefox text-primary fa-3x"></i>
              <h6 className="mt-4 mb-2">Total Visit</h6>
              <h2 className="mb-2 number-font">834</h2>
              <p className="text-muted">Sed ut perspiciatis unde omnis accusantium doloremque</p>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body className="text-center">
              <i className="fa fa-dollar text-secondary fa-3x"></i>
              <h6 className="mt-4 mb-2">Cost per Click</h6>
              <h2 className="mb-2  number-font">$34,516</h2>
              <p className="text-muted">Sed ut perspiciatis unde omnis accusantium doloremque</p>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body className="text-center">
              <i className="fa fa-comment-o text-success fa-3x"></i>
              <h6 className="mt-4 mb-2">Investment</h6>
              <h2 className="mb-2 number-font">80%</h2>
              <p className="text-muted">Sed ut perspiciatis unde omnis accusantium doloremque</p>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body className="text-center">
              <i className="fa fa-pie-chart text-info fa-3x"></i>
              <h6 className="mt-4 mb-2">Revenue</h6>
              <h2 className="mb-2  number-font">70k</h2>
              <p className="text-muted">Sed ut perspiciatis unde omnis accusantium doloremque</p>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW CLOSED --> */}

      {/* <!-- ROW OPEN --> */}
      <Row>
        <Col md={6} xl={4}>
          <Card>
            <Card.Header className="border-bottom">
              <Card.Title as='h5'>Sales Summary</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row className="clearfix mb-4">
                <Col>
                  <div className="float-start">
                    <h5 className="mb-0"><strong>Total Revenue</strong></h5>
                    <small className="text-muted">weekly profit</small>
                  </div>
                </Col>
                <Col>
                  <div className="float-end">
                    <h4 className="fw-bold mb-0 mt-2 text-blue">$15300</h4>
                  </div>
                </Col>
              </Row>
              <Row className="clearfix mb-4">
                <Col>
                  <div className="float-start">
                    <h5 className="mb-0"><strong>Total Tax</strong></h5>
                    <small className="text-muted">weekly profit</small>
                  </div>
                </Col>
                <Col>
                  <div className="float-end">
                    <h4 className="fw-bold mt-2 mb-0 text-success">$1625</h4>
                  </div>
                </Col>
              </Row>
              <Row className="clearfix mb-4">
                <Col>
                  <div className="float-start">
                    <h5 className="mb-0"><strong>Total Income</strong></h5>
                    <small className="text-muted">weekly profit</small>
                  </div>
                </Col>
                <Col>
                  <div className="float-end">
                    <h4 className="fw-bold mt-2 mb-0 text-warning">70%</h4>
                  </div>
                </Col>
              </Row>
              <Row className="clearfix mb-4">
                <Col>
                  <div className="float-start">
                    <h5 className="mb-0"><strong>Total Income</strong></h5>
                    <small className="text-muted">weekly profit</small>
                  </div>
                </Col>
                <Col>
                  <div className="float-end">
                    <h4 className="fw-bold mt-2 mb-0 text-danger">50%</h4>
                  </div>
                </Col>
              </Row>
              <Row className="clearfix mb-4">
                <Col>
                  <div className="float-start">
                    <h5 className="mb-0"><strong>Total Loss</strong></h5>
                    <small className="text-muted">weekly profit</small>
                  </div>
                </Col>
                <Col>
                  <div className="float-end">
                    <h4 className="fw-bold mt-2 mb-0 text-info">30%</h4>
                  </div>
                </Col>
              </Row>
              <Row className="clearfix mb-0">
                <Col>
                  <div className="float-start">
                    <h5 className="mb-0"><strong>Total Loss</strong></h5>
                    <small className="text-muted">weekly profit</small>
                  </div>
                </Col>
                <Col>
                  <div className="float-end">
                    <h4 className="fw-bold mt-2 mb-0 text-info">30%</h4>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col xl={4} md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Visitors</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="media mb-5 mt-0">
                <div className="d-flex me-3">
                  <Link to="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={require("../../../assets/images/users/18.jpg")} /> </Link>
                </div>
                <div className="media-body">
                  <Link to="#" className="text-dark">Nathaniel Bustos</Link>
                  <div className="text-muted small">Manager</div>
                </div>
                <Button variant='primary' className="btn-sm d-block">Follow</Button>
              </div>
              <div className="media mb-5">
                <div className="d-flex me-3">
                  <Link to="#"><img className="media-object rounded-circle thumb-sm" alt="64x64" src={require("../../../assets/images/users/4.jpg")} /></Link>
                </div>
                <div className="media-body">
                  <Link to="#" className="text-dark">Latanya Kinard</Link>
                  <div className="text-muted small">Web Designer</div>
                </div>
                <Button variant='blue' className="btn-sm d-block">Follow</Button>
              </div>
              <div className="media mb-5">
                <div className="d-flex me-3">
                  <Link to="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={require("../../../assets/images/users/20.jpg")} /> </Link>
                </div>
                <div className="media-body">
                  <Link to="#" className="text-dark">George Lujan</Link>
                  <div className="text-muted small">Founder</div>
                </div>
                <Button variant='warning' className="btn-sm d-block">Follow</Button>
              </div>
              <div className="media mb-5">
                <div className="d-flex me-3">
                  <Link to="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={require("../../../assets/images/users/4.jpg")} /> </Link>
                </div>
                <div className="media-body">
                  <Link to="#" className="text-dark">Rose Bush</Link>
                  <div className="text-muted small">Web Designer</div>
                </div>
                <Button variant='secondary' className="btn-sm d-block">Follow</Button>
              </div>
              <div className="media mb-0">
                <div className="d-flex me-3">
                  <Link to="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={require("../../../assets/images/users/19.jpg")} /> </Link>
                </div>
                <div className="media-body">
                  <Link to="#" className="text-dark">Samantha</Link>
                  <div className="text-muted small">Manager</div>
                </div>
                <Button variant='danger' className="btn-sm d-block">Follow</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col xl={4} sm={12} md={12} className="p-l-0 p-r-0">
          <Card>
            <Card.Header className="text-center">
              <Card.Title>Projects</Card.Title>
            </Card.Header>
            <Card.Body>
              <CircularProgressbar className="mx-auto chart-circle chart-circle-md mt-3 mb-4 text-center" styles={buildStyles({ pathColor: "#6c5ffc" })} value={70} />
              <div className="text-center mt-3">
                <h3>Average Sales</h3>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam velit quisquam veniam excepturi.</p>
                <Col className="p-1 mt-2">
                  <div className="float-start">
                    <h3 className="ms-5"><i className="fa fa-caret-up fa-1x text-primary me-1"></i>$3.2</h3>
                    <h6 className="ms-5 pb-0 mb-0">last month</h6>
                  </div>
                  <div className="float-end">
                    <h3 className="me-5"><i className="fa fa-caret-up fa-1x text-primary me-1"></i>$2.4</h3>
                    <h6 className="me-5 mt-0 mb-0">last year</h6>
                  </div>
                </Col>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW CLOSED --> */}

      {/* <!-- ROW OPEN --> */}
      <Row>
        <div className="col-lg-4 col-md-4">
          <Card>
            <Card.Header>
              <Card.Title>Skill Set</Card.Title>
            </Card.Header>
            <Card.Body className="mt-0">
              <div className="chats-wrap media-list">
                <div className="chat-details mb-1 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal">Html</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>85</b>%</span>
                  </h4>
                  <ProgressBar className="progress-sm mt-3" variant="primary" now={80} />
                </div>
                <div className="chat-details mb-1 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal"> Wordpress</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>46</b>%</span>
                  </h4>
                  <ProgressBar className="progress-sm mt-3" striped variant="success" now={45} />
                </div>
                <div className="chat-details mb-1 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal"> ReactJs</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>66</b>%</span>
                  </h4>
                  <ProgressBar className="progress-sm mt-3" striped variant="warning" now={75} />
                </div>
                <div className="chat-details mb-1 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal"> Photoshop</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>90</b>%</span>
                  </h4>
                  <ProgressBar className="progress-sm mt-3" striped variant="danger" now={75} />
                </div>
                <div className="chat-details mb-0 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal">Angular js</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>30</b>%</span>
                  </h4>
                  <ProgressBar className="progress-sm mt-3" striped variant="info" now={35} />
                </div>
                <div className="chat-details mb-0 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal">Next js</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>70</b>%</span>
                  </h4>
                  <ProgressBar className="progress-sm mt-3" striped variant="primary" now={80} />
                </div>
                <div className="chat-details mb-0 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal">vue js</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>45</b>%</span>
                  </h4>
                  <ProgressBar className="progress-sm mt-3" striped variant="success" now={50} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        {/* <!-- COL END --> */}
        <Col md={8} sm={12} lg={8}>
          <Card>
            <Card.Header>
              <Card.Title>Best Pictures for Today</Card.Title>
            </Card.Header>
            <Card.Body className="p-2">
              <div>
                {/* <!-- GALLERY DEMO OPEN --> */}

                <Gallery />
                {/* <!-- GALLERY DEMO CLOSED --> */}
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW CLOSED --> */}
    </div>

  )
};

export default Widgets;

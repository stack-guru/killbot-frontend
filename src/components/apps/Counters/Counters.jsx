import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import styles from './Counters.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import CountUp from 'react-countup';
import Countdown from 'react-countdown';
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';

const Counters = () => {

  // Time Counting days Limit **********************

  // Random component
  const AfterCompletion = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <AfterCompletion />;
    } else {
      // Render a countdown
      return (
        <span>
          {days} Days {hours} Hours:{minutes} Minutes:{seconds} Seconds
        </span>
      );
    }
  };



  // Time Counting days Limit **********************

// Random component
const AfterComplete = () => <span>You are good to go!</span>;

// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />

  } else {
    // Render a countdown
    return (
      <span>
        <Row className="count-down">
          <Col lg={3} className="countdown">
            <div className="countdown bg-primary-gradient p-3 mb-1">
              <span className="days text-white">{days}</span>
              <span className="text-white">Days</span>
            </div>
          </Col>
          <Col lg={3} className="countdown">
            <div className="countdown bg-success-gradient p-3 mb-1">
              <span className="hours text-white">{hours}</span>
              <span className="text-white">Hours</span>
            </div>
          </Col>

          <Col lg={3} className="countdown">
            <div className="countdown bg-warning-gradient p-3 mb-1">
              <span className="minutes text-white">{minutes}</span>
              <span className="text-white">Minutes</span>
            </div>
          </Col>
          <Col lg={3} className="countdown">
            <div className="countdown bg-info-gradient p-3 mb-1">
              <span className="seconds text-white">{seconds}</span>
              <span className="text-white">Seconds</span>
            </div>
          </Col>
        </Row>
      </span>
    );
  }
};

  return (

    <div className={styles.Counters}>
      <PageHeader titles="Counters" active="Counters" items={['Apps']} />
      {/* <!-- ROW-1 OPEN --> */}
      <Row className="row-cards">
        <Col md={12} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>
                Time Counting From 0 to 3 min.
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="example card-transparent bg-primary-transparent border-primary text-primary">
                <div className="d-flex d-xs-grid">
                  <span className="fs-30 pe-5"><i className="bi bi-alarm"></i></span>
                  <div className="">
                    <Timer className="h3" active duration={180000}>
                      <Timecode className='text-break' />
                    </Timer>
                    <h5 className="mb-0 mt-1">Only 3 min left</h5>
                  </div>
                  <div className="ms-auto text-end">
                    <h5 className="mb-1">Max Bid:</h5>
                    <span className="h3 mb-0">$1000</span>
                  </div>
                </div>
              </div>

            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}
        <Col md={12} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>
                Time Counting From 60 to 20
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="example card-transparent bg-success-transparent border-success text-success">
                <div className="d-flex d-xs-grid">
                  <span className="fs-30 pe-5"><i className="bi bi-alarm"></i></span>
                  <div className="">
                    <h2><Countdown className='text-break' date={Date.now() + 60000} /></h2>
                    <h5 className="mb-0 mt-1">Only 6 min left</h5>
                  </div>
                  <span className="h1 ms-auto mb-0">$1000</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}
        <Col md={12} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">
                Time minutes counter
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="example card-transparent bg-warning-transparent border-warning text-warning">
                <div className="d-flex d-xs-grid">
                  <span className="fs-30 pe-5"><i className="bi bi-alarm"></i></span>
                  <div className="">
                    <h2><Countdown className='text-break' date={Date.now() + 1440000} /></h2>
                    <h5 className="mb-0 mt-1">Only 6 min left</h5>
                  </div>
                  <span className="h1 text-center ms-auto mb-0">$1000</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                Time Counting days Limit
              </Card.Title>
            </Card.Header>
            <Card.Body className="mx-auto">
              <div className="example border border-secondary pb-4 px-5">
                <Badge bg="secondary" className="fs-14 me-2">Hurry Up!</Badge>
                <span>Only we have two days</span>
                <div>
                  <span className="text-secondary fs-30 pe-5"><i className="bi bi-calendar-day"></i></span>
                  <span className='h2 text-secondary'>{<Countdown date={Date.now() + 259200000} renderer={renderer} />} </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}
        <Col md={12} lg={4} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>
                Numbers counter
              </Card.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <div className="counter-icon bg-secondary-gradient box-shadow-secondary num-counter mx-auto"> <svg style={{ width: "27px", height: "27px" }} viewBox="0 0 24 24">
                <path fill="#fff" d="M16,14H17.5V16.82L19.94,18.23L19.19,19.53L16,17.69V14M17,12A5,5 0 0,0 12,17A5,5 0 0,0 17,22A5,5 0 0,0 22,17A5,5 0 0,0 17,12M17,10A7,7 0 0,1 24,17A7,7 0 0,1 17,24C14.21,24 11.8,22.36 10.67,20H1V17C1,14.34 6.33,13 9,13C9.6,13 10.34,13.07 11.12,13.2C12.36,11.28 14.53,10 17,10M10,17C10,16.3 10.1,15.62 10.29,15C9.87,14.93 9.43,14.9 9,14.9C6.03,14.9 2.9,16.36 2.9,17V18.1H10.09C10.03,17.74 10,17.37 10,17M9,4A4,4 0 0,1 13,8A4,4 0 0,1 9,12A4,4 0 0,1 5,8A4,4 0 0,1 9,4M9,5.9A2.1,2.1 0 0,0 6.9,8A2.1,2.1 0 0,0 9,10.1A2.1,2.1 0 0,0 11.1,8A2.1,2.1 0 0,0 9,5.9Z" />
              </svg> </div>
              <h5>Employees</h5>
              <CountUp className='h2' end={2569} />
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}
        <Col md={12} lg={4} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>
                Numbers counter
              </Card.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <div className="counter-icon bg-primary-gradient box-shadow-primary num-counter mx-auto"> <svg style={{ width: "25px", height: "25px" }} viewBox="0 0 24 24">
                <path fill="#fff" d="M21 11.11V7A2 2 0 0 0 20.42 5.59A1.87 1.87 0 0 0 19 5H15V3A1.9 1.9 0 0 0 14.42 1.58A1.9 1.9 0 0 0 13 1H9A1.9 1.9 0 0 0 7.58 1.58A1.9 1.9 0 0 0 7 3V5H3A1.87 1.87 0 0 0 1.58 5.59A2 2 0 0 0 1 7V18A2 2 0 0 0 1.58 19.41A1.87 1.87 0 0 0 3 20H10.26A7 7 0 1 0 21 11.11M9 3H13V5H9M3 18V7H19V9.68A6.84 6.84 0 0 0 16 9A7 7 0 0 0 9 16A6.91 6.91 0 0 0 9.29 18M19 20A5 5 0 0 1 13 20A4.94 4.94 0 0 1 11 16A5 5 0 0 1 16 11A4.94 4.94 0 0 1 19 12A5 5 0 0 1 19 20M15 13H16.5V15.82L18.94 17.23L18.19 18.53L15 16.69V13" />
              </svg></div>
              <h5>Profit</h5>
              <CountUp className="h2" start={0} end={56989.32} prefix="2," decimal="." decimals={2} />
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}
        <Col md={12} lg={4} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>
                Numbers counter
              </Card.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <div className="counter-icon bg-danger-gradient box-shadow-danger num-counter mx-auto"> <svg style={{ width: "25px", height: "25px" }} viewBox="0 0 24 24">
                <path fill="#fff" d="M11 7V13L16.2 16.1L17 14.9L12.5 12.2V7H11M20 12V18H22V12H20M20 20V22H22V20H20M18 20C16.3 21.3 14.3 22 12 22C6.5 22 2 17.5 2 12S6.5 2 12 2C16.8 2 20.9 5.4 21.8 10H19.7C18.8 6.6 15.7 4 12 4C7.6 4 4 7.6 4 12S7.6 20 12 20C14.4 20 16.5 18.9 18 17.3V20Z" />
              </svg> </div>
              <h5>Errors</h5>
              <CountUp className='h2' end={8998} prefix="0." />
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                Day Counter
              </Card.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Countdown date={Date.now() + 3088800000} renderer={rendering} />
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}
      </Row>
      {/* <!-- ROW-1 CLOSED --> */}
    </div>

  )
};

export default Counters;

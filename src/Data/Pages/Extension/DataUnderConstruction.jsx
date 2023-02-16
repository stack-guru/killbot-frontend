import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Countdown from 'react-countdown';


    const AfterComplete = () => <span>You are good to go!</span>;
    // Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <AfterComplete />
    }else {
        // Render a countdown
        return (
          <React.Fragment>
            <Row className="count-down justify-content-center mt-5">
              <Col lg={2} sm={3} className="countdown me-0 me-sm-3">
                <div className="countdown bg-primary p-3 mb-1 br-5 row shadow-lg border-white2">
                  <span className="days text-white col-12 p-0">{days}</span>
                  <span className="text-white col-12">Days</span>
                </div>
              </Col>
              <Col lg={2} sm={3} className="countdown me-0 me-sm-3">
                <div className="countdown bg-primary p-3 mb-1 br-5 row shadow-lg border-white2">
                  <span className="hours text-white col-12">{hours}</span>
                  <span className="text-white col-12">Hours</span>
                </div>
              </Col>
    
              <Col lg={2} sm={3} className="countdown me-0 me-sm-3">
                <div className="countdown bg-primary p-3 mb-1 br-5 row shadow-lg border-white2">
                  <span className="minutes text-white col-12">{minutes}</span>
                  <span className="text-white col-12">Minutes</span>
                </div>
              </Col>
              <Col lg={2} sm={3} className="countdown me-0 me-sm-3">
                <div className="countdown bg-primary p-3 mb-1 br-5 row shadow-lg border-white2">
                  <span className="seconds text-white col-12">{seconds}</span>
                  <span className="text-white col-12">Seconds</span>
                </div>
              </Col>
            </Row>
          </React.Fragment>
        );
      }
    };
  export function DayCounter() {
          return (
            <Countdown date={Date.now() + 12999800000} renderer={rendering} />
          );
        }

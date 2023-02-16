import React, { useState } from 'react';
import { Button, Card, Col, Row, Spinner, Collapse } from 'react-bootstrap';
import { Link } from "react-router-dom";
import styles from './Loaders.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';

const Loaders = () => {

  // Loader with double-bounce

  const [loderExpanded, setloderExpanded] = useState(true);

  const loderHandleExpandClick = () => {
    setloderExpanded(!loderExpanded);
  };
  const [loderShow, setloderShow] = useState(true);

  // Loader with cube

  const [cubeExpanded, setcubeExpanded] = useState(true);

  const cubeHandleExpandClick = () => {
    setcubeExpanded(!cubeExpanded);
  };
  const [cubeShow, setcubeShow] = useState(true);

  // Loader with Spinner

  const [spinnerExpanded, setspinnerExpanded] = useState(true);

  const spinnerHandleExpandClick = () => {
    setspinnerExpanded(!spinnerExpanded);
  };
  const [spinnerShow, setspinnerShow] = useState(true);

  // Loader with lds-ring

  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = useState(true);

  // Loader with lds-hourglass

  const [hourExpanded, sethourExpanded] = useState(true);

  const hourHandleExpandClick = () => {
    sethourExpanded(!hourExpanded);
  };
  const [hourShow, sethourShow] = useState(true);

  // Loader with lds-heart

  const [heartExpanded, setheartExpanded] = useState(true);

  const hearthandleExpandClick = () => {
    setheartExpanded(!heartExpanded);
  };
  const [heartShow, setheartShow] = useState(true);

  return (
    <div className={styles.Loaders}>
      <PageHeader titles="Loaders" active="Loaders" items={['Apps']} />
      {/* <!-- ROW-1 OPEN --> */}
      <Row>
        <Col lg={3} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Border & Growing Spinners</Card.Title>
            </Card.Header>
            <Card.Body>
              <Spinner animation="border" className='me-2' />
              <Spinner animation="grow" className='me-2' />
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Border & Growing Colors Spinners</Card.Title>
            </Card.Header>
            <Card.Body>

              <Spinner animation="border" variant="primary" className='me-3' />
              <Spinner animation="border" variant="secondary" className='me-3' />
              <Spinner animation="border" variant="success" className='me-3' />
              <Spinner animation="border" variant="danger" className='me-3' />
              <Spinner animation="border" variant="warning" className='me-3' />
              <Spinner animation="border" variant="info" className='me-3' />
              <Spinner animation="border" variant="light" className='me-3' />
              <Spinner animation="border" variant="dark" className='me-3' />

              <Spinner animation="grow" variant="primary" className='me-3' />
              <Spinner animation="grow" variant="secondary" className='me-3' />
              <Spinner animation="grow" variant="success" className='me-3' />
              <Spinner animation="grow" variant="danger" className='me-3' />
              <Spinner animation="grow" variant="warning" className='me-3' />
              <Spinner animation="grow" variant="info" className='me-3' />
              <Spinner animation="grow" variant="light" className='me-3' />
              <Spinner animation="grow" variant="dark" className='me-3' />
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}
        <Col lg={3} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Size Spinners</Card.Title>
            </Card.Header>
            <Card.Body>
              <Spinner animation="grow" size="sm" variant="danger" className='me-2' />
              <Spinner animation="border" size="sm" variant="danger" className='me-2' />
              <Spinner animation="grow" variant="secondary" className='me-2' />
              <Spinner animation="border" variant="secondary" className='me-2' />
              <Spinner animation="grow" variant="primary" className='me-2 h-7 w-7' />
              <Spinner animation="border" variant="primary" className='me-2 h-7 w-7' />

            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Buttons Spinners</Card.Title>
            </Card.Header>
            <Card.Body>
              <Button variant="primary" className='m-1'><Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /></Button>
              <Button variant="primary" className='m-1'><Spinner className='me-1' as="span" animation="border" size="sm" role="status" aria-hidden="true" />Loading...</Button>
              <Button variant="primary" className='m-1'><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /></Button>
              <Button variant="primary" className='m-1'><Spinner className='me-1' as="span" animation="grow" size="sm" role="status" aria-hidden="true" />Loading...</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW-1 CLOSED --> */}

      {/* <!-- ROW-2 OPEN --> */}
      <Row>
        <Col md={12} lg={6} xl={4}>
          {loderShow ? <Card>
            <Card.Header>
              <Card.Title>loaders</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={loderHandleExpandClick}><i className={`fe ${loderExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setloderShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={loderExpanded} timeout={3000}>
              <Card.Body>
                <div className="dimmer active">
                  <div className="spinner1">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                  </div>
                </div>
              </Card.Body>
            </Collapse>
          </Card> : null}
        </Col>
        {/* <!-- COL-END --> */}
        <Col md={12} lg={6} xl={4}>
          {cubeShow ? <Card>
            <Card.Header>
              <Card.Title>loaders</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={cubeHandleExpandClick}><i className={`fe ${cubeExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setcubeShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={cubeExpanded} timeout={3000}>
              <Card.Body>
                <div className="dimmer active">
                  <div className="spinner2">
                    <div className="cube1"></div>
                    <div className="cube2"></div>
                  </div>
                </div>
              </Card.Body>
            </Collapse>
          </Card> : null}
        </Col>
        {/* <!-- COL-END --> */}
        <Col md={12} lg={6} xl={4}>
          {spinnerShow ? <Card>
            <Card.Header>
              <Card.Title>loaders</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={spinnerHandleExpandClick}><i className={`fe ${spinnerExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setspinnerShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={spinnerExpanded} timeout={3000}>
              <Card.Body>
                <div className="dimmer active">
                  <div className="spinner"></div>
                </div>
              </Card.Body>
            </Collapse>
          </Card> : null}
        </Col>
        {/* <!-- COL-END --> */}
        <Col md={12} lg={6} xl={4}>
          {show ? <Card>
            <Card.Header>
              <Card.Title>loaders</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={handleExpandClick}><i className={`fe ${expanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={expanded} timeout={3000}>
              <Card.Body>
                <div className="dimmer active">
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </Card.Body>
            </Collapse>
          </Card> : null}
        </Col>
        {/* <!-- COL-END --> */}
        <Col md={12} lg={6} xl={4}>

          {hourShow ? <Card>
            <Card.Header>
              <Card.Title>loaders</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={hourHandleExpandClick}><i className={`fe ${hourExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => sethourShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={hourExpanded} timeout={3000}>
              <Card.Body>
                <div className="dimmer active">
                  <div className="lds-hourglass"></div>
                </div>
              </Card.Body>
            </Collapse>
          </Card> : null}
        </Col>
        {/* <!-- COL-END --> */}
        <Col md={12} lg={6} xl={4}>
          {/* <LoaderwithHeart /> */}
          {heartShow ? <Card>
            <Card.Header>
              <Card.Title>loaders</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={hearthandleExpandClick}><i className={`fe ${heartExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setheartShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={heartExpanded} timeout={3000}>
              <Card.Body>
                <div className="dimmer active">
                  <div className="lds-heart">
                    <div></div>
                  </div>
                </div>
              </Card.Body>
            </Collapse>
          </Card> : null}
        </Col>
        {/* <!-- COL-END --> */}
      </Row>
      {/* <!-- ROW-2 CLOSED --> */}
    </div>
  )
};

export default Loaders;

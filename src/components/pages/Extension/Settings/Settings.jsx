import React from 'react';
import styles from './Settings.module.scss';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import { Link } from 'react-router-dom';
import { Card, Col, Row, ListGroup } from 'react-bootstrap';


const Settings = () => {

  return (
  <div className={styles.Settings}>
    <PageHeader titles="Settings" active="Settings" items={['Pages']} />
    {/* <!-- ROW-1 OPEN --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col lg={6} xl={3}>
        <Card>
          <Card.Body>
            <ListGroup className="list-group-transparent mb-0 file-manager file-manager-border">
              <h4>General</h4>
              <div>
                <Link to='#'><ListGroup.Item eventKey='#link' className="d-flex align-items-center px-0 border-top br-bs-0 br-be-0">
                  <i className="fe fe-user fs-18 me-2 text-success p-2"></i>Account
                </ListGroup.Item></Link>
              </div>
              <div>
                <Link to='#'><ListGroup.Item eventKey="#link1" className="d-flex align-items-center  px-0 br-0 ">
                  <i className="fe fe-bell fs-18 me-2 text-secondary p-2"></i>Notifications
                </ListGroup.Item></Link>
              </div>
              <div>
                <Link to='#'><ListGroup.Item eventKey="#link2" className="d-flex align-items-center  px-0 br-0">
                  <i className="fe fe-eye fs-18 me-2 text-primary p-2"></i> Appearances
                </ListGroup.Item></Link>
              </div>
              <div>
                <Link to='#'><ListGroup.Item eventKey="#link3" className="d-flex align-items-center  px-0 br-0">
                  <i className="fe fe-lock fs-18 me-2 text-warning p-2"></i> Privacy & Security
                </ListGroup.Item></Link>
              </div>
              <div>
                <Link to='#'><ListGroup.Item eventKey="#link4" className="d-flex align-items-center  px-0 br-0">
                  <i className="fe fe-headphones fs-18 me-2 text-info p-2"></i> Help & Support
                </ListGroup.Item></Link>
              </div>
              <div>
                <Link to='#'><ListGroup.Item eventKey="#link5" className="d-flex align-items-center  px-0 br-0">
                  <i className="fe fe-database fs-18 me-2 text-pink p-2"></i> Data Usage Control
                </ListGroup.Item></Link>
              </div>
              <div>
                <Link to='#'><ListGroup.Item eventKey="#link6" className="d-flex align-items-center  px-0 br-0">
                  <i className="fe fe-battery-charging fs-18 me-2 text-green p-2"></i> Power Saving Management
                </ListGroup.Item></Link>
              </div>
              <div>
                <Link to='#'><ListGroup.Item eventKey="#link7" className="d-flex align-items-center px-0 br-ts-0 br-te-0">
                  <i className="fe fe-help-circle fs-18 me-2 text-danger p-2"></i> About
                </ListGroup.Item></Link>
              </div>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={9}>
        <Row className="row-sm">
          <Col xl={12} xxl={6}>
            <Card>
              <Card.Body>
                <Row>
                  <Col xl={2} sm={2} md={12}>
                    <div className="mt-3 mb-5">
                      <span className="settings-icon bg-primary-transparent text-primary"><i className="fe fe-settings"></i></span>
                    </div>
                  </Col>
                  <Col xl={10} sm={10} md={12}>
                    <Link to="#">
                      <h4 className="mb-1 text-dark">General</h4>
                    </Link>
                    <p>General settings such as, site title, logo, other general and advanced settings.</p>
                    <Link to="">Change Settings <i className="ion-chevron-right fs-10 ms-1"></i></Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={12} xxl={6}>
            <Card>
              <Card.Body>
                <Row>
                  <Col xl={2} sm={2} md={12}>
                    <div className="mt-3 mb-5">
                      <span className="settings-icon bg-secondary-transparent text-secondary border-secondary"><i className="fe fe-home"></i></span>
                    </div>
                  </Col>
                  <Col xl={10} sm={10} md={12}>
                    <Link to="#">
                      <h4 className="mb-1 text-dark">Dashboard</h4>
                    </Link>
                    <p>In this settings we can change sidemenu and main page can be Controlled.</p>
                    <Link to="">Change Settings <i className="ion-chevron-right fs-10 ms-1"></i></Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={12} xxl={6}>
            <Card>
              <Card.Body>
                <Row>
                  <Col xl={2} sm={2} md={12}>
                    <div className="mt-3 mb-5">
                      <span className="settings-icon bg-danger-transparent text-danger border-danger"><i className="fe fe-bell"></i></span>
                    </div>
                  </Col>
                  <Col xl={10} sm={10} md={12}>
                    <Link to="#">
                      <h4 className="mb-1 text-dark">Notifications</h4>
                    </Link>
                    <p>Notifications settings we can control the notifications privacy and security.</p>
                    <Link to="">Change Settings <i className="ion-chevron-right fs-10 ms-1"></i></Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={12} xxl={6}>
            <Card>
              <Card.Body>
                <Row>
                  <Col xl={2} sm={2} md={12}>
                    <div className="mt-3 mb-5">
                      <span className="settings-icon bg-warning-transparent text-warning border-warning"><i className="fe fe-grid"></i></span>
                    </div>
                  </Col>
                  <Col xl={10} sm={10} md={12}>
                    <Link to="#">
                      <h4 className="mb-1 text-dark">Webapps</h4>
                    </Link>
                    <p>Web apps settings such as Apps,Elements & Mail related to web apps can be Controlled.</p>
                    <Link to="">Change Settings <i className="ion-chevron-right fs-10 ms-1"></i></Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={12} xxl={6}>
            <Card>
              <Card.Body>
                <Row>
                  <Col xl={2} sm={2} md={12}>
                    <div className="mt-3 mb-5">
                      <span className="settings-icon bg-success-transparent text-success border-success"><i className="fe fe-flag"></i></span>
                    </div>
                  </Col>
                  <Col xl={10} sm={10} md={12}>
                    <Link to="#">
                      <h4 className="mb-1 text-dark">Region & language</h4>
                    </Link>
                    <p>Region & language settings we can Add, Delete and edit your Region & language.</p>
                    <Link to="">Change Settings <i className="ion-chevron-right fs-10 ms-1"></i></Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={12} xxl={6}>
            <Card>
              <Card.Body>
                <Row>
                  <Col xl={2} sm={2} md={12}>
                    <div className="mt-3 mb-5">
                      <span className="settings-icon bg-pink-transparent text-pink border-pink"><i className="fe fe-cast"></i></span>
                    </div>
                  </Col>
                  <Col xl={10} sm={10} md={12}>
                    <Link to="#">
                      <h4 className="mb-1 text-dark">Blog</h4>
                    </Link>
                    <p>Blog settings such as, enable blog, max mosts in page and more can be controlled.</p>
                    <Link to="">Change Settings <i className="ion-chevron-right fs-10 ms-1"></i></Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={12} xxl={6}>
            <Card>
              <Card.Body>
                <Row>
                  <Col xl={2} sm={2} md={12}>
                    <div className="mt-3 mb-5">
                      <span className="settings-icon bg-info-transparent text-info border-info"><i className="fe fe-search"></i></span>
                    </div>
                  </Col>
                  <Col xl={10} sm={10} md={12}>
                    <Link to="#">
                      <h4 className="mb-1 text-dark">SEO</h4>
                    </Link>
                    <p>Search Engine Optimization settings such as, meta tags and social media can be controlled..</p>
                    <Link to="">Change Settings <i className="ion-chevron-right fs-10 ms-1"></i></Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={12} xxl={6}>
            <Card>
              <Card.Body>
                <Row>
                  <Col xl={2} sm={2} md={12}>
                    <div className="mt-3 mb-5">
                      <span className="settings-icon bg-danger-transparent text-orange border-orange"><i className="fe fe-mail"></i></span>
                    </div>
                  </Col>
                  <Col xl={10} sm={10} md={12}>
                    <Link to="#">
                      <h4 className="mb-1 text-dark">SMTP</h4>
                    </Link>
                    <p>Email SMTP settings such as, contact us and others related to email can be controlled.</p>
                    <Link to="">Change Settings <i className="ion-chevron-right fs-10 ms-1"></i></Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
    {/* <!-- /Row --> */}
  </div>
)
  };

export default Settings;

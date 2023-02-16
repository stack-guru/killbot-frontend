import React from 'react';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import styles from './AboutCompany.module.scss';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';

const AboutCompany = () => {

  return (

  <div className={styles.AboutCompany}>
    <div className='container'>
      <PageHeader titles="About" active="About" items={['Pages']} />
      {/* <!-- ROW-1 OPEN--> */}
      <Row>
        <Col lg={12}>
          <Row className="py-5">
            <div className="text-center">
              <h4 className="display-5 fw-semibold">Our mission is to make Work Meaningful.</h4>
              <p className="">If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over repeat Various versions have evolved over.</p>
            </div>
          </Row>
        </Col>
      </Row>
      {/* <!-- ROW-1 CLOSED --> */}

      {/* <!-- ROW-2 OPEN--> */}
      <Row>
        <Col lg={12}>
          <img src={require("../../../../assets/images/media/34.jpg")} alt="team" className="br-5" />
        </Col>
      </Row>
      {/* <!-- ROW-2 CLOSED --> */}

      {/* <!-- ROW-3 OPEN --> */}
      <Row>
        <Col lg={12}>
          <Card className="mt-7">
            <Card.Body className="p-5 text-dark">
              <div className="statistics-info p-4">
                <Row>
                  <Col xl={6}>
                    <div className="">
                      <h2 className="fw-bold">We Help to <span className="text-primary">Build</span> Your Dream Project.</h2>
                      <h4 className="leading-normal">majority have suffered alteration in some form, by injected humour</h4>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable.</p>
                      <p>All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                      <p> If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by
                        accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div className="text-center">
                      <img src={require("../../../../assets/images/media/36.png")} alt="team-s" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW-3 CLOSED --> */}

      {/* <!-- ROW-4 OPEN --> */}
      <Row>
        <Col xl={6}>
          <Card className="mt-5">
            <Card.Body className="about-con pabout">
              <h1 className="mb-4 fw-semibold">Why Sash ?</h1>
              <h4 className="leading-normal">majority have suffered alteration in some form, by injected humour</h4>
              <p className="leading-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage
                of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                and the like).</p>
              <Button variant='primary' className="mt-2">View More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} className="mt-5">
          <Card>
            <Card.Body className="pabout">
              <h1 className="mb-4 fw-semibold">What is Our Services?</h1>
              <h4 className="leading-normal">majority have suffered alteration in some form, by injected humour</h4>
              <p className="leading-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage
                of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                and the like).</p>
              <Button variant='primary' className="mt-2">View More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW-4 CLOSED --> */}

      {/* <!-- ROW-5 OPEN--> */}
      <Row className="mt-5">
        <div className="text-center">
          <h2 className="fw-semibold mb-2">Meet our creative minds</h2>
          <h5>Our Leadership</h5>
        </div>
        {/* <!-- COL-OPEN --> */}
        <Col xl={3} md={6} lg={6} className="mt-3">
          <Card>
            <Card.Body className="text-center">
              <img className="avatar avatar-xxl bradius cover-image" alt="user 2" src={require("../../../../assets/images/users/2.jpg")} />
              <h4 className="h4 mb-0 mt-3">Mike Rowe-Soft</h4>
              <Card.Text>Web designer</Card.Text>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
              <Row className="user-social-detail text-center">
                <div className="social-profile me-4 rounded text-center bg-secondary-transparent">
                  <Link to=""><i className="fa fa-google text-secondary"></i></Link>
                </div>
                <div className="social-profile me-4 rounded text-center bg-danger-transparent">
                  <Link to=""><i className="fa fa-facebook text-danger"></i></Link>
                </div>
                <div className="social-profile rounded text-center bg-success-transparent">
                  <Link to=""><i className="fa fa-twitter text-success"></i></Link>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}

        {/* <!-- COL-OPEN --> */}
        <Col xl={3} md={6} lg={6} className="mt-3">
          <Card>
            <Card.Body className="text-center">
              <img className="avatar avatar-xxl bradius cover-image" alt="user 4" src={require("../../../../assets/images/users/4.jpg")} />
              <h4 className="h4 mb-0 mt-3">Mike Rowe-Soft</h4>
              <Card.Text>Web designer</Card.Text>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
              <Row className="user-social-detail text-center">
                <div className="social-profile me-4 rounded text-center bg-secondary-transparent">
                  <Link to=""><i className="fa fa-google text-secondary"></i></Link>
                </div>
                <div className="social-profile me-4 rounded text-center bg-danger-transparent">
                  <Link to=""><i className="fa fa-facebook text-danger"></i></Link>
                </div>
                <div className="social-profile rounded text-center bg-success-transparent">
                  <Link to=""><i className="fa fa-twitter text-success"></i></Link>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}

        {/* <!-- COL-OPEN --> */}
        <Col xl={3} md={6} lg={6} className="mt-3">
          <Card>
            <Card.Body className="text-center">
              <img className="avatar avatar-xxl bradius cover-image" alt='user7' src={require("../../../../assets/images/users/7.jpg")} />
              <h4 className="h4 mb-0 mt-3">Mike Rowe-Soft</h4>
              <Card.Text>Web designer</Card.Text>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
              <Row className="user-social-detail text-center">
                <div className="social-profile me-4 rounded text-center bg-secondary-transparent">
                  <Link to=""><i className="fa fa-google text-secondary"></i></Link>
                </div>
                <div className="social-profile me-4 rounded text-center bg-danger-transparent">
                  <Link to=""><i className="fa fa-facebook text-danger"></i></Link>
                </div>
                <div className="social-profile rounded text-center bg-success-transparent">
                  <Link to=""><i className="fa fa-twitter text-success"></i></Link>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}

        {/* <!-- COL-OPEN --> */}
        <Col xl={3} md={6} lg={6} className="mt-3">
          <Card>
            <Card.Body className="text-center">
              <img className="avatar avatar-xxl bradius cover-image" alt='user 15' src={require("../../../../assets/images/users/15.jpg")} />
              <h4 className="h4 mb-0 mt-3">Mike Rowe-Soft</h4>
              <Card.Text>Web designer</Card.Text>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
              <Row className="user-social-detail text-center">
                <div className="social-profile me-4 rounded text-center bg-secondary-transparent">
                  <Link to=""><i className="fa fa-google text-secondary"></i></Link>
                </div>
                <div className="social-profile me-4 rounded text-center bg-danger-transparent">
                  <Link to=""><i className="fa fa-facebook text-danger"></i></Link>
                </div>
                <div className="social-profile rounded text-center bg-success-transparent">
                  <Link to=""><i className="fa fa-twitter text-success"></i></Link>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}
      </Row>
      {/* <!-- ROW-5 CLOSED --> */}

      {/* <!-- ROW-6 OPEN--> */}
      <Row className="mt-5">
        <h2 className="text-center fw-semibold">Our Services</h2>
        <Col lg={12}>
          <div className="mt-3">
            <div className="text-dark">
              <div className="services-statistics">
                <Row className="text-center">
                  <Col xl={3} md={6} lg={6}>
                    <Card>
                      <Card.Body>
                        <div className="counter-status">
                          <div className="counter-icon bg-primary-gradient box-shadow-primary">
                            <i className="icon icon-people text-white"></i>
                          </div>
                          <h4 className="mb-2 fw-semibold">Branding</h4>
                          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={3} md={6} lg={6}>
                    <Card>
                      <Card.Body>
                        <div className="counter-status">
                          <div className="counter-icon bg-secondary-gradient box-shadow-secondary">
                            <i className="icon icon-rocket text-white"></i>
                          </div>
                          <h4 className="mb-2 fw-semibold">Development</h4>
                          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={3} md={6} lg={6}>
                    <Card>
                      <Card.Body>
                        <div className="counter-statuss">
                          <div className="counter-icon bg-success-gradient box-shadow-success">
                            <i className="fe fe-instagram text-white"></i>
                          </div>
                          <h4 className="mb-2 fw-semibold">Social Media</h4>
                          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={3} md={6} lg={6}>
                    <Card>
                      <Card.Body>
                        <div className="counter-status">
                          <div className="counter-icon bg-danger-gradient box-shadow-danger">
                            <i className="fe fe-shopping-cart text-white"></i>
                          </div>
                          <h4 className="mb-2 fw-semibold">E-Commerce</h4>
                          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
        {/* <!-- COL-END --> */}
      </Row>
      {/* <!-- ROW-6 CLOSED --> */}
    </div>
  </div>
)
};

export default AboutCompany;

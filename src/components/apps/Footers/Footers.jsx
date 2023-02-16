import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Footers.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';

const Footers = () => {
  return (
  <div className={styles.Footers}>
    <PageHeader titles="Footers" active="Footers" items={['Apps']} />
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Footer style01</Card.Title>
          </Card.Header>
          <Card.Footer className="border-top-0 footer-1">
            <div className="container">
              <Row className="align-items-center flex-row-reverse">
                <Col lg={12} sm={12} className="mt-3 mt-lg-0 text-center">
                  Copyright © 2022 <Link to="#">Sash</Link>. Designed with <span className="fa fa-heart text-danger"></span> by <Link to="#"> Spruko </Link> All rights reserved.
                </Col>
              </Row>
            </div>
          </Card.Footer>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}

    {/* <!-- ROW-2 OPEN --> */}
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Footer style02</Card.Title>
          </Card.Header>
          <Card.Footer className="footer border-top-0 footer-1">
            <div className="container">
              <Row className="align-items-center">
                <Col md={12} className="social text-center">
                  <ul className="text-center d-inline-block">
                    <li>
                      <Link className="social-icon" to=""><i className="fa fa-facebook"></i></Link>
                    </li>
                    <li>
                      <Link className="social-icon" to=""><i className="fa fa-twitter"></i></Link>
                    </li>
                    <li>
                      <Link className="social-icon" to=""><i className="fa fa-rss"></i></Link>
                    </li>
                    <li>
                      <Link className="social-icon" to=""><i className="fa fa-youtube"></i></Link>
                    </li>
                    <li>
                      <Link className="social-icon" to=""><i className="fa fa-linkedin"></i></Link>
                    </li>
                    <li>
                      <Link className="social-icon" to=""><i className="fa fa-google-plus"></i></Link>
                    </li>
                  </ul>
                </Col>
                <Col lg={12} sm={12} className="mt-3 mt-lg-0 text-center">
                  Copyright © 2022 <Link to="#">Sash</Link>. Designed with by <Link to="#">Spruko</Link> All rights reserved.
                </Col>
              </Row>
            </div>
          </Card.Footer>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-2 CLOSED --> */}

    {/* <!-- ROW-3 OPEN --> */}
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Footer style03</Card.Title>
          </Card.Header>
          <Card.Footer className="footer border-top-0 footer-1">
            <div className="container">
              <Row className="align-items-center">
                <Col lg={6} sm={12} md={5} className="mt-3 mt-lg-0 text-center d-none d-md-block">
                  <div className="social">
                    <ul className="text-center">
                      <li>
                        <Link className="social-icon" to=""><i className="fa fa-facebook"></i></Link>
                      </li>
                      <li>
                        <Link className="social-icon" to=""><i className="fa fa-twitter"></i></Link>
                      </li>
                      <li>
                        <Link className="social-icon" to=""><i className="fa fa-rss"></i></Link>
                      </li>
                      <li>
                        <Link className="social-icon" to=""><i className="fa fa-youtube"></i></Link>
                      </li>
                      <li>
                        <Link className="social-icon" to=""><i className="fa fa-linkedin"></i></Link>
                      </li>
                      <li>
                        <Link className="social-icon" to=""><i className="fa fa-google-plus"></i></Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col  lg={6} sm={12} md={7}  className="mt-3 mt-lg-0 text-center">
                  Copyright © 2022 <Link to="#">Sash</Link>. Designed with <span className="fa fa-heart text-danger"></span> by <Link to="#"> Spruko </Link> All rights reserved.
                </Col>
              </Row>
            </div>
          </Card.Footer>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-3 CLOSED --> */}

    {/* <!-- ROW-4 OPEN --> */}
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Footer style04</Card.Title>
          </Card.Header>
          <footer className="footer border-top-0 footer-1">
            <div className="container">
              <Row className="align-items-center text-center">
                <Col md={6} lg={6} className="d-none d-md-block ">
                  <div className="social">
                    <ul className="text-center m-0 ">
                      <li>
                        <Link className="social-icon" to=""><i className="fa fa-facebook"></i></Link>
                      </li>
                      <li>
                        <Link className="social-icon" to=""><i className="fa fa-twitter"></i></Link>
                      </li>
                      <li>
                        <Link className="social-icon" to=""><i className="fa fa-rss"></i></Link>
                      </li>
                      <li>
                        <Link className="social-icon" to=""><i className="fa fa-youtube"></i></Link>
                      </li>
                      <li>
                        <Link className="social-icon" to=""><i className="fa fa-linkedin"></i></Link>
                      </li>
                      <li>
                        <Link className="social-icon" to=""><i className="fa fa-google-plus"></i></Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={6} md={6} className="text-end privacy">
                  <Link to="#" className="btn btn-link">Privacy</Link>
                  <Link to="#" className="btn btn-link">Terms</Link>
                  <Link to="#" className="btn btn-link">About Us</Link>
                </Col>
              </Row>
              <Row className="align-items-center flex-row-reverse">
                <Col lg={12} sm={12} className="mt-3 mt-lg-0 text-center">
                  Copyright © 2022 <Link to="#">Sash</Link>. Designed with <span className="fa fa-heart text-danger"></span> by <Link to="#"> Spruko </Link> All rights reserved.
                </Col>
              </Row>
            </div>
          </footer>
          {/* <!-- pagination-wrapper --> */}
        </Card>
        {/* <!-- section-wrapper --> */}
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-4 CLOSED --> */}

    {/* <!-- ROW-5 OPEN --> */}
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title>Footer style05</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="top-footer">
              <Row>
                <Col lg={4} sm={12}>
                  <h6>About</h6>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo.
                  </p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat .</p>
                </Col>
                <Col lg={2} sm={6} md={4}>
                  <h6>Pages</h6>
                  <ul className="list-unstyled mb-4">
                    <li><Link to="#">Dashboard</Link></li>
                    <li><Link to="#">Elements</Link></li>
                    <li><Link to="#">Forms</Link></li>
                    <li><Link to="#">Charts</Link></li>
                    <li><Link to="#">Tables</Link></li>
                    <li><Link to="#">Other Pages</Link></li>
                  </ul>
                </Col>
                <Col lg={2} sm={6} md={4}>
                  <h6>Information</h6>
                  <ul className="list-unstyled mb-4">
                    <li><Link to="#">Our Team</Link></li>
                    <li><Link to="#">Contact US</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Services</Link></li>
                    <li><Link to="#">Blog</Link></li>
                    <li><Link to="#">Terms and Services</Link></li>
                  </ul>
                </Col>
                <Col lg={4} sm={12} md={4}>
                  <h6>Location</h6>
                  <ul className="list-unstyled mb-4">
                    <li><Link to="#">Address1:7363 Old Livingston Drive Dyersburg</Link></li>
                    <li><Link to="#">Address2:4 Harrison St.Fairborn, OH 45324</Link></li>
                    <li><Link to="#">Phno1: +123 456 8976</Link></li>
                    <li><Link to="#">Phno2: +567 234 7865</Link></li>
                    <li><Link to="#">Mail1: yourdomain@gmail.com</Link></li>
                    <li><Link to="#">Mail2: infodomain@gmail.com</Link></li>
                  </ul>
                </Col>
              </Row>
            </div>
            <footer className="main-footer ps-0 pe-0">
              <Row>
                <Col xl={8} lg={12} md={12} className="footer1">Copyright © 2022 <Link to="#">Sash</Link>. Designed with <span className="fa fa-heart text-danger"></span> by <Link to="#"> Spruko </Link>
                </Col>
                <Col xl={4} lg={12} md={12} className="ms-auto text-end">
                  <ul className="footer-social-list ">
                    <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-google"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                  </ul>
                </Col>
              </Row>
            </footer>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-5 CLOSED --> */}

    {/* <!-- ROW-6 OPEN --> */}
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Footer style06</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="top-footer">
              <Row>
                <Col lg={4} sm={12} md={12}>
                  <h6>About</h6>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo.
                  </p>
                  <p className="mb-5 mb-lg-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat .</p>
                </Col>
                <Col lg={2} sm={6} md={4}>
                  <h6>Pages</h6>
                  <ul className="list-unstyled mb-5 mb-lg-0">
                    <li><Link to="#">Dashboard</Link></li>
                    <li><Link to="#">Elements</Link></li>
                    <li><Link to="#">Forms</Link></li>
                    <li><Link to="#">Charts</Link></li>
                    <li><Link to="#">Tables</Link></li>
                    <li><Link to="#">Other Pages</Link></li>
                  </ul>
                </Col>
                <Col lg={2} sm={6} md={4} className="col-lg-2 col-sm-6 col-md-4">
                  <h6>Information</h6>
                  <ul className="list-unstyled mb-5 mb-lg-0">
                    <li><Link to="#">Our Team</Link></li>
                    <li><Link to="#">Contact US</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Services</Link></li>
                    <li><Link to="#">Blog</Link></li>
                    <li><Link to="#">Terms and Services</Link></li>
                  </ul>
                </Col>
                <Col lg={4} sm={12} md={4}>
                  <h6>Posts</h6>
                  <img alt="" src={require("../../../assets/images/media/31.jpg")} />
                  <img alt="" src={require("../../../assets/images/media/32.jpg")} />
                  <img alt="" src={require("../../../assets/images/media/33.jpg")} />
                  <img alt="" src={require("../../../assets/images/media/34.jpg")} />
                  <hr />
                  <h6 className="mb-0 m-t-30">Payments</h6>
                  <ul className="footer-payments">
                    <li><Link to="#"><i className="fa fa-cc-amex text-muted" aria-hidden="true"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-cc-visa text-muted" aria-hidden="true"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-credit-card-alt text-muted" aria-hidden="true"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-cc-mastercard text-muted" aria-hidden="true"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-cc-paypal text-muted" aria-hidden="true"></i></Link></li>
                  </ul>
                </Col>
              </Row>
            </div>
            <footer className="main-footer ps-0 pe-0">
              <Row>
                <Col xl={8} lg={12} md={12} className="footer1">Copyright © 2022 <Link to="#">Sash</Link>. Designed with <span className="fa fa-heart text-danger"></span> by <Link to="#"> Spruko </Link>
                </Col>
                <Col xl={4} lg={12} md={12} className="ms-auto text-end">
                  <ul className="footer-social-list ">
                    <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-google"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                  </ul>
                </Col>
              </Row>
            </footer>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-6 CLOSED --> */}
  </div>
)
};

export default Footers;

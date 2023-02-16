import React from 'react';
import styles from './Services.module.scss';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';


const Services = () => {
  return (
  <div className={styles.Services}>
    <PageHeader titles="Services" active="Services" items={['Pages']} />
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col sm={12} md={6} lg={6} xl={3}>
        <Card className="service">
          <Card.Body>
            <div className="item-box text-center">
              <div className=" text-center  mb-4 text-primary"><i className="icon icon-people"></i></div>
              <div className="item-box-wrap">
                <h5 className="mb-2">Creative solutions</h5>
                <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={6} xl={3}>
        <Card className="service">
          <Card.Body>
            <div className="item-box text-center">
              <div className=" text-center text-danger-gradient mb-4"><i className="icon icon-clock"></i></div>
              <div className="item-box-wrap">
                <h5 className="mb-2">Trace your time</h5>
                <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={6} xl={3}>
        <Card className="service">
          <Card.Body>
            <div className="item-box text-center">
              <div className=" text-center text-success mb-4"><i className="fa fa-building-o"></i></div>
              <div className="item-box-wrap">
                <h5 className="mb-2">Business FrameWork</h5>
                <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={6} xl={3}>
        <Card className="service">
          <Card.Body>
            <div className="item-box text-center">
              <div className="text-center text-warning-gradient mb-4"><i className="icon icon-action-redo"></i></div>
              <div className="item-box-wrap">
                <h5 className="mb-2">Shares</h5>
                <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSE --> */}

    {/* <!-- ROW-2 OPEN --> */}
    <Row>
      <Col sm={12} md={6} lg={6} xl={6}>
        <Card>
          <Card.Body>
            <Row>
              <Col xl={2} lg={3} className="feature">
                <div className="fa-stack fa-lg fa-1x border btn-primary mb-3">
                  <i className="fa fa-globe fa-stack-1x text-white"></i>
                </div>
              </Col>
              <Col xl={10} lg={9} >
                <div className="mt-1">
                  <h4 className="fw-semibold">Web design</h4>
                  <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={6} xl={6}>
        <Card>
          <Card.Body>
            <Row>
              <Col xl={2} lg={3} className="feature">
                <div className="fa-stack fa-lg fa-1x border bg-warning mb-3">
                  <i className="fa fa-building-o fa-stack-1x text-white"></i>
                </div>
              </Col>
              <Col xl={10} lg={9}>
                <div className="mt-1">
                  <h4 className="fw-semibold">Web Development</h4>
                  <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={6} xl={6}>
        <Card>
          <Card.Body>
            <Row>
              <Col xl={2} lg={3} className="feature">
                <div className="fa-stack fa-lg fa-1x border bg-pink mb-3">
                  <i className="fa fa-file-word-o fa-stack-1x text-white"></i>
                </div>
              </Col>
              <Col xl={10} lg={9}>
                <div className="mt-1">
                  <h4 className="fw-semibold">Wordpress</h4>
                  <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={6} xl={6}>
        <Card>
          <Card.Body>
            <Row>
              <Col xl={2} lg={3} className="feature">
                <div className="fa-stack fa-lg fa-1x border bg-danger mb-3">
                  <i className="fa fa-camera fa-stack-1x text-white"></i>
                </div>
              </Col>
              <Col xl={10} lg={9}>
                <div className="mt-1">
                  <h4 className="fw-semibold">Photography</h4>
                  <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={6} xl={6}>
        <Card>
          <Card.Body>
            <Row>
              <Col xl={2} lg={3} className="feature">
                <div className="fa-stack fa-lg fa-1x border bg-purple mb-3">
                  <i className="fa fa-pencil-square-o fa-stack-1x text-white"></i>
                </div>
              </Col>
              <Col xl={10} lg={9}>
                <div className="mt-1">
                  <h4 className="fw-semibold">Development</h4>
                  <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={6} xl={6}>
        <Card>
          <Card.Body>
            <Row>
              <Col xl={2} lg={3} className="feature">
                <div className="fa-stack fa-lg fa-1x border bg-success mb-3">
                  <i className="fa fa-eercast fa-stack-1x text-white"></i>
                </div>
              </Col>
              <Col xl={10} lg={9}>
                <div className="mt-1">
                  <h4 className="fw-semibold">Android</h4>
                  <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-2 CLOSE --> */}

    {/* <!-- ROW-3 OPEN --> */}
    <Row>
      <Col md={12} lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Our services</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
                going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
              <Row className="mt-3">
                <Col md={6}>
                  <label>Web Design</label>
                  
                  <ProgressBar variant="purple" className="mb-3" now={50} label={`${50}%`} />
                </Col>
                <Col md={6}>
                  <label>Web Development</label>
                  
                  <ProgressBar variant="danger" className="mb-3" now={70} label={`${70}%`} />
                </Col>
                <Col md={6}>
                  <label>Wordpress</label>
                  
                  <ProgressBar variant="warning" className="mb-3" now={80} label={`${80}%`} />
                </Col>
                <Col md={6}>
                  <label>Photography</label>
                  
                  <ProgressBar variant="primary" className="mb-3" now={75} label={`${75}%`} />
                </Col>
                <Col md={6}>
                  <label>Development</label>
                  
                  <ProgressBar variant="pink" className="mb-3" now={65} label={`${65}%`} />
                </Col>
                <Col md={6}>
                  <label>Android</label>
                
                  <ProgressBar variant="success" className="mb-3" now={70} label={`${70}%`} />
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-3 CLOSED --> */}
  </div>
)
  };

export default Services;

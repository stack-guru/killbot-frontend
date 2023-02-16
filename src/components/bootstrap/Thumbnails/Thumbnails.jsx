import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Thumbnails.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';


const Thumbnails = () => {

  return (

  <div className={styles.Thumbnails}>
    <PageHeader titles="Thumbnails" active="Thumbnails" items={['Componets']} /> 
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col md={12} lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>Custom content Thumbnails</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <Row>
                <Col md={12} xl={4}>
                  <div className="thumbnail">
                    <Link to="#">
                      <img src={require("../../../assets/images/media/19.jpg")} alt="thumb1" className="thumbimg" />
                    </Link>
                    <div className="caption">
                      <h4><strong>Thumbnail label</strong></h4>
                      <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p>
                        <Link to="#" className="btn btn-primary me-2" role="button">Button</Link>
                        <Link to="#" className="btn btn-secondary me-2" role="button">Button</Link>
                      </p>
                    </div>
                  </div>
                </Col>
                {/* <!-- COL-END --> */}
                <Col md={12} xl={4}>
                  <div className="thumbnail">
                    <Link to="#">
                      <img src={require("../../../assets/images/media/20.jpg")} alt="thumb1" className="thumbimg" />
                    </Link>
                    <div className="caption">
                      <h4><strong>Thumbnail label</strong></h4>
                      <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p>
                        <Link to="#" className="btn btn-primary me-2" role="button">Button</Link>
                        <Link to="#" className="btn btn-secondary me-2" role="button">Button</Link>
                      </p>
                    </div>
                  </div>
                </Col>
                {/* <!-- COL-END --> */}
                <Col md={12} xl={4}>
                  <div className="thumbnail">
                    <Link to="#">
                      <img src={require("../../../assets/images/media/21.jpg")} alt="thumb1" className="thumbimg" />
                    </Link>
                    <div className="caption">
                      <h4><strong>Thumbnail label</strong></h4>
                      <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p>
                        <Link to="#" className="btn btn-primary me-2" role="button">Button</Link>
                        <Link to="#" className="btn btn-secondary me-2" role="button">Button</Link>
                      </p>
                    </div>
                  </div>
                </Col>
                {/* <!-- COL-END --> */}
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}

    {/* <!-- ROW-2 OPEN --> */}
    <Row>
      <Col md={12} lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>Basic Thumbnails</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <Row>
                <Col md={6} xl={3}>
                  <Link to="#" className="thumbnail ">
                    <img src={require("../../../assets/images/media/1.jpg")} alt="thumb1" className="thumbimg" />
                  </Link>
                </Col>
                <Col md={6} xl={3}>
                  <Link to="#" className="thumbnail">
                    <img src={require("../../../assets/images/media/2.jpg")} alt="thumb1" className="thumbimg" />
                  </Link>
                </Col>
                <Col md={6} xl={3}>
                  <Link to="#" className="thumbnail">
                    <img src={require("../../../assets/images/media/3.jpg")} alt="thumb1" className="thumbimg" />
                  </Link>
                </Col>
                <Col md={6} xl={3}>
                  <Link to="#" className="thumbnail">
                    <img src={require("../../../assets/images/media/5.jpg")} alt="thumb1" className="thumbimg" />
                  </Link>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-2 CLOSED --> */}

    {/* <!-- ROW-3 OPEN --> */}
    <Row>
      <Col md={12} lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>Custom content Thumbnails</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <Row>
                <Col md={12} lg={6} xl={3}>
                  <div className="thumbnail">
                    <Link to="#">
                      <img src={require("../../../assets/images/media/22.jpg")} alt="thumb1" className="thumbimg" />
                    </Link>
                    <div className="caption">
                      <h4><strong>Thumbnail label</strong></h4>
                      <p>sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                  </div>
                </Col>
                <Col md={12} lg={6} xl={3}>
                  <div className="thumbnail">
                    <Link to="#">
                      <img src={require("../../../assets/images/media/23.jpg")} alt="thumb1" className="thumbimg" />
                    </Link>
                    <div className="caption">
                      <h4><strong>Thumbnail label</strong></h4>
                      <p>sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                  </div>
                </Col>
                <Col md={12} lg={6} xl={3}>
                  <div className="thumbnail">
                    <div className="caption">
                      <h4><strong>Thumbnail label</strong></h4>
                      <p>sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                    <Link to="#">
                      <img src={require("../../../assets/images/media/24.jpg")} alt="thumb1" className="thumbimg" />
                    </Link>
                  </div>
                </Col>
                <Col md={12} lg={6} xl={3}>
                  <div className="thumbnail">
                    <div className="caption">
                      <h4><strong>Thumbnail label</strong></h4>
                      <p>sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                    <Link to="#">
                      <img src={require("../../../assets/images/media/25.jpg")} alt="thumb1" className="thumbimg" />
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-3 CLOSED --> */}
  </div>
)
};

export default Thumbnails;

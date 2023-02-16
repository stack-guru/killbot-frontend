import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './AvatarRounded.module.scss';


const AvatarRounded = () => {

  return (

  <div className={styles.AvatarRounded}>
    <PageHeader titles="Avatar-Rounded" active="Avatar-Rounded" items={['Componets']} /> 
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Simple Round avatar</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes<code className="highlighter-rouge">.avatar</code> in <code className="highlighter-rouge">.brround</code>.</p>
              <div className="example">
                <div className="avatar-list">
                  <img className="avatar  brround cover-image" alt='user12' src={require("../../../assets/images/users/12.jpg")} />
                  <img className="avatar  brround cover-image" alt='user13' src={require("../../../assets/images/users/13.jpg")} />
                  <img className="avatar  brround cover-image" alt='user11' src={require("../../../assets/images/users/11.jpg")} />
                  <img className="avatar  brround cover-image" alt='user12' src={require("../../../assets/images/users/12.jpg")} />
                  <img className="avatar  brround cover-image" alt='user14' src={require("../../../assets/images/users/14.jpg")} />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>RoundAvatars list</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes <code className="highlighter-rouge">.avatar-list </code> in <code className="highlighter-rouge">.brround</code> and <code className="highlighter-rouge">.avatar-list-stacked</code>.</p>
              <div className="example">
                <div className="avatar-list avatar-list-stacked">
                  <img className="avatar brround cover-image" alt='user12' src={require("../../../assets/images/users/12.jpg")} />
                  <img className="avatar brround cover-image" alt='user1' src={require("../../../assets/images/users/1.jpg")} />
                  <img className="avatar brround cover-image" alt='user19' src={require("../../../assets/images/users/19.jpg")} />
                  <img className="avatar brround cover-image" alt='user2' src={require("../../../assets/images/users/2.jpg")} />
                  <img className="avatar brround cover-image" alt='user14' src={require("../../../assets/images/users/14.jpg")} />
                  <span className="avatar brround cover-image bg-primary">+8</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}

    {/* <!-- ROW-2 OPEN --> */}
    <Row>
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>RoundAvatar with icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes <code className="highlighter-rouge">.avatar-icons</code> .</p>
              <div className="example">
                <div className="avatar-list">

                  <div className="avatar avatar-xl brround cover-image bg-transparent" >
                    <img className=" brround cover-image" alt='user21' src={require("../../../assets/images/users/21.jpg")} />
                    <span className="badge rounded-pill avatar-icons bg-primary"><i className="fe fe-edit fs-12"></i></span>
                  </div>

                  <div className="avatar avatar-xl brround cover-image bg-transparent" >
                    <img className=" brround cover-image" alt='user5' src={require("../../../assets/images/users/5.jpg")} />
                    <span className="badge rounded-pill avatar-icons bg-secondary"><i className="fe fe-arrow-down fs-12"></i></span>
                  </div>

                  <div className="avatar avatar-xl brround cover-image bg-transparent" >
                    <img className=" brround cover-image" alt='user9' src={require("../../../assets/images/users/9.jpg")} />
                    <span className="badge rounded-pill avatar-icons bg-red"><i className="fe fe-lock fs-12"></i></span>
                  </div>

                  <div className="avatar avatar-xl brround cover-image bg-transparent" >
                    <img className=" brround cover-image" alt='user6' src={require("../../../assets/images/users/6.jpg")} />
                    <span className="badge rounded-pill avatar-icons bg-green"><i className="fe fe-camera fs-12"></i></span>
                  </div>

                  <div className="avatar avatar-xl brround cover-image bg-transparent" >
                    <img className=" brround cover-image" alt='user7' src={require("../../../assets/images/users/7.jpg")} />
                    <span className="badge rounded-pill avatar-icons bg-yellow"><i className="fe fe-bell fs-12"></i></span>
                  </div>

                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>RoundAvatar size</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes <code className="highlighter-rouge">.avatar-sm</code> , <code className="highlighter-rouge">.avatar-md</code> , <code className="highlighter-rouge">.avatar-lg</code> , <code className="highlighter-rouge">.avatar-xl</code>                                            , <code className="highlighter-rouge">.avatar-xxl</code> .</p>
              <div className="example">
                <div className="avatar-list">
                  <img className="avatar avatar-sm brround cover-image" alt='user15' src={require("../../../assets/images/users/15.jpg")} />
                  <img className="avatar brround cover-image" alt='user13' src={require("../../../assets/images/users/13.jpg")} />
                  <img className="avatar avatar-md brround cover-image" alt='user16' src={require("../../../assets/images/users/16.jpg")} />
                  <img className="avatar avatar-lg brround cover-image" alt='user17' src={require("../../../assets/images/users/17.jpg")} />
                  <img className="avatar avatar-xl brround cover-image bg-transparent" alt='user14' src={require("../../../assets/images/users/14.jpg")} />
                  <img className="avatar avatar-xxl brround cover-image" alt='user18' src={require("../../../assets/images/users/18.jpg")} />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
    </Row>
    {/* <!-- ROW-2 OPEN --> */}

    {/* <!-- ROW-3 OPEN --> */}
    <Row>
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>RoundAvatar status</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes <code className="highlighter-rouge">.avatar-status</code> .</p>
              <div className="example">
                <div className="avatar-list avatarstatus">
                  <img className="avatar brround cover-image" alt='user19' src={require("../../../assets/images/users/19.jpg")} />

                  <div className="avatar brround cover-image" >
                    <img className=" brround cover-image" alt='user15' src={require("../../../assets/images/users/15.jpg")} />
                    <span className="avatar-status bg-secondary"></span>
                  </div>


                  <div className="avatar brround cover-image" >
                    <img className=" brround cover-image" alt='user20' src={require("../../../assets/images/users/20.jpg")} />
                    <span className="avatar-status bg-red"></span>
                  </div>

                  <div className="avatar brround cover-image" >
                    <img className=" brround cover-image" alt='user11' src={require("../../../assets/images/users/11.jpg")} />
                    <span className="avatar-status bg-green"></span>
                  </div>

                  <div className="avatar brround cover-image" >
                    <img className=" brround cover-image" alt='user17' src={require("../../../assets/images/users/17.jpg")} />
                    <span className="avatar-status bg-yellow"></span>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>RoundAvatar with Badges</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes <code className="highlighter-rouge">.avatar-badges</code> .</p>
              <div className="example">
                <div className="avatar-list">

                  <div className="avatar avatar-md brround cover-image" >
                    <img className=" brround cover-image" alt='user5' src={require("../../../assets/images/users/19.jpg")} />
                    <span className="badge rounded-pill avatar-badges bg-primary fs-10">3</span>
                  </div>

                  <div className="avatar avatar-md brround cover-image" >
                    <img className=" brround cover-image" alt='user5' src={require("../../../assets/images/users/15.jpg")} />
                    <span className="badge rounded-pill avatar-badges bg-secondary fs-10">1</span>
                  </div>

                  <div className="avatar avatar-md brround cover-image" >
                    <img className=" brround cover-image" alt='user20' src={require("../../../assets/images/users/20.jpg")} />
                    <span className="badge rounded-pill avatar-badges bg-red fs-10">4</span>
                  </div>

                  <div className="avatar avatar-md brround cover-image" >
                    <img className=" brround cover-image" alt='user11' src={require("../../../assets/images/users/11.jpg")} />
                    <span className="badge rounded-pill avatar-badges bg-green fs-10">6</span>
                  </div>

                  <div className="avatar avatar-md brround cover-image" >
                    <img className=" brround cover-image" alt='user17' src={require("../../../assets/images/users/17.jpg")} />
                    <span className="badge rounded-pill avatar-badges bg-yellow fs-10">4</span>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
      {/* <!-- COL END --> */}
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Avatar initials with colors</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <p>Use classes <code className="highlighter-rouge">.avatar-sm</code> , <code className="highlighter-rouge">.avatar-md</code> , <code className="highlighter-rouge">.avatar-lg</code> , <code className="highlighter-rouge">.avatar-xl</code>                                                , <code className="highlighter-rouge">.avatar-xxl</code> .</p>
                <div className="avatar-list">
                  <span className="avatar avatar-sm brround bg-success">A</span>
                  <span className="avatar brround bg-warning">B</span>
                  <span className="avatar avatar-md brround bg-danger">C</span>
                  <span className="avatar avatar-lg brround bg-info">D</span>
                  <span className="avatar avatar-xl brround bg-secondary">GE</span>
                  <span className="avatar avatar-xxl brround bg-primary">A.N</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
    </Row>
    {/* <!-- ROW-3 OPEN --> */}
  </div>
)
};

export default AvatarRounded;

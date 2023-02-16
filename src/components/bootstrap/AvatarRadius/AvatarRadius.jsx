import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './AvatarRadius.module.scss';

const AvatarRadius = () => {
  return (
  <div className={styles.AvatarRadius}>
    <PageHeader titles="Avatar-Radius" active="Avatar-Radius" items={['Componets']} />
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Simple avatar</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes<code className="highlighter-rouge">.avatar</code> in <code className="highlighter-rouge">.bradius</code>.</p>
              <div className="example">
                <div className="avatar-list">
                  <img className="avatar bradius cover-image" alt='user1' src={require("../../../assets/images/users/1.jpg")} />
                  <img className="avatar bradius cover-image" alt='user2' src={require("../../../assets/images/users/2.jpg")} />
                  <img className="avatar bradius cover-image" alt='user3' src={require("../../../assets/images/users/1.jpg")} />
                  <img className="avatar bradius cover-image" alt='user4' src={require("../../../assets/images/users/2.jpg")} />
                  <img className="avatar bradius cover-image" alt='user5' src={require("../../../assets/images/users/3.jpg")} />
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
            <Card.Title>Avatar with Badges</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes <code className="highlighter-rouge">.avatar-badges</code> .</p>
              <div className="example">
                <div className="avatar-list">

                  <div className=" avatar avatar-md bradius cover-image" >
                    <img className=" bradius cover-image" alt='user5' src={require("../../../assets/images/users/5.jpg")} />
                    <span className="badge rounded-pill avatar-badges bg-secondary fs-10">1</span>
                  </div>

                  <div className=" avatar avatar-md bradius cover-image" >
                    <img className=" bradius cover-image" alt='user9' src={require("../../../assets/images/users/9.jpg")} />
                    <span className="badge rounded-pill avatar-badges bg-danger fs-10">4</span>
                  </div>

                  <div className=" avatar avatar-md bradius cover-image" >
                    <img className=" bradius cover-image" alt='user6' src={require("../../../assets/images/users/6.jpg")} />
                    <span className="badge rounded-pill avatar-badges bg-success fs-10">6</span>
                  </div>

                  <div className="  avatar avatar-md bradius cover-image" >
                    <img className=" bradius cover-image" alt='user7' src={require("../../../assets/images/users/7.jpg")} />
                    <span className="badge rounded-pill avatar-badges bg-warning fs-10">4</span>
                  </div>
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
      <Col md={12} lg={6} className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>
            <Card.Title>RadiusAvatar with icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes <code className="highlighter-rouge">.avatar-icons</code> .</p>
              <div className="example">
                <div className="avatar-list">

                  <div className="avatar avatar-xl bradius cover-image" >
                    <img className=" bradius cover-image" alt='user21' src={require("../../../assets/images/users/21.jpg")} />
                    <span className="badge rounded-pill avatar-icons bg-primary"><i className="fe fe-edit fs-12"></i></span>
                  </div>

                  <div className="avatar avatar-xl bradius cover-image" >
                    <img className=" bradius cover-image" alt='user5' src={require("../../../assets/images/users/5.jpg")} />
                    <span className="badge rounded-pill avatar-icons bg-secondary"><i className="fe fe-arrow-down fs-12"></i></span>
                  </div>

                  <div className="avatar avatar-xl bradius cover-image" >
                    <img className=" bradius cover-image" alt='user9' src={require("../../../assets/images/users/9.jpg")} />
                    <span className="badge rounded-pill avatar-icons bg-danger"><i className="fe fe-lock fs-12"></i></span>
                  </div>

                  <div className="avatar avatar-xl bradius cover-image" >
                    <img className=" bradius cover-image" alt='user6' src={require("../../../assets/images/users/6.jpg")} />
                    <span className="badge rounded-pill avatar-icons bg-success"><i className="fe fe-camera fs-12"></i></span>
                  </div>

                  <div className="avatar avatar-xl bradius cover-image" >
                    <img className=" bradius cover-image" alt='user7' src={require("../../../assets/images/users/7.jpg")} />
                    <span className="badge rounded-pill avatar-icons bg-warning"><i className="fe fe-bell fs-12"></i></span>
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
            <Card.Title>Radius Avatar initials with colors</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <p>Use classes <code className="highlighter-rouge">.avatar-sm</code> , <code className="highlighter-rouge">.avatar-md</code> , <code className="highlighter-rouge">.avatar-lg</code> , <code className="highlighter-rouge">.avatar-xl</code>                                                , <code className="highlighter-rouge">.avatar-xxl</code> .</p>
                <div className="avatar-list">
                  <span className="avatar avatar-sm bradius bg-success">A</span>
                  <span className="avatar bradius bg-warning">B</span>
                  <span className="avatar avatar-md bradius bg-danger">C</span>
                  <span className="avatar avatar-lg bradius bg-info">D</span>
                  <span className="avatar avatar-xl bradius bg-secondary">GE</span>
                  <span className="avatar avatar-xxl bradius bg-primary">A.N</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
    </Row>
    {/* <!-- ROW-2 CLOSED --> */}

    {/* <!-- ROW-3 OPEN --> */}
    <Row>
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Avatar status</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes <code className="highlighter-rouge">.avatar-status</code> .</p>
              <div className="example">
                <div className="avatar-list avatarstatus">
                  <img className="avatar bradius cover-image" alt='user 21' src={require("../../../assets/images/users/21.jpg")} />

                  <div className="avatar bradius cover-image" >
                    <img className=" bradius cover-image" alt='user5' src={require("../../../assets/images/users/5.jpg")} />
                    <span className="avatar-status bg-secondary"></span>
                  </div>

                  <div className="avatar bradius cover-image" >
                    <img className=" bradius cover-image" alt='user9' src={require("../../../assets/images/users/9.jpg")} />
                    <span className="avatar-status bg-red"></span>
                  </div>

                  <div className="avatar bradius cover-image" >
                    <img className=" bradius cover-image" alt='user6' src={require("../../../assets/images/users/6.jpg")} />
                    <span className="avatar-status bg-green"></span>
                  </div>

                  <div className="avatar bradius cover-image" >
                    <img className=" bradius cover-image" alt='user7' src={require("../../../assets/images/users/7.jpg")} />
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
            <Card.Title>Avatars list</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap ">
              <p>Use classes <code className="highlighter-rouge">.avatar-list </code> in <code className="highlighter-rouge">.bradius</code> and <code className="highlighter-rouge">.avatar-list-stacked</code>.</p>
              <div className="example">
                <div className="avatar-list avatar-list-stacked">
                  <img className="avatar bradius cover-image" alt='user21' src={require("../../../assets/images/users/21.jpg")} />
                  <img className="avatar bradius cover-image" alt='user21' src={require("../../../assets/images/users/21.jpg")} />
                  <img className="avatar bradius cover-image" alt='user9' src={require("../../../assets/images/users/9.jpg")} />
                  <img className="avatar bradius cover-image" alt='user21' src={require("../../../assets/images/users/21.jpg")} />
                  <img className="avatar bradius cover-image" alt='user11' src={require("../../../assets/images/users/11.jpg")} />
                  <span className="avatar bradius bg-primary">+8</span>
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
            <Card.Title>Avatar size</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes <code className="highlighter-rouge">.avatar-sm</code> , <code className="highlighter-rouge">.avatar-md</code> , <code className="highlighter-rouge">.avatar-lg</code> , <code className="highlighter-rouge">.avatar-xl</code>                                            , <code className="highlighter-rouge">.avatar-xxl</code> .</p>
              <div className="example">
                <div className="avatar-list">
                  <img className="avatar avatar-sm bradius cover-image" alt='user4' src={require("../../../assets/images/users/4.jpg")} />
                  <img className="avatar bradius cover-image" alt='user3' src={require("../../../assets/images/users/3.jpg")} />
                  <img className="avatar avatar-md bradius cover-image" alt='user5' src={require("../../../assets/images/users/5.jpg")} />
                  <img className="avatar avatar-lg bradius cover-image" alt='user6' src={require("../../../assets/images/users/6.jpg")} />
                  <img className="avatar avatar-xl bradius cover-image" alt='user4' src={require("../../../assets/images/users/4.jpg")} />
                  <img className="avatar avatar-xxl bradius cover-image" alt='user7' src={require("../../../assets/images/users/7.jpg")} />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
    </Row>
    {/* <!-- ROW-3 CLOSED --> */}
  </div >
)
};

export default AvatarRadius;

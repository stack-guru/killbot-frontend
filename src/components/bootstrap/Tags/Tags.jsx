import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Tags.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';

const Tags = () => (
  <div className={styles.Tags}>
    <PageHeader titles="Tags" active="Tags" items={['Componets']} /> 
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Default tag</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <span className="tag">First tag</span>
                  <span className="tag">Second tag</span>
                  <span className="tag">Third tag</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Link tag</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <Link to="#" className="tag">First tag</Link>
                  <Link to="#" className="tag">Second tag</Link>
                  <Link to="#" className="tag">Third tag</Link>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}

    {/* <!-- ROW-2 OPEN --> */}
    <Row>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Rounded tag Style</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <span className="tag tag-radius tag-round tag-primary">First tag</span>
                  <span className="tag tag-radius tag-round tag-orange">Second tag</span>
                  <span className="tag tag-radius tag-round tag-teal">Third tag</span>
                  <span className="tag tag-radius tag-round tag-pink">Third tag</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Rounded tag Style</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <span className="tag tag-radius tag-round tag-outline-primary">First tag</span>
                  <span className="tag tag-radius tag-round tag-outline-secondary">Second tag</span>
                  <span className="tag tag-radius tag-round tag-outline-danger">Third tag</span>
                  <span className="tag tag-radius tag-round tag-outline-warning">Third tag</span>
                  <span className="tag tag-radius tag-round tag-outline-success">Third tag</span>
                  <span className="tag tag-radius tag-round tag-outline-info">Third tag</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Rounded tag with icon</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <span className="tag tag-rounded tag-icon tag-red"><i className="fe fe-map-pin"></i>First tag <Link to="#" className="tag-addon tag-addon-cross tag-red"><i className="fe fe-x text-white m-1"></i></Link></span>
                  <span className="tag tag-rounded tag-icon tag-green"><i className="fe fe-calendar"></i>Second tag <Link to="#" className="tag-addon tag-addon-cross tag-green"><i className="fe fe-x text-white m-1"></i></Link></span>
                  <span className="tag tag-rounded tag-icon tag-orange"><i className="fe fe-bell"></i>Third tag <Link to="#" className="tag-addon tag-addon-cross tag-orange"><i className="fe fe-x text-white m-1"></i></Link></span>
                  <span className="tag tag-rounded tag-icon tag-pink"><i className="fe fe-filter"></i>Third tag <Link to="#" className="tag-addon tag-addon-cross tag-pink"><i className="fe fe-x text-white m-1"></i></Link></span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Default tag</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <span className="tag tag-border">First tag</span>
                  <span className="tag tag-border">Second tag</span>
                  <span className="tag tag-border">Third tag</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-2 CLOSED --> */}

    {/* <!-- ROW-3 OPEN --> */}
    <Row>
      <Col xl={12}>
        <Card>
          <Card.Header>
            <Card.Title>Rounded tag</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <span className="tag tag-rounded">First tag</span>
                  <span className="tag tag-rounded">Second tag</span>
                  <span className="tag tag-rounded">Third tag</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={12}>
        <Card>
          <Card.Header>
            <Card.Title>Color tag</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <span className="tag tag-blue">Blue tag</span>
                  <span className="tag tag-azure">Azure tag</span>
                  <span className="tag tag-indigo">Indigo tag</span>
                  <span className="tag tag-purple">Purple tag</span>
                  <span className="tag tag-pink">Pink tag</span>
                  <span className="tag tag-red">Red tag</span>
                  <span className="tag tag-orange">Orange tag</span>
                  <span className="tag tag-yellow">Yellow tag</span>
                  <span className="tag tag-lime">Lime tag</span>
                  <span className="tag tag-green">Green tag</span>
                  <span className="tag tag-teal">Teal tag</span>
                  <span className="tag tag-cyan">Cyan tag</span>
                  <span className="tag tag-gray">Gray tag</span>
                  <span className="tag tag-gray-dark">Dark gray tag</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={12}>
        <Card>
          <Card.Header>
            <Card.Title>Avatar tag</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <span className="tag">
                    <img className="tag-avatar avatar cover-image" alt='user11' src={require("../../../assets/images/users/11.jpg")} />Victoria
                  </span>
                  <span className="tag">
                    <img className="tag-avatar avatar cover-image" alt='user4' src={require("../../../assets/images/users/4.jpg")} /> Nathan
                  </span>
                  <span className="tag">
                    <img className="tag-avatar avatar cover-image" alt='user1' src={require("../../../assets/images/users/1.jpg")} /> Alice
                  </span>
                  <span className="tag">
                    <img className="tag-avatar avatar cover-image" alt='user18' src={require("../../../assets/images/users/18.jpg")} /> Rose
                  </span>
                  <span className="tag">
                    <img className="tag-avatar avatar cover-image" alt='user16' src={require("../../../assets/images/users/16.jpg")} /> Peter
                  </span>
                  <span className="tag">
                    <img className="tag-avatar avatar cover-image" alt='user6' src={require("../../../assets/images/users/6.jpg")} /> Wayne
                  </span>
                  <span className="tag">
                    <img className="tag-avatar avatar cover-image" alt='user7' src={require("../../../assets/images/users/7.jpg")} /> Michelle
                  </span>
                  <span className="tag">
                    <img className="tag-avatar avatar cover-image" alt='user17' src={require("../../../assets/images/users/17.jpg")} /> Debra
                  </span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={12}>
        <Card>
          <Card.Header>
            <Card.Title>List of tags</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>You can create a list of tags with the <code className="highlighter-rouge">.tags</code> container.</p>
              <div className="example">
                <div className="tags">
                  <span className="tag">First tag</span>
                  <span className="tag">Second tag</span>
                  <span className="tag">Third tag</span>
                </div>
              </div>
              <p className="mt-4">If the list is very long, it will automatically wrap on multiple lines, while keeping all tags evenly spaced.</p>
              <div className="example">
                <div className="tags">
                  <span className="tag">One</span>
                  <span className="tag">Two</span>
                  <span className="tag">Three</span>
                  <span className="tag">Four</span>
                  <span className="tag">Five</span>
                  <span className="tag">Six</span>
                  <span className="tag">Seven</span>
                  <span className="tag">Eight</span>
                  <span className="tag">Nine</span>
                  <span className="tag">Ten</span>
                  <span className="tag">Eleven</span>
                  <span className="tag">Twelve</span>
                  <span className="tag">Thirteen</span>
                  <span className="tag">Fourteen</span>
                  <span className="tag">Fifteen</span>
                  <span className="tag">Sixteen</span>
                  <span className="tag">Seventeen</span>
                  <span className="tag">Eighteen</span>
                  <span className="tag">Nineteen</span>
                  <span className="tag">Twenty</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Tag remove</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <span className="tag">
                    One
                    <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                  </span>
                  <span className="tag">
                    Two
                    <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                  </span>
                  <span className="tag">
                    Three
                    <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                  </span>
                  <span className="tag">
                    Four
                    <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                  </span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Tag addons</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <div className="tag">
                    npm
                    <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                  </div>
                  <div className="tag tag-danger">
                    npm
                    <span className="tag-addon"><i className="fe fe-activity"></i></span>
                  </div>
                  <div className="tag">
                    bundle
                    <span className="tag-addon tag-success">passing</span>
                  </div>
                  <span className="tag tag-dark">
                    CSS gzip size
                    <span className="tag-addon tag-warning">20.9 kB</span>
                  </span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-3 CLOSED --> */}
  </div>
);

export default Tags;

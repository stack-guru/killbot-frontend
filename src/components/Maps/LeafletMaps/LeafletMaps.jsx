import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Basic, Circledata, Popups } from '../../../Data/DataMaps/DataLeaflet';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './LeafletMaps.module.scss';


const LeafletMaps = () => {
  return (
  <div className={styles.LeafletMaps}>
    <PageHeader titles="Maps" active="Maps" items={['Home']} />
    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={12}>
        <Card className="mg-b-20" id="map">
          <Card.Header>
            <Card.Title>Basic</Card.Title>
          </Card.Header>
          <Card.Body>

            <Basic />

          </Card.Body>
        </Card>
      </Col>
      <Col lg={12}>
        <Card className="mg-b-20" id="map2">
          <Card.Header>
            <Card.Title>With Popup</Card.Title>
          </Card.Header>
          <Card.Body>
            <Circledata />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12}>
        <Card id="map1">
          <Card.Header>
            <Card.Title>Map With Circle</Card.Title>
          </Card.Header>
          <Card.Body>

            <Popups />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- /Row --> */}
  </div>
)
};

export default LeafletMaps;

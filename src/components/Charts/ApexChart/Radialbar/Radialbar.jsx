import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicRadialChart, MultipleRadialbar, CustomAngleCircle, StrokedGauge } from '../../../../Data/DataChart/DataApexChart';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import styles from './Radialbar.module.scss';

const Radialbar = () => {
  return (
  <div className={styles.Radialbar}>
    <PageHeader titles="Radialbar Chart" active="Radialbar Chart" items={['Charts']} /> 
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Radial Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <BasicRadialChart/>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Multiple Radialbars</Card.Title>
          </Card.Header>
          <Card.Body>
           
            <MultipleRadialbar />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}

    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Custom Angle Circle Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <CustomAngleCircle/>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Stroked Gauge</Card.Title>
          </Card.Header>
          <Card.Body>
           
            <StrokedGauge />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-2 CLOSED --> */}
  </div>
)
};

export default Radialbar;

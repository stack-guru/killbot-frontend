import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicScatterChart, ExponentialRegression } from '../../../../Data/DataChart/DataEchart';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import styles from './Scatters.module.scss';

const Scatters = () => {

  return (
  <div className={styles.Scatters}>
    <PageHeader titles="Scatter Chart" active="Scatter Chart" items={['Charts']} /> 
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Line chart</Card.Title>
          </Card.Header>
          <Card.Body>
           
            <BasicScatterChart/>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Scatter Chart with Effect</Card.Title>
          </Card.Header>
          <Card.Body>
           
            <ExponentialRegression />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
)
};

export default Scatters;

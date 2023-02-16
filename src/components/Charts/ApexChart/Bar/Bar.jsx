import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicBarChart, GroupedBarChart, StackedBar, BarNagetiveValue } from '../../../../Data/DataChart/DataApexChart';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import styles from './Bar.module.scss';


const Bar = () => {

  return (

  <div className={styles.Bar}>
    <PageHeader titles="Bar Chart" active="Bar Chart" items={['Charts']} /> 

    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Bar chart</Card.Title>
          </Card.Header>
          <Card.Body>

            <BasicBarChart/>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Grouped Bar Chart</Card.Title>
          </Card.Header>
          <Card.Body>

            <GroupedBarChart />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Stacked Bar chart</Card.Title>
          </Card.Header>
          <Card.Body>

            <StackedBar/>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Bar with Negative Values</Card.Title>
          </Card.Header>
          <Card.Body>

            <BarNagetiveValue />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-2 CLOSED --> */}
  </div>
)
};

export default Bar;

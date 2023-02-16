import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicAreaChart, StackedChart, NagetiveArea } from '../../../../Data/DataChart/DataApexChart';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import styles from './Area.module.scss';


const Area = () => {
  return (

  <div className={styles.Area}>
    <PageHeader titles="Area Chart" active="Area Chart" items={['Charts']} />

    {/* <!-- ROW-1 OPEN --> */}

    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Area chart</Card.Title>
          </Card.Header>
          <Card.Body>

            <BasicAreaChart />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Stacked Area Chart</Card.Title>
          </Card.Header>
          <Card.Body>

            <StackedChart />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}


    {/* <!-- ROW-2 OPEN --> */}
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Area with Negative Values</Card.Title>
          </Card.Header>
          <Card.Body>
            <NagetiveArea />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Datetime X-Axis</Card.Title>
          </Card.Header>
          <Card.Body>

            {/* <DateTime /> */}
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-2 CLOSED --> */}

  </div>
)
};

export default Area;

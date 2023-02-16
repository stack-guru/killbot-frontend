import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicColumn, StackedColumn, ColumnNegativeValue, ColumnMarker } from '../../../../Data/DataChart/DataApexChart';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import styles from './Column.module.scss';

const Column = () => {
  return (
  <div className={styles.Column}>
    <PageHeader titles="Column Chart" active="Column Chart" items={['Charts']} />
    BasicColumnChart

    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Column Chart</Card.Title>
          </Card.Header>
          <Card.Body>

            <BasicColumn />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Stacked Column Chart</Card.Title>
          </Card.Header>
          <Card.Body>

            <StackedColumn />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}

    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Column Chart with Negative Values</Card.Title>
          </Card.Header>
          <Card.Body>

            <ColumnNegativeValue />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Column with Markers</Card.Title>
          </Card.Header>
          <Card.Body>

            <ColumnMarker />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-2 CLOSED --> */}
  </div>
)
};

export default Column;

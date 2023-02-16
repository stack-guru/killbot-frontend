import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BoxplotScatterChart, HorizontalBoxPlot } from '../../../../Data/DataChart/DataApexChart';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import styles from './Boxplot.module.scss';


const Boxplot = () => {
  return (
  <div className={styles.Boxplot}>
    <PageHeader titles="Boxplot Chart" active="Boxplot Chart" items={['Charts']} /> 
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Box & Whisker Charts </Card.Title>
          </Card.Header>
          <Card.Body>
            
            <BoxplotScatterChart/>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Horizontal BoxPlot</Card.Title>
          </Card.Header>
          <Card.Body>
           
            <HorizontalBoxPlot />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}
  </div>
)
};

export default Boxplot;

import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicTreeMap, DistributedTreemap } from '../../../../Data/DataChart/DataApexChart';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import styles from './Treemap.module.scss';

const Treemap = () => {
  
  return (

  <div className={styles.Treemap}>
    <PageHeader titles="TreeMap Chart" active="TreeMap Chart" items={['Charts']} /> 
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Treemap Charts</Card.Title>
          </Card.Header>
          <Card.Body>
            
            <BasicTreeMap/>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Distributed Treemap Charts  </Card.Title>
          </Card.Header>
          <Card.Body>
           
            <DistributedTreemap />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}
  </div>
)
};

export default Treemap;

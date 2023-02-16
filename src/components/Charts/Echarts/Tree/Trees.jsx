import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicTreeChart } from '../../../../Data/DataChart/DataEchart';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import styles from './Trees.module.scss';


const Trees = () => {

  return (

  <div className={styles.Trees}>
    <PageHeader titles="Tree Chart" active="Tree Chart" items={['Charts']} /> 
    <Row>
      <Col lg={12} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Line chart</Card.Title>
          </Card.Header>
          <Card.Body>
            
            <BasicTreeChart/>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
)
  };

export default Trees;

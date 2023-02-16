import React from 'react';
import styles from './Charts.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Card, Col, Row } from 'react-bootstrap';
import { Chartdetails } from '../../../Data/App/DataChart';


const Charts = () => {
  return (
  <div className={styles.Charts}>
    <PageHeader titles="Chart" active="Chart" items={['Apps']} />

    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>ChartJS</Card.Title>
          </Card.Header>
          <Card.Body>
            <div>
              <div className="example example-bg">
                <div className="example-column example-column-2">
                  <Card>
                    <Card.Header>
                      <Card.Title as='h3'>Chart name</Card.Title>
                    </Card.Header>
                    <Card.Body>

                      <Chartdetails />

                    </Card.Body>
                  </Card>
                </div>
              </div>
              
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

  </div>
)
};
export default Charts;

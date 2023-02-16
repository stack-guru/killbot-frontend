import React from 'react';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './Chartjs.module.scss';
import { LineChart, BarChart, MultiBarChart, AreaChart, DonutChart, PieChart, RadarChart, PolarChart } from '../../../Data/DataChart/DataChartJs';
import { Card, Col, Row } from 'react-bootstrap';


const Chartjs = () => {

  return (

  <div className={styles.Chartjs}>
    <PageHeader titles="ChartJs" active="ChartJs" items={['Charts']} /> 
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Line Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="chart-container">
              {/* <canvas id="chartLine" className="h-275"></canvas> */}
              <LineChart/>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Bar Chart1</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="chart-container">
              {/* <canvas id="chartBar1" className="h-275"></canvas> */}
              <BarChart/>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Bar Chart2</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="chart-container">
              {/* <canvas id="chartBar2" className="h-275"></canvas> */}
              <MultiBarChart/>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Area Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="chart-container">
              {/* <canvas id="chartArea" className="h-275"></canvas> */}
              <AreaChart/>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Donut Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="chart-container Chart">
              {/* <canvas id="chartPie" className="h-275"></canvas> */}
              <DonutChart/>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Pie Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="chart-container Chart">
              {/* <canvas id="chartDonut" className="h-275"></canvas> */}
              <PieChart/>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Radar Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="chart-container Chart">
              {/* <canvas id="chartRadar" className="h-275"></canvas> */}
              <RadarChart/>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Polar Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="chart-container Chart">
              {/* <canvas id="chartPolar" className="h-275"></canvas> */}
              <PolarChart/>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSE --> */}
  </div>
)
};

export default Chartjs;

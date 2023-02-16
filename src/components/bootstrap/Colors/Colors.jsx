import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import styles from './Colors.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';

const Colors = () => {

  return (
    
  <div className={styles.Colors}>
    <PageHeader titles="Colors" active="Colors" items={['Componets']} /> 
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Card>
        <Card.Header>
          <Card.Title>Contextual Colors</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="text-wrap">
            <div className="example">
              <Row>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-primary text-white">
                      <p className="mb-0">#6c5ffc</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Primary</strong>
                      <p className="mb-0 text-primary">.bg-primary</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-info text-white">
                      <p className="mb-0">#1170e4</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Info</strong>
                      <p className="mb-0 text-info">.bg-info</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-secondary text-white">
                      <p className="mb-0">#05c3fb</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Secondary</strong>
                      <p className="mb-0 text-secondary">.bg-secondary</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-warning text-white">
                      <p className="mb-0">#f7b731</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Warning</strong>
                      <p className="mb-0 text-warning">.bg-warning</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-danger text-white">
                      <p className="mb-0">#e82646</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Danger</strong>
                      <p className="mb-0 text-danger">.bg-danger</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-success text-white">
                      <p className="mb-0">#09ad95</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Success</strong>
                      <p className="mb-0 text-success">.bg-success</p>
                    </Card.Body>
                  </Card>
                </Col>

                {/* <!-- COL END --> */}
              </Row>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>
          <Card.Title>Transparent Colors</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="text-wrap">
            <div className="example">
              <Row>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-primary-transparent text-primary">
                      <p className="mb-0">rgba(108, 95, 252, 0.1)</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Primary</strong>
                      <p className="mb-0 text-primary">.bg-primary-transparent</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-secondary-transparent text-secondary">
                      <p className="mb-0">rgba(5, 195, 251, 0.1)</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Secondary</strong>
                      <p className="mb-0 text-secondary">.bg-secondary-transparent </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-success-transparent text-success">
                      <p className="mb-0">rgba(0, 230, 130, 0.1)</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Success</strong>
                      <p className="mb-0 text-success">.bg-success-transparent</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-warning-transparent text-warning">
                      <p className="mb-0">rgba(255, 162, 43, 0.1)</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Warning</strong>
                      <p className="mb-0 text-warning">.bg-warning-transparent</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-danger-transparent text-danger">
                      <p className="mb-0">rgba(255, 56, 43, 0.1)</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Danger</strong>
                      <p className="mb-0 text-danger">.bg-danger-transparent</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-info-transparent text-info">
                      <p className="mb-0">#09ad95</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Info</strong>
                      <p className="mb-0 text-info">.bg-info-transparent</p>
                    </Card.Body>
                  </Card>
                </Col>

                {/* <!-- COL END --> */}
              </Row>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>
          <Card.Title>Gradient Colors</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="text-wrap">
            <div className="example">
              <Row>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-primary-gradient text-white">
                      <p className="mb-0">.bg-primary-gradient</p>
                    </Card.Header>
                    <Card.Body className="my-auto">
                      <h5 className="mb-0 text-primary fw-semibold">Primary</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-secondary-gradient text-white">
                      <p className="mb-0">.bg-secondary-gradient</p>
                    </Card.Header>
                    <Card.Body className="my-auto">
                      <p className="mb-0 text-secondary fw-semibold">Secondary </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-success-gradient text-white">
                      <p className="mb-0">.bg-success-gradient</p>
                    </Card.Header>
                    <Card.Body className="my-auto">
                      <p className="mb-0 text-success fw-semibold">Success</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-warning-gradient text-white">
                      <p className="mb-0">.bg-warning-gradient</p>
                    </Card.Header>
                    <Card.Body className="my-auto">
                      <p className="mb-0 text-warning fw-semibold">Warning</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-danger-gradient text-white">
                      <p className="mb-0">.bg-danger-gradient</p>
                    </Card.Header>
                    <Card.Body className="my-auto">
                      <p className="mb-0 text-danger fw-semibold">Danger</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-info-gradient text-white">
                      <p className="mb-0">.bg-info-gradient</p>
                    </Card.Header>
                    <Card.Body className="my-auto">
                      <p className="mb-0 text-info fw-semibold">Info</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </Card.Body>
        <Card.Footer>
          <Table className="border">
            <thead>
              <tr>
                <th className="wd-40p">Class Reference</th>
                <th className="wd-60p">Values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code className="pd-0 bg-transparent">className="bg-primary-gradient"</code></td>
                <td>linear-gradient(to bottom right, #6c5ffc 0%, #8e77fa 100%)</td>
              </tr>
              <tr>
                <td><code className="pd-0 bg-transparent">className="bg-secondary-gradient"</code></td>
                <td>linear-gradient(to bottom right, #82cff2 0%, #28b7f9 100%)</td>
              </tr>
              <tr>
                <td><code className="pd-0 bg-transparent">className="bg-success-gradient"</code></td>
                <td>linear-gradient(to bottom right, #1ea38f 0%, #5cf9e2 100%)</td>
              </tr>
              <tr>
                <td><code className="pd-0 bg-transparent">className="bg-warning-gradient"</code></td>
                <td>linear-gradient(to bottom right, #f66b4e 0%, #fbc434 100%)</td>
              </tr>
              <tr>
                <td><code className="pd-0 bg-transparent">className="bg-danger-gradient"</code></td>
                <td>linear-gradient(to bottom right, #b51b35 0%, #fd4a68 100%)</td>
              </tr>
              <tr>
                <td><code className="pd-0 bg-transparent">className="bg-info-gradient"</code></td>
                <td>linear-gradient(to bottom right, #1e63c3 0%, #00f2fe 100%)</td>
              </tr>
            </tbody>
          </Table>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Header>
          <h3 className="card-title">Other Colors</h3>
        </Card.Header>
        <Card.Body>
          <div className="text-wrap">
            <div className="example">
              <Row>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-blue text-white">
                      <p className="mb-0">#3223f1</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Blue</strong>
                      <p className="mb-0 text-blue">.bg-blue</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-teal text-white">
                      <p className="mb-0">#1caf9f</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Teal</strong>
                      <p className="mb-0 text-teal">.bg-teal</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-azure text-white">
                      <p className="mb-0">#45aaf2</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Azure</strong>
                      <p className="mb-0 text-azure">.bg-azure</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-orange text-white">
                      <p className="mb-0">#fc7303</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Orange</strong>
                      <p className="mb-0 text-orange">.bg-orange</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-cyan text-white">
                      <p className="mb-0">#007ea7</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Cyan</strong>
                      <p className="mb-0 text-cyan">.bg-cyan</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-yellow text-white">
                      <p className="mb-0">#FBB034</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Yellow</strong>
                      <p className="mb-0 text-yellow">.bg-yellow</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-gray text-white">
                      <p className="mb-0">#5a6970</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Gray</strong>
                      <p className="mb-0 text-gray">.bg-gray</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-purple text-white">
                      <p className="mb-0">#8927ec</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Purple</strong>
                      <p className="mb-0 text-purple">.bg-purple</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-lime text-white">
                      <p className="mb-0">#7bd235</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Lime</strong>
                      <p className="mb-0 text-lime">.bg-lime</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-gray-dark text-white">
                      <p className="mb-0">#343a40</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Gray-dark</strong>
                      <p className="mb-0 text-gray-dark">.bg-gray-dark</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-green text-white">
                      <p className="mb-0">#4ecc48</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Green</strong>
                      <p className="mb-0 text-green">.bg-green</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-pink text-white">
                      <p className="mb-0">#fc5296</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Pink</strong>
                      <p className="mb-0 text-pink">.bg-pink</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-secondary text-white">
                      <p className="mb-0">#05c3fb</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Secondary</strong>
                      <p className="mb-0 text-secondary">.bg-secondary</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-red text-white">
                      <p className="mb-0">#e73827</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Red</strong>
                      <p className="mb-0 text-red">.bg-red</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={12}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className="bg-indigo text-white">
                      <p className="mb-0">#6574cd</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">Indigo</strong>
                      <p className="mb-0 text-indigo">.bg-indigo</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}
  </div>
)
};

export default Colors;

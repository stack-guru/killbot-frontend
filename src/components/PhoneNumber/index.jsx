import React, {useState} from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import PageHeader from "../../Layouts/PageHeader/PageHeader";
import { Col, Row, Card, Button } from 'react-bootstrap';

const PhoneNumber = () => {
  const [show, setShow] = useState(false)

  return (
    <div className={styles.PhoneNumber}>
      <PageHeader
        titles="PhoneNumber Identify"
        active="PhoneNumber Identify"
        items={["Home"]}
      />

      {/* <!-- Row --> */}
      <div className="row">
        <Col lg={12}>
          <Card>
            <Card.Body>
                <div className="text-muted">Email List</div>
                <textarea className="form-control" rows={8} placeholder="567657678">
                </textarea>
                <div className="text-end mt-3">
                    <Button variant="secondary" className="me-1" onClick={() => setShow(true)}>Submit</Button>
                    <Button variant="primary">Stop</Button>
                </div>
            </Card.Body>
          </Card>

          {show && <div>
            <Card>
              <Card.Header>
                  <Row style={{width: '100%'}}>
                      <Col md={6}>
                          <div className="text-muted">Real / Valid: <span style={{color: '#13bfa6'}}>0</span></div>
                      </Col>
                      <Col md={6} className="text-end">
                          <Button variant="success" className="me-1">Select All</Button>
                          <Button variant="primary" className="me-1">Hide</Button>
                      </Col>
                  </Row>
              </Card.Header>
              <Card.Body>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Header>
                  <Row style={{width: '100%'}}>
                      <Col md={6}>
                          <div className="text-muted">Disposable: <span style={{color: '#bc243c'}}>1</span></div>
                      </Col>
                      <Col md={6} className="text-end">
                          <Button variant="primary" className="me-1">Hide</Button>
                      </Col>
                  </Row>
              </Card.Header>
              <Card.Body>
                  <div>
                      <span style={{color: '#bc243c'}}>test1@example.com</span> | DNS: <span style={{color: '#13bfa6'}}>TRUE</span> | Domain: <span style={{color: "#800080"}}>example.com</span>
                  </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                  <Row style={{width: '100%'}}>
                      <Col md={6}>
                          <div className="text-muted">Wrong/Error: <span style={{color: '#bc243c'}}>0</span></div>
                      </Col>
                      <Col md={6} className="text-end">
                          <Button variant="primary" className="me-1">Hide</Button>
                      </Col>
                  </Row>
              </Card.Header>
              <Card.Body>
              </Card.Body>
            </Card>
          </div>}
        </Col>
      </div>
      {/* <!-- End Row --> */}
    </div>
  );
};

export default PhoneNumber;

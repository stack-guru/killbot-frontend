import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import PageHeader from "../../Layouts/PageHeader/PageHeader";
import {
  Col,
  Row,
  Card,
  Button,
  Tab,
  Nav,
  Tabs,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";

const ApiMonitoring = () => {
  return (
    <div className={styles.ApiMonitoring}>
      <PageHeader
        titles="Api Monitoring"
        active="Api Monitoring"
        items={["Home"]}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="text-opacity">YOUR API KEY</div>
              <input
                className="form-control"
                type="text"
                defaultValue="-pATfijYbpYyDszS7LUZO3ZcF1M-IiNRn64-_MteAP1Vb"
              ></input>
              <div className="text-end mt-2">
                <Button variant="secondary">
                  <i className="fa fa-refresh me-2"></i>Re-Generate API KEY
                </Button>
              </div>

              <div className="panel panel-tabs">
                <Tabs defaultActiveKey="tab1">
                  <Tab className="tab-pane" eventKey="tab1" title="API">
                    <div className="p-2">
                      <div className="text-opacity text-sm mb-1">
                        ACCOUNT DETAIL
                      </div>
                      <input
                        className="form-control"
                        defaultValue="https://killbot.org/api/v1/profile?apikey=-pATfijYbpYyDszS7LUZO3ZcF1M-IiNRn64-_MteAP1Vb"
                      ></input>
                    </div>
                    <div className="p-2">
                      <div className="text-opacity text-sm mb-1">
                        ACCOUNT DETAIL
                      </div>
                      <input
                        className="form-control"
                        defaultValue="https://killbot.org/api/v1/profile?apikey=-pATfijYbpYyDszS7LUZO3ZcF1M-IiNRn64-_MteAP1Vb"
                      ></input>
                    </div>
                    <div className="p-2">
                      <div className="text-opacity text-sm mb-1">
                        ACCOUNT DETAIL
                      </div>
                      <input
                        className="form-control"
                        defaultValue="https://killbot.org/api/v1/profile?apikey=-pATfijYbpYyDszS7LUZO3ZcF1M-IiNRn64-_MteAP1Vb"
                      ></input>
                    </div>
                    <div className="p-2">
                      <div className="text-opacity text-sm mb-1">
                        ACCOUNT DETAIL
                      </div>
                      <input
                        className="form-control"
                        defaultValue="https://killbot.org/api/v1/profile?apikey=-pATfijYbpYyDszS7LUZO3ZcF1M-IiNRn64-_MteAP1Vb"
                      ></input>
                    </div>
                    <div className="p-2">
                      <div className="text-opacity text-sm mb-1">
                        ACCOUNT DETAIL
                      </div>
                      <input
                        className="form-control"
                        defaultValue="https://killbot.org/api/v1/profile?apikey=-pATfijYbpYyDszS7LUZO3ZcF1M-IiNRn64-_MteAP1Vb"
                      ></input>
                    </div>
                    <div className="p-2">
                      <div className="text-opacity text-sm mb-1">
                        ACCOUNT DETAIL
                      </div>
                      <input
                        className="form-control"
                        defaultValue="https://killbot.org/api/v1/profile?apikey=-pATfijYbpYyDszS7LUZO3ZcF1M-IiNRn64-_MteAP1Vb"
                      ></input>
                    </div>
                  </Tab>
                  <Tab
                    className="tab-pane"
                    eventKey="tab2"
                    title="Installation Guide"
                  >
                    <div className="text-opacity mb-2">
                      USING EMBEDDED JAVASCRIPT
                    </div>
                    <div className="">
                      <ListGroup>
                        <ListGroupItem>
                          <i className="fa fa-code me-3"></i>You can install
                          Killbot Blocker on your website by simply pasting the
                          code below between the HTML code
                        </ListGroupItem>
                        <ListGroupItem>
                          <i className="fa fa-code me-3"></i>For more clear
                          tutorials using the following code can be read at:{" "}
                          <a
                            target="_blank"
                            href="https://docs.killbot.org/integration/integration-guide#using-embedded-javascript"
                          >
                            https://docs.killbot.org/integration/integration-guide#using-embedded-javascript
                          </a>
                        </ListGroupItem>
                        <ListGroupItem>
                          <pre>
                            &lt;script type="text/javascript"&gt; 
                            ...
                            &lt;/script&gt;
                          </pre>
                        </ListGroupItem>
                      </ListGroup>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ApiMonitoring;

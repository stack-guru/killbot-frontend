import React, {useEffect, useState} from "react";
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
  Spinner
} from "react-bootstrap";
import { getApiKey, generateApikey } from "../../Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const API_URL = process.env.REACT_APP_API_URL

const ApiMonitoring = () => {
  const dispatch = useDispatch()
  const { currentUser, apiKey } = useSelector(o => o.user)
  const [generateLoading, setGenerateLoading] = useState(false)

  useEffect(() => {
    dispatch(getApiKey({email: currentUser.email}))
  }, [])

  const onGenerateApiKey = () => {
    setGenerateLoading(true)
    dispatch(generateApikey({email: currentUser.email})).then(() => setGenerateLoading(false))
  }

  const onClickApikey = (e) => {
    e.target.focus()
    e.target.select()
  }

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
                value={apiKey}
                readOnly
                onClick={onClickApikey}
              ></input>
              <div className="text-end mt-2">
                { !generateLoading ? <Button variant="secondary" onClick={onGenerateApiKey}>
                  <i className="fa fa-refresh me-2"></i>Re-Generate API KEY
                </Button>
                  :
                <Button variant="secondary" disabled>
                  <Spinner className="me-2" animation="grow" size="sm" role="status" aria-hidden="true"></Spinner>
                  <i className="fa fa-refresh me-2"></i>Re-Generate API KEY
                </Button>}
              </div>

              <div className="panel panel-tabs">
                <Tabs defaultActiveKey="tab1">
                  <Tab className="tab-pane" eventKey="tab1" title="API">
                    <div className="p-2">
                      <div className="text-opacity text-sm mb-1">
                        Ip Address
                      </div>
                      <input
                        className="form-control"
                        readOnly
                        onClick={onClickApikey}
                        value={`${API_URL}api/check-ip?apiKey=${apiKey}&ip=8.8.8.8`}
                      ></input>
                    </div>
                    <div className="p-2">
                      <div className="text-opacity text-sm mb-1">
                        Disposable Email
                      </div>
                      <input
                        className="form-control"
                        readOnly
                        onClick={onClickApikey}
                        value={`${API_URL}api/check-disposal-email?apiKey=${apiKey}&email=test@example.com`}
                      ></input>
                    </div>
                    <div className="p-2">
                      <div className="text-opacity text-sm mb-1">
                        PhoneNumber
                      </div>
                      <input
                        className="form-control"
                        readOnly
                        onClick={onClickApikey}
                        value={`${API_URL}api/check-phonenumber?apiKey=${apiKey}&number=14158586273`}
                      ></input>
                    </div>
                    <div className="p-2">
                      <div className="text-opacity text-sm mb-1">
                        BIN
                      </div>
                      <input
                        className="form-control"
                        readOnly
                        onClick={onClickApikey}
                        value={`${API_URL}api/check-bin?apiKey=${apiKey}&issuerIdNumber=235657`}
                      ></input>
                    </div>
                    <div className="p-2">
                      <div className="text-opacity text-sm mb-1">
                        Mobile
                      </div>
                      <input
                        className="form-control"
                        readOnly
                        onClick={onClickApikey}
                        value={`${API_URL}api/check-mobile?apiKey=${apiKey}`}
                      ></input>
                    </div>
                    <div className="p-2">
                      <div className="text-opacity text-sm mb-1">
                        Desktop
                      </div>
                      <input
                        className="form-control"
                        readOnly
                        onClick={onClickApikey}
                        value={`${API_URL}api/check-desktop?apiKey=${apiKey}`}
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

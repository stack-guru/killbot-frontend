import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import PageHeader from "../../Layouts/PageHeader/PageHeader";
import { Col, Row, Card, Button } from "react-bootstrap";
import { getApiKey } from "../../Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const API_URL = process.env.REACT_APP_API_URL;

const DisposalEmail = () => {
  const dispatch = useDispatch();
  const { apiKey, currentUser } = useSelector((o) => o.user);

  const [show, setShow] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false)

  const [emailString, setEmailString] = useState("");

  const [validEmails, setValidEmails] = useState([]);
  const [invalidEmails, setInvalidEmails] = useState([]);
  const [errEmails, setErrEmails] = useState([]);

  useEffect(() => {
    dispatch(getApiKey({ email: currentUser.email }));
  }, []);

  useEffect(() => {
    if (!validEmails.length && !invalidEmails.length && !errEmails.length) {
      emailString && checkEmails(emailString.split("\n"));
    }
  }, [validEmails, invalidEmails, errEmails]);

  const clearStates = () => {
    setValidEmails([]);
    setInvalidEmails([]);
    setErrEmails([]);
    setShow(false);
  };

  const onSubmit = () => {
    if (!emailString) return;
    setDisableSubmit(true)
    clearStates();
  };

  const checkEmails = async (emails) => {
    let tmpErr = []
    let tmpValid = []
    let tmpInvalid = []

    for (let i = 0; i < emails.length; i++) {
      if (!emails[i]) {
        continue;
      }
      let url = `${API_URL}api/check-disposal-email?apiKey=${apiKey}&email=${emails[i]}`;

      axios
        .get(url)
        .then((response) => {
          if (response.data.email) {
            if (response.data.email.isDisposable) {
              tmpInvalid.push(emails[i])
            } else {
              tmpValid.push(emails[i])
            }
          } else {
            tmpErr.push(emails[i])
          }

          if (i === emails.length - 1) {
            setValidEmails(tmpValid)
            setInvalidEmails(tmpInvalid)
            setErrEmails(tmpErr)
            setShow(true)
            setDisableSubmit(false)
          }
        })
        .catch((err) => {
          tmpErr.push(emails[i])
          
          if (i === emails.length - 1) {
            setValidEmails(tmpValid)
            setInvalidEmails(tmpInvalid)
            setErrEmails(tmpErr)
            setShow(true)
            setDisableSubmit(false)
          }
        });
    }
  };

  return (
    <div className={styles.DisposalEmail}>
      <PageHeader
        titles="Disposal Email Identify"
        active="Disposal Email Identify"
        items={["Home"]}
      />

      {/* <!-- Row --> */}
      <div className="row">
        <Col lg={12}>
          <Card>
            <Card.Body>
              <div className="text-muted">Email List</div>
              <textarea
                className="form-control"
                rows={8}
                placeholder="test1@example.com"
                onChange={(e) => setEmailString(e.target.value)}
              ></textarea>
              <div className="text-end mt-3">
                <Button variant="secondary" className="me-1" onClick={onSubmit} disabled={disableSubmit}>
                  Submit
                </Button>
                {/* <Button variant="primary" onClick={clearStates}>Stop</Button> */}
              </div>
            </Card.Body>
          </Card>

          {show && (
            <div>
              <Card>
                <Card.Header>
                  <Row style={{ width: "100%" }}>
                    <Col md={6}>
                      <div className="text-muted">
                        Real / Valid:{" "}
                        <span style={{ color: "#13bfa6" }}>
                          {validEmails.length}
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  {validEmails.map((e, i) => (
                    <div key={e + i + 459}>
                      <span style={{ color: "#13bfa6" }}>{e}</span>
                    </div>
                  ))}
                </Card.Body>
              </Card>

              <Card>
                <Card.Header>
                  <Row style={{ width: "100%" }}>
                    <Col md={6}>
                      <div className="text-muted">
                        Disposable:{" "}
                        <span style={{ color: "#ffc107" }}>
                          {invalidEmails.length}
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  {/* <div>
                      <span style={{color: '#bc243c'}}>test1@example.com</span> | DNS: <span style={{color: '#13bfa6'}}>TRUE</span> | Domain: <span style={{color: "#800080"}}>example.com</span>
                  </div> */}
                  {invalidEmails.map((e, i) => (
                    <div key={e + i + 987}>
                      <span style={{ color: "#ffc107" }}>{e}</span>
                    </div>
                  ))}
                </Card.Body>
              </Card>

              <Card>
                <Card.Header>
                  <Row style={{ width: "100%" }}>
                    <Col md={6}>
                      <div className="text-muted">
                        Wrong/Error:{" "}
                        <span style={{ color: "#bc243c" }}>
                          {errEmails.length}
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  {errEmails.map((e, i) => (
                    <div key={e + i + 333}>
                      <span style={{ color: "#bc243c" }}>{e}</span>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </div>
          )}
        </Col>
      </div>
      {/* <!-- End Row --> */}
    </div>
  );
};

export default DisposalEmail;

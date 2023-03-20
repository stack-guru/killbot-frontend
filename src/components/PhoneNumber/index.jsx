import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import PageHeader from "../../Layouts/PageHeader/PageHeader";
import { Col, Row, Card, Button } from "react-bootstrap";
import { getApiKey } from "../../Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const API_URL = process.env.REACT_APP_API_URL;

const PhoneNumber = () => {
  const dispatch = useDispatch();
  const { apiKey, currentUser } = useSelector((o) => o.user);

  const [show, setShow] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);

  const [numberString, setNumberString] = useState("");

  const [validNumbers, setValidNumbers] = useState([]);
  const [invalidNumbers, setInvalidNumbers] = useState([]);
  const [errNumbers, setErrNumbers] = useState([]);

  useEffect(() => {
    dispatch(getApiKey({ email: currentUser.email }));
  }, []);

  useEffect(() => {
    if (!validNumbers.length && !invalidNumbers.length && !errNumbers.length) {
      numberString && checkNumbers(numberString.split("\n"));
    }
  }, [validNumbers, invalidNumbers, errNumbers]);

  const clearStates = () => {
    setValidNumbers([]);
    setInvalidNumbers([]);
    setErrNumbers([]);
    setShow(false);
  };

  const onSubmit = () => {
    if (!numberString) return;
    setDisableSubmit(true);
    clearStates();
  };

  const checkNumbers = async (numbers) => {
    let tmpErr = [];
    let tmpValid = [];
    let tmpInvalid = [];

    for (let i = 0; i < numbers.length; i++) {
      if (!numbers[i]) {
        continue;
      }
      let url = `${API_URL}api/check-phonenumber?apiKey=${apiKey}&number=${numbers[i]}`;

      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          if (response.data.valid) {
            tmpValid.push(numbers[i])
          // } else if (response.data.valid === false) {
          } else {
            tmpInvalid.push(numbers[i])
          }

          if (i === numbers.length - 1) {
            setValidNumbers(tmpValid)
            setInvalidNumbers(tmpInvalid)
            setErrNumbers(tmpErr)
            setShow(true)
            setDisableSubmit(false)
          }
        })
        .catch((err) => {
          console.log(err)
        });
    }
  };

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
              <div className="text-muted">Phonenumber List</div>
              <textarea
                className="form-control"
                rows={8}
                placeholder="567657678"
                onChange={(e) => setNumberString(e.target.value)}
              ></textarea>
              <div className="text-end mt-3">
                <Button variant="secondary" className="me-1" onClick={onSubmit}>
                  Submit
                </Button>
                {/* <Button variant="primary">Stop</Button> */}
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
                          {validNumbers.length}
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  {validNumbers.map((e, i) => (
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
                        Invalid:{" "}
                        <span style={{ color: "#ffc107" }}>
                          {invalidNumbers.length}
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  {invalidNumbers.map((e, i) => (
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
                          {errNumbers.length}
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  {errNumbers.map((e, i) => (
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

export default PhoneNumber;

import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { Link, useFetcher } from "react-router-dom";
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
  Table,
} from "react-bootstrap";
import {
  getShortlinks,
  addShortlink,
  deleteShortlink,
  clearErrorMsg,
} from "../../Slices/shortlinkSlice";
import { useDispatch, useSelector } from "react-redux";

const ShortLinkMonitoring = () => {
  const dispatch = useDispatch();
  const { linkList, duplicateErr, urlErr } = useSelector((o) => o.shortlink);

  const [url, setUrl] = useState("");
  const [keyname, setKeyname] = useState("");

  useEffect(() => {
    dispatch(getShortlinks());
  }, []);

  const generateShort = () => {
    dispatch(clearErrorMsg());
    dispatch(addShortlink({ url, keyname }));
  };

  const deleteUrl = (id) => {
    dispatch(deleteShortlink({ id }));
  };

  return (
    <div className={styles.ShortLinkMonitoring}>
      <PageHeader titles="Short Link" active="Short Link" items={["Home"]} />

      <Card>
        <Card.Body>
          <Row>
            <Col md="6" sm="12">
              <div className="text-muted">
                URL to Short / Visitor Redirection
              </div>
              <input
                className="form-control"
                placeholder="https://example.com/path"
                onChange={(e) => setUrl(e.target.value)}
              ></input>
              <span style={{ color: "#BC243C" }}>{urlErr}</span>
            </Col>

            <Col md="3" sm="12">
              <div className="text-muted">Custom Keyname (Optional)</div>
              <input
                className="form-control"
                placeholder="xRfTyH"
                onChange={(e) => setKeyname(e.target.value)}
              ></input>
              <span style={{ color: "#BC243C" }}>{duplicateErr}</span>
            </Col>

            {/* <Col md="3" sm="12">
                    <div className="text-muted">
                        Custom Keyname (Optional)
                    </div>                    
                    <input className="form-control" placeholder="KILLBOT 404 NOT FOUND"></input>
                </Col> */}

            <Col>
              <Button
                variant="secondary"
                style={{ marginTop: "20px" }}
                onClick={generateShort}
              >
                <i className="fa fa-check me-3"></i> Generate
              </Button>
            </Col>
          </Row>

          {/* <Row className="mt-5">
                <Col>
                    <div className="text-muted">Device Allowed</div>
                    <input className="form-control" defaultValue="ALL DEVICE"></input>
                </Col>
                <Col>
                    <div className="text-muted">Blocker Type</div>
                    <input className="form-control" defaultValue="NO BLOCKED"></input>
                </Col>
                <Col>
                    <div className="text-muted">Blocker Level</div>
                    <input className="form-control" defaultValue="LOW"></input>
                </Col>
                <Col>
                    <div className="text-muted">Country</div>
                    <input className="form-control" defaultValue="All COUNTRY"></input>
                </Col>
                <Col>
                    <div className="text-muted">Firewall</div>
                    <input className="form-control" defaultValue="OFF"></input>
                </Col>
                <Col>
                    <Button variant="secondary" style={{marginTop: '20px'}}><i className="fa fa-check me-3"></i> Generate</Button>
                </Col>
            </Row> */}

          {/* <div className="mt-5">
                <Button variant="primary" className="me-3"><i className="fa fa-link me-3"></i>TUTORIAL</Button>
                <Button variant="warning"><i className="fa fa-download me-3"></i>DOWNLOAD SHORTLINK</Button>
            </div>             */}

          {/* <div className="border p-5 mt-5">
                <Row className={styles.smallFont}>
                    <Col md="7">
                        <div className="text-muted">SHORTLINK STATISTICS</div>
                    </Col>
                    
                    <Col md="2">
                        <div>REAL VISITOR</div>
                    </Col>
                    
                    <Col md="1">
                        <div>BOT</div>
                    </Col>
                    
                    <Col md="2">
                        <div>TOTAL VISITOR</div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md="7">
                        <div>Last Update : Tue, 21 Feb 2023 - 09:13:30 PM</div>
                    </Col>
                    
                    <Col md="2">
                        <div className={`${styles.visitorFont} text-muted`}>0</div>
                    </Col>
                    
                    <Col md="1">
                        <div className={`${styles.visitorFont} text-muted`}>0</div>
                    </Col>
                    
                    <Col md="2">
                        <div className={`${styles.visitorFont} text-muted`}>0</div>
                    </Col>
                </Row>
            </div> */}

          <div className="mt-5">
            <Table className="border text-nowrap text-md-nowrap table-hover mb-0">
              <thead>
                <tr>
                  <th className="py-5">URL</th>
                  <th className="py-5">SHORT URL</th>
                  <th className="py-5">DATE</th>
                  <th className="py-5">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {linkList.map((e) => (
                  <tr key={e._id}>
                    <td>
                      <p style={{ wordBreak: "break-all" }}>{e.url}</p>
                    </td>
                    <td>{process.env.REACT_APP_API_URL + e.shortLink}</td>
                    <td>{new Date(e.createdAt).toDateString()}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => deleteUrl(e._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShortLinkMonitoring;

import React from "react";
import styles from "./Dashboard.module.scss";
import { Link } from "react-router-dom";
import PageHeader from "../../Layouts/PageHeader/PageHeader";
import {
  Card,
  Col,
  Button,
  Row,
  Table
} from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <PageHeader titles="Dashboard" active="Dashboard" items={["Home"]} />

      {/* <!-- ROW-1 --> */}
      <Row>
        <Col lg={12} md={12} sm={12} xl={12}>
          <Row>
            <Col lg={6} md={6} sm={12} xxl={3}>
              <Card className="overflow-hidden">
                <Card.Body>
                  <div className="d-flex">
                    <div className="mt-2">
                      <h6 className="">Real Visitors</h6>
                      <h2 className="mb-0 number-font">44,278</h2>
                    </div>
                    <div className={`ms-auto ${styles.visitorIcon}`}>
                      <i className="fa fa-user"></i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6} sm={12} xxl={3}>
              <div className="card overflow-hidden">
                <Card.Body>
                  <div className="d-flex">
                    <div className="mt-2">
                      <h6 className="">Bots</h6>
                      <h2 className="mb-0 number-font">5</h2>
                    </div>
                    <div className={`ms-auto ${styles.visitorIcon}`}>
                      <i className="fa fa-bug"></i>
                    </div>
                  </div>
                </Card.Body>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xxl={3}>
              <div className="card overflow-hidden">
                <Card.Body>
                  <div className="d-flex">
                    <div className="mt-2">
                      <h6 className="">Total Visitors</h6>
                      <h2 className="mb-0 number-font">44,278</h2>
                    </div>
                    <div className={`ms-auto ${styles.visitorIcon}`}>
                      <i className="fa fa-line-chart"></i>
                    </div>
                  </div>
                </Card.Body>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xxl={3}>
              <Card className="overflow-hidden">
                <Card.Body>
                  <div className="d-flex">
                    <div className="mt-2">
                      <h6 className="">Total ShortLinks</h6>
                      <h2 className="mb-0 number-font">4</h2>
                    </div>
                    <div className={`ms-auto ${styles.visitorIcon}`}>
                      <i className="fa fa-chain"></i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <!-- ROW-1 END --> */}

      <Row>
        <Col lg={8} md={12} sm={12}>
          <Card className="overflow-hidden">
            <Card.Body>
              <div className="text-opacity mb-2">LATEST NEWS</div>
              <div className="mb-2">Some news about maintenance or updated.</div>
              <div className="border">
                <div className="p-2 ">
                  <div className="text-opacity mb-2"><i className="fa fa-bell"></i>16/07/2022 | WHY YOUR SHORTLINK GOT BANNED?</div>
                  <p>There are many reasons why your shortlink may be blocked:</p>
                  <ul className="list-style-1 mb-3 ps-5">
                    <li>The link may be listed on a website blocklisting service.</li>
                    <li>The link may have been reported to Killbot by a member of the public.</li>
                    <li>The link may contain malware (software designed to harm your computer), attempt to collect your personal information for nefarious purposes, or otherwise contain harmful and/or illegal content.</li>
                    <li>The link may be attempting to hide the final destination.</li>
                    <li>The link may lead to a forgery of another website or may infringe the rights of others.</li>
                    <li>If you believe this link has been blocked in error, please contact us via live chat.</li>
                  </ul>
                  <hr />
                </div>
                <div className="p-2">
                  <div className="text-opacity mb-2"><i className="fa fa-bell"></i>16/07/2022 | WHY YOUR SHORTLINK GOT BANNED?</div>
                  <p>There are many reasons why your shortlink may be blocked:</p>
                  <ul className="list-style-1 mb-3 ps-5">
                    <li>The link may be listed on a website blocklisting service.</li>
                    <li>The link may have been reported to Killbot by a member of the public.</li>
                    <li>The link may contain malware (software designed to harm your computer), attempt to collect your personal information for nefarious purposes, or otherwise contain harmful and/or illegal content.</li>
                    <li>The link may be attempting to hide the final destination.</li>
                    <li>The link may lead to a forgery of another website or may infringe the rights of others.</li>
                    <li>If you believe this link has been blocked in error, please contact us via live chat.</li>
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <Card className="overflow-hidden">
            <Card.Header>
              <span className="text-opacity">USER GUIDE</span>
            </Card.Header>
            <Card.Body>
              <div className="">We have provided a guide to using Killbot below, please click the Read User Guide button to start learning it. If you still have trouble, please contact us.</div>
              <Link to="#" className="btn mt-4 btn-outline-primary btn-block"><i className="fa fa-bookmark me-2"></i>Read User Guide</Link>
            </Card.Body>
          </Card>
          <Card className="overflow-hidden">
            <Card.Header>
              <span className="text-opacity">FREQUENTLY ASKED QUESTIONS (FAQS)</span>
            </Card.Header>
            <Card.Body>
              <div className="">Find some of Killbot’s most frequently asked questions about our plans, getting started, and billing.</div>
              <Link to="#" className="btn mt-4 btn-outline-primary btn-block"><i className="fa fa-bookmark me-2"></i>Read FAQs</Link>
            </Card.Body>
          </Card>
          <Card className="overflow-hidden">
            <Card.Header>
              <span className="text-opacity">Ranking</span>
            </Card.Header>
            <Card.Body>
              <Table className="text-nowrap text-md-nowrap mb-0">
                <thead>
                  <tr>
                    <th>Ranking</th>
                    <th>Username</th>
                    <th>Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Joan Powell</td>
                    <td>$450,870</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Gavin Gibson</td>
                    <td>$230,540</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Julian Kerr</td>
                    <td>$55,300</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Cedric Kelly</td>
                    <td>$234,100</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Samantha May</td>
                    <td>$43,198</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

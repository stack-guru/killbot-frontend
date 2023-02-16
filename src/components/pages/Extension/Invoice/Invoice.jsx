import React from 'react';
import styles from './Invoice.module.scss';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import { Col, Row, Card, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Invoice = () => {

  const print = () => {
    window.print();
  }

  return (

  <div className={styles.Invoice}>
    <PageHeader titles="Invoice" active="Invoice" items={['Pages']} />
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col md={12}>
        <Card>
          <Card.Body>
            <Row>
              <Col lg={6}>
                <Link className="header-brand" to={`${process.env.PUBLIC_URL}/dashboard`}>
                  <img src={require("../../../../assets/images/brand/logo-dark.png")} className="header-brand-img logo-3 m-0" alt="Sash logo" />
                  <img src={require("../../../../assets/images/brand/logo-white.png")} className="header-brand-img logo m-0" alt="Sash logo" />
                </Link>
                <div>
                  <address className="pt-3">
                    Street Address, State, City, Region, Postal Code<br />
                    yourdomain@example.com
                  </address>
                </div>
              </Col>
              <Col lg={6} className="text-end border-bottom border-lg-0">
                <h3>#INV-526</h3>
                <h5>Date Issued: 12-07-2021</h5>
                <h5>Due Date: 12-07-2021</h5>
              </Col>
            </Row>
            <Row className="pt-5">
              <Col lg={6}>
                <p className="h3">Invoice To:</p>
                <p className="fs-18 fw-semibold mb-0">John Paige</p>
                <address>
                  Street Address, State, City<br />
                  State, City<br />
                  Region, Postal Code<br />
                  yourdomain@example.com
                </address>
              </Col>
              <Col lg={6} className="text-end">
                <p className="h4 fw-semibold">Payment Details:</p>
                <p className="mb-1">Total Due: $5,89,789</p>
                <p className="mb-1">Bank Name: Union Bank 0456</p>
                <p className="mb-1">IBAN: 543218769</p>
                <p>Country: USA</p>
              </Col>
            </Row>
            <div className="table-responsive push">
              <Table className="table-bordered table-hover mb-0 text-nowrap">
                <tbody>
                  <tr className=" ">
                    <th className="text-center"></th>
                    <th>Item</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-end">Unit Price</th>
                    <th className="text-end">Sub Total</th>
                  </tr>
                  <tr>
                    <td className="text-center">1</td>
                    <td>
                      <p className="font-w600 mb-1">Logo Design</p>
                      <div className="text-muted">
                        <div className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                      </div>
                    </td>
                    <td className="text-center">2</td>
                    <td className="text-end">$674</td>
                    <td className="text-end">$1,308</td>
                  </tr>
                  <tr>
                    <td className="text-center">2</td>
                    <td>
                      <p className="font-w600 mb-1">Website wireframe for 2 pages</p>
                      <div className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</div>
                    </td>
                    <td className="text-center">4</td>
                    <td className="text-end">$1,500</td>
                    <td className="text-end">$6,000</td>
                  </tr>
                  <tr>
                    <td className="text-center">3</td>
                    <td>
                      <p className="font-w600 mb-1">PSD to HTML coding</p>
                      <div className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>
                    </td>
                    <td className="text-center">3</td>
                    <td className="text-end">$530</td>
                    <td className="text-end">$1,690</td>
                  </tr>
                  <tr>
                    <td className="text-center">4</td>
                    <td>
                      <p className="font-w600 mb-1">E-commerce Development</p>
                      <div className="text-muted">When our power of choice is untrammelled and when nothing prevents our being able</div>
                    </td>
                    <td className="text-center">2</td>
                    <td className="text-end">$800</td>
                    <td className="text-end">$1,600</td>
                  </tr>
                  <tr>
                    <td className="text-center">5</td>
                    <td>
                      <p className="font-w600 mb-1">Design and layout of 2 pages in Photoshop</p>
                      <div className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                    </td>
                    <td className="text-center">2</td>
                    <td className="text-end">$720</td>
                    <td className="text-end">$1,440</td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="fw-bold text-uppercase text-end">Total</td>
                    <td className="fw-bold text-end h4">$12,038</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
          <Card.Footer className="text-end">
            <Button variant='primary' onClick={print} className="mb-1 me-2"><i className="si si-wallet"></i> Pay Invoice</Button>


            <Button variant='secondary' onClick={print} type="button" className="mb-1 me-2"><i className="si si-paper-plane"></i> Send Invoice</Button>


            <Button variant='danger' onClick={print} type="button" className="mb-1 me-2"><i className="si si-printer"></i> Print Invoice</Button>


          </Card.Footer>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}
  </div>

)
  };

export default Invoice;

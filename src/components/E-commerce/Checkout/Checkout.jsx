import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Form, FormControl, InputGroup, ListGroup, Row, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import styles from './Checkout.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import Select from 'react-select';
import { connect } from "react-redux";

const Checkout = ({ local_varaiable }) => {

  const [FiltercartData, setCartData] = useState([]);
  const [Price, setPrice] = useState("$4360");


  let checkOutData = [
    {
      id: 4,
      preview: require("../../../assets/images/products/3.jpg"),
      heading: 'Flower Pot for Home Decor',
      price1: '$438'
    },
    {
      id: 7,
      preview: require("../../../assets/images/products/5.jpg"),
      heading: 'Black Digital Camera',
      price1: '$765'
    },
    {
      id: 8,
      preview: require("../../../assets/images/products/4.jpg"),
      heading: 'Men shirt for party wear',
      price1: '$543'
    },
  ]

  useEffect(() => {
    console.log("helloo from header");
    
    if (local_varaiable == undefined) {

      setCartData(checkOutData)
      FiltercartData.filter((ele) => {
        setPrice(Number(ele.price1) + Price);
      })
    }
    else if (local_varaiable.length == 0) {

      setCartData(checkOutData)
      FiltercartData.filter((ele) => {
        setPrice(Number(ele.price1) + Price);
      })
    }
    else {
      console.log(local_varaiable);
      setCartData(local_varaiable)
      local_varaiable.filter((ele) => {
        setPrice(ele.price1);
      })
    }
  }, [local_varaiable]);


  const HandleClick = () => {
    Swal.fire({ title: 'Congratulations!', text: "Your order is Placed", icon: 'success', allowOutsideClick: false })
  }

  const Country = [
    { value: "Germany", label: "Germany" },
    { value: "Canada", label: "Canada" },
    { value: "USA", label: "USA" },
    { value: "AUS", label: "AUS" },
  ];


  return (

    <div className={styles.Checkout}>
      <PageHeader titles="Checkout" active="Checkout" items={['E-Commerce']} />
      {/* <!-- ROW-1 OPEN --> */}
      <Row>
        <Col xl={8} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Billing Information</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col sm={6} md={6}>
                  <Form.Group>
                    <Form.Label>First Name <span className="text-red">*</span></Form.Label>
                    <Form.Control type="text" className="form-control" placeholder="First name" />
                  </Form.Group>
                </Col>
                <Col sm={6} md={6}>
                  <Form.Group>
                    <Form.Label >Last Name <span className="text-red">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Last name" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>Company Name <span className="text-red">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Company name" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>Email address <span className="text-red">*</span></Form.Label>
                    <Form.Control type="email" className="form-control" placeholder="Email" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="form-label">Country <span className="text-red">*</span></Form.Label>
                    <Select classNamePrefix="Select" options={Country} placeholder='Germany' />

                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>Address <span className="text-red">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Home Address" />
                  </Form.Group>
                </Col>
                <Col sm={6} md={6}>
                  <Form.Group>
                    <Form.Label>City <span className="text-red">*</span></Form.Label>
                    <Form.Control type="text" placeholder="City" />
                  </Form.Group>
                </Col>
                <Col sm={6} md={6}>
                  <Form.Group>
                    <Form.Label>Postal Code <span className="text-red">*</span></Form.Label>
                    <Form.Control type="number" placeholder="ZIP Code" />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <Button variant='primary'>Save and Deliver Here</Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Payment Information</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="card-pay">
                <div className="tab-content">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="CreditCard">
                    <Nav variant="pills" className="payment-info">
                      <Nav.Item>
                        <Nav.Link eventKey="CreditCard"><i className="fa fa-credit-card me-2"></i>CreditCard</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Paypal"><i className="fa fa-paypal me-2"></i>Paypal</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="BT"><i className="fa fa-university me-2"></i>Bank Transfer</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="CreditCard">
                        <div className="tab-pane active show" id="tab20">
                          <div className="bg-danger-transparent-2 text-danger br-3 mb-4 mt-5" role="alert">Please Enter Valid Details</div>
                          <Form.Group>
                            <Form.Label>CardHolder Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Card number</Form.Label>
                            <InputGroup>
                              <FormControl type="text" placeholder="Search for..." />
                              <InputGroup.Text className="input-text-color">
                                <i className="fa fa-cc-visa text-muted"></i> &nbsp; <i className="fa fa-cc-amex text-muted"></i> &nbsp;
                                <i className="fa fa-cc-mastercard text-muted"></i>
                              </InputGroup.Text>
                            </InputGroup>
                          </Form.Group>
                          <Row>
                            <Col sm={8}>
                              <Form.Group>
                                <Form.Label>Expiration</Form.Label>
                                <InputGroup>
                                  <FormControl type="number" placeholder="MM" name="Month" />
                                  <FormControl type="number" placeholder="YY" name="Year" />
                                </InputGroup>
                              </Form.Group>
                            </Col>
                            <Col sm={4}>
                              <Form.Group>
                                <Form.Label>CVV <i className="fa fa-question-circle"></i></Form.Label>
                                <Form.Control type="number" required />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Link to="#" className="btn btn-lg btn-primary mt-4">Confirm</Link>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Paypal">
                        <div className="tab-pane mt-5 my-5" id="tab21">
                          <p>Paypal is easiest way to pay online</p>
                          <p><Link to="#" className="btn btn-primary"><i className="fa fa-paypal"></i> Log in my Paypal</Link></p>
                          <p className="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="BT">
                        <div className="tab-pane mt-5" id="tab22">
                          <p>Bank account details</p>
                          <dl className="card-text">
                            <dt>BANK: </dt>
                            <dd> THE UNION BANK 0456</dd>
                          </dl>
                          <dl className="card-text">
                            <dt>Account Number: </dt>
                            <dd> 67542897653214</dd>
                          </dl>
                          <dl className="card-text">
                            <dt>IBAN: </dt>
                            <dd>543218769</dd>
                          </dl>
                          <p className="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>

                  </Tab.Container>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card className="cart">
            <Card.Header>
              <Card.Title>Address</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="">
                <h4 className="fw-semibold">Percy Kewshun</h4>
                <p>4231 Bingamon Branch Road </p>
                <p>Chicago, IL-60654</p>
                <p>UTC-5: Eastern Standard Time (EST)</p>
                <p className="mb-0">+125 254 3562 </p>
              </div>
            </Card.Body>
            <Card.Footer>
              <Link to="#" className="btn btn-primary">Deliver to this Address</Link>
            </Card.Footer>
          </Card>
          <Card className="cart">
            <Card.Header>
              <Card.Title>Your Order</Card.Title>
            </Card.Header>
            <Card.Body>
              {FiltercartData.map((idx) => (
                <div className="" key={Math.random()}>
                  <div className="d-flex">
                    <img className="avatar-xxl br-7 mb-1" src={idx.preview} alt="img" />
                    <div className="ms-3">
                      <h4 className="mb-1 fw-semibold fs-14"><Link to={`${process.env.PUBLIC_URL}/ecommerce/productdetails/${idx.id}`}>{idx.heading}</Link></h4>
                      <div className="text-warning fs-14">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                        <i className="fa fa-star-o"></i>
                      </div>
                      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                    <div className="ms-auto">
                      <span className="fs-16 fw-semibold">{idx.price}</span>
                    </div>
                  </div>
                </div>
              ))}
              <ListGroup className="border br-7 mt-5">
                <ListGroup.Item className="border-0">
                  Sub Total
                  <span className="h6 fw-bold mb-0 float-end">{Price}</span>
                </ListGroup.Item>
                <ListGroup.Item className="border-0">
                  Discount
                  <span className="h6 fw-bold mb-0 float-end">0%</span>
                </ListGroup.Item>
                <ListGroup.Item className="border-0">
                  Shipping
                  <span className="h6 fw-bold mb-0 float-end">Free</span>
                </ListGroup.Item>
                <ListGroup.Item className="border-0">
                  Total
                  <span className="h4 fw-bold mb-0 float-end">{Price}</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer className="text-end">
              <Button variant='primary' onClick={() => { HandleClick() }}>Place Order</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW-1 CLOSED --> */}
    </div>
  )
};
const mapStateToProps = (state) => ({
  local_varaiable: state,
});
export default connect(mapStateToProps)(Checkout);




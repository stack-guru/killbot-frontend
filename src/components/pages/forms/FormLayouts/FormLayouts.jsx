import React from 'react';
import styles from './FormLayouts.module.scss';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import { Button, Card, Col, Form, Row, InputGroup, FormControl, ButtonGroup, DropdownButton, Dropdown, Nav, OverlayTrigger, Tab, Tooltip } from 'react-bootstrap';
import Select from 'react-select';

const FormLayouts = () => {

  const Country = [
    { value: "Germany", label: "Germany" },
    { value: "Canada", label: "Canada" },
    { value: "Usa", label: "Usa" },
    { value: "Aus", label: "Aus" },
  ];

  const FormSize = [
    { value: "One", label: "One" },
    { value: "Two", label: "Two" },
    { value: "Three", label: "Three" },
  ];

  const DOYdata = [
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
    { value: "2018", label: "2018" },
    { value: "2017", label: "2017" },
    { value: "2016", label: "2016" },
    { value: "2015", label: "2015" },
    { value: "2014", label: "2014" },
    { value: "2013", label: "2013" },
    { value: "2012", label: "2012" },
    { value: "2011", label: "2011" },
    { value: "2010", label: "2010" },
    { value: "2009", label: "2009" },
    { value: "2008", label: "2008" },
    { value: "2007", label: "2007" },
    { value: "2006", label: "2006" },
    { value: "2005", label: "2005" },
    { value: "2004", label: "2004" },
    { value: "2003", label: "2003" },
    { value: "2002", label: "2002" },
    { value: "2001", label: "2001" },
    { value: "2000", label: "2000" },
    { value: "1999", label: "1999" },
    { value: "1998", label: "1998" },
    { value: "1997", label: "1997" },
    { value: "1996", label: "1996" },
    { value: "1995", label: "1995" },
    { value: "1994", label: "1994" },
    { value: "1993", label: "1993" },
    { value: "1992", label: "1992" },
    { value: "1991", label: "1991" },
    { value: "1990", label: "1990" },
    { value: "1989", label: "1989" },
    { value: "1988", label: "1988" },
  ];

  const DOMdata = [
    { value: "January", label: "January" },
    { value: "Febuary", label: "Febuary" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },

  ];

  return (

    <div className={styles.FormLayouts}>
      <PageHeader titles="Form-Layouts" active="Form-Layouts" items={['Forms']} />

      {/* <!-- Row --> */}
      <Row>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h4'>Vertical Form</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <div className="">
                  <Form.Group>
                    <Form.Label htmlFor="exampleInputEmail1" >Email address</Form.Label>
                    <Form.Control className='my-3' type="email" id="exampleInputEmail1" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="exampleInputPassword1" >Password</Form.Label>
                    <Form.Control className='my-3' type="password" id="exampleInputPassword1" placeholder="Password" />
                  </Form.Group>
                  <Form.Check type="checkbox" aria-label="switch" label='Check me Out' />
                </div>
                <Button variant='primary' className="mt-4 mb-0">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title as='h4'>Horizontal Form</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form className="form-horizontal">
                <Row className="mb-4">
                  <Form.Label htmlFor="inputName" className="col-md-3">User Name</Form.Label>
                  <Col md={9}>
                    <Form.Control type="text" id="inputName" placeholder="Name" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Form.Label htmlFor="inputEmail3" className="col-md-3">Email</Form.Label>
                  <Col md={9}>
                    <Form.Control type="email" id="inputEmail3" placeholder="Email" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Form.Label htmlFor="inputPassword3" className="col-md-3">Password</Form.Label>
                  <Col md={9}>
                    <Form.Control type="password" id="inputPassword3" placeholder="Password" />
                  </Col>
                </Row>
                <Row className="mb-0 justify-content-end">
                  <Col md={9}>

                    <Form.Check type="checkbox" aria-label="switch" label='Check me Out' />
                  </Col>
                </Row>
                <Row className="mb-0 mt-4 justify-content-end">
                  <Col md={9}>
                    <Button variant='primary' className='me-2'>Sign in</Button>
                    <Button variant='secondary' className='me-2'>Cancel</Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!--Row --> */}
      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Shipping Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="form-row">
                <Form.Group className="col-md-6 mb-3">
                  <Form.Group >
                    <Form.Control type="text" id="name1" placeholder="First Name" />
                  </Form.Group>
                </Form.Group>
                <Form.Group className="col-md-6 mb-3">
                  <Form.Group>
                    <Form.Control type="text" id="name2" placeholder="Last Name" />
                  </Form.Group>
                </Form.Group>
              </div>
              <Form.Group className="mb-3">
                <Form.Control type="email" id="inputEmail5" placeholder="Email Address" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" id="address" placeholder="AddressLine1" />
              </Form.Group>
              <div className="form-row">
                <Form.Group className="col-md-6 mb-3">
                  <Form.Group>
                    <Form.Control type="text" id="country" placeholder="Country" />
                  </Form.Group>
                </Form.Group>
                <Form.Group className="col-md-6 mb-3">
                  <Form.Group>
                    <Form.Control type="text" id="region" placeholder="Country/Region" />
                  </Form.Group>
                </Form.Group>
              </div>
              <div className="form-row">
                <Form.Group className="col-md-6 mb-3">
                  <Form.Group>
                    <Form.Control type="text" id="city" placeholder="City" />
                  </Form.Group>
                </Form.Group>
                <Form.Group className="col-md-6 mb-3">
                  <Form.Group className="form-group">
                    <Form.Control type="number" id="postal" placeholder="Zip/Postal" />
                  </Form.Group>
                </Form.Group>
              </div>
              <div className="form-footer mt-2">
                <Button variant='primary'>Confirm  Details</Button>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Billing Information</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col sm={6} md={6}>
                  <Form.Group className='mb-2'>
                    <Form.Label>First Name <span className="text-red">*</span></Form.Label>
                    <Form.Control type="text" placeholder="First name" />
                  </Form.Group>
                </Col>
                <Col sm={6} md={6}>
                  <Form.Group className='mb-2'>
                    <Form.Label>Last Name <span className="text-red">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Last name" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className='mb-2'>
                    <Form.Label >Company Name <span className="text-red">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Company name" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className='mb-2'>
                    <Form.Label >Email address <span className="text-red">*</span></Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className='mb-2'>
                    <Form.Label >Country <span className="text-red">*</span></Form.Label>
                    <Select classNamePrefix="Select" options={Country} placeholder='country' />

                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className='mb-2'>
                    <Form.Label>Address <span className="text-red">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Home Address" />
                  </Form.Group>
                </Col>
                <Col sm={6} md={6}>
                  <Form.Group className='mb-2'>
                    <Form.Label>City <span className="text-red">*</span></Form.Label>
                    <Form.Control type="text" placeholder="City" />
                  </Form.Group>
                </Col>
                <Col sm={6} md={6}>
                  <Form.Group className='mb-2'>
                    <Form.Label >Postal Code <span className="text-red">*</span></Form.Label>
                    <Form.Control type="number" placeholder="ZIP Code" />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Column & Auto Sizing</Card.Title>
            </Card.Header>
            <Card.Body className="pt-0">
              <Form.Group>
                <Form.Label>Column Sizing</Form.Label>
                <Row>
                  <Col sm={7} className='mb-2'>
                    <Form.Control type="text" placeholder="City" aria-label="City" />
                  </Col>
                  <div className="col-sm mb-2">
                    <Form.Control type="text" placeholder="State" aria-label="State" />
                  </div>
                  <div className="col-sm mb-2">
                    <Form.Control type="text" placeholder="Zip" aria-label="Zip" />
                  </div>
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>Auto Sizing</Form.Label>
                <Form className=" align-items-center">
                  <Row>
                    <div className="col-auto mb-2">
                      <Form.Label className="visually-hidden" htmlFor="autoSizingInput">Name</Form.Label>
                      <Form.Control type="text" id="autoSizingInput" placeholder="Jane Doe" />
                    </div>
                    <div className="col-auto mb-2">
                      <Form.Label className="visually-hidden" htmlFor="autoSizingInputGroup">Username</Form.Label>
                      <InputGroup>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <FormControl type="text" className="form-control" id="autoSizingInputGroup" placeholder="Username" />
                      </InputGroup>
                    </div>
                    <div className="col-auto mb-2">
                      <Form.Label className="visually-hidden" htmlFor="autoSizingSelect">Preference</Form.Label>
                      <Select classNamePrefix="Select" options={FormSize} placeholder='Select' />

                    </div>
                    <div className="col-auto mb-2">
                      <Form.Check type="checkbox" aria-label="switch" label='Remember me' />
                    </div>
                  </Row>
                </Form>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Horizontal form label sizing</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>Be sure to use <code className="highlighter-rouge">.col-form-label-sm</code> or <code className="highlighter-rouge">.col-form-label-lg</code> to your <code className="highlighter-rouge">&lt;label&gt;</code> s or <code className="highlighter-rouge">&lt;legend&gt;</code>s
                to correctly follow the size of <code className="highlighter-rouge">&lt;.form-control-lg&gt;</code> and <code className="highlighter-rouge">&lt;.form-control-sm&gt;</code> .</p>
              <Row className="mb-0">
                <Form.Label htmlFor="colFormLabelSm" className="col-sm-2">Email</Form.Label>
                <Col sm={10}>
                  <Form.Control type="email" size='sm' id="colFormLabelSm" placeholder="col-form-label-sm" />
                </Col>
              </Row>
              <Row className="mb-0">
                <Form.Label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Email</Form.Label>
                <Col sm={10}>
                  <Form.Control type="email" id="colFormLabel" placeholder="col-form-label" />
                </Col>
              </Row>
              <Row>
                <Form.Label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label-lg">Email</Form.Label>
                <Col sm={10}>
                  <Form.Control type="email" size='lg' id="colFormLabelLg" placeholder="col-form-label-lg" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>CheckOut</Card.Title>
              <div className="card-options">
                <ButtonGroup>
                  <DropdownButton variant='primary' title="Visa" aria-expanded="false">

                    <Dropdown.Item eventKey="1">Visa</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Rupay</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Mastercard</Dropdown.Item>
                    <Dropdown.Item eventKey="4">PayPal</Dropdown.Item>

                  </DropdownButton>
                </ButtonGroup>
              </div>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Group>
                    <Form.Label>CardHolder Name</Form.Label>
                    <Form.Control type="text" id="name11" placeholder="First Name" />
                  </Form.Group>
                </Form.Group>
              </Form>
              <div className="form-row">
                <Form.Group className="col-md-9 mb-0">
                  <Form.Group>
                    <Form.Label>Credit card Number</Form.Label>
                    <Form.Control type="number" id="number" placeholder="number" />
                  </Form.Group>
                </Form.Group>
                <Form.Group className="col-md-3 mb-0">
                  <Form.Group>
                    <Form.Label>CVV Number</Form.Label>
                    <Form.Control type="number" id="region1" placeholder="675" />
                  </Form.Group>
                </Form.Group>
              </div>
              <Form.Group className="m-0">
                <Form.Label >Expiration Date</Form.Label>
                <Row>
                  <div className="col-6">
                    <Select classNamePrefix="Select" options={DOMdata} placeholder='Date' />
                  </div>
                  <div className="col-6">

                    <Select classNamePrefix="Select" options={DOYdata} placeholder='Year' />

                  </div>
                </Row>
              </Form.Group>
              <div className="mt-4 mb-0 text-dark">
                Your Credit card information is encrypted
              </div>
              <div className="form-footer mt-2">
                <Button variant='primary'>Make Payment</Button>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Payment Information</Card.Title>
            </Card.Header>
            <Card.Body>
              {/* <DataForm /> */}
              <div className="users">


                <Tab.Container id="left-tabs-example" defaultActiveKey="creditcard">

                  <Nav variant="pills" >
                    <Nav.Item>
                      <Nav.Link eventKey="creditcard"><i className="fa fa-credit-card me-2"></i>CreditCard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Paypal"><i className="fa fa-paypal me-2"></i>Paypal</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="BT"><i className="fa fa-university me-2"></i>Bank Transfer</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="creditcard">
                      <div className="bg-danger-transparent-2 text-danger py-2 mb-4 mt-5" role="alert">Please Enter Valid Details</div>
                      <Form.Group>
                        <Form.Label >CardHolder Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Card number</Form.Label>
                        <InputGroup>
                          <FormControl type="text" placeholder="Search for..." />
                          <Button variant='secondary' id="button-addon" >
                            <i className="fa fa-cc-visa"></i>&nbsp;<i className="fa fa-cc-amex"></i>&nbsp;<i className="fa fa-cc-mastercard"></i>
                          </Button>
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
                            <Form.Label>CVV&nbsp;
                              <OverlayTrigger placement="top"
                                overlay={<Tooltip >CVV is the last three digits on the back of your credit card</Tooltip>}><i className="fa fa-question-circle"></i></OverlayTrigger>
                            </Form.Label>
                            <Form.Control type="number" className="form-control" required />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button className='mt-4' variant='primary' size='lg'>Confirm</Button>

                    </Tab.Pane>
                    <Tab.Pane eventKey="Paypal">

                      <div className="tab-pane" id="tab21">
                        <p className='mt-5'>Paypal is easiest way to pay online</p>
                        <p><Button variant='primary'><i className="fa fa-paypal"></i> Log in my Paypal</Button></p>
                        <p className="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                      </div>

                    </Tab.Pane>
                    <Tab.Pane eventKey="BT">

                      <div className="tab-pane" id="tab22">
                        <p className='mt-5'>Bank account details</p>
                        <dl className="card-text">
                          <dt>BANK: </dt>
                          <dd> THE UNION BANK 0456</dd>
                        </dl>
                        <dl className="card-text">
                          <dt>Account number: </dt>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End Row--> */}

      {/* <!--Row --> */}
      <Row>
        <Col md={12} xl={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Floating Labels Inputs, textarea </Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className='my-3'>
                    <Form.Floating className="mb-3">
                      <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                      />
                      <Form.Label htmlFor="floatingInputCustom">Email address</Form.Label>
                    </Form.Floating>
                  </Form.Group>
                  <Form.Group className='my-3'>
                    <Form.Floating>
                      <Form.Control
                        id="floatingPasswordCustom"
                        type="password"
                        placeholder="Password"
                      />
                      <Form.Label htmlFor="floatingPasswordCustom">Password</Form.Label>
                    </Form.Floating>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className='my-3'>
                    <Form.Floating className="mb-3">
                      <Form.Control as='textarea'
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                      />
                      <Form.Label htmlFor="floatingInputCustom">Reviews</Form.Label>
                    </Form.Floating>
                  </Form.Group>
                  <Form.Group className='my-3'>
                    <Form.Floating>
                      <Form.Control as='textarea'
                        id="floatingPasswordCustom"
                        type="password"
                        placeholder="Password"
                      />
                      <Form.Label htmlFor="floatingPasswordCustom">Comments</Form.Label>
                    </Form.Floating>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End Row--> */}
    </div>
  )
};

export default FormLayouts;

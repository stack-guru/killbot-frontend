import React from 'react';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './Editprofile.module.scss';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, InputGroup, ListGroup } from 'react-bootstrap';
import { Current } from '../../../Data/Pages/DataEditProfile';
import Select from 'react-select';




const Editprofile = () => {

  const DOBdata = [
    { value: "01", label: "01" },
    { value: "02", label: "02" },
    { value: "03", label: "03" },
    { value: "04", label: "04" },
    { value: "05", label: "05" },
    { value: "06", label: "06" },
    { value: "07", label: "07" },
    { value: "08", label: "08" },
    { value: "09", label: "09" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "13" },
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16", label: "16" },
    { value: "17", label: "17" },
    { value: "18", label: "18" },
    { value: "19", label: "19" },
    { value: "20", label: "20" },
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
    { value: "26", label: "26" },
    { value: "27", label: "27" },
    { value: "28", label: "28" },
    { value: "29", label: "29" },
    { value: "30", label: "30" },
    { value: "31", label: "31" },
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

  return (

  <div className={styles.Editprofile}>
    <PageHeader titles="Edit Profile" active="Edit Profile" items={['Pages']} />
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col xl={4}>
        <Card>
          <Card.Header>
            <Card.Title>Edit Password</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-center chat-image mb-5">
              <div className="avatar avatar-xxl chat-profile mb-3 brround">
                <Link className="" to={`${process.env.PUBLIC_URL}/pages/profile`}><img alt="avatar" src={require("../../../assets/images/users/7.jpg")} className="brround"/></Link>
              </div>
              <div className="main-chat-msg-name">
                <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                  <h5 className="mb-1 text-dark fw-semibold">Percy Kewshun</h5>
                </Link>
                <p className="text-muted mt-0 mb-0 pt-0 fs-13">Web Designer</p>
              </div>
            </div>
            <Current/>
            <Form.Group>
              <Form.Label>New Password</Form.Label>
              <InputGroup className="wrap-input100 validate-input" id="Password-toggle1">
                <Link to="#" className="input-group-text bg-white text-muted">
                  <i className="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
                </Link>
                <Form.Control className="input100" type="password" placeholder="New Password"/>
              </InputGroup>
       
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <InputGroup className="wrap-input100 validate-input" id="Password-toggle2">
                <Link to="#" className="input-group-text bg-white text-muted">
                  <i className="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
                </Link>
                <Form.Control className="input100" type="password" placeholder="Confirm Password"/>
              </InputGroup>
          
            </Form.Group>
          </Card.Body>
          <Card.Footer className="text-end">
            <Link to="#" className="btn btn-primary me-2">Update</Link>
            <Link to="#" className="btn btn-danger me-2">Cancel</Link>
          </Card.Footer>
        </Card>
        <Card className="panel-theme">
          <Card.Header>
            <div className="float-start">
              <Card.Title as="h3">Contact</Card.Title>
            </div>
            <div className="clearfix"></div>
          </Card.Header>
          <Card.Body className="no-padding">
            <ListGroup className="no-margin">
              <ListGroup.Item className="d-flex ps-3">
                <div className="social social-profile-buttons me-2">
                  <Link className="social-icon text-primary" to=""><i className="fe fe-mail"></i></Link>
                </div>
                <span className="my-auto">support@demo.com</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex ps-3">
                <div className="social social-profile-buttons me-2">
                  <Link className="social-icon text-primary" to="#"><i className="fe fe-globe"></i></Link>
                </div>
                <span className="my-auto">www.abcd.com</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex ps-3">
                <div className="social social-profile-buttons me-2">
                  <Link className="social-icon text-primary" to="#"><i className="fe fe-phone"></i></Link>
                </div>
                <span className="my-auto">+125 5826 3658</span>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={8}>
        <Card>
          <Card.Header>
            <Card.Title as="h3">Edit Profile</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={6} md={12}>
                <Form.Group>
                  <Form.Label htmlFor="exampleInputname">First Name</Form.Label>
                  <Form.Control type="text" id="exampleInputname" placeholder="First Name"/>
                </Form.Group>
              </Col>
              <div className="col-lg-6 col-md-12">
                <Form.Group>
                  <Form.Label htmlFor="exampleInputname1">Last Name</Form.Label>
                  
                  
                  <Form.Control type="text" id="exampleInputname1" placeholder="Enter Last Name"/>
                </Form.Group>
              </div>
            </Row>
            <Form.Group>
              <Form.Label htmlFor="exampleInputEmail1">Email address</Form.Label>
              
             
              <Form.Control type="email" id="exampleInputEmail1" placeholder="Email address"/>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="exampleInputnumber">Contact Number</Form.Label>
              
              
              <Form.Control type="number" id="exampleInputnumber" placeholder="Contact number"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>About Me</Form.Label>
              <Form.Control as='textarea' className="form-control" defaultValue='My bio.........' rows={6}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Website</Form.Label>
              <Form.Control placeholder="http://splink.com"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Date Of Birth</Form.Label>
              <Row>
                <Col md={4} className="mb-2">
                  <Select classNamePrefix="Select" options={DOBdata} placeholder='Date'/>
        
                </Col>
                <Col md={4} className="mb-2">
                <Select classNamePrefix="Select" options={DOMdata} placeholder='Date'/>
                </Col>
                <Col md={4} className="mb-2">
                  <Select classNamePrefix="Select" options={DOYdata} placeholder='Year'/>
                </Col>
              </Row>
            </Form.Group>
          </Card.Body>
          <Card.Footer className="text-end">
            <Link to="#" className="btn btn-success me-2">Save</Link>
            <Link to="#" className="btn btn-danger me-2">Cancel</Link>
          </Card.Footer>
        </Card>
        <Row>
          <Col lg={6}>
            <Card>
              <Card.Header>
                <Card.Title>Notifications</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mg-b-10 ">
                  <Form.Check label="Updates Automatically" type="switch" className="custom-switch ps-0 mg-b-10" defaultChecked>
                  </Form.Check>
                </Form.Group>
                
                <Form.Group className="mg-b-10">
                  <Form.Check label="Allow Location Map" type="switch" className="custom-switch ps-0 mg-b-10">
                  </Form.Check>
                </Form.Group>
                
                <Form.Group className="mg-b-10">
                  <Form.Check label="Show Contacts" type="switch" className="custom-switch ps-0 mg-b-10" defaultChecked>
                  </Form.Check>
                </Form.Group>
                
                <Form.Group className="mg-b-10">
                  <Form.Check label="Show Notfication" type="switch" className="custom-switch ps-0 mg-b-10" defaultChecked>
                  </Form.Check>
                </Form.Group>
                
                <Form.Group className="mg-b-10">
                  <Form.Check label="Show Tasks Statistics" type="switch" className="custom-switch ps-0 mg-b-10">
                  </Form.Check>
                </Form.Group>
               
                <Form.Group className="mg-b-10">
                  <Form.Check label="Show Email Notification" type="switch" className="custom-switch ps-0 mg-b-10" defaultChecked>
                  </Form.Check>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
          <div className="col-lg-6">
            <Card>
              <Card.Header>
                <div className="card-title">Privacy and Security</div>
              </Card.Header>
              <Card.Body>
               
                 <Form.Group className="mg-b-10">
                  <Form.Check label="Allow Others to see my profile" type="switch" className="custom-switch ps-0 mg-b-10" defaultChecked>
                  </Form.Check>
                </Form.Group>

                <Form.Group className="mg-b-10">
                  <Form.Check label="Make my profile Public" type="switch" className="custom-switch ps-0 mg-b-10">
                  </Form.Check>
                </Form.Group>
                
                <Form.Group className="mg-b-10">
                  <Form.Check label="Security Alert" type="switch" className="custom-switch ps-0 mg-b-10">
                  </Form.Check>
                </Form.Group>

                <Form.Group className="mg-b-10">
                  <Form.Check label="Passcode and Face ID" type="switch" className="custom-switch ps-0 mg-b-10" defaultChecked>
                  </Form.Check>
                </Form.Group>
               
                <Form.Group className="mg-b-10">
                  <Form.Check label="Two Step Verification" type="switch" className="custom-switch ps-0 mg-b-10">
                  </Form.Check>
                </Form.Group>
                
                <Form.Group className="mg-b-10">
                  <Form.Check label="Always Sign In" type="switch" className="custom-switch ps-0 mg-b-10"defaultChecked>
                  </Form.Check>
                </Form.Group>
              </Card.Body>
            </Card>
          </div>
        </Row>
        <Card>
          <Card.Header>
            <Card.Title>Delete Account</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>Its Advisable for you to request your data to be sent to your Email.</p>
            <Form.Label className="custom-control custom-checkbox mb-0">
              <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" defaultChecked/>
                <span className="custom-control-label">Yes, Send my data to my Email.</span>
            </Form.Label>
          </Card.Body>
          <Card.Footer className="text-end">
            <Link to="#" className="btn btn-primary my-1 me-2">Deactivate</Link>
            <Link to="#" className="btn btn-danger my-1 me-2">Delete Account</Link>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}
  </div>
)
};

export default Editprofile;

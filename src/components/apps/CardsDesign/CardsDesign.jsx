import React, { useState } from 'react';
import { Button, Card, Form, ListGroup, ListGroupItem, Row, Col, Tabs, Tab, Collapse, Modal, Alert } from 'react-bootstrap';
import styles from './CardsDesign.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Link } from 'react-router-dom';

const CardsDesign = () => {

  //Basic Cards

  const defaultCard = [
    { id: "1", class: "text-primary bg-primary-transparent card-transparent", class1: "Primary" },
    { id: "2", class: "text-secondary bg-secondary-transparent card-transparent", class1: "Secondary" },
    { id: "3", class: "text-success bg-success-transparent card-transparent", class1: "Success" },
    { id: "4", class: "text-danger bg-danger-transparent card-transparent", class1: "Danger" },
    { id: "5", class: "text-info bg-info-transparent card-transparent", class1: "Info" },
    { id: "6", class: "text-warning bg-warning-transparent card-transparent", class1: "Warning" },
  ]

  //backround color Card

  const backroundcolorCard = [

    { id: "1", class: "text-white bg-primary", class1: "Primary" },
    { id: "2", class: "text-white bg-secondary", class1: "Secondary" },
    { id: "3", class: "text-white bg-success", class1: "Success" },
    { id: "4", class: "text-white bg-danger", class1: "Danger" },
    { id: "5", class: "text-white bg-info", class1: "Info" },
    { id: "6", class: "text-white bg-warning", class1: "Warning" },
  ]

  // CONTACT CARD 01
  const [contactExpanded1, setcontactExpanded1] = useState(true);

  const contactHandleExpandClick = () => {
    setcontactExpanded1(!contactExpanded1);
  };
  const [contactShow1, setcontactShow1] = useState(true);

  // CONTACT CARD 2

  const [cardExpanded2, setcardExpanded2] = useState(true);

  const cardHandleExpandClick2 = () => {
    setcardExpanded2(!cardExpanded2);
  };
  const [contactShow2, setcontactShow2] = useState(true);

  // CONTACT CARD 3

  const [cardExpanded3, setcardExpanded3] = useState(true);

  const cardHandleExpandClick3 = () => {
    setcardExpanded3(!cardExpanded3);
  };

  const [cardShow3, setcardShow3] = useState(true);

  // CONTACT CARD 4

  const [cardExpanded4, setcardExpanded4] = useState(true);

  const cardHandleExpandClick4 = () => {
    setcardExpanded4(!cardExpanded4);
  };
  const [cardShow4, setcardShow4] = useState(true);

  //Basic Card

  const [BasicExpanded, setBasicExpanded] = useState(true);

  const BasicHandleExpandClick = () => {
    setBasicExpanded(!BasicExpanded);
  };
  const [Basicshow, setBasicshow] = useState(true);


  // Basic color card-header

  const [ColorExpanded, setColorExpanded] = useState(true);

  const ColorHandleExpandClick = () => {
    setColorExpanded(!ColorExpanded);
  };
  const [Colorshow, setColorshow] = useState(true);


  // Basic color card-footer

  const [FooterExpanded, setFooterExpanded] = useState(true);

  const FooterHandleExpandClick = () => {
    setFooterExpanded(!FooterExpanded);
  };
  const [Footershow, setFootershow] = useState(true);


  // Card with success alert

  const [successExpanded, setsuccessExpanded] = useState(true);

  const successHandleExpandClick = () => {
    setsuccessExpanded(!successExpanded);
  };
  const [successshow, setsuccessShow] = useState(true);

  // Card with danger alert

  const [dangerExpanded, setdangerExpanded] = useState(true);

  const dangerHandleExpandClick = () => {
    setdangerExpanded(!dangerExpanded);
  };
  const [dangershow, setdangerShow] = useState(true);


  // Initial collapsed card

  const [InitialExpanded, setInitialExpanded] = useState(false);

  const InitialHandleExpandClick = () => {
    setInitialExpanded(!InitialExpanded);
  };
  const [Initialshow, setInitialShow] = useState(true);

  //Card with switch

  const [modaltoggle, setmodaltoggle] = useState(true);

 

  // Card With List

  const [ListExpanded, setListExpanded] = useState(true);

  const ListHandleExpandClick = () => {
    setListExpanded(!ListExpanded);
  };
  const [Listshow, setListShow] = useState(true);

  // Sample card

  const [SampleExpanded, setSampleExpanded] = useState(true);

  const sampleHandleExpandClick = () => {
    setSampleExpanded(!SampleExpanded);
  };
  const [sampleShow, setsampleShow] = useState(true);

  // card-with image

  const [ImageExpanded, setImageExpanded] = useState(true);

  const ImageHandleExpandClick = () => {
    setImageExpanded(!ImageExpanded);
  };
  const [ImageShow, setImageShow] = useState(true);

  // Card blue

  const [cardExpanded, setcardExpanded] = useState(true);

  const cardHandleExpandClick = () => {
    setcardExpanded(!cardExpanded);
  };
  const [cardShow, setcardShow] = useState(true);


  // Card status on left side

  const [statusExpanded, setstatusExpanded] = useState(true);

  const statusHandleExpandClick = () => {
    setstatusExpanded(!statusExpanded);
  };
  const [statusShow, setstatusShow] = useState(true);

  //Fullscreen

  const [screenExpanded, setscreenExpanded] = useState(true);
  let [fullScreen, setFullscreen] = useState("true");
  const [fullscreenshow, setfullscreenShow] = useState(false);

  const fullscreenmodalClose = () => setfullscreenShow(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setfullscreenShow(true);
  }

  const FullscreenhandleExpandClick = () => {
    setscreenExpanded(!screenExpanded);
  };
  const [shows, setShows] = useState(true);

  return (
    <div className={styles.CardsDesign}>
      <PageHeader titles="Cards" active="Cards" items={['Apps']} />
      {/* <!-- ROW-1 OPEN --> */}
      <Row>
        {defaultCard.map((idx) => (
          <Col md={6} xl={4} key={Math.random()}>
            <Card className={idx.class}>
              <Card.Body>
                <Card.Title>{idx.class1} transparent card title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* <!-- ROW-1 CLOSED --> */}

      {/* <!-- ROW-2 OPEN --> */}
      <Row>
        <Col md={6} xl={4}>
          <Card>
            <Card.Body>
              <Card.Title className='pb-2'>Card title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card subtitle</Card.Subtitle>
              <Card.Text >Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <Link to="#" >Card link</Link>
              <Link to="#" >Another link</Link>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Card-Header</Card.Title>
            </Card.Header>
            <Card.Body >
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={6} xl={4}>
          <Card>
            <Card.Body>
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer>
              <Card.Title>Card-footer</Card.Title>
            </Card.Footer>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={6} xl={4}>
          <Card>
            <Card.Body>
              <Card.Title >Special title treatment</Card.Title>
              <Card.Text >With supporting text below as a natural lead-in to additional content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={4}>
          <Card className="text-end">
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW-2 CLOSED --> */}

      {/* <!-- ROW-3 OPEN --> */}
      <Row className="row-cols-4">

        <Col xl={3} sm={6} md={6}>
          {contactShow1 ? <Card className="border p-0">
            <Card.Header>
              <Card.Title>Contact card</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={contactHandleExpandClick}> <i className={`fe ${contactExpanded1 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setcontactShow1(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={contactExpanded1} timeout={3000}>
              <div>
                <Card.Body className="text-center">
                  <img className="avatar-xxl brround cover-image" src={require("../../../assets/images/users/15.jpg")} alt="user15" />
                  <h4 className="mb-0 mt-3">Mike Rowe-Soft</h4>
                  <Card.Text>Web designer</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Row className="user-social-detail">
                    <div className="social-profile me-4 rounded text-center">
                      <Link to="#"><i className="fa fa-google"></i></Link>
                    </div>
                    <div className="social-profile me-4 rounded text-center">
                      <Link to="#"><i className="fa fa-facebook"></i></Link>
                    </div>
                    <div className="social-profile me-4 rounded text-center">
                      <Link to="#"><i className="fa fa-twitter"></i></Link>
                    </div>
                  </Row>
                </Card.Footer>
              </div>
            </Collapse>
          </Card> : null}
        </Col>
        <Col xl={3} sm={6} md={6}>
          {contactShow2 ? <Card className="border p-0">
            <Card.Header>
              <Card.Title>Contact card</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={cardHandleExpandClick2}> <i className={`fe ${cardExpanded2 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setcontactShow2(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={cardExpanded2} timeout={3000}>
              <div>
                <Card.Body className="text-center">
                  <img className="avatar-xxl brround cover-image" src={require("../../../assets/images/users/15.jpg")} alt="user15" />
                  <h4 className="mb-0 mt-3">Laura Norda</h4>
                  <Card.Text>Web designer</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Row className="user-social-detail">
                    <div className="social-profile me-4 rounded text-center">
                      <Link to="#"><i className="fa fa-google"></i></Link>
                    </div>
                    <div className="social-profile me-4 rounded text-center">
                      <Link to="#"><i className="fa fa-facebook"></i></Link>
                    </div>
                    <div className="social-profile me-4 rounded text-center">
                      <Link to="#"><i className="fa fa-twitter"></i></Link>
                    </div>
                  </Row>
                </Card.Footer>
              </div>
            </Collapse>
          </Card> : null}
        </Col>
        <Col xl={3} sm={6} md={6}>
          {cardShow3 ? <Card className="border p-0">
            <Card.Header>
              <Card.Title>Contact card</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={cardHandleExpandClick3}> <i className={`fe ${cardExpanded3 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setcardShow3(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={cardExpanded3} timeout={3000}>
              <div>
                <Card.Body className="text-center">
                  <img className="avatar-xxl brround cover-image" src={require("../../../assets/images/users/15.jpg")} alt="user15" />
                  <h4 className="mb-0 mt-3">Willie Makit</h4>
                  <Card.Text>Web designer</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Row className="user-social-detail">
                    <div className="social-profile me-4 rounded text-center">
                      <Link to="#"><i className="fa fa-google"></i></Link>
                    </div>
                    <div className="social-profile me-4 rounded text-center">
                      <Link to="#"><i className="fa fa-facebook"></i></Link>
                    </div>
                    <div className="social-profile me-4 rounded text-center">
                      <Link to="#"><i className="fa fa-twitter"></i></Link>
                    </div>
                  </Row>
                </Card.Footer>
              </div>
            </Collapse>
          </Card> : null}
        </Col>
        <Col xl={3} sm={6} md={6}>
          {cardShow4 ? <Card className="border p-0">
            <Card.Header>
              <Card.Title>Contact card</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={cardHandleExpandClick4}> <i className={`fe ${cardExpanded4 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setcardShow4(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={cardExpanded4} timeout={3000}>
              <div>
                <Card.Body className="text-center">
                  <img className="avatar-xxl brround cover-image" src={require("../../../assets/images/users/15.jpg")} alt="user15" />
                  <h4 className="mb-0 mt-3">Don Messwidme</h4>
                  <Card.Text>Web designer</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Row className="user-social-detail">
                    <div className="social-profile me-4 rounded text-center">
                      <Link to="#"><i className="fa fa-google"></i></Link>
                    </div>
                    <div className="social-profile me-4 rounded text-center">
                      <Link to="#"><i className="fa fa-facebook"></i></Link>
                    </div>
                    <div className="social-profile me-4 rounded text-center">
                      <Link to="#"><i className="fa fa-twitter"></i></Link>
                    </div>
                  </Row>
                </Card.Footer>
              </div>
            </Collapse>
          </Card> : null}
        </Col>
      </Row>
      {/* <!-- ROW-3 CLOSED --> */}

      {/* <!-- ROW-4 OPEN --> */}
      <Row>
        {backroundcolorCard.map((idx) => (
          <Col md={4} xl={4} key={Math.random()}>
            <Card className={idx.class}>
              <Card.Body>
                <Card.Title>{idx.class1} card title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}

        <Col md={4} xl={4}>
          {Basicshow ? <Card>
            <Card.Header>
              <Card.Title>Basic card</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={BasicHandleExpandClick}> <i className={`fe ${BasicExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setBasicshow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={BasicExpanded} timeout={3000}>
              <div>
                <Card.Body>
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet </Card.Body>
                <Card.Footer>
                  This is Basic card footer
                </Card.Footer>
              </div>
            </Collapse>
          </Card> : null}
        </Col>
        {/* <!-- COL END --> */}
        <Col md={4} xl={4}>
          {Colorshow ? <Card>
            <Card.Header className="bg-primary br-te-3 br-ts-3">
              <Card.Title className="text-white">Basic color card-header</Card.Title>
              <div className="card-options ">
                <Link to="#" onClick={ColorHandleExpandClick}><i className="fe fe-chevron-up text-white"></i></Link>
                <Link to="#" onClick={() => setColorshow(false)} aria-label="close"><i className="fe fe-x text-white"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={ColorExpanded} timeout={3000}>
              <div>
                <Card.Body>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Card.Body>
                <Card.Footer>
                  This is Basic card footer
                </Card.Footer>
              </div>
            </Collapse>
          </Card> : null}
        </Col>
        {/* <!-- COL END --> */}
        <Col md={4} xl={4}>
          {Footershow ? <Card>
            <Card.Header>
              <Card.Title>Basic color card-footer</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={FooterHandleExpandClick}> <i className={`fe ${FooterExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setFootershow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={FooterExpanded} timeout={3000}>
              <div>
                <Card.Body>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Card.Body>
                <Card.Footer className="bg-danger br-be-3 br-bs-3">
                  <div className="text-white">Basic card footer</div>
                </Card.Footer>
              </div>
            </Collapse>
          </Card> : null}
        </Col>
        {/* <!-- COL END --> */}
        <Col md={6} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Panel with custom buttons</Card.Title>
              <div className="card-options">
                <Link to="#" className="btn btn-primary btn-sm">Action 1</Link>
                <Link to="#" className="btn btn-secondary btn-sm ms-2">Action 2</Link>
              </div>
            </Card.Header>
            <Card.Body>
              No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful actual teachings of the great explorer
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={6} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Card with search form</Card.Title>
              <div className="card-options">
                <Form>
                  <div className="input-group">
                    <input type="text" className="form-control form-control-sm" placeholder="Search something..." name="s" />
                    <span className="input-group-btn ms-0">
                      <Button className="btn btn-sm btn-primary" type="submit">
                        <span className="fe fe-search text-white"></span>
                      </Button>
                    </span>
                  </div>
                </Form>
              </div>
            </Card.Header>
            <Card.Body>
              No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful actual teachings of the great explorer
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={6} xl={6}>
          {successshow ? <Card>
            <Card.Header>
              <Card.Title>Card with alert</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={successHandleExpandClick}> <i className={`fe ${successExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setsuccessShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={successExpanded} timeout={3000}>
              <div>
                <Alert variant="success" className="mb-0">
                  Adding action was successful
                </Alert>
                <Card.Body>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Card.Body>
              </div>
            </Collapse>
          </Card> : null}
        </Col>
        {/* <!-- COL END --> */}
        <Col md={6} xl={6}>
          {dangershow ? <Card>
            <Card.Header>
              <Card.Title>Card with alert</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={dangerHandleExpandClick}> <i className={`fe ${dangerExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setdangerShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={dangerExpanded} timeout={3000}>
              <div>
                <Alert variant="danger" className="mb-0">
                  Adding action failed
                </Alert>
                <Card.Body>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Card.Body>
              </div>
            </Collapse>
          </Card> : null}
        </Col>
        {/* <!-- COL END --> */}
        <Col md={4} xl={4}>
          {/* <FullScreenDialog /> */}
          {shows ? <Card>
            <Card.Header>

              <Card.Title>Fullscreen button</Card.Title>
              <div className="card-options">

                <Link to="#" onClick={FullscreenhandleExpandClick}> <i className={`fe ${screenExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => handleShow(true)}><i className="fe fe-maximize"></i></Link>



                <Link to="#" onClick={() => setShows(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                <Modal show={fullscreenshow} fullscreen={fullScreen} onHide={() => setfullscreenShow(false)}>
                  <Modal.Header>
                    <Modal.Title>Modal</Modal.Title>
                    <span className="d-flex ms-auto" onClick={fullscreenmodalClose}><i className='fe fe-x ms-auto' ></i></span>
                  </Modal.Header>
                  <Modal.Body>Modal body content</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={fullscreenmodalClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={fullscreenmodalClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>

            </Card.Header>
            <Collapse in={screenExpanded} timeout={3000}>
              <div>
              <Card.Body>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Card.Body>
              </div>
            </Collapse>
          </Card> : null}
        </Col>
        {/* <!-- COL END --> */}
        <Col xl={4} md={4}>
          <Card>
            <Card.Header>
              <Card.Title>Card with switch</Card.Title>
              <div className="card-options">
                <Form.Check className='mb-2 mt-0' type="switch" id="custom-switch" defaultChecked  onClick={()=>{setmodaltoggle(!modaltoggle)}} />
              </div>
            </Card.Header>
            {modaltoggle && (
            <Card.Body>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Card.Body>
             )
            }
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col xl={4} md={4}>
          {Initialshow ? <Card>
            <Card.Header>
              <Card.Title>Initial collapsed card</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={InitialHandleExpandClick}> <i className={`fe ${InitialExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setInitialShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={InitialExpanded} timeout={3000}>
              <div>
              <Card.Body>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Card.Body>
              </div>
            </Collapse>
          </Card> : null}
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-4 CLOSED --> */}

      {/* <!-- ROW-5 OPEN --> */}
      <Row>
        <Col xl={4} md={12}>
          <Card className="overflow-hidden">
            <img src={require("../../../assets/images/media/8.jpg")} className="card-img-top" alt="img" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card className="overflow-hidden">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
            </Card.Body>
            <img src={require("../../../assets/images/media/9.jpg")} className="card-img-bottom" alt="img" />
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card>
            <img src={require("../../../assets/images/media/31.jpg")} className="card-img-top" alt="img" />
            <Card.Body className="border-bottom">
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>An item</ListGroupItem>
              <ListGroupItem>A second item</ListGroupItem>
              <ListGroupItem>A third item</ListGroupItem>
            </ListGroup>
            <Card.Body className="border-top">
              <Link to="#">Card link</Link>
              <Link to="#">Another link</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW-5 CLOSED --> */}

      {/* <!-- ROW-6 OPEN --> */}
      <Row>
        <Col xl={4} md={12}>
          <Card>
            <Card.Body className="text-start">
              <blockquote className="quote">
                <Card.Text>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                <small className="text-muted">
                  so awesome this title <cite title="Source Title">-magna aliqua</cite>
                </small>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={4}>
          <Card>
            <Card.Body className="text-center">
              <blockquote className="quote">
                <Card.Text>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                <small className="text-muted">
                  so awesome this title <cite title="Source Title">-magna aliqua</cite>
                </small>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={4}>
          <Card>
            <Card.Body className="text-end">
              <blockquote className="quote">
                <Card.Text>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                <small className="text-muted">
                  so awesome this title <cite title="Source Title">-magna aliqua</cite>
                </small>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={4}>
          {Listshow ? <Card className="m-b-20">
            <Card.Header>
              <Card.Title>Card With List</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={ListHandleExpandClick}> <i className={`fe ${ListExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setListShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={ListExpanded} timeout={3000}>
              <div>
              <Card.Body>
                <div className="visitor-list">
                  <div className="media m-0 mt-0 border-bottom">
                    <img className="brround avatar-md me-3" alt="avatra-img" src={require("../../../assets/images/users/18.jpg")} />
                    <div className="media-body">
                      <Link to="#" className="text-default fw-semibold">John Paige</Link>
                      <p className="text-muted">Uploaded new invoices for RedBus</p>
                    </div>
                  </div>
                  <div className="media mt-2 border-bottom">
                    <img className="brround avatar-md me-3" alt="avatra-img" src={require("../../../assets/images/users/20.jpg")} />
                    <div className="media-body">
                      <Link to="#" className="text-default fw-semibold">Lillian Quinn</Link>
                      <p className="text-muted">Created new work flow for the current</p>
                    </div>
                  </div>
                  <div className="media mt-2">
                    <img className="brround avatar-md me-3" alt="avatra-img" src={require("../../../assets/images/users/18.jpg")} />
                    <div className="media-body">
                      <Link to="#" className="text-default fw-semibold">Irene Harris</Link>
                      <p className="text-muted mb-0">Submitted the project schedule to the manager</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
              </div>
            </Collapse>
          </Card> : null}
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={4}>
          {sampleShow ? <Card className="m-b-20">
            <Card.Header>
              <Card.Title>Sample card</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={sampleHandleExpandClick}> <i className={`fe ${SampleExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setsampleShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={SampleExpanded} timeout={3000}>
              <div>
              <Card.Body>
                <Card.Text>Put toy mouse in food bowl run out of litter box at full speed drool but pee in Put toy mouse Put toy mouse the shoe purr when being pet but chew foot.</Card.Text>
                <Card.Text className="mb-0">Scratch the postman wake up lick paw Duis aute irure dolor in reprehenderit wake up owner meow meow lick plastic bags Scratch the postman wake up lick paw wake Duis aute irure dolor having their mate disturbing sleeping
                  humans.
                </Card.Text>
              </Card.Body>
              </div>
            </Collapse>
          </Card> : null}
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={4}>
          <Card className="d-flex m-b-20">
            <Card.Header>
              <Card.Title>Card with Toolbar</Card.Title>
              <div className="card-options">
                <Link className="text-gray" to="#">
                  <i className="mdi mdi-refresh"></i>
                </Link>
                <Link className="text-gray" to="#">
                  <i className="mdi mdi-bookmark-outline"></i>
                </Link>
                <Link className="text-gray" to="#">
                  <i className="mdi mdi-dots-vertical"></i>
                </Link>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Text>Put toy mouse in food bowl run out of litter box at full speed drool but pee in Put toy mouse Put toy mouse the shoe purr when being pet but chew foot.</Card.Text>
              <Card.Text className="mb-0">Duis aute irure dolor in reprehenderit in voluptate velit Scratch the postman wake up lick paw wake up owner meow meow lick plastic bags Scratch the postman wake up lick paw wake having their mate disturbing sleeping
                humans.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-6 CLOSED --> */}

      {/* <!-- ROW-7 OPEN --> */}
      <Row>
        <Col md={12} xl={4}>
          <Card className="card-blog-overlay1 overflow-hidden">
            <Card.Body className="text-white">
              <Card.Title className="text-white">card-with image</Card.Title>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Card.Body>
            <Card.Footer className="text-white z-index2 border-transparent">
              This is Basic card footer
            </Card.Footer>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={4}>
          <Card className="card-blog-overlay2  overflow-hidden">
            <Card.Body className="text-white">
              <Card.Title className="text-white">card-with image</Card.Title>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Card.Body>
            <Card.Footer className="text-white z-index2 border-transparent">
              This is Basic card footer
            </Card.Footer>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={4}>
          {ImageShow ? <Card className="card-blog-overlay  overflow-hidden">
            <Card.Header className="z-index2  border-transparent">
              <Card.Title className="text-white ">card-with image</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={ImageHandleExpandClick}><i className={`fe ${ImageExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setImageShow(false)} aria-label="close"><i className="fe fe-x text-white"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={ImageExpanded} timeout={3000}>
              <Card.Body className="text-white">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Card.Body>
            </Collapse>
          </Card> : null}
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-7 CLOSED --> */}

      {/* <!-- ROW-8 OPEN --> */}
      <Row>
        <Col md={12} xl={6}>
          {cardShow ? <Card>
            <div className="card-status bg-blue br-te-7 br-ts-7"></div>
            <Card.Header>
              <Card.Title>Card blue</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={cardHandleExpandClick}> <i className={`fe ${cardExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setcardShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={cardExpanded} timeout={3000}>
              <div>
              <Card.Body>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Card.Body>
              </div>
            </Collapse>
          </Card> : null}
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          {statusShow ? <Card>
            <div className="card-status card-status-left bg-red br-bs-7 br-ts-7"></div>
            <Card.Header>
              <Card.Title>Card status on left side</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={statusHandleExpandClick}> <i className={`fe ${statusExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setstatusShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={statusExpanded} timeout={3000}>
              <div>
              <Card.Body>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Card.Body>
              </div>
            </Collapse>
          </Card> : null}
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-8 CLOSED --> */}

      {/* <!-- ROW-9 OPEN --> */}
      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Row className="g-0">
              <Col md={4}>
                <img src={require("../../../assets/images/media/22.jpg")} className="card-img-left h-100" alt="img" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                  <Card.Text className="card-text"><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={12} xl={6}>
          <Card>
            <Row className="g-0">
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                  <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                </Card.Body>
              </Col>
              <Col md={4}>
                <img src={require("../../../assets/images/media/22.jpg")} className="card-img-right h-100" alt="img" />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW-9 CLOSED --> */}

      {/* <!-- ROW-10 OPEN --> */}
      <Row>
        <Col xl={12} md={12}>
          <div className="mb-5 card-group overflow-hidden">
            <Card className="shadow-none">
              <img src={require("../../../assets/images/media/22.jpg")} className="card-img-top" alt="img" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow-none border-style">
              <img src={require("../../../assets/images/media/18.jpg")} className="card-img-top" alt="img" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>This card has supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow-none">
              <img src={require("../../../assets/images/media/6.jpg")} className="card-img-top" alt="img" />
              <div className="card-body">
                <Card.Title>Card title</Card.Title>
                <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</Card.Text>
                <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
              </div>
            </Card>
          </div>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <Card.Body>
              <div className="panel panel-tabs-boxed">

                <Tabs defaultActiveKey="active">
                  <Tab eventKey="active" title="Active" className='mb-3'>
                    <h5 className='mt-5'><b>Special title treatment 01</b></h5>
                    <p className='mt-5'>With supporting text below as a natural lead-in to additional content.</p>
                    <Button variant='primary'>Go somewhere</Button>
                  </Tab>
                  <Tab eventKey="link" title="Link" className='mb-3'>
                    <h5 className='mt-5'><b>Special title treatment 02</b></h5>
                    <p className='mt-5'>With supporting text below as a natural lead-in to additional content.</p>
                    <Button variant="primary">Go somewhere</Button>
                  </Tab>
                  <Tab className='disabled' eventKey="disable" title="disabled">

                  </Tab>
                </Tabs>

              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <Card.Body className='panel'>


              <Tabs defaultActiveKey="active">
                <Tab eventKey="active" title="Active" className='mb-3'>
                  <h5 className='mt-5'><b>Special title treatment 01</b></h5>
                  <p className='mt-5'>With supporting text below as a natural lead-in to additional content.</p>
                  <Button variant='primary'>Go somewhere</Button>
                </Tab>
                <Tab eventKey="link" title="Link" className='mb-0'>
                  <h5 className='mt-5'><b>Special title treatment 02</b></h5>
                  <p className='mt-5'>With supporting text below as a natural lead-in to additional content.</p>
                  <Button variant="primary">Go somewhere</Button>
                </Tab>
                <Tab eventKey="disable" title="disabled" disabled>

                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW-10 CLOSED --> */}
    </div>
  )
};

export default CardsDesign;

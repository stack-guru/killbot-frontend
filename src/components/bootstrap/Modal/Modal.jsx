import React, { useState } from 'react';
import { Button, Card, Col, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row, Form, Collapse } from 'react-bootstrap';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './Modal.module.scss';
import { Link } from 'react-router-dom';
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import Select from 'react-select';
const ModalS = () => {



  //Rodal Animated modal

  const [setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  const [animation1, setanimation1] = useState(false);
  const [animation2, setanimation2] = useState(false);
  const [animation3, setanimation3] = useState(false);
  const [animation4, setanimation4] = useState(false);
  const [animation5, setanimation5] = useState(false);
  const [animation6, setanimation6] = useState(false);
  const [animation7, setanimation7] = useState(false);
  const [animation8, setanimation8] = useState(false);
  const [animation9, setanimation9] = useState(false);

  let viewDemoShow1 = (modal) => {
    switch (modal) {
      case "show1":
        setanimation1(true)
        break;
      case "show2":
        setanimation2(true)
        break;
      case "show3":
        setanimation3(true)
        break;
      case "show4":
        setanimation4(true)
        break;
      case "show5":
        setanimation5(true)
        break;
      case "show6":
        setanimation6(true)
        break;
      case "show7":
        setanimation7(true)
        break;
      case "show8":
        setanimation8(true)
        break;
      case "show9":
        setanimation9(true)
        break;
        default:
    }
  }

  let viewDemoClose1 = (modal) => {
    switch (modal) {
      case "show1":
        setanimation1(false)
        break;
      case "show2":
        setanimation2(false)
        break;
      case "show3":
        setanimation3(false)
        break;
      case "show4":
        setanimation4(false)
        break;
      case "show5":
        setanimation5(false)
        break;
      case "show6":
        setanimation6(false)
        break;
      case "show7":
        setanimation7(false)
        break;
      case "show8":
        setanimation8(false)
        break;
      case "show9":
        setanimation9(false)
        break;
        default:
    }
  }

  const [show, setShow] = useState(false);
  const smallmodalClose = () => setShow(false);
  const smallmodalShow = () => setShow(true);

  const [largeShow, setlargeShow] = useState(false);
  const largemodalClose = () => setlargeShow(false);
  const largemodalShow = () => setlargeShow(true);

  const [xtralargeShow, setxtralargeShow] = useState(false);
  const xtralargemodalClose = () => setxtralargeShow(false);
  const xtralargemodalShow = () => setxtralargeShow(true);

  // Scroll Modal

  const [scrollShow, setscrollShow] = useState(false);

  const handleClose1 = () => setscrollShow(false);
  const handleShow1 = () => setscrollShow(true);

  // Select2 Inside Modals

  const [InsideShow, setInsideShow] = useState(false);

  const handleClose2 = () => setInsideShow(false);
  const handleShow2 = () => setInsideShow(true);


  // Input Modal

  const [InputShow, setInputShow] = useState(false);

  const handleClose3 = () => setInputShow(false);
  const handleShow3 = () => setInputShow(true);

  // Basic Modal

  const [basicShow, setbasicShow] = useState(false);

  const viewDemoClose = () => setbasicShow(false);
  const viewDemoShow = () => setbasicShow(true);


  // SUCCESS ALERT Modal

  const [successShow, setsuccessShow] = useState(false);

  const viewDemoClose2 = () => setsuccessShow(false);
  const viewDemoShow2 = () => setsuccessShow(true);

  //  Warning Alert Messages

  const [warningShow, setwarningShow] = useState(false);

  const viewDemoClose3 = () => setwarningShow(false);
  const viewDemoShow3 = () => setwarningShow(true);

  // showCode

  const [Annimation, setAnnimation] = useState(false);
  const [Size, setSize] = useState(false);
  const [Select2, setSelect2] = useState(false);
  const [mdo, setMdo] = useState(false);
  const [basic, setbasic] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [Warning, setWarning] = useState(false);


  // Fullscreen Modal

  let [fullScreen, setFullscreen] = useState("true");
  const [fullscreenshow, setfullscreenShow] = useState(false);

  const fullscreenmodalClose = () => setfullscreenShow(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setfullscreenShow(true);
  }


  const ModalData = [
		{ value: "Firefox", label: "Firefox" },
		{ value: "Chrome", label: "Chrome" },
		{ value: "Safari", label: "Safari" },
		{ value: "Opera", label: "Opera" },
		{ value: "Internet Explore", label: "Internet Explore" },
	];

  return (

    <div className={styles.Modal}>
      <PageHeader titles="Modal" active="Modal" items={['Advanced Elements']} />

      {/* <!-- Row --> */}
      <Card id="modal5">
        <Card.Header className="border-bottom-0 d-sm-flex d-block">
          <Card.Title className='mb-3 mb-sm-0'>
            Modal Animation Effects
          </Card.Title>
          <Form className="ms-auto">
            <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setAnnimation(!Annimation)} className="showcode d-flex ms-auto mx-2" />
          </Form>
        </Card.Header>
        <Collapse in={Annimation} className="mt-2">
          <pre>
            <code>
              {`
 export function ModalZoom() {

 const [visible, setVisible] = useState(false);

 const show = () => {
      setVisible(true);
  };

  const hide = () => {
      setVisible(false);
  };

  return (
      <div>
          <Link to="#" className="modal-effect btn btn-primary-light d-grid mb-3" onClick={show}>Zoom</Link>
          <Rodal visible={visible} onClose={hide} animation='Zoom' height={280}>
              <div>Mesage Preview</div>
              <hr />
              <p> Why We Use Electoral College, Not Popular Vote It is a long
                  established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using
                  Lorem Ipsum is that it has a more-or-less normal distribution of
                  letters, as opposed to using 'Content here, content here', making it
                  look like readable English.</p>
              <hr />
              <Button className="me-2" variant="primary" onClick={hide}>Save Changes</Button>
              <Button variant="default" onClick={hide}>Close</Button>
          </Rodal>
      </div>
  );
}

`}
            </code>
          </pre>
        </Collapse>
        <Card.Body>
          <Row>
            <Col sm={6} md={6} xl={3}>
              <Link to="#" className="modal-effect btn btn-primary-light d-grid mb-3" onClick={() => viewDemoShow1("show1")}>Zoom</Link>
              <Rodal onClose={hide} visible={animation1} animation='Zoom' height={280} onClick={() => viewDemoClose1("show1")} >
                <div className='modal-header'>Mesage Preview
                  <Link to="#" as='span' className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show1") }}><i className='fe fe-x ms-auto'></i></Link>
                </div>
                <div className='modal-body'>
                  <h6>Modal Body</h6>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
                <div className='modal-footer'>
                  <Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show1")}>Save Changes</Button>
                  <Button variant="secondary" onClick={() => viewDemoClose1("show1")}>Close</Button>
                </div>
              </Rodal>
            </Col>
            <Col sm={6} md={6} xl={3}>
              <Link to="#" className="modal-effect btn btn-secondary-light d-grid mb-3" onClick={() => viewDemoShow1("show2")}>Fade</Link>
              <Rodal onClose={hide} visible={animation2} animation='fade' height={280}>
                <div className='modal-header'>Mesage Preview
                  <Link to="#" as='span' className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show2") }}><i className='fe fe-x ms-auto'></i></Link>
                </div>
                <div className='modal-body'>
                  <h6>Modal Body</h6>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
                <div className='modal-footer'>
                  <Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show2")}>Save Changes</Button>
                  <Button variant="secondary" onClick={() => viewDemoClose1("show2")}>Close</Button>
                </div>
              </Rodal>
            </Col>
            <Col sm={6} md={6} xl={3}>
              <Link to="#" className="modal-effect btn btn-danger-light d-grid mb-3" onClick={() => viewDemoShow1("show3")}>Flip</Link>
              <Rodal onClose={hide} visible={animation3} animation='flip' height={280}>
                <div className='modal-header'>Mesage Preview
                  <Link to="#" as='span' className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show3") }}><i className='fe fe-x ms-auto'></i></Link>
                </div>
                <div className='modal-body'>
                  <h6>Modal Body</h6>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
                <div className='modal-footer'>
                  <Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show3")}>Save Changes</Button>
                  <Button variant="secondary" onClick={() => viewDemoClose1("show3")}>Close</Button>
                </div>
              </Rodal>
            </Col>
            <Col sm={6} md={6} xl={3}>
              <Link to="#" className="modal-effect btn btn-warning-light d-grid mb-3" onClick={() => viewDemoShow1("show4")}>Door</Link>
              <Rodal onClose={hide} visible={animation4} animation='door' height={280}>
                <div className='modal-header'>Modal Header
                  <Link to="#" as='span' className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show4") }}><i className='fe fe-x ms-auto'></i></Link>
                </div>
                <div className='modal-body'>
                  <h6>Modal Body</h6>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
                <div className='modal-footer'>
                  <Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show4")}>Save Changes</Button>
                  <Button variant="secondary" onClick={() => viewDemoClose1("show4")}>Close</Button>
                </div>
              </Rodal>
            </Col>
            <Col sm={6} md={6} xl={3}>
              <Link to="#" className="modal-effect btn btn-success-light d-grid mb-3" onClick={() => viewDemoShow1("show5")}>Rotate</Link>
              <Rodal onClose={hide} visible={animation5} animation='rotate' height={280}>
                <div className='modal-header'>Modal Header
                  <Link to="#" as='span' className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show5") }}><i className='fe fe-x ms-auto'></i></Link>
                </div>
                <div className='modal-body'>
                  <h6>Modal Body</h6>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
                <div className='modal-footer'>
                  <Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show5")}>Save Changes</Button>
                  <Button variant="secondary" onClick={() => viewDemoClose1("show5")}>Close</Button>
                </div>
              </Rodal>
            </Col>
            <Col sm={6} md={6} xl={3}>
              <Link to="#" className="modal-effect btn btn-info-light d-grid mb-3" onClick={() => viewDemoShow1("show6")}>Slide-Up</Link>
              <Rodal onClose={hide} visible={animation6} animation='slideUp' height={280}>
                <div className='modal-header'>Modal Header
                  <Link to="#" as='span' className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show6") }}><i className='fe fe-x ms-auto'></i></Link>
                </div>
                <div className='modal-body'>
                  <h6>Modal Body</h6>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
                <div className='modal-footer'>
                  <Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show6")}>Save Changes</Button>
                  <Button variant="secondary" onClick={() => viewDemoClose1("show6")}>Close</Button>
                </div>
              </Rodal>
            </Col>
            <Col sm={6} md={6} xl={3}>
              <Link to="#" className="modal-effect btn btn-primary-light d-grid mb-3" onClick={() => viewDemoShow1("show7")}>slide-Down</Link>
              <Rodal onClose={hide} visible={animation7} animation='slideDown' height={280}>
                <div className='modal-header'>Modal Header
                  <Link to="#" as='span' className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show7") }}><i className='fe fe-x ms-auto'></i></Link>
                </div>
                <div className='modal-body'>
                  <h6>Modal Body</h6>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
                <div className='modal-footer'>
                  <Button className="me-2" variant="primary" >Save Changes</Button>
                  <Button variant="secondary" onClick={() => viewDemoClose1("show7")}>Close</Button>
                </div>
              </Rodal>
            </Col>
            <Col sm={6} md={6} xl={3}>
              <Link to="#" className="modal-effect btn btn-secondary-light d-grid mb-3" onClick={() => viewDemoShow1("show8")}>slide-Left</Link>
              <Rodal onClose={hide} visible={animation8} animation='slideLeft' height={280}>
                <div className='modal-header'>Modal Header
                  <Link to="#" as='span' className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show8") }}><i className='fe fe-x ms-auto'></i></Link>
                </div>
                <div className='modal-body'>
                  <h6>Modal Body</h6>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
                <div className='modal-footer'>
                  <Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show8")}>Save Changes</Button>
                  <Button variant="secondary" onClick={() => viewDemoClose1("show8")}>Close</Button>
                </div>
              </Rodal>
            </Col>
            <Col sm={6} md={6} xl={3}>
              <Link to="#" className="modal-effect btn btn-danger-light d-grid mb-3" onClick={() => viewDemoShow1("show9")}>slide-Right</Link>
              <Rodal onClose={hide} visible={animation9} animation='slideRight' height={280}>
                <div className='modal-header'>Modal Header
                  <Link to="#" as='span' className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show9") }}><i className='fe fe-x ms-auto'></i></Link>
                </div>
                <div className='modal-body'>
                  <h6>Modal Body</h6>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
                <div className='modal-footer'>
                  <Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show9")}>Save Changes</Button>
                  <Button variant="secondary" onClick={() => viewDemoClose1("show9")}>Close</Button>
                </div>
              </Rodal>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row>
        <Col sm={12} md={12}>
          <Card>
            <Card.Header className="border-bottom-0 d-sm-flex d-block">
              <Card.Title className='mb-3 mb-sm-0'>Modal Sizes & Types</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSize(!Size)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body className="text-center">
              <p>Add <code className="highlighter-rouge">.modal-sm </code> or <code className="highlighter-rouge">.modal-lg </code> or <code className="highlighter-rouge">.modal-xl </code> to modal-dialog to increase and decrease the modal box
                sizes.
              </p>

              <Button variant="primary" className="bg-primary-gradient mt-3 me-1" onClick={smallmodalShow}>
                Small Modal
              </Button>

              <Modal size="sm" show={show} onHide={smallmodalClose}>
                <ModalHeader>
                  <ModalTitle>Modal Titel</ModalTitle>
                  <span className="d-flex ms-auto" onClick={smallmodalClose}><i className='fe fe-x ms-auto' ></i></span>
                </ModalHeader>
                <ModalBody>Modal body text goes here..!</ModalBody>
                <ModalFooter>
                  <Button variant="secondary" onClick={smallmodalClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={smallmodalClose}>
                    Save Changes
                  </Button>
                </ModalFooter>
              </Modal>

              <Button variant="success" className=" bg-success-gradient mt-3 me-1" onClick={largemodalShow}>
                large Modal
              </Button>

              <Modal size="lg" show={largeShow} onHide={largemodalClose}>
                <ModalHeader>
                  <ModalTitle>Modal Titel</ModalTitle>
                  <span className="d-flex ms-auto" onClick={largemodalClose}><i className='fe fe-x ms-auto' ></i></span>
                </ModalHeader>
                <ModalBody>Modal body text goes here..!</ModalBody>
                <ModalFooter>
                  <Button variant="secondary" onClick={largemodalClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={largemodalClose}>
                    Save Changes
                  </Button>
                </ModalFooter>
              </Modal>

              <Button variant="success" className=" bg-success-gradient mt-3 me-1" onClick={xtralargemodalShow}>
                Extralarge Modal
              </Button>

              <Modal size="xl" show={xtralargeShow} onHide={xtralargemodalClose}>
                <ModalHeader>
                  <ModalTitle>Modal Titel</ModalTitle>
                  <span className="d-flex ms-auto" onClick={xtralargemodalClose}><i className='fe fe-x ms-auto' ></i></span>
                </ModalHeader>
                <ModalBody>Modal body text goes here..!</ModalBody>
                <ModalFooter>
                  <Button variant="secondary" onClick={xtralargemodalClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={xtralargemodalClose}>
                    Save Changes
                  </Button>
                </ModalFooter>
              </Modal>

              <Button variant="danger" className="bg-danger-gradient mt-3 me-1" onClick={handleShow1}>
                Scrolling Modal
              </Button>

              <Modal
                show={scrollShow}
                onHide={handleClose1}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header>
                  <Modal.Title>Modal title</Modal.Title>
                  <span className="d-flex ms-auto" onClick={handleClose1}><i className='fe fe-x ms-auto' ></i></span>
                </Modal.Header>
                <Modal.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..<br /> <br />But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?<br /> <br /> But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose1}>
                    Close
                  </Button>
                  <Button variant="primary">Understood</Button>
                </Modal.Footer>
              </Modal>

              <Button variant="warning" className="bg-warning-gradient mt-3 mb-3 mb-md-0 me-1" onClick={() => handleShow(true)}>
                Full screen

              </Button>

              <Modal show={fullscreenshow} fullscreen={fullScreen} onHide={() => setShow(false)}>
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
              <Collapse in={Size} className="mt-2">
                <pre>
                  <code>
                    {`
export function Fullscreen() {

  let [fullScreen, setFullscreen] = useState("true");
  const [show, setShow] = useState(false);

  const fullscreenmodalClose = () => setShow(false);

  function handleShow(breakpoint: any) {
      setFullscreen(breakpoint);
      setShow(true);
  }

  return (
      <>

  <Button variant="warning" className="bg-warning-gradient mt-3 mb-3 mb-md-0 me-1" onClick={() => handleShow(true)}>
      Full screen

  </Button>

  <Modal show={show} fullscreen={fullScreen} onHide={() => setShow(false)}>
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
      </>
  )
};
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col sm={6} md={6} lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <div className='d-sm-flex'>
                  <h6 className="main-content-label mb-3">Select2 Inside Modals</h6>
                  <Form className="ms-auto">
                    <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSelect2(!Select2)} className="showcode d-flex ms-auto mx-2" />
                  </Form>
                </div>
              </div>

              <Button className="me-3 mt-2" variant="pink" onClick={handleShow2}>Select2 Modal</Button>
              <Modal show={InsideShow} onHide={handleClose2}>
                <Modal.Header>
                  <Modal.Title>Select2 Modal</Modal.Title>
                  <span className="ms-auto" onClick={handleClose2}><i className='fe fe-x ms-auto' ></i></span>
                </Modal.Header>
                <Modal.Body>
                  <h6>Modal Body</h6>
                  {/* <Form.Select>
                    <option>Choose one</option>
                    <option value="1">Firefox</option>
                    <option value="2">Chrome</option>
                    <option value="3">Safari</option>
                    <option value="4">Opera</option>
                    <option value="5">Internet Explore</option>
                  </Form.Select> */}
                  <Select classNamePrefix="Select-sm" options={ModalData} placeholder='Choose one' />
                  <p className='mt-2'>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success" onClick={handleClose2}>
                    Save Changes
                  </Button>
                  <Button variant="danger" onClick={handleClose2}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>

              <Collapse in={Select2} className="mt-2">
                <pre>
                  <code>
                    {`
export function SelectInsideModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
          <Button className="me-3 mt-2" variant="pink" onClick={handleShow}>Select2 Modal</Button>
          <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                  <Modal.Title>Select2 Modal</Modal.Title>
                  <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto' ></i></span>
              </Modal.Header>
              <Modal.Body>
                  <h6>Modal Body</h6>
                  <Form.Select>
                      <option>Choose one</option>
                      <option value="1">Firefox</option>
                      <option value="2">Chrome</option>
                      <option value="3">Safari</option>
                      <option value="4">Opera</option>
                      <option value="5">Internet Explore</option>
                  </Form.Select>
                  <p className='mt-2'>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="success" onClick={handleClose}>
                      Save Changes
                  </Button>
                  <Button variant="danger" onClick={handleClose}>
                      Close
                  </Button>
              </Modal.Footer>
          </Modal>
      </>
  );
}
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6} lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <div className="d-sm-flex">
                  <h6 className="main-content-label mb-3">Input Modal</h6>
                  <Form className="ms-auto">
                    <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setMdo(!mdo)} className="showcode d-flex ms-auto mx-2" />
                  </Form>
                </div>
              </div>

              <Button className="me-3 mt-2" variant="green" onClick={handleShow3}>Open modal for @mdo</Button>
              <Modal show={InputShow} onHide={handleClose3}>
                <Modal.Header>
                  <Modal.Title>New Message to @mdo</Modal.Title>
                  <span className="d-flex ms-auto" onClick={handleClose3}><i className='fe fe-x ms-auto' ></i></span>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Recipient:</Form.Label>
                      <Form.Control type="text" autoFocus />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Message:</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success" onClick={handleClose3}>
                    Save Changes
                  </Button>
                  <Button variant="danger" onClick={handleClose3}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>

              <Collapse in={mdo} className="mt-2">
                <pre>
                  <code>
                    {`
export function InputModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
          <Button className="me-3 mt-2" variant="green" onClick={handleShow}>Open modal for @mdo</Button>
          <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                  <Modal.Title>New Message to @mdo</Modal.Title>
                  <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto' ></i></span>
              </Modal.Header>
              <Modal.Body>
                  <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Recipient:</Form.Label>
                          <Form.Control type="text" autoFocus />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Message:</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="success" onClick={handleClose}>
                      Save Changes
                  </Button>
                  <Button variant="danger" onClick={handleClose}>
                      Close
                  </Button>
              </Modal.Footer>
          </Modal>
      </>
  );
}

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row>
        <Col lg={12}>
          {/* <!--div--> */}
          <Card id="modal">
            <Card.Header className="border-bottom-0 d-sm-flex d-block">
              <Card.Title className='mb-3 mb-sm-0'>
                Basic Modal
              </Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setbasic(!basic)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border border-bottom-0">
                <div className="modal d-block pos-static">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content modal-content-demo">
                      <div className="modal-header">
                        <h6 className="modal-title">Message Preview</h6>
                        <button aria-label="Close" className="btn-close" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                      </div>
                      <div className="modal-body">
                        <h6>Why We Use Electoral College, Not Popular Vote</h6>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                          of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                      </div>
                      <div className="modal-footer">
                        <button className="btn btn-primary">Save changes</button> <button className="btn btn-light">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- pd-y-50 --> */}
              <div className="text-center py-4 bg-light border">

                <Button variant="primary" onClick={viewDemoShow}>
                  View Live Demo
                </Button>

                <Modal
                  show={basicShow}
                  onHide={viewDemoClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header >
                    <Modal.Title>Message Preview</Modal.Title>
                    <span className="d-flex ms-auto" onClick={viewDemoClose}><i className='fe fe-x ms-auto' ></i></span>
                  </Modal.Header>
                  <Modal.Body>
                    Why We Use Electoral College, Not Popular Vote<br /><br />It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary">Save Changes</Button>
                    <Button variant="light" onClick={viewDemoClose}>
                      Close
                    </Button>

                  </Modal.Footer>
                </Modal>
              </div>
              {/* <!-- pd-y-30 --> */}
              <Collapse in={basic} className="mt-2">
                <pre>
                  <code>
                    {`
export function BasicModal() {
  const [show, setShow] = useState(false);

  const viewDemoClose = () => setShow(false);
  const viewDemoShow = () => setShow(true);

  return (
      <>
          <Button variant="primary" onClick={viewDemoShow}>
              View Live Demo
          </Button>

          <Modal
              show={show}
              onHide={viewDemoClose}
              backdrop="static"
              keyboard={false}
          >
              <Modal.Header >
                  <Modal.Title>Message Preview</Modal.Title>
                  <span className="d-flex ms-auto" onClick={viewDemoClose}><i className='fe fe-x ms-auto' ></i></span>
              </Modal.Header>
              <Modal.Body>
                  Why We Use Electoral College, Not Popular Vote<br /><br />It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="primary">Save Changes</Button>
                  <Button variant="light" onClick={viewDemoClose}>
                      Close
                  </Button>

              </Modal.Footer>
          </Modal>
      </>
  );
}

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          {/* <!--/div--> */}
          {/* <!--div--> */}
          <Card id="modal3">
            <Card.Header className="border-bottom-0 d-sm-flex d-block">
              <Card.Title className='mb-3 mb-sm-0'>
                Success Alert Messages
              </Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSuccess(!Success)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border border-bottom-0">
                <div className="modal d-block pos-static">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-body text-center p-4 pb-5">
                        <button aria-label="Close" className="btn-close position-absolute" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                        <i className="icon icon-check fs-70 text-success lh-1 my-4 d-inline-block"></i>
                        <h4 className="text-success mb-4">Congratulations!</h4>
                        <p className="mb-4 mx-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p><button className="btn btn-success pd-x-25">Continue</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- modal-wrapper-demo --> */}
              <div className="text-center py-4 bg-light border">

                <Button variant="primary" onClick={viewDemoShow2}>
                  View Live Demo
                </Button>

                <Modal
                  show={successShow}
                  onHide={viewDemoClose2}
                  backdrop="static"
                >
                  <Modal.Header>
                    <span className="d-flex ms-auto" onClick={viewDemoClose2}><i className='fe fe-x ms-auto' ></i></span>
                  </Modal.Header>
                  <Modal.Body className="text-center p-4 pb-5" >
                    <i className="icon icon-check fs-70 text-success lh-1 my-4 d-inline-block"></i>
                    <h4 className="text-success mb-4">Congratulations!</h4>
                    <p className="mb-4 mx-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    <Button variant="success" onClick={viewDemoClose2}>
                      Continue
                    </Button>
                  </Modal.Body>

                </Modal>
              </div>
              {/* <!-- modal-footer-demo --> */}
              <Collapse in={Success} className="mt-2">
                <pre>
                  <code>
                    {`
export function SuccessAlert() {
  const [show, setShow] = useState(false);

  const viewDemoClose = () => setShow(false);
  const viewDemoShow = () => setShow(true);

  return (
      <>
          <Button variant="primary" onClick={viewDemoShow}>
              View Live Demo
          </Button>

          <Modal
              show={show}
              onHide={viewDemoClose}
              backdrop="static"
          >
              <Modal.Header>
              <span className="d-flex ms-auto" onClick={viewDemoClose}><i className='fe fe-x ms-auto' ></i></span>
              </Modal.Header>
              <Modal.Body className="text-center p-4 pb-5" >
                  <i className="icon icon-check fs-70 text-success lh-1 my-4 d-inline-block"></i>
                  <h4 className="text-success mb-4">Congratulations!</h4>
                  <p className="mb-4 mx-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                  <Button variant="success" onClick={viewDemoClose}>
                      Continue
                  </Button>
              </Modal.Body>

          </Modal>
      </>
  );
}
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          {/* <!--/div--> */}
          {/* <!--div--> */}
          <Card id="modal4">
            <Card.Header className="border-bottom-0 d-sm-flex d-block">
              <Card.Title className='mb-3 mb-sm-0'>
                Warning Alert Messages
              </Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setWarning(!Warning)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border border-bottom-0 mg-t-20">
                <div className="modal d-block pos-static">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-body text-center p-4 pb-5">
                        <button aria-label="Close" className="btn-close position-absolute" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                        <i className="icon icon-close fs-70 text-danger lh-1 my-4 d-inline-block"></i>
                        <h4 className="text-danger mb-20">Error: Cannot process your entry!</h4>
                        <p className="mb-4 mx-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p><button aria-label="Close" className="btn btn-danger pd-x-25">Continue</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- modal-wrapper-demo --> */}
              <div className="text-center py-4 bg-light border">

                <Button variant="primary" onClick={viewDemoShow3}>
                  View Live Demo
                </Button>

                <Modal
                  show={warningShow}
                  onHide={viewDemoClose3}
                  backdrop="static"

                >
                  <Modal.Header >
                    <span className="d-flex ms-auto" onClick={viewDemoClose3}><i className='fe fe-x ms-auto' ></i></span>
                  </Modal.Header>
                  <Modal.Body className="text-center p-4 pb-5" >
                    <i className="icon icon-close fs-70 text-danger lh-1 my-4 d-inline-block"></i>
                    <h4 className="text-danger mb-20">Error: Cannot process your entry!</h4>
                    <p className="mb-4 mx-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    <Button variant="danger" onClick={viewDemoClose3}>
                      Continue
                    </Button>
                  </Modal.Body>

                </Modal>
              </div>
              {/* <!-- modal-footer-demo --> */}
              <Collapse in={Warning} className="mt-2">
                <pre>
                  <code>
                    {`
export function WarningAlert() {
  const [show, setShow] = useState(false);

  const viewDemoClose = () => setShow(false);
  const viewDemoShow = () => setShow(true);

  return (
      <>
          <Button variant="primary" onClick={viewDemoShow}>
              View Live Demo
          </Button>

          <Modal
              show={show}
              onHide={viewDemoClose}
              backdrop="static"

          >
              <Modal.Header >
              <span className="d-flex ms-auto" onClick={viewDemoClose}><i className='fe fe-x ms-auto' ></i></span>
              </Modal.Header>
              <Modal.Body className="text-center p-4 pb-5" >
                  <i className="icon icon-close fs-70 text-danger lh-1 my-4 d-inline-block"></i>
                  <h4 className="text-danger mb-20">Error: Cannot process your entry!</h4>
                  <p className="mb-4 mx-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                  <Button variant="danger" onClick={viewDemoClose}>
                      Continue
                  </Button>
              </Modal.Body>

          </Modal>
      </>
  );
}
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          {/* <!--/div--> */}
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </div>

  )
};

export default ModalS;

import React, { useState } from 'react';
import { Card, Row, Col, Collapse, Form, Button, Dropdown, Offcanvas } from 'react-bootstrap';
import styles from './OffCanvas.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';

const OffCanvas = () => {

  const [Basic, setBasic] = useState(false);
  const [BackDrop, setBackDrop] = useState(false);
  const [placement, setplacement] = useState(false);


  // Default link button OPEN 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);


  // BackDrop offcanvas

  const options = [
    {
      name: 'Enable body scrolling',
      scroll: true,
      backdrop: false,

    },
    {
      name: 'Enable backdrop (default)',
      scroll: false,
      backdrop: true,

    },
    {
      name: 'Enable both scrolling & backdrop',
      scroll: true,
      backdrop: true,

    },
  ];

  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
      <>
        <Button variant="primary" onClick={toggleShow} className="me-2">
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header>
            <Offcanvas.Title><b>Colored with scrolling</b></Offcanvas.Title>
            <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto'></i></span>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Try scrolling the rest of the page to see this option in action.<br /><br />
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }


  // Placement Offcanvas

  function OffCanvasplacement({ name, ...props }) {
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow2(false);
    const handleShow = () => setShow2(true);

    return (
      <>
        <Button variant="primary" onClick={handleShow} className="me-2">
          {name}
        </Button>
        <Offcanvas show={show2} onHide={handleClose} {...props}>
          <Offcanvas.Header>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto'></i></span>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  return (

    <div className={styles.OffCanvas}>
      <PageHeader titles="Offcanvas" active="Offcanvas" items={['Apps']} />

      {/* <!-- Row --> */}
      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Default Offcanvas</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBasic(!Basic)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                {/* <Defaultlink /> */}
                <Button variant="primary" onClick={handleShow}>
                  Link with href
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto'></i></span>
                  </Offcanvas.Header>

                  <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                    <Dropdown className="mt-5">
                      <Dropdown.Toggle>
                        Dropdown button
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventkey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventkey="2">Another Action</Dropdown.Item>
                        <Dropdown.Item eventkey="3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Offcanvas.Body>
                </Offcanvas>


                <Button variant="primary" onClick={handleShow1}>
                  Button with data-bs-target
                </Button>

                <Offcanvas show={show1} onHide={handleClose1}>
                  <Offcanvas.Header>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    <span className="d-flex ms-auto" onClick={handleClose1}><i className='fe fe-x ms-auto'></i></span>
                  </Offcanvas.Header>

                  <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                    <Dropdown className="mt-5">
                      <Dropdown.Toggle>
                        Dropdown button
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventkey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventkey="2">Another Action</Dropdown.Item>
                        <Dropdown.Item eventkey="3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
              <Collapse in={Basic} className="mt-2">
                <pre>
                  <code>
                    {`
 export function Defaultlink() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Link with href
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto'></i></span>
        </Offcanvas.Header>

        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
          <Dropdown className="mt-5">
            <Dropdown.Toggle>
              Dropdown button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventkey="1">Action</Dropdown.Item>
              <Dropdown.Item eventkey="2">Another Action</Dropdown.Item>
              <Dropdown.Item eventkey="3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export function Databutton() {
  const [show, setShow] = useState(false);

  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow1}>
        Button with data-bs-target
      </Button>

      <Offcanvas show={show} onHide={handleClose1}>
        <Offcanvas.Header>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          <span className="d-flex ms-auto" onClick={handleClose1}><i className='fe fe-x ms-auto'></i></span>
        </Offcanvas.Header>

        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
          <Dropdown className="mt-5">
            <Dropdown.Toggle>
              Dropdown button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventkey="1">Action</Dropdown.Item>
              <Dropdown.Item eventkey="2">Another Action</Dropdown.Item>
              <Dropdown.Item eventkey="3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Offcanvas.Body>
      </Offcanvas>
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
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>BackDrop Offcanvas</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBackDrop(!BackDrop)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="btn-list">

                {options.map((props, idx) => (
                  <OffCanvasExample key={idx} {...props} />
                ))}
              </div>
              <Collapse in={BackDrop} className="mt-2">
                <pre>
                  <code>
                    {`
export function Backdrop() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
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
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Placement Offcanvas</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setplacement(!placement)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                {['top', 'end', 'bottom'].map((placement, idx) => (
                  <OffCanvasplacement key={idx} placement={placement} name={`Toggle ${placement} Offcanvas `} />
                ))}
              </div>
              <Collapse in={placement} className="mt-2">
                <pre>
                  <code>
                    {`
export function Placementbutton() {
  return (
    <>
      {['top', 'end', 'bottom'].map((placement, idx) => (
        <OffCanvasplacement key={idx} placement={placement} name={Toggle {placement} Offcanvas } />
      ))}
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
    </div>
  )
};

export default OffCanvas;

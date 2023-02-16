import React, { useState } from 'react';
import { Card, Row, Col, Form, Collapse, Toast, Button, ToastHeader } from 'react-bootstrap';
import styles from './Toast.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';

const Toasts = () => {

  // BasicToast

  const [basicShow, setbasicShow] = useState(true);
  const togglebasicShow = () => setbasicShow(!basicShow);

  // Colour Toasts

  const [colourShow, setcolourShow] = useState(true);
  const togglecolourShow = () => setcolourShow(!colourShow);
  const [colourShow2, setcolourShow2] = useState(true);
  const togglecolourShow2 = () => setcolourShow2(!colourShow2);
  const [colourShow3, setcolourShow3] = useState(true);
  const togglecolourShow3 = () => setcolourShow3(!colourShow3);
  const [colourShow4, setcolourShow4] = useState(true);
  const togglecolourShow4 = () => setcolourShow4(!colourShow4);

  // Translucent Toasts
  const [TranslucentShow, setTranslucentShow] = useState(true);
  const toggleTranslucent = () => setTranslucentShow(!TranslucentShow);

  // Stacking Toasts
  const [stackingShow, setstackingShowShow] = useState(true);
  const togglestacking = () => setstackingShowShow(!stackingShow);
  const [stackingShow1, setstackingShowShow1] = useState(true);
  const togglestacking1 = () => setstackingShowShow1(!stackingShow1);

  // Custom content Toasts

  const [contentShow, setcontentShow] = useState(true);
  const togglecontentShow = () => setcontentShow(!contentShow);

  // CustomToasts 

  const [CustomShow, setCustomShow] = useState(true);
  const toggleCustom = () => setCustomShow(!CustomShow);

  // Placement Toasts

  const [placementShow, setplacementShow] = useState(true);
  const toggleplacementShow = () => setplacementShow(!placementShow);

  const [Basic, setBasic] = useState(false);
  const [Translucent, setTranslucent] = useState(false);
  const [Custom, setCustom] = useState(false);
  const [Color, setColor] = useState(false);
  const [Stacking, setStacking] = useState(false);
  const [Placement, setPlacement] = useState(false);

  return (

    <div className={styles.Toast}>
      <PageHeader titles="Toasts" active="Toasts" items={['Componets']} />
      {/* <!-- ROW-1 OPEN --> */}
      <Row>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>

              <Card.Title>Basic Toasts</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBasic(!Basic)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="p-4">
                <Row>

                  <Toast show={basicShow} onClose={togglebasicShow}>
                    <Toast.Header>
                      <img src={require("../../../assets/images/brand/icon-dark.png")} alt="" className="me-2" height="18" />
                      <strong className="me-auto">Bootstrap</strong>
                      <small>11 mins ago</small>

                    </Toast.Header>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                  </Toast>
                  <Col md={12} className="mt-2 mt-md-0">
                    <Button variant="primary" className="mt-5" onClick={togglebasicShow}>Show live toast</Button>
                  </Col>

                </Row>
              </div>
              <Collapse in={Basic} className="mt-2">
                <pre>
                  <code>
                    {`
export function Basictoast() {
  const [showA, setShowA] = useState(true);

  const toggleShow = () => setShowA(!showA);
  
  return (
      <div>
          <Toast show={showA} onClose={toggleShow}>
              <Toast.Header>
              <img src={require("../../assets/images/brand/icon-dark")} alt="" className="me-2" height="18"/>
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                  
              </Toast.Header>
              <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
          <Col md={12} className="mt-2 mt-md-0">
                <Button  variant="primary" className="mt-5" onClick={toggleShow}>Show live toast</Button>
              </Col>
      </div>
  );
}
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>

              <Card.Title>Translucent Toasts</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setTranslucent(!Translucent)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border">

                <Toast show={TranslucentShow} onClose={toggleTranslucent}>
                  <Toast.Header>
                    <img src={require("../../../assets/images/brand/icon-dark.png")} alt="" className="me-2" height="18" />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                </Toast>
              </div>
              <Collapse in={Translucent} className="mt-2">
                <pre>
                  <code>
                    {`
  export function Translucenttoast() {
    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);

    return (
        <div>
            <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                <img src={require("../../assets/images/brand/icon-dark")} alt="" className="me-2" height="18"/>
  <strong className="me-auto">Bootstrap</strong>
  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>
        </div>
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
      {/* <!-- ROW-1 CLOSED --> */}

      {/* <!-- ROW-2 OPEN  --> */}
      <Row>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>

              <Card.Title>Custom content Toasts</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setCustom(!Custom)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={12} xl={6} className="mt-1">
                  <Toast show={contentShow} onClose={togglecontentShow}>
                    <Toast.Header className="border-bottom-0">
                      <strong className="me-auto">Hello, world! This is a toast message.</strong>
                    </Toast.Header>
                  </Toast>
                </Col>
                <Col md={12} xl={6} className="mt-1">
                  <Toast show={CustomShow} onClose={toggleCustom}>
                    <ToastHeader className='justify-content-between'>
                      Hello, world! This is a toast message.
                    </ToastHeader>
                    <Toast.Body className="mt-2 pt-2">
                      <Button size="sm" variant="primary me-1">Take Action</Button>
                      <Button size="sm" variant="secondary" onClick={() => setcontentShow(false)}>
                        Close
                      </Button>
                    </Toast.Body>
                  </Toast>
                </Col>
              </Row>
              <Collapse in={Custom} className="mt-2">
                <pre>
                  <code>
                    {`

export function CustomContenttoast() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
      <div>
          <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
                  <strong className="me-auto">Hello, world! This is a toast message.</strong>
              </Toast.Header>

          </Toast>
      </div>
  );
}

export function Customtoast() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  return (
      <div>
          <Toast show={showA} onClose={toggleShowA}>
              <ToastHeader className='justify-content-between'>
                  Hello, world! This is a toast message.
              </ToastHeader>
              <Toast.Body className="mt-2 pt-2">
                  <Button size="sm" variant="primary me-1">Take Action</Button>
                  <Button size="sm" variant="secondary" onClick={() => setShowA(false)}>
                      Close
                  </Button>
              </Toast.Body>
          </Toast>
      </div>
  );
}
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>

              <Card.Title>Color Toasts</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setColor(!Color)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <div className="toast align-items-center text-white bg-primary border-0 show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                    <div>

                      <Toast show={colourShow} onClose={togglecolourShow}>
                        <Toast.Header className="bg-primary text-white">
                          <strong className="me-auto">Hello, world! This is a toast message.</strong>
                        </Toast.Header>
                      </Toast>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mt-2 mt-md-0">
                  <div className="toast align-items-center text-white bg-secondary border-0 show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                    <div>
                      <Toast show={colourShow2} onClose={togglecolourShow2}>
                        <Toast.Header className="bg-secondary text-white">
                          <strong className="me-auto">Hello, world! This is a toast message.</strong>
                        </Toast.Header>
                      </Toast>

                    </div>
                  </div>
                </Col>
                <Col md={6} className="mt-2">
                  <div className="toast align-items-center text-white bg-success border-0 show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                    <div>

                      <Toast show={colourShow3} onClose={togglecolourShow3}>
                        <Toast.Header className="bg-success text-white">
                          <strong className="me-auto">Hello, world! This is a toast message.</strong>
                        </Toast.Header>
                      </Toast>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mt-2">
                  <div className="toast align-items-center text-white bg-danger border-0 show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                    <div>

                      <Toast show={colourShow3} onClose={togglecolourShow4}>
                        <Toast.Header className="bg-danger text-white">
                          <strong className="me-auto">Hello, world! This is a toast message.</strong>
                        </Toast.Header>
                      </Toast>
                    </div>
                  </div>
                </Col>
              </Row>
              <Collapse in={Color} className="mt-2">
                <pre>
                  <code>
                    {`
export function ColourAtoast() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
      <div>
          <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header className="bg-primary text-white">
                  <strong className="me-auto">Hello, world! This is a toast message.</strong>
              </Toast.Header>
          </Toast>
      </div>
  );
}

export function ColourBtoast() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
      <div>
          <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header className="bg-secondary text-white">
                  <strong className="me-auto">Hello, world! This is a toast message.</strong>
              </Toast.Header>
          </Toast>
      </div>
  );
}
export function ColourCtoast() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
      <div>
          <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header className="bg-success text-white">
                  <strong className="me-auto">Hello, world! This is a toast message.</strong>
              </Toast.Header>
          </Toast>
      </div>
  );
}
export function ColourDtoast() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
      <div>
          <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header className="bg-danger text-white">
                  <strong className="me-auto">Hello, world! This is a toast message.</strong>
              </Toast.Header>
          </Toast>
      </div>
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
      {/* <!-- ROW-2 CLOSED --> */}

      {/* <!-- ROW-3 OPEN --> */}
      <Row>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>

              <Card.Title>Stacking Toasts</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setStacking(!Stacking)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border">
                  <Toast className='mb-5' show={stackingShow} onClose={togglestacking} >
                    <Toast.Header>
                      <img src={require("../../../assets/images/brand/icon-dark.png")} alt="" className="me-2" height="18" />
                      <strong className="me-auto">Bootstrap</strong>
                      <small className="text-muted">just now</small>
                    </Toast.Header>
                    <Toast.Body>See? Just like this.</Toast.Body>
                  </Toast>

                  <Toast className='mb-3' show={stackingShow1} onClose={togglestacking1}>
                    <Toast.Header>
                      <img src={require("../../../assets/images/brand/icon-dark.png")} alt="" className="me-2" height="18" />
                      <strong className="me-auto">Bootstrap</strong>
                      <small className="text-muted">2 seconds ago</small>
                    </Toast.Header>
                    <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                  </Toast>
              </div>
            </Card.Body>
            <Collapse in={Stacking} className="mt-2">
                <pre>
                  <code>
                    {`
export function StackingAtoast() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
      <div>
          <Toast show={showA} onClose={toggleShowA} >
              <Toast.Header>
              <img src={require("../../assets/images/brand/icon-dark")} alt="" className="me-2" height="18"/>
                  <strong className="me-auto">Bootstrap</strong>
                  <small className="text-muted">just now</small>
              </Toast.Header>
              <Toast.Body>See? Just like this.</Toast.Body>
          </Toast>
      </div>
  );
}
export function StackingBtoast() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
      <div>
          <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
              <img src={require("../../assets/images/brand/icon-dark")} alt="" className="me-2" height="18"/>
                  <strong className="me-auto">Bootstrap</strong>
                  <small className="text-muted">2 seconds ago</small>
              </Toast.Header>
              <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
          </Toast>
      </div>
  );
}
`}
                  </code>
                </pre>
              </Collapse>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>

              <Card.Title className='w-100 w-sm-auto'>Placement Toast</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setPlacement(!Placement)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border">
                <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center w-100 h-180">

                  <Toast className='w-100' show={placementShow} onClose={toggleplacementShow}>
                    <Toast.Header>
                      <img src={require("../../../assets/images/brand/icon-dark.png")} alt="" className="me-2" height="18" />
                      <strong className="me-auto">Bootstrap</strong>
                      <small className="text-muted">11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                  </Toast>
                </div>
              </div>
              <Collapse in={Placement} className="mt-2">
                <pre>
                  <code>
                    {`
export function Placementtoast() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
      <div>
          <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
              <img src={require("../../assets/images/brand/icon-dark")} alt="" className="me-2" height="18"/>
                  <strong className="me-auto">Bootstrap</strong>
                  <small className="text-muted">11 mins ago</small>
              </Toast.Header>
              <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
      </div>
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
      {/* <!-- ROW-3 CLOSED --> */}
    </div>
  )
};

export default Toasts;

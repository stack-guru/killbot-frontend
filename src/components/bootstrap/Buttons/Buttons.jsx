import React, { useState } from 'react';
import { Button, ButtonGroup, Card, Col, Dropdown, Row, Form, Collapse, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './Buttons.module.scss';

const Buttons = () => {

  const [Default, setDefault] = useState(false);
  const [Disabled, setDisabled] = useState(false);
  const [Rounded, setRounded] = useState(false);
  const [Outline, setOutline] = useState(false);
  const [light, setlight] = useState(false);
  const [icon, seticon] = useState(false);
  const [Size, setSize] = useState(false);
  const [Block, setBlock] = useState(false);
  const [Iconbtn, setIconbtn] = useState(false);
  const [Social, setSocial] = useState(false);
  const [Tag, setTag] = useState(false);
  const [Toggle, setToggle] = useState(false);
  const [Color, setColor] = useState(false);
  const [SocialBtn, setSocialBtn] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Drop, setDrop] = useState(false);
  const [Btngrp, setBtngrp] = useState(false);
  const [Toolbar, setToolbar] = useState(false);
  const [OutBtnGrp, setOutBtnGrp] = useState(false);
  const [Minwidth, setMinwidth] = useState(false);
  const [CheckBox, setCheckBox] = useState(false);
  const [Radio, setRadio] = useState(false);
  const [BtngrpSize, setBtngrpSize] = useState(false);
  const [VerticalBtngrp, setVerticalBtngrp] = useState(false);


  // Checkbox Button Group START
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (

    <div className={styles.Buttons}>
      <PageHeader titles="Buttons" active="Buttons" items={['Componets']} />
      {/* <!-- ROW-1 OPEN --> */}
      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Default Button</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setDefault(!Default)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use any of the available <code className="highlighter-rouge">.btn btn-</code> classes to quickly create a styled button.</p>
                <div className="example">
                  <div className="btn-list">
                    <Link to="#" className="btn btn-default">Default</Link>
                    <Link to="#" className="btn btn-primary">Primary</Link>
                    <Link to="#" className="btn btn-secondary">Secondary</Link>
                    <Link to="#" className="btn btn-success">Success</Link>
                    <Link to="#" className="btn btn-info">Info</Link>
                    <Link to="#" className="btn btn-warning">Warning</Link>
                    <Link to="#" className="btn btn-danger">Danger</Link>
                    <Link to="#" className="btn btn-light btn-link">Link</Link>
                  </div>
                </div>
              </div>
              <Collapse in={Default} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="btn-list">
 <Link to="#" className="btn btn-default">Default</Link>
 <Link to="#" className="btn btn-primary">Primary</Link>
 <Link to="#" className="btn btn-secondary">Secondary</Link>
 <Link to="#" className="btn btn-success">Success</Link>
 <Link to="#" className="btn btn-info">Info</Link>
 <Link to="#" className="btn btn-warning">Warning</Link>
 <Link to="#" className="btn btn-danger">Danger</Link>
 <Link to="#" className="btn btn-light btn-link">Link</Link>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Disable Default Button</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setDisabled(!Disabled)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use any of the available <code className="highlighter-rouge">.btn btn-</code> classes you must add the <code className="highlighter-rouge">.disabled</code> className to make it visually appear disabled.</p>
                <div className="example">
                  <div className="btn-list">
                    <Link to="#" className="btn btn-default disabled">Default</Link>
                    <Link to="#" className="btn btn-primary disabled">Primary</Link>
                    <Link to="#" className="btn btn-secondary disabled">Secondary</Link>
                    <Link to="#" className="btn btn-success disabled">Success</Link>
                    <Link to="#" className="btn btn-info disabled">Info</Link>
                    <Link to="#" className="btn btn-warning disabled">Warning</Link>
                    <Link to="#" className="btn btn-danger disabled">Danger</Link>
                    <Link to="#" className="btn btn-light btn-link disabled">Link</Link>
                  </div>
                </div>
              </div>
              <Collapse in={Disabled} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="btn-list">
 <Link to="#" className="btn btn-default disabled">Default</Link>
 <Link to="#" className="btn btn-primary disabled">Primary</Link>
 <Link to="#" className="btn btn-secondary disabled">Secondary</Link>
 <Link to="#" className="btn btn-success disabled">Success</Link>
 <Link to="#" className="btn btn-info disabled">Info</Link>
 <Link to="#" className="btn btn-warning disabled">Warning</Link>
 <Link to="#" className="btn btn-danger disabled">Danger</Link>
 <Link to="#" className="btn btn-light btn-link disabled">Link</Link>
</div>

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!--ROW-1 CLOSED--> */}

      {/* <!-- ROW-2 OPEN --> */}
      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Rounded Button</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setRounded(!Rounded)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use any of the available <code className="highlighter-rouge">.btn-pill</code> classes to quickly create a styled button.</p>
                <div className="example">
                  <div className="btn-list">
                    <Link to="#" className="btn btn-default btn-pill">Default</Link>
                    <Link to="#" className="btn btn-primary btn-pill">Primary</Link>
                    <Link to="#" className="btn btn-secondary btn-pill">Secondary</Link>
                    <Link to="#" className="btn btn-success btn-pill">Success</Link>
                    <Link to="#" className="btn btn-info btn-pill">Info</Link>
                    <Link to="#" className="btn btn-warning btn-pill">Warning</Link>
                    <Link to="#" className="btn btn-danger btn-pill">Danger</Link>
                  </div>
                </div>
              </div>
              <Collapse in={Rounded} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="btn-list">
 <Link to="#" className="btn btn-default btn-pill">Default</Link>
 <Link to="#" className="btn btn-primary btn-pill">Primary</Link>
 <Link to="#" className="btn btn-secondary btn-pill">Secondary</Link>
 <Link to="#" className="btn btn-success btn-pill">Success</Link>
 <Link to="#" className="btn btn-info btn-pill">Info</Link>
 <Link to="#" className="btn btn-warning btn-pill">Warning</Link>
 <Link to="#" className="btn btn-danger btn-pill">Danger</Link>
</div>

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Outline Button</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setOutline(!Outline)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use any of the available <code className="highlighter-rouge">.btn-outline-</code> classes to quickly create a styled button.</p>
                <div className="example">
                  <div className="btn-list">
                    <Link to="#" className="btn btn-outline-default">Default</Link>
                    <Link to="#" className="btn btn-outline-primary">Primary</Link>
                    <Link to="#" className="btn btn-outline-secondary">Secondary</Link>
                    <Link to="#" className="btn btn-outline-success">Success</Link>
                    <Link to="#" className="btn btn-outline-info">Info</Link>
                    <Link to="#" className="btn btn-outline-warning">Warning</Link>
                    <Link to="#" className="btn btn-outline-danger">Danger</Link>
                  </div>
                </div>
              </div>
              <Collapse in={Outline} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="btn-list">
 <Link to="#" className="btn btn-outline-default">Default</Link>
 <Link to="#" className="btn btn-outline-primary">Primary</Link>
 <Link to="#" className="btn btn-outline-secondary">Secondary</Link>
 <Link to="#" className="btn btn-outline-success">Success</Link>
 <Link to="#" className="btn btn-outline-info">Info</Link>
 <Link to="#" className="btn btn-outline-warning">Warning</Link>
 <Link to="#" className="btn btn-outline-danger">Danger</Link>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-2 CLOSED --> */}

      {/* <!-- ROW-3 OPEN --> */}
      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Light Button</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setlight(!light)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use any of the available <code className="highlighter-rouge">.btn-light-</code> classes to quickly create a styled button.</p>
                <div className="example">
                  <div className="btn-list">
                    <Link to="#" className="btn btn-default-light">Default</Link>
                    <Link to="#" className="btn btn-primary-light ">Primary</Link>
                    <Link to="#" className="btn btn-secondary-light ">Secondary</Link>
                    <Link to="#" className="btn btn-success-light ">Success</Link>
                    <Link to="#" className="btn btn-info-light ">Info</Link>
                    <Link to="#" className="btn btn-warning-light ">Warning</Link>
                    <Link to="#" className="btn btn-danger-light ">Danger</Link>
                  </div>
                </div>
              </div>
              <Collapse in={light} className="mt-2">
                <pre>
                  <code>
                    {`
  <div className="btn-list">
  <Link to="#" className="btn btn-default-light">Default</Link>
  <Link to="#" className="btn btn-primary-light ">Primary</Link>
  <Link to="#" className="btn btn-secondary-light ">Secondary</Link>
  <Link to="#" className="btn btn-success-light ">Success</Link>
  <Link to="#" className="btn btn-info-light ">Info</Link>
  <Link to="#" className="btn btn-warning-light ">Warning</Link>
  <Link to="#" className="btn btn-danger-light ">Danger</Link>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Button with icon</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => seticon(!icon)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Basic buttons are traditional buttons with borders color opitons.</p>
                <div className="example">
                  <div className="btn-list btn-list-icon">
                    <Button variant='dark'><i className="fe fe-upload me-2"></i>Upload</Button>
                    <Button variant='warning'><i className="fe fe-heart me-2"></i>I like</Button>
                    <Button variant='success'><i className="fe fe-check me-2"></i>I agree</Button>
                    <Button variant='primary'><i className="fe fe-plus me-2"></i>More</Button>
                    <Button variant='danger'><i className="fe fe-link me-2"></i>Link</Button>
                    <Button variant='info'><i className="fe fe-message-circle me-2"></i>Comment</Button>
                  </div>
                </div>
              </div>
              <Collapse in={icon} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="btn-list btn-list-icon">
 <Button variant='dark'><i className="fe fe-upload me-2"></i>Upload</Button>
 <Button variant='warning'><i className="fe fe-heart me-2"></i>I like</Button>
 <Button variant='success'><i className="fe fe-check me-2"></i>I agree</Button>
 <Button variant='primary'><i className="fe fe-plus me-2"></i>More</Button>
 <Button variant='danger'><i className="fe fe-link me-2"></i>Link</Button>
 <Button variant='info'><i className="fe fe-message-circle me-2"></i>Comment</Button>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-3 CLOSED --> */}

      {/* <!-- ROW-4 OPEN --> */}
      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Button size</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSize(!Size)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Add <code className="highlighter-rouge">.btn-lg</code> or <code className="highlighter-rouge">.btn-sm</code> for additional sizes.</p>
                <div className="example">
                  <div className="btn-list">
                    <Row cols={4}>
                      <Col className="mb-2">
                        <div className="btn-list">
                          <Button className="btn-sm mb-1" variant='primary'>Small button</Button>
                          <Button className="btn-sm mb-1" variant='primary'>Small button</Button>
                        </div>
                      </Col>
                      <Col className="mb-2">
                        <Button className="mb-1 me-1" variant='secondary'>Default button</Button>
                        <Button className="mb-1" variant='secondary'>Default button</Button>
                      </Col>
                      <Col className="mb-2">
                        <Button className="btn-lg mb-1 me-1" variant='success'>Large button</Button>
                        <Button className="btn-lg mb-1" variant='success'>Large button</Button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
              <Collapse in={Size} className="mt-2">
                <pre>
                  <code>
                    {`
  <div className="btn-list">
  <Row cols={4}>
    <Col className="mb-2">
      <div className="btn-list">
        <Button className="btn-sm mb-1" variant='primary'>Small button</Button>
        <Button className="btn-sm mb-1" variant='primary'>Small button</Button>
      </div>
    </Col>
    <Col className="mb-2">
      <Button className="mb-1" variant='secondary'>Default button</Button>
      <Button className="mb-1" variant='secondary'>Default button</Button>
    </Col>
    <Col className="mb-2">
      <Button className="btn-lg mb-1 me-1" variant='success'>Large button</Button>
      <Button className="btn-lg mb-1" variant='success'>Large button</Button>
    </Col>
  </Row>
</div>

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Block Button</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBlock(!Block)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Add <code className="highlighter-rouge">.d-grid</code> or <code className="highlighter-rouge">.gap-2</code> for additional sizes.</p>
                <div className="example">
                  <div className="d-grid gap-2">
                    <Button className="mb-1" variant='secondary-light'>Block button</Button>
                    <Button className="mb-1" variant='danger-light'>Block button</Button>
                  </div>
                </div>
              </div>
              <Collapse in={Block} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="d-grid gap-2">
 <Button className="mb-1" variant='secondary-light'>Block button</Button>
 <Button className="mb-1" variant='danger-light'>Block button</Button>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-4 CLOSED --> */}

      {/* <!-- ROW-5 OPEN --> */}
      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Icon buttons</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setIconbtn(!Iconbtn)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Icon only button. Add <code className="highlighter-rouge">.btn-icon</code> classes to quickly create a styled button..</p>
                <div className="example">
                  <div className="btn-list">
                    <Button className="btn-icon" variant='primary'><i className="fe fe-activity"></i></Button>
                    <Button className="btn-icon" variant='github'><i className="fe fe-github"></i></Button>
                    <Button className="btn-icon" variant='success'><i className="fe fe-bell"></i></Button>
                    <Button className="btn-icon" variant='warning'><i className="fe fe-star"></i></Button>
                    <Button className="btn-icon" variant='danger'><i className="fe fe-trash"></i></Button>
                    <Button className="btn-icon" variant='purple'><i className="fe fe-mail"></i></Button>
                    <Button className="btn-icon" variant='secondary'><i className="fe fe-git-merge"></i></Button>
                  </div>
                </div>
              </div>
              <Collapse in={Iconbtn} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="btn-list">
 <Button className="btn-icon" variant='primary'><i className="fe fe-activity"></i></Button>
 <Button className="btn-icon" variant='github'><i className="fe fe-github"></i></Button>
 <Button className="btn-icon" variant='success'><i className="fe fe-bell"></i></Button>
 <Button className="btn-icon" variant='warning'><i className="fe fe-star"></i></Button>
 <Button className="btn-icon" variant='danger'><i className="fe fe-trash"></i></Button>
 <Button className="btn-icon" variant='purple'><i className="fe fe-mail"></i></Button>
 <Button className="btn-icon" variant='secondary'><i className="fe fe-git-merge"></i></Button>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Social buttons</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSocial(!Social)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>You can use only icons.</p>
                <div className="example">
                  <div className="btn-list">
                    <Button className="btn-icon" variant='facebook'><i className="fa fa-facebook"></i></Button>
                    <Button className="btn-icon" variant='twitter'><i className="fa fa-twitter"></i></Button>
                    <Button className="btn-icon" variant='google'><i className="fa fa-google"></i></Button>
                    <Button className="btn-icon" variant='youtube'><i className="fa fa-youtube"></i></Button>
                    <Button className="btn-icon" variant='vimeo'><i className="fa fa-vimeo"></i></Button>
                    <Button className="btn-icon" variant='dribbble'><i className="fa fa-dribbble"></i></Button>
                    <Button className="btn-icon" variant='github'><i className="fa fa-github"></i></Button>
                    <Button className="btn-icon" variant='instagram'><i className="fa fa-instagram"></i></Button>
                    <Button className="btn-icon" variant='pinterest'><i className="fa fa-pinterest"></i></Button>
                  </div>
                </div>
              </div>
              <Collapse in={Social} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="btn-list">
 <Button className="btn-icon" variant='facebook'><i className="fa fa-facebook"></i></Button>
 <Button className="btn-icon" variant='twitter'><i className="fa fa-twitter"></i></Button>
 <Button className="btn-icon" variant='google'><i className="fa fa-google"></i></Button>
 <Button className="btn-icon" variant='youtube'><i className="fa fa-youtube"></i></Button>
 <Button className="btn-icon" variant='vimeo'><i className="fa fa-vimeo"></i></Button>
 <Button className="btn-icon" variant='dribbble'><i className="fa fa-dribbble"></i></Button>
 <Button className="btn-icon" variant='github'><i className="fa fa-github"></i></Button>
 <Button className="btn-icon" variant='instagram'><i className="fa fa-instagram"></i></Button>
 <Button className="btn-icon" variant='pinterest'><i className="fa fa-pinterest"></i></Button>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-5 CLOSED --> */}

      {/* <!-- ROW-6 OPEN --> */}
      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Button Tags</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setTag(!Tag)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Add <code className="highlighter-rouge">.btn</code>, <code className="highlighter-rouge">&lt;input&gt;</code>, <code className="highlighter-rouge">&lt;a&gt;</code>classes to quickly create a styled button..</p>
                <div className="example">
                  <div className="btn-list">
                    <Link className="btn btn-primary" to="#" role="button">Link</Link>
                    <Button variant="primary" type="submit">Button</Button>
                    <input className="btn btn-primary" type="button" value="Input" />
                    <input className="btn btn-primary" type="submit" value="Submit" />
                    <input className="btn btn-primary" type="reset" value="Reset" />
                  </div>
                </div>
              </div>
              <Collapse in={Tag} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="btn-list">
 <Link className="btn btn-primary" to="#" role="button">Link</Link>
 <Button variant="primary" type="submit">Button</Button>
 <input className="btn btn-primary" type="button" value="Input" />
 <input className="btn btn-primary" type="submit" value="Submit" />
 <input className="btn btn-primary" type="reset" value="Reset" />
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Toggle buttons</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setToggle(!Toggle)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Add <code className="highlighter-rouge">data-bs-toggle="button"</code> to toggle a button <code className="highlighter-rouge">.active</code> className & required <code className="highlighter-rouge">aria-pressed="true"</code>.</p>
                <div className="example">
                  <div className="btn-list">
                    <Button variant="primary">Toggle button</Button>
                    <Button variant="primary" active>Active toggle button</Button>
                    <Button variant="primary" disabled >Disabled toggle button</Button>
                  </div>
                </div>
              </div>
              <Collapse in={Toggle} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="btn-list">
 <Button variant="primary">Toggle button</Button>
 <Button variant="primary" active>Active toggle button</Button>
 <Button variant="primary" disabled >Disabled toggle button</Button>
</div>

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-6 CLOSED --> */}

      {/* <!-- ROW-7 OPEN --> */}
      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Color variations</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setColor(!Color)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>The classic button, in different colors.</p>
                <div className="example">
                  <div className="btn-list">
                    <Link to="#" className="btn btn-blue">Blue</Link>
                    <Link to="#" className="btn btn-azure">Azure</Link>
                    <Link to="#" className="btn btn-indigo">Indigo</Link>
                    <Link to="#" className="btn btn-purple">Purple</Link>
                    <Link to="#" className="btn btn-pink">Pink</Link>
                    <Link to="#" className="btn btn-red">Red</Link>
                    <Link to="#" className="btn btn-orange">Orange</Link>
                    <Link to="#" className="btn btn-yellow">Yellow</Link>
                    <Link to="#" className="btn btn-lime">Lime</Link>
                    <Link to="#" className="btn btn-green">Green</Link>
                    <Link to="#" className="btn btn-teal">Teal</Link>
                    <Link to="#" className="btn btn-cyan">Cyan</Link>
                    <Link to="#" className="btn btn-gray">Gray</Link>
                    <Link to="#" className="btn btn-gray-dark">Dark gray</Link>
                  </div>
                </div>
              </div>
              <Collapse in={Color} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="btn-list">
 <Link to="#" className="btn btn-blue">Blue</Link>
 <Link to="#" className="btn btn-azure">Azure</Link>
 <Link to="#" className="btn btn-indigo">Indigo</Link>
 <Link to="#" className="btn btn-purple">Purple</Link>
 <Link to="#" className="btn btn-pink">Pink</Link>
 <Link to="#" className="btn btn-red">Red</Link>
 <Link to="#" className="btn btn-orange">Orange</Link>
 <Link to="#" className="btn btn-yellow">Yellow</Link>
 <Link to="#" className="btn btn-lime">Lime</Link>
 <Link to="#" className="btn btn-green">Green</Link>
 <Link to="#" className="btn btn-teal">Teal</Link>
 <Link to="#" className="btn btn-cyan">Cyan</Link>
 <Link to="#" className="btn btn-gray">Gray</Link>
 <Link to="#" className="btn btn-gray-dark">Dark gray</Link>
</div>

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Social buttons</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSocialBtn(!SocialBtn)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>The classic button, in different social classes.</p>
                <div className="example">
                  <div className="btn-list">
                    <Button variant="facebook"><i className="fa fa-facebook me-2"></i>Facebook</Button>
                    <Button variant="twitter"><i className="fa fa-twitter me-2"></i>Twitter</Button>
                    <Button variant="google"><i className="fa fa-google me-2"></i>Google</Button>
                    <Button variant="youtube"><i className="fa fa-youtube me-2"></i>Youtube</Button>
                    <Button variant="vimeo"><i className="fa fa-vimeo me-2"></i>Vimeo</Button>
                    <Button variant="dribbble"><i className="fa fa-dribbble me-2"></i>Dribble</Button>
                    <Button variant="github"><i className="fa fa-github me-2"></i>Github</Button>
                    <Button variant="instagram"><i className="fa fa-instagram me-2"></i>Instagram</Button>
                    <Button variant="pinterest"><i className="fa fa-pinterest me-2"></i>Pinterest</Button>
                    <Button variant="vk"><i className="fa fa-vk me-2"></i>VKontakte</Button>
                    <Button variant="rss"><i className="fa fa-rss me-2"></i>RSS</Button>
                    <Button variant="flickr"><i className="fa fa-flickr me-2"></i>Flickr</Button>
                  </div>
                </div>
              </div>
              <Collapse in={SocialBtn} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="btn-list">
 <Button variant="facebook"><i className="fa fa-facebook me-2"></i>Facebook</Button>
 <Button variant="twitter"><i className="fa fa-twitter me-2"></i>Twitter</Button>
 <Button variant="google"><i className="fa fa-google me-2"></i>Google</Button>
 <Button variant="youtube"><i className="fa fa-youtube me-2"></i>Youtube</Button>
 <Button variant="vimeo"><i className="fa fa-vimeo me-2"></i>Vimeo</Button>
 <Button variant="dribbble"><i className="fa fa-dribbble me-2"></i>Dribble</Button>
 <Button variant="github"><i className="fa fa-github me-2"></i>Github</Button>
 <Button variant="instagram"><i className="fa fa-instagram me-2"></i>Instagram</Button>
 <Button variant="pinterest"><i className="fa fa-pinterest me-2"></i>Pinterest</Button>
 <Button variant="vk"><i className="fa fa-vk me-2"></i>VKontakte</Button>
 <Button variant="rss"><i className="fa fa-rss me-2"></i>RSS</Button>
 <Button variant="flickr"><i className="fa fa-flickr me-2"></i>Flickr</Button>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-7 CLOSED --> */}

      {/* <!-- ROW-8 OPEN --> */}
      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Loading button</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setLoading(!Loading)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Add <code className="highlighter-rouge">.btn-loading</code> to use a loading state on a button. The width of the button depends on the length of the text inside Since the loading spinner is implemented using the element.</p>
                <div className="example">
                  <div className="btn-list">
                    <Button className="btn-loading" variant='primary'>Button text</Button><br />
                    <Button className="btn-loading btn-icon" variant='success'><i className="fe fe-check"></i></Button>
                    <Button className="btn-loading btn-sm" variant='warning'>Button text</Button><br />
                    <Button className="btn-loading btn-lg" variant='danger'>Button text</Button>
                    <Button className="btn-loading d-grid" variant='info'>Button text</Button>
                  </div>
                </div>
              </div>
              <Collapse in={Loading} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="btn-list">
 <Button className="btn-loading" variant='primary'>Button text</Button><br />
 <Button className="btn-loading btn-icon" variant='success'><i className="fe fe-check"></i></Button>
 <Button className="btn-loading btn-sm" variant='warning'>Button text</Button><br />
 <Button className="btn-loading btn-lg" variant='danger'>Button text</Button>
 <Button className="btn-loading d-grid" variant='info'>Button text</Button>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Button dropdown</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setDrop(!Drop)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Wrap the dropdown’s toggle using different colors and icons implemented in different dropdowns styles (your button or link) and the dropdown menu within <code className="highlighter-rouge">.dropdown</code>, or another
                  element that declares <code className="highlighter-rouge">position: relative;</code>. Dropdowns can be triggered from <code className="highlighter-rouge">&lt;a&gt;</code> or <code className="highlighter-rouge">&lt;button&gt;</code>                                           elements to better fit your potential needs.</p>
                <div className="example">
                  <div className="btn-list">

                    <Dropdown>
                      <Dropdown.Toggle variant="secondary">
                        <i className="fe fe-calendar"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">Dropdown Link</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Dropdown Link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                      <Dropdown.Toggle variant="info">
                        <i className="fe fe-calendar me-2"></i>Show calendar
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">Dropdown Link</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Dropdown Link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                      <Dropdown.Toggle variant="danger">
                        Show calendar
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">Dropdown Link</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Dropdown Link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
              <Collapse in={Drop} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="btn-list">

 <Dropdown>
   <Dropdown.Toggle variant="secondary">
     <i className="fe fe-calendar"></i>
   </Dropdown.Toggle>
   <Dropdown.Menu>
     <Dropdown.Item eventKey="1">Dropdown Link</Dropdown.Item>
     <Dropdown.Item eventKey="2">Dropdown Link</Dropdown.Item>
   </Dropdown.Menu>
 </Dropdown>

 <Dropdown>
   <Dropdown.Toggle variant="info">
     <i className="fe fe-calendar me-2"></i>Show calendar
   </Dropdown.Toggle>
   <Dropdown.Menu>
     <Dropdown.Item eventKey="1">Dropdown Link</Dropdown.Item>
     <Dropdown.Item eventKey="2">Dropdown Link</Dropdown.Item>
   </Dropdown.Menu>
 </Dropdown>

 <Dropdown>
   <Dropdown.Toggle variant="danger">
     Show calendar
   </Dropdown.Toggle>
   <Dropdown.Menu>
     <Dropdown.Item eventKey="1">Dropdown Link</Dropdown.Item>
     <Dropdown.Item eventKey="2">Dropdown Link</Dropdown.Item>
   </Dropdown.Menu>
 </Dropdown>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-8 CLOSED --> */}

      {/* <!-- ROW-9 OPEN --> */}
      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Basic Button Group</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBtngrp(!Btngrp)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use any of the available <code className="highlighter-rouge">.btn</code> in <code className="highlighter-rouge">.btn-group</code> classes to quickly create a styled button.</p>
                <div className="example">
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <Button variant='primary'>Left</Button>
                    <Button variant='primary'>Middle</Button>
                    <Button variant='primary'>Right</Button>
                  </div>
                </div>
              </div>
              <Collapse in={Btngrp} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="btn-group" role="group" aria-label="Basic example">
 <Button variant='primary'>Left</Button>
 <Button variant='primary'>Middle</Button>
 <Button variant='primary'>Right</Button>
</div>

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Button Toolbar</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setToolbar(!Toolbar)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Combine sets of button groups into button toolbars for more complex components.</p>
                <div className="example">
                  <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2 mb-1">
                      <Button variant='primary'>1</Button>
                      <Button variant='primary'>2</Button>
                      <Button variant='primary'>3</Button>
                      <Button variant='primary'>4</Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2 mb-1">
                      <Button variant='secondary'>5</Button>
                      <Button variant='secondary'>6</Button>
                      <Button variant='secondary'>7</Button>
                    </ButtonGroup>
                    <ButtonGroup className="mb-1">
                      <Button variant='info'>8</Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
              <Collapse in={Toolbar} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
 <ButtonGroup className="me-2 mb-1">
   <Button variant='primary'>1</Button>
   <Button variant='primary'>2</Button>
   <Button variant='primary'>3</Button>
   <Button variant='primary'>4</Button>
 </ButtonGroup>
 <ButtonGroup className="me-2 mb-1">
   <Button variant='secondary'>5</Button>
   <Button variant='secondary'>6</Button>
   <Button variant='secondary'>7</Button>
 </ButtonGroup>
 <ButtonGroup className="mb-1">
   <Button variant='info'>8</Button>
 </ButtonGroup>
</div>

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-9 CLOSED --> */}

      {/* <!-- ROW-10 OPEN --> */}
      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Outline Button Group</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setOutBtnGrp(!OutBtnGrp)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use any of the available <code className="highlighter-rouge">.btn .btn-outline-</code> in <code className="highlighter-rouge">.btn-group</code> classes to quickly create a styled button.</p>
                <div className="example">
                  <ButtonGroup>
                    <Button variant='outline-primary'>Left</Button>
                    <Button variant='outline-primary'>Middle</Button>
                    <Button variant='outline-primary'>Right</Button>
                  </ButtonGroup>
                </div>
              </div>
              <Collapse in={OutBtnGrp} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="example">
 <ButtonGroup>
   <Button variant='outline-primary'>Left</Button>
   <Button variant='outline-primary'>Middle</Button>
   <Button variant='outline-primary'>Right</Button>
 </ButtonGroup>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Min-Width Buttons</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setMinwidth(!Minwidth)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Add <code className="highlighter-rouge">.btn</code>, <code className="highlighter-rouge">.w-xs</code>, <code className="highlighter-rouge">.w-sm</code>, <code className="highlighter-rouge">.w-md</code>, <code className="highlighter-rouge">.w-lg</code>,
                  classes to quickly create a styled button..</p>
                <div className="example">
                  <div className="btn-list">
                    <Button className="w-xs mb-1" variant="primary">Min-XS</Button>
                    <Button className="w-sm mb-1" variant="secondary">Min-SM</Button>
                    <Button className="w-md mb-1" variant="danger">Min-MD</Button>
                    <Button className="w-lg mb-1" variant="success">Min-LG</Button>
                  </div>
                </div>
              </div>
              <Collapse in={Minwidth} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="btn-list">
 <Button className="w-xs mb-1" variant="primary">Min-XS</Button>
 <Button className="w-sm mb-1" variant="secondary">Min-SM</Button>
 <Button className="w-md mb-1" variant="danger">Min-MD</Button>
 <Button className="w-lg mb-1" variant="success">Min-LG</Button>
</div>

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-10 CLOSED --> */}

      {/* <!-- ROW-11 OPEN --> */}
      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Checkbox Button Group</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setCheckBox(!CheckBox)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use any of the available <code className="highlighter-rouge">.btn</code> in <code className="highlighter-rouge">.btn-group</code> classes to quickly create a styled button.</p>
                <div className="example">
                  <div className="btn-list checkboxbtns">
                    <ButtonGroup>

                      <ToggleButtonGroup type="checkbox" >
                        <ToggleButton className="mb-2" id="toggle-check" checked={isChecked} variant="outline-primary" value={1} onChange={handleOnChange}>Checkbox  </ToggleButton>
                        <ToggleButton className="mb-2" id="toggle-check1" checked={isChecked} variant="outline-primary" value={2} onChange={handleOnChange}>Checkbox </ToggleButton>
                        <ToggleButton className="mb-2" id="toggle-check2" checked={isChecked} variant="outline-primary" value={3} onChange={handleOnChange}>Checkbox </ToggleButton>
                      </ToggleButtonGroup>
                    </ButtonGroup>
                  </div>
                </div>

              </div>
              <Collapse in={CheckBox} className="mt-2">
                <pre>
                  <code>
                    {`
export function Checkedbutton() {
  const [isChecked, setIsChecked] = useState(false);
  
  const handleOnChange = () => {
      setIsChecked(!isChecked);
    };
  
      return (
        <div className="btn-list checkboxbtns">
        <ButtonGroup>
          <ToggleButtonGroup type="checkbox" >
              <ToggleButton className="mb-2" id="toggle-check" checked={isChecked} variant="outline-primary" value={1} onChange={handleOnChange}>Checkbox  </ToggleButton>
              <ToggleButton className="mb-2" id="toggle-check1" checked={isChecked} variant="outline-primary" value={2} onChange={handleOnChange}>Checkbox </ToggleButton>
              <ToggleButton className="mb-2" id="toggle-check2" checked={isChecked} variant="outline-primary" value={3} onChange={handleOnChange}>Checkbox </ToggleButton>
          </ToggleButtonGroup>
          </ButtonGroup>
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
        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Radio Button Group</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setRadio(!Radio)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use any of the available <code className="highlighter-rouge">.btn</code> in <code className="highlighter-rouge">.btn-group</code> classes to quickly create a styled button.</p>
                <div className="example">
                  <div className="btn-group radiobtns" role="group" aria-label="Basic radio toggle button group">
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                      <ToggleButton id="tbg-radio-1" variant='outline-primary' value={1} >
                        Radio 1
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-2" variant='outline-primary' value={2}>
                        Radio 2
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-3" variant='outline-primary' value={3}>
                        Radio 3
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </div>
              </div>
              <Collapse in={Radio} className="mt-2">
                <pre>
                  <code>
                    {`
export function Buttondata() {
  return (
      <div className="btn-group radiobtns" role="group" aria-label="Basic radio toggle button group">
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton id="tbg-radio-1" variant='outline-primary' value={1} >
                  Radio 1
              </ToggleButton>
              <ToggleButton id="tbg-radio-2" variant='outline-primary' value={2}>
                  Radio 2
              </ToggleButton>
              <ToggleButton id="tbg-radio-3" variant='outline-primary' value={3}>
                  Radio 3
              </ToggleButton>
          </ToggleButtonGroup>
      </div>
  )
}

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW-11 CLOSED --> */}

      {/* <!-- ROW-12 OPEN --> */}
      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Button Group Sizes</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBtngrpSize(!BtngrpSize)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use any of the available <code className="highlighter-rouge">.btn-group-*</code> in <code className="highlighter-rouge">.btn-group</code> classes to quickly create a styled button.</p>
                <div className="example">
                  <ButtonGroup className="btn-group-lg mb-3">
                    <Button variant='primary'>Left</Button>
                    <Button variant='primary'>Middle</Button>
                    <Button variant='primary'>Right</Button>
                  </ButtonGroup><br />
                  <ButtonGroup className="mb-3">
                    <Button variant='primary'>Left</Button>
                    <Button variant='primary'>Middle</Button>
                    <Button variant='primary'>Right</Button>
                  </ButtonGroup><br />
                  <ButtonGroup className="btn-group-sm">
                    <Button variant='primary'>Left</Button>
                    <Button variant='primary'>Middle</Button>
                    <Button variant='primary'>Right</Button>
                  </ButtonGroup>
                </div>
              </div>
              <Collapse in={BtngrpSize} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="example">
 <ButtonGroup className="btn-group-lg mb-3">
   <Button variant='primary'>Left</Button>
   <Button variant='primary'>Middle</Button>
   <Button variant='primary'>Right</Button>
 </ButtonGroup><br />
 <ButtonGroup className="mb-3">
   <Button variant='primary'>Left</Button>
   <Button variant='primary'>Middle</Button>
   <Button variant='primary'>Right</Button>
 </ButtonGroup><br />
 <ButtonGroup className="btn-group-sm">
   <Button variant='primary'>Left</Button>
   <Button variant='primary'>Middle</Button>
   <Button variant='primary'>Right</Button>
 </ButtonGroup>
</div>

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Vertical Button Group</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setVerticalBtngrp(!VerticalBtngrp)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use any of the available <code className="highlighter-rouge">.btn-group-vertical</code> classes to quickly create a styled button.</p>
                <div className="example">
                  <ButtonGroup vertical>
                    <Button variant='primary'>Button</Button>
                    <Button variant='primary'>Button</Button>
                    <Dropdown >
                      <Dropdown.Toggle className='br-0'>
                        Dropdown
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">Dropdown Link</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Dropdown Link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Button variant='primary'>Button</Button>
                    <Button variant='primary'>Button</Button>
                  </ButtonGroup>
                </div>
              </div>
              <Collapse in={VerticalBtngrp} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="example">
 <ButtonGroup vertical>
   <Button variant='primary'>Button</Button>
   <Button variant='primary'>Button</Button>
     <Dropdown >
       <Dropdown.Toggle className='br-0'>
         Dropdown
       </Dropdown.Toggle>
       <Dropdown.Menu>
         <Dropdown.Item eventKey="1">Dropdown Link</Dropdown.Item>
         <Dropdown.Item eventKey="2">Dropdown Link</Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown>
   <Button variant='primary'>Button</Button>
   <Button variant='primary'>Button</Button>
 </ButtonGroup>
</div>

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-12 CLOSED --> */}
    </div>
  )
};

export default Buttons;

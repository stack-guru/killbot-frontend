import React, { useState } from 'react';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import styles from './FormElements.module.scss';
import { Row, Col, Card, Form, InputGroup, FormControl, Button, Dropdown, ListGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Select from 'react-select';

const FormElements = () => {

  const Default = [
    { value: "Brazil", label: "Brazil" },
    { value: "Czech Republic", label: "Czech Republic" },
    { value: "Germany", label: "Germany" },
    { value: "Poland", label: "Poland" },
  ];

  const FormSize = [
    { value: "One", label: "One" },
    { value: "Two", label: "Two" },
    { value: "Three", label: "Three" },
  ];


  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };


  return (

    <div className={styles.FormElements}>
      <PageHeader titles="Form-Elements" active="Form-Elements" items={['Forms']} />
      {/* <!-- Row --> */}
      <Row>
        <Col xl={6} lg={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Inputs & Textareas </Card.Title>
            </Card.Header>
            <Card.Body className="pb-2">
              <p>Textual form controls like <code className="highlighter-rouge">&lt;input&gt;</code> s and <code className="highlighter-rouge">&lt;textarea&gt;</code> s an upgrade with custom styles,focus states, and more.</p>
              <Row className="row-sm">
                <div className="col-lg">
                  <Form.Control className="mb-4" placeholder="Input box" type="text" />
                </div>
                <div className="col-lg mg-t-10 mg-lg-t-0">
                  <Form.Control className="mb-4" placeholder="Input box (readonly)" readOnly type="text" />
                </div>
                <div className="col-lg mg-t-10 mg-lg-t-0">
                  <Form.Control className="mb-4" disabled placeholder="Input box (disabled)" type="text" />
                </div>
              </Row>
              <Row className="row-sm">
                <div className="col-lg">
                  <textarea className="form-control mb-4" placeholder="Textarea" defaultValue="Textarea" rows={4}></textarea>
                </div>
                <div className="col-lg mg-t-10">
                  <textarea className="form-control mb-4" placeholder="Textarea (readonly)" defaultValue="Textarea (readonly)" readOnly rows={4}></textarea>
                </div>
                <div className="col-lg mg-t-10">
                  <textarea className="form-control mb-4" disabled placeholder="Texarea (disabled)" defaultValue="Texarea (disabled)" rows={4}></textarea>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Input Sizes</Card.Title>
            </Card.Header>
            <Card.Body className="">
              <p>Set heights using classes like <code className="highlighter-rouge">.form-control-lg</code> and <code className="highlighter-rouge">.form-control-sm</code>.</p>
              <Row className="row-sm">
                <div className="col-lg">
                  <Form.Control className="form-control-sm mb-4" placeholder="from-control-sm" type="text" />
                  <Form.Control className=" mb-4" placeholder=" Default from-control" type="text" />
                  <Form.Control className="form-control-lg" placeholder="from-control-lg" type="text" />
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Valid Inputs</Card.Title>
            </Card.Header>
            <Card.Body className="pb-2">
              <Form className="needs-validation was-validated">
                <Row className="row-sm">
                  <Col lg={6}>
                    <Form.Group>
                      <Form.Control className="mb-4 is-valid state-valid" placeholder="Input box (success state)" required type="text" />
                      <textarea className="form-control mb-4 is-valid state-valid" placeholder="Textarea (success state)" defaultValue='This is textaera' ></textarea>
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group>
                      <Form.Control className="form-control mb-4 is-invalid state-invalid" placeholder="Input box (invalid state)" required type="text" />
                      <textarea className="form-control mb-4 is-invalid state-invalid" placeholder="Textarea (invalid state)" defaultValue='Textarea (invalid state)' rows={3}></textarea>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Readonly plain text</Card.Title>
            </Card.Header>
            <Card.Body className="">
              <p>If you want to have <code className="highlighter-rouge">&lt;input readonly&gt;</code> elements in your form styled as plain text, use the <code className="highlighter-rouge">&lt;.form-control-plaintext&gt;</code> className to remove
                the default form field styling and preserve the correct margin and padding .</p>
              <Row className="mb-3">
                <Form.Label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label">Email</Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" readOnly className="form-control-plaintext" placeholder='email@example.com' id="staticEmail" />
                </Col>
              </Row>
              <Row>
                <Form.Label
                  htmlFor="inputPassword"
                  className="col-sm-2 col-form-label">Password</Form.Label>
                <Col sm={10}>
                  <Form.Control type="password" id="inputPassword" placeholder='' />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Select</Card.Title>
            </Card.Header>
            <Card.Body className="">
              <p>Customize the native <code className="highlighter-rouge">&lt;select&gt;</code>s with custom CSS that changes the element’s initial appearance.</p>
              <Form.Group>
                <Form.Label>Default Select</Form.Label>
                <Select classNamePrefix="Select" options={Default} placeholder='country' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Customize Select</Form.Label>
                <Select classNamePrefix="Select" options={Default} placeholder='country' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Disabled Select</Form.Label>
                <Select classNamePrefix="Select" options={Default} placeholder='country' isDisabled />
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Select Sizes</Card.Title>
            </Card.Header>
            <Card.Body className="">
              <p>You may also choose from small and large custom selects to match our similarly sized text inputs.</p>
              <Form.Group className="select2-sm">
                <Form.Label>Small Size Select</Form.Label>
                <Select classNamePrefix="Select-sm" options={Default} placeholder='country' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Default Size Select</Form.Label>
                <Select classNamePrefix="Select" options={Default} placeholder='country' />
              </Form.Group>
              <Form.Group className="select2-lg">
                <Form.Label>Large Size Select</Form.Label>
                <Select classNamePrefix="Select-lg" options={Default} placeholder='country' />
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row>
        <Col xl={6} lg={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h4'>Gerenal Elements</Card.Title>
            </Card.Header>
            <Card.Body className="">
              <Form className="form-horizontal">
                <Row className="mb-4">
                  <Form.Label className="col-md-3">Text</Form.Label>
                  <Col md={9}>
                    <Form.Control type="text" placeholder="Typing....." />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Form.Label className="col-md-3"
                    htmlFor="example-email"
                  >Email</Form.Label>
                  <Col md={9}>
                    <Form.Control type="email" id="example-email" name="example-email" placeholder="Email" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Form.Label className="col-md-3">Password</Form.Label>
                  <Col md={9}>
                    <Form.Control type="password" placeholder="password" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Form.Label className="col-md-3">Placeholder</Form.Label>
                  <Col md={9}>
                    <Form.Control type="text" placeholder="text" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Form.Label className="col-md-3">Readonly</Form.Label>
                  <Col md={9}>
                    <Form.Control type="text" readOnly placeholder="Readonly value" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Form.Label className="col-md-3">Disabled</Form.Label>
                  <Col md={9}>
                    <Form.Control type="text" disabled placeholder="Disabled value" />
                  </Col>
                </Row>
                <Row className="mb-4 mb-4">
                  <Form.Label className="col-md-3">Number</Form.Label>
                  <Col md={9}>
                    <Form.Control type="number" name="number" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Form.Label className="col-md-3">URL</Form.Label>
                  <Col md={9}>
                    <Form.Control type="url" name="url" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Form.Label className="col-md-3">Search</Form.Label>
                  <Col md={9}>
                    <Form.Control type="search" name="search" />
                  </Col>
                </Row>
                <Row className="mb-0">
                  <Form.Label className="col-md-3">Tel</Form.Label>
                  <Col md={9}>
                    <Form.Control type="tel" name="tel" />
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Checksbox & Radio Buttons</Card.Title>
            </Card.Header>
            <Card.Body className="">
              <Row>
                <Col xl={4} md={6}>
                  <Form.Group>
                    <Form.Label>Radios</Form.Label>
                    <div className="custom-controls-stacked">

                      <Form.Check label="option 1" type='radio' />

                      <Form.Check label="option 2" type='radio' />

                      <Form.Check disabled label="Option Disabled" type='radio' />

                      <Form.Check disabled checked label="Option Disabled Checked" type='radio' />
                    </div>
                  </Form.Group>
                </Col>
                <Col xl={4} md={6}>
                  <Form.Group>
                    <Form.Label>Medium Radios</Form.Label>
                    <div className="custom-controls-stacked">
                      <label className="custom-control custom-radio-md">
                        <input type="radio" className="custom-control-input" name="example-radios1" defaultValue="option5" defaultChecked />
                        <span className="custom-control-label">Option 1</span>
                      </label>
                      <label className="custom-control custom-radio-md">
                        <input type="radio" className="custom-control-input" name="example-radios1" defaultValue="option6" />
                        <span className="custom-control-label">Option 2</span>
                      </label>
                      <label className="custom-control custom-radio-md">
                        <input type="radio" className="custom-control-input" name="example-radios1" defaultValue="option7" disabled />
                        <span className="custom-control-label">Option Disabled</span>
                      </label>
                      <label className="custom-control custom-radio-md">
                        <input type="radio" className="custom-control-input" name="example-radios4" defaultValue="option8" disabled defaultChecked />
                        <span className="custom-control-label">Option Disabled Checked</span>
                      </label>
                    </div>
                  </Form.Group>
                </Col>
                <Col xl={4} md={6}>
                  <Form.Group>
                    <Form.Label>Large Radios</Form.Label>
                    <div className="custom-controls-stacked">
                      <label className="custom-control custom-radio-lg">
                        <input type="radio" className="custom-control-input" name="example-radios2" defaultValue="option9" defaultChecked />
                        <span className="custom-control-label">Option 1</span>
                      </label>
                      <label className="custom-control custom-radio-lg">
                        <input type="radio" className="custom-control-input" name="example-radios2" defaultValue="option10" />
                        <span className="custom-control-label">Option 2</span>
                      </label>
                      <label className="custom-control custom-radio-lg">
                        <input type="radio" className="custom-control-input" name="example-radios2" defaultValue="option11" disabled />
                        <span className="custom-control-label">Option Disabled</span>
                      </label>
                      <label className="custom-control custom-radio-lg">
                        <input type="radio" className="custom-control-input" name="example-radios3" defaultValue="option12" disabled defaultChecked />
                        <span className="custom-control-label">Option Disabled Checked</span>
                      </label>
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xl={4} md={6}>
                  <Form.Group className="m-0">
                    <Form.Label>Checkboxes</Form.Label>
                    <div className="custom-controls-stacked">

                      <Form.Check label="option 1" type='checkbox' />

                      <Form.Check label="option 2" type='checkbox' />

                      <Form.Check disabled label="Option Disabled" type='checkbox' />

                      <Form.Check disabled checked label="Option Disabled Checked" type='checkbox' />

                    </div>
                  </Form.Group>
                </Col>
                <Col xl={4} md={6}>
                  <Form.Group className="m-0">
                    <Form.Label>Medium Checkboxes</Form.Label>
                    <div className="custom-controls-stacked">
                      <label className="custom-control custom-checkbox-md">
                        <input type="checkbox" className="custom-control-input" name="example-checkbox5" defaultValue="option5" defaultChecked />
                        <span className="custom-control-label">Option 1</span>
                      </label>
                      <label className="custom-control custom-checkbox-md">
                        <input type="checkbox" className="custom-control-input" name="example-checkbox6" defaultValue="option6" />
                        <span className="custom-control-label">Option 2</span>
                      </label>
                      <label className="custom-control custom-checkbox-md">
                        <input type="checkbox" className="custom-control-input" name="example-checkbox7" defaultValue="option7" disabled />
                        <span className="custom-control-label">Option Disabled</span>
                      </label>
                      <label className="custom-control custom-checkbox-md">
                        <input type="checkbox" className="custom-control-input" name="example-checkbox8" defaultValue="option8" defaultChecked disabled />
                        <span className="custom-control-label">Option Disabled defaultChecked</span>
                      </label>
                    </div>
                  </Form.Group>
                </Col>
                <Col xl={4} md={6}>
                  <Form.Group className="m-0">
                    <Form.Label>Large Checkboxes</Form.Label>
                    <div className="custom-controls-stacked">
                      <label className="custom-control custom-checkbox-lg">
                        <input type="checkbox" className="custom-control-input" name="example-checkbox9" defaultValue="option9" defaultChecked />
                        <span className="custom-control-label">Option 1</span>
                      </label>
                      <label className="custom-control custom-checkbox-lg">
                        <input type="checkbox" className="custom-control-input" name="example-checkbox10" defaultValue="option10" />
                        <span className="custom-control-label">Option 2</span>
                      </label>
                      <label className="custom-control custom-checkbox-lg">
                        <input type="checkbox" className="custom-control-input" name="example-checkbox11" defaultValue="option11" disabled />
                        <span className="custom-control-label">Option Disabled</span>
                      </label>
                      <label className="custom-control custom-checkbox-lg">
                        <input type="checkbox" className="custom-control-input" name="example-checkbox12" defaultValue="option12" defaultChecked disabled />
                        <span className="custom-control-label">Option Disabled defaultChecked</span>
                      </label>
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* <!-- Row --> */}
      <Row>
        <Col xl={8} lg={12}>
          <Form method="post" className="card">
            <Card.Header>
              <Card.Title as='h3'>Toggle switches</Card.Title>
            </Card.Header>
            <Card.Body className=" ">
              <Row>
                <Col xl={6} xxl={4} md={6}>
                  <Form.Group className='mb-3'>
                    <Form.Label>Toggle switch</Form.Label>

                    <Form.Check className="ps-6" type="switch" id="custom-switch1" label="Inactive" />
                  </Form.Group>
                  <Form.Group className='mb-3'>

                    <Form.Check className="ps-6" type="switch" id="custom-switch2" label="Active" defaultChecked />
                  </Form.Group>
                  <Form.Group className='mb-3'>

                    <Form.Check className="ps-6" type="switch" id="custom-switch3" label="Disabled Inactive" disabled />

                  </Form.Group>
                  <Form.Group className='mb-3'>

                    <Form.Check className="ps-6" type="switch" id="custom-switch4" label="Disabled Active" disabled defaultChecked />

                  </Form.Group>
                </Col>
                <Col xl={6} xxl={4} md={6}>
                  <Form.Label>Medium Toggle switch</Form.Label>
                  <Form.Group>
                    <label className="custom-switch form-switch me-5 mb-3">
                      <input type="radio" name="custom-switch-radio1" className="custom-switch-input" />
                      <span className="custom-switch-indicator custom-switch-indicator-md"></span>
                      <span className="custom-switch-description">Inactive</span>
                    </label>
                  </Form.Group>
                  <Form.Group>
                    <label className="custom-switch form-switch mb-3">
                      <input type="radio" name="custom-switch-radio1" className="custom-switch-input" defaultChecked />
                      <span className="custom-switch-indicator custom-switch-indicator-md"></span>
                      <span className="custom-switch-description">Active</span>
                    </label>
                  </Form.Group>
                  <Form.Group>
                    <label className="custom-switch form-switch me-5 mb-3">
                      <input type="radio" name="custom-switch-radio1" className="custom-switch-input" disabled />
                      <span className="custom-switch-indicator custom-switch-indicator-md"></span>
                      <span className="custom-switch-description">Disabled Inactive</span>
                    </label>
                  </Form.Group>
                  <Form.Group>
                    <label className="custom-switch form-switch mb-3">
                      <input type="radio" name="custom-switch-radio2" className="custom-switch-input" defaultChecked disabled />
                      <span className="custom-switch-indicator custom-switch-indicator-md"></span>
                      <span className="custom-switch-description">Disabled Active</span>
                    </label>
                  </Form.Group>
                </Col>
                <Col xl={6} xxl={4} md={6}>
                  <Form.Group>
                    <Form.Label>Large Toggle switch</Form.Label>
                    <label className="custom-switch form-switch me-5 mb-3">
                      <input type="radio" name="custom-switch-radio1" className="custom-switch-input" />
                      <span className="custom-switch-indicator custom-switch-indicator-lg"></span>
                      <span className="custom-switch-description">Inactive</span>
                    </label>
                  </Form.Group>
                  <Form.Group>
                    <label className="custom-switch form-switch mb-3">
                      <input type="radio" name="custom-switch-radio1" className="custom-switch-input" defaultChecked />
                      <span className="custom-switch-indicator custom-switch-indicator-lg"></span>
                      <span className="custom-switch-description">Active</span>
                    </label>
                  </Form.Group>
                  <Form.Group>
                    <label className="custom-switch form-switch me-5 mb-3">
                      <input type="checkbox" name="custom-switch-checkbox3" className="custom-switch-input" disabled />
                      <span className="custom-switch-indicator custom-switch-indicator-lg"></span>
                      <span className="custom-switch-description">Disabled Inactive</span>
                    </label>
                  </Form.Group>
                  <Form.Group>
                    <label className="custom-switch form-switch mb-3">
                      <input type="checkbox" name="custom-switch-checkbox4" className="custom-switch-input" defaultChecked disabled />
                      <span className="custom-switch-indicator custom-switch-indicator-lg"></span>
                      <span className="custom-switch-description">Disabled Active</span>
                    </label>
                  </Form.Group>
                </Col>
                <Form.Group>
                  <Form.Label>Your skills</Form.Label>
                  <ToggleButtonGroup type="checkbox">
                    <ToggleButton className="me-2" id="toggle-check1" checked={isChecked} variant="outline-primary" value={1} onChange={handleOnChange}>HTML  </ToggleButton>
                    <ToggleButton className="me-2" id="toggle-check2" checked={isChecked} variant="outline-primary" value={2} onChange={handleOnChange}>CSS </ToggleButton>
                    <ToggleButton className="me-2" id="toggle-check3" checked={isChecked} variant="outline-primary" value={3} onChange={handleOnChange}>PHP </ToggleButton>
                    <ToggleButton className="me-2" id="toggle-check4" checked={isChecked} variant="outline-primary" value={4} onChange={handleOnChange}>JavaScript  </ToggleButton>
                    <ToggleButton className="me-2" id="toggle-check5" checked={isChecked} variant="outline-primary" value={5} onChange={handleOnChange}>React </ToggleButton>
                    <ToggleButton className="me-2" id="toggle-check6" checked={isChecked} variant="outline-primary" value={6} onChange={handleOnChange}>Angular </ToggleButton>
                    <ToggleButton className="me-2" id="toggle-check7" checked={isChecked} variant="outline-primary" value={7} onChange={handleOnChange}>Java </ToggleButton>
                    <ToggleButton className="me-2" id="toggle-check8" checked={isChecked} variant="outline-primary" value={8} onChange={handleOnChange}>C++ </ToggleButton>
                  </ToggleButtonGroup>
                </Form.Group>
                <Form.Group className="m-0 mt-2">

                  <Form.Label>Select Color</Form.Label>
                  <div className="row ">
                    <div className="col-auto">
                      <label className="colorinput">
                        <input name="color" type="checkbox" defaultValue="azure" className="colorinput-input" defaultChecked />
                        <span className="colorinput-color bg-azure"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input name="color" type="checkbox" defaultValue="indigo" className="colorinput-input" />
                        <span className="colorinput-color bg-indigo"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input name="color" type="checkbox" defaultValue="purple" className="colorinput-input" />
                        <span className="colorinput-color bg-purple"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input name="color" type="checkbox" defaultValue="pink" className="colorinput-input" />
                        <span className="colorinput-color bg-pink"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input name="color" type="checkbox" defaultValue="red" className="colorinput-input" />
                        <span className="colorinput-color bg-red"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input name="color" type="checkbox" defaultValue="orange" className="colorinput-input" />
                        <span className="colorinput-color bg-orange"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input name="color" type="checkbox" defaultValue="yellow" className="colorinput-input" />
                        <span className="colorinput-color bg-yellow"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input name="color" type="checkbox" defaultValue="lime" className="colorinput-input" />
                        <span className="colorinput-color bg-lime"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input name="color" type="checkbox" defaultValue="green" className="colorinput-input" />
                        <span className="colorinput-color bg-green"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input name="color" type="checkbox" defaultValue="teal" className="colorinput-input" />
                        <span className="colorinput-color bg-teal"></span>
                      </label>
                    </div>
                  </div>
                </Form.Group>
              </Row>
            </Card.Body>
          </Form>

        </Col>
        <Col xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Switches </Card.Title>
            </Card.Header>
            <Card.Body className="">
              <ListGroup as='ul'>
                <ListGroup.Item as='li'>
                  Bootstrap Switch Default
                  <div className="material-switch pull-right">
                    <input id="someSwitchOptionDefault" name="someSwitchOption001" type="checkbox" />
                    <label
                      htmlFor="someSwitchOptionDefault"
                      className="label-default"></label>
                  </div>
                </ListGroup.Item>
                <li className="list-group-item">
                  Bootstrap Switch Primary
                  <div className="material-switch pull-right">
                    <input id="someSwitchOptionPrimary" name="someSwitchOption001" type="checkbox" />
                    <label
                      htmlFor="someSwitchOptionPrimary"
                      className="label-primary"></label>
                  </div>
                </li>
                <li className="list-group-item">
                  Bootstrap Switch Success
                  <div className="material-switch pull-right">
                    <input id="someSwitchOptionSuccess" name="someSwitchOption001" type="checkbox" />
                    <label
                      htmlFor="someSwitchOptionSuccess"
                      className="label-success"></label>
                  </div>
                </li>
                <li className="list-group-item">
                  Bootstrap Switch Info
                  <div className="material-switch pull-right">
                    <input id="someSwitchOptionInfo" name="someSwitchOption001" type="checkbox" />
                    <label
                      htmlFor="someSwitchOptionInfo"
                      className="label-info"></label>
                  </div>
                </li>
                <li className="list-group-item">
                  Bootstrap Switch Warning
                  <div className="material-switch pull-right">
                    <input id="someSwitchOptionWarning" name="someSwitchOption001" type="checkbox" />
                    <label
                      htmlFor="someSwitchOptionWarning"
                      className="label-warning"></label>
                  </div>
                </li>
                <li className="list-group-item">
                  Bootstrap Switch Danger
                  <div className="material-switch pull-right">
                    <input id="someSwitchOptionDanger" name="someSwitchOption001" type="checkbox" />
                    <label
                      htmlFor="someSwitchOptionDanger"
                      className="label-danger"></label>
                  </div>
                </li>
              </ListGroup>
              <Form.Group className="m-0 mt-3">
                <Form.Label className="mb-5">React-Bootstrap Toggle Custom switches</Form.Label>
                <Row>
                  <Col md={6} lg={6} xl={6} xxl={6}>
                    <Form.Check className="ps-6" type="switch" id="custom-switch1" label="Success Toggle switches" isValid />
                  </Col>
                  <Col md={6} lg={6} xl={6} xxl={6}>
                    <Form.Check className="ps-6" type="switch" id="custom-switch1" label="Error Toggle switches" isInvalid />
                  </Col>
                </Row>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row--> */}

      {/* <!-- Row --> */}
      <Row>
        <Col xl={6} lg={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h4'>Default Input Groups</Card.Title>
            </Card.Header>
            <Card.Body className="">
              <Form.Group>
                <InputGroup className='my-3'>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  <FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup className='my-3'>
                  <FormControl placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup className='my-3'>
                  <InputGroup.Text id="basic-addon3">https://example.com/users/</InputGroup.Text>
                  <FormControl id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup className="my-3">
                  <InputGroup.Text>$</InputGroup.Text>
                  <FormControl aria-label="Amount (to the nearest dollar)" />
                  <span className="input-group-text">.00</span>
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup className="my-3">
                  <FormControl placeholder="Username" aria-label="Username" />
                  <InputGroup.Text className="input-group-text br-0">@</InputGroup.Text>
                  <FormControl placeholder="Server" aria-label="Server" />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup className='my-3'>
                  <Button variant='light' id="button-addon1">Button</Button>
                  <FormControl placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup className='my-3'>
                  <FormControl placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                  <Button variant='light' id="button-addon2">Button</Button>
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup className='my-3'>
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ margin: '0px' }}>
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <FormControl aria-label="Text input with dropdown button" />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup className='my-3'>
                  <FormControl aria-label="Text input with dropdown button" />
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ margin: '0px' }}>
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </InputGroup>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h4'>Input Groups Sizes</Card.Title>
            </Card.Header>
            <Card.Body className="">
              <Form.Group>
                <InputGroup className='my-3' size='sm'>
                  <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                  <FormControl aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup className='my-3'>
                  <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                  <FormControl aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup className='my-3' size='lg'>
                  <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
                  <FormControl aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                </InputGroup>
              </Form.Group>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as='h4'>Bootstrap Fileuploads</Card.Title>
            </Card.Header>
            <Card.Body className="">
              <Form.Group controlId="formFile">
                <Form.Label className="mt-0">Default file input example</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group>
                <Form.Label >Small File Input</Form.Label>
                <Form.Control size='sm' type="file" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Large File Input</Form.Label>
                <Form.Control size='lg' type="file" />
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!--Row--> */}
      <Row>
        <Col xl={12} md={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h4'>Form Elements With Sizes</Card.Title>
            </Card.Header>
            <Card.Body className="">
              <Row className="p-0 m-0">
                <Form.Label className="mt-0 p-0">Form-control small sizes</Form.Label>
                <Col xl={2} className="p-0">
                  <div className="">
                    <Button variant='primary' size='sm' className="mb-3 btn-block">Small button</Button>
                  </div>
                </Col>
                <Col xl={2}>
                  <Form.Group className='mb-3'>
                    <Form.Control size='sm' placeholder="from-control-sm" type="text" />
                  </Form.Group>
                </Col>
                <Col xl={2}>
                  <Form.Group className="select2-sm mb-3">
                    <Select classNamePrefix="Select-sm" options={FormSize} placeholder='Select' />
                  </Form.Group>
                </Col>
                <Col xl={2} className="ps-1 pe-1">
                  <Form.Group className='mb-3'>

                    <Form.Check type="radio" aria-label="radio 1" label='Radio example' />

                  </Form.Group>
                </Col>
                <Col xl={2} className="ps-1 pe-1">
                  <Form.Group className='mb-3'>

                    <Form.Check className='w-90' type="checkbox" aria-label="checkbox 1" label='checkbox example' />
                  </Form.Group>
                </Col>
                <Col xl={2} className="ps-1 pe-1">
                  <Form.Group className='mb-3'>

                    <Form.Check type="switch" aria-label="switch 1" label='Toggle example' />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="p-0 m-0">
                <Form.Label className="mt-4 p-0">Form-control Medium sizes</Form.Label>
                <Col xl={2} className="p-0">
                  <div className="">
                    <Button variant='secondary' className="mb-3 btn-block">Default button</Button>
                  </div>
                </Col>
                <Col xl={2}>
                  <Form.Group className='mb-3'>
                    <Form.Control placeholder="from-control" type="text" />
                  </Form.Group>
                </Col>
                <Col xl={2}>
                  <Form.Group className='mb-3'>
                    <Select classNamePrefix="Select" options={FormSize} placeholder='Select' />
                  </Form.Group>
                </Col>
                <Col xl={2} className="ps-1 pe-1">
                  <Form.Group className='mb-3'>
                    <Form.Label className="custom-control custom-radio-md mb-0 mt-1">
                      <input type="radio" className="custom-control-input" name="example-radios2" value="option2" />
                      <span className="custom-control-label">Radio example</span>
                    </Form.Label>
                  </Form.Group>
                </Col>
                <Col xl={2} className="ps-1 pe-1">
                  <Form.Group className='mb-3'>
                    <label className="custom-control custom-checkbox-md mb-0">
                      <input type="checkbox" className="custom-control-input" name="example-checkbox3" value="option3" />
                      <span className="custom-control-label">checkbox example</span>
                    </label>
                  </Form.Group>
                </Col>
                <Col xl={2} className="ps-1 pe-1">
                  <Form.Group className='mb-3'>
                    <label className="custom-switch form-switch mb-0">
                      <input type="checkbox" name="custom-switch-radio" className="custom-switch-input" />
                      <span className="custom-switch-indicator custom-switch-indicator-md"></span>
                      <span className="custom-switch-description">Toggle example</span>
                    </label>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="p-0 m-0">
                <Form.Label className="mt-4 p-0">Form-control Large sizes</Form.Label>
                <Col xl={2} className="p-0">
                  <div className="">
                    <Button size='lg' variant='success' className="mb-3 btn-block me-2">Large button</Button>
                  </div>
                </Col>
                <Col xl="2">
                  <Form.Group className='mb-3'>
                    <Form.Control size='lg' placeholder="from-control-sm" type="text" />
                  </Form.Group>
                </Col>
                <Col xl={2}>
                  <Form.Group className="mb-3">
                    <Select classNamePrefix="Select-lg" options={FormSize} placeholder='Select' />
                  </Form.Group>
                </Col>
                <Col xl={2} className="ps-1 pe-1">
                  <Form.Group className='mb-3'>
                    <label className="custom-control custom-radio-lg mb-0">
                      <input type="radio" className="custom-control-input" name="example-radios2" value="option2" />
                      <span className="custom-control-label">Radio example</span>
                    </label>

                  </Form.Group>
                </Col>
                <Col xl={2} className="ps-1 pe-1">
                  <Form.Group className='mb-3'>
                    <label className="custom-control custom-checkbox-lg mb-0">
                      <input type="checkbox" className="custom-control-input" name="example-checkbox3" value="option3" />
                      <span className="custom-control-label">checkbox example</span>
                    </label>

                  </Form.Group>
                </Col>
                <Col xl={2} className="ps-1 pe-1">
                  <Form.Group className='mb-3'>
                    <label className="custom-switch form-switch mb-0">
                      <input type="checkbox" name="custom-switch-radio" className="custom-switch-input" />
                      <span className="custom-switch-indicator custom-switch-indicator-lg"></span>
                      <span className="custom-switch-description">Toggle example</span>
                    </label>

                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </div>

  )
};

export default FormElements;

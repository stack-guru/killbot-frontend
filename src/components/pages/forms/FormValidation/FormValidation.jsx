import React, { useState } from 'react'
import styles from './FormValidation.module.scss';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import { Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import *as Yup from 'yup';
import Select from 'react-select';


const FormValidation = () => {

  // Basic Form validation

  const [validated, setValidated] = useState(false);
  const state = [
    { value: ".....", label: "....." },
  ];
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const State = [
    { value: ".....", label: "....." },
  ];

  const Option = [
    { value: "One", label: "One" },
    { value: "Two", label: "Two" },
    { value: "Three", label: "Three" },
    { value: "Four", label: "Four" },

  ];


  // Form Validation with Tooltips

  const schema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    username: Yup.string().required(),
    city: Yup.string().required(),
    state1: Yup.string().required(),
    zip: Yup.string().required(),
    file: Yup.mixed().required(),
    terms: Yup.bool().required().oneOf([true], 'terms must be accepted'),
  });

  const state1 = [
    { value: "....", label: "...." },
  ];


  return (

    <div className={styles.FormValidation}>
      <PageHeader titles="Form-Validations" active="Form-Validations" items={['Forms']} />
      {/* <!-- ROW OPEN --> */}
      <Row>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Cutom Validation</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="form-row">
                  <Col xl={6} className="mb-3">
                    <Form.Label>First name</Form.Label>
                    <Form.Control required type="text" placeholder="First name" defaultValue="Mark" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Col>
                  <Col xl={6} className="mb-3">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Col>
                </div>
                <div className="form-row">
                  <Col xl={6} className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid"> Please provide a valid city. </Form.Control.Feedback>
                  </Col>
                  <Col xl={3} className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Select classNamePrefix="Select" options={state} placeholder='State' />
                    <Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
                  </Col>
                  <Col xl={3} className="mb-3">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
                  </Col>
                </div>
                <Form.Group className='mb-3'>
                  <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
                </Form.Group>
                <Button type="submit">Submit form</Button>
              </Form>

            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Default Validation</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <div className="form-row">
                  <Col xl={6} className="mb-3">
                    <Form.Label>First name</Form.Label>
                    <Form.Control required type="text" placeholder="First name" defaultValue="Mark" />
                  </Col>
                  <Col xl={6} className="mb-3">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
                  </Col>
                </div>
                <div className="form-row">
                  <Col xl={6} className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                  </Col>
                  <Col xl={3} className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Select classNamePrefix="Select" options={State} placeholder='State' />
                  </Col>
                  <Col xl={3} className="mb-3">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required />
                  </Col>
                </div>
                <Form.Group>
                  <Form.Check required label="Agree to terms and conditions" feedbackType="invalid" />
                </Form.Group>
                <Button className='mt-3' type="submit">Submit form</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Server Side Validation</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <div className="form-row">
                  <Col xl={6} className="mb-3">
                    <Form.Label>First name</Form.Label>
                    <Form.Control required isValid type="text" placeholder="First name" defaultValue="Mark" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Col>
                  <Col xl={6} className="mb-3">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control required isValid type="text" placeholder="Last name" defaultValue="Otto" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Col>
                </div>
                <div className="form-row">
                  <Col xl={6} className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required isInvalid />
                    <Form.Control.Feedback type="invalid"> Please provide a valid city. </Form.Control.Feedback>
                  </Col>
                  <Col xl={3} className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Select classNamePrefix="Select" options={State} placeholder='State' />
                    <Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
                  </Col>
                  <Col xl={3} className="mb-3">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required isInvalid />
                    <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
                  </Col>
                </div>
                <Form.Group>
                  <Form.Check required isInvalid label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
                </Form.Group>
                <Button type="submit">Submit form</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Supported Elements</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form className="was-validated">
                <div className="mb-3">
                  <Form.Label>Textarea</Form.Label>
                  <Form.Control as='textarea' className="is-invalid" id="validationTextarea"
                    placeholder="Required example textarea" required></Form.Control>
                  <Form.Control.Feedback type="invalid">Please enter a message in the Textarea</Form.Control.Feedback>
                </div>

                <div className="custom-control custom-checkbox mb-3">
                  <input type="checkbox" className="custom-control-input" id="customControlValidation1" required />

                  <Form.Label className="custom-control-label" forhtml="customControlValidation1" >Check this custom checkbox</Form.Label>

                  <div className="invalid-feedback">Example invalid feedback text</div>
                </div>

                <div className="custom-control custom-radio">
                  <input type="radio" className="custom-control-input" id="customControlValidation2" name="radio-stacked" required />

                  <Form.Label className="custom-control-label" forhtml="customControlValidation2" >Toggle this custom radio</Form.Label>

                </div>

                <div className="custom-control custom-radio mb-3">
                  <input type="radio" className="custom-control-input"
                    id="customControlValidation3" name="radio-stacked" required />
                  <label className="custom-control-label"
                  // for="customControlValidation3"
                  >Or toggle
                    this other custom radio</label>
                  <div className="invalid-feedback">More example invalid feedback text</div>
                </div>

                <div className="mb-3">
                  <InputGroup hasValidation>
                    <InputGroup.Text id="validatedInputGroupPrepend">@</InputGroup.Text>
                    <Form.Control type="text" required isInvalid />
                    <Form.Control.Feedback type="invalid"> Example invalid input group feedback</Form.Control.Feedback>
                  </InputGroup>
                </div>



                <div className="mb-3">
                  <InputGroup hasValidation className='flex-nowrap'>
                    <InputGroup.Text className='py-2' id="validatedInputGroupPrepend">Option</InputGroup.Text>
                    <Select classNamePrefix="Select" className='w-94' options={Option} placeholder='Select' />
                    <Form.Control.Feedback type="invalid"> Example invalid input group feedback</Form.Control.Feedback>
                  </InputGroup>
                </div>

                <InputGroup className='wasvalidated'>
                  <Form.Control type="file" required />
                  <Form.Control.Feedback type="invalid">Example invalid input group feedback</Form.Control.Feedback>
                </InputGroup>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Tooltips</Card.Title>
            </Card.Header>
            <Card.Body>
              <Formik validationSchema={schema} onSubmit={console.log} initialValues={{ firstName: 'Mark', lastName: 'Otto', username: '', city: '', state1: '', zip: '', file: null, terms: false }}>
                {({ handleSubmit, handleChange, values, touched, errors }) => (

                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group as={Col} md="6" controlId="validationFormik101" className="position-relative">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" name="firstName" value={values.firstName} onChange={handleChange} isValid={touched.firstName && !errors.firstName} />
                        <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="6" controlId="validationFormik102" className="position-relative">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" name="lastName" value={values.lastName} onChange={handleChange} isValid={touched.lastName && !errors.lastName} />
                        <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} md="6" controlId="validationFormik103" className="position-relative">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" name="city" value={values.city} onChange={handleChange} isInvalid={!!errors.city} />
                        <Form.Control.Feedback type="invalid" tooltip>{errors.city}</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="3" controlId="validationFormik104" className="position-relative ">
                        <Form.Label>state1</Form.Label>
                        <Select classNamePrefix="Select" options={state1} placeholder='state1' />

                        <Form.Control.Feedback type="invalid" tooltip> {errors.state1}</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="3" controlId="validationFormik105" className="position-relative">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="text" placeholder="Zip" name="zip" value={values.zip} onChange={handleChange} isInvalid={!!errors.zip} />
                        <Form.Control.Feedback type="invalid" tooltip>{errors.zip}</Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Button type="submit">Submit form</Button>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW CLOSED --> */}
    </div>
  )
};

export default FormValidation;

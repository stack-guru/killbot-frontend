import React, { useState, Component, Children, Fragment } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import StepContent from "@mui/material/StepContent";
import Typography from '@mui/material/Typography';
import { Form, ListGroup, Col, Row, InputGroup } from 'react-bootstrap';
import validator from "validator";


// Form Wizard

function MyButton({ visible, ...props }) {
  return (

      <button
          className={visible ? "btn btn-primary " : "invisible"}
          {...props}
      />

  );
}
const Wizard = ({ step: currentIndex, ...props }) => {
  const steps = Children.toArray(props.children);
  const prevStep = currentIndex !== 0 && steps[currentIndex - 1].props;
  const nextStep = currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;

  return (
      <div>

          <nav className="btn-group steps basicsteps">
              {steps.map((step, index) => (
                  <button
                      key={step.props.number}
                      onClick={() => props.onChange(index)}
                      className={getClsNavBtn(index === currentIndex)}
                  >
                      <span className="number me-2 ">{step.props.number}</span>
                      <span>{step.props.title}</span>
                  </button>
              ))}
          </nav>

          {steps[currentIndex]}

          <div className=" p-3 d-flex justify-content-between  ">
              <MyButton
                  visible={prevStep}
                  onClick={() => props.onChange(currentIndex - 1)}
                  title={prevStep.description}
              >
                  Back
              </MyButton>
              <MyButton
                  visible={nextStep}
                  onClick={() => props.onChange(currentIndex + 1)}
                  title={nextStep.description}
              >
                  Next
              </MyButton>
          </div>
      </div>
  );
};
const Stepps = ({ children }) => children;

function getClsNavBtn(active) {
  return "btn" + (active ? " active" : "");
}
export class BasicContent extends Component {
  state = { step: 0 };

  handleStep = (step) => {
      this.setState({ step });
  };

  render() {
      return (
          <Wizard step={this.state.step} onChange={this.handleStep}>
              <Stepps title="LogIn" number="1">
                  <section className="card-body Basicwizard ">
                      <Form>
                          <Form.Group>
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" id="exampleInputEmail6"
                                  placeholder="Enter email address" />
                          </Form.Group>
                          <Form.Group>
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" className="form-control"
                                  id="exampleInputPassword7" placeholder="Password" />
                          </Form.Group>
                          <Form.Group className="mt-4 mb-3 justify-content-end">
                              <Form.Check label='Check me Out' />
                          </Form.Group>
                      </Form>
                  </section>
              </Stepps>
              <Stepps title="NewUser" number="2">
                  <section className="card-body Basicwizard">
                      <Form>
                          <Form.Group>
                              <Form.Label>User Name</Form.Label>
                              <Form.Control type="text" className="form-control" id="inputtext"
                                  placeholder="Enter User Name" />
                          </Form.Group>
                          <Form.Group>
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" className="form-control" id="exampleInputEmail8"
                                  placeholder="Enter email address" />
                          </Form.Group>
                          <Form.Group>
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" className="form-control"
                                  id="exampleInputPassword9" placeholder="Password" />
                          </Form.Group>
                          <Form.Group className="mt-4 mb-3 justify-content-end">
                              <Form.Check label='Check me Out' />
                          </Form.Group>
                      </Form>
                  </section>
              </Stepps>
              <Stepps title="End" number="3">
                  <section className="card-body Basicwizard ">
                      <Row>
                          <Form>
                              <Form.Group className="mt-4 mb-3 d-flex">
                                  <Form.Check label='I agree terms and Conditions' />
                              </Form.Group>
                          </Form>
                      </Row>
                  </section>
              </Stepps>
          </Wizard>
      );
  }
}
// Accordion-Wizard-Form

const steps = [{
  label: "Name & Email",
  description: (
    <>
      <ListGroup>
        <ListGroup.Item>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" name="name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="text" name="email" />
          </Form.Group>
        </ListGroup.Item>
      </ListGroup>
    </>
  ),
},
{
  label: "Contact",
  description: (
    <>
      <ListGroup>
        <ListGroup.Item>
          <Form.Group>
            <Form.Label>Telephone:</Form.Label>
            <Form.Control type="text" name="telephone" className="form-control" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mobile:</Form.Label>
            <Form.Control type="text" name="mobile" className="form-control" />
          </Form.Group>
        </ListGroup.Item>
      </ListGroup>
    </>
  ),
},
{
  label: "Payment",
  description: (
    <>
      <ListGroup>
        <ListGroup.Item>
          <Form.Group>
            <Form.Label>Credit card:</Form.Label>
            <Form.Control type="text" name="card" />
          </Form.Group>
          <Form.Group className="form-row">
            <Col sm={4}>
              <Form.Label>Expiry:</Form.Label>
              <Form.Control type="text" name="expiry" />
            </Col>
            <Col sm={4}>
              <Form.Label>CVV:</Form.Label>
              <Form.Control type="text" name="cvv" />
            </Col>
          </Form.Group>
        </ListGroup.Item>
      </ListGroup>
    </>
  ),
},];

export default function BasicFormWizard() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const isStepOptional = (step) => {
    return step === 1;
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => {
          const stepProps = {}
          // const labelProps: { optional?: ReactNode } = {}
          if (isStepOptional(index)) { }
          if (isStepSkipped(index)) {
            stepProps.completed = false
          }
          return (
            <Step key={label.label} {...stepProps}>
              <StepLabel optional={
                index === 2 ? <Typography variant="caption"></Typography> : null
              }>{label.label}</StepLabel>
              <StepContent>
                {label.description}
                <Fragment>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </Fragment>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
      <Fragment>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="primary"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          {isStepOptional(activeStep) && (
            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
              Skip
            </Button>
          )}
          <Button className='ms-auto' color='primary' onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'SUBMIT' : 'Next'}
          </Button>
        </Box>
      </Fragment>

    </Box>
  );
}

// Basic Content Wizard


export const BasicContentFormWizard = () => {
  const [goSteps, setGoSteps] = useState(0);

  return (
    <div>
      <Stepper activeStep={goSteps}>
        <Step onClick={() => setGoSteps(0)} />
        <Step onClick={() => setGoSteps(1)} />
        <Step onClick={() => setGoSteps(2)} />
      </Stepper>
      {goSteps === 0 && (
        <div>
          <span className="Stepperh3">Personal Information</span>
          <section>
            <div className="control-group form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-control required" placeholder="Name" />
            </div>
            <div className="control-group form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-control required"
                placeholder="Email Address" />
            </div>
            <div className="control-group form-group">
              <label className="form-label">Phone Number</label>
              <input type="number" className="form-control required" placeholder="Number" />
            </div>
            <div className="control-group form-group mb-0">
              <label className="form-label">Address</label>
              <input type="text" className="form-control required" placeholder="Address" />
            </div>
          </section>
          <button
            className="btn btn-primary mt-2 float-end mt-4"
            onClick={() => setGoSteps(1)}
          >
            Next
          </button>
          <button
            className="btn btn-primary mt-2 float-start mt-4"
            onClick={() => setGoSteps(0)}
            disabled
          >
            Previous
          </button>
        </div>
      )}
      {goSteps === 1 && (
        <div>
          <span className="Stepperh3">Billing Information</span>
          <section>
            <div className="table-responsive mg-t-20">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td className="text-end">$792.00</td>
                  </tr>
                  <tr>
                    <td><span>Totals</span></td>
                    <td className="text-end text-muted"><span>$792.00</span></td>
                  </tr>
                  <tr>
                    <td><span>Order Total</span></td>
                    <td>
                      <h2 className="price text-end mb-0">$792.00</h2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <div>
            <button
              className="btn btn-primary float-end mt-4"
              onClick={() => setGoSteps(2)}
            >
              Next
            </button>
            <button className="btn btn-primary float-start mt-4" onClick={() => setGoSteps(0)}>
              Previous
            </button>
          </div>
        </div>
      )}
      {goSteps === 2 && (
        <div className="Paymentdetails">
          <span className="Stepperh3">Payment Details</span>
          <section>
            <Form.Group>
              <label className="form-label">CardHolder Name</label>
              <input type="text" className="form-control" id="name1"
                placeholder="First Name" />
            </Form.Group>
            <Form.Group>
              <label className="form-label">Card number</label>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-text btn btn-info shadow-none mb-0">
                  <i className="fa fa-cc-visa"></i> &nbsp; <i
                    className="fa fa-cc-amex"></i> &nbsp;
                  <i className="fa fa-cc-mastercard"></i>
                </span>
              </div>
            </Form.Group>
            <Row>
              <Col sm={8}>
                <Form.Group className="mb-sm-0">
                  <label className="form-label">Expiration</label>
                  <div className="input-group">
                    <input type="number" className="form-control" placeholder="MM"
                      name="expiremonth" />
                    <input type="number" className="form-control" placeholder="YY"
                      name="expireyear" />
                  </div>
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className="mb-0">
                  <label className="form-label">CVV <i
                    className="fa fa-question-circle"></i></label>
                  <input type="number" className="form-control" required />
                </Form.Group>
              </Col>
            </Row>
          </section>
          <button
            className="btn btn-primary float-end mt-4"
            onClick={() => setGoSteps(0)}
          >
            Submit
          </button>
          <button className="btn btn-primary wizer float-start mt-4" onClick={() => setGoSteps(1)}>
            Previous
          </button>
        </div>
      )}
    </div>
  );
};

// Basic Wizard With Validation

function PersonalInformation({ nextStep, handleFormData, values }) {
  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <span className="Stepperh3">Personal Information</span>
      <Form onSubmit={submitFormData}>
        <Row>
          <Col md={5} lg={4}>
            <Form.Group className="">
              <Form.Label className="form-control-label">Firstname: <span className="text-danger">*</span></Form.Label>
              <Form.Control style={{ border: error ? "2px solid #dc3545" : "" }} name="firstName" defaultValue={values.firstName} type="text" placeholder="First Name" onChange={handleFormData("firstName")} />
              {error ? (<Form.Text style={{ color: "#dc3545" }}> This value is required..</Form.Text>) : ("")}
            </Form.Group>
          </Col>
          <Col md={5} lg={4} className="mg-t-20 mg-md-t-0">
            <Form.Group className="">
              <Form.Label className="form-control-label">Lastname: <span className="text-danger">*</span></Form.Label>
              <Form.Control style={{ border: error ? "2px solid #dc3545" : "" }} name="lastName" defaultValue={values.lastName} type="text" placeholder="Last Name" onChange={handleFormData("lastName")} />
              {error ? (<Form.Text style={{ color: "#dc3545" }}> This value is required.. </Form.Text>) : ("")}
            </Form.Group>
          </Col>
        </Row>
        <Button className='mt-4' type="submit"> Continue</Button>
      </Form>
    </div>
  );
}

function BillingInformation({ nextStep, handleFormData, prevStep, values }) {

  const [error, setError] = useState(false);


  const submitFormData = (e) => {
    e.preventDefault();


    if (validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <div>
      <span className="Stepperh3">Billing Information</span>
      <span>Wonderful transition effects.</span>
      <Form onSubmit={submitFormData}>
        <Form.Group className="wd-xs-300">
          <Form.Label>Email:<span className="text-danger">*</span> </Form.Label>

          <Form.Control
            style={{ border: error ? "2px solid red" : "" }}
            type="email"
            placeholder="email"
            onChange={handleFormData("email")}
          />
          {error ? (
            <Form.Text style={{ color: "red" }}>This is a required field</Form.Text>) : ("")}
        </Form.Group>
        <div >
          <Button className="float-start mt-4" onClick={prevStep}> Previous </Button>
          <Button className="float-end mt-4" type="submit">Submit </Button>
        </div>
      </Form>
    </div>
  );
};

function PaymentDetails({ nextStep, handleFormData, prevStep, values }) {

  const setError = useState;


  const submitFormData = (e) => {
    e.preventDefault();


    if (validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };

  const submitForm =()=>{
    alert('form submitted sucessfully !!')
   }
  return (
    <div>
      <span className="Stepperh3">Payment Details</span>
      
      <Form onSubmit={submitFormData}>
      <Form.Group>
        <Form.Label>CardHolder Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" required />

      </Form.Group>
      <Form.Group>
        <Form.Label>Card number</Form.Label>
        <InputGroup>
          <Form.Control type="number" placeholder="Search for..." />
          <span className="input-group-text btn btn-info shadow-none mb-0"> <i className="fa fa-cc-visa"></i> &nbsp; <i className="fa fa-cc-amex"></i> &nbsp;<i className="fa fa-cc-mastercard"></i></span>
        </InputGroup>
      </Form.Group>
      <Row>
        <Col sm={8}>
          <Form.Group className="mb-sm-0">
            <Form.Label >Expiration</Form.Label>
            <InputGroup> <Form.Control type="number" placeholder="MM" name="expiremonth" required />
             
              <Form.Control type="number" placeholder="YY" name="expireyear" required />
               
            </InputGroup>
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Form.Group className="mb-0">
            <Form.Label >CVV <i className="fa fa-question-circle"></i></Form.Label>
            <Form.Control type="number" required />
            
          </Form.Group>
        </Col>
      </Row>

      <div >
        <Button className="float-start mt-4" onClick={prevStep}> Previous </Button>
        <Button className="float-end mt-4" type="submit" onClick={submitForm}>Finish</Button>
      </div>
    </Form>
    </div>
  );
};


export function ValidationForm() {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: ''
  })

  const nextStep = () => {
    setstep(step + 1);
  };

    // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };
// handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
        // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({ 
      ...prevState, 
      [input]: value 
    }));
    
  }
  switch (step) {
    case 1:
      return (<div className="custom-margin"> <PersonalInformation nextStep={nextStep} handleFormData={handleInputData} values={formData} /></div>);

    case 2:
      return (<div className="custom-margin"><BillingInformation nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} /></div>);

    case 3:
      return (<div className="custom-margin"> <PaymentDetails nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} /> </div>);

      default:
        break;
  }
  
}
// Vertical Orientation Wizard
 export const VerticalOrientationWizard = () => {
     const [goSteps, setGoSteps] = useState(0);

     const handleClick=()=>{
      alert('form submitted sucessfully !!')
     }

     return (
       <div className="">
         <Stepper activeStep={goSteps}>
           <Step onClick={() => setGoSteps(0)} />
           <Step onClick={() => setGoSteps(1)} />
           <Step onClick={() => setGoSteps(2)} />
         </Stepper>
         {goSteps === 0 && (
           <>
           <div className="row border" >
             <div className="col-xl-4 border-end">
             <span className="Stepperh3 d-flex p-4"><span className="number step3 me-2">1</span><span className="title " onClick={() => setGoSteps(0)}>Personal Information</span></span>
             <span className="Stepperh3 d-flex p-4"><span className="number step2 me-2">2</span><span className="title Step1" onClick={() => setGoSteps(1)}>Billing Information</span></span>
             <span className="Stepperh3 d-flex p-4"><span className="number step2 me-2">3</span><span className="title Step1" onClick={() => setGoSteps(2)}>Payment Details</span></span>
             </div>
             <div className="col-xl-8 p-4">
             <section>
               <div className="control-group form-group">
                 <label className="form-label">Name</label>
                 <input type="text" className="form-control required" placeholder="Name" />
               </div>
               <div className="control-group form-group">
                 <label className="form-label">Email</label>
                 <input type="email" className="form-control required"
                   placeholder="Email Address" />
               </div>
               <div className="control-group form-group">
                 <label className="form-label">Phone Number</label>
                 <input type="number" className="form-control required" placeholder="Number" />
               </div>
               <div className="control-group form-group mb-0">
                 <label className="form-label">Address</label>
                 <input type="text" className="form-control required" placeholder="Address" />
               </div>
               <div className="control-group form-group mb-0">
               <label className="form-label">Dropify Single Upload</label>
               <Form.Control type="file" />
               </div>
               <div className="control-group form-group mb-0">
               <label className="form-label">Multiple Fancy Upload</label>
               <Form.Control type="file" multiple/>
               </div>
             </section>
             </div>
             <div className="col-xl-4 border-end"></div>
           <div className="col-xl-8 p-4">
          <button
           className="btn btn-primary mt-2 float-end mt-4"
           onClick={() => setGoSteps(1)}
         >
           Next
         </button>
         <button
           className="btn btn-primary mt-2 float-start mt-4"
           onClick={() => setGoSteps(0)}
           disabled
         >
           Previous
         </button>
         </div>
           </div>
         </>
         )}
         {goSteps === 1 && (
           <div>
           <div className="row borders" >
             <div className="col-sm-4 border-right">
             <span className="Stepperh3 d-flex p-4"><span className="number step2 me-2">1</span><span className="title Step1" onClick={() => setGoSteps(0)}>Personal Information</span></span>
             <span className="Stepperh3 d-flex p-4"><span className="number step3 me-2">2</span><span className="title" onClick={() => setGoSteps(1)}>Billing Information </span></span>
             <span className="Stepperh3 d-flex p-4"><span className="number step2 me-2">3</span><span className="title Step1" onClick={() => setGoSteps(2)}>Payment Details</span></span>
             </div>
             <div className="col-sm-8 p-4">
             <section>
               <div className="table-responsive mg-t-20">
                 <table className="table table-bordered">
                   <tbody>
                     <tr>
                       <td>Cart Subtotal</td>
                       <td className="text-end">$792.00</td>
                     </tr>
                     <tr>
                       <td><span>Totals</span></td>
                       <td className="text-end text-muted"><span>$792.00</span></td>
                     </tr>
                     <tr>
                       <td><span>Order Total</span></td>
                       <td>
                         <h2 className="price text-end mb-0">$792.00</h2>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
             </section>
             </div>
             <div className="col-sm-4 border-right"></div>
           <div className="col-sm-8 p-4">
               <button
                 className="btn btn-primary float-end mt-4"
                 onClick={() => setGoSteps(2)}
               >
                 Next
               </button>
               <button className="btn btn-primary float-start mt-4" onClick={() => setGoSteps(0)}>
                 Previous
               </button>
             </div>
             </div>
           </div>
          
         )}
         {goSteps === 2 && (
           <>
           <div className="row borders">
             <div className="col-sm-4 border-right">
           <span className="Stepperh3 d-flex p-4"><span className="number step2 me-2">1</span><span className="title Step1" onClick={() => setGoSteps(0)}>Personal Information</span></span>
             <span className="Stepperh3 d-flex p-4"><span className="number step2 me-2">2</span><span className="title Step1" onClick={() => setGoSteps(1)}>Billing Information </span></span>
             <span className="Stepperh3 d-flex p-4"><span className="number step3 me-2">3</span><span className="title" onClick={() => setGoSteps(2)}>Payment Details</span></span>
             </div>
             <div className="col-sm-8 p-4">
             <section>
               <Form.Group>
                 <label className="form-label">CardHolder Name</label>
                 <input type="text" className="form-control" id="name1"
                   placeholder="First Name" />
               </Form.Group>
               <Form.Group>
                 <label className="form-label">Card number</label>
                 <div className="input-group">
                   <input type="text" className="form-control" placeholder="Search for..." />
                   <span className="input-group-text btn btn-info shadow-none mb-0">
                     <i className="fa fa-cc-visa"></i> &nbsp; <i
                       className="fa fa-cc-amex"></i> &nbsp;
                     <i className="fa fa-cc-mastercard"></i>
                   </span>
                 </div>
               </Form.Group>
               <Row>
                 <Col sm={8}>
                   <Form.Group className="mb-sm-0">
                     <label className="form-label">Expiration</label>
                     <div className="input-group">
                       <input type="number" className="form-control" placeholder="MM"
                         name="expiremonth" />
                       <input type="number" className="form-control" placeholder="YY"
                         name="expireyear" />
                     </div>
                   </Form.Group>
                 </Col>
                 <Col sm={4}>
                   <Form.Group className="mb-0">
                     <label className="form-label">CVV <i
                       className="fa fa-question-circle"></i></label>
                     <input type="number" className="form-control" required />
                   </Form.Group>
                 </Col>
               </Row>
             </section>
             </div>
             <div className="col-sm-4 border-right"></div>
   <div className="col-sm-8 p-4">   <button
               className="btn btn-primary float-end mt-4"
               onClick={() =>{ handleClick(); setGoSteps(0)}}
             >
               Submit
             </button>
             <button className="btn btn-primary wizer float-start mt-4" onClick={() => setGoSteps(1)}>
               Previous
             </button></div>
           </div>
           </>
         )}
       </div>
     );
   };



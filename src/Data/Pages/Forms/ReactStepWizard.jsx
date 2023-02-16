import React from "react";
import { Form, Row } from "react-bootstrap";

function Button({ visible, ...props }) {
    return (

        <button
            className={visible ? "btn btn-primary " : "invisible"}
            {...props}
        />

    );
}
const Wizard = ({ step: currentIndex, ...props }) => {
    const steps = React.Children.toArray(props.children);
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
                        <i>{step.props.title}</i>
                    </button>
                ))}
            </nav>

            {steps[currentIndex]}

            <div className=" p-3 d-flex justify-content-between  ">
                <Button
                    visible={prevStep}
                    onClick={() => props.onChange(currentIndex - 1)}
                    title={prevStep.description}
                >
                    Back
                </Button>
                <Button
                    visible={nextStep}
                    onClick={() => props.onChange(currentIndex + 1)}
                    title={nextStep.description}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};
const Step = ({ children }) => children;

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
                <Step title="LogIn" number="1">
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
                </Step>
                <Step title="NewUser" number="2">
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
                </Step>
                <Step title="End" number="3">
                    <section className="card-body Basicwizard ">
                        <Row>
                            <Form>
                                <Form.Group className="mt-4 mb-3 d-flex">
                                    <Form.Check label='I agree terms and Conditions' />
                                </Form.Group>
                            </Form>
                        </Row>
                    </section>
                </Step>
            </Wizard>
        );
    }
}
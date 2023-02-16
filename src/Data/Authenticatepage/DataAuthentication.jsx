import React, { Component } from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Password extends Component {
    state = {
        isPasswordShown: false
    }
    togglePasswordVisibility = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    }
    render() {
        const { isPasswordShown } = this.state;
        return (
            <div>
                <Form.Group>
                    
                    <InputGroup className="wrap-input100 validate-input" id="Password-toggle">
                        <InputGroup.Text id="basic-addon2" onClick={this.togglePasswordVisibility} className="bg-white p-0">
                            <Link to='#'  className='bg-white text-muted p-3'><i className={`zmdi ${isPasswordShown ? 'zmdi-eye' : 'zmdi-eye-off'} text-muted`} aria-hidden="true" ></i></Link>
                        </InputGroup.Text>
                        <Form.Control className="input100 border-start-0 ms-0" type={(isPasswordShown) ? 'text' : "password"} placeholder="Password" />
                    </InputGroup>
                   
                    
                </Form.Group>
            </div>
        )
    }
}
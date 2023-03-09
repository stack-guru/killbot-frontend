import React, { useState, useEffect } from "react";
import styles from "./Register.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Spinner, Button, Alert, Form, InputGroup } from 'react-bootstrap';
// import { Password } from "../../../Data/Authenticatepage/DataAuthentication";
import { signUp, clearErrorMsg } from "../../../Slices/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Register = () => {
  document
    .querySelector("body")
    .classList.add("app", "sidebar-mini", "ltr", "dark-mode");

  const dispatch = useDispatch();
  const {errorMsg} = useSelector(s => s.user)
  
  const navigate = useNavigate();

  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [registering, setRegistering] = useState(false)

  useEffect(() => {
    dispatch(clearErrorMsg())
  }, [])

  const togglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown)
  }

  const onPressSignUp = (e) => {
    e.preventDefault();
    setRegistering(true)
    dispatch(signUp({name, email, password})).then((e) => {
      setRegistering(false)
      if (e?.type?.includes("fulfilled")) {
        navigate('/dashboard')
      }
    })
  };

  return (
    <div className={styles.Register}>
      {/* <!-- CONTAINER OPEN --> */}
      <Col className="col-login mx-auto mt-7">
        <div className="text-center">
          <img
            src={require("../../../assets/images/brand/logo-white.png")}
            className="header-brand-img m-0"
            alt=""
          />
        </div>
      </Col>
      <div className="container-login100">
        <div className="wrap-login100 p-6">
          <form className="login100-form validate-form">
            <span className="login100-form-title">Registration</span>
            
            {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
            <div
              className="wrap-input100 validate-input input-group"
              data-bs-validate="Valid email is required: ex@abc.xyz"
            >
              <Link to="#" className="input-group-text bg-white text-muted">
                <i className="mdi mdi-account" aria-hidden="true"></i>
              </Link>
              <input
                className="input100 border-start-0 ms-0 form-control"
                type="text"
                placeholder="User name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div
              className="wrap-input100 validate-input input-group"
              data-bs-validate="Valid email is required: ex@abc.xyz"
            >
              <Link to="#" className="input-group-text bg-white text-muted">
                <i className="zmdi zmdi-email" aria-hidden="true"></i>
              </Link>
              <input
                className="input100 border-start-0 ms-0 form-control"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <Form.Group>
              <InputGroup
                className="wrap-input100 validate-input"
                id="Password-toggle"
              >
                <InputGroup.Text
                  id="basic-addon2"
                  onClick={togglePasswordVisibility}
                  className="bg-white p-0"
                >
                  <Link to="#" className="bg-white text-muted p-3">
                    <i
                      className={`zmdi ${
                        isPasswordShown ? "zmdi-eye" : "zmdi-eye-off"
                      } text-muted`}
                      aria-hidden="true"
                    ></i>
                  </Link>
                </InputGroup.Text>
                <Form.Control
                  className="input100 border-start-0 ms-0"
                  type={isPasswordShown ? "text" : "password"}
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            {/* <label className="custom-control custom-checkbox mt-4">
              <input type="checkbox" className="custom-control-input" />
              <span className="custom-control-label">
                Agree the{" "}
                <Link to={`${process.env.PUBLIC_URL}/pages/extension/term`}>
                  terms and policy
                </Link>
              </span>
            </label> */}
            <div className="container-login100-form-btn">
              {
                !registering ? 
                <Button className="btn-block" onClick={onPressSignUp}>Register</Button> :
                <Button className="btn-block" disabled><Spinner className="me-3" animation="grow" size="sm" role="status" aria-hidden="true"></Spinner>Register</Button>
              }
            </div>
            <div className="text-center pt-3">
              <p className="text-dark mb-0">
                Already have account?
                <Link
                  to={`${process.env.PUBLIC_URL}/authentication/login`}
                  className="text-primary ms-1"
                >
                  Sign In
                </Link>
              </p>
            </div>
            {/* <label className="login-social-icon"><span>Register with Social</span></label>
          <div className="d-flex justify-content-center">
            <Link to="#">
              <div className="social-login me-4 text-center">
                <i className="fa fa-google"></i>
              </div>
            </Link>
            <Link to="#">
              <div className="social-login me-4 text-center">
                <i className="fa fa-facebook"></i>
              </div>
            </Link>
            <Link to="#">
              <div className="social-login text-center">
                <i className="fa fa-twitter"></i>
              </div>
            </Link>
          </div> */}
          </form>
        </div>
      </div>
      {/* <!-- CONTAINER CLOSED --> */}
    </div>
  );
};

export default Register;

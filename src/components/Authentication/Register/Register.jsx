import React from 'react';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { Password } from '../../../Data/Authenticatepage/DataAuthentication';


const Register = () => {
  return (
  <div className={styles.Register}>
    {/* <!-- CONTAINER OPEN --> */}
    <Col className="col-login mx-auto mt-7">
      <div className="text-center">
        <img src={require("../../../assets/images/brand/logo-white.png")} className="header-brand-img m-0" alt=""/>
      </div>
    </Col>
    <div className="container-login100">
      <div className="wrap-login100 p-6">
        <form className="login100-form validate-form">
          <span className="login100-form-title">
            Registration
          </span>
          <div className="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
            <Link to="#" className="input-group-text bg-white text-muted">
              <i className="mdi mdi-account" aria-hidden="true"></i>
            </Link>
            <input className="input100 border-start-0 ms-0 form-control" type="text" placeholder="User name"/>
          </div>
          <div className="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
            <Link to="#" className="input-group-text bg-white text-muted">
              <i className="zmdi zmdi-email" aria-hidden="true"></i>
            </Link>
            <input className="input100 border-start-0 ms-0 form-control" type="email" placeholder="Email"/>
          </div>
          <Password/>
          <label className="custom-control custom-checkbox mt-4">
            <input type="checkbox" className="custom-control-input"/>
              <span className="custom-control-label">Agree the <Link to={`${process.env.PUBLIC_URL}/pages/extension/term`}>terms and policy</Link></span>
          </label>
          <div className="container-login100-form-btn">
            <Link to={`${process.env.PUBLIC_URL}/Dashboard`}className="login100-form-btn btn-primary">
              Register
            </Link>
          </div>
          <div className="text-center pt-3">
            <p className="text-dark mb-0">Already have account?<Link to={`${process.env.PUBLIC_URL}/authentication/login`} className="text-primary ms-1">Sign In</Link></p>
          </div>
          <label className="login-social-icon"><span>Register with Social</span></label>
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
          </div>
        </form>
      </div>
    </div>
    {/* <!-- CONTAINER CLOSED --> */}
  </div>
)
};

export default Register;

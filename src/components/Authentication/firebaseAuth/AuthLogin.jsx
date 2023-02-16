import React, { useState } from 'react';
import { Form, Alert, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../../../Firebase/firebase';


const SignIn = () => {
  const [err, setError] = useState("");
  const [loading, setLoader] = useState(false);
  const [passwordshow, setpasswordshow] = useState(false);
  const [data, setData] = useState({
    "email": "adminreact@gmail.com",
    "password": "1234567890",
  })
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setError("");
  }
  const Login = (e) => {
    setLoader(true)
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(
      user =>{console.log(user); RouteChange(); setLoader(false)}).catch(err => { console.log(err);  setError(err.message); setLoader(false) })
  }
  let navigate = useNavigate(); 
  const RouteChange = () =>{ 
    let path = `${process.env.PUBLIC_URL}/dashboard/`; 
    navigate(path);
  }
  return (
    <div>
      <div className='login-img'>
        <div className="page">
          {/* <!-- CONTAINER OPEN --> */}
          <div className="col-login mx-auto mt-7">
            <div className="text-center">
              <img src={require("../../../assets/images/brand/logo-white.png")} className="header-brand-img" alt="" />
            </div>
          </div>
          <div className="container-login100">
            <div className="wrap-login100 p-6">
              <form className="login100-form validate-form">
                <span className="login100-form-title pb-5"> Login</span>
                    <div>
                      {err && <Alert variant="danger">{err}</Alert>}
                      <div className="wrap-input100 validate-input input-group">
                        <Link to="#" className="input-group-text bg-white text-muted">
                          <i className="zmdi zmdi-email text-muted" aria-hidden="true"></i>
                        </Link>
                        <Form.Control className="input100 border-start-0 form-control ms-0" type="email" name="email" placeholder="Email" value={email}
                          onChange={changeHandler} required />{" "}
                      </div>

                      <InputGroup className="wrap-input100 validate-input" id="Password-toggle">
                        <InputGroup.Text id="basic-addon2" className="bg-white p-0" onClick={()=>setpasswordshow(!passwordshow)}>
                          <Link to='#' className='bg-white text-muted p-3'><i className={`zmdi ${passwordshow ? 'zmdi-eye' : 'zmdi-eye-off'} text-muted`}></i></Link>
                        </InputGroup.Text>
                        <Form.Control className="input100 border-start-0 ms-0" type={(passwordshow) ? 'text' : "password"} name="password" placeholder="Password" value={password}
                          onChange={changeHandler} required />{" "}
                      </InputGroup>
                      
                      <div className="container-login100-form-btn">
                        <Link to='#' onClick={Login}className="login100-form-btn btn-primary">
                          Login
                          {loading ? <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span> :""}
                        </Link>
                      </div>
                      
                      <div className="text-center pt-3">
                            <p className="text-dark mb-0">Not a member? <Link to={`${process.env.PUBLIC_URL}/Authentication/firebaseAuth/SignUp`}>
                            Sign UP
                        </Link></p>
                          </div>
                      <div className="text-center pt-3">
                      
                      </div>
                      <label className="login-social-icon"><span>Login with Social</span></label>
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

                    </div>
              </form>
            </div>
          </div>
          {/* // <!-- CONTAINER CLOSED --> */}
        </div>
      </div>
    </div >

  );
}

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;

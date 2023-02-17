import React from 'react';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Tabs, Form, Tab } from 'react-bootstrap';
import { Password } from '../../../Data/Authenticatepage/DataAuthentication';


const Login = () => {
  const navigate = useNavigate()
  // const Log =()=>{
  //   let Rightside = document.querySelector(".mobile-num")
  //   Rightside.style.display = "none";
  //   let Rightsides = document.querySelector(".login-otp")
  //   Rightsides.style.display = "flex";
  // }

  const onLogin = () => {
    localStorage.setItem("isAuthenticated", "Yes")
    navigate(`${process.env.PUBLIC_URL}/dashboard`)
  }

  return (
  
  <div className={styles.Login}>
    

        {/* <!-- CONTAINER OPEN --> */}
        <Col className="col-login mx-auto mt-7">
          <div className="text-center">
            <img src={require("../../../assets/images/brand/logo-white.png")} className="header-brand-img" alt="" />
          </div>
        </Col>
        <div className="container-login100">
          <div className="wrap-login100 p-6">
            <form className="login100-form validate-form">
              <span className="login100-form-title pb-5"> Login</span>
                
              
              <div className="panel panel-primary">
                {/* <div className="tab-menu-heading border-0"> */}
                  {/* <div className="tabs-menu1"> */}
                    {/* <!-- Tabs --> */}
                    {/* <Tabs defaultActiveKey="Email" id="uncontrolled-tab-example" className="tab-content"> */}
                      {/* <Tab eventKey="Email" title="Email" className='p-0 pt-5'> */}
                        
                          <div className="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                            <Link to="#" className="input-group-text bg-white text-muted">
                              <i className="zmdi zmdi-email text-muted" aria-hidden="true"></i>
                            </Link>
                            <input className="input100 border-start-0 form-control ms-0" type="email" placeholder="Email" />
                          </div>
                          <Password/>
                          <div className="text-end pt-4">
                            <p className="mb-0 fs-13"><Link to={`${process.env.PUBLIC_URL}/authentication/forgotpassword`} className="text-primary ms-1">Forgot Password?</Link></p>
                          </div>
                          <div className="container-login100-form-btn">
                            <a href="" className="login100-form-btn btn-primary" onClick={onLogin}>
                              Login
                            </a>
                          </div>
                          <div className="text-center pt-3">
                            <p className="text-dark mb-0 fs-13 mx-3">Not a member?<Link to={`${process.env.PUBLIC_URL}/authentication/register`} className="text-primary ms-1">Sign UP</Link></p>
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
                              <div className="social-login text-center mb-5">
                                <i className="fa fa-twitter"></i>
                              </div>
                            </Link>
                          </div>
                        
                      {/* </Tab> */}
                      {/* <Tab eventKey="Mobile" title="Mobile">
                        <div className="tab-pane pt-5" id="tab6">
                          <div id="mobile-num" className="wrap-input100 mobile-num validate-input input-group mb-4">
                            <Link to="#" className="input-group-text bg-white text-muted">
                              <span>+91</span>
                            </Link>
                            <Form.Control className="input100 border-start-0 ms-0" type='number' />
                          </div>
                          <div id="login-otp" className="justify-content-around login-otp mt-5 mb-5">
                            <Form.Control className="text-center w-15" id="txt1" maxLength={1} />
                            <Form.Control className="text-center w-15" id="txt2" maxLength={1} />
                            <Form.Control className="text-center w-15" id="txt3" maxLength={1} />
                            <Form.Control className="text-center w-15" id="txt4" maxLength={1} />
                          </div>
                          <small>Note : Login with registered mobile number to generate OTP.</small>
                          <div className="container-login100-form-btn ">
                            <Link to="#" className="login100-form-btn btn-primary" id="generate-otp" onClick={()=>Log()}>
                              Proceed
                            </Link>
                          </div>
                        </div>
                      </Tab> */}
                    {/* </Tabs> */}
                  {/* </div> */}
                {/* </div> */}

              </div>

            </form>
          </div>
        </div>
        {/* // <!-- CONTAINER CLOSED --> */}


  </div>
)
};

export default Login;




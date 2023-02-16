import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FormControl, Nav, Navbar, Dropdown, InputGroup, Modal, Row, Col, Badge } from 'react-bootstrap';
import { MENUITEMS } from '../Sidebar/Sidemenu';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { auth } from '../../Firebase/firebase';

const SideMenuIcon = () => {
  //leftsidemenu
  document.querySelector(".app").classList.toggle("sidenav-toggled");
}

// Darkmode
const DarkMode = () => {
  document.querySelector(".app").classList.toggle('dark-mode');
}

// FullScreen
var elem = document.documentElement;
var i = true
const Fullscreen = (vale) => {
  switch (vale) {
    case true:
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
      i = false
      break;
    case false:
      document.exitFullscreen()
      i = true
      break;
      default:
        break;
  }
}

// SwitcherMenu

// const SidSwitcherIcon = () => {

//   //leftsidemenu
//   document.querySelector(".demo_changer").classList.toggle("active");
//   document.querySelector(".demo_changer").style.right = "0px";

// }

const RightSideBar = () => {
  //leftsidemenu

  //rightsidebar
  document.querySelector(".sidebar-right").classList.toggle("sidebar-open");
  //swichermainright
}
const Header = () => {

  document.querySelector('.main-content')?.addEventListener('click', () => {
    console.log("search-result");
    document.querySelector(".search-result")?.classList.add("d-none")
  })

  // For CountrySelector Modal
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [InputValue, setInputValue] = useState("");
  const [searchval, setsearchval] = useState("Type something");
  const [searchcolor, setsearchcolor] = useState("text-dark");
  const [NavData, setNavData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {

  })
  let myfunction = (inputvalue) => {
    document.querySelector(".search-result").classList.remove("d-none")
    console.log('ok');
    
    let i =[]
    let allElement2 = [];
    
    MENUITEMS.map(mainlevel => {
      if (mainlevel.Items) {
        mainlevel.Items.map(sublevel => {
          // console.log("sublevel --- ", sublevel)
          if (sublevel.children) {
            sublevel.children.map(sublevel1 => {
              // console.log("sublevel1 --- ", sublevel1)
              i.push(sublevel1)
              if (sublevel1.children) {
                sublevel1.children.map(sublevel2 => {
                  // console.log("sublevel2 --- ", sublevel2)
                i.push(sublevel2)
                  return sublevel2;
                })
              }
              return sublevel1;
            })
          }
          return sublevel;
        })
      }
      return mainlevel;

    }
    )
    for (let allElement of i){
      if(allElement.title.toLowerCase().includes(inputvalue.toLowerCase())){
        if(allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())){
          setShow2(true)
          allElement2.push(allElement)
        }
        }
      }       
      if(!allElement2.length || inputvalue === ""){
        if(inputvalue === ""){
          setShow2(false);
          setsearchval("Type something")
          setsearchcolor('text-dark')
        }
        if(!allElement2.length){
          setShow2(false);
          setsearchcolor('text-danger')
          setsearchval("There is no component with this name")
        }
      }
      setNavData(allElement2)
  }
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `${process.env.PUBLIC_URL}/`; 
    navigate(path);
  }
  return (
    <div className={styles.Header}>

<div className='header sticky app-header header1'>
        <div className="container-fluid main-container">
          <div className="d-flex">
            <Link aria-label="Hide Sidebar" className="app-sidebar__toggle" data-bs-toggle="sidebar" to="#" onClick={() => SideMenuIcon()} />
            <Link className="logo-horizontal " to={`${process.env.PUBLIC_URL}/Dashboard`}>
              <img src={require("../../assets/images/brand/logo-white.png")} className="header-brand-img desktop-logo" alt="logo" />
              <img src={require("../../assets/images/brand/logo-dark.png")} className="header-brand-img light-logo1" alt="logo" />
            </Link>
            <div className="main-header-center ms-3 d-none d-lg-block">
              <FormControl onChange={(ele=>{myfunction(ele.target.value); setInputValue(ele.target.value)})} onClick={()=>{setShow1(true)}} placeholder="Search for results..." type="search" />
              <button className='btn px-0 pt-2'><i className="fe fe-search" aria-hidden="false"></i></button>
              {show1 ?
                <div className="card search-result p-absolute w-100 card border mt-1">
                <div className="card-header">
                <h4 className="card-title me-2 text-break">Search result of "{InputValue}" </h4>
                </div>
                <ul className='card-body list-group'>
                    {show2 ?
                  NavData.map((e) => 
                  <li  key={Math.random()}>
                    <Link className='list-group-item'  to={`${e.path}/`}>{e.title}</Link>
                  </li>
                    )
                    :<b className={`${searchcolor} list-group-item`}>{searchval}</b>}
                </ul>
                 
                 </div>
                : ""}
            </div>

            <Navbar className="d-flex order-lg-2 ms-auto header-right-icons">
              <Dropdown className="dropdown d-none" >
                <Link to="#" className="nav-link icon " >
                  <i className="fe fe-search"></i>
                </Link>
                <Dropdown.Menu className="header-search dropdown-menu-start ">
                  <InputGroup className="input-group w-100 p-2">
                    <FormControl type="text" placeholder="Search...." />
                    <InputGroup.Text className="btn btn-primary">
                      <i className="fe fe-search" aria-hidden="true"></i>
                    </InputGroup.Text>
                  </InputGroup>
                </Dropdown.Menu>
              </Dropdown>
              <Navbar.Toggle className="d-lg-none ms-auto header2" >
                <span className="navbar-toggler-icon fe fe-more-vertical"></span>
              </Navbar.Toggle>

              <div className="responsive-navbar p-0">

                <Navbar.Collapse className="" id="navbarSupportedContent-4">
                  <div className="d-flex order-lg-2">
                    <Dropdown className="d-lg-none d-flex" >
                      <Dropdown.Toggle href="#" className="nav-link icon no-caret" >
                        <i className="fe fe-search"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="header-search dropdown-menu-start">
                        <InputGroup className="w-100 p-2">
                          <FormControl type="text" placeholder="Search...." />
                          <InputGroup.Text>
                            <i className="fa fa-search" aria-hidden="true" ></i>
                          </InputGroup.Text>
                        </InputGroup>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* Country Select Modal */}

                    <div className="d-flex country">
                      <Link to='#' onClick={handleShow} className="nav-link icon text-center"><i className="fe fe-globe"></i><span className="fs-16 ms-2 d-none d-xl-block">English</span></Link>
                      <Modal className='modal fade' show={show} onHide={handleClose} centered>
                        <Modal.Header>
                          <Modal.Title as='h6'>Choose Country</Modal.Title>
                          <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto' ></i></span>
                        </Modal.Header>
                        <Modal.Body>
                          <Row as='ul' className="p-3">
                            <Col lg={6} as='li' className="mb-2">
                              <Link to="#" className="btn btn-country btn-lg btn-block active">
                                <span className="country-selector"><img alt="" src={require("../../assets/images/flags-img/us_flag.jpg")}
                                  className="me-3 language" /></span>USA
                              </Link>
                            </Col>
                            <Col lg={6} as='li' className="mb-2">
                              <Link to="#" className="btn btn-country btn-lg btn-block">
                                <span className="country-selector"><img alt=""
                                  src={require("../../assets/images/flags-img/italy_flag.jpg")}
                                  className="me-3 language" /></span>Italy
                              </Link>
                            </Col>
                            <Col lg={6} as='li' className="mb-2">
                              <Link to="#" className="btn btn-country btn-lg btn-block">
                                <span className="country-selector"><img alt=""
                                  src={require("../../assets/images/flags-img/spain_flag.jpg")}
                                  className="me-3 language" /></span>Spain
                              </Link>
                            </Col>
                            <Col lg={6} as='li' className="mb-2">
                              <Link to="#" className="btn btn-country btn-lg btn-block">
                                <span className="country-selector"><img alt=""
                                  src={require("../../assets/images/flags-img/india_flag.jpg")}
                                  className="me-3 language" /></span>India
                              </Link>
                            </Col>
                            <Col lg={6} as='li' className="mb-2">
                              <Link to="#" className="btn btn-country btn-lg btn-block">
                                <span className="country-selector"><img alt=""
                                  src={require("../../assets/images/flags-img/french_flag.jpg")}
                                  className="me-3 language" /></span>French
                              </Link>
                            </Col>
                            <Col lg={6} as='li' className="mb-2">
                              <Link to="#" className="btn btn-country btn-lg btn-block">
                                <span className="country-selector"><img alt=""
                                  src={require("../../assets/images/flags-img/russia_flag.jpg")}
                                  className="me-3 language" /></span>Russia
                              </Link>
                            </Col>
                            <Col lg={6} as='li' className="mb-2">
                              <Link to="#" className="btn btn-country btn-lg btn-block">
                                <span className="country-selector"><img alt=""
                                  src={require("../../assets/images/flags-img/germany_flag.jpg")}
                                  className="me-3 language" /></span>Germany
                              </Link>
                            </Col>
                            <Col lg={6} as='li' className="mb-2">
                              <Link to="#" className="btn btn-country btn-lg btn-block">
                                <span className="country-selector"><img alt=""
                                  src={require("../../assets/images/flags-img/argentina.jpg")}
                                  className="me-3 language" /></span>Argentina
                              </Link>
                            </Col>
                            <Col lg={6} as='li' className="mb-2">
                              <Link to="#" className="btn btn-country btn-lg btn-block">
                                <span className="country-selector"><img alt="" src={require("../../assets/images/flags-img/malaysia.jpg")}
                                  className="me-3 language" /></span>Malaysia
                              </Link>
                            </Col>
                            <Col lg={6} as='li' className="mb-2">
                              <Link to="#" className="btn btn-country btn-lg btn-block">
                                <span className="country-selector"><img alt="" src={require("../../assets/images/flags-img/turkey.jpg")}
                                  className="me-3 language" /></span>Turkey
                              </Link>
                            </Col>
                          </Row>
                        </Modal.Body>
                      </Modal>

                    </div>

                    {/* Dark Mode */}

                    <div className="dropdown  d-flex">
                      <Nav.Link className="nav-link icon theme-layout nav-link-bg layout-setting" onClick={() => DarkMode()}>
                        <span className="dark-layout"><i className="fe fe-moon"></i></span>
                        <span className="light-layout"><i className="fe fe-sun"></i></span>
                      </Nav.Link>
                    </div>

                    {/* <!-- Shopping-Cart Theme-Layout --> */}

                    <Dropdown className="d-flex shopping-cart">
                      <Dropdown.Toggle variant='' className="nav-link icon text-center no-caret"> <i className="fe fe-shopping-cart"></i><span className="badge bg-secondary header-badge">4</span></Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading border-bottom">
                          <div className="d-flex">
                            <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark"> My Shopping Cart</h6>
                            <div className="ms-auto">
                              <Badge bg='danger-transparent' className="header-badge text-danger fs-14">Hurry Up!</Badge>
                            </div>
                          </div>
                        </div>
                        {/* <div className="header-dropdown-list message-menu"> */}
                        <PerfectScrollbar style={{ height: "300px" }}>
                          <Dropdown.Item href={`${process.env.PUBLIC_URL}/Ecommerce/shoppingcart`} className="d-flex p-4">

                            <img className="avatar avatar-xl br-5 me-3 align-self-center cover-image" src={require("../../assets/images/products/3.jpg")} alt='pngs-4' />
                            <div className="wd-50p">
                              <h5 className="mb-1">Flower Pot for Home Decor</h5>
                              <span>Status: <span className="text-success">In Stock</span></span>
                              <p className="fs-13 text-muted mb-0">Quantity: 01</p>
                            </div>
                            <div className="ms-auto text-end d-flex fs-16">
                              <span className="fs-16 text-dark d-none d-sm-block px-4">
                                $438
                              </span>
                              <span className="fs-16 btn p-0 cart-trash">
                                <i className="fe fe-trash-2 border text-danger brround d-block p-2"></i>
                              </span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item href={`${process.env.PUBLIC_URL}/Ecommerce/shoppingcart`} className="d-flex p-4">

                            <img
                              className="avatar avatar-xl br-5 me-3 align-self-center cover-image" alt='pngs-6'
                              src={require("../../assets/images/products/5.jpg")} />
                            <div className="wd-50p">
                              <h5 className="mb-1">Black Digital Camera</h5>
                              <span>Status: <span className="text-danger">Out Stock</span></span>
                              <p className="fs-13 text-muted mb-0">Quantity: 06</p>
                            </div>
                            <div className="ms-auto text-end d-flex">
                              <span className="fs-16 text-dark d-none d-sm-block px-4">
                                $867
                              </span>
                              <span className="fs-16 btn p-0 cart-trash">
                                <i className="fe fe-trash-2 border text-danger brround d-block p-2"></i>
                              </span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item href={`${process.env.PUBLIC_URL}/Ecommerce/shoppingcart`} className="d-flex p-4">

                            <img
                              className="avatar avatar-xl br-5 me-3 align-self-center cover-image" alt='pngs-8'
                              src={require("../../assets/images/products/11.jpg")} />
                            <div className="wd-50p">
                              <h5 className="mb-1">Stylish Rockerz 255 Ear Pods</h5>
                              <span>Status: <span className="text-success">In Stock</span></span>
                              <p className="fs-13 text-muted mb-0">Quantity: 05</p>
                            </div>
                            <div className="ms-auto text-end d-flex">
                              <span className="fs-16 text-dark d-none d-sm-block px-4">
                                $323
                              </span>
                              <span className="fs-16 btn p-0 cart-trash">
                                <i className="fe fe-trash-2 border text-danger brround d-block p-2"></i>
                              </span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item href={`${process.env.PUBLIC_URL}/Ecommerce/shoppingcart`} className="d-flex p-4">

                            <img
                              className="avatar avatar-xl br-5 me-3 align-self-center cover-image" alt='pngs-1'
                              src={require("../../assets/images/products/1.jpg")} />
                            <div className="wd-50p">
                              <h5 className="mb-1">Women Party Wear Dress</h5>
                              <span>Status: <span className="text-success">In Stock</span></span>
                              <p className="fs-13 text-muted mb-0">Quantity: 05</p>
                            </div>
                            <div className="ms-auto text-end d-flex">
                              <span className="fs-16 text-dark d-none d-sm-block px-4">
                                $867
                              </span>
                              <span className="fs-16 btn p-0 cart-trash">
                                <i className="fe fe-trash-2 border text-danger brround d-block p-2"></i>
                              </span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item href={`${process.env.PUBLIC_URL}/Ecommerce/shoppingcart`} className="d-flex p-4">

                            <img
                              className="avatar avatar-xl br-5 me-3 align-self-center cover-image" alt='pngs-3'
                              src={require("../../assets/images/products/2.jpg")} />
                            <div className="wd-50p">
                              <h5 className="mb-1">Running Shoes for men</h5>
                              <span>Status: <span className="text-success">In Stock</span></span>
                              <p className="fs-13 text-muted mb-0">Quantity: 05</p>
                            </div>
                            <div className="ms-auto text-end d-flex">
                              <span className="fs-16 text-dark d-none d-sm-block px-4">
                                $456
                              </span>
                              <span className="fs-16 btn p-0 cart-trash">
                                <i className="fe fe-trash-2 border text-danger brround d-block p-2"></i>
                              </span>
                            </div>
                          </Dropdown.Item>
                        </PerfectScrollbar>
                        <Dropdown.Divider className="m-0" />
                        <div className="dropdown-footer">
                          <Link className="btn btn-primary btn-pill w-sm btn-sm py-2" to={`${process.env.PUBLIC_URL}/Ecommerce/checkout`}><i className="fe fe-check-circle"></i> Checkout</Link>
                          <span className="float-end p-2 fs-17 fw-semibold">Total: $6789</span>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* FullScreen button */}

                    <div className="dropdown d-flex">
                      <Nav.Link className="nav-link icon full-screen-link nav-link-bg" onClick={() => Fullscreen(i)}>
                        <i className="fe fe-minimize fullscreen-button"></i>
                      </Nav.Link>
                    </div>

                    {/* Notification */}

                    <Dropdown className="d-flex notifications">
                      <Dropdown.Toggle variant='' className="nav-link icon no-caret"><i className="fe fe-bell"></i><span className=" pulse"></span></Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading border-bottom">
                          <div className="d-flex">
                            <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark">Notifications
                            </h6>
                          </div>
                        </div>
                        <div className="notifications-menu">
                          <Dropdown.Item className="d-flex" href={`${process.env.PUBLIC_URL}/Pages/notificationlist`}>
                            <div
                              className="me-3 notifyimg  bg-primary brround box-shadow-primary">
                              <i className="fe fe-mail"></i>
                            </div>
                            <div className="mt-1">
                              <h5 className="notification-label mb-1">New Application received
                              </h5>
                              <span className="notification-subtext">3 days ago</span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className="d-flex" href={`${process.env.PUBLIC_URL}/Pages/notificationlist`}>
                            <div
                              className="me-3 notifyimg  bg-secondary brround box-shadow-secondary">
                              <i className="fe fe-check-circle"></i>
                            </div>
                            <div className="mt-1">
                              <h5 className="notification-label mb-1">Project has been
                                approved</h5>
                              <span className="notification-subtext">2 hours ago</span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className="d-flex" href={`${process.env.PUBLIC_URL}/Pages/notificationlist`}>
                            <div
                              className="me-3 notifyimg  bg-success brround box-shadow-success">
                              <i className="fe fe-shopping-cart"></i>
                            </div>
                            <div className="mt-1">
                              <h5 className="notification-label mb-1">Your Product Delivered
                              </h5>
                              <span className="notification-subtext">30 min ago</span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className="d-flex" href={`${process.env.PUBLIC_URL}/Pages/notificationlist`}>
                            <div className="me-3 notifyimg bg-pink brround box-shadow-pink">
                              <i className="fe fe-user-plus"></i>
                            </div>
                            <div className="mt-1">
                              <h5 className="notification-label mb-1">Friend Requests</h5>
                              <span className="notification-subtext">1 day ago</span>
                            </div>
                          </Dropdown.Item>
                        </div>
                        <div className="dropdown-divider m-0"></div>
                        <Dropdown.Item href={`${process.env.PUBLIC_URL}/Pages/notificationlist`}
                          className="dropdown-item text-center p-3 text-muted">View all
                          Notification</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* Messages */}

                    <Dropdown className="d-flex message">
                      <Dropdown.Toggle variant='' className="nav-link icon text-center no-caret">
                        <i className="fe fe-message-square"></i><span className="pulse-danger"></span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading border-bottom">
                          <div className="d-flex">
                            <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark">You have 5
                              Messages</h6>
                            <div className="ms-auto">
                              <Link to="#" className="text-muted p-0 fs-12">make all unread</Link>
                            </div>
                          </div>
                        </div>
                        <div className="message-menu">
                          <Dropdown.Item className="d-flex" href={`${process.env.PUBLIC_URL}/apps/chat`}>
                            <img
                              className="avatar avatar-md brround me-3 align-self-center cover-image" alt='user-1'
                              src={require("../../assets/images/users/1.jpg")} />
                            <div className="wd-90p">
                              <div className="d-flex">
                                <h5 className="mb-1">Peter Theil</h5>
                                <small className="text-muted ms-auto text-end">
                                  6:45 am
                                </small>
                              </div>
                              <span>Commented on file Guest list....</span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className="d-flex" href={`${process.env.PUBLIC_URL}/apps/chat`}>
                            <img
                              className="avatar avatar-md brround me-3 align-self-center cover-image" alt='user-15'
                              src={require("../../assets/images/users/15.jpg")} />
                            <div className="wd-90p">
                              <div className="d-flex">
                                <h5 className="mb-1">Abagael Luth</h5>
                                <small className="text-muted ms-auto text-end">
                                  10:35 am
                                </small>
                              </div>
                              <span>New Meetup Started......</span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className="d-flex" href={`${process.env.PUBLIC_URL}/apps/chat`}>
                            <img
                              className="avatar avatar-md brround me-3 align-self-center cover-image" alt='user-12'
                              src={require("../../assets/images/users/12.jpg")} />
                            <div className="wd-90p">
                              <div className="d-flex">
                                <h5 className="mb-1">Brizid Dawson</h5>
                                <small className="text-muted ms-auto text-end">
                                  2:17 pm
                                </small>
                              </div>
                              <span>Brizid is in the Warehouse...</span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className="d-flex" href={`${process.env.PUBLIC_URL}/apps/chat`}>
                            <img
                              className="avatar avatar-md brround me-3 align-self-center cover-image" alt='user-4'
                              src={require("../../assets/images/users/4.jpg")} />
                            <div className="wd-90p">
                              <div className="d-flex">
                                <h5 className="mb-1">Shannon Shaw</h5>
                                <small className="text-muted ms-auto text-end">
                                  7:55 pm
                                </small>
                              </div>
                              <span>New Product Realease......</span>
                            </div>
                          </Dropdown.Item>

                        </div>
                        <div className="dropdown-divider m-0"></div>
                        <Dropdown.Item to="#" className="text-center p-3 text-muted">See all
                          Messages</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* Right Side-bar */}

                    <div className="dropdown d-flex header-settings" onClick={() => RightSideBar()}>
                      <Link to="#;" className="nav-link icon"
                        data-bs-toggle="sidebar-right" data-target=".sidebar-right">
                        <i className="fe fe-align-right"></i>
                      </Link>
                    </div>

                    {/* Profile  */}

                    <Dropdown className="d-flex profile-1">
                      <Dropdown.Toggle variant='' className="nav-link leading-none d-flex no-caret">
                        <img src={require("../../assets/images/users/21.jpg")} alt="profile-user"
                          className="avatar  profile-user brround cover-image" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading">
                          <div className="text-center">
                            <h5 className="text-dark mb-0 fs-14 fw-semibold">Percy Kewshun</h5>
                            <small className="text-muted">Senior Admin</small>
                          </div>
                        </div>
                        <div className="dropdown-divider m-0"></div>
                        <Dropdown.Item className="dropdown-item" href={`${process.env.PUBLIC_URL}/Pages/profile`}>
                          <i className="dropdown-icon fe fe-user"></i> Profile
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href={`${process.env.PUBLIC_URL}/Pages/mailinbox`}>
                          <i className="dropdown-icon fe fe-mail"></i> Inbox
                          <span className="badge bg-danger rounded-pill float-end">5</span>
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href={`${process.env.PUBLIC_URL}/Authentication/lockscreen`}>
                          <i className="dropdown-icon fe fe-lock"></i> Lockscreen
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" onClick={() => {auth.signOut();routeChange()}}>
                          <i className="dropdown-icon fe fe-alert-circle"></i> Sign out
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                  </div>
                </Navbar.Collapse>
              </div>

              {/* Switcher  */}

              {/* <div className="demo-icon nav-link icon" onClick={() => SidSwitcherIcon()}>
                <i className="fe fe-settings fa-spin  text_primary"></i>
              </div> */}

            </Navbar>
          </div>
        </div>
      </div>
    </div>
  )

};

export default Header;

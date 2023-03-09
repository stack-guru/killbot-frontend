import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FormControl, Nav, Modal, Row, Col, Dropdown, Badge, Navbar, InputGroup } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { MENUITEMS } from '../Sidebar/Sidemenu';
import { auth } from '../../Firebase/firebase';
// import { connect } from "react-redux";  
import { shopingData } from '../../Data/DataECommerce/DataShoppingCart';
// import { AddToCart } from '../../Redux/action';
import { logOut } from "../../Slices/userSlice";
import { useSelector, useDispatch } from "react-redux";

//leftsidemenu
const SideMenuIcon = () => {
  document.querySelector(".app").classList.toggle("sidenav-toggled");
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

const RightSideBar = () => {

  //rightsidebar
  document.querySelector(".sidebar-right").classList.toggle("sidebar-open");
  //swichermainright
}

const Header = ({ local_varaiable,AddToCart }) => {
  document.querySelector('.main-content')?.addEventListener('click', () => {
    document.querySelector(".search-result")?.classList.add("d-none")
  })

  const dispatch = useDispatch();

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


  let navigate = useNavigate();
  const routeChange = () => {
    let path = `${process.env.PUBLIC_URL}/`;
    navigate(path);
  }
  let myfunction = (inputvalue) => {
    document.querySelector(".search-result").classList.remove("d-none")
    // console.log('ok');

    let i = []
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
    for (let allElement of i) {
      if (allElement.title.toLowerCase().includes(inputvalue.toLowerCase())) {
        if (allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())) {
          setShow2(true)
          allElement2.push(allElement)
        }
      }
    }
    if (!allElement2.length || inputvalue === "") {
      if (inputvalue === "") {
        setShow2(false);
        setsearchval("Type something")
        setsearchcolor('text-dark')
      }
      if (!allElement2.length) {
        setShow2(false);
        setsearchcolor('text-danger')
        setsearchval("There is no component with this name")
      }
    }
    setNavData(allElement2)

  }

  // let location = useLocation();

  const signOut = () => {
    // auth.signOut(); 
    // localStorage.removeItem("isAuthenticated");
    dispatch(logOut())
    routeChange()
  }


  const [FiltershopingData, sethopingData] = useState([])
	const [Price, setPrice] = useState(0)

	// useEffect(() => {
  //   console.log(local_varaiable);
	// 	if (local_varaiable == undefined) {
	// 		sethopingData(shopingData)
	// 		shopingData.filter((ele) => {
	// 			setPrice(Number(ele.newprice) + Price);
	// 		})
	// 	}
	// 	else if (local_varaiable.length == 0) {
	// 		sethopingData(shopingData)
	// 		shopingData.filter((ele) => {
	// 			setPrice(Number(ele.newprice) + Price);
	// 		})
	// 	}
	// 	else {
	// 		sethopingData(local_varaiable)
	// 		local_varaiable.filter((ele) => {
	// 			setPrice(Number(ele.newprice) + Price);
	// 		})
	// 	}

	// },[local_varaiable])

  // function handleRemove(id) {
	// 	if (local_varaiable == undefined) {
	// 		const RemoveData = FiltershopingData.filter((ale) => ale.id !== id);
	// 		sethopingData(RemoveData);
	// 	}
	// 	else if (local_varaiable.length == 0) {
	// 		const RemoveData = FiltershopingData.filter((ale) => ale.id !== id);
	// 		sethopingData(RemoveData);
	// 	}
	// 	else {
	// 		const RemoveData = FiltershopingData.filter((ale) => ale.id !== id);
	// 		sethopingData(RemoveData);
	// 	}
	// };

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
              <Navbar.Toggle className="d-lg-none ms-auto header2 navbar-toggler navresponsive-toggler" >
                <span className="navbar-toggler-icon fe fe-more-vertical"></span>
              </Navbar.Toggle>

              <div className="responsive-navbar navbar p-0">

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

                        <PerfectScrollbar style={{ height: "300px"  }} className="header-dropdown-list message-menu">
                          {FiltershopingData !== "" ? shopingData.map((idx) => (
                            <Dropdown.Item href={`${process.env.PUBLIC_URL}/Ecommerce/shoppingcart`} className="d-flex p-4" key={Math.random()}>

                              <img className="avatar avatar-xl br-5 me-3 align-self-center cover-image" src={idx.preview} alt='pngs-4' />
                              <div className="wd-50p">
                                <h5 className="mb-1">{idx.heading}</h5>
                                <span>Status: <span className={`text-success`}>In Stock</span></span>
                                <p className="fs-13 text-muted mb-0">Quantity: {idx.quantity}</p>
                              </div>
                              <div className="ms-auto text-end d-flex fs-16">
                                <span className="fs-16 text-dark d-none d-sm-block px-4">
                                  {idx.price1}
                                </span>
                                <span className="fs-16 btn p-0 cart-trash">
                                  <i className="fe fe-trash-2 border text-danger brround d-block p-2"></i>
                                </span>
                              </div>
                            </Dropdown.Item>
                          )): <p className='text-danger'>"There is no product available in the Cart"</p>}
                        </PerfectScrollbar>
                        <Dropdown.Divider className="m-0" />
                        <div className="dropdown-footer">
                          <Link className="btn btn-primary btn-pill w-sm btn-sm py-2" to={`${process.env.PUBLIC_URL}/Ecommerce/checkout`}><i className="fe fe-check-circle"></i> Checkout</Link>
                          <span className="float-end p-2 fs-17 fw-semibold">Total:$6789</span>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* FullScreen button */}

                    <div className="dropdown d-flex">
                      <Nav.Link className="nav-link icon full-screen-link nav-link-bg" onClick={() => Fullscreen(i)}>
                        <i className="fe fe-minimize fullscreen-button"></i>
                      </Nav.Link>
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
                        <Dropdown.Item className="dropdown-item" onClick={signOut}>
                          <i className="dropdown-icon fe fe-alert-circle"></i> Sign out
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                  </div>
                </Navbar.Collapse>
              </div>

            </Navbar>
          </div>
        </div>
      </div>
    </div>
  )

};
// const mapStateToProps = (state) => ({
//   local_varaiable: state,
// });
// export default connect(mapStateToProps, {AddToCart})(Header);
export default Header;
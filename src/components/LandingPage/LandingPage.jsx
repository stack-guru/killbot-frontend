import React from 'react';
import { Button, Card, Col, Container, Nav, Row, Tab, Accordion, Badge, FormControl, InputGroup, NavbarBrand, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from "react-router-dom"
import { Features, Testimonials } from '../../Data/LandingPageData/DataLandingPage';
import styles from './LandingPage.module.scss';


const LandingPage = () => {

    const SidSwitcherIcon = () => {

        //leftsidemenu
        document.querySelector(".demo_changer").classList.toggle("active");
        let Rightside = document.querySelector(".demo_changer")
        Rightside.style.right = "0px";

    }
    const SidSwitcherIcons = () => {

        //leftsidemenu
        document.querySelector(".demo_changer").classList.remove("active");
        let Rightside = document.querySelector(".demo_changer")
        Rightside.style.right = "-270px";

    }
    const sidebarToggled = () => {
        document.querySelector(".app").classList.toggle("sidenav-toggled");
    }

    return (
        <div className={styles.LandingPage}>
            {/* <!-- CONTAINER --> */}
            {/* <!-- app-Header --> */}
            <div className="page">
                <div className="page-main">
                    {/* <!--app-content open--> */}
                    <div className="hor-header header">
                        <Container className="main-container">
                            <div className="d-flex">
                                <Link aria-label="Hide Sidebar" className="app-sidebar__toggle" data-bs-toggle="sidebar" to="#" onClick={() => sidebarToggled()}></Link>
                                {/* <!-- sidebar-toggle--> */}
                                <Link className="logo-horizontal " to={`${process.env.PUBLIC_URL}/dashboard`}>
                                    <img src={require("../../assets/images/brand/logo-white.png")} className="header-brand-img desktop-logo" alt="logo" />
                                    <img src={require("../../assets/images/brand/logo-dark.png")} className="header-brand-img light-logo1" alt="logo" />
                                </Link>
                                {/* <!-- LOGO --> */}
                                <Navbar className="d-flex order-lg-2 ms-auto header-right-icons">
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler navresponsive-toggler d-lg-none ms-auto"
                                    >
                                        <i className="navbar-toggler-icon fe fe-more-vertical"></i>
                                    </Navbar.Toggle>
                                    <div className="responsive-navbar p-0" id="basic-navbar-nav">
                                        <NavbarCollapse className=" bg-white px-0" id="navbarSupportedContent-4">
                                            {/* <!-- SEARCH --> */}
                                            <div className="header-nav-right p-5">
                                                <Link to={`${process.env.PUBLIC_URL}/authentication/register`} className="btn ripple btn-min w-sm btn-outline-primary me-2">New User
                                                </Link>
                                                <Link to={`${process.env.PUBLIC_URL}/authentication/login`} className="btn ripple btn-min w-sm btn-primary me-2">Login
                                                </Link>
                                            </div>
                                        </NavbarCollapse>
                                    </div>
                                    <div className="demo-icon  nav-link icon" > <i className="fe fe-settings fa-spin  text_primary" onClick={() => SidSwitcherIcon()}></i> </div>
                                </Navbar>
                            </div>
                        </Container>
                    </div>
                    <div className="landing-top-header overflow-hidden">
                        <div className="top sticky overflow-hidden">
                            {/* <!--APP-SIDEBAR--> */}
                            <div className="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
                            <div className="app-sidebar bg-transparent horizontal-main">
                                <Container>
                                    <Row>
                                        <Navbar className="main-sidemenu navbar px-0 justify-content-between">
                                            <NavbarBrand className="ps-0 d-none d-lg-block" href={`${process.env.PUBLIC_URL}/dashboard`}>
                                                <img alt="logo-3" className="logo-2" src={require("../../assets/images/brand/logo-dark.png")} />
                                                <img src={require("../../assets/images/brand/logo-white.png")} className="logo-3" alt="logo" />
                                            </NavbarBrand>

                                            <ul className="side-menu">
                                                <li className="slide">
                                                    <a className="side-menu__item active" data-bs-toggle="slide" href="#home"><span className="side-menu__label">Home</span></a>
                                                </li>
                                                <li className="slide">
                                                    <a className="side-menu__item" data-bs-toggle="slide" href="#Features"><span className="side-menu__label">Features</span></a>
                                                </li>
                                                <li className="slide">
                                                    <a className="side-menu__item" data-bs-toggle="slide" href="#About"><span className="side-menu__label">About</span></a>
                                                </li>
                                                <li className="slide">
                                                    <a className="side-menu__item" data-bs-toggle="slide" href="#Faqs"><span className="side-menu__label">Faq's</span></a>
                                                </li>
                                                <li className="slide">
                                                    <a className="side-menu__item" data-bs-toggle="slide" href="#Blog"><span className="side-menu__label">Blog</span></a>
                                                </li>
                                                <li className="slide">
                                                    <a className="side-menu__item" data-bs-toggle="slide" href="#Clients"><span className="side-menu__label">Clients</span></a>
                                                </li>
                                                <li className="slide">
                                                    <a className="side-menu__item" data-bs-toggle="slide" href="#Contact"><span className="side-menu__label">Contact</span></a>
                                                </li>
                                            </ul>
                                            <div className="header-nav-right d-lg-flex d-none">
                                                <Link to={`${process.env.PUBLIC_URL}/authentication/register`} className="btn ripple btn-min w-sm btn-outline-primary me-2 my-auto d-lg-none d-xl-block d-block">New User
                                                </Link>
                                                <Link to={`${process.env.PUBLIC_URL}/authentication/login`} className="btn ripple btn-min w-sm btn-primary me-2 my-auto d-lg-none d-xl-block d-block">Login
                                                </Link>
                                            </div>
                                            <div className="demo-icon demoicon nav-link icon" > <i className="fe fe-settings fa-spin  text_primary" onClick={() => SidSwitcherIcon()}></i> </div>
                                        </Navbar>
                                    </Row>
                                </Container>
                            </div>
                            {/* <!--/APP-SIDEBAR--> */}
                        </div>
                        <div className="demo-screen-headline main-demo main-demo-1 spacing-top overflow-hidden" id="home" onClick={() => SidSwitcherIcons()}>
                            <Container className="px-sm-0">
                                <Row>
                                    <Col xl={6} lg={6} className="mb-5 pb-5 animation-zidex pos-relative">
                                        <h4 className="fw-semibold mt-7">Manage Your Business</h4>
                                        <h1 className="text-start fw-bold">We Help to Build Your Dream Project with <span className="text-primary animate-heading">Sash</span></h1>
                                        <h6 className="pb-3">
                                            Sash - Now you can use this admin template to design stunning dashboards
                                            that will wow your target viewers or users to no end. To create a good and well-structured dashboard,
                                            you need to start from scratch with HTML, SCSS, CSS, and JS and with lots of coding,
                                            but by using this Sash-Admin template.</h6>
                                        <Link to="#" className="btn ripple btn-min w-lg mb-3 me-2 btn-primary"><i className="fe fe-play mx-2"></i> Get Started</Link>
                                        <Link to="#" className="btn ripple btn-min w-lg btn-outline-primary mb-3 me-2"><i className="fe fe-eye mx-2"></i>Discover More</Link>
                                    </Col>
                                    <Col xl={6} lg={6} className="my-auto"><img src={require("../../assets/images/landing/3.png")} alt="landing" /></Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className="main-content mt-0" onClick={() => SidSwitcherIcons()}>
                        <div className="side-app" >

                            {/* <!-- CONTAINER --> */}
                            <div className="main-container" >
                                <div className="">
                                    {/* <!-- ROW-1 OPEN --> */}
                                    <div className="section pb-0">
                                        <Container>
                                            <Row>
                                                <h4 className="text-center fw-semibold">Statistics</h4>
                                                <span className="landing-title"></span>
                                                <h2 className="text-center fw-semibold mb-7">Sash Template Statistics.</h2>
                                            </Row>
                                            <Row className="text-center services-statistics landing-statistics">
                                                <Col xl={3} md={6} lg={6}>
                                                    <Card>
                                                        <Card.Body className="bg-primary-transparent">
                                                            <div className="counter-status">
                                                                <div className="counter-icon bg-primary-transparent box-shadow-primary">
                                                                    <i className="fe fe-layers text-primary fs-23"></i>
                                                                </div>
                                                                <div className="test-body text-center">
                                                                    <h1 className=" mb-0">
                                                                        <span className="counter fw-semibold counter ">100</span>+
                                                                    </h1>
                                                                    <div className="counter-text">
                                                                        <h5 className="font-weight-normal mb-0 ">HTML Pages</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col xl={3} md={6} lg={6}>
                                                    <Card>
                                                        <Card.Body className="bg-secondary-transparent">
                                                            <div className="counter-status">
                                                                <div className="counter-icon bg-secondary-transparent box-shadow-secondary">
                                                                    <i className="fe fe-wind text-secondary fs-23"></i>
                                                                </div>
                                                                <div className="text-body text-center">
                                                                    <h1 className=" mb-0">
                                                                        <span className="counter fw-semibold counter ">60</span>+
                                                                    </h1>
                                                                    <div className="counter-text">
                                                                        <h5 className="font-weight-normal mb-0 ">Integrated Plugins</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col xl={3} md={6} lg={6}>
                                                    <Card>
                                                        <Card.Body className="bg-success-transparent">
                                                            <div className="counter-status">
                                                                <div className="counter-icon bg-success-transparent box-shadow-success">
                                                                    <i className="fe fe-file-text text-success fs-23"></i>
                                                                </div>
                                                                <div className="text-body text-center">
                                                                    <h1 className=" mb-0">
                                                                        <span className="counter fw-semibold counter ">10</span>+
                                                                    </h1>
                                                                    <div className="counter-text">
                                                                        <h5 className="font-weight-normal mb-0 ">Form Elements</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col xl={3} md={6} lg={6}>
                                                    <Card>
                                                        <Card.Body className="bg-danger-transparent">
                                                            <div className="counter-status">
                                                                <div className="counter-icon bg-danger-transparent box-shadow-danger">
                                                                    <i className="fe fe-grid text-danger fs-23"></i>
                                                                </div>
                                                                <div className="text-body text-center">
                                                                    <h1 className=" mb-0">
                                                                        <span className="counter fw-semibold counter ">30</span>+
                                                                    </h1>
                                                                    <div className="counter-text">
                                                                        <h5 className="font-weight-normal mb-0 ">Customize Widgets</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                    {/* <!-- ROW-1 CLOSED --> */}

                                    {/* <!-- ROW-2 OPEN --> */}
                                    <div className="sptb section bg-white" id="Features">
                                        <Container>
                                            <Row>
                                                <h4 className="text-center fw-semibold">Features</h4>
                                                <span className="landing-title"></span>
                                                <h2 className="fw-semibold text-center">Sash Main Features</h2>
                                                <p className="text-default mb-5 text-center">The Sash admin template comes with ready-to-use features that are completely easy-to-use for any user, even for a beginner.</p>
                                                <Row className="mt-7">
                                                    <Col lg={6} md={12}>
                                                        <Card className="features main-features main-features-1 wow fadeInUp" data-wow-delay="0.1s">
                                                            <div className="bg-img mb-2 text-left">

                                                                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><circle cx="64" cy="64" r="64" fill="#42A3DB" /><path fill="#347CBE" d="M85.5 26.6L66.1 61 33.3 98.6 62.6 128H64c33.7 0 61.3-26 63.8-59.1L85.5 26.6z" /><path fill="#CD2F30" d="M73.1 57.7h-16c3.6 18.7 11.1 36.6 22.1 52.5.3-5 1-9.8 1.8-14.5 4.6 1.3 9.2 2.3 13.7 3-9.7-12.2-17-26.1-21.6-41z" /><path fill="#F04D45" d="M54.9 57.7c-4.6 15-11.9 28.9-21.6 40.9 4.5-.7 9.1-1.7 13.7-3 .9 4.7 1.5 9.5 1.8 14.5 11-15.9 18.4-33.8 22.1-52.5h-16z" /><path fill="#FFF" d="M93.5 52c1.8-1.8 1.8-4.7 0-6.5-1.3-1.3-1.7-3.3-1-5 1-2.4-.1-5-2.5-6-1.7-.7-2.8-2.4-2.8-4.3 0-2.5-2.1-4.6-4.6-4.6-1.9 0-3.5-1.1-4.3-2.8-1-2.4-3.7-3.5-6-2.5-1.7.7-3.7.3-5-1-1.8-1.8-4.7-1.8-6.5 0-1.3 1.3-3.3 1.7-5 1-2.4-1-5 .1-6 2.5-.7 1.7-2.4 2.8-4.3 2.8-2.5 0-4.6 2.1-4.6 4.6 0 1.9-1.1 3.5-2.8 4.3-2.4 1-3.5 3.7-2.5 6 .7 1.7.3 3.7-1 5-1.8 1.8-1.8 4.7 0 6.5 1.3 1.3 1.7 3.3 1 5-1 2.4.1 5 2.5 6 1.7.7 2.8 2.4 2.8 4.3 0 2.5 2.1 4.6 4.6 4.6 1.9 0 3.5 1.1 4.3 2.8 1 2.4 3.7 3.5 6 2.5 1.7-.7 3.7-.3 5 1 1.8 1.8 4.7 1.8 6.5 0 1.3-1.3 3.3-1.7 5-1 2.4 1 5-.1 6-2.5.7-1.7 2.4-2.8 4.3-2.8 2.5 0 4.6-2.1 4.6-4.6 0-1.9 1.1-3.5 2.8-4.3 2.4-1 3.5-3.7 2.5-6-.7-1.7-.3-3.7 1-5z" /><path fill="#FFCD0A" d="M64 70.8c-12.2 0-22.1-9.9-22.1-22.1 0-12.2 9.9-22.1 22.1-22.1 12.2 0 22.1 9.9 22.1 22.1 0 12.2-9.9 22.1-22.1 22.1z" /><path fill="#FFF" d="M59.9 61c-.6 0-1.1-.2-1.5-.7l-8.3-9.2c-.7-.8-.7-2.1.1-2.8.8-.7 2.1-.7 2.8.1l6.7 7.5 15.1-18.8c.7-.9 2-1 2.8-.3.9.7 1 2 .3 2.8L61.4 60.2c-.3.5-.9.8-1.5.8z" /></svg>
                                                            </div>
                                                            <div className="text-left">
                                                                <h4 className="fw-bold">Quality &amp; Clean Code</h4>
                                                                <p className="mb-0">The Sash admin code is maintained very cleanly and well-structured with proper comments.</p>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col lg={6} md={12}>
                                                        <Card className="features main-features main-features-2 wow fadeInUp" data-wow-delay="0.1s">
                                                            <div className="bg-img mb-2 text-left">

                                                                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><circle cx="64" cy="64" r="64" fill="#FFCD0A" /><path fill="#F6AF1A" d="M127.7 57.7l-26.4-26.4-74.7 58.8L64.5 128c35.1-.3 63.5-28.8 63.5-64 0-2.1-.1-4.2-.3-6.3z" /><path fill="#CFD5DF" d="M76.2 102.9H51.8l2-13.6h20.4z" /><path fill="#545E70" d="M97.1 91.7H30.9c-3.5 0-6.4-2.9-6.4-6.4V36.1c0-3.5 2.9-6.4 6.4-6.4h66.2c3.5 0 6.4 2.9 6.4 6.4v49.3c0 3.5-2.9 6.3-6.4 6.3z" /><path fill="#E6E8EB" d="M24.5 81.4v4c0 3.5 2.9 6.4 6.4 6.4h66.2c3.5 0 6.4-2.9 6.4-6.4v-4h-79z" /><path fill="#49C7EF" d="M30.9 74.3c-1 0-1.8-.8-1.8-1.8V36.1c0-1 .8-1.8 1.8-1.8h66.2c1 0 1.8.8 1.8 1.8v36.4c0 1-.8 1.8-1.8 1.8H30.9z" /><path fill="#17B6EA" d="M37.8 34.3h52.5v40H37.8z" /><path fill="#E6E8EB" d="M76.7 105.3H51.3c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4h25.4c1.3 0 2.4 1.1 2.4 2.4-.1 1.3-1.1 2.4-2.4 2.4z" /><path fill="#ACB2B9" d="M53.2 91.7l22.7 8.8-1.3-8.8z" /><path fill="#FFF" d="M75.7 47.8H52.3c-.6 0-1.1-.5-1.1-1.1v-2.9c0-.6.5-1.1 1.1-1.1h23.3c.6 0 1.1.5 1.1 1.1v2.9c0 .6-.4 1.1-1 1.1zM75.7 57.1H52.3c-.6 0-1.1-.5-1.1-1.1v-2.9c0-.6.5-1.1 1.1-1.1h23.3c.6 0 1.1.5 1.1 1.1V56c0 .6-.4 1.1-1 1.1z" /><path fill="#FFCD0A" d="M62.8 65.9H52.3c-.6 0-1.1-.5-1.1-1.1v-2.9c0-.6.5-1.1 1.1-1.1h10.4c.6 0 1.1.5 1.1 1.1v2.9c0 .6-.4 1.1-1 1.1z" /><g fill="#CFD5DF"><circle cx="54.1" cy="45.3" r="1.2" /><circle cx="57.6" cy="45.3" r="1.2" /><circle cx="61" cy="45.3" r="1.2" /><circle cx="64.5" cy="45.3" r="1.2" /><circle cx="67.9" cy="45.3" r="1.2" /></g><g fill="#CFD5DF"><circle cx="54.1" cy="54.6" r="1.2" /><circle cx="57.6" cy="54.6" r="1.2" /><circle cx="61" cy="54.6" r="1.2" /><circle cx="64.5" cy="54.6" r="1.2" /><circle cx="67.9" cy="54.6" r="1.2" /></g><g fill="#FFF"><path d="M56.9 64.4c-.3.3-.6.4-1 .4s-.8-.1-1-.4c-.3-.3-.4-.6-.4-1s.1-.7.4-1c.3-.3.6-.4 1-.4s.8.1 1 .4c.3.3.4.6.4 1s-.1.7-.4 1zm-.2-1c0-.2-.1-.5-.2-.6-.2-.2-.4-.3-.6-.3s-.4.1-.6.3c-.2.2-.2.4-.2.6 0 .2.1.5.2.6.2.2.4.3.6.3s.4-.1.6-.3c.1-.2.2-.4.2-.6zM58.3 62h.6v1.1l1-1.1h.8l-1.1 1.2c.1.1.3.4.5.7s.4.6.6.8H60l-.8-1.1-.3.4v.8h-.6V62z" /></g><circle cx="64" cy="86.6" r="2.8" fill="#545E70" /><g fill="#E6E8EB"><path d="M92.6 49.7v9.2c0 1.2 1.6 1.6 2.2.5l2.3-4.6c.2-.3.2-.7 0-1l-2.3-4.6c-.6-1.1-2.2-.7-2.2.5zM36.1 58.9v-9.2c0-1.2-1.6-1.6-2.2-.5l-2.3 4.6c-.2.3-.2.7 0 1l2.3 4.6c.6 1.1 2.2.7 2.2-.5z" /></g></svg>
                                                            </div>
                                                            <div className="text-left">
                                                                <h4 className="fw-bold">Multiple Demos</h4>
                                                                <p className="mb-0">
                                                                    We included multiple demos, preview video, and screen shots to give a quick overview of our Sash admin template.
                                                                </p>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col lg={6} md={12}>
                                                        <Card className="features main-features main-features-11 wow fadeInUp" data-wow-delay="0.1s">
                                                            <div className="bg-img mb-2 text-left">
                                                                <svg id="SvgjsSvg1001" width="50" height="50" xmlns="http://www.w3.org/2000/svg" version="1.1"><defs id="SvgjsDefs1002"></defs><g id="SvgjsG1008"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50"><circle cx="64" cy="64" r="64" fill="#bed530" className="colorBED530 svgShape"></circle><path fill="#acc437" d="M112.8 53.7l-4.6-3.7L85 27l-.9 6.9H77L70 27l-1.3 3.7-6 5.7-9.4-9.4-.9 3.7-8.9 2.3-6-6-5 8.2-3.9 63.7 28.9 28.8c2.2.2 4.4.3 6.6.3 33.7 0 61.4-26.2 63.8-59.3l-15.1-15z" className="colorACC437 svgShape"></path><path fill="#ffffff" d="M86.5 101.8H34.2c-3.6 0-6.5-2.9-6.5-6.5v-58c0-3.6 2.9-6.5 6.5-6.5h52.3c3.6 0 6.5 2.9 6.5 6.5v58c0 3.6-2.9 6.5-6.5 6.5z" className="colorFFF svgShape"></path><path fill="#e6e8eb" d="M75.6 78l-9.5 12.3 11.5 11.5h8.8c3.6 0 6.5-2.9 6.5-6.5V67.7L75.6 78z" className="colorE6E8EB svgShape"></path><path fill="#e2247e" d="M88.5 58.8h8v31.9h-8z" transform="rotate(-135.032 92.483 74.797)" className="colorE2247E svgShape"></path><path fill="#ee3e88" d="M82.9 53.2h8v31.9h-8z" transform="rotate(-135.032 86.846 69.166)" className="colorEE3E88 svgShape"></path><path fill="#f06197" d="M77.2 47.6h8v31.9h-8z" transform="rotate(-135.032 81.209 63.535)" className="colorF06197 svgShape"></path><path fill="#cfd5df" d="M87 56h23.9v2.2H87z" transform="rotate(-135.032 98.922 57.076)" className="colorCFD5DF svgShape"></path><path fill="#545e70" d="M102.2 43.2l10.5 10.5c1.8 1.8 1.8 4.6 0 6.4l-4.6 4.6-16.8-16.9 4.6-4.6c1.7-1.7 4.6-1.7 6.3 0z" className="color545E70 svgShape"></path><path fill="#fcd65e" d="M67.1 72l-1.7 16.7c-.1 1.1.8 2 1.9 1.9L84 88.9 67.1 72z" className="colorFCD65E svgShape"></path><path fill="#f6af1a" d="M65.4 88.7c-.1.6.2 1.1.5 1.5l9.6-9.6-8.4-8.6-1.7 16.7z" className="colorF6AF1A svgShape"></path><path fill="#ffcd0a" d="M66.1 90.3l12.2-7-5.6-5.6-7 12.2c.2.1.3.3.4.4z" className="colorFFCD0A svgShape"></path><path fill="#7d6c7c" d="M65.9 83.9l-.5 4.8c-.1 1.1.8 2 1.9 1.9l4.8-.5-6.2-6.2z" className="color7D6C7C svgShape"></path><path fill="#5b4b57" d="M65.9 83.9l-.5 4.8c-.1.6.2 1.1.5 1.5l3.1-3.1-3.1-3.2z" className="color5B4B57 svgShape"></path><path fill="#6b5969" d="M68 86l-2.2 3.9c.1.2.2.3.4.4l3.9-2.3-2.1-2z" className="color6B5969 svgShape"></path><circle cx="84.1" cy="39.6" r="4.1" fill="#bed530" className="colorBED530 svgShape"></circle><circle cx="68.2" cy="39.6" r="4.1" fill="#bed530" className="colorBED530 svgShape"></circle><circle cx="52.4" cy="39.6" r="4.1" fill="#bed530" className="colorBED530 svgShape"></circle><circle cx="36.5" cy="39.6" r="4.1" fill="#bed530" className="colorBED530 svgShape"></circle><path fill="#545e70" d="M84.1 40.5c-1.1 0-1.9-.9-1.9-1.9v-10c0-1.1.9-1.9 1.9-1.9 1.1 0 1.9.9 1.9 1.9v10c.1 1.1-.8 1.9-1.9 1.9zM68.3 40.5c-1.1 0-1.9-.9-1.9-1.9v-10c0-1.1.9-1.9 1.9-1.9 1.1 0 1.9.9 1.9 1.9v10c0 1.1-.9 1.9-1.9 1.9zM52.4 40.6c-1.1 0-1.9-.9-1.9-1.9v-10c0-1.1.9-1.9 1.9-1.9 1.1 0 1.9.9 1.9 1.9v10c0 1-.9 1.9-1.9 1.9zM36.5 40.6c-1.1 0-1.9-.9-1.9-1.9v-10c0-1.1.9-1.9 1.9-1.9 1.1 0 1.9.9 1.9 1.9v10c0 1-.8 1.9-1.9 1.9z" className="color545E70 svgShape"></path></svg></g></svg>
                                                            </div>
                                                            <div className="text-left">
                                                                <h4 className="fw-bold">Validation Forms</h4>
                                                                <p className="mb-0">
                                                                    Different types of “Form Validation” are implemented in this Sash admin template and used strict validation rules.
                                                                </p>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col lg={6} md={12}>
                                                        <Card className="features main-features main-features-10 wow fadeInUp" data-wow-delay="0.1s">
                                                            <div className="bg-img mb-2 text-left">
                                                                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" version="1.1" ><defs id="SvgjsDefs1055"></defs><g id="SvgjsG1056"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50"><circle cx="64" cy="64" r="64" fill="#58e1ef" className="colorD9B9A9 svgShape"></circle><path fill="#47d4e4" d="M71.4 127.6c29.4-3.4 52.7-26.7 56.1-56.1L74.8 18.6 51.9 31.2 31.2 47.4 18.6 74.8l52.8 52.8z" className="colorD6AB9A svgShape"></path><path fill="#6b5969" d="M64 101.5c-20.7 0-37.5-16.8-37.5-37.5S43.3 26.5 64 26.5s37.5 16.8 37.5 37.5-16.8 37.5-37.5 37.5zm0-70.3c-18.1 0-32.8 14.7-32.8 32.8S45.9 96.8 64 96.8 96.8 82.1 96.8 64 82.1 31.2 64 31.2z" className="color6B5969 svgShape"></path><circle cx="64" cy="28.8" r="14.8" fill="#ffffff" className="colorFFF svgShape"></circle><path fill="#8663a7" d="M64 39.1c-5.6 0-10.2-4.6-10.2-10.2S58.4 18.7 64 18.7s10.2 4.6 10.2 10.2S69.6 39.1 64 39.1z" className="color8663A7 svgShape"></path><circle cx="64" cy="99.2" r="14.8" fill="#ffffff" className="colorFFF svgShape"></circle><path fill="#3d9c46" d="M64 109.4c-5.6 0-10.2-4.6-10.2-10.2S58.4 89 64 89s10.2 4.6 10.2 10.2-4.6 10.2-10.2 10.2z" className="color3D9C46 svgShape"></path><circle cx="99.2" cy="64" r="14.8" fill="#ffffff" className="colorFFF svgShape"></circle><path fill="#ee3e88" d="M99.2 74.2C93.6 74.2 89 69.6 89 64s4.6-10.2 10.2-10.2 10.2 4.6 10.2 10.2-4.6 10.2-10.2 10.2z" className="colorEE3E88 svgShape"></path><circle cx="28.8" cy="64" r="14.8" fill="#ffffff" className="colorFFF svgShape"></circle><path fill="#ffcd0a" d="M28.8 74.2c-5.6 0-10.2-4.6-10.2-10.2s4.6-10.2 10.2-10.2S39.1 58.4 39.1 64s-4.6 10.2-10.3 10.2z" className="colorFFCD0A svgShape"></path><path fill="#ffffff" d="M98.4 61.8v1.9h2.5v1.5h-2.5v2.7h4.4v1.6h-7.4v-1.6h1.2v-2.7h-1.3v-1.5h1.3v-1.9c0-1.2.3-2.1.9-2.6.6-.5 1.4-.8 2.4-.8 1.3 0 2.3.6 2.9 1.7l-1.2 1c-.4-.7-.9-1-1.6-1-.5 0-.9.1-1.2.4s-.4.7-.4 1.3z" className="colorFFF svgShape"></path></svg></g></svg>
                                                            </div>
                                                            <div className="text-left">
                                                                <h4 className="fw-bold">Widgets</h4>
                                                                <p className="mb-0">
                                                                    30+ widgets are included in this template. Please check out the best option that suits you and implement it in your projects.
                                                                </p>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col lg={6} md={12}>
                                                        <Card className="features main-features main-features-9 wow fadeInUp" data-wow-delay="0.1s">
                                                            <div className="bg-img mb-2 text-left">
                                                                <svg id="SvgjsSvg1156" width="50" height="50" xmlns="http://www.w3.org/2000/svg" version="1.1"><defs id="SvgjsDefs1157"></defs><g id="SvgjsG1158"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50"><circle cx="64" cy="64" r="64" fill="#f579a2" className="color1F68B0 svgShape"></circle><path fill="#d6607b" d="M128 64c0-2.7-.2-5.3-.5-7.9l-21.8-21.8-84 58.7 34.5 34.5c2.6.3 5.2.5 7.8.5 35.3 0 64-28.7 64-64z" className="color2A519C svgShape"></path><path fill="#ffffff" d="M101.8 95H26.2c-3.3 0-6-2.7-6-6V39c0-3.3 2.7-6 6-6h75.7c3.3 0 6 2.7 6 6v50c-.1 3.3-2.7 6-6.1 6z" className="colorFFF svgShape"></path><path fill="#ffffff" d="M20.2 44.9V89c0 3.3 2.7 6 6 6h75.7c3.3 0 6-2.7 6-6V44.9H20.2z" className="colorFFF svgShape"></path><path fill="#3c29de" d="M107.8 45v-6c0-3.3-2.7-6-6-6H26.2c-3.3 0-6 2.7-6 6v6h87.6z" className="colorFFCD0A svgShape"></path><circle cx="28.7" cy="39" r="3.3" fill="#ffffff" className="colorFFF svgShape"></circle><circle cx="28.7" cy="39" r="1.9" fill="#543bc1" className="colorF04D45 svgShape"></circle><circle cx="37.3" cy="39" r="3.3" fill="#ffffff" className="colorFFF svgShape"></circle><circle cx="37.3" cy="39" r="1.9" fill="#9c583d" className="color3D9C46 svgShape"></circle><circle cx="46" cy="39" r="3.3" fill="#ffffff" className="colorFFF svgShape"></circle><circle cx="46" cy="39" r="1.9" fill="#6b595d" className="color6B5969 svgShape"></circle><path fill="#ffffff" d="M99.3 42.3H57.2c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3h42.1c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3z" className="colorFFF svgShape"></path><path fill="#dfdecf" d="M101.8 50.4H26.2c-.3 0-.5.2-.5.5V89c0 .3.2.5.5.5h75.7c.3 0 .5-.2.5-.5V50.9c-.1-.3-.3-.5-.6-.5zM34.5 66.6H41v6.6h-6.5v-6.6zm-1 6.7h-6.8v-6.6h6.8v6.6zm8.5-6.7h6.5v6.6H42v-6.6zm36.5-1H72V59h6.5v6.6zm1-6.6H86v6.6h-6.5V59zM57 66.6h6.5v6.6H57v-6.6zm-1 6.7h-6.5v-6.6H56v6.6zm8.5-6.7H71v6.6h-6.5v-6.6zm7.5 0h6.5v6.6H72v-6.6zm-1-1h-6.5V59H71v6.6zm-7.5 0H57V59h6.5v6.6zm-7.5 0h-6.5V59H56v6.6zm-7.5 0H42V59h6.5v6.6zm0 8.7v6.6H42v-6.6h6.5zm1 0H56v6.6h-6.5v-6.6zm7.5 0h6.5v6.6H57v-6.6zm7.5 0H71v6.6h-6.5v-6.6zm7.5 0h6.5v6.6H72v-6.6zm7.5 0H86v6.6h-6.5v-6.6zm0-1v-6.6H86v6.6h-6.5zm7.5-6.7h6.5v6.6H87v-6.6zm7.5 0h6.8v6.6h-6.8v-6.6zm0-1V59h6.8v6.6h-6.8zm-1 0H87V59h6.5v6.6zM87 58v-6.6h6.5V58H87zm-1 0h-6.5v-6.6H86V58zm-7.5 0H72v-6.6h6.5V58zM71 58h-6.5v-6.6H71V58zm-7.5 0H57v-6.6h6.5V58zM56 58h-6.5v-6.6H56V58zm-7.5 0H42v-6.6h6.5V58zM41 58h-6.5v-6.6H41V58zm0 1v6.6h-6.5V59H41zm-7.5 6.6h-6.8V59h6.8v6.6zm-6.8 8.7h6.8v6.6h-6.8v-6.6zm7.8 0H41v6.6h-6.5v-6.6zm6.5 7.6v6.6h-6.5v-6.6H41zm1 0h6.5v6.6H42v-6.6zm7.5 0H56v6.6h-6.5v-6.6zm7.5 0h6.5v6.6H57v-6.6zm7.5 0H71v6.6h-6.5v-6.6zm7.5 0h6.5v6.6H72v-6.6zm7.5 0H86v6.6h-6.5v-6.6zm7.5 0h6.5v6.6H87v-6.6zm0-1v-6.6h6.5v6.6H87zm7.5-6.6h6.8v6.6h-6.8v-6.6zm6.8-16.3h-6.8v-6.6h6.8V58zm-67.8-6.6V58h-6.8v-6.6h6.8zm-6.8 30.5h6.8v6.6h-6.8v-6.6zm67.8 6.6v-6.6h6.8v6.6h-6.8z" className="colorCFD5DF svgShape"></path><path fill="#fff591" d="M30.6 66.1h5.1V89h-5.1z" className="colorD7E14A svgShape"></path><path fill="#9c583d" d="M40.9 61.6H46V89h-5.1z" className="color3D9C46 svgShape"></path><path fill="#f5587b" d="M51.2 68.9h5.1V89h-5.1z" className="colorEE3E88 svgShape"></path><path fill="#a76372" d="M61.5 61.6h5.1V89h-5.1z" className="color8663A7 svgShape"></path><path fill="#c2633e" d="M92.3 69.6h5.1v19.5h-5.1z" className="color9AC23E svgShape"></path><path fill="#543bc1" d="M71.7 54h5.1v35h-5.1z" className="colorF04D45 svgShape"></path><path fill="#b0052b" d="M82 60.8h5.1V89H82z" className="color05B0A6 svgShape"></path></svg></g></svg>
                                                            </div>
                                                            <div className="text-left">
                                                                <h4 className="fw-bold">9 Types of Charts</h4>
                                                                <p className="mb-0">
                                                                    We included nine (9) types of the best possible chart options for your project. You can customize with your requirement.
                                                                </p>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col lg={6} md={12}>
                                                        <Card className="features main-features main-features-12 mb-4 wow fadeInUp" data-wow-delay="0.1s">
                                                            <div className="bg-img mb-2 text-left">
                                                                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><circle cx="64" cy="64" r="64" fill="#F49C20" /><path fill="#EC7B24" d="M127.5 56.2l-30-30-7.4 8.2-21-21h-6.7l-5.5 4.9 5.5 27.2h17.9l-50.1 56 26 26c2.6.3 5.2.5 7.8.5 35.3 0 64-28.7 64-64 0-2.6-.2-5.2-.5-7.8z" /><path fill="#545E70" d="M91.3 104.8H36.7c-4.4 0-8-3.6-8-8V31.2c0-4.4 3.6-8 8-8h54.6c4.4 0 8 3.6 8 8v65.6c0 4.4-3.6 8-8 8z" /><path fill="#FFF" d="M34.7 29.3h58.7V94H34.7z" /><path fill="#CFD5DF" d="M87.8 32.7H40.1c0-2.9 1.2-5.6 3.1-7.5 1.9-1.9 4.6-3.1 7.5-3.1h6.1v-3.8c0-3.9 3.2-7.1 7.1-7.1 3.9 0 7.1 3.2 7.1 7.1v3.8h6.1c6 0 10.7 4.8 10.7 10.6z" /><path fill="#ACB2B9" d="M40.7 29.3c-.4 1.1-.6 2.2-.6 3.4h47.7c0-1.2-.2-2.3-.6-3.4H40.7z" /><circle cx="64" cy="18.1" r="3.6" fill="#EC7B24" /><path fill="#E6E8EB" d="M79.7 80.4h13.6L79.7 94.1z" /><path fill="#CFD5DF" d="M79.7 94.1l13.6-13.7v13.7M52.3 51.4H41.5c-.4 0-.8-.3-.8-.8V39.9c0-.4.3-.8.8-.8h10.8c.4 0 .8.3.8.8v10.8c-.1.4-.4.7-.8.7zm-10-1.5h9.3v-9.3h-9.3v9.3zM52.3 68.6H41.5c-.4 0-.8-.3-.8-.8V57.1c0-.4.3-.8.8-.8h10.8c.4 0 .8.3.8.8v10.8c-.1.4-.4.7-.8.7zm-10-1.5h9.3v-9.3h-9.3v9.3zM67.9 42.7h-11c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h11c.4 0 .8.3.8.8s-.4.8-.8.8zM80.6 42.7h-8.9c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h8.9c.4 0 .8.3.8.8s-.4.8-.8.8zM87.8 42.7h-3.5c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h3.5c.4 0 .8.3.8.8s-.3.8-.8.8zM61.4 46h-4.5c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h4.5c.4 0 .8.3.8.8s-.4.8-.8.8zM73 46h-7.8c-.4 0-.8-.3-.8-.8s.3-.8.8-.8H73c.4 0 .8.3.8.8s-.4.8-.8.8zM87.8 46h-11c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h11c.4 0 .8.3.8.8s-.3.8-.8.8zM67.9 49.3h-11c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h11c.4 0 .8.3.8.8s-.4.8-.8.8zM77.7 49.3h-6c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h6c.4 0 .8.3.8.8s-.3.8-.8.8zM87.8 49.3h-6.3c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h6.3c.4 0 .8.3.8.8s-.3.8-.8.8zM67.9 59.9h-11c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h11c.4 0 .8.3.8.8s-.4.8-.8.8zM80.6 59.9h-8.9c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h8.9c.4 0 .8.3.8.8s-.4.8-.8.8zM87.8 59.9h-3.5c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h3.5c.4 0 .8.3.8.8s-.3.8-.8.8zM61.4 63.2h-4.5c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h4.5c.4 0 .8.3.8.8s-.4.8-.8.8zM73 63.2h-7.8c-.4 0-.8-.3-.8-.8s.3-.8.8-.8H73c.4 0 .8.3.8.8s-.4.8-.8.8zM87.8 63.2h-11c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h11c.4 0 .8.3.8.8s-.3.8-.8.8z" /><g><path fill="#CFD5DF" d="M67.9 66.5h-11c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h11c.4 0 .8.3.8.8s-.4.8-.8.8zM77.7 66.5h-6c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h6c.4 0 .8.3.8.8s-.3.8-.8.8zM87.8 66.5h-6.3c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h6.3c.4 0 .8.3.8.8s-.3.8-.8.8z" /></g><path fill="#F04D45" d="M57.8 36.2c-1.3.2-2.5.7-3.6 1.5-1.1.7-2.1 1.6-2.9 2.5-.9.9-1.7 1.9-2.4 3-.3.4-.5.8-.8 1.2-.1-.1-.2-.2-.2-.3-.3-.4-.7-.7-1.2-1-.2-.1-.5-.3-.7-.4-.3-.1-.5-.2-.9-.2-.8-.1-1.5.5-1.6 1.4-.1.8.5 1.5 1.4 1.6h.2c.1 0 .2.1.3.1.2.1.4.3.6.4.2.2.4.4.5.6.2.2.3.5.4.8 0 .5.3 1 .8 1.1.6.2 1.3-.1 1.6-.7l.1-.4c.1-.2.2-.5.3-.8l.4-.8c.3-.5.5-1.1.8-1.6.6-1 1.2-2.1 1.9-3 .7-1 1.5-1.9 2.4-2.6.9-.8 1.9-1.4 3-1.7.2-.1.3-.2.3-.4-.3-.2-.5-.3-.7-.3zm-8.6 10.2zM57.8 54.9c-1.3.2-2.5.7-3.6 1.5-1.1.7-2.1 1.6-2.9 2.5-.9.9-1.7 1.9-2.4 3-.3.4-.5.8-.8 1.2-.1-.1-.2-.2-.2-.3-.3-.4-.7-.7-1.2-1-.2-.1-.5-.3-.7-.4-.3-.1-.5-.2-.9-.2-.8-.1-1.5.5-1.6 1.4-.1.8.5 1.5 1.4 1.6h.2c.1 0 .2.1.3.1.2.1.4.3.6.4.2.2.4.4.5.6.2.2.3.5.4.8 0 .5.3 1 .8 1.1.6.2 1.3-.1 1.6-.7l.1-.4c.1-.2.2-.5.3-.8l.4-.8c.3-.5.5-1.1.8-1.6.6-1 1.2-2.1 1.9-3 .7-1 1.5-1.9 2.4-2.6.9-.8 1.9-1.4 3-1.7.2-.1.3-.2.3-.4-.3-.2-.5-.4-.7-.3zm-8.6 10.2z" /></svg>
                                                            </div>
                                                            <div className="text-left">
                                                                <h4 className="fw-bold">Documentation</h4>
                                                                <p className="mb-0">
                                                                    The documentation provides clear-cut material for the Sash admin template. The documentation is explained or instructed in such a way that every user can understand.
                                                                </p>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </Row>
                                        </Container>
                                    </div>
                                    {/* <!-- ROW-2 CLOSED --> */}

                                    {/* <!-- ROW-3 OPEN --> */}
                                    <div className="section bg-landing pb-0 bg-image-style" id="About">
                                        <Container>
                                            <Row>
                                                <h4 className="text-center fw-semibold">Our Mission</h4>
                                                <span className="landing-title"></span>
                                                <div className="text-center">
                                                    <h2 className="text-center fw-semibold">Our mission is to make work meaningful.</h2>
                                                </div>
                                                <Col lg={12}>
                                                    <Card className="bg-transparent">
                                                        <Card.Body className="text-dark">
                                                            <div className="statistics-info">
                                                                <Row>
                                                                    <Col xl={6} lg={6} className="ps-0">
                                                                        <div className="text-center mb-3" >
                                                                            <img src={require("../../assets/images/landing/1.png")} alt="" className="br-5" />
                                                                        </div>
                                                                    </Col>
                                                                    <Col xl={6} lg={6} className="pe-0 my-auto">

                                                                        <div className="ps-5">
                                                                            <h2 className="text-start fw-semibold fs-25 mb-6">We are a creative agency with a passion for design.</h2>
                                                                            <div className="d-flex">
                                                                                <span><svg width="20" height="20" viewBox="0 0 24 24">
                                                                                    <path fill="#6c5ffc" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
                                                                                </svg></span>
                                                                                <div className="ms-5 mb-4">
                                                                                    <h5 className="fw-bold">Quality & Clean Code</h5>
                                                                                    <p>The Sash admin code is maintained very cleanly and well-structured with proper comments.</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex">
                                                                                <span><svg width='20' height='20px' viewBox="0 0 24 24">
                                                                                    <path fill="#6c5ffc" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
                                                                                </svg></span>
                                                                                <div className="ms-5 mb-4">
                                                                                    <h5 className="fw-bold">Well Documented</h5>
                                                                                    <p>
                                                                                        The documentation provides clear-cut material for the Sash admin template. The documentation is explained or instructed in such a way that every user can understand.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                    {/* <!-- ROW-3 CLOSED --> */}

                                    {/* <!-- ROW-4 OPEN --> */}
                                    <div className="section testimonial-owl-landing">
                                        <Container>
                                            <Row>
                                                <Card className="bg-transparent mb-0">
                                                    <h4 className="text-center fw-semibold text-white">Features</h4>
                                                    <span className="landing-title"></span>
                                                    <div className="demo-screen-skin code-quality" id="dependencies">
                                                        <div className="text-center p-0">
                                                            <h2 className="text-center fw-semibold text-white">Features Used in Sash Admin Template</h2>
                                                            <Row className="justify-content-center">
                                                                <Col lg={12} className="px-0">
                                                                    <div className="feature-logos mt-5">
                                                                        <Features />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </Row>
                                        </Container>
                                    </div>
                                    {/* <!-- ROW-4 CLOSED --> */}

                                    {/* <!-- ROW-5 OPEN --> */}
                                    <div className="section">
                                        <Container>
                                            <Row>
                                                <section className="sptb demo-screen-demo" id="faqs">
                                                    <Container>
                                                        <Row className="align-items-center">
                                                            <h4 className="text-center fw-semibold">Highlights</h4>
                                                            <span className="landing-title"></span>
                                                            <h2 className="text-center fw-semibold">Template Highlights</h2>
                                                            <Col lg={12}>
                                                                <Row className="justify-content-center">
                                                                    <Col lg={9} as='p' className="text-default sub-text mb-7">
                                                                        The Sash admin template is one of the modern dashboard templates.
                                                                        It is also a premium admin dashboard with high-end features, where users can easily customize
                                                                        or change their projects according to their choice. Please take a quick look at our template highlights.
                                                                    </Col>
                                                                </Row>
                                                                <Row id="grid">
                                                                    <Col lg={6}>
                                                                        <Col md={12} className="grid-item px-0 mb-5">
                                                                            <Accordion className="bg-primary-transparent p-0 ">
                                                                                <Accordion.Item eventKey="0" className='mb-5 bg-primary-transparent'>
                                                                                    <Accordion.Header className="card-options-collapse h5 fw-bold mb-0 text-primary">Switch Easily From Vertical to Horizontal Menu</Accordion.Header>
                                                                                    <Accordion.Body className="pt-0">
                                                                                        <p>
                                                                                            The Sash – Bootstrap 5 Admin & Dashboard Template is available in both vertical and horizontal menus.
                                                                                            Both menus are managed by single assets. Where users can easily switch from vertical to horizontal menus.
                                                                                        </p>
                                                                                        <p className="mt-2 mb-3">
                                                                                            <span className="fw-bold">Note: </span>Please Refer full Documentation
                                                                                            for more details.
                                                                                        </p>
                                                                                        <Button href="#" target="_blank" variant='outline-primary' className="tx-13">Click here</Button>
                                                                                    </Accordion.Body>
                                                                                </Accordion.Item>
                                                                            </Accordion>
                                                                        </Col>
                                                                        <Col md={12} className="grid-item  px-0 mb-5">

                                                                            <Accordion className="bg-success-transparent p-0">
                                                                                <Accordion.Item eventKey="0" className='mb-5  bg-primary-transparent'>
                                                                                    <Accordion.Header className="card-options-collapse  h5 fw-bold mb-0 text-success">Switch Easily From LTR to RTL Version</Accordion.Header>
                                                                                    <Accordion.Body className="pt-0">
                                                                                        <p>
                                                                                            The Sash – Bootstrap 5 Admin & Dashboard Template is available in LRT & RTL versions with single assets. Using those single assets, it’s very easy to switch from one version to another version.
                                                                                        </p>
                                                                                        <p className="mt-2 mb-3">
                                                                                            <span className="fw-bold">Note: </span>Please Refer full Documentation
                                                                                            for more details.
                                                                                        </p>
                                                                                        <Button href="#" target="_blank" variant='outline-success' className="tx-13">Click here</Button>

                                                                                    </Accordion.Body>
                                                                                </Accordion.Item>
                                                                            </Accordion>
                                                                        </Col>
                                                                        <Col md={12} className="grid-item  px-0 mb-5">

                                                                            <Accordion className="bg-info-transparent p-0">
                                                                                <Accordion.Item eventKey="0" className='mb-5  bg-primary-transparent'>
                                                                                    <Accordion.Header className="card-options-collapse h5 fw-bold mb-0 text-success">Switch Easily From One Color to Another Color style</Accordion.Header>
                                                                                    <Accordion.Body className="pt-0">
                                                                                        <p>
                                                                                            The Sash – Bootstrap 5 Admin & Dashboard Template is available in different types of color styles.
                                                                                            Where the users can change their template completely with those color styles.
                                                                                        </p>
                                                                                        <p className="mt-2 mb-3">
                                                                                            <span className="fw-bold">Note: </span>Please Refer full Documentation
                                                                                            for more details.
                                                                                        </p>
                                                                                        <Button href="#" target="_blank" variant='outline-info' className="tx-13">Click here</Button>

                                                                                    </Accordion.Body>
                                                                                </Accordion.Item>
                                                                            </Accordion>
                                                                        </Col>
                                                                    </Col>
                                                                    <Col lg={6}>
                                                                        <Col md={12} className="grid-item  px-0 mb-5">
                                                                            <Accordion className="bg-secondary-transparent p-0">
                                                                                <Accordion.Item eventKey="0" className='mb-5  bg-primary-transparent'>
                                                                                    <Accordion.Header className="card-options-collapse  h5 fw-bold mb-0 text-secondary">Switch Easily From Full Width to Boxed Layout</Accordion.Header>
                                                                                    <Accordion.Body className="pt-0">
                                                                                        <p>
                                                                                            The Sash – Bootstrap 5 Admin & Dashboard Template is also available in two different types of layouts
                                                                                            “Full Width” and “Boxed” Layouts. So that user can switch their dashboard from one layout to another
                                                                                            layout effortlessly.
                                                                                        </p>
                                                                                        <p className="mt-2 mb-3">
                                                                                            <span className="fw-bold">Note: </span>Please Refer full Documentation
                                                                                            for more details.
                                                                                        </p>
                                                                                        <Button href="#" target="_blank" variant='outline-secondary' className="tx-13">Click here</Button>

                                                                                    </Accordion.Body>
                                                                                </Accordion.Item>
                                                                            </Accordion>
                                                                        </Col>
                                                                        <Col md={12} className="grid-item  px-0 mb-5">

                                                                            <Accordion className="bg-warning-transparent p-0">
                                                                                <Accordion.Item eventKey="0" className='mb-5  bg-primary-transparent'>
                                                                                    <Accordion.Header className="card-options-collapse  h5 fw-bold mb-0 text-warning">Change Easily Side Menu Styles</Accordion.Header>
                                                                                    <Accordion.Body className="pt-0">
                                                                                        <p>
                                                                                            The Sash – Bootstrap 5 Admin & Dashboard Template is also available in different types of Side Menu Styles.
                                                                                            Where the users can change their Side Menu styles by using single assets.
                                                                                        </p>
                                                                                        <p className="mt-2 mb-3">
                                                                                            <span className="fw-bold">Note: </span>Please Refer full Documentation
                                                                                            for more details.
                                                                                        </p>
                                                                                        <Button href="#" target="_blank" variant='outline-warning' className="tx-13">Click here</Button>

                                                                                    </Accordion.Body>
                                                                                </Accordion.Item>
                                                                            </Accordion>
                                                                        </Col>
                                                                        <Col md={12} className="grid-item  px-0 mb-5">
                                                                            <Accordion className="bg-danger-transparent p-0">
                                                                                <Accordion.Item eventKey="0" className='mb-5  bg-primary-transparent'>
                                                                                    <Accordion.Header className="card-options-collapse  h5 fw-bold mb-0 text-danger">Easily From Fixed to Scrollable Layout</Accordion.Header>
                                                                                    <Accordion.Body className="pt-0">
                                                                                        <p>
                                                                                            The Sash – Bootstrap 5 Admin & Dashboard Template is also available in two
                                                                                            different types of layouts "Fixed Layout" and "Scrollable Layout". Here users
                                                                                            can switch their Template from one layout to another layout easily.
                                                                                        </p>
                                                                                        <p className="mt-2 mb-3">
                                                                                            <span className="fw-bold">Note: </span>Please Refer full Documentation
                                                                                            for more details.
                                                                                        </p>
                                                                                        <Button href="#" target="_blank" variant='outline-danger' className="tx-13">Click here</Button>

                                                                                    </Accordion.Body>
                                                                                </Accordion.Item>
                                                                            </Accordion>
                                                                        </Col>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </section>
                                            </Row>
                                        </Container>
                                    </div>
                                    {/* <!-- ROW-5 CLOSED --> */}

                                    {/* <!-- ROW-6 OPEN --> */}
                                    <div className="bg-landing section bg-image-style">
                                        <Container>
                                            <Row>
                                                <h4 className="text-center fw-semibold">Choose a plan </h4>
                                                <span className="landing-title"></span>
                                                <h2 className="text-center fw-semibold">Find the <span className="text-primary">Perfect Plan</span> for your Business.</h2>
                                                <Tab.Container id="left-tabs-example" defaultActiveKey="Yearly">
                                                    <Nav className='nav-price'>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="Month">Monthly</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="Yearly">Annual</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                    <Tab.Content>

                                                        <Tab.Pane eventKey="Month">
                                                            <Row className="d-flex align-items-center justify-content-center">
                                                                <Col lg={4} xl={4} md={8} sm={12} className="col-lg-4 col-xl-4 col-md-8 col-sm-12">
                                                                    <Card className="p-3 pricing-card">
                                                                        <Card.Header className="d-block text-justified pt-2">
                                                                            <p className="fs-18 fw-semibold mb-1">Basic</p>
                                                                            <p className="text-justify fw-semibold mb-1"> <span className="fs-30 me-2">$</span><span className="fs-30 me-1">39</span><span className="fs-25"><span className="op-0-5 text-muted text-20">/</span> month</span></p>
                                                                            <p className="fs-13 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
                                                                            <p className="fs-13 mb-1 text-secondary">Billed monthly on regular basis!</p>
                                                                        </Card.Header>
                                                                        <Card.Body className="pt-2">
                                                                            <ul className="text-justify pricing-body ps-0">
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i><strong> 2 Free</strong> Domain Name</li>
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i> <strong>3 </strong> One-Click Apps</li>
                                                                                <li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> 1 </strong> Databases</li>
                                                                                <li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> Unlimited </strong> Cloud Storage</li>
                                                                                <li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> Money </strong> BackGuarantee</li>
                                                                                <li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> 24/7</strong> support</li>
                                                                            </ul>
                                                                        </Card.Body>
                                                                        <Card.Footer className="text-center border-top-0 pt-1">
                                                                            <button className="btn btn-lg btn-outline-secondary btn-block">
                                                                                <span className="ms-4 me-4">Select</span>
                                                                            </button>
                                                                        </Card.Footer>
                                                                    </Card>
                                                                </Col>
                                                                <Col lg={4} xl={4} md={8} sm={12}>
                                                                    <Card className="p-3 border-primary pricing-card advanced">
                                                                        <Card.Header className="d-block text-justified pt-2">
                                                                            <p className="fs-18 fw-semibold mb-1 px-0">Advanced<span className="tag bg-primary text-white float-end">Limited Deal</span></p>
                                                                            <p className="text-justify fw-semibold mb-1"> <span className="fs-30 me-2">$</span><span className="fs-30 me-1">199</span><span className="fs-25"><span className="op-0-5 text-muted text-20">/</span> month</span></p>
                                                                            <p className="fs-13 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
                                                                            <p className="fs-13 mb-1 text-primary">Billed monthly on regular basis!</p>
                                                                        </Card.Header>
                                                                        <Card.Body className="pt-2">
                                                                            <ul className="text-justify pricing-body ps-0">
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i> <strong> 5 Free</strong> Domain Name</li>
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>5 </strong> One-Click Apps</li>
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> 3 </strong> Databases</li>
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> Unlimited </strong> Cloud Storage</li>
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> Money </strong> BackGuarantee</li>
                                                                                <li className="mb-6"><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> 24/7</strong> support</li>
                                                                            </ul>
                                                                        </Card.Body>
                                                                        <Card.Footer className="text-center border-top-0 pt-1">
                                                                            <button className="btn btn-lg btn-primary-gradient text-white btn-block">
                                                                                <span className="ms-4 me-4">Select</span>
                                                                            </button>
                                                                        </Card.Footer>
                                                                    </Card>
                                                                </Col>
                                                                <Col lg={4} xl={4} md={8} sm={12}>
                                                                    <Card className="p-3 pricing-card">
                                                                        <Card.Header className="d-block text-justified pt-2">
                                                                            <p className="fs-18 fw-semibold mb-1">Regular</p>
                                                                            <p className="text-justify fw-semibold mb-1"> <span className="fs-30 me-2">$</span><span className="fs-30 me-1">69</span><span className="fs-25"><span className="op-0-5 text-muted text-20">/</span> month</span></p>
                                                                            <p className="fs-13 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
                                                                            <p className="fs-13 mb-1  text-danger">Billed monthly on regular basis!</p>
                                                                        </Card.Header>
                                                                        <Card.Body className="pt-2">
                                                                            <ul className="text-justify pricing-body ps-0">
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> 1 Free</strong> Domain Name</li>
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong>4 </strong> One-Click Apps</li>
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> 2 </strong> Databases</li>
                                                                                <li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> Unlimited </strong> Cloud Storage</li>
                                                                                <li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> Money </strong> BackGuarantee</li>
                                                                                <li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> 24/7</strong> support</li>
                                                                            </ul>
                                                                        </Card.Body>
                                                                        <Card.Footer className="text-center border-top-0 pt-1">
                                                                            <button className="btn btn-lg btn-outline-danger btn-block">
                                                                                <span className="ms-4 me-4">Select</span>
                                                                            </button>
                                                                        </Card.Footer>
                                                                    </Card>
                                                                </Col>
                                                            </Row>
                                                        </Tab.Pane>


                                                        <Tab.Pane eventKey="Yearly">
                                                            <div className="row d-flex align-items-center justify-content-center">
                                                                <div className="col-lg-4 col-xl-4 col-md-8 col-sm-12">
                                                                    <div className="card p-3 pricing-card">
                                                                        <div className="card-header d-block text-justified pt-2">
                                                                            <p className="fs-18 fw-semibold mb-1">Basic</p>
                                                                            <p className="text-justify fw-semibold mb-1"> <span className="fs-30 me-2">$</span><span className="fs-30 me-1">399</span><span className="fs-25"><span className="op-0-5 text-muted text-20">/</span> year</span></p>
                                                                            <p className="fs-13 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
                                                                            <p className="fs-13 mb-1 text-secondary">Billed monthly on regular basis!</p>
                                                                        </div>
                                                                        <div className="card-body pt-2">
                                                                            <ul className="text-justify pricing-body ps-0">
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i><strong> 2 Free</strong> Domain Name</li>
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i> <strong>3 </strong> One-Click Apps</li>
                                                                                <li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> 1 </strong> Databases</li>
                                                                                <li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> Unlimited </strong> Cloud Storage</li>
                                                                                <li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> Money </strong> BackGuarantee</li>
                                                                                <li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> 24/7</strong> support</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="card-footer text-center border-top-0 pt-1">
                                                                            <button className="btn btn-lg btn-outline-secondary btn-block">
                                                                                <span className="ms-4 me-4">Select</span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-xl-4 col-md-8 col-sm-12">
                                                                    <div className="card p-3 border-primary pricing-card advanced ">
                                                                        <div className="card-header d-block text-justified pt-2">
                                                                            <p className="fs-18 fw-semibold mb-1 px-0">Advanced<span className="tag bg-primary text-white float-end">Limited Deal</span></p>
                                                                            <p className="text-justify fw-semibold mb-1"> <span className="fs-30 me-2">$</span><span className="fs-30 me-1">1,299</span><span className="fs-25"><span className="op-0-5 text-muted text-20">/</span> year</span></p>
                                                                            <p className="fs-13 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
                                                                            <p className="fs-13 mb-1 text-primary">Billed monthly on regular basis!</p>
                                                                        </div>
                                                                        <div className="card-body pt-2">
                                                                            <ul className="text-justify pricing-body ps-0">
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i> <strong> 5 Free</strong> Domain Name</li>
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>5 </strong> One-Click Apps</li>
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> 3 </strong> Databases</li>
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> Unlimited </strong> Cloud Storage</li>
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> Money </strong> BackGuarantee</li>
                                                                                <li className="mb-6"><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> 24/7</strong> support</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="card-footer text-center border-top-0 pt-1">
                                                                            <button className="btn btn-lg btn-primary-gradient text-white btn-block">
                                                                                <span className="ms-4 me-4">Select</span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-xl-4 col-md-8 col-sm-12">
                                                                    <div className="card p-3 pricing-card ">
                                                                        <div className="card-header d-block text-justified pt-2">
                                                                            <p className="fs-18 fw-semibold mb-1">Regular</p>
                                                                            <p className="text-justify fw-semibold mb-1"> <span className="fs-30 me-2">$</span><span className="fs-30 me-1">899</span><span className="fs-25"><span className="op-0-5 text-muted text-20">/</span> year</span></p>
                                                                            <p className="fs-13 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
                                                                            <p className="fs-13 mb-1  text-danger">Billed monthly on regular basis!</p>
                                                                        </div>
                                                                        <div className="card-body pt-2">
                                                                            <ul className="text-justify pricing-body ps-0">
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> 1 Free</strong> Domain Name</li>
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong>4 </strong> One-Click Apps</li>
                                                                                <li><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> 2 </strong> Databases</li>
                                                                                <li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> Unlimited </strong> Cloud Storage</li>
                                                                                <li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> Money </strong> BackGuarantee</li>
                                                                                <li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> 24/7</strong> support</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="card-footer text-center border-top-0 pt-1">
                                                                            <button className="btn btn-lg btn-outline-danger btn-block">
                                                                                <span className="ms-4 me-4">Select</span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Tab.Pane>

                                                    </Tab.Content>
                                                </Tab.Container>
                                            </Row>
                                        </Container>
                                    </div>
                                    {/* <!-- ROW-6 CLOSED --> */}

                                    {/* <!-- ROW-7 OPEN --> */}
                                    <div className="section" id="Faqs">
                                        <Container>
                                            <Row>
                                                <h4 className="text-center fw-semibold">FAQ'S ?</h4>
                                                <span className="landing-title"></span>
                                                <h2 className="text-center fw-semibold">We are here to help you</h2>
                                                <Row className="justify-content-center">
                                                    <Col xl={9} as='p' className="wow fadeInUp text-default sub-text mb-7" data-wow-delay="0s">
                                                        The Sash admin template is one of the modern dashboard templates.
                                                        It is also a premium admin dashboard with high-end features, where users can easily customize
                                                        or change their projects according to their choice.
                                                    </Col>
                                                </Row>
                                                <section className="sptb demo-screen-demo" id="faqs">
                                                    <Row className="align-items-center">
                                                        <Col md={12} lg={6}>
                                                            <Col md={12} className="grid-item  px-0">
                                                                <Accordion>
                                                                    <Accordion.Item eventKey="0" className='mb-5  bg-primary-transparent'>
                                                                        <Accordion.Header className='h5 fw-bold  card-title mb-0'><span className="me-3 fs-18 fw-bold text-primary">01.</span>Can i get a free trial before purchase ?</Accordion.Header>
                                                                        <Accordion.Body>
                                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .
                                                                            <p className="mt-2 mb-3">
                                                                                <span className="fw-bold">Note: </span>Please Refer support section for more information.
                                                                            </p>
                                                                            <Link to="#" target="_blank" className="btn btn-outline-primary tx-13">Click here</Link>
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>
                                                                </Accordion>
                                                            </Col>
                                                            <Col md={12} className="grid-item  px-0">
                                                                <Accordion>
                                                                    <Accordion.Item eventKey="0" className='mb-5 bg-success-transparent'>
                                                                        <Accordion.Header className='h5 fw-bold    card-title mb-0'><span className="me-3 fs-18 fw-bold text-success">02.</span>What type of files i will get after purchase ?</Accordion.Header>
                                                                        <Accordion.Body>
                                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .
                                                                            <p className="mt-2 mb-3">
                                                                                <span className="fw-bold">Note: </span>Please Refer support section for more information.
                                                                            </p>
                                                                            <Link to="#" target="_blank" className="btn btn-outline-success tx-13">Click here</Link>
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>
                                                                </Accordion>
                                                            </Col>
                                                            <Col md={12} className="grid-item  px-0">
                                                                <Accordion>
                                                                    <Accordion.Item eventKey="0" className='mb-5 bg-secondary-transparent'>
                                                                        <Accordion.Header className='h5 fw-bold  card-title mb-0'><span className="me-3 fs-18 fw-bold text-secondary">03.</span>What is a single Application</Accordion.Header>
                                                                        <Accordion.Body>
                                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .
                                                                            <p className="mt-2 mb-3">
                                                                                <span className="fw-bold">Note: </span>Please Refer support section for more information.
                                                                            </p>
                                                                            <Link to="#" target="_blank" className="btn btn-outline-secondary tx-13">Click here</Link>
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>
                                                                </Accordion>
                                                            </Col>
                                                            <Col md={12} className="grid-item  px-0">
                                                                <Accordion>
                                                                    <Accordion.Item eventKey="0" className='mb-5 bg-warning-transparent'>
                                                                        <Accordion.Header className='h5 fw-bold  card-title mb-0'><span className="me-3 fs-18 fw-bold text-warning">04.</span>How to get future updates ?</Accordion.Header>
                                                                        <Accordion.Body>
                                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .
                                                                            <p className="mt-2 mb-3">
                                                                                <span className="fw-bold">Note: </span>Please Refer support section for more information.
                                                                            </p>
                                                                            <Link to="#" target="_blank" className="btn btn-outline-warning tx-13">Click here</Link>
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>
                                                                </Accordion>
                                                            </Col>
                                                            <Col md={12} className="grid-item  px-0">
                                                                <Accordion>
                                                                    <Accordion.Item eventKey="0" className='mb-5 bg-danger-transparent'>
                                                                        <Accordion.Header className='h5 fw-bold  card-title mb-0'><span className="me-3 fs-18 fw-bold text-danger">05.</span>Do you provide support ?</Accordion.Header>
                                                                        <Accordion.Body>
                                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .
                                                                            <p className="mt-2 mb-3">
                                                                                <span className="fw-bold">Note: </span>Please Refer support section for more information.
                                                                            </p>
                                                                            <Link to="#" target="_blank" className="btn btn-outline-danger tx-13">Click here</Link>
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>
                                                                </Accordion>
                                                            </Col>
                                                        </Col>
                                                        <Col md={12} lg={6} className="">
                                                            <img src={require("../../assets/images/landing/2.png")} alt="" />
                                                        </Col>
                                                    </Row>
                                                </section>
                                            </Row>
                                        </Container>
                                    </div>
                                    {/* <!-- ROW-7 CLOSED --> */}

                                    {/* <!-- ROW-8 OPEN --> */}
                                    <div className="section bg-landing" id="Blog">
                                        <Container>
                                            <Row>
                                                <h4 className="text-center fw-semibold">Blog Posts </h4>
                                                <span className="landing-title"></span>
                                                <h2 className="text-center fw-semibold mb-7">Latest from Blog.</h2>
                                                <Col lg={6}>
                                                    <Card className="bg-transparent">
                                                        <Card.Body className="px-1">
                                                            <div className="d-sm-flex overflow-visible">
                                                                <img className="card-aside-column br-5 cover-image" alt='media-12' src={require("../../assets/images/media/12.jpg")} />
                                                                <div className="ps-3 flex-column">
                                                                    <Badge bg="primary" className="me-1 mb-1 mt-1">Business</Badge>
                                                                    <h3><Link to={`${process.env.PUBLIC_URL}/Pages/extension/blogdetails`}>Voluptatem quia voluptas...</Link></h3>
                                                                    <div className="">Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....</div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={6}>
                                                    <Card className="bg-transparent">
                                                        <Card.Body className="px-1">
                                                            <div className="d-sm-flex overflow-visible">
                                                                <img className="card-aside-column br-5 cover-image" alt='media-22' src={require("../../assets/images/media/22.jpg")} />


                                                                <div className="ps-3 flex-column">
                                                                    <Badge bg="danger" className="me-1 mb-1 mt-1">Lifestyle</Badge>
                                                                    <h3><Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}>Generator on the Internet..</Link></h3>
                                                                    <div className="">Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....</div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                    {/* <!-- COL-END --> */}
                                                </Col>
                                                <Col lg={6}>
                                                    <Card className="bg-transparent">
                                                        <Card.Body className="px-1">
                                                            <div className="d-sm-flex overflow-visible">
                                                                <img className="card-aside-column br-5 cover-image" alt='about' src={require("../../assets/images/media/27.jpg")} />


                                                                <div className="ps-3 flex-column">
                                                                    <Badge bg='secondary' className="me-1 mb-1 mt-1">Travel</Badge>
                                                                    <h3><Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}>Generator on the Internet..</Link></h3>
                                                                    <div className="">Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....</div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                    {/* <!-- COL-END --> */}
                                                </Col>
                                                <Col lg={6}>
                                                    <Card className="bg-transparent">
                                                        <Card.Body className="px-1">
                                                            <div className="d-sm-flex overflow-visible">
                                                                <img className="card-aside-column br-5 cover-image" alt='media-25' src={require("../../assets/images/media/25.jpg")} />


                                                                <div className="ps-3 flex-column">
                                                                    <Badge bg='success' className="me-1 mb-1 mt-1">Meeting</Badge>
                                                                    <h3><Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}>Voluptatem quia voluptas...</Link></h3>
                                                                    <div className="">Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....</div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                    {/* <!-- COL-END --> */}
                                                </Col>
                                                <div className="text-center mt-5">
                                                    <Link to={`${process.env.PUBLIC_URL}/pages/extension/blogs`} className="btn btn-outline-primary pt-2 pb-2" target="_blank"><i className="fe fe-arrow-right mx-2"></i>Discover More</Link>

                                                </div>
                                            </Row>
                                        </Container>
                                    </div>
                                    {/* <!-- ROW-8 CLOSED --> */}

                                    {/* <!-- ROW-9 OPEN --> */}
                                    <div className="testimonial-owl-landing section pb-0" id="Clients">
                                        <Container>
                                            <Row>
                                                <Col md={12}>
                                                    <Card className="bg-transparent">
                                                        <Card.Body className="pt-5">
                                                            <h4 className="text-center fw-semibold text-white-80">Testimonials </h4>
                                                            <span className="landing-title"></span>
                                                            <h2 className="text-center fw-semibold text-white mb-7">What People Are Saying About Our Product.</h2>
                                                            <Testimonials />
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                    {/* <!-- ROW-9 CLOSED --> */}

                                    {/* <!-- ROW-10 OPEN --> */}
                                    <div className="bg-image-landing section pb-0" id="Contact">
                                        <Container>
                                            <div className="">
                                                <Card className="card-shadow">
                                                    <h4 className="text-center fw-semibold mt-7">Contact</h4>
                                                    <span className="landing-title"></span>
                                                    <h2 className="text-center fw-semibold mb-0 px-2">Get in Touch with <span className="text-primary">US.</span></h2>
                                                    <Card.Body className="p-5 pb-6 text-dark">
                                                        <div className="statistics-info p-4">
                                                            <Row className="justify-content-center">
                                                                <Col lg={9}>
                                                                    <div className="mt-3">
                                                                        <div className="text-dark">
                                                                            <div className="services-statistics my-5">
                                                                                <Row className="text-center">
                                                                                    <Col xl={3} md={6} lg={6}>
                                                                                        <Card>
                                                                                            <Card.Body className="p-0">
                                                                                                <div className="counter-status">
                                                                                                    <div className="counter-icon bg-primary-transparent box-shadow-primary">
                                                                                                        <i className="fe fe-map-pin text-primary fs-23"></i>
                                                                                                    </div>
                                                                                                    <h4 className="mb-2 fw-semibold">Main Branch</h4>
                                                                                                    <p>San Francisco, CA </p>
                                                                                                </div>
                                                                                            </Card.Body>
                                                                                        </Card>
                                                                                    </Col>
                                                                                    <Col xl={3} md={6} lg={6}>
                                                                                        <Card>
                                                                                            <Card.Body className="p-0">
                                                                                                <div className="counter-status">
                                                                                                    <div className="counter-icon bg-secondary-transparent box-shadow-secondary">
                                                                                                        <i className="fe fe-headphones text-secondary fs-23"></i>
                                                                                                    </div>
                                                                                                    <h4 className="mb-2 fw-semibold">Phone & Email</h4>
                                                                                                    <p className="mb-0">+125 254 3562 </p>
                                                                                                    <p>georgeme@abc.com</p>
                                                                                                </div>
                                                                                            </Card.Body>
                                                                                        </Card>
                                                                                    </Col>
                                                                                    <Col xl={3} md={6} lg={6}>
                                                                                        <Card>
                                                                                            <Card.Body className="p-0">
                                                                                                <div className="counter-statuss">
                                                                                                    <div className="counter-icon bg-success-transparent box-shadow-success">
                                                                                                        <i className="fe fe-mail text-success fs-23"></i>
                                                                                                    </div>
                                                                                                    <h4 className="mb-2 fw-semibold">Contact</h4>
                                                                                                    <p className="mb-0">www.example.com</p>
                                                                                                    <p>example@dev.com</p>
                                                                                                </div>
                                                                                            </Card.Body>
                                                                                        </Card>
                                                                                    </Col>
                                                                                    <Col xl={3} md={6} lg={6}>
                                                                                        <Card>
                                                                                            <Card.Body className="p-0">
                                                                                                <div className="counter-status">
                                                                                                    <div className="counter-icon bg-danger-transparent box-shadow-danger">
                                                                                                        <i className="fe fe-airplay text-danger fs-23"></i>
                                                                                                    </div>
                                                                                                    <h4 className="mb-2 fw-semibold">Working Hours</h4>
                                                                                                    <p className="mb-0">Monday - Friday: 9am - 6pm</p>
                                                                                                    <p>Satday - Sunday: Holiday</p>
                                                                                                </div>
                                                                                            </Card.Body>
                                                                                        </Card>
                                                                                    </Col>
                                                                                </Row>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                                <Col xl={9}>
                                                                    <div className="">
                                                                        <form className="form-horizontal m-t-20">
                                                                            <div className="form-group">
                                                                                <Col xs={12}>
                                                                                    <input className="form-control" type="text" required placeholder="Username*" />
                                                                                </Col>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <Col xs={12}>
                                                                                    <input className="form-control" type="email" required placeholder="Email*" />
                                                                                </Col>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <Col xs={12}>
                                                                                    <FormControl as='textarea' className="form-control" rows={5} defaultValue="Your Comment*"></FormControl>
                                                                                </Col>
                                                                            </div>
                                                                            <div className="px-4">
                                                                                <Link to="#" className="btn btn-primary btn-rounded  waves-effect waves-light">Submit</Link>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </Container>
                                    </div>
                                    {/* <!-- ROW-10 CLOSED --> */}

                                    {/* <!-- ROW-11 OPEN --> */}
                                    <div className="">
                                        <Container>
                                            <div className="testimonial-owl-landing buynow-landing">
                                                <Row className="pt-6">
                                                    <Col md={12}>
                                                        <Card className="bg-transparent">
                                                            <Card.Body className="pt-5 px-7">
                                                                <Row>
                                                                    <Col lg={9}>
                                                                        <h1 className="fw-semibold text-white">Start Your Project with Sash.</h1>
                                                                        <p className="text-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                                                            explicabo.
                                                                        </p>
                                                                    </Col>
                                                                    <Col lg={9} className="text-end my-auto">
                                                                        <Link to="https://themeforest.net/item/sash-bootstrap-5-admin-dashboard-template/35183671" target="_blank" className="btn btn-pink w-lg pt-2 pb-2"><i className="fe fe-shopping-cart mx-2"></i>Buy Now
                                                                        </Link>
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Container>
                                    </div>
                                    {/* <!-- ROW-11 CLOSED --> */}

                                </div>
                            </div>
                            {/* <!-- CONTAINER CLOSED--> */}
                        </div>
                    </div>
                    {/* <!--app-content closed--> */}
                </div>

                {/* <!-- FOOTER OPEN --> */}
                <div className="demo-footer">
                    <Container>
                        <Row>
                            <Card>
                                <Card.Body>
                                    <div className="top-footer">
                                        <Row>
                                            <Col lg={4} sm={12} md={12} className="">
                                                <h6>About</h6>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                                    explicabo.
                                                </p>
                                                <p className="mb-5 mb-lg-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat .</p>
                                            </Col>
                                            <Col lg={2} sm={6} md={4} className="">
                                                <h6>Pages</h6>
                                                <ul className="list-unstyled mb-5 mb-lg-0">
                                                    <li><Link to={`${process.env.PUBLIC_URL}/dashboard`}>Dashboard</Link></li>
                                                    <li><Link to={`${process.env.PUBLIC_URL}/bootstrap/bootstrapalerts`}>Elements</Link></li>
                                                    <li><Link to={`${process.env.PUBLIC_URL}/pages/forms/formelements`}>Forms</Link></li>
                                                    <li><Link to={`${process.env.PUBLIC_URL}/charts/chartjs`}>Charts</Link></li>
                                                    <li><Link to={`${process.env.PUBLIC_URL}/pages/tables/datatables`}>Tables</Link></li>
                                                    <li><Link to={`${process.env.PUBLIC_URL}/filemanager/fileattachments`}>Other Pages</Link></li>
                                                </ul>
                                            </Col>
                                            <Col lg={2} sm={6} md={4} className="">
                                                <h6>Information</h6>
                                                <ul className="list-unstyled mb-5 mb-lg-0">
                                                    <li><Link to={`${process.env.PUBLIC_URL}/pages/extension/aboutcompany`}>Our Team</Link></li>
                                                    <li><Link to={`${process.env.PUBLIC_URL}/pages/extension/aboutcompany`}>Contact US</Link></li>
                                                    <li><Link to={`${process.env.PUBLIC_URL}/pages/extension/aboutcompany`}>About</Link></li>
                                                    <li><Link to={`${process.env.PUBLIC_URL}/pages/extension/services`}>Services</Link></li>
                                                    <li><Link to={`${process.env.PUBLIC_URL}/pages/extension/blogs`}>Blog</Link></li>
                                                    <li><Link to={`${process.env.PUBLIC_URL}/pages/extension/term`}>Terms and Services</Link></li>
                                                </ul>
                                            </Col>
                                            <Col lg={4} sm={12} md={4} className="">
                                                <div className="">
                                                    <Link to={`${process.env.PUBLIC_URL}/dashboard`}><img loading="lazy" alt="" className="logo mb-3" src="..assets/images/brand/logo-dark" /></Link>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat.</p>
                                                    <div className="form-group">
                                                        <InputGroup>
                                                            <FormControl type="text" placeholder="Enter your email" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                            <Button variant='primary' id="button-addon2">Submit</Button>
                                                        </InputGroup>
                                                    </div>
                                                </div>
                                                <div className="btn-list mt-6">
                                                    <Button variant='' className="btn-icon rounded-pill"><i className="fa fa-facebook"></i></Button>
                                                    <Button variant='' className="btn-icon rounded-pill"><i className="fa fa-youtube"></i></Button>
                                                    <Button variant='' className="btn-icon rounded-pill"><i className="fa fa-twitter"></i></Button>
                                                    <Button variant='' className="btn-icon rounded-pill"><i className="fa fa-instagram"></i></Button>
                                                </div>
                                                <hr />
                                            </Col>
                                        </Row>
                                    </div>
                                    <footer className="main-footer px-0 pb-0 text-center">
                                        <Row>
                                            <Col md={12} sm={12}>
                                                Copyright © <span id="year"></span> <Link to="#">Sash</Link>. Designed with <span className="fa fa-heart text-danger"></span> by <Link to="#"> Spruko </Link> All rights reserved.
                                            </Col>
                                        </Row>
                                    </footer>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                </div>
                {/* <!-- FOOTER CLOSED --> */}
            </div>
            {/* < !--CONTAINER CLOSED-- > */}
        </div >
    )
};

export default LandingPage;

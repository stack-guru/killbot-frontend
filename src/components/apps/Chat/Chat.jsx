import React from 'react';
import { Card, Nav, Dropdown, InputGroup, Form, FormControl, Button, Row, Col, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Chat.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Media } from '../../../Data/App/DataChat';

const Chat = () => {
  return (
  <div className={styles.Chat}>
    <PageHeader titles="Chat" active="Chat" items={['Apps']} />
    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col sm={12} md={12} lg={12} xxl={4}>
        <Card className="overflow-hidden">
          <div className="main-content-app pt-0 main-chat-2">
            <PerfectScrollbar>
              <div className="main-content-left main-content-left-chat">

                <Card.Body className="d-flex">
                  <div className="main-img-user online"><img alt="avatar" src={require("../../../assets/images/users/21.jpg")} /></div>
                  <div className="main-chat-msg-name">
                    <h6>Percy Kewshun</h6>
                    <span className="dot-label bg-success"></span><small className="me-3">Available</small>
                  </div>
                  <Nav className="ms-auto">
                    <Dropdown>
                      <Dropdown.Toggle className="text-muted fs-20 no-caret" as="a"><i className="fe fe-more-horizontal"></i></Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end">
                        <Dropdown.Item to="#"><i className="fe fe-user me-1"></i> Profile</Dropdown.Item>
                        <Dropdown.Item to="#"><i className="fe fe-edit me-1"></i> Edit</Dropdown.Item>
                        <Dropdown.Item to="#"><i className="fe fe-users me-1"></i> New Group</Dropdown.Item>
                        <Dropdown.Item to="#"><i className="fe fe-settings me-1"></i> Settings</Dropdown.Item>
                        <Dropdown.Item to="#"><i className="fe fe-trash-2 me-1"></i> Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav>
                </Card.Body>

                {/* <!-- main-chat-header --> */}

                <Card.Body>
                  <InputGroup>
                    <FormControl type="text" placeholder="Search ..." />
                    <Button variant="primary" className="input-group-text">Search</Button>
                  </InputGroup>
                  <PerfectScrollbar>
                    <div className="main-chat-contacts-wrapper d-none d-sm-block">
                      <Form.Label className="mb-2 fs-13">Online Users</Form.Label>

                      <div className="lSSlideOuter main-chat-contacts-slider">
                        <div className="main-chat-contacts-slider lSSlideWrapper usingCss">
                          <div className="main-chat-contacts lightSlider lsGrab lSSlide ps-0" id="chatActiveContacts">
                            <div className="lslide active position-relative">
                              <img className="avatar avatar-md bradius cover-image" alt='user5' src={require("../../../assets/images/users/5.jpg")} />
                              <span className="avatar-status bg-secondary"></span>
                              <small>Ariana</small>
                            </div>
                            <div className="lslide position-relative">
                              <img className="avatar avatar-md bradius cover-image" alt='user9' src={require("../../../assets/images/users/9.jpg")} />
                              <span className="avatar-status bg-red"></span>
                              <small>Monino</small>
                            </div>
                            <div className="lslide position-relative">
                              <img className="avatar avatar-md bradius cover-image" alt='user6' src={require("../../../assets/images/users/6.jpg")} />
                              <span className="avatar-status bg-green"></span>
                              <small>Reynante</small>
                            </div>
                            <div className="lslide position-relative">
                              <img className="avatar avatar-md bradius cover-image" alt='user7' src={require("../../../assets/images/users/7.jpg")} />
                              <span className="avatar-status bg-yellow"></span>
                              <small>Labares</small>
                            </div>
                            <div className="lslide position-relative">
                              <img className="avatar avatar-md bradius cover-image" alt='user5' src={require("../../../assets/images/users/5.jpg")} />
                              <span className="avatar-status bg-secondary"></span>
                              <small>Rolando</small>
                            </div>
                            <div className="lslide position-relative">
                              <img className="avatar avatar-md bradius cover-image" alt='user9' src={require("../../../assets/images/users/9.jpg")} />
                              <span className="avatar-status bg-red"></span>
                              <small>Paloso</small>
                            </div>
                            <div className="lslide position-relative">
                              <img className="avatar avatar-md bradius cover-image" alt='user6' src={require("../../../assets/images/users/6.jpg")} />
                              <span className="avatar-status bg-green"></span>
                              <small>Maricel</small>
                            </div>
                            <div className="lslide position-relative">
                              <img className="avatar avatar-md bradius cover-image" alt='user7' src={require("../../../assets/images/users/7.jpg")} />
                              <span className="avatar-status bg-yellow"></span>
                              <small>Villalon</small>
                            </div>
                            <div className="lslide position-relative">
                              <div className="avatar avatar-md bradius text-primary">
                                <i className="fe fe-plus"></i>
                              </div><small>More</small>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- main-active-contacts --> */}
                    </div>
                  </PerfectScrollbar>
                </Card.Body>
                <Tab.Container id="left-tabs-example" defaultActiveKey="msg">
                  <Nav variant="pills" className="px-4" >
                    <Nav.Item>
                      <Nav.Link eventKey="msg">Messages</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="grp">Groups</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="cnts">Contacts</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="net">Networks</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className=' main-chat-list flex-2'>
                    <Tab.Pane eventKey="msg">
                      <div className="main-chat-list tab-pane">
                        <Link className="media new border-top-0" to="#">
                          <div className="main-img-user online">
                            <img alt="user5" src={require("../../../assets/images/users/5.jpg")} />
                          </div>
                          <div className="media-body">
                            <div className="media-contact-name">
                              <span>Raymart Santiago</span> <span>10 min</span>
                            </div>
                            <p> Hey! there I'm available </p>
                          </div>
                        </Link>
                        <Link className="media new" to="#">
                          <div className="main-img-user">
                            <img alt="user6" src={require("../../../assets/images/users/6.jpg")} /> <span>3</span>
                          </div>
                          <div className="media-body">
                            <div className="media-contact-name">
                              <span>Ariana Monino</span> <span>30 min</span>
                            </div>
                            <p>Good Morning</p>
                          </div>
                        </Link>
                        <Link className="media selected" to="#">
                          <div className="main-img-user online"><img alt="user9" src={require("../../../assets/images/users/9.jpg")} /></div>
                          <div className="media-body">
                            <div className="media-contact-name">
                              <span>Reynante Labares</span> <span>9.40 am</span>
                            </div>
                            <p> Nice to meet you </p>
                          </div>
                        </Link>
                        <Link className="media new" to="#">
                          <span className="avatar avatar-md brround bg-danger-transparent text-danger">J</span>
                          <div className="media-body">
                            <div className="media-contact-name">
                              <span>Joyce Chua</span> <span>11.20 am</span>
                            </div>
                            <p> Hi, How are you? </p>
                          </div>
                        </Link>
                        <Link className="media new" to="#">
                          <div className="main-img-user"><img alt="user4" src={require("../../../assets/images/users/4.jpg")} /></div>
                          <div className="media-body">
                            <div className="media-contact-name">
                              <span>Rolando Paloso</span> <span>1.38 pm</span>
                            </div>
                            <p> Hey! there I'm available </p>
                          </div>
                        </Link>
                        <Link className="media new" to="#">
                          <div className="main-img-user">
                            <div className="avatar avatar-md brround bg-primary-transparent text-primary">D</div><span>1</span>
                          </div>
                          <div className="media-body">
                            <div className="media-contact-name">
                              <span>Dexter dela Cruz</span> <span>4.08 pm</span>
                            </div>
                            <p>Typing...</p>
                          </div>
                        </Link>
                        <Link className="media new" to="#">
                          <div className="main-img-user"><img alt="user21" src={require("../../../assets/images/users/21.jpg")} /></div>
                          <div className="media-body">
                            <div className="media-contact-name">
                              <span>Maricel Villalon</span> <span>8.09 pm</span>
                            </div>
                            <p> Hey! there I'm available </p>
                          </div>
                        </Link>
                        <Link className="media new" to="#">
                          <span className="avatar avatar-md brround bg-success-transparent text-success">M</span>
                          <div className="media-body">
                            <div className="media-contact-name">
                              <span>Maryjane Pechon</span> <span>1 day ago</span>
                            </div>
                            <p>I have some work</p>
                          </div>
                        </Link>
                        <Link className="media new" to="#">
                          <div className="main-img-user"><img alt="user5" src={require("../../../assets/images/users/5.jpg")} /></div>
                          <div className="media-body">
                            <div className="media-contact-name">
                              <span>Lovely Dela Cruz</span> <span>3 days ago</span>
                            </div>
                            <p>I have some work</p>
                          </div>
                        </Link>
                        <Link className="media new" to="#">
                          <div className="avatar avatar-md brround bg-secondary-transparent"><i className="fe fe-user text-secondary"></i></div>
                          <div className="media-body">
                            <div className="media-contact-name">
                              <span>Daniel Padilla</span> <span>5 days ago</span>
                            </div>
                            <p>I have some work</p>
                          </div>
                        </Link>
                        <Link className="media new" to="#">
                          <div className="main-img-user"><img alt="user3" src={require("../../../assets/images/users/3.jpg")} /></div>
                          <div className="media-body">
                            <div className="media-contact-name">
                              <span>John Pratts</span> <span>20/06/2021</span>
                            </div>
                            <p>I have some work</p>
                          </div>
                        </Link>
                        <Link className="media new" to="#">
                          <div className="main-img-user"><img alt="user7" src={require("../../../assets/images/users/7.jpg")} /></div>
                          <div className="media-body">
                            <div className="media-contact-name">
                              <span>Socrates Itumay</span> <span>18/07/2021</span>
                            </div>
                            <p> Hey! there I'm available </p>
                          </div>
                        </Link>
                        <Link className="media new border-bottom-0" to="#">
                          <div className="main-img-user"><img alt="user6" src={require("../../../assets/images/users/6.jpg")} /></div>
                          <div className="media-body">
                            <div className="media-contact-name">
                              <span>Samuel Lerin</span> <span>29/07/2021</span>
                            </div>
                            <p> Hey! there I'm available </p>
                          </div>
                        </Link>
                      </div>

                      {/* <!-- main-chat-list --> */}

                    </Tab.Pane>
                    <Tab.Pane eventKey="grp">
                      <div className='tab-content main-chat-list flex-2 ' >
                        <Link to="#" className="d-flex align-items-center media border-top-0">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online text-primary">
                              <img alt="user4" src={require("../../../assets/images/users/4.jpg")} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Web Designers</span>
                                <span></span>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto"> <i className="contact-status text-primary fe fe-user-plus"></i> </div>
                        </Link>
                        <Link to="#" className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user4" src={require("../../../assets/images/users/4.jpg")} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Project 2020</span>
                                <span></span>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto"> <i className="contact-status text-primary fe fe-user-plus"></i> </div>
                        </Link>
                        <Link to="#" className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user9" src={require("../../../assets/images/users/9.jpg")} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Project 2021</span>
                                <span></span>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto"> <i className="contact-status text-primary fe fe-user-plus"></i> </div>
                        </Link>
                        <Link to="#" className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user12" src={require("../../../assets/images/users/12.jpg")} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Freshers</span>
                                <span></span>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto"> <i className="contact-status text-primary fe fe-user-plus"></i> </div>
                        </Link>
                        <Link to="#" className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user6" src={require("../../../assets/images/users/6.jpg")} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Experienced</span>
                                <span></span>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto"> <i className="contact-status text-primary fe fe-user-plus"></i> </div>
                        </Link>
                        <Link to="#" className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user7" src={require("../../../assets/images/users/7.jpg")} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Freelancer</span>
                                <span></span>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto"> <i className="contact-status text-primary fe fe-user-plus"></i> </div>
                        </Link>
                        <div className="text-center p-5">
                          <Link to="#" className="btn btn-outline-primary">Create New Group</Link>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cnts">
                      <div>
                        <div className="py-4 px-6 fw-bold">A</div>
                        <div className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user3" src={require("../../../assets/images/users/3.jpg")} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Anna Sthesia</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Home</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video me-2"></i>
                          </div>
                        </div>
                        <div className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user9" src={require("../../../assets/images/users/9.jpg")} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Abraham Clark</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Mobile</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video me-2"></i>
                          </div>
                        </div>
                        <div className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user4" src={require("../../../assets/images/users/4.jpg")} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Anderson</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Office</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video me-2"></i>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="py-4 px-6 fw-bold">B</div>
                        <div className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user5" src={require("../../../assets/images/users/5.jpg")} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Bernadette</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Mobile</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video me-2"></i>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="py-4 px-6 fw-bold">C</div>
                        <div className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="" src={require("../../../assets/images/users/5.jpg")} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Cameron Watson</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Home</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video me-2"></i>
                          </div>
                        </div>
                        <div className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="" src={require("../../../assets/images/users/21.jpg")} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Christopher Arnold</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Mobile</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video me-2"></i>
                          </div>
                        </div>
                        <div className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user2" src={require("../../../assets/images/users/2.jpg")} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Clarkson Gray</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Home</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video me-2"></i>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="py-4 px-6 fw-bold">D</div>
                        <div className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user7" src={require("../../../assets/images/users/7.jpg")} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Deirdre Short</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Home</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video me-2"></i>
                          </div>
                        </div>
                        <div className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user12" src={require("../../../assets/images/users/12.jpg")} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Dylan Gill</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Mobile</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video me-2"></i>
                          </div>
                        </div>
                        <div className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user1" src={require("../../../assets/images/users/1.jpg")} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Donna Davies</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Office</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video me-2"></i>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="py-4 px-6 fw-bold">E</div>
                        <div className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user4" src={require("../../../assets/images/users/4.jpg")} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Elizabeth Scott</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Office</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video me-2"></i>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="net">
                      <div>
                        <div className="d-flex py-4 px-6 fw-bold"><span>Networks</span>
                          <div className="ms-auto"><i className="fe fe-plus"></i></div>
                        </div>
                        <Link to="#" className="align-items-center media">
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-4">
                              <div className="media-contact-name">
                                <span>Work</span>
                                <span></span>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="align-items-center media">
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-4">
                              <div className="media-contact-name">
                                <span>Freelancer</span>
                                <span></span>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="align-items-center media">
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-4">
                              <div className="media-contact-name">
                                <span>Personal</span>
                                <span></span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="">
                        <div className="d-flex py-4 px-6 fw-bold"><span>Rooms</span>
                          <Link to="#" className="ms-auto"><i className="fe fe-plus"></i></Link>
                        </div>
                        <Link to="#" className="align-items-center media">
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-4">
                              <div className="media-contact-name">
                                <span>Project Managers</span>
                                <span></span>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="align-items-center media">
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-4">
                              <div className="media-contact-name">
                                <span>Designers</span>
                                <span></span>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="align-items-center media">
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-4">
                              <div className="media-contact-name">
                                <span>Developers</span>
                                <span></span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="">
                        <div className="d-flex py-4 px-6 fw-bold"><span>On Hand Talk</span>
                          <Link to="#" className="ms-auto"><i className="fe fe-plus"></i></Link>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                {/* <!-- main-chat-list --> */}

              </div>
            </PerfectScrollbar>
          </div>
        </Card>
      </Col>
      <Col sm={12} md={12} lg={12} xxl={5}>
        <Card>
          <div className="main-content-app pt-0">

            <div className="main-content-body main-content-body-chat h-100">
              <div className="main-chat-header pt-3 d-block d-sm-flex">
                <div className="main-img-user online"><img alt="avatar" src={require("../../../assets/images/users/1.jpg")} /></div>
                <div className="main-chat-msg-name mt-2">
                  <h6>Saul Goodmate</h6>
                  <span className="dot-label bg-success"></span><small className="me-3">online</small>
                </div>
                <Nav>
                  <div className="">
                    <InputGroup>
                      <FormControl type="text" placeholder="Search ..." />
                      <InputGroup.Text className="btn bg-white text-muted border-start-0"><i className="fe fe-search"></i></InputGroup.Text>
                    </InputGroup>
                  </div>
                  <Dropdown>
                    <Dropdown.Toggle className="text-muted fs-20 no-caret" as="a"><i className="fe fe-more-horizontal mx-3"></i></Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-end">
                      <Dropdown.Item href="#"><i className="fe fe-phone-call me-1"></i> Phone Call</Dropdown.Item>
                      <Dropdown.Item href="#"><i className="fe fe-video me-1"></i> Video Call</Dropdown.Item>
                      <Dropdown.Item href="#"><i className="fe fe-user-plus me-1"></i> Add Contact</Dropdown.Item>
                      <Dropdown.Item href="#"><i className="fe fe-trash-2 me-1"></i> Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
              </div>
              {/* <!-- main-chat-header --> */}
              <div className="main-chat-body flex-2" id="ChatBody">
                <PerfectScrollbar>
                  <div className="content-inner">
                    <label className="main-chat-time"><span>2 days ago</span></label>
                    <div className="media flex-row-reverse chat-right">
                      <div className="main-img-user online"><img alt="avatar" src={require("../../../assets/images/users/21.jpg")} /></div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Nulla consequat massa quis enim. Donec pede justo, fringilla vel...
                        </div>
                        <div className="main-msg-wrapper">
                          rhoncus ut, imperdiet a, venenatis vitae, justo...
                        </div>
                        <div>
                          <span>9:48 am</span> <Link to=""><i className="icon ion-android-more-horizontal"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="media chat-left">
                      <div className="main-img-user online"><img alt="avatar" src={require("../../../assets/images/users/1.jpg")} /></div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </div>
                        <div>
                          <span>9:32 am</span> <Link to=""><i className="icon ion-android-more-horizontal"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="media flex-row-reverse chat-right">
                      <div className="main-img-user online"><img alt="avatar" src={require("../../../assets/images/users/21.jpg")} /></div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
                        </div>
                        <div className="main-msg-wrapper">
                          <span className="text-dark"><span><i className="fa fa-image fs-14 text-muted pe-2"></i></span><span className="fs-14 mt-1"> Image_attachment.jpg </span>
                            <i className="fe fe-download mt-3 text-muted ps-2"></i>
                          </span>
                        </div>
                        <div>
                          <span>11:22 am</span> <Link to=""><i className="icon ion-android-more-horizontal"></i></Link>
                        </div>
                      </div>
                    </div>
                    <label className="main-chat-time"><span>Yesterday</span></label>
                    <div className="media chat-left">
                      <div className="main-img-user online"><img alt="avatar" src={require("../../../assets/images/users/1.jpg")} /></div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </div>
                        <div>
                          <span>9:32 am</span> <Link to=""><i className="icon ion-android-more-horizontal"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="media flex-row-reverse chat-right">
                      <div className="main-img-user online"><img alt="avatar" src={require("../../../assets/images/users/21.jpg")} /></div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                        </div>
                        <div className="main-msg-wrapper">
                          Nullam dictum felis eu pede mollis pretium
                        </div>
                        <div>
                          <span>9:48 am</span> <Link to=""><i className="icon ion-android-more-horizontal"></i></Link>
                        </div>
                      </div>
                    </div><label className="main-chat-time"><span>Today</span></label>
                    <div className="media chat-left">
                      <div className="main-img-user online"><img alt="avatar" src={require("../../../assets/images/users/1.jpg")} /></div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Maecenas tempus, tellus eget condimentum rhoncus
                        </div>
                        <div className="main-msg-wrapper">
                          <img alt="avatar" className="w-10 h-10 me-1" src={require("../../../assets/images/media/3.jpg")} />
                          <img alt="avatar" className="w-10 h-10 me-1" src={require("../../../assets/images/media/4.jpg")} />
                          <img alt="avatar" className="w-10 h-10 me-1" src={require("../../../assets/images/media/5.jpg")} />
                        </div>
                        <div>
                          <span>10:12 am</span> <Link to=""><i className="icon ion-android-more-horizontal"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="media flex-row-reverse chat-right">
                      <div className="main-img-user online"><img alt="avatar" src={require("../../../assets/images/users/21.jpg")} /></div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Maecenas tempus, tellus eget condimentum rhoncus
                        </div>
                        <div className="main-msg-wrapper">
                          Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
                        </div>
                        <div>
                          <span>09:40 am</span> <Link to=""><i className="icon ion-android-more-horizontal"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </PerfectScrollbar>
              </div>
              <div className="main-chat-footer">
                <input className="form-control" placeholder="Type your message here..." type="text" />
                <Link className="nav-link" data-bs-toggle="tooltip" to="" title="Attach a File"><i className="fe fe-paperclip"></i></Link>
                <Button className="btn btn-icon  btn-primary brround"><i className="fa fa-paper-plane-o"></i></Button>
                <nav className="nav">
                </nav>
              </div>
            </div>

          </div>
        </Card>
      </Col>
      <Col sm={12} md={12} lg={12} xxl={3}>
        <Card>
          <PerfectScrollbar>
            <Card.Body className="profile-details-main pb-0">
              <div className="main-content-app">
                <Nav className="float-end">
                  <Dropdown>
                    <Dropdown.Toggle className="text-muted fs-20 p-0 ps-3 no-caret" as="a"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-end">
                      <Dropdown.Item href="#"><i className="fe fe-user me-1"></i> Profile</Dropdown.Item>
                      <Dropdown.Item href="#"><i className="fe fe-edit me-1"></i> Edit</Dropdown.Item>
                      <Dropdown.Item href="#"><i className="fe fe-users me-1"></i> New Group</Dropdown.Item>
                      <Dropdown.Item href="#"><i className="fe fe-settings me-1"></i> Settings</Dropdown.Item>
                      <Dropdown.Item href="#"><i className="fe fe-trash-2 me-1"></i> Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>

                <div className="text-center chat-image p-4 pb-0 mb-4 br-5">
                  <div className="avatar avatar-xxl chat-profile mb-3 brround">
                    <Link className="" to={`${process.env.PUBLIC_URL}/pages/profile`}><img alt="avatar" src={require("../../../assets/images/users/7.jpg")} className="brround" /></Link>
                  </div>
                  <div className="main-chat-msg-name">
                    <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                      <h5 className="mb-1 text-dark fw-semibold">Percy Kewshun</h5>
                    </Link>
                    <span className="dot-label bg-success"></span><small className="me-3">Available</small>
                    <p className="text-muted mt-0 mb-1 pt-0 fs-13">Senior Web Designer</p>
                  </div>
                </div>
                <div className="">
                  <h6 className="mb-3">Contact Details :</h6>
                  <div className="d-flex mb-2">
                    <div>
                      <Link className="nav-link border rounded-pill chat-profile me-2" to=""><i className="fe fe-mail"></i></Link>
                    </div>
                    <div className="ms-2">
                      <p className="fs-13 fw-semibold mb-0">Email</p>
                      <p className="fs-12 text-muted text-break">ryangracie435@gmail.com.</p>
                    </div>
                  </div>
                  <div className="d-flex mb-2 mt-2">
                    <div>
                      <Link className="nav-link border rounded-pill chat-profile me-2" to=""><i className="fe fe-phone"></i></Link>
                    </div>
                    <div className="ms-2">
                      <p className="fs-13 fw-semibold mb-0">Phone</p>
                      <p className="fs-12 text-muted">+123(45)-678-90.</p>
                    </div>
                  </div>
                  <div className="d-flex mb-2 mt-2">
                    <div>
                      <Link className="nav-link border rounded-pill chat-profile me-2" to=""><i className="fe fe-map-pin"></i></Link>
                    </div>
                    <div className="ms-2">
                      <p className="fs-13 fw-semibold mb-0">Address</p>
                      <p className="fs-12 text-muted">2nd street,houston texas,united states.</p>
                    </div>
                  </div>
                  <div className="d-flex mb-2 mt-2">
                    <div>
                      <Link className="nav-link border rounded-pill chat-profile me-2" to=""><i className="fe fe-linkedin"></i></Link>
                    </div>
                    <div className="ms-2">
                      <p className="fs-13 fw-semibold mb-0">Linkedin</p>
                      <p className="fs-12 text-muted">@895434</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h6 className="mt-5 mb-0">Shared Files :</h6>
                  <div className="">
                    <Row>
                      <div className="border-0 p-0 mb-4 pt-4">
                        <div className="media mt-0 border">
                          <div className="ps-0 me-3"><i className="fa fa-folder-open shared-files text-muted"></i></div>
                          <div className="media-body">
                            <div className="d-flex align-items-center">
                              <div className="mt-0">
                                <h5 className="mb-1 fs-13 fw-semibold text-dark"> Demo_Document</h5>
                                <p className="mb-0 fs-13 text-muted">ppt<span className="fs-11 mx-2">1.2 mb</span></p>
                              </div>
                              <span className="ms-auto fs-14">
                                <span className="float-end">
                                  <span className="op-7 text-muted"><i className="fe fe-download"></i></span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-0 p-0 mb-4">
                        <div className="media mt-0 border">
                          <div className="ps-0 me-3"><i className="fa fa-image shared-files text-muted"></i></div>
                          <div className="media-body">
                            <div className="d-flex align-items-center">
                              <div className="mt-0">
                                <h5 className="mb-1 fs-13 fw-semibold text-dark">Image_attachment</h5>
                                <p className="mb-0 fs-13 text-muted">img<span className="fs-11 mx-2">12 mb</span></p>
                              </div>
                              <span className="ms-auto fs-14">
                                <span className="float-end">
                                  <span className="op-7 text-muted"><i className="fe fe-download"></i></span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-0 p-0 mb-0">
                        <div className="media mt-0 border">
                          <div className="ps-0 me-3"><i className="fa fa-envelope shared-files text-muted"></i></div>
                          <div className="media-body">
                            <div className="d-flex align-items-center">
                              <div className="mt-0">
                                <h5 className="mb-1 fs-13 fw-semibold text-dark"> Video_attachment</h5>
                                <p className="mb-0 fs-13 text-muted">Video<span className="fs-12 mx-2">16 mb</span></p>
                              </div>
                              <span className="ms-auto fs-14">
                                <span className="float-end">
                                  <span className="op-7 text-muted"><i className="fe fe-download"></i></span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </div>
                </div>
                <Media />
              </div>
            </Card.Body>
          </PerfectScrollbar>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </div>
)
};

export default Chat;

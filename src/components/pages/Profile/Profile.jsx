import React from 'react';
import styles from './Profile.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Link as Loki } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Dropdown, Row, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';

const Profile = () => {

  return (

  <div className={styles.Profile}>
    <PageHeader titles="Profile" active="Profile" items={['Pages']} />
    {/* <!-- ROW-1 OPEN --> */}
    <Row id="user-profile">
      <Col lg={12}>
        <Card>
          <Card.Body>
            <div className="wideget-user mb-2">
              <Row>
                <Col lg={12} md={12}>
                  <Row>
                    <div className="panel profile-cover">
                      <div className="profile-cover__action bg-img"></div>
                      <div className="profile-cover__img">
                        <div className="profile-img-1">
                          <img src={require("../../../assets/images/users/21.jpg")} alt="user21" />
                        </div>
                        <div className="profile-img-content text-dark text-start">
                          <div className="text-dark">
                            <h3 className="h3 mb-2">Percy Kewshun</h3>
                            <h5 className="text-muted">Web Developer</h5>
                          </div>
                        </div>
                      </div>
                      <div className="btn-profile">
                        <Button variant='primary' className="mt-1 mb-1 me-2"> <i className="fa fa-rss"></i> <span>Follow</span></Button>
                        <Button variant='secondary' className="mt-1 mb-1 me-2"> <i className="fa fa-envelope"></i> <span>Message</span></Button>
                      </div>
                    </div>
                  </Row>
                  <Row>
                    <div className="">
                      <div className="social social-profile-buttons mt-5 float-end">
                        <div className="mt-3">
                          <Loki href="#" className="social-icon text-primary me-2" ><i className="fa fa-facebook"></i></Loki>
                          <Loki href="#" className="social-icon text-primary me-2"><i className="fa fa-twitter"></i></Loki>
                          <Loki href="#" className="social-icon text-primary me-2"><i className="fa fa-youtube"></i></Loki>
                          <Loki href="#" className="social-icon text-primary me-2"><i className="fa fa-rss"></i></Loki>
                          <Loki href="#" className="social-icon text-primary me-2"><i className="fa fa-linkedin"></i></Loki>
                          <Loki href="#" className="social-icon text-primary me-2"><i className="fa fa-google-plus"></i></Loki>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
        <Row>
          <Col xl={3}>
            <Card>
              <Card.Body>
                <div className="main-profile-contact-list">
                  <div className="me-5">
                    <div className="media mb-4">
                      <div className="media-icon bg-secondary bradius me-3 mt-1">
                        <i className="fe fe-edit fs-20 text-white"></i>
                      </div>
                      <div className="media-body">
                        <span className="text-muted">Posts</span>
                        <div className="fw-semibold fs-25">
                          328
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="me-5 mt-5 mt-md-0">
                    <div className="media mb-4">
                      <div className="media-icon bg-danger bradius text-white me-3 mt-1">
                        <span className="mt-3">
                          <i className="fe fe-users fs-20"></i>
                        </span>
                      </div>
                      <div className="media-body">
                        <span className="text-muted">Followers</span>
                        <div className="fw-semibold fs-25">
                          937k
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="me-0 mt-5 mt-md-0">
                    <div className="media">
                      <div className="media-icon bg-primary text-white bradius me-3 mt-1">
                        <span className="mt-3">
                          <i className="fe fe-cast fs-20"></i>
                        </span>
                      </div>
                      <div className="media-body">
                        <span className="text-muted">Following</span>
                        <div className="fw-semibold fs-25">
                          2,876
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title>About</Card.Title>
              </Card.Header>
              <Card.Body>
                <div>
                  <h5>Biography<i className="fe fe-edit-3 text-primary mx-2"></i></h5>
                  <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                    <Link to="#">Read more</Link>
                  </p>
                </div>
                <hr />
                <div className="d-flex align-items-center mb-3 mt-3">
                  <div className="me-4 text-center text-primary">
                    <span><i className="fe fe-briefcase fs-20"></i></span>
                  </div>
                  <div>
                    <strong>San Francisco, CA </strong>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3 mt-3">
                  <div className="me-4 text-center text-primary">
                    <span><i className="fe fe-map-pin fs-20"></i></span>
                  </div>
                  <div>
                    <strong>Francisco, USA</strong>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3 mt-3">
                  <div className="me-4 text-center text-primary">
                    <span><i className="fe fe-phone fs-20"></i></span>
                  </div>
                  <div>
                    <strong>+125 254 3562 </strong>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3 mt-3">
                  <div className="me-4 text-center text-primary">
                    <span><i className="fe fe-mail fs-20"></i></span>
                  </div>
                  <div>
                    <strong>georgeme@abc.com </strong>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title>Skills</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="tags">
                  <Link to="#" className="tag">Laravel</Link>
                  <Link to="#" className="tag">Angular</Link>
                  <Link to="#" className="tag">HTML</Link>
                  <Link to="#" className="tag">Vuejs</Link>
                  <Link to="#" className="tag">Codiegniter</Link>
                  <Link to="#" className="tag">JavaScript</Link>
                  <Link to="#" className="tag">Bootstrap</Link>
                  <Link to="#" className="tag">PHP</Link>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title>Work & Education</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="main-profile-contact-list">
                  <div className="me-5">
                    <div className="media mb-4">
                      <div className="media-icon bg-primary  mb-3 mb-sm-0 me-3 mt-1">
                        <svg style={{ width: "24px", height: "24px", marginTop: "-8px" }} viewBox="0 0 24 24">
                          <path fill="#fff" d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z" />
                        </svg>
                      </div>
                      <div className="media-body">
                        <h6 className="font-weight-semibold mb-1">Web Designer at <Link to="#" className="btn-link">Spruko</Link></h6>
                        <span>2018 - present</span>
                        <p>Past Work: Spruko, Inc.</p>
                      </div>
                    </div>
                  </div>
                  <div className="me-5 mt-5 mt-md-0">
                    <div className="media mb-4">
                      <div className="media-icon bg-success text-white mb-3 mb-sm-0 me-3 mt-1">
                        <svg style={{ width: "24px", height: "24px", marginTop: "-8px" }} viewBox="0 0 24 24">
                          <path fill="currentColor" d="M20,6C20.58,6 21.05,6.2 21.42,6.59C21.8,7 22,7.45 22,8V19C22,19.55 21.8,20 21.42,20.41C21.05,20.8 20.58,21 20,21H4C3.42,21 2.95,20.8 2.58,20.41C2.2,20 2,19.55 2,19V8C2,7.45 2.2,7 2.58,6.59C2.95,6.2 3.42,6 4,6H8V4C8,3.42 8.2,2.95 8.58,2.58C8.95,2.2 9.42,2 10,2H14C14.58,2 15.05,2.2 15.42,2.58C15.8,2.95 16,3.42 16,4V6H20M4,8V19H20V8H4M14,6V4H10V6H14M12,9A2.25,2.25 0 0,1 14.25,11.25C14.25,12.5 13.24,13.5 12,13.5A2.25,2.25 0 0,1 9.75,11.25C9.75,10 10.76,9 12,9M16.5,18H7.5V16.88C7.5,15.63 9.5,14.63 12,14.63C14.5,14.63 16.5,15.63 16.5,16.88V18Z" />
                        </svg>
                      </div>
                      <div className="media-body">
                        <h6 className="font-weight-semibold mb-1">Studied at <Link to="#" className="btn-link">University</Link></h6>
                        <span>2004-2008</span>
                        <p>Graduation: Bachelor of Science in Computer Science</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6}>
            <Card>
              <Card.Body>
                <Form className="profile-edit">
                  <textarea className="form-control" placeholder="What's in your mind right now" rows={7}></textarea>
                  <div className="profile-share border-top-0">
                    <div className="mt-2">
                      {/* <Link to="#" className="me-2" title="Audio" data-bs-toggle="tooltip" data-bs-placement="top"><span className="text-muted"><i className="fe fe-mic"></i></span></Link>
                      <Link to="#" className="me-2" title="Video" data-bs-toggle="tooltip" data-bs-placement="top"><span className="text-muted"><i className="fe fe-video"></i></span></Link>
                      <Link to="#" className="me-2" title="Image" data-bs-toggle="tooltip" data-bs-placement="top"><span className="text-muted"><i className="fe fe-image"></i></span></Link> */}
                      <OverlayTrigger placement="top" overlay={<Tooltip >Audio</Tooltip>}><span className="text-muted me-2"><i className="fe fe-mic"></i></span></OverlayTrigger>
                      <OverlayTrigger placement="top" overlay={<Tooltip >Video</Tooltip>}><span className="text-muted me-2"><i className="fe fe-video"></i></span></OverlayTrigger>
                      <OverlayTrigger placement="top" overlay={<Tooltip >Image</Tooltip>}><span className="text-muted me-2"><i className="fe fe-image"></i></span></OverlayTrigger>
                    </div>
                    <Button variant='success' size='sm' className="ms-auto"><i className="fa fa-share ms-1"></i> Share</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
            <Card className="border p-0 shadow-none">
              <Card.Body>
                <div className="d-flex">
                  <div className="media mt-0">
                    <div className="media-user me-2">
                      <div className=""><img alt="user16" className="rounded-circle avatar avatar-md" src={require("../../../assets/images/users/16.jpg")} /></div>
                    </div>
                    <div className="media-body">
                      <h6 className="mb-0 mt-1">Peter Hill</h6>
                      <small className="text-muted">just now</small>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <Dropdown className="show">
                      <Dropdown.Toggle variant='light' className="new option-dots no-caret" as='a'>
                        <span className=""><i className="fe fe-more-vertical"></i></span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end">
                        <Dropdown.Item className="dropdown-item" href="#">Edit Post</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">Delete Post</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">Personal Settings</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="fw-semibold mt-3">There is nothing more beautiful.</h4>
                  <p className="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                </div>
              </Card.Body>
              <Card.Footer className="user-pro-2">
                <div className="media mt-0">
                  <div className="media-user me-2">
                    <div className="avatar-list avatar-list-stacked">
                      <img className="avatar brround" alt="user12" src={require("../../../assets/images/users/12.jpg")} />
                      <img className="avatar brround" alt="user2" src={require("../../../assets/images/users/2.jpg")} />
                      <img className="avatar brround" alt="user9" src={require("../../../assets/images/users/9.jpg")} />
                      <img className="avatar brround" alt="user2" src={require("../../../assets/images/users/2.jpg")} />
                      <img className="avatar brround" alt="user4" src={require("../../../assets/images/users/4.jpg")} />
                      <span className="avatar brround text-primary">+28</span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h6 className="mb-0 mt-4 ms-2 me-2">28 people like your photo</h6>
                  </div>
                  <div className="ms-auto">
                    <div className="d-flex mt-1">
                      <Link className="new me-2 text-muted fs-16" to="#;"><span className=""><i className="fe fe-heart"></i></span></Link>
                      <Link className="new me-2 text-muted fs-16" to="#;"><span className=""><i className="fe fe-message-square"></i></span></Link>
                      <Link className="new text-muted fs-16" to="#;"><span className=""><i className="fe fe-share-2"></i></span></Link>
                    </div>
                  </div>
                </div>
              </Card.Footer>
            </Card>
            <Card className="border p-0 shadow-none">
              <Card.Body>
                <div className="d-flex">
                  <div className="media mt-0">
                    <div className="media-user me-2">
                      <div className=""><img alt="user16" className="rounded-circle avatar avatar-md" src={require("../../../assets/images/users/16.jpg")} /></div>
                    </div>
                    <div className="media-body">
                      <h6 className="mb-0 mt-1">Peter Hill</h6>
                      <small className="text-muted">Sep 26 2019, 10:14am</small>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <Dropdown className="show">
                      <Dropdown.Toggle variant='light' className="new option-dots no-caret" as='a'>
                        <span className=""><i className="fe fe-more-vertical"></i></span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end">
                        <Dropdown.Item href="#">Edit Post</Dropdown.Item>
                        <Dropdown.Item href="#">Delete Post</Dropdown.Item>
                        <Dropdown.Item href="#">Personal Settings</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="d-flex">
                    <img src={require("../../../assets/images/media/22.jpg")} alt="user22" className="w-40 m-1 br-5" />
                    <img src={require("../../../assets/images//media/24.jpg")} alt="user24" className="w-40 m-1 br-5" />
                  </div>
                  <h4 className="fw-semibold mt-3">There is nothing more beautiful.</h4>
                  <p className="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                </div>
              </Card.Body>
              <Card.Footer className="user-pro-2">
                <div className="media mt-0">
                  <div className="media-user me-2">
                    <div className="avatar-list avatar-list-stacked">
                      <img className="avatar brround" alt="user12" src={require("../../../assets/images/users/12.jpg")} />
                      <img className="avatar brround" alt="user2" src={require("../../../assets/images/users/2.jpg")} />
                      <img className="avatar brround" alt="user9" src={require("../../../assets/images/users/9.jpg")} />
                      <img className="avatar brround" alt="user2" src={require("../../../assets/images/users/2.jpg")} />
                      <img className="avatar brround" alt="user4" src={require("../../../assets/images/users/4.jpg")} />
                      <span className="avatar brround text-primary">+28</span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h6 className="mb-0 mt-4 ms-2">28 people like your photo</h6>
                  </div>
                  <div className="ms-auto">
                    <div className="d-flex mt-1">
                      <Link className="new me-2 text-muted fs-16" to="#;"><span className=""><i className="fe fe-heart"></i></span></Link>
                      <Link className="new me-2 text-muted fs-16" to="#;"><span className=""><i className="fe fe-message-square"></i></span></Link>
                      <Link className="new text-muted fs-16" to="#;"><span className=""><i className="fe fe-share-2"></i></span></Link>
                    </div>
                  </div>
                </div>
              </Card.Footer>
            </Card>
            <Card className="border p-0 shadow-none">
              <Card.Body>
                <div className="d-flex">
                  <div className="media mt-0">
                    <div className="media-user me-2">
                      <div className=""><img alt="user16" className="rounded-circle avatar avatar-md" src={require("../../../assets/images/users/16.jpg")} /></div>
                    </div>
                    <div className="media-body">
                      <h6 className="mb-0 mt-1">Peter Hill</h6>
                      <small className="text-muted">Sep 24 2019, 09:14am</small>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <Dropdown className="show">
                      <Dropdown.Toggle variant='light' className="new option-dots no-caret" as='a'>
                        <span className=""><i className="fe fe-more-vertical"></i></span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end">
                        <Dropdown.Item href="#">Edit Post</Dropdown.Item>
                        <Dropdown.Item href="#">Delete Post</Dropdown.Item>
                        <Dropdown.Item href="#">Personal Settings</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="d-flex">
                    <img src={require("../../../assets/images/media/26.jpg")} alt="user26" className="w-30 m-1 br-5" />
                    <img src={require("../../../assets/images/media/23.jpg")} alt="user23" className="w-30 m-1 br-5" />
                    <img src={require("../../../assets/images/media/21.jpg")} alt="user21" className="w-30 m-1 br-5" />
                  </div>
                  <h4 className="fw-semibold mt-3">There is nothing more beautiful.</h4>
                  <p className="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                </div>
              </Card.Body>
              <Card.Footer className="user-pro-2">
                <div className="media mt-0">
                  <div className="media-user me-2">
                    <div className="avatar-list avatar-list-stacked">
                      <img className="avatar brround" alt="user12" src={require("../../../assets/images/users/12.jpg")} />
                      <img className="avatar brround" alt="user2" src={require("../../../assets/images/users/2.jpg")} />
                      <img className="avatar brround" alt="user9" src={require("../../../assets/images/users/9.jpg")} />
                      <img className="avatar brround" alt="user2" src={require("../../../assets/images/users/2.jpg")} />
                      <img className="avatar brround" alt="user4" src={require("../../../assets/images/users/4.jpg")} />
                      <span className="avatar brround text-primary">+28</span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h6 className="mb-0 mt-4 ms-2">28 people like your photo</h6>
                  </div>
                  <div className="ms-auto">
                    <div className="d-flex mt-1">
                      <Link className="new me-2 text-muted fs-16" to="#;"><span className=""><i className="fe fe-heart"></i></span></Link>
                      <Link className="new me-2 text-muted fs-16" to="#;"><span className=""><i className="fe fe-message-square"></i></span></Link>
                      <Link className="new text-muted fs-16" to="#;"><span className=""><i className="fe fe-share-2"></i></span></Link>
                    </div>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={3}>
            <Card>
              <Card.Header>
                <Card.Title>Followers</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="">
                  <div className="media overflow-visible">
                    <img className="avatar brround avatar-md me-3" src={require("../../../assets/images/users/18.jpg")} alt="avatar-user18" />
                    <div className="media-body valign-middle mt-2">
                      <Link to="#" className=" fw-semibold text-dark">John Paige</Link>
                      <p className="text-muted mb-0">johan@gmail.com</p>
                    </div>
                    <div className="media-body valign-middle text-end overflow-visible mt-2">
                      <Button variant='primary' size='sm'>Follow</Button>
                    </div>
                  </div>
                  <div className="media overflow-visible mt-sm-5">
                    <span className="avatar cover-image avatar-md brround bg-pink me-3">LQ</span>
                    <div className="media-body valign-middle mt-2">
                      <Link to="#" className="fw-semibold text-dark">Lillian Quinn</Link>
                      <p className="text-muted mb-0">lilliangore</p>
                    </div>
                    <div className="media-body valign-middle text-end overflow-visible mt-1">
                      <Button variant='secondary' size='sm'>Follow</Button>
                    </div>
                  </div>
                  <div className="media overflow-visible mt-sm-5">
                    <img className="avatar brround avatar-md me-3" src={require("../../../assets/images/users/2.jpg")} alt="avatar-user2" />
                    <div className="media-body valign-middle mt-2">
                      <Link to="#" className="text-dark fw-semibold">Harry Fisher</Link>
                      <p className="text-muted mb-0">harryuqt</p>
                    </div>
                    <div className="media-body valign-middle text-end overflow-visible mt-1">
                      <Button variant='danger' size='sm'>Follow</Button>
                    </div>
                  </div>
                  <div className="media overflow-visible mt-sm-5">
                    <span className="avatar cover-image avatar-md brround me-3 bg-primary">IH</span>
                    <div className="media-body valign-middle mt-2">
                      <Link to="#" className="fw-semibold text-dark">Irene Harris</Link>
                      <p className="text-muted mb-0">harris@gmail.com</p>
                    </div>
                    <div className="media-body valign-middle text-end overflow-visible mt-1">
                      <Button variant='success' size='sm'>Follow</Button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title>Our Latest News</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="">
                  <div className="media media-xs overflow-visible">
                    <img className="avatar bradius avatar-xl me-3" src={require("../../../assets/images/users/12.jpg")} alt="avatar-user12" />
                    <div className="media-body valign-middle">
                      <Link to="#" className="fw-semibold text-dark">John Paige</Link>
                      <p className="text-muted mb-0">There are many variations of passages of Lorem Ipsum available ...</p>
                    </div>
                  </div>
                  <div className="media media-xs overflow-visible mt-5">
                    <img className="avatar bradius avatar-xl me-3" src={require("../../../assets/images/users/2.jpg")} alt="avatar-user2" />
                    <div className="media-body valign-middle">
                      <Link to="#" className="fw-semibold text-dark">Peter Hill</Link>
                      <p className="text-muted mb-0">There are many variations of passages of Lorem Ipsum available ...</p>
                    </div>
                  </div>
                  <div className="media media-xs overflow-visible mt-5">
                    <img className="avatar bradius avatar-xl me-3" src={require("../../../assets/images/users/9.jpg")} alt="avatar-user9" />
                    <div className="media-body valign-middle">
                      <Link to="#" className="fw-semibold text-dark">Irene Harris</Link>
                      <p className="text-muted mb-0">There are many variations of passages of Lorem Ipsum available ...</p>
                    </div>
                  </div>
                  <div className="media media-xs overflow-visible mt-5">
                    <img className="avatar bradius avatar-xl me-3" src={require("../../../assets/images/users/4.jpg")} alt="avatar-user4" />
                    <div className="media-body valign-middle">
                      <Link to="#" className="fw-semibold text-dark">Harry Fisher</Link>
                      <p className="text-muted mb-0">There are many variations of passages of Lorem Ipsum available ...</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title>Friends</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="user-pro-1">
                  <div className="media media-xs overflow-visible">
                    <img className="avatar brround avatar-md me-3" src={require("../../../assets/images/users/18.jpg")} alt="avatar-user18" />
                    <div className="media-body valign-middle">
                      <Link to="#" className=" fw-semibold text-dark">John Paige</Link>
                      <p className="text-muted mb-0">Web Designer</p>
                    </div>
                    <div className="">
                      <div className="social social-profile-buttons float-sm-end">
                        <Link className="social-icon bg-white" to="#"><i className="fa fa-facebook"></i></Link>
                        <Link className="social-icon bg-white" to="#"><i className="fa fa-twitter"></i></Link>
                        <Link className="social-icon bg-white" to="#"><i className="fa fa-linkedin"></i></Link>
                      </div>
                    </div>
                  </div>
                  <div className="media media-xs overflow-visible mt-5">
                    <span className="avatar cover-image avatar-md brround bg-pink me-3">LQ</span>
                    <div className="media-body valign-middle mt-0">
                      <Link to="#" className="fw-semibold text-dark">Lillian Quinn</Link>
                      <p className="text-muted mb-0">Web Designer</p>
                    </div>
                    <div className="">
                      <div className="social social-profile-buttons float-sm-end">
                        <Link className="social-icon bg-white" to="#"><i className="fa fa-facebook"></i></Link>
                        <Link className="social-icon bg-white" to="#"><i className="fa fa-twitter"></i></Link>
                        <Link className="social-icon bg-white" to="#"><i className="fa fa-linkedin"></i></Link>
                      </div>
                    </div>
                  </div>
                  <div className="media media-xs overflow-visible mt-5">
                    <img className="avatar brround avatar-md me-3" src={require("../../../assets/images/users/2.jpg")} alt="avatar-user2" />
                    <div className="media-body valign-middle mt-0">
                      <Link to="#" className="text-dark fw-semibold">Harry Fisher</Link>
                      <p className="text-muted mb-0">Web Designer</p>
                    </div>
                    <div className="">
                      <div className="social social-profile-buttons float-sm-end">
                        <Link className="social-icon bg-white" to="#"><i className="fa fa-facebook"></i></Link>
                        <Link className="social-icon bg-white" to="#"><i className="fa fa-twitter"></i></Link>
                        <Link className="social-icon bg-white" to="#"><i className="fa fa-linkedin"></i></Link>
                      </div>
                    </div>
                  </div>
                  <div className="media media-xs overflow-visible mt-5">
                    <span className="avatar cover-image avatar-md brround me-3 bg-primary">IH</span>
                    <div className="media-body valign-middle mt-0">
                      <Link to="#" className="fw-semibold text-dark">Irene Harris</Link>
                      <p className="text-muted mb-0">Web Designer</p>
                    </div>
                    <div className="">
                      <div className="social social-profile-buttons float-sm-end">
                        <Link className="social-icon bg-white" to="#"><i className="fa fa-facebook"></i></Link>
                        <Link className="social-icon bg-white" to="#"><i className="fa fa-twitter"></i></Link>
                        <Link className="social-icon bg-white" to="#"><i className="fa fa-linkedin"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}
  </div>
)
};

export default Profile;

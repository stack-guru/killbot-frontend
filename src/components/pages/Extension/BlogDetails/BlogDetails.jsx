import React from 'react';
import styles from './BlogDetails.module.scss';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import { Link } from 'react-router-dom';
import { Badge, Button, Card, Col, Dropdown, Form, FormControl, InputGroup, ListGroup, Nav, Row } from 'react-bootstrap';


const BlogDetails = () => {
  
  return (

  <div className={styles.BlogDetails}>
    <PageHeader titles="Blog Details" active="Blog Details" items={['Pages']} />
    <Row>
      <Col xl={8}>
        <Card>
          <img className="card-img-top " src={require("../../../../assets/images/media/27.jpg")} alt="blog11" />
          <Card.Body>
            <div className="d-md-flex">
              <Link to="#" className="d-flex me-4 mb-2"><i className="fe fe-calendar fs-16 me-1 p-3 bg-secondary-transparent text-secondary bradius"></i>
                <div className="mt-0 mt-3 ms-1 text-muted font-weight-semibold">Sep-25-2021</div>
              </Link>
              <Link to={`${process.env.PUBLIC_URL}/pages/profile`} className="d-flex mb-2"><i className="fe fe-user fs-16 me-1 p-3 bg-primary-transparent text-primary bradius"></i>
                <div className="mt-0 mt-3 ms-1 text-muted font-weight-semibold">Harry Fisher</div>
              </Link>
              <div className="ms-auto">
                <Link to="#" className="d-flex mb-2"><i className="fe fe-message-square fs-16 me-1 p-3 bg-success-transparent text-success bradius"></i>
                  <div className="mt-0 mt-3 ms-1 text-muted font-weight-semibold">13 Comments</div>
                </Link>
              </div>
            </div>
          </Card.Body>
          <Card.Body>
            <h3><Link to="#"> Voluptatem quia voluptas</Link></h3>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            <p> Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris commodo consequat. There’s an old maxim that states, “No fun for the writer, no fun for the reader.”No matter what industry
              you’re working in, as a blogger, you should live and die by this statement.</p>
            <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the
              truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Comments</Card.Title>
          </Card.Header>
          <Card.Body className="pb-0">
            <div className="media mb-5 overflow-visible d-block d-sm-flex">
              <div className="me-3 mb-2">
                <Link to={`${process.env.PUBLIC_URL}/pages/profile`}> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={require("../../../../assets/images/users/5.jpg")} /> </Link>
              </div>
              <div className="media-body overflow-visible">
                <div className="border mb-5 p-4 br-5">
                  <Nav className="float-end">
                    <Dropdown>
                      <Dropdown.Toggle className="text-muted fs-16 p-0 ps-4 no-caret" as="a"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end" style={{}}>
                        <Dropdown.Item to="#"><i className="fe fe-edit me-1 d-inline-block"></i> Edit</Dropdown.Item>
                        <Dropdown.Item to="#"><i className="fe fe-corner-up-left me-1 d-inline-block"></i> Reply</Dropdown.Item>
                        <Dropdown.Item to="#"><i className="fe fe-flag me-1 d-inline-block"></i> Report Abuse</Dropdown.Item>
                        <Dropdown.Item to="#"><i className="fe fe-trash-2 me-1 d-inline-block"></i> Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav>
                  <h5 className="mt-0">Gavin Murray</h5>
                  <span><i className="fe fe-thumb-up text-danger"></i></span>
                  <p className="font-13 text-muted">Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris commodo consequat. There’s an old maxim that states, “No fun for the writer, no fun for the reader.”No matter
                    what industry you’re working in, as a blogger, you should live and die by this statement.</p>
                  <Link className="like" to="#">
                    <Badge bg='danger-light' className="btn-danger-light rounded-pill py-2 px-3 me-2">
                      <i className="fe fe-heart me-1"></i>56</Badge>
                  </Link>
                  <span className="reply" id="1">
                    <Link to="#"><Badge className="btn-primary-light rounded-pill py-2 px-3"><i className="fe fe-corner-up-left me-1 d-inline-block"></i>Reply</Badge></Link>
                  </span>
                </div>
                <div className="media mb-5 overflow-visible">
                  <div className="me-3">
                    <Link to={`${process.env.PUBLIC_URL}/pages/profile`}> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={require("../../../../assets/images/users/2.jpg")} /> </Link>
                  </div>
                  <div className="media-body border p-4 overflow-visible br-5">
                    <Nav className="float-end">
                      <Dropdown>
                        <Dropdown.Toggle className="text-muted fs-16 p-0 ps-4 no-caret" as='a'><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end" style={{}}>
                          <Dropdown.Item to="#"><i className="fe fe-edit me-1 d-inline-block"></i> Edit</Dropdown.Item>
                          <Dropdown.Item to="#"><i className="fe fe-corner-up-left me-1 d-inline-block"></i> Reply</Dropdown.Item>
                          <Dropdown.Item to="#"><i className="fe fe-flag me-1 d-inline-block"></i> Report Abuse</Dropdown.Item>
                          <Dropdown.Item to="#"><i className="fe fe-trash-2 me-1 d-inline-block"></i> Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Nav>
                    <h5 className="mt-0">Mozelle Belt</h5>
                    <span><i className="fe fe-thumb-up text-danger"></i></span>
                    <p className="font-13 text-muted">Nostrud exercitation ullamco laboris commodo consequat. There’s an old maxim that states, “No fun for the writer, no fun for the reader.”No matter what industry you’re working in, as a blogger, you should
                      live and die by this statement.</p>
                    <Link className="like" to="#"><Badge bg='danger-light' className="btn-danger-light rounded-pill py-2 px-3 me-2"><i className="fe fe-heart me-1"></i>56</Badge></Link>
                    <span className="reply" id="2">
                      <Link to="#"><Badge bg='primary-light' className="btn-primary-light rounded-pill py-2 px-3"><i className="fe fe-corner-up-left me-1 d-inline-block"></i>Reply</Badge></Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="media mb-5 overflow-visible">
              <div className="me-3">
                <Link to={`${process.env.PUBLIC_URL}/pages/profile`}> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={require("../../../../assets/images/users/15.jpg")} /> </Link>
              </div>
              <div className="media-body overflow-visible">
                <div className="border mb-5 p-4 br-5">
                  <nav className="nav float-end">
                    <Dropdown>
                      <Dropdown.Toggle className="text-muted fs-16 p-0 ps-4 no-caret" as='a'><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end" style={{}}>
                        <Dropdown.Item to="#"><i className="fe fe-edit me-1 d-inline-block"></i> Edit</Dropdown.Item>
                        <Dropdown.Item to="#"><i className="fe fe-corner-up-left me-1 d-inline-block"></i> Reply</Dropdown.Item>
                        <Dropdown.Item to="#"><i className="fe fe-flag me-1 d-inline-block"></i> Report Abuse</Dropdown.Item>
                        <Dropdown.Item to="#"><i className="fe fe-trash-2 me-1 d-inline-block"></i> Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </nav>
                  <h5 className="mt-0">Paul Smith</h5>
                  <p className="font-13 text-muted">Very nice ! On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the </p>
                  <Link className="like" to="#"><Badge bg='danger-light' className="btn-danger-light rounded-pill py-2 px-3 me-2"><i className="fe fe-heart me-1"></i>56</Badge></Link>
                  <span className="reply" id="3">
                    <Link to="#"><Badge bg='primary-light' className="btn-primary-light rounded-pill py-2 px-3"><i className="fe fe-corner-up-left me-1 d-inline-block"></i>Reply</Badge></Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="media mb-5 overflow-visible d-block d-sm-flex">
              <div className="me-3 mb-1">
                <Link to={`${process.env.PUBLIC_URL}/pages/profile`}> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={require("../../../../assets/images/users/5.jpg")} /> </Link>
              </div>
              <div className="media-body overflow-visible">
                <div className="border mb-5 p-4 br-5">
                  <Nav className="float-end">
                    <Dropdown>
                      <Dropdown.Toggle className="text-muted fs-16 p-0 ps-4 no-caret" as='a'><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end" style={{}}>
                        <Dropdown.Item to="#"><i className="fe fe-edit me-1 d-inline-block"></i> Edit</Dropdown.Item>
                        <Dropdown.Item to="#"><i className="fe fe-corner-up-left me-1 d-inline-block"></i> Reply</Dropdown.Item>
                        <Dropdown.Item to="#"><i className="fe fe-flag me-1 d-inline-block"></i> Report Abuse</Dropdown.Item>
                        <Dropdown.Item to="#"><i className="fe fe-trash-2 me-1 d-inline-block"></i> Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav>
                  <h5 className="mt-0">Gavin Murray</h5>
                  <span><i className="fe fe-thumb-up text-danger"></i></span>
                  <p className="font-13 text-muted">Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris commodo consequat. There’s an old maxim that states, “No fun for the writer, no fun for the reader.”No matter
                    what industry you’re working in, as a blogger, you should live and die by this statement.</p>
                  <Link className="like" to="#"><Badge bg='danger-light' className="btn-danger-light rounded-pill py-2 px-3 me-2"><i className="fe fe-heart me-1"></i>56</Badge></Link>
                  <span className="reply" id="4">
                    <Link to="#"><Badge bg='primary-light' className="btn-primary-light rounded-pill py-2 px-3"><i className="fe fe-corner-up-left me-1 d-inline-block"></i>Reply</Badge></Link>
                  </span>
                </div>
                <div className="media mb-5 overflow-visible d-block d-sm-flex">
                  <div className="me-3 mb-1">
                    <Link to={`${process.env.PUBLIC_URL}/pages/profile`}> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={require("../../../../assets/images/users/2.jpg")} /> </Link>
                  </div>
                  <div className="media-body overflow-visible">
                    <div className="border p-4 mb-5 br-5">
                      <nav className="nav float-end">
                        <Dropdown>
                          <Dropdown.Toggle className="text-muted fs-16 p-0 ps-4 no-caret" as='a'><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu-end" style={{}}>
                            <Dropdown.Item to="#"><i className="fe fe-edit me-1 d-inline-block"></i> Edit</Dropdown.Item>
                            <Dropdown.Item to="#"><i className="fe fe-corner-up-left me-1 d-inline-block"></i> Reply</Dropdown.Item>
                            <Dropdown.Item to="#"><i className="fe fe-flag me-1 d-inline-block"></i> Report Abuse</Dropdown.Item>
                            <Dropdown.Item to="#"><i className="fe fe-trash-2 me-1 d-inline-block"></i> Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </nav>
                      <h5 className="mt-0">Mozelle Belt</h5>
                      <span><i className="fe fe-thumb-up text-danger"></i></span>
                      <p className="font-13 text-muted">Nostrud exercitation ullamco laboris commodo consequat. There’s an old maxim that states, “No fun for the writer, no fun for the reader.”No matter what industry you’re working in, as a blogger, you
                        should live and die by this statement.</p>
                      <Link className="like" to="#"><Badge bg='danger-light' className="btn-danger-light rounded-pill py-2 px-3 me-2"><i className="fe fe-heart me-1"></i>56</Badge></Link>
                      <span className="reply" id="5">
                        <Link to="#"><Badge bg='primary-light' className="btn-primary-light rounded-pill py-2 px-3"><i className="fe fe-corner-up-left me-1 d-inline-block"></i>Reply</Badge></Link>
                      </span>
                    </div>
                    <div className="media overflow-visible">
                      <div className="me-3">
                        <Link to={`${process.env.PUBLIC_URL}/pages/profile`}> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={require("../../../../assets/images/users/9.jpg")} /> </Link>
                      </div>
                      <div className="media-body border p-4 overflow-visible br-5">
                        <nav className="nav float-end">
                          <Dropdown>
                            <Dropdown.Toggle className="text-muted fs-16 p-0 ps-4 no-caret" as='a'><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end" style={{}}>
                              <Dropdown.Item to="#"><i className="fe fe-edit me-1 d-inline-block"></i> Edit</Dropdown.Item>
                              <Dropdown.Item to="#"><i className="fe fe-corner-up-left me-1 d-inline-block"></i> Reply</Dropdown.Item>
                              <Dropdown.Item to="#"><i className="fe fe-flag me-1 d-inline-block"></i> Report Abuse</Dropdown.Item>
                              <Dropdown.Item to="#"><i className="fe fe-trash-2 me-1 d-inline-block"></i> Delete</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </nav>
                        <h5 className="mt-0">Paul Smith</h5>
                        <span><i className="fe fe-thumb-up text-danger"></i></span>
                        <p className="font-13 text-muted">Nostrud exercitation ullamco laboris commodo consequat. There’s an old maxim that states, “No fun for the writer, no fun for the reader.”No matter what industry you’re working in, as a blogger,
                          you should live and die by this statement.</p>
                        <Link className="like" to="#"><Badge bg='danger-light' className="btn-danger-light rounded-pill py-2 px-3 me-2"><i className="fe fe-heart me-1"></i>56</Badge></Link>
                        <span className="reply" id="6">
                          <Link to="#"><Badge bg='primary-light' className="btn-primary-light rounded-pill py-2 px-3"><i className="fe fe-corner-up-left me-1 d-inline-block"></i>Reply</Badge></Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Add a Comments</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form className="form-horizontal  m-t-20">
              <Form.Group className='mb-3'>
                <Col xs={12}>
                  <Form.Control type="text" required placeholder="Username*" />
                </Col>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Col xs={12}>
                  <Form.Control type="email" required placeholder="Email*" />
                </Col>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Col xs={12}>
                  <Form.Control defaultValue='Your Comment*' as='textarea' rows={5}></Form.Control>
                </Col>
              </Form.Group>
              <div className="">
                <Button variant='primary' className="btn-rounded  waves-effect waves-light ms-3">Submit</Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={4}>
        <Card>
          <Card.Body>
            <InputGroup>
              <FormControl type="text" className="border-end-0" placeholder="Search ..." />
              <InputGroup.Text className="bg-transparent border-start-0 text-muted">
                <i className="fe fe-search" aria-hidden="true"></i>
              </InputGroup.Text>
            </InputGroup>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Categories</Card.Title>
          </Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item className="border-0 p-0"><Link to="#"><i className="fe fe-chevron-right d-inline-flex"></i> Development</Link> <span className="product-label">22</span> </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0"><Link to="#"><i className="fe fe-chevron-right d-inline-flex"></i> Web Design</Link> <span className="product-label">15</span> </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0"><Link to="#"><i className="fe fe-chevron-right d-inline-flex"></i> Technology</Link> <span className="product-label">10</span> </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0"><Link to="#"><i className="fe fe-chevron-right d-inline-flex"></i> Sports</Link> <span className="product-label">88</span> </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Professional Blog Writers</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <div className="d-flex overflow-visible">
                <img className="avatar bradius avatar-xl me-3" src={require("../../../../assets/images/users/1.jpg")} alt="avatar-img" />
                <div className="media-body valign-middle">
                  <Link to={`${process.env.PUBLIC_URL}/pages/profile`} className="fw-semibold text-dark">Simon Sais</Link>
                  <p className="text-muted mb-0">There are many variations of passages of Lorem Ipsum available ...</p>
                </div>
              </div>
              <div className="d-flex overflow-visible mt-5">
                <img className="avatar bradius avatar-xl me-3" src={require("../../../../assets/images/users/3.jpg")} alt="avatar-img" />
                <div className="media-body valign-middle">
                  <Link to={`${process.env.PUBLIC_URL}/pages/profile`} className="fw-semibold text-dark">Cherry Blossom</Link>
                  <p className="text-muted mb-0">There are many variations of passages of Lorem Ipsum available ...</p>
                </div>
              </div>
              <div className="d-flex overflow-visible mt-5">
                <img className="avatar bradius avatar-xl me-3" src={require("../../../../assets/images/users/5.jpg")} alt="avatar-img" />
                <div className="media-body valign-middle">
                  <Link to={`${process.env.PUBLIC_URL}/pages/profile`} className="fw-semibold text-dark">Ivan Notheridiya</Link>
                  <p className="text-muted mb-0">There are many variations of passages of Lorem Ipsum available ...</p>
                </div>
              </div>
              <div className="d-flex overflow-visible mt-5">
                <img className="avatar bradius avatar-xl me-3" src={require("../../../../assets/images/users/15.jpg")} alt="avatar-img" />
                <div className="media-body valign-middle">
                  <Link to={`${process.env.PUBLIC_URL}/pages/profile`} className="fw-semibold text-dark">Manny Jah</Link>
                  <p className="text-muted mb-0">There are many variations of passages of Lorem Ipsum available ...</p>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Recent Posts</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <div className="d-sm-flex overflow-visible">
                <img className="card-aside-column br-5 cover-image" alt='media19' src={require("../../../../assets/images/media/19.jpg")} />
                <div className="ps-3 flex-column">
                  <h4><Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}>Generator on the Internet..</Link></h4>
                  <div className="text-muted">Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....</div>
                </div>
              </div>
              <div className="d-sm-flex overflow-visible mt-5">
                <img className="card-aside-column br-5 cover-image" alt='media22' src={require("../../../../assets/images/media/22.jpg")} />
                <div className="ps-3 flex-column">
                  <h4><Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}>Voluptatem quia voluptas...</Link></h4>
                  <div className="text-muted">Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....</div>
                </div>
              </div>
              <div className="d-sm-flex overflow-visible mt-5">
                <img className="card-aside-column br-5 cover-image" alt='media12' src={require("../../../../assets/images/media/12.jpg")} />
                <div className="ps-3 flex-column">
                  <h4><Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}>Generator on the Internet..</Link></h4>
                  <div className="text-muted">Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....</div>
                </div>
              </div>
              <div className="d-sm-flex overflow-visible mt-5">
                <img className="card-aside-column br-5 cover-image" alt='media25' src={require("../../../../assets/images/media/25.jpg")} />
                <div className="ps-3 flex-column">
                  <h4><Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}>Voluptatem quia voluptas...</Link></h4>
                  <div className="text-muted">Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....</div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Tags</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="tags">
              <Link to="#" className="tag">Development</Link>
              <Link to="#" className="tag">Design</Link>
              <Link to="#" className="tag">Technology</Link>
              <Link to="#" className="tag">Popular</Link>
              <Link to="#" className="tag">Codiegniter</Link>
              <Link to="#" className="tag">JavaScript</Link>
              <Link to="#" className="tag">Bootstrap</Link>
              <Link to="#" className="tag">PHP</Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
)
  };

export default BlogDetails;

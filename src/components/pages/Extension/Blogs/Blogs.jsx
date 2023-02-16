import React from 'react';
import { Breadcrumb, Row, Col, Card, Pagination, InputGroup, FormControl, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Blogs.module.scss';

const Blogs = () => {

  return (

  <div className={styles.Blogs}>

    {/* <!-- PAGE-HEADER --> */}
    <div className="page-header">
      <h1 className="page-title">Blog</h1>
      <div>
        <Breadcrumb>
          <Link to={`${process.env.PUBLIC_URL}/pages/extension/blogpost`} className="btn btn-primary"><i className="fa fa-plus-square me-2"></i>Add Post</Link>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- PAGE-HEADER END --> */}

    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col sm={6} md={12} lg={6} xl={4}>
        <Card>
          <Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}><img className="card-img-top" src={require("../../../../assets/images/media/13.jpg")} alt="And this isn't my nose. This is a false one." /></Link>
          <Card.Body className="d-flex flex-column">
            <h3><Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}>Voluptatem quia voluptas.</Link></h3>
            <div className="text-muted">To take a trivial example, which of us ever undertakes laborious physical exerciser , except to obtain some advantage from it...</div>
            <div className="d-flex align-items-center pt-5 mt-auto">
              <img className="avatar brround avatar-md me-3 cover-image" alt='user 18' src={require("../../../../assets/images/users/18.jpg")} />
              <div>
                <Link to={`${process.env.PUBLIC_URL}/pages/profile`} className="text-default">Megan Peters</Link>
                <small className="d-block text-muted">1 days ago</small>
              </div>
              <div className="ms-auto">
                <Link to="#" className="icon d-none d-md-inline-block text-muted me-2"><i className="fe fe-heart me-1 border brround"></i></Link>
                <Link to="#" className="icon d-none d-md-inline-block text-muted"><i className="fa fa-thumbs-o-up border brround"></i></Link>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}><img className="card-img-top br-be-0 br-bs-0" src={require("../../../../assets/images/media/15.jpg")} alt="How do you know she is a witch?" /></Link>
          <Card.Body className="d-flex flex-column">
            <h3><Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}> Voluptatem quia voluptas </Link></h3>
            <div className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque...</div>
            <div className="d-flex align-items-center pt-5 mt-auto">
              <img className="avatar  brround avatar-md me-3 cover-image" alt='user 6' src={require("../../../../assets/images/users/6.jpg")} />
              <div>
                <Link to={`${process.env.PUBLIC_URL}/pages/profile`} className="text-default">Carol Paige</Link>
                <small className="d-block text-muted">2 days ago</small>
              </div>
              <div className="ms-auto">
                <Link to="#" className="icon d-none d-md-inline-block text-muted me-2"><i className="fe fe-heart me-1 border brround"></i></Link>
                <Link to="#" className="icon d-none d-md-inline-block text-muted"><i className="fa fa-thumbs-o-up border brround"></i></Link>
              </div>
            </div>
          </Card.Body>
        </Card>
        {/* <!-- COL-END --> */}
      </Col>
      {/* <!-- COL-END --> */}
      <Col sm={6} md={12} lg={6} xl={4}>
        <Card>
          <Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}><img className="card-img-top" src={require("../../../../assets/images/media/14.jpg")} alt="Well, I didn't vote for you." /></Link>
          <Card.Body className="d-flex flex-column">
            <h3><Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}> Voluptatem quia voluptas </Link></h3>
            <div className="text-muted">Who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces.</div>
            <div className="d-flex align-items-center pt-5 mt-auto">
              <img className="avatar brround avatar-md me-3 cover-image" alt='user 16' src={require("../../../../assets/images/users/16.jpg")} />
              <div>
                <Link to={`${process.env.PUBLIC_URL}/pages/profile`} className="text-default">Anna Ogden</Link>
                <small className="d-block text-muted">2 days ago</small>
              </div>
              <div className="ms-auto">
                <Link to="#" className="icon d-none d-md-inline-block text-muted me-2"><i className="fe fe-heart me-1 border brround"></i></Link>
                <Link to="#" className="icon d-none d-md-inline-block text-muted"><i className="fa fa-thumbs-o-up border brround"></i></Link>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}><img className="card-img-top br-be-0 br-bs-0" src={require("../../../../assets/images/media/16.jpg")} alt="Shut up!" /></Link>
          <Card.Body className="d-flex flex-column">
            <h3><Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}> Voluptatem quia voluptas </Link></h3>
            <div className="text-muted">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut ..</div>
            <div className="d-flex align-items-center pt-5 mt-auto">
              <img className="avatar brround avatar-md me-3 cover-image" alt='user 7' src={require("../../../../assets/images/users/7.jpg")} />
              <div>
                <Link to={`${process.env.PUBLIC_URL}/pages/profile`} className="text-default">Fiona Hodges</Link>
                <small className="d-block text-muted">5 days ago</small>
              </div>
              <div className="ms-auto">
                <Link to="#" className="icon d-none d-md-inline-block text-muted me-2"><i className="fe fe-heart me-1 border brround"></i></Link>
                <Link to="#" className="icon d-none d-md-inline-block text-muted"><i className="fa fa-thumbs-o-up border brround"></i></Link>
              </div>
            </div>
          </Card.Body>
        </Card>
        <div className="mb-9">
          <div className="float-end">
            <Pagination>
              <Pagination.Item disabled>Prev</Pagination.Item>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Item>Next</Pagination.Item>
            </Pagination>
          </div>
        </div>
      </Col>
      {/* <!-- COL-END --> */}
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
            <Card.Title>Recent Posts</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <div className="d-block d-sm-flex overflow-visible">
                <img className="card-aside-column br-5 cover-image w-100" alt='media 22' src={require("../../../../assets/images/media/22.jpg")} />
                <div className="ps-3 flex-column">
                  <Badge bg='danger' className="me-1 mb-1 mt-1">Lifestyle</Badge>
                  <h4><Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}>Generator on the Internet..</Link></h4>
                  <div className="text-muted">Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....</div>
                </div>
              </div>
              <div className="d-block d-sm-flex overflow-visible mt-5">
                <img className="card-aside-column br-5 cover-image w-100" alt='media 19' src={require("../../../../assets/images/media/12.jpg")} />
                <div className="ps-3 flex-column">
                  <Badge bg='primary' className="me-1 mb-1 mt-1">Business</Badge>
                  <h4><Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}>Voluptatem quia voluptas...</Link></h4>
                  <div className="text-muted">Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....</div>
                </div>
              </div>
              <div className="d-block d-sm-flex overflow-visible mt-5">
                <img className="card-aside-column br-5 cover-image w-100" alt='media 19' src={require("../../../../assets/images/media/27.jpg")} />
                <div className="ps-3 flex-column">
                  <span className="badge bg-secondary me-1 mb-1 mt-1">Travel</span>
                  <h4><Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}>Generator on the Internet..</Link></h4>
                  <div className="text-muted">Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....</div>
                </div>
              </div>
              <div className="d-block d-sm-flex overflow-visible mt-5">
                <img className="card-aside-column br-5 cover-image w-100" alt='media19' src={require("../../../../assets/images/media/25.jpg")} />
                <div className="ps-3 flex-column">
                  <Badge bg='success' className="me-1 mb-1 mt-1">Meeting</Badge>
                  <h4><Link to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}>Voluptatem quia voluptas...</Link></h4>
                  <div className="text-muted">Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....</div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <h4 className="fw-bold">NEVER MISS A POST !</h4>
            <p>Signup for free to get the latest posts.</p>
            <FormControl placeholder="Enter your name *" type="text" />
            <Button variant='danger' className="mt-5">Subscribe</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}
  </div>
)
  };

export default Blogs;

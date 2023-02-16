import React from 'react';
import { Card, FormControl, InputGroup, Pagination, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Search.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { LightGallery } from '../../../Data/Pages/DataPageGallery';


const Search = () => {
  return (

  <div className={styles.Search}>
    <PageHeader titles="Search" active="Search" items={['Apps']} />
    {/* <!-- Row --> */}
    <Row>
      <Col sm={12} md={12}>
        
          <Tab.Container id="left-tabs-example" defaultActiveKey="all">
          <Card>
          <Card.Body className="pb-0">
            <InputGroup className="mb-2">
              <FormControl type="text" className="form-control" placeholder="Searching....." />
              <InputGroup.Text className="btn btn-primary">Search</InputGroup.Text>
            </InputGroup>
          </Card.Body>
          
                <Nav variant="pills" className='px-5'>
                  <Nav.Item>
                    <Nav.Link eventKey="all">All</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Images">Images</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Books">Books</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="News">News</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Videos">Videos</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Card.Body className=" p-3">
            <p className="text-muted mb-0 ps-3">About 12,546,90000 results (0.56 Seconds)</p>
          </Card.Body>
          </Card>
                <Tab.Content>
                  <Tab.Pane eventKey="all">
                    <Card>
                      <Card.Body>
                        <div className="mb-2">
                          <Link to="#" className="h4 text-dark">Templist – HTML5 Digital Marketplace Template by ...</Link>
                        </div>
                        <Link to="#" className="text-primary">https://www.spruko.com/demo/templist/Html/index.html</Link>
                        <p className="text-muted mt-2 mb-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                          dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <div>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                          <Link to="#" className="me-4 d-inline-block"> (48) Reviews</Link>
                          <Link to="#" className="fw-semibold">USD-$24</Link>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <div className="mb-2">
                          <Link to="#" className="h4 text-dark">Zendash - Bootstrap HTML Dashboard Template</Link>
                        </div>
                        <Link to="#" className="text-primary">https://www.spruko.com/demo/zendash/html/</Link>
                        <p className="text-muted mt-2 mb-1">Treal Template included in 30 versions. In the demo 30 versions is shown in 4 floders. And In the final each version has single floder corresponding to that ...</p>
                        <p className="text-muted  mb-2">Tags: admin, admin dashboard, admin panel, admin template, backend, bootstrap, bootstrap 4, clean, dashboard, flat, jquery, modern, premium admin templates ...</p>
                        <div>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                          <Link to="#" className="me-4 d-inline-block"> (48) Reviews</Link>
                          <Link to="#" className="fw-semibold">USD-$24</Link>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <div className="mb-2">
                          <Link to="#" className="h4 text-dark">Zendash template related Images</Link>
                        </div>
                        <div className="tags mb-2">
                          <span className="tag">
                            background
                            <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                          </span>
                          <span className="tag">
                            admin template
                            <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                          </span>
                          <span className="tag">
                            UX designs
                            <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                          </span>
                          <span className="tag">
                            Presentation
                            <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                          </span>
                        </div>
                        <div className="mb-2">
                          <Link to="#" className="h4 text-dark">Zendash - Bootstrap HTML Dashboard Template</Link>
                        </div>
                        <Link to="#" className="text-primary">https://www.spruko.com/demo/zendash/html/</Link>
                        <p className="text-muted mt-2 mb-1">Treal Template included in 30 versions. In the demo 30 versions is shown in 4 floders. And In the final each version has single floder corresponding to that ...</p>
                        <p className="text-muted  mb-2">Tags: admin, admin dashboard, admin panel, admin template, backend, bootstrap, bootstrap 4, clean, dashboard, flat, jquery, modern, premium admin templates ...</p>
                        <div>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                          <Link to="#" className="me-4 d-inline-block"> (48) Reviews</Link>
                          <Link to="#" className="fw-semibold">USD-$24</Link>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <div className="mb-2">
                          <Link to="#" className="h4 text-dark">Eduserv Website Templates from ThemeForest</Link>
                        </div>
                        <Link to="#" className="text-primary">https://spruko.com/demo/eduserv/html/</Link>
                        <p className="text-muted mt-2 mb-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                          dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <div>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                          <Link to="#" className="me-4 d-inline-block"> (18) Reviews</Link>
                          <Link to="#" className="fw-semibold">USD-$12</Link>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <div className="mb-2">
                          <Link to="#" className="h4 text-dark">HostOne – Web Hosting HTML Creative Responsive Clean Template</Link>
                        </div>
                        <Link to="#" className="text-primary">https://www.spruko.com/demo/hostone/html/</Link>
                        <p className="text-muted mt-2 mb-1"> HostOne - Web Hosting HTML Creative Responsive Clean Template by sprukosoft HostOne -HTML Templates is a Clean, Simple Responsive Template Design.</p>
                        <p className="text-muted  mb-2">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                          ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        <div>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                          <Link to="#" className="me-4 d-inline-block"> (18) Reviews</Link>
                          <Link to="#" className="fw-semibold">USD-$12</Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Images">
                    <Card className="demo-gallery">
                      <Card.Body>
                        {/* <!-- GALLERY DEMO OPEN --> */}
                        <LightGallery />
                        {/* <!-- GALLERY DEMO CLOSED --> */}
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Books">
                    <Card>
                      <Card.Body>
                        <div className="mb-2">
                          <Link to="#" className="h4 text-dark">Zendash - Bootstrap HTML Dashboard Template</Link>
                        </div>
                        <Link to="#" className="text-primary">https://www.spruko.com/demo/zendash/html/</Link>
                        <p className="text-muted mt-2 mb-1">Treal Template included in 30 versions. In the demo 30 versions is shown in 4 floders. And In the final each version has single floder corresponding to that ...</p>
                        <p className="text-muted  mb-2">Tags: admin, admin dashboard, admin panel, admin template, backend, bootstrap, bootstrap 4, clean, dashboard, flat, jquery, modern, premium admin templates ...</p>
                        <div>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                          <Link to="#" className="me-4 d-inline-block"> (48) Reviews</Link>
                          <Link to="#" className="fw-semibold">USD-$24</Link>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <div className="mb-2">
                          <Link to="#" className="h4 text-dark">Zendash template related Images</Link>
                        </div>
                        <div className="tags mb-2">
                          <span className="tag">
                            background
                            <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                          </span>
                          <span className="tag">
                            admin template
                            <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                          </span>
                          <span className="tag">
                            UX designs
                            <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                          </span>
                          <span className="tag">
                            Presentation
                            <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                          </span>
                        </div>
                        <div className="mb-2">
                          <Link to="#" className="h4 text-dark">Zendash - Bootstrap HTML Dashboard Template</Link>
                        </div>
                        <Link to="#" className="text-primary">https://www.spruko.com/demo/zendash/html/</Link>
                        <p className="text-muted mt-2 mb-1">Treal Template included in 30 versions. In the demo 30 versions is shown in 4 floders. And In the final each version has single floder corresponding to that ...</p>
                        <p className="text-muted  mb-2">Tags: admin, admin dashboard, admin panel, admin template, backend, bootstrap, bootstrap 4, clean, dashboard, flat, jquery, modern, premium admin templates ...</p>
                        <div>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                          <Link to="#" className="me-4 d-inline-block"> (48) Reviews</Link>
                          <Link to="#" className="fw-semibold">USD-$24</Link>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <div className="mb-2">
                          <Link to="#" className="h4 text-dark">Eduserv Website Templates from ThemeForest</Link>
                        </div>
                        <Link to="#" className="text-primary">https://spruko.com/demo/eduserv/html/</Link>
                        <p className="text-muted mt-2 mb-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                          dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <div>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                          <Link to="#" className="me-4 d-inline-block"> (18) Reviews</Link>
                          <Link to="#" className="fw-semibold">USD-$12</Link>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <div className="mb-2">
                          <Link to="#" className="h4 text-dark">HostOne – Web Hosting HTML Creative Responsive Clean Template</Link>
                        </div>
                        <Link to="#" className="text-primary">https://www.spruko.com/demo/hostone/html/</Link>
                        <p className="text-muted mt-2 mb-1"> HostOne - Web Hosting HTML Creative Responsive Clean Template by sprukosoft HostOne -HTML Templates is a Clean, Simple Responsive Template Design.</p>
                        <p className="text-muted  mb-2">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                          ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        <div>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                          <Link to="#" className="me-4 d-inline-block"> (18) Reviews</Link>
                          <Link to="#" className="fw-semibold">USD-$12</Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="News">
                    <Card>
                      <Card.Body>
                        <div className="mb-2">
                          <Link to="#" className="h4 text-dark">Zendash template related Images</Link>
                        </div>
                        <div className="tags mb-2">
                          <span className="tag">
                            background
                            <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                          </span>
                          <span className="tag">
                            admin template
                            <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                          </span>
                          <span className="tag">
                            UX designs
                            <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                          </span>
                          <span className="tag">
                            Presentation
                            <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                          </span>
                        </div>
                        <div className="mb-2">
                          <Link to="#" className="h4 text-dark">Zendash - Bootstrap HTML Dashboard Template</Link>
                        </div>
                        <Link to="#" className="text-primary">https://www.spruko.com/demo/zendash/html/</Link>
                        <p className="text-muted mt-2 mb-1">Treal Template included in 30 versions. In the demo 30 versions is shown in 4 floders. And In the final each version has single floder corresponding to that ...</p>
                        <p className="text-muted  mb-2">Tags: admin, admin dashboard, admin panel, admin template, backend, bootstrap, bootstrap 4, clean, dashboard, flat, jquery, modern, premium admin templates ...</p>
                        <div>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                          <Link to="#" className="me-4 d-inline-block"> (48) Reviews</Link>
                          <Link to="#" className="fw-semibold">USD-$24</Link>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <div className="mb-2">
                          <Link to="#" className="h4 text-dark">Eduserv Website Templates from ThemeForest</Link>
                        </div>
                        <Link to="#" className="text-primary">https://spruko.com/demo/eduserv/html/</Link>
                        <p className="text-muted mt-2 mb-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                          dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <div>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                          <Link to="#" className="me-4 d-inline-block"> (18) Reviews</Link>
                          <Link to="#" className="fw-semibold">USD-$12</Link>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <div className="mb-2">
                          <Link to="#" className="h4 text-dark">HostOne – Web Hosting HTML Creative Responsive Clean Template</Link>
                        </div>
                        <Link to="#" className="text-primary">https://www.spruko.com/demo/hostone/html/</Link>
                        <p className="text-muted mt-2 mb-1"> HostOne - Web Hosting HTML Creative Responsive Clean Template by sprukosoft HostOne -HTML Templates is a Clean, Simple Responsive Template Design.</p>
                        <p className="text-muted  mb-2">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                          ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        <div>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                          <Link to="#" className="me-4 d-inline-block"> (18) Reviews</Link>
                          <Link to="#" className="fw-semibold">USD-$12</Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Videos">
                    <Card>
                      <Card.Body>
                        <div className="mb-2">
                          <Link to="#" className="h4 text-dark">Eduserv Website Templates from ThemeForest</Link>
                        </div>
                        <Link to="#" className="text-primary">https://spruko.com/demo/eduserv/html/</Link>
                        <p className="text-muted mt-2 mb-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                          dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <div>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                          <Link to="#" className="me-4 d-inline-block"> (18) Reviews</Link>
                          <Link to="#" className="fw-semibold">USD-$12</Link>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <div className="mb-2">
                          <Link to="#" className="h4 text-dark">HostOne – Web Hosting HTML Creative Responsive Clean Template</Link>
                        </div>
                        <Link to="#" className="text-primary">https://www.spruko.com/demo/hostone/html/</Link>
                        <p className="text-muted mt-2 mb-1"> HostOne - Web Hosting HTML Creative Responsive Clean Template by sprukosoft HostOne -HTML Templates is a Clean, Simple Responsive Template Design.</p>
                        <p className="text-muted  mb-2">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                          ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        <div>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                          <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                          <Link to="#" className="me-4 d-inline-block"> (18) Reviews</Link>
                          <Link to="#" className="fw-semibold">USD-$12</Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                </Tab.Content>
          </Tab.Container>
          

        

        <div className="text-center">
          <div className="mb-5">
            <Pagination className="justify-content-center">
              <Pagination.Item disabled>Prev</Pagination.Item>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item >2</Pagination.Item>
              <Pagination.Item >3</Pagination.Item>
              <Pagination.Item >4</Pagination.Item>
              <Pagination.Item >5</Pagination.Item>
              <Pagination.Item >Next</Pagination.Item>
            </Pagination>
          </div>
        </div>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </div>
)
};

export default Search;

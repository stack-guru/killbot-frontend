import React, { useState } from 'react';
import { Card, Pagination, Row, Col, Form, ListGroup, InputGroup, FormControl, Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './Shop.module.scss';
import Select from 'react-select';
import { connect } from "react-redux";
import { AddToCart } from '../../../Redux/action';
import { ItemData } from '../../../Data/DataECommerce/reduxData';

const Shop = ({ local_varaiable, AddToCart }) => {
// eslint-disable-next-line
  const Mark = [
    { value: 80 },
    { value: 950 }
  ];

  const Category = [
    { value: "Dress", label: "Dress" },
    { value: "Bags & Purses", label: "Bags & Purses" },
    { value: "Coat & Jacket", label: "Coat & Jacket" },
    { value: "Beauty", label: "Beauty" },
    { value: "Jeans", label: "Jeans" },
    { value: "Jewellery", label: "Jewellery" },
    { value: "Electronics", label: "Electronics" },
    { value: "Sports", label: "Sports" },
    { value: "Technology", label: "Technology" },
    { value: "Watches", label: "Watches" },
    { value: "Accessories", label: "Accessories" },

  ];

  const Brand = [
    { value: "White", label: "White" },
    { value: "Black", label: "Black" },
    { value: "Red", label: "Red" },
    { value: "Green", label: "Green" },
    { value: "Blue", label: "Blue" },
    { value: "Yellow", label: "Yellow" },
  ];

  const Size = [
    { value: "Extra Small", label: "Extra Small" },
    { value: "Small", label: "Small" },
    { value: "Medium", label: "Medium" },
    { value: "Large", label: "Large" },
    { value: "Extra Large", label: "Extra Large" },
  ];

  const [value, setValue] = useState()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //search function

  const [allData, setAllData] = React.useState(ItemData)

  let allElement2 ;

  let myfunction = (InputData) => {
    let allElement
    for (allElement of allData) {
      if (allElement.heading[0] == " ") {
        allElement.heading = allElement.heading.trim()
      }
      if (allElement.heading.toLowerCase().includes(InputData.toLowerCase())) {
        if (allElement.heading.toLowerCase().startsWith(InputData.toLowerCase())) {
          allElement2.push(allElement);
        }
      }

    }
    setAllData(allElement2);
  };


  return (
    <div className={styles.Shop}>
      <PageHeader titles="Shop" active="Shop" items={['E-Commerce']} />

      {/* <!-- ROW-1 OPEN --> */}

      <Row className="row-cards">
        <Col xl={3} lg={4}>
          <Row>
            <Col md={12} lg={12}>
              <Card>
                <Card.Header>
                  <Card.Title>Categories</Card.Title>
                </Card.Header>
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item className="border-0 p-0"> <Link to="#"><i className="fe fe-chevron-right"></i> Mens </Link><span className="product-label">22</span> </ListGroup.Item>
                    <ListGroup.Item className="border-0 p-0"> <Link to="#"><i className="fe fe-chevron-right"></i> Womens </Link><span className="product-label">15</span> </ListGroup.Item>
                    <ListGroup.Item className="border-0 p-0"> <Link to="#"><i className="fe fe-chevron-right"></i> Kids </Link><span className="product-label">10</span> </ListGroup.Item>
                    <ListGroup.Item className="border-0 p-0"> <Link to="#"><i className="fe fe-chevron-right"></i> Others </Link><span className="product-label">88</span> </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <Card.Title>Price Range</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form.Check type='checkbox' id='default-checkbox0' label='Upto $500' />
                  <Form.Check type='checkbox' id='default-checkbox1' label='$500 - $1000' />
                  <Form.Check type='checkbox' id='default-checkbox2' label='$1000 - $1500' />
                  <Form.Check type='checkbox' id='default-checkbox3' label='Over $2000' />
                  <div className="d-flex">
                    <Card.Body className="px-0">
                      <Slider onChange={handleChange} value={value} defaultValue={[100, 370]} min={20} max={670} marks={Mark} />
                    </Card.Body>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <Card.Title>
                    Colors
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <form className="shop__filter">
                    <Row className="gutters-xs">
                      <div className="col-auto">
                        <label className="colorinput">
                          <input name="color" type="radio" value="azure"
                            className="colorinput-input" />
                          <span className="colorinput-color bg-azure"></span>
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input name="color" type="radio" value="indigo"
                            className="colorinput-input" />
                          <span className="colorinput-color bg-indigo"></span>
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input name="color" type="radio" value="purple"
                            className="colorinput-input" />
                          <span className="colorinput-color bg-purple"></span>
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input name="color" type="radio" value="pink"
                            className="colorinput-input" />
                          <span className="colorinput-color bg-pink"></span>
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input name="color" type="radio" value="red"
                            className="colorinput-input" />
                          <span className="colorinput-color bg-red"></span>
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input name="color" type="radio" value="orange"
                            className="colorinput-input" />
                          <span className="colorinput-color bg-orange"></span>
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input name="color" type="radio" value="yellow"
                            className="colorinput-input" />
                          <span className="colorinput-color bg-yellow"></span>
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input name="color" type="radio" value="lime"
                            className="colorinput-input" />
                          <span className="colorinput-color bg-lime"></span>
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input name="color" type="radio" value="green"
                            className="colorinput-input" />
                          <span className="colorinput-color bg-green"></span>
                        </label>
                      </div>
                    </Row>
                  </form>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Form.Group>
                    <Form.Label>Category</Form.Label>

                    <Select classNamePrefix='Select' options={Category} placeholder='Select' />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Brand</Form.Label>

                    <Select classNamePrefix='Select' options={Brand} placeholder='Select' />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Type</Form.Label>

                    <Select classNamePrefix='Select' options={Size} placeholder='Select' />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Color</Form.Label>

                    <Select classNamePrefix='Select' options={Brand} placeholder='Select' />
                  </Form.Group>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <Card.Title>Top Products</Card.Title>
                </Card.Header>
                <Card.Body>
                  <div className="">

                    <div className="d-flex overflow-visible">
                      <img className="avatar bradius avatar-xl me-4 p-2 bg-white border" src={require("../../../assets/images/products/11.jpg")} alt="avatar-img" />
                      <div className="media-body valign-middle">
                        <Link to="#" className="fw-semibold text-dark">Hand Bag</Link>
                        <div className="mb-1 text-warning">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <i className="fa fa-star-o"></i>
                        </div>
                        <h5 className="fw-bold">$345</h5>
                      </div>
                    </div>
                    {/* <div className="d-flex overflow-visible mt-5">
                      <img className="avatar bradius avatar-xl me-4 p-2 bg-white border" src={require("../../../assets/images/pngs/5.png")} alt="avatar-img" />
                      <div className="media-body valign-middle">
                        <Link to="#" className="fw-semibold text-dark">Chair</Link>
                        <div className="mb-1 text-warning">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <i className="fa fa-star-o"></i>
                        </div>
                        <h5 className="fw-bold">$345</h5>
                      </div>
                    </div> */}
                    <div className="d-flex overflow-visible mt-5">
                      <img className="avatar bradius avatar-xl me-4 p-2 bg-white border" src={require("../../../assets/images/products/1.jpg")} alt="avatar-img" />
                      <div className="media-body valign-middle">
                        <Link to="#" className="fw-semibold text-dark">Laptop Bag</Link>
                        <div className="mb-1 text-warning">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <i className="fa fa-star-o"></i>
                        </div>
                        <h5 className="fw-bold">$345</h5>
                      </div>
                    </div>
                    <div className="d-flex overflow-visible mt-5">
                      <img className="avatar bradius avatar-xl me-4 p-2 bg-white border" src={require("../../../assets/images/products/5.jpg")} alt="avatar-img" />
                      <div className="media-body valign-middle">
                        <Link to="#" className="fw-semibold text-dark">Watch</Link>
                        <div className="mb-1 text-warning">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <i className="fa fa-star-o"></i>
                        </div>
                        <h5 className="fw-bold">$345</h5>
                      </div>
                    </div>

                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* <!-- COL-END --> */}
        <Col xl={9} lg={8}>
          <Row>
            <Col xl={12}>
              <Card className="p-0 bg-transparent shadow-none">

                <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                  <Card.Body className="p-4 bg-white br-7">
                    <Row>
                      <Col xl={5} lg={8} md={8} sm={8}>
                        <InputGroup className="d-flex w-100 float-start">
                          <FormControl type="text" onChange={(ele) => { myfunction(ele.target.value) }} className="border-end-0 my-2" placeholder="Search ..." />
                          <InputGroup.Text className="bg-transparent border-start-0 text-muted my-2">
                            <i className="fe fe-search text-muted" aria-hidden="true"></i>
                          </InputGroup.Text>
                        </InputGroup>
                      </Col>
                      <Col xl={4} lg={4} md={4} sm={4}>
                        <Nav variant="pills" className="item2-gl-menu float-end my-2">
                          <Nav.Item className="border-end">
                            <Nav.Link eventKey="first"><i className="fa fa-th"></i></Nav.Link>
                          </Nav.Item>
                          <Nav.Item className="border-end">
                            <Nav.Link eventKey="second"><i className="fa fa-list"></i></Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col xl={3} lg={12}>
                        <Link to={`${process.env.PUBLIC_URL}/ecommerce/addproduct`} className="btn btn-primary btn-block float-end my-2"><i className="fa fa-plus-square me-2"></i>New Product</Link>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Tab.Content className='erf pt-5'>
                    <Tab.Pane eventKey="first">
                      <div className="tab-pane active" id="tab-11">
                        <Row>
                          {allData.map((idx) => (
                            <Col md={6} xl={4} sm={6} key={Math.random()}>
                              <Card>
                                <div className="product-grid6">
                                  <div className="product-image6 p-5">
                                    <ul className="icons">
                                      <li>
                                        <Link to={`${process.env.PUBLIC_URL}/ecommerce/productdetails`} className="btn btn-primary"> <i className="fe fe-eye">  </i> </Link>
                                      </li>
                                      <li><Link to={`${process.env.PUBLIC_URL}/ecommerce/addproduct`} className="btn btn-success"><i className="fe fe-edit"></i></Link></li>
                                      <li><Link to="#" className="btn btn-danger"><i className="fe fe-x"></i></Link></li>
                                    </ul>
                                    <Link to={`${process.env.PUBLIC_URL}/ecommerce/productdetails`} >
                                      <img className="img-fluid br-7 w-100" src={idx.preview} alt="img" />
                                    </Link>
                                  </div>
                                  <Card.Body className="pt-0">
                                    <div className="product-content text-center">
                                      <h1 className="title fw-bold fs-20"><Link to={`${process.env.PUBLIC_URL}/ecommerce/productdetails`}>{idx.heading}</Link></h1>
                                      <div className="mb-2 text-warning">
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star-half-o text-warning"></i>
                                        <i className="fa fa-star-o text-warning"></i>
                                      </div>
                                      <div className="price">{idx.price1}<span className="ms-4">{idx.price2}</span>
                                      </div>
                                    </div>
                                  </Card.Body>
                                  <Card.Footer className="text-center">
                                    <Link to={`${process.env.PUBLIC_URL}/ecommerce/shoppingcart`} className="btn me-2 btn-primary mb-1" onClick={() => { AddToCart(idx.id) }}><i className="fe fe-shopping-cart mx-2" ></i>Add to cart</Link>
                                    <Link to={`${process.env.PUBLIC_URL}/ecommerce/wishlist`} className="btn me-2 btn-outline-primary mb-1"><i className="fe fe-heart mx-2 wishlist-icon"></i>Add to wishlist</Link>
                                  </Card.Footer>
                                </div>
                              </Card>
                            </Col>
                          ))}
                          <div className="mb-5">
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
                        </Row>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="tab-pane" id="tab-12">
                        <Row>
                          {allData.map((idx) => (
                            <Col xl={12} lg={12} md={12} key={Math.random()}>
                              <Card className="overflow-hidden">
                                <Card.Body>
                                  <Row className="g-0">

                                    <Col xl={3} lg={12} md={12}>
                                      <div className="product-list">
                                        <div className="product-image">
                                          <ul className="icons">
                                            <li><Link to={`${process.env.PUBLIC_URL}/ecommerce/productdetails`} className="btn btn-primary"><i className="fe fe-eye text-white "></i></Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/ecommerce/addproduct`} className="btn btn-success"><i className="fe fe-edit text-white "></i></Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/ecommerce/wishlist`} className="btn btn-danger"><i className="fe fe-x text-white"></i></Link></li>
                                          </ul>
                                        </div>
                                        <div className="br-be-0 br-te-0">
                                          <Link to={`${process.env.PUBLIC_URL}/ecommerce/productdetails`} className="">
                                            <img src={idx.preview} alt="img" className="cover-image br-7 w-100" />
                                          </Link>
                                        </div>
                                      </div>
                                    </Col>
                                    <Col xl={6} lg={12} md={12} className="border-end my-auto">
                                      <Card.Body>
                                        <div className="mb-3">
                                          <Link to={`${process.env.PUBLIC_URL}/ecommerce/productdetails`} className="">
                                            <h3 className="fw-bold fs-30 mb-3">{idx.heading}</h3>
                                            <div className="mb-2 text-warning">
                                              <i className="fa fa-star fs-18 text-warning"></i>
                                              <i className="fa fa-star fs-18 text-warning"></i>
                                              <i className="fa fa-star fs-18 text-warning"></i>
                                              <i className="fa fa-star-half-o fs-18 text-warning"></i>
                                              <i className="fa fa-star-o fs-18 text-warning"></i>
                                            </div>
                                          </Link>
                                          <p className="fs-16">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat,quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat </p>
                                          <form className="shop__filter">
                                            <Row className="gutters-xs">
                                              <div className="col-auto">
                                                <label className="colorinput">
                                                  <input type="checkbox" name="color" value="azure" className="colorinput-input" defaultChecked />
                                                  <span className="colorinput-color bg-azure"></span>
                                                </label>
                                              </div>
                                              <div className="col-auto">
                                                <label className="colorinput">
                                                  <input type="checkbox" name="color" value="indigo" className="colorinput-input" />
                                                  <span className="colorinput-color bg-indigo"></span>
                                                </label>
                                              </div>
                                              <div className="col-auto">
                                                <label className="colorinput">
                                                  <input type="checkbox" name="color" value="purple" className="colorinput-input" />
                                                  <span className="colorinput-color bg-purple"></span>
                                                </label>
                                              </div>
                                            </Row>
                                          </form>
                                        </div>
                                      </Card.Body>
                                    </Col>
                                    <Col xl={3} lg={12} md={12} className="my-auto">
                                      <Card.Body className="p-0">
                                        <div className="price h3 text-center mb-5 fw-bold">{idx.price1}</div>
                                        <Link to={`${process.env.PUBLIC_URL}/ecommerce/shoppingcart`} className="btn me-2 btn-primary btn-block" onClick={() => { AddToCart(idx.id) }}><i className="fe fe-shopping-cart mx-2"></i>Add to cart</Link>
                                        <Link to={`${process.env.PUBLIC_URL}/ecommerce/wishlist`} className="btn me-2 btn-outline-primary btn-block mt-2"><i className="fe fe-heart mx-2 wishlist-icon"></i>Add to wishlist</Link>
                                      </Card.Body>
                                    </Col>
                                  </Row>
                                </Card.Body>
                              </Card>
                            </Col>
                          ))}
                          <div className="mb-5">
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
                        </Row>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Card>
            </Col>
          </Row>
          {/* <!-- COL-END --> */}
        </Col>
        {/* <!-- ROW-1 CLOSED --> */}
      </Row>

    </div>
  )
};

const mapStateToProps = (state) => ({
  local_varaiable: state
})

export default connect(mapStateToProps, { AddToCart })(Shop);

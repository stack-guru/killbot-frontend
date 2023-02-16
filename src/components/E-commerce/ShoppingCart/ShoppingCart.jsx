import React, { useState, useEffect, useRef } from 'react';
import { Card, Row, Table, Col, FormControl, InputGroup, Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
import styles from './ShoppingCart.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Link } from 'react-router-dom';
import { shopingData } from '../../../Data/DataECommerce/DataShoppingCart';
import { connect } from "react-redux";
import { AddToCart, ProductReduxData } from "../../../Redux/action";


const ShoppingCart = ({ local_varaiable, AddToCart, ProductReduxData }) => {

  const [FiltershopingData, sethopingData] = useState([])
	const [Price, setPrice] = useState(0)
  let containerRef = useRef(null);

	useEffect(() => {
		if (local_varaiable == undefined) {
			sethopingData(shopingData)
			shopingData.filter((ele) => {
				setPrice(Number(ele.newprice) + Price);
			})
		}
		else if (local_varaiable.length == 0) {
			sethopingData(shopingData)
			shopingData.filter((ele) => {
				setPrice(Number(ele.newprice) + Price);
			})
		}
		else {
			sethopingData(local_varaiable)
			local_varaiable.filter((ele) => {
				setPrice(Number(ele.newprice) + Price);
			})
		}

	}, [local_varaiable])

	function handleRemove(id) {
		if (local_varaiable == undefined) {
			const RemoveData = FiltershopingData.filter((ale) => ale.id !== id);
			sethopingData(RemoveData);
		}
		else if (local_varaiable.length == 0) {
			const RemoveData = FiltershopingData.filter((ale) => ale.id !== id);
			sethopingData(RemoveData);
		}
		else {
			const RemoveData = FiltershopingData.filter((ale) => ale.id !== id);
			sethopingData(RemoveData);
		}
	};

//value add and remove function

  function dec(el) {
    let unit = el.currentTarget.parentElement.querySelector("input").value;

    if (Number(unit) === 0) {
      return false;
    } else {
      el.currentTarget.parentElement.querySelector("input").value--;
    }
  }
  function inc(el) {
    el.currentTarget.parentElement.querySelector("input").value++;

  }




  return (

  <div className={styles.ShoppingCart}>
    <PageHeader titles="Cart" active="Cart" items={['E-Commerce']} />
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col lg={12} md={12} sm={12} xl={8}>
        <Card className="cart">
          <Card.Header>
            <Card.Title>Shopping Cart</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              {/* <Cart /> */}
              <Table className="table-bordered table-vcenter">
            <thead>

                <tr className="border-top">
                    <th>Product</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                </tr>

            </thead>
            <tbody>
                {FiltershopingData !== "" ? FiltershopingData.map((list) => (
                    <tr key={Math.random()}>
                        <td>
                            <div className="text-center">
                             <img src={list.preview} alt="img" className="cart-img text-center" />
                            </div> 
                         </td>     
                        <td>{list.heading}</td>  
                        <td className="fw-bold">{list.price1}</td> 
                          <td>  
                            <div className="handle-counter ms-2" id="handleCounter4">
                            <Button variant='default' className="counter-minus lh-2 shadow-none btn-white" onClick={dec}><i className="fa fa-minus text-muted"></i></Button>
                            <input type="text" defaultValue={list.quantity} className="qty" />
                            <Button variant='default' className="counter-plus lh-2 shadow-none btn-white" onClick={inc}><i className="fa fa-plus text-muted"></i></Button>
                            </div>
                            </td>
                            <td ref={containerRef} className="listprice2">{list.price2}</td>
                        
                        
                        <td className="text-center">
                            <div className=" d-flex g-2">
                        <OverlayTrigger placement="top" overlay={<Tooltip >Wishlist</Tooltip>}><div className="text-secondary bg-secondary-transparent btn-icon py-1 me-2"><i className="bi bi-heart fs-16"></i></div></OverlayTrigger>
                        <Link to ='#' onClick={() => { handleRemove(list.id) }}><OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}><div className="text-danger bg-danger-transparent btn-icon py-1"><i className="bi bi-trash fs-16"></i></div></OverlayTrigger></Link>
                        </div>
                        </td>
                    </tr>
                )) : <tr><td className='text-danger'>"There is no product available in the Cart"</td></tr>}
            </tbody>
        </Table>
            </div>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col md={6} sm={6}>
                <InputGroup className="mb-1">
                  <FormControl type="text" placeholder="Search ..." />
                  <span className="input-group-text btn btn-primary">Apply Coupon</span>
                </InputGroup>
              </Col>
              <Col md={6} sm={6} className="text-end"><Link to="#" className="btn btn-default btn-md" onClick={() => { sethopingData("") }}>Update Cart</Link></Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
      <Col lg={12} xl={4} sm={12} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Cart Totals</Card.Title>
          </Card.Header>
          <Card.Body className="py-2">
            <div className="table-responsive">
              <Table className="table-borderless text-nowrap mb-0">
                <tbody>
                  <tr>
                    <td className="text-start">Sub Total</td>
                    <td className="text-end"><span className="fw-bold  ms-auto">$14,675</span></td>
                  </tr>
                  <tr>
                    <td className="text-start">Additional Discount</td>
                    <td className="text-end"><span className="fw-bold text-success">- $55</span></td>
                  </tr>
                  <tr>
                    <td className="text-start">Delivery Charges</td>
                    <td className="text-end"><span className="fw-bold text-green">0 (Free)</span></td>
                  </tr>
                  <tr>
                    <td className="text-start">Tax</td>
                    <td className="text-end"><span className="fw-bold text-danger">+ $39</span></td>
                  </tr>
                  <tr>
                    <td className="text-start">Coupon Discount</td>
                    <td className="text-end"><span className="fw-bold text-success">- $15%</span></td>
                  </tr>
                  <tr>
                    <td className="text-start">Vat Tax</td>
                    <td className="text-end"><span className="fw-bold">+ $9</span></td>
                  </tr>
                  <tr>
                    <td className="text-start fs-18">Total Bill</td>
                    <td className="text-end"><span className="ms-2 fw-bold fs-23">$12,466</span></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="btn-list d-flex justify-content-between flex-wrap">
              <Link to={`${process.env.PUBLIC_URL}/ecommerce/shop`} className="btn btn-primary"><i className="fa fa-arrow-left mx-1"></i>Continue Shopping</Link>
              <Link to={`${process.env.PUBLIC_URL}/ecommerce/checkout`} className="btn btn-success">Check out<i className="fa fa-arrow-right mx-1"></i></Link>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}
  </div>
)
};

const mapStateToProps = (state) => ({
	local_varaiable: state
})

export default connect(mapStateToProps, { AddToCart, ProductReduxData })(ShoppingCart);

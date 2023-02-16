import React, { useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AddToCart } from '../../Redux/action';
import {ItemData} from '../../Data/DataECommerce/reduxData';

function DataWishlist({ local_varaiable, AddToCart }) {
  const [idx, setidx] = useState(ItemData);
  function handleRemove(id) {
    const newList = idx.filter((idx) => idx.id !== id);
    setidx(newList);
  }
  return (
    <Row>
      {idx.map((item) => (
        <Col sm={6} md={6} xl={3} className="alert" key={item.id}>
          <Card>
            <div className="product-grid6">
              <div className="product-image6 p-5">
                <ul className="icons-wishlist">
                  <li><Link to='#' onClick={() => handleRemove(item.id)} className="btn btn-danger"><i className="fe fe-heart"></i></Link></li>
                </ul>
                <Link to={`${process.env.PUBLIC_URL}/Ecommerce/shoppingcart`} className="bg-light">
                  <img className="img-fluid br-7 w-100" src={item.preview} alt="img" />
                </Link>
              </div>
              <Card.Body className="pt-0">
                <div className="product-content text-center">
                  <h1 className="title fw-bold fs-20"><Link to={`${process.env.PUBLIC_URL}/Ecommerce/shoppingcart`}>{item.heading}</Link></h1>
                  <div className="mb-2 text-warning">
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star-half-o text-warning"></i>
                    <i className="fa fa-star-o text-warning"></i>
                  </div>
                  <div className="price mb-2">{item.price1}<span className="ms-4">{item.price2}</span></div>
                  <span className={`text-${item.bg} fs-18 fw-semibold`}>{item.status}</span>
                </div>
              </Card.Body>
              <Card.Footer className="text-center">
                <Link to={`${process.env.PUBLIC_URL}/Ecommerce/shoppingcart`} className="btn btn-primary ms-2 mb-1"><i className="fe fe-shopping-cart me-2"></i>Add to cart</Link>
                <Link to="#" className="btn btn-light ms-2 mb-1"><i className="fe fe-share-2 me-2 text-dark"></i>Share</Link>
              </Card.Footer>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
const mapStateToProps = (state) => ({
	local_varaiable: state,
});
export default connect(mapStateToProps, (AddToCart))(DataWishlist);

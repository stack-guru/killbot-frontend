import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './AddProduct.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { FileuploadCustomised } from '../../../Data/Pages/Forms/FormAdvanceData/DataFormAdvanced';
import Select from 'react-select';
import SunEditor from 'suneditor-react';

const AddProduct = () => {

  const Product = [
    { value: "Electronics", label: "Electronics" },
    { value: "Fashion", label: "Fashion" },
    { value: "Home Decor", label: "Home Decor" },
    { value: "Furniture", label: "Furniture" },
  ];

  return (

  <div className={styles.AddProduct}>
    <PageHeader titles="Add Product" active="Add Product" items={['E-Commerce']} />
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>Add New Product</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row className="mb-4">
              <Form.Label className="col-md-3">Product Name :</Form.Label>
              <Col md={9}>
                <Form.Control type="text" placeholder="Product Name" />
              </Col>
            </Row>
            <Row className="mb-4">
              <Form.Label className="col-md-3">Price :</Form.Label>
              <Col md={9}>
                <Form.Control type="number" />
              </Col>
            </Row>
            <Row className="mb-4">
              <Form.Label className="col-md-3">Categories :</Form.Label>
              <Col md={9}>
                <Select classNamePrefix="Select" options={Product} placeholder='Electronics'/>
              </Col>
            </Row>

            {/* <!-- Row --> */}
            <Row>
              <Form.Label className="col-md-3 mb-4">Product Description :</Form.Label>
              <Col md={9} className="border mb-4">
                <SunEditor />
              </Col>
            </Row>
            {/* <!--End Row--> */}

            {/* <!--Row--> */}
            <Row>
              <Form.Label className="col-md-3 mb-4">Product Upload :</Form.Label>
              <Col md={9}>
                {/* <input id="demo" type="file" name="files" accept=".jpg, .png, image/jpeg, image/png" multiple/> */}
                <FileuploadCustomised />
              </Col>
            </Row>
            {/* <!--End Row--> */}
          </Card.Body>
          <Card.Footer>
            {/* <!--Row--> */}
            <Row>
              <Col md={3}></Col>
              <Col md={9}>
                <Link to="#" className="btn btn-primary">Add Product</Link>
                <Link to="#" className="btn btn-default float-end">Discard</Link>
              </Col>
            </Row>
            {/* <!--End Row--> */}
          </Card.Footer>
        </Card>
      </Col>
    </Row>
    {/* <!-- /ROW-1 CLOSED --> */}
  </div>
)
};

export default AddProduct;

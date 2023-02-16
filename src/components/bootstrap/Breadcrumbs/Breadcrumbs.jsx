import React, { useState } from 'react';
import { Breadcrumb, Card, Col, Row, Collapse, Form } from 'react-bootstrap';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './Breadcrumbs.module.scss';


const Breadcrumbs = () => {

  const [Simple, setSimple] = useState(false);
  const [Example1, setExample1] = useState(false);
  const [Example2, setExample2] = useState(false);
  const [center, setCenter] = useState(false);
  const [right, setRight] = useState(false);
  const [Color, setColor] = useState(false);

  return (

  <div className={styles.Breadcrumbs}>
    <PageHeader titles="Breadcrumbs" active="Breadcrumbs" items={['Componets']} />
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col md={12} xl={6}>
        <Card>
          <Card.Header className='d-flex'>
          <Card.Title>Simple Breadcrumbs</Card.Title>
            <Form className="ms-auto">
              <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSimple(!Simple)} className="showcode d-flex ms-auto mx-2" />
            </Form>
          </Card.Header>

          <Card.Body>
            <div>
              <Breadcrumb className="breadcrumb1">
                <Breadcrumb.Item >Home</Breadcrumb.Item>
                <Breadcrumb.Item >About</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="breadcrumb1">
                <Breadcrumb.Item active>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Library</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="breadcrumb1">
                <Breadcrumb.Item active>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Library</Breadcrumb.Item>
                <Breadcrumb.Item >Data</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <Collapse in={Simple} className="mt-2">
              <pre>
                <code>
                  {`
<div>
   <Breadcrumb className="breadcrumb1">
   <Breadcrumb.Item >Home</Breadcrumb.Item>
   <Breadcrumb.Item >About</Breadcrumb.Item>
 </Breadcrumb>
 <Breadcrumb className="breadcrumb1">
   <Breadcrumb.Item active>Home</Breadcrumb.Item>
   <Breadcrumb.Item>Library</Breadcrumb.Item>
 </Breadcrumb>
 <Breadcrumb className="breadcrumb1">
   <Breadcrumb.Item active>Home</Breadcrumb.Item>
   <Breadcrumb.Item active>Library</Breadcrumb.Item>
   <Breadcrumb.Item >Data</Breadcrumb.Item>
 </Breadcrumb>
 </div>
                  `}
                </code>
              </pre>
            </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col md={12} xl={6}>
        <Card>
          <Card.Header className='d-flex'>
          <Card.Title>Breadcrumbs Example2</Card.Title>
            <Form className="ms-auto">
              <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setExample1(!Example1)} className="showcode d-flex ms-auto mx-2" />
            </Form>
          </Card.Header>

          <Card.Body>
            <div className="breadcrumb-style2">
              <Breadcrumb className="breadcrumb1">
                <Breadcrumb.Item className="breadcrumb-item1" >Home</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item1" >About</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="breadcrumb1">
                <Breadcrumb.Item className="breadcrumb-item1" active>Home</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item1" >Library</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="breadcrumb1">
                <Breadcrumb.Item className="breadcrumb-item1" active>Home</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item1" active>Library</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item1" >Data</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <Collapse in={Example1} className="mt-2">
              <pre>
                <code>
                  {`
<div className="breadcrumb-style2">
<Breadcrumb className="breadcrumb1">
  <Breadcrumb.Item className="breadcrumb-item1" >Home</Breadcrumb.Item>
  <Breadcrumb.Item className="breadcrumb-item1" >About</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb className="breadcrumb1">
  <Breadcrumb.Item className="breadcrumb-item1" active>Home</Breadcrumb.Item>
  <Breadcrumb.Item className="breadcrumb-item1" >Library</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb className="breadcrumb1">
  <Breadcrumb.Item className="breadcrumb-item1" active>Home</Breadcrumb.Item>
  <Breadcrumb.Item className="breadcrumb-item1" active>Library</Breadcrumb.Item>
  <Breadcrumb.Item className="breadcrumb-item1" >Data</Breadcrumb.Item>
</Breadcrumb>
</div>
                  `}
                </code>
              </pre>
            </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col md={12} xl={6}>
        <Card>
          <Card.Header className='d-flex'>
          <Card.Title>Breadcrumbs Example2</Card.Title>
            <Form className="ms-auto">
              <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setExample2(!Example2)} className="showcode d-flex ms-auto mx-2" />
            </Form>
          </Card.Header>

          <Card.Body>
            <div className="breadcrumb-style3">
              <Breadcrumb className="breadcrumb1">
                <Breadcrumb.Item className="breadcrumb-item1">Home</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item1">About</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="breadcrumb1">
                <Breadcrumb.Item active className="breadcrumb-item1">Home</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item1">Library</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="breadcrumb1">
                <Breadcrumb.Item active className="breadcrumb-item1">Home</Breadcrumb.Item>
                <Breadcrumb.Item active className="breadcrumb-item1">Library</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item1">Data</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <Collapse in={Example2} className="mt-2">
              <pre>
                <code>
                  {`
<div className="breadcrumb-style3">
<Breadcrumb className="breadcrumb1">
  <Breadcrumb.Item className="breadcrumb-item1">Home</Breadcrumb.Item>
  <Breadcrumb.Item className="breadcrumb-item1">About</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb className="breadcrumb1">
  <Breadcrumb.Item active className="breadcrumb-item1">Home</Breadcrumb.Item>
  <Breadcrumb.Item className="breadcrumb-item1">Library</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb className="breadcrumb1">
  <Breadcrumb.Item active className="breadcrumb-item1">Home</Breadcrumb.Item>
  <Breadcrumb.Item active className="breadcrumb-item1">Library</Breadcrumb.Item>
  <Breadcrumb.Item className="breadcrumb-item1">Data</Breadcrumb.Item>
</Breadcrumb>
</div>
                  `}
                </code>
              </pre>
            </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={6} md={12}>
        <Card>
          <Card.Header className='d-flex'>
          <Card.Title>Breadcrumbs-Center align</Card.Title>
            <Form className="ms-auto">
              <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setCenter(!center)} className="showcode d-flex ms-auto mx-2" />
            </Form>
          </Card.Header>

          <Card.Body>

            <div className="breadcrumb-3">
              <Breadcrumb className="breadcrumb1">
                <Breadcrumb.Item className="breadcrumb-item1" >Home</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item1">About</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="breadcrumb-4">
              <Breadcrumb className="breadcrumb1">
                <Breadcrumb.Item className="breadcrumb-item1">Home</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item1 active">Library</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="breadcrumb-5">
              <Breadcrumb className="breadcrumb1 mb-0">
                <Breadcrumb.Item className="breadcrumb-item1">Home</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item1">Library</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item1 active">Data</Breadcrumb.Item>
              </Breadcrumb>
            </div>


            <Collapse in={center} className="mt-2">
              <pre>
                <code>
                  {`
   <div className="breadcrumb-3">
   <Breadcrumb className="breadcrumb1">
     <Breadcrumb.Item className="breadcrumb-item1" >Home</Breadcrumb.Item>
     <Breadcrumb.Item className="breadcrumb-item1">About</Breadcrumb.Item>
   </Breadcrumb>
 </div>
 <div className="breadcrumb-4">
   <Breadcrumb className="breadcrumb1">
     <Breadcrumb.Item className="breadcrumb-item1">Home</Breadcrumb.Item>
     <Breadcrumb.Item className="breadcrumb-item1 active">Library</Breadcrumb.Item>
   </Breadcrumb>
 </div>
 <div className="breadcrumb-5">
   <Breadcrumb className="breadcrumb1 mb-0">
     <Breadcrumb.Item className="breadcrumb-item1">Home</Breadcrumb.Item>
     <Breadcrumb.Item className="breadcrumb-item1">Library</Breadcrumb.Item>
     <Breadcrumb.Item className="breadcrumb-item1 active">Data</Breadcrumb.Item>
   </Breadcrumb>
 </div>
                  `}
                </code>
              </pre>
            </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={6} md={12}>
        <Card>
          <Card.Header className='d-flex'>
          <Card.Title>Breadcrumbs-Right align</Card.Title>
            <Form className="ms-auto">
              <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setRight(!right)} className="showcode d-flex ms-auto mx-2" />
            </Form>
          </Card.Header>

          <Card.Body>
            <div>
              <div className="breadcrumb-1">
                <Breadcrumb className="breadcrumb1">
                  <Breadcrumb.Item className="breadcrumb-item1">Home</Breadcrumb.Item>
                  <Breadcrumb.Item className="breadcrumb-item1 active">About</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="breadcrumb-2">
                <Breadcrumb className="breadcrumb1">
                  <Breadcrumb.Item className="breadcrumb-item1">Home</Breadcrumb.Item>
                  <Breadcrumb.Item className="breadcrumb-item1">Library</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="breadcrumb-6">
                <Breadcrumb className="breadcrumb1 mb-0">
                  <Breadcrumb.Item className="breadcrumb-item1">Home</Breadcrumb.Item>
                  <Breadcrumb.Item className="breadcrumb-item1">Library</Breadcrumb.Item>
                  <Breadcrumb.Item className="breadcrumb-item1 active">Data</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>

            <Collapse in={right} className="mt-2">
              <pre>
                <code>
                  {`
  <div>
  <div className="breadcrumb-1">
    <Breadcrumb className="breadcrumb1">
      <Breadcrumb.Item className="breadcrumb-item1">Home</Breadcrumb.Item>
      <Breadcrumb.Item className="breadcrumb-item1 active">About</Breadcrumb.Item>
    </Breadcrumb>
  </div>
  <div className="breadcrumb-2">
    <Breadcrumb className="breadcrumb1">
      <Breadcrumb.Item className="breadcrumb-item1">Home</Breadcrumb.Item>
      <Breadcrumb.Item className="breadcrumb-item1">Library</Breadcrumb.Item>
    </Breadcrumb>
  </div>
  <div className="breadcrumb-6">
    <Breadcrumb className="breadcrumb1 mb-0">
      <Breadcrumb.Item className="breadcrumb-item1">Home</Breadcrumb.Item>
      <Breadcrumb.Item className="breadcrumb-item1">Library</Breadcrumb.Item>
      <Breadcrumb.Item className="breadcrumb-item1 active">Data</Breadcrumb.Item>
    </Breadcrumb>
  </div>
</div>
                  `}
                </code>
              </pre>
            </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={6} md={12}>
        <Card>
          <Card.Header className='d-flex'>
          <Card.Title>Color Breadcrumbs</Card.Title>
            <Form className="ms-auto">
              <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setColor(!Color)} className="showcode d-flex ms-auto mx-2" />
            </Form>
          </Card.Header>

          <Card.Body>
            <div>
              <Breadcrumb className="breadcrumb1 bg-info colorbreadcrumb" >
                <Breadcrumb.Item className="breadcrumb-item1" active><i className="fa fa-star-o me-2 text-white"></i>Home</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="breadcrumb1 bg-success colorbreadcrumb">
                <Breadcrumb.Item className="breadcrumb-item1"><i className="fa fa-star-o me-2 text-white"></i>Home</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item1" active><i className="fa fa-star-o mx-2 text-white"></i>Library</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="breadcrumb1 bg-secondary colorbreadcrumb">
                <Breadcrumb.Item className="breadcrumb-item1 "><i className="fa fa-star-o text-white me-2 "></i>Home</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item1 "><i className="fa fa-star-o text-white mx-2 "></i>Library</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item1 "><i className="fa fa-star-o text-white mx-2 "></i>Data</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <Collapse in={Color} className="mt-2">
              <pre>
                <code>
                  {`
<div>
<Breadcrumb className="breadcrumb1 bg-info colorbreadcrumb" >
  <Breadcrumb.Item className="breadcrumb-item1" active><i className="fa fa-star-o me-2 text-white"></i>Home</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb className="breadcrumb1 bg-success colorbreadcrumb">
  <Breadcrumb.Item className="breadcrumb-item1"><i className="fa fa-star-o me-2 text-white"></i>Home</Breadcrumb.Item>
  <Breadcrumb.Item className="breadcrumb-item1" active><i className="fa fa-star-o mx-2 text-white"></i>Library</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb className="breadcrumb1 bg-secondary colorbreadcrumb">
  <Breadcrumb.Item className="breadcrumb-item1 "><i className="fa fa-star-o text-white me-2 "></i>Home</Breadcrumb.Item>
  <Breadcrumb.Item className="breadcrumb-item1 "><i className="fa fa-star-o text-white mx-2 "></i>Library</Breadcrumb.Item>
  <Breadcrumb.Item className="breadcrumb-item1 "><i className="fa fa-star-o text-white mx-2 "></i>Data</Breadcrumb.Item>
</Breadcrumb>
</div>  
                  `}
                </code>
              </pre>
            </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}
  </div>
) 
};

export default Breadcrumbs;

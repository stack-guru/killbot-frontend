import React, { useState } from 'react';
import styles from './Pagination.module.scss';
import { Pagination, Row, Col, Card, Nav, Form, Collapse } from 'react-bootstrap';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';


const Pagination1 = () => {

  const [Basic, setBasic] = useState(false);
  const [Active, setActive] = useState(false);
  const [Disable, setDisable] = useState(false);
  const [Samples, setSamples] = useState(false);
  const [Size, setSize] = useState(false);
  const [Alignment, setAlignment] = useState(false);

  return (

  <div className={styles.Pagination}>
    <PageHeader titles="Pagination" active="Pagination" items={['Componets']} /> 
    {/* <!-- Row --> */}
    <Row>
      <Col md={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title className='w-100 w-sm-auto'>Basic pagination</Card.Title>
            <Form className="ms-auto">
            <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBasic(!Basic)} className="showcode d-flex ms-auto mx-2" />
            </Form>
          </Card.Header>
          <Card.Body>
            <p>Pagination to indicate Link series of related content exists across multiple pages.</p>
            <Pagination className="mb-0">
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
            {/* <!-- pagination-wrapper --> */}
                          <Collapse in={Basic} className="mt-2">
                <pre>
                  <code>
                    {`
 <Pagination className="mb-0">
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Active pagination</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setActive(!Active)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <p>Use <code className="highlighter-rouge">.active</code> to indicate the current page.</p>
            <Pagination>
              <Pagination.Item>Prev</Pagination.Item>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>Next</Pagination.Item>
            </Pagination>
            {/* <!-- pagination-wrapper --> */}
                          <Collapse in={Active} className="mt-2">
                <pre>
                  <code>
                    {`
 <Pagination>
 <Pagination.Item>Prev</Pagination.Item>
 <Pagination.Item active>{1}</Pagination.Item>
 <Pagination.Item>{2}</Pagination.Item>
 <Pagination.Item>{3}</Pagination.Item>
 <Pagination.Item>{4}</Pagination.Item>
 <Pagination.Item>Next</Pagination.Item>
</Pagination>

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col md={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Disable Pagination</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setDisable(!Disable)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <p>Use <code className="highlighter-rouge">.disabled</code> for links that appear un-clickable.</p>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item active>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>

              <Collapse in={Disable} className="mt-2">
                <pre>
                  <code>
                    {`
 <Pagination>
 <Pagination.First />
 <Pagination.Prev />
 <Pagination.Item>{2}</Pagination.Item>
 <Pagination.Item active>{3}</Pagination.Item>
 <Pagination.Item>{4}</Pagination.Item>
 <Pagination.Next />
 <Pagination.Last />
</Pagination>

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
          {/* <!-- pagination-wrapper --> */}
        </Card>
        {/* <!-- section-wrapper --> */}
      </Col>
      <Col md={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Pagination Samples</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSamples(!Samples)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <p>Pagination to indicate Link series of related content exists across multiple pages.</p>
            <Row>
              <Col md={12} lg={6}>
                <Nav aria-label="Page" className='my-2'>
                  <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{4}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                </Nav>
              </Col>
              <Col md={6} lg={6}>
                <Nav aria-label="Page example" className='my-2'>
                  <Pagination>
                    <Pagination.Prev />
                    <Pagination.Item >{1}</Pagination.Item>
                    <Pagination.Item >{2}</Pagination.Item>
                    <Pagination.Item >{3}</Pagination.Item>
                    <Pagination.Next />
                  </Pagination>
                </Nav>
              </Col>
            </Row>
            {/* <!-- pagination-wrapper --> */}
                          <Collapse in={Samples} className="mt-2">
                <pre>
                  <code>
                    {`
 <Row>
 <Col md={12} lg={6}>
   <Nav aria-label="Page" className='my-2'>
     <Pagination>
       <Pagination.First />
       <Pagination.Prev />
       <Pagination.Item active>{4}</Pagination.Item>
       <Pagination.Ellipsis />
       <Pagination.Item>{10}</Pagination.Item>
       <Pagination.Next />
       <Pagination.Last />
     </Pagination>
   </Nav>
 </Col>
 <Col md={6} lg={6}>
   <Nav aria-label="Page example" className='my-2'>
     <Pagination>
       <Pagination.Prev />
       <Pagination.Item >{1}</Pagination.Item>
       <Pagination.Item >{2}</Pagination.Item>
       <Pagination.Item >{3}</Pagination.Item>
       <Pagination.Next />
     </Pagination>
   </Nav>
 </Col>
</Row>
`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col md={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Pagination Sizes</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSize(!Size)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <p>Use <code className="highlighter-rouge">.pagination-lg</code> or <code className="highlighter-rouge">.pagination-sm</code> for additional sizes.</p>
            <Nav aria-label="Page example">

              <Pagination size="lg" >
                <Pagination.Prev />
                <Pagination.Item active >{1}</Pagination.Item>
                <Pagination.Item >{2}</Pagination.Item>
                <Pagination.Item >{3}</Pagination.Item>
                <Pagination.Next />
              </Pagination>

            </Nav><br />
            <Nav aria-label="Page example">


              <Pagination >
                <Pagination.Item >Prev</Pagination.Item>
                <Pagination.Item active >{1}</Pagination.Item>
                <Pagination.Item >{2}</Pagination.Item>
                <Pagination.Item >{3}</Pagination.Item>
                <Pagination.Item >{4}</Pagination.Item>
                <Pagination.Item >Next</Pagination.Item>
              </Pagination>
            </Nav>
                          <Collapse in={Size} className="mt-2">
                <pre>
                  <code>
                    {`
 <Nav aria-label="Page example">

 <Pagination size="lg" >
   <Pagination.Prev />
   <Pagination.Item active >{1}</Pagination.Item>
   <Pagination.Item >{2}</Pagination.Item>
   <Pagination.Item >{3}</Pagination.Item>
   <Pagination.Next />
 </Pagination>

</Nav><br />
<Nav aria-label="Page example">


 <Pagination >
   <Pagination.Item >Prev</Pagination.Item>
   <Pagination.Item active >{1}</Pagination.Item>
   <Pagination.Item >{2}</Pagination.Item>
   <Pagination.Item >{3}</Pagination.Item>
   <Pagination.Item >{4}</Pagination.Item>
   <Pagination.Item >Next</Pagination.Item>
 </Pagination>
</Nav>
`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Pagination Alignments</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setAlignment(!Alignment)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <p>Change the alignment of pagination components with <b>flexbox Utilities</b></p>
            <Nav aria-label="Page example" className='justify-content-left'>

              <Pagination >
                <Pagination.Prev disabled />
                <Pagination.Item >{1}</Pagination.Item>
                <Pagination.Item active >{2}</Pagination.Item>
                <Pagination.Item >{3}</Pagination.Item>
                <Pagination.Next />
              </Pagination>


            </Nav><br />
            <Nav aria-label="Page example" className='justify-content-center'>

              <Pagination >
                <Pagination.Prev disabled />
                <Pagination.Item >{1}</Pagination.Item>
                <Pagination.Item active >{2}</Pagination.Item>
                <Pagination.Item >{3}</Pagination.Item>
                <Pagination.Next />
              </Pagination>

            </Nav><br />
            <Nav aria-label="Page example" className='justify-content-end'>

              <Pagination  >
                <Pagination.Prev disabled />
                <Pagination.Item >{1}</Pagination.Item>
                <Pagination.Item active >{2}</Pagination.Item>
                <Pagination.Item >{3}</Pagination.Item>
                <Pagination.Next />
              </Pagination>

            </Nav>
                          <Collapse in={Alignment} className="mt-2">
                <pre>
                  <code>
                    {`
 <Nav aria-label="Page example" className='justify-content-left'>

 <Pagination >
   <Pagination.Prev disabled />
   <Pagination.Item >{1}</Pagination.Item>
   <Pagination.Item active >{2}</Pagination.Item>
   <Pagination.Item >{3}</Pagination.Item>
   <Pagination.Next />
 </Pagination>


</Nav><br />
<Nav aria-label="Page example" className='justify-content-center'>

 <Pagination >
   <Pagination.Prev disabled />
   <Pagination.Item >{1}</Pagination.Item>
   <Pagination.Item active >{2}</Pagination.Item>
   <Pagination.Item >{3}</Pagination.Item>
   <Pagination.Next />
 </Pagination>

</Nav><br />
<Nav aria-label="Page example" className='justify-content-end'>

 <Pagination  >
   <Pagination.Prev disabled />
   <Pagination.Item >{1}</Pagination.Item>
   <Pagination.Item active >{2}</Pagination.Item>
   <Pagination.Item >{3}</Pagination.Item>
   <Pagination.Next />
 </Pagination>

</Nav>

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End  Row --> */}
  </div>
)};

export default Pagination1;

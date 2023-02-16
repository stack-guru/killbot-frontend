import React, { useState } from 'react';
import { ButtonGroup, Card, Col, Dropdown, DropdownButton, Form, Row, SplitButton, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './DropDowns.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';

const DropDowns = () => {
  const [Single, setSingle] = useState(false);
  const [Square, setSquare] = useState(false);
  const [Light, setLight] = useState(false);
  const [Rounded, setRounded] = useState(false);
  const [Buton, setButon] = useState(false);
  const [Split, setSplit] = useState(false);
  const [SplitButon, setSplitButon] = useState(false);
  const [SplitDrop, setSplitDrop] = useState(false);
  const [Size, setSize] = useState(false);
  const [Position, setPosition] = useState(false);
  const [DropMenu, setDropMenu] = useState(false);
  const [Icon, setIcon] = useState(false);

  return (
    <div className={styles.DropDowns}>
      <PageHeader titles="Dropdowns" active="Dropdowns" items={['Componets']} />
      {/* <!-- ROW-1 OPEN --> */}
      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Single button dropdowns</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSingle(!Single)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Any single <code className="highlighter-rouge">.btn</code> can be turned into Link dropdown toggle with some markup changes.The best part is you can do this with any button variant, too</p>
                <div className="example">
                  <ButtonGroup className="mt-2 mb-2 me-1">
                    <Dropdown>
                      <Dropdown.Toggle variant="default" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                  <ButtonGroup className="mt-2 mb-2 me-1">
                    <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider className="bg-primary" />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>


                  <ButtonGroup className="mt-2 mb-2 me-1">
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider className="bg-success" />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">
                    <Dropdown>
                      <Dropdown.Toggle variant="info" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider className="bg-info" />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                  <ButtonGroup className="mt-2 mb-2 me-1">
                    <Dropdown>
                      <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider className="bg-warning" />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                  <ButtonGroup className="mt-2 mb-2 me-1">
                    <Dropdown>
                      <Dropdown.Toggle variant="danger" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider className="bg-danger" />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                </div>
              </div>
              <Collapse in={Single} className="mt-2 max-height-250">
                <pre>
                  <code>
                    {`
 <div className="text-wrap">
 <p>Any single <code className="highlighter-rouge">.btn</code> can be turned into Link dropdown toggle with some markup changes.The best part is you can do this with any button variant, too</p>
 <div className="example">
   <ButtonGroup className="mt-2 mb-2 me-1">
     <Dropdown>
       <Dropdown.Toggle variant="default" id="dropdown-basic">
         Action
       </Dropdown.Toggle>
       <Dropdown.Menu>
         <Dropdown.Header>
           Dropdown
         </Dropdown.Header>
         <Dropdown.Divider />
         <Dropdown.Item eventKey="1">Action</Dropdown.Item>
         <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
         <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown>
   </ButtonGroup>
   <ButtonGroup className="mt-2 mb-2 me-1">
     <Dropdown>
       <Dropdown.Toggle variant="primary" id="dropdown-basic">
         Action
       </Dropdown.Toggle>
       <Dropdown.Menu>
         <Dropdown.Header>
           Dropdown
         </Dropdown.Header>
         <Dropdown.Divider className="bg-primary" />
         <Dropdown.Item eventKey="1">Action</Dropdown.Item>
         <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
         <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown>
   </ButtonGroup>


   <ButtonGroup className="mt-2 mb-2 me-1">
     <Dropdown>
       <Dropdown.Toggle variant="success" id="dropdown-basic">
         Action
       </Dropdown.Toggle>
       <Dropdown.Menu>
         <Dropdown.Header>
           Dropdown
         </Dropdown.Header>
         <Dropdown.Divider className="bg-success" />
         <Dropdown.Item eventKey="1">Action</Dropdown.Item>
         <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
         <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown>
   </ButtonGroup>

   <ButtonGroup className="mt-2 mb-2 me-1">
     <Dropdown>
       <Dropdown.Toggle variant="info" id="dropdown-basic">
         Action
       </Dropdown.Toggle>
       <Dropdown.Menu>
         <Dropdown.Header>
           Dropdown
         </Dropdown.Header>
         <Dropdown.Divider className="bg-info" />
         <Dropdown.Item eventKey="1">Action</Dropdown.Item>
         <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
         <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown>
   </ButtonGroup>
   <ButtonGroup className="mt-2 mb-2 me-1">
     <Dropdown>
       <Dropdown.Toggle variant="warning" id="dropdown-basic">
         Action
       </Dropdown.Toggle>
       <Dropdown.Menu>
         <Dropdown.Header>
           Dropdown
         </Dropdown.Header>
         <Dropdown.Divider className="bg-warning" />
         <Dropdown.Item eventKey="1">Action</Dropdown.Item>
         <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
         <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown>
   </ButtonGroup>
   <ButtonGroup className="mt-2 mb-2 me-1">
     <Dropdown>
       <Dropdown.Toggle variant="danger" id="dropdown-basic">
         Action
       </Dropdown.Toggle>
       <Dropdown.Menu>
         <Dropdown.Header>
           Dropdown
         </Dropdown.Header>
         <Dropdown.Divider className="bg-danger" />
         <Dropdown.Item eventKey="1">Action</Dropdown.Item>
         <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
         <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown>
   </ButtonGroup>
 </div>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Single Square outline button dropdowns</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSquare(!Square)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Any single <code className="highlighter-rouge">.btn</code> can be turned into Link dropdown toggle with some markup changes.The best part is you can do this with any button variant, too</p>
                <div className="example">
                  <ButtonGroup className="mt-2 mb-2 me-1">
                    <Dropdown>
                      <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider className="bg-primary" />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider className="bg-success" />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                  <ButtonGroup className="mt-2 mb-2 me-1">
                    <Dropdown>
                      <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider className="bg-info" />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle variant="outline-warning" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider className="bg-warning" />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">
                    <Dropdown>
                      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider className="bg-danger" />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                </div>
              </div>
              <Collapse in={Square} className="mt-2 max-height-250">
                <pre>
                  <code>
                    {`
   <div className="text-wrap">
   <p>Any single <code className="highlighter-rouge">.btn</code> can be turned into Link dropdown toggle with some markup changes.The best part is you can do this with any button variant, too</p>
   <div className="example">
     <ButtonGroup className="mt-2 mb-2 me-1">
       <Dropdown>
         <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
           Action
         </Dropdown.Toggle>
         <Dropdown.Menu>
           <Dropdown.Header>
             Dropdown
           </Dropdown.Header>
           <Dropdown.Divider className="bg-primary" />
           <Dropdown.Item eventKey="1">Action</Dropdown.Item>
           <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
           <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </ButtonGroup>

     <ButtonGroup className="mt-2 mb-2 me-1">

       <Dropdown>
         <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
           Action
         </Dropdown.Toggle>
         <Dropdown.Menu>
           <Dropdown.Header>
             Dropdown
           </Dropdown.Header>
           <Dropdown.Divider className="bg-success" />
           <Dropdown.Item eventKey="1">Action</Dropdown.Item>
           <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
           <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </ButtonGroup>
     <ButtonGroup className="mt-2 mb-2 me-1">
       <Dropdown>
         <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
           Action
         </Dropdown.Toggle>
         <Dropdown.Menu>
           <Dropdown.Header>
             Dropdown
           </Dropdown.Header>
           <Dropdown.Divider className="bg-info" />
           <Dropdown.Item eventKey="1">Action</Dropdown.Item>
           <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
           <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </ButtonGroup>

     <ButtonGroup className="mt-2 mb-2 me-1">

       <Dropdown>
         <Dropdown.Toggle variant="outline-warning" id="dropdown-basic">
           Action
         </Dropdown.Toggle>
         <Dropdown.Menu>
           <Dropdown.Header>
             Dropdown
           </Dropdown.Header>
           <Dropdown.Divider className="bg-warning" />
           <Dropdown.Item eventKey="1">Action</Dropdown.Item>
           <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
           <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </ButtonGroup>

     <ButtonGroup className="mt-2 mb-2 me-1">
       <Dropdown>
         <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
           Action
         </Dropdown.Toggle>
         <Dropdown.Menu>
           <Dropdown.Header>
             Dropdown
           </Dropdown.Header>
           <Dropdown.Divider className="bg-danger" />
           <Dropdown.Item eventKey="1">Action</Dropdown.Item>
           <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
           <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </ButtonGroup>

   </div>
 </div>
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
              <Card.Title>Single Light button dropdowns</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setLight(!Light)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Any single <code className="highlighter-rouge">.btn</code> can be turned into Link dropdown toggle with some markup changes.The best part is you can do this with any button variant, too</p>
                <div className="example">
                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle variant="default-light" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle variant="primary-light" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle variant="success-light" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle variant="info-light" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle variant="warning-light" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle variant="danger-light" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                </div>
              </div>
              <Collapse in={Light} className="mt-2 max-height-250">
                <pre>
                  <code>
                    {`
   <div className="text-wrap">
   <p>Any single <code className="highlighter-rouge">.btn</code> can be turned into Link dropdown toggle with some markup changes.The best part is you can do this with any button variant, too</p>
   <div className="example">
     <ButtonGroup className="mt-2 mb-2 me-1">

       <Dropdown>
         <Dropdown.Toggle variant="default-light" id="dropdown-basic">
           Action
         </Dropdown.Toggle>
         <Dropdown.Menu>
           <Dropdown.Header>
             Dropdown
           </Dropdown.Header>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="1">Action</Dropdown.Item>
           <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
           <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </ButtonGroup>

     <ButtonGroup className="mt-2 mb-2 me-1">

       <Dropdown>
         <Dropdown.Toggle variant="primary-light" id="dropdown-basic">
           Action
         </Dropdown.Toggle>
         <Dropdown.Menu>
           <Dropdown.Header>
             Dropdown
           </Dropdown.Header>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="1">Action</Dropdown.Item>
           <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
           <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </ButtonGroup>

     <ButtonGroup className="mt-2 mb-2 me-1">

       <Dropdown>
         <Dropdown.Toggle variant="success-light" id="dropdown-basic">
           Action
         </Dropdown.Toggle>
         <Dropdown.Menu>
           <Dropdown.Header>
             Dropdown
           </Dropdown.Header>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="1">Action</Dropdown.Item>
           <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
           <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </ButtonGroup>

     <ButtonGroup className="mt-2 mb-2 me-1">

       <Dropdown>
         <Dropdown.Toggle variant="info-light" id="dropdown-basic">
           Action
         </Dropdown.Toggle>
         <Dropdown.Menu>
           <Dropdown.Header>
             Dropdown
           </Dropdown.Header>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="1">Action</Dropdown.Item>
           <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
           <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </ButtonGroup>

     <ButtonGroup className="mt-2 mb-2 me-1">

       <Dropdown>
         <Dropdown.Toggle variant="warning-light" id="dropdown-basic">
           Action
         </Dropdown.Toggle>
         <Dropdown.Menu>
           <Dropdown.Header>
             Dropdown
           </Dropdown.Header>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="1">Action</Dropdown.Item>
           <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
           <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </ButtonGroup>

     <ButtonGroup className="mt-2 mb-2 me-1">

       <Dropdown>
         <Dropdown.Toggle variant="danger-light" id="dropdown-basic">
           Action
         </Dropdown.Toggle>
         <Dropdown.Menu>
           <Dropdown.Header>
             Dropdown
           </Dropdown.Header>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="1">Action</Dropdown.Item>
           <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
           <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </ButtonGroup>

   </div>
 </div>`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Rounded Light button dropdowns</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setRounded(!Rounded)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Any single <code className="highlighter-rouge">.btn</code> can be turned into Link dropdown toggle with some markup changes.The best part is you can do this with any button variant, too</p>
                <div className="example">
                  <ButtonGroup className="mt-2 mb-2 me-1">
                    <Dropdown>
                      <Dropdown.Toggle className='btn-pill' variant="default-light" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle className='btn-pill' variant="primary-light" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle className='btn-pill' variant="success-light" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle className='btn-pill' variant="info-light" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle className='btn-pill' variant="warning-light" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle className='btn-pill' variant="danger-light" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                </div>
              </div>
              <Collapse in={Rounded} className="mt-2 max-height-250">
                <pre>
                  <code>
                    {`
   <div className="text-wrap">
   <p>Any single <code className="highlighter-rouge">.btn</code> can be turned into Link dropdown toggle with some markup changes.The best part is you can do this with any button variant, too</p>
   <div className="example">
     <ButtonGroup className="mt-2 mb-2 me-1">
       <Dropdown>
         <Dropdown.Toggle className='btn-pill' variant="default-light" id="dropdown-basic">
           Action
         </Dropdown.Toggle>
         <Dropdown.Menu>
           <Dropdown.Header>
             Dropdown
           </Dropdown.Header>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="1">Action</Dropdown.Item>
           <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
           <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </ButtonGroup>

     <ButtonGroup className="mt-2 mb-2 me-1">

       <Dropdown>
         <Dropdown.Toggle className='btn-pill' variant="primary-light" id="dropdown-basic">
           Action
         </Dropdown.Toggle>
         <Dropdown.Menu>
           <Dropdown.Header>
             Dropdown
           </Dropdown.Header>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="1">Action</Dropdown.Item>
           <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
           <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </ButtonGroup>

     <ButtonGroup className="mt-2 mb-2 me-1">

       <Dropdown>
         <Dropdown.Toggle className='btn-pill' variant="success-light" id="dropdown-basic">
           Action
         </Dropdown.Toggle>
         <Dropdown.Menu>
           <Dropdown.Header>
             Dropdown
           </Dropdown.Header>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="1">Action</Dropdown.Item>
           <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
           <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </ButtonGroup>

     <ButtonGroup className="mt-2 mb-2 me-1">

       <Dropdown>
         <Dropdown.Toggle className='btn-pill' variant="info-light" id="dropdown-basic">
           Action
         </Dropdown.Toggle>
         <Dropdown.Menu>
           <Dropdown.Header>
             Dropdown
           </Dropdown.Header>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="1">Action</Dropdown.Item>
           <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
           <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </ButtonGroup>

     <ButtonGroup className="mt-2 mb-2 me-1">

       <Dropdown>
         <Dropdown.Toggle className='btn-pill' variant="warning-light" id="dropdown-basic">
           Action
         </Dropdown.Toggle>
         <Dropdown.Menu>
           <Dropdown.Header>
             Dropdown
           </Dropdown.Header>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="1">Action</Dropdown.Item>
           <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
           <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </ButtonGroup>

     <ButtonGroup className="mt-2 mb-2 me-1">

       <Dropdown>
         <Dropdown.Toggle className='btn-pill' variant="danger-light" id="dropdown-basic">
           Action
         </Dropdown.Toggle>
         <Dropdown.Menu>
           <Dropdown.Header>
             Dropdown
           </Dropdown.Header>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="1">Action</Dropdown.Item>
           <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
           <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </ButtonGroup>

   </div>
 </div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Rounded button dropdowns</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setButon(!Buton)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Any single <code className="highlighter-rouge">.btn</code> can be turned into Link dropdown toggle with some markup changes.The best part is you can do this with any button variant, too</p>
                <div className="example">
                  <ButtonGroup className="mt-2 mb-2 me-1">
                    <Dropdown>
                      <Dropdown.Toggle className='btn-pill' variant="default" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider className='bg-default' />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle className='btn-pill' variant="primary" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider className='bg-primary' />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle className='btn-pill' variant="success" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider className='bg-success' />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle className='btn-pill' variant="info" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider className='bg-info' />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">


                    <Dropdown>
                      <Dropdown.Toggle className='btn-pill' variant="warning" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider className='bg-warning' />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">


                    <Dropdown>
                      <Dropdown.Toggle className='btn-pill' variant="danger" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          Dropdown
                        </Dropdown.Header>
                        <Dropdown.Divider className='bg-danger' />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                </div>
              </div>
              <Collapse in={Buton} className="mt-2 max-height-250">
                <pre>
                  <code>
                    {`
             <div className="text-wrap">
             <p>Any single <code className="highlighter-rouge">.btn</code> can be turned into Link dropdown toggle with some markup changes.The best part is you can do this with any button variant, too</p>
             <div className="example">
               <ButtonGroup className="mt-2 mb-2 me-1">
                 <Dropdown>
                   <Dropdown.Toggle className='btn-pill' variant="default" id="dropdown-basic">
                     Action
                   </Dropdown.Toggle>
                   <Dropdown.Menu>
                     <Dropdown.Header>
                       Dropdown
                     </Dropdown.Header>
                     <Dropdown.Divider className='bg-default' />
                     <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                     <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                     <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                     <Dropdown.Divider />
                     <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                   </Dropdown.Menu>
                 </Dropdown>
               </ButtonGroup>

               <ButtonGroup className="mt-2 mb-2 me-1">

                 <Dropdown>
                   <Dropdown.Toggle className='btn-pill' variant="primary" id="dropdown-basic">
                     Action
                   </Dropdown.Toggle>
                   <Dropdown.Menu>
                     <Dropdown.Header>
                       Dropdown
                     </Dropdown.Header>
                     <Dropdown.Divider className='bg-primary' />
                     <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                     <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                     <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                     <Dropdown.Divider />
                     <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                   </Dropdown.Menu>
                 </Dropdown>
               </ButtonGroup>

               <ButtonGroup className="mt-2 mb-2 me-1">

                 <Dropdown>
                   <Dropdown.Toggle className='btn-pill' variant="success" id="dropdown-basic">
                     Action
                   </Dropdown.Toggle>
                   <Dropdown.Menu>
                     <Dropdown.Header>
                       Dropdown
                     </Dropdown.Header>
                     <Dropdown.Divider className='bg-success' />
                     <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                     <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                     <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                     <Dropdown.Divider />
                     <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                   </Dropdown.Menu>
                 </Dropdown>
               </ButtonGroup>

               <ButtonGroup className="mt-2 mb-2 me-1">

                 <Dropdown>
                   <Dropdown.Toggle className='btn-pill' variant="info" id="dropdown-basic">
                     Action
                   </Dropdown.Toggle>
                   <Dropdown.Menu>
                     <Dropdown.Header>
                       Dropdown
                     </Dropdown.Header>
                     <Dropdown.Divider className='bg-info' />
                     <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                     <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                     <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                     <Dropdown.Divider />
                     <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                   </Dropdown.Menu>
                 </Dropdown>
               </ButtonGroup>

               <ButtonGroup className="mt-2 mb-2 me-1">


                 <Dropdown>
                   <Dropdown.Toggle className='btn-pill' variant="warning" id="dropdown-basic">
                     Action
                   </Dropdown.Toggle>
                   <Dropdown.Menu>
                     <Dropdown.Header>
                       Dropdown
                     </Dropdown.Header>
                     <Dropdown.Divider className='bg-warning' />
                     <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                     <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                     <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                     <Dropdown.Divider />
                     <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                   </Dropdown.Menu>
                 </Dropdown>
               </ButtonGroup>

               <ButtonGroup className="mt-2 mb-2 me-1">


                 <Dropdown>
                   <Dropdown.Toggle className='btn-pill' variant="danger" id="dropdown-basic">
                     Action
                   </Dropdown.Toggle>
                   <Dropdown.Menu>
                     <Dropdown.Header>
                       Dropdown
                     </Dropdown.Header>
                     <Dropdown.Divider className='bg-danger' />
                     <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                     <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                     <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                     <Dropdown.Divider />
                     <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                   </Dropdown.Menu>
                 </Dropdown>
               </ButtonGroup>

             </div>
           </div>`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Rounded Split button dropdowns</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSplit(!Split)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Any single <code className="highlighter-rouge">.btn</code> can be turned into Link dropdown toggle with some markup changes.The best part is you can do this with any button variant, too</p>
                <div className="example">
                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <SplitButton variant="primary" title="Action" className="primary-pils">
                      <Dropdown.Header>
                        Dropdown
                      </Dropdown.Header>
                      <Dropdown.Divider className='bg-primary' />
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">


                    <SplitButton className="split" variant="success" title="Action">
                      <Dropdown.Header>
                        Dropdown
                      </Dropdown.Header>
                      <Dropdown.Divider className='bg-success' />
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">


                    <SplitButton className="split" variant="info" title="Action">
                      <Dropdown.Header>
                        Dropdown
                      </Dropdown.Header>
                      <Dropdown.Divider className='bg-info' />
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">


                    <SplitButton className="split" variant="warning" title="Action">
                      <Dropdown.Header>
                        Dropdown
                      </Dropdown.Header>
                      <Dropdown.Divider className='bg-warning' />
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">


                    <SplitButton className="split" variant="danger" title="Action">
                      <Dropdown.Header>
                        Dropdown
                      </Dropdown.Header>
                      <Dropdown.Divider className='bg-danger' />
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>
                  </ButtonGroup>

                </div>
              </div>
              <Collapse in={Split} className="mt-2 max-height-250">
                <pre>
                  <code>
                    {`
             <div className="text-wrap">
             <p>Any single <code className="highlighter-rouge">.btn</code> can be turned into Link dropdown toggle with some markup changes.The best part is you can do this with any button variant, too</p>
             <div className="example">
               <ButtonGroup className="mt-2 mb-2 me-1">

                 <SplitButton variant="primary" title="Action" className="primary-pils">
                   <Dropdown.Header>
                     Dropdown
                   </Dropdown.Header>
                   <Dropdown.Divider className='bg-primary' />
                   <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                   <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                   <Dropdown.Item eventKey="3">
                     Active Item
                   </Dropdown.Item>
                   <Dropdown.Divider />
                   <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                 </SplitButton>
               </ButtonGroup>

               <ButtonGroup className="mt-2 mb-2 me-1">


                 <SplitButton className="split" variant="success" title="Action">
                   <Dropdown.Header>
                     Dropdown
                   </Dropdown.Header>
                   <Dropdown.Divider className='bg-success' />
                   <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                   <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                   <Dropdown.Item eventKey="3">
                     Active Item
                   </Dropdown.Item>
                   <Dropdown.Divider />
                   <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                 </SplitButton>
               </ButtonGroup>

               <ButtonGroup className="mt-2 mb-2 me-1">


                 <SplitButton className="split" variant="info" title="Action">
                   <Dropdown.Header>
                     Dropdown
                   </Dropdown.Header>
                   <Dropdown.Divider className='bg-info' />
                   <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                   <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                   <Dropdown.Item eventKey="3">
                     Active Item
                   </Dropdown.Item>
                   <Dropdown.Divider />
                   <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                 </SplitButton>
               </ButtonGroup>

               <ButtonGroup className="mt-2 mb-2 me-1">


                 <SplitButton className="split" variant="warning" title="Action">
                   <Dropdown.Header>
                     Dropdown
                   </Dropdown.Header>
                   <Dropdown.Divider className='bg-warning' />
                   <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                   <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                   <Dropdown.Item eventKey="3">
                     Active Item
                   </Dropdown.Item>
                   <Dropdown.Divider />
                   <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                 </SplitButton>
               </ButtonGroup>

               <ButtonGroup className="mt-2 mb-2 me-1">


                 <SplitButton className="split" variant="danger" title="Action">
                   <Dropdown.Header>
                     Dropdown
                   </Dropdown.Header>
                   <Dropdown.Divider className='bg-danger' />
                   <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                   <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                   <Dropdown.Item eventKey="3">
                     Active Item
                   </Dropdown.Item>
                   <Dropdown.Divider />
                   <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                 </SplitButton>
               </ButtonGroup>

             </div>
           </div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Split button dropdowns</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSplitButon(!SplitButon)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Any single <code className="highlighter-rouge">.btn</code> can be turned into Link dropdown toggle with some markup changes.The best part is you can do this with any button variant, too</p>
                <div className="example">
                  <ButtonGroup className="mt-2 mb-2 me-1">


                    <SplitButton variant="default" title="Action">
                      <Dropdown.Header>
                        Dropdown
                      </Dropdown.Header>
                      <Dropdown.Divider className='bg-default' />
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <SplitButton variant="primary" title="Action">
                      <Dropdown.Header>
                        Dropdown
                      </Dropdown.Header>
                      <Dropdown.Divider className='bg-primary' />
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">


                    <SplitButton variant="success" title="Action">
                      <Dropdown.Header>
                        Dropdown
                      </Dropdown.Header>
                      <Dropdown.Divider className='bg-success' />
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">
                    <SplitButton variant="info" title="Action">
                      <Dropdown.Header>
                        Dropdown
                      </Dropdown.Header>
                      <Dropdown.Divider className='info' />
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <SplitButton variant="warning" title="Action">
                      <Dropdown.Header>
                        Dropdown
                      </Dropdown.Header>
                      <Dropdown.Divider className='bg-warning' />
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <SplitButton variant="danger" title="Action">
                      <Dropdown.Header>
                        Dropdown
                      </Dropdown.Header>
                      <Dropdown.Divider className='bg-danger' />
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>
                  </ButtonGroup>

                </div>
              </div>
              <Collapse in={SplitButon} className="mt-2 max-height-250">
                <pre>
                  <code>
                    {`
             <div className="text-wrap">
             <p>Any single <code className="highlighter-rouge">.btn</code> can be turned into Link dropdown toggle with some markup changes.The best part is you can do this with any button variant, too</p>
             <div className="example">
               <ButtonGroup className="mt-2 mb-2 me-1">


                 <SplitButton variant="default" title="Action">
                   <Dropdown.Header>
                     Dropdown
                   </Dropdown.Header>
                   <Dropdown.Divider className='bg-default' />
                   <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                   <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                   <Dropdown.Item eventKey="3">
                     Active Item
                   </Dropdown.Item>
                   <Dropdown.Divider />
                   <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                 </SplitButton>
               </ButtonGroup>

               <ButtonGroup className="mt-2 mb-2 me-1">

                 <SplitButton variant="primary" title="Action">
                   <Dropdown.Header>
                     Dropdown
                   </Dropdown.Header>
                   <Dropdown.Divider className='bg-primary' />
                   <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                   <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                   <Dropdown.Item eventKey="3">
                     Active Item
                   </Dropdown.Item>
                   <Dropdown.Divider />
                   <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                 </SplitButton>
               </ButtonGroup>

               <ButtonGroup className="mt-2 mb-2 me-1">


                 <SplitButton variant="success" title="Action">
                   <Dropdown.Header>
                     Dropdown
                   </Dropdown.Header>
                   <Dropdown.Divider className='bg-success' />
                   <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                   <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                   <Dropdown.Item eventKey="3">
                     Active Item
                   </Dropdown.Item>
                   <Dropdown.Divider />
                   <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                 </SplitButton>
               </ButtonGroup>

               <ButtonGroup className="mt-2 mb-2 me-1">
                 <SplitButton variant="info" title="Action">
                   <Dropdown.Header>
                     Dropdown
                   </Dropdown.Header>
                   <Dropdown.Divider className='info' />
                   <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                   <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                   <Dropdown.Item eventKey="3">
                     Active Item
                   </Dropdown.Item>
                   <Dropdown.Divider />
                   <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                 </SplitButton>
               </ButtonGroup>

               <ButtonGroup className="mt-2 mb-2 me-1">

                 <SplitButton variant="warning" title="Action">
                   <Dropdown.Header>
                     Dropdown
                   </Dropdown.Header>
                   <Dropdown.Divider className='bg-warning' />
                   <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                   <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                   <Dropdown.Item eventKey="3">
                     Active Item
                   </Dropdown.Item>
                   <Dropdown.Divider />
                   <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                 </SplitButton>
               </ButtonGroup>

               <ButtonGroup className="mt-2 mb-2 me-1">

                 <SplitButton variant="danger" title="Action">
                   <Dropdown.Header>
                     Dropdown
                   </Dropdown.Header>
                   <Dropdown.Divider className='bg-danger' />
                   <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                   <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                   <Dropdown.Item eventKey="3">
                     Active Item
                   </Dropdown.Item>
                   <Dropdown.Divider />
                   <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                 </SplitButton>
               </ButtonGroup>

             </div>
           </div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Split button dropdowns</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSplitDrop(!SplitDrop)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Any single <code className="highlighter-rouge">.btn</code> can be turned into Link dropdown toggle with some markup changes.The best part is you can do this with any button variant, too</p>
                <div className="example">
                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <SplitButton variant="outline-default" title="Action">
                      <Dropdown.Header>
                        Dropdown
                      </Dropdown.Header>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <SplitButton variant="outline-success" title="Action">
                      <Dropdown.Header>
                        Dropdown
                      </Dropdown.Header>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <SplitButton variant="outline-info" title="Action">
                      <Dropdown.Header>
                        Dropdown
                      </Dropdown.Header>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <SplitButton variant="outline-warning" title="Action">
                      <Dropdown.Header>
                        Dropdown
                      </Dropdown.Header>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <SplitButton variant="outline-danger" title="Action">
                      <Dropdown.Header>
                        Dropdown
                      </Dropdown.Header>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <SplitButton variant="outline-secondary" title="Action">
                      <Dropdown.Header>
                        Dropdown
                      </Dropdown.Header>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>
                  </ButtonGroup>

                </div>
              </div>
              <Collapse in={SplitDrop} className="mt-2 max-height-250">
                <pre>
                  <code>
                    {`
            <div className="text-wrap">
            <p>Any single <code className="highlighter-rouge">.btn</code> can be turned into Link dropdown toggle with some markup changes.The best part is you can do this with any button variant, too</p>
            <div className="example">
              <ButtonGroup className="mt-2 mb-2 me-1">

                <SplitButton variant="outline-default" title="Action">
                  <Dropdown.Header>
                    Dropdown
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Active Item
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </SplitButton>
              </ButtonGroup>

              <ButtonGroup className="mt-2 mb-2 me-1">

                <SplitButton variant="outline-success" title="Action">
                  <Dropdown.Header>
                    Dropdown
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Active Item
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </SplitButton>
              </ButtonGroup>

              <ButtonGroup className="mt-2 mb-2 me-1">

                <SplitButton variant="outline-info" title="Action">
                  <Dropdown.Header>
                    Dropdown
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Active Item
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </SplitButton>
              </ButtonGroup>

              <ButtonGroup className="mt-2 mb-2 me-1">

                <SplitButton variant="outline-warning" title="Action">
                  <Dropdown.Header>
                    Dropdown
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Active Item
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </SplitButton>
              </ButtonGroup>

              <ButtonGroup className="mt-2 mb-2 me-1">

                <SplitButton variant="outline-danger" title="Action">
                  <Dropdown.Header>
                    Dropdown
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Active Item
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </SplitButton>
              </ButtonGroup>

              <ButtonGroup className="mt-2 mb-2 me-1">

                <SplitButton variant="outline-secondary" title="Action">
                  <Dropdown.Header>
                    Dropdown
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Active Item
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </SplitButton>
              </ButtonGroup>

            </div>
          </div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Dropdown Sizes</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSize(!Size)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Button dropdowns work with buttons of all sizes, including default and split dropdown buttons</p>
                <div className="example">
                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle size="lg" variant="primary" id="dropdown-basic">
                        Larger Dropdown
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Default Dropdown
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle size="sm" variant="primary" id="dropdown-basic">
                        Small Dropdown
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                </div>
              </div>
              <Collapse in={Size} className="mt-2 max-height-250">
                <pre>
                  <code>
                    {`
            <div className="text-wrap">
            <p>Button dropdowns work with buttons of all sizes, including default and split dropdown buttons</p>
            <div className="example">
              <ButtonGroup className="mt-2 mb-2 me-1">

                <Dropdown>
                  <Dropdown.Toggle size="lg" variant="primary" id="dropdown-basic">
                    Larger Dropdown
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonGroup>

              <ButtonGroup className="mt-2 mb-2 me-1">

                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Default Dropdown
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonGroup>

              <ButtonGroup className="mt-2 mb-2 me-1">

                <Dropdown>
                  <Dropdown.Toggle size="sm" variant="primary" id="dropdown-basic">
                    Small Dropdown
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonGroup>

            </div>
          </div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Dropup, Dropright, Dropleft variation</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setPosition(!Position)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Trigger dropdown menus above elements by adding <code className="highlighter-rouge">.dropup</code> , <code className="highlighter-rouge">.dropend</code> , <code className="highlighter-rouge">.dropstart</code> to the parent
                  element.
                </p>
                <div className="example">
                  <ButtonGroup className="dropup mt-2 mb-2 me-1">

                    <Dropdown>
                      <DropdownButton drop="up" variant="primary" title="Drop up">

                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">HTML</Dropdown.Item>
                        <Dropdown.Item eventKey="2">CSS</Dropdown.Item>
                        <Dropdown.Item eventKey="3">JavaScript</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>

                      </DropdownButton>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="dropend mt-2 mb-2 me-1">

                    <DropdownButton
                      drop="end"
                      variant="primary"
                      title="Drop right"
                    >
                      <Dropdown.Item eventKey="1">HTML</Dropdown.Item>
                      <Dropdown.Item eventKey="2">CSS</Dropdown.Item>
                      <Dropdown.Item eventKey="3">JavaScript</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">About Us</Dropdown.Item>
                    </DropdownButton>
                  </ButtonGroup>

                  <div className="dropstart btn-group mt-2 mb-2 me-1">

                    <DropdownButton
                      drop="start"
                      variant="primary"
                      title="Drop left"
                    >
                      <Dropdown.Item eventKey="1">HTML</Dropdown.Item>
                      <Dropdown.Item eventKey="2">CSS</Dropdown.Item>
                      <Dropdown.Item eventKey="3">JavaScript</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">About Us</Dropdown.Item>
                    </DropdownButton>
                  </div>
                </div>
              </div>
              <Collapse in={Position} className="mt-2 max-height-250">
                <pre>
                  <code>
                    {`
             <div className="text-wrap">
             <p>Trigger dropdown menus above elements by adding <code className="highlighter-rouge">.dropup</code> , <code className="highlighter-rouge">.dropend</code> , <code className="highlighter-rouge">.dropstart</code> to the parent
               element.
             </p>
             <div className="example">
               <ButtonGroup className="dropup mt-2 mb-2 me-1">

                 <Dropdown>
                   <DropdownButton drop="up" variant="primary" title="Drop up">

                     <Dropdown.Divider />
                     <Dropdown.Item eventKey="1">HTML</Dropdown.Item>
                     <Dropdown.Item eventKey="2">CSS</Dropdown.Item>
                     <Dropdown.Item eventKey="3">JavaScript</Dropdown.Item>
                     <Dropdown.Divider />
                     <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>

                   </DropdownButton>
                 </Dropdown>
               </ButtonGroup>

               <ButtonGroup className="dropend mt-2 mb-2 me-1">

                 <DropdownButton
                   drop="end"
                   variant="primary"
                   title="Drop right"
                 >
                   <Dropdown.Item eventKey="1">HTML</Dropdown.Item>
                   <Dropdown.Item eventKey="2">CSS</Dropdown.Item>
                   <Dropdown.Item eventKey="3">JavaScript</Dropdown.Item>
                   <Dropdown.Divider />
                   <Dropdown.Item eventKey="4">About Us</Dropdown.Item>
                 </DropdownButton>
               </ButtonGroup>

               <div className="dropstart btn-group mt-2 mb-2 me-1">

                 <DropdownButton
                   drop="start"
                   variant="primary"
                   title="Drop left"
                 >
                   <Dropdown.Item eventKey="1">HTML</Dropdown.Item>
                   <Dropdown.Item eventKey="2">CSS</Dropdown.Item>
                   <Dropdown.Item eventKey="3">JavaScript</Dropdown.Item>
                   <Dropdown.Divider />
                   <Dropdown.Item eventKey="4">About Us</Dropdown.Item>
                 </DropdownButton>
               </div>
             </div>
           </div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Dropdown Menu Content</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setDropMenu(!DropMenu)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Samples of Dropdown menus Headers, Dividers, Text, Forms </p>
                <div className="example">
                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <DropdownButton variant="primary" title="Dropdown header">
                      <Dropdown.Header>
                        Dropdown header
                      </Dropdown.Header>
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    </DropdownButton>

                  </ButtonGroup>
                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <DropdownButton variant="primary" title="Dropdown divider">
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another Action</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  </ButtonGroup>
                  <Dropdown className="btn-group mt-2 mb-2 me-1">
                    <Dropdown.Toggle className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown Text
                      <span className="caret"></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu p-4 text-muted">
                      <p>
                        Some example text that's free-flowing within the dropdown menu.And this is more example text.
                      </p>
                    </Dropdown.Menu>
                  </Dropdown>
                  <ButtonGroup className="mt-2 mb-2 me-1">
                    <DropdownButton as={ButtonGroup}
                      drop='up'
                      variant="primary"
                      title="Dropdown form"
                    >
                      <Form className="card-body w-260" >
                        <Form.Group  >
                          <Form.Label >Mail or Username</Form.Label>
                          <Form.Control placeholder="Email" type="email" />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label >Password</Form.Label>
                          <Form.Control placeholder="password" type="password" />
                        </Form.Group>
                        <Form.Group >
                          <Form.Check type="checkbox" label="Remeber me" />
                        </Form.Group>
                        <div className="submit">
                          <Link className="btn btn-primary btn-block" to="#">Login</Link>
                        </div>
                        <div className="text-center mt-3">
                          <p className="mb-2"><Link to="#">Forgot Password</Link></p>
                          <p className="text-dark mb-0">Don't have account?<Link className="text-primary.ms-1" to="#">Register</Link></p>
                        </div>
                      </Form>
                    </DropdownButton>
                  </ButtonGroup>
                  <Dropdown className="btn-group mt-2 mb-2 me-1">
                    <Dropdown.Toggle className="btn-primary">
                      <span className="caret"><i className="fe fe-settings me-1"></i></span> Dropdown Options
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>
                        <h6>Auto Correct <span className="float-end">yes<i className="fe fe-chevron-right"></i></span></h6>
                      </Dropdown.Header>
                      <Dropdown.Item href='#'>Screen Light<span className="float-end me-3"><i className="fe fe-sun"></i></span></Dropdown.Item>
                      <Dropdown.Item className="ps-4">
                        <Form.Group className="mg-b-10 mb-0">
                          <label className="custom-switch">
                            <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" />
                            <span className="custom-switch-description mg-l-10">Notification</span>
                            <span className="custom-switch-indicator ms-5"></span>
                          </label>
                        </Form.Group>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Form.Group >
                          <label className="custom-switch">
                            <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" />
                            <span className="custom-switch-description mg-l-10">Reminders</span>
                            <span className="custom-switch-indicator ms-5"></span>
                          </label>
                        </Form.Group>
                      </Dropdown.Item>
                    </Dropdown.Menu>

                  </Dropdown>
                </div>
              </div>
              <Collapse in={DropMenu} className="mt-2 max-height-250">
                <pre>
                  <code>
                    {`
            <div className="text-wrap">
            <p>Samples of Dropdown menus Headers, Dividers, Text, Forms </p>
            <div className="example">
              <ButtonGroup className="mt-2 mb-2 me-1">

                <DropdownButton variant="primary" title="Dropdown header">
                  <Dropdown.Header>
                    Dropdown header
                  </Dropdown.Header>
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                </DropdownButton>

              </ButtonGroup>
              <ButtonGroup className="mt-2 mb-2 me-1">

                <DropdownButton variant="primary" title="Dropdown divider">
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another Action</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
              <Dropdown className="btn-group mt-2 mb-2 me-1">
                <Dropdown.Toggle className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown Text
                  <span className="caret"></span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu p-4 text-muted">
                  <p>
                    Some example text that's free-flowing within the dropdown menu.And this is more example text.
                  </p>
                </Dropdown.Menu>
              </Dropdown>
              <ButtonGroup className="mt-2 mb-2 me-1">

                <Dropdown >
                  <Dropdown.Toggle variant="primary" title="Dropdown form">
                    Dropdown form
                  </Dropdown.Toggle>
                  <Dropdown.Menu className=' w-260' >
                    <Form className="card-body" >
                      <Form.Group  >
                        <Form.Label >Mail or Username</Form.Label>
                        <Form.Control placeholder="Email" type="email" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label >Password</Form.Label>
                        <Form.Control placeholder="password" type="password" />
                      </Form.Group>
                      <Form.Group >
                        <Form.Check type="checkbox" label="Remeber me" />
                      </Form.Group>
                      <div className="submit">
                        <Link className="btn btn-primary btn-block" to="#">Login</Link>
                      </div>
                      <div className="text-center mt-3">
                        <p className="mb-2"><Link to="#">Forgot Password</Link></p>
                        <p className="text-dark mb-0">Don't have account?<Link className="text-primary.ms-1" to="#">Register</Link></p>
                      </div>
                    </Form>
                  </Dropdown.Menu>

                </Dropdown>

              </ButtonGroup>
              <Dropdown className="btn-group mt-2 mb-2 me-1">
                <Dropdown.Toggle className="btn-primary">
                  <span className="caret"><i className="fe fe-settings me-1"></i></span> Dropdown Options
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Header>
                    <h6>Auto Correct <span className="float-end">yes<i className="fe fe-chevron-right"></i></span></h6>
                  </Dropdown.Header>
                  <Dropdown.Item href='#'>Screen Light<span className="float-end me-3"><i className="fe fe-sun"></i></span></Dropdown.Item>
                  <Dropdown.Item className="ps-4">
                    <Form.Group className="mg-b-10 mb-0">
                      <label className="custom-switch">
                        <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" />
                        <span className="custom-switch-description mg-l-10">Notification</span>
                        <span className="custom-switch-indicator ms-5"></span>
                      </label>
                    </Form.Group>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Form.Group >
                      <label className="custom-switch">
                        <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" />
                        <span className="custom-switch-description mg-l-10">Reminders</span>
                        <span className="custom-switch-indicator ms-5"></span>
                      </label>
                    </Form.Group>
                  </Dropdown.Item>
                </Dropdown.Menu>

              </Dropdown>
            </div>
          </div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Icon Drop Downs dropdowns</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setIcon(!Icon)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="example panel panel-default">
                <div className="panel-body p-0">
                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle className='btn-pill' variant="info">
                        <i className="fa fa-facebook"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          <b>Dropdown</b>
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle className='btn-pill' variant="danger">
                        <i className="fa fa-youtube "></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          <b>Dropdown</b>
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle className='btn-pill' variant="info">
                        <i className="fa fa-google"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          <b>Dropdown</b>
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle className='btn-pill' variant="dark">
                        <i className="fa fa-github"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          <b>Dropdown</b>
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle className='btn-pill' variant="danger">
                        <i className="fa fa-pinterest-p"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          <b>Dropdown</b>
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                  </ButtonGroup>
                  <ButtonGroup className="mt-2 mb-2 me-1">

                    <Dropdown>
                      <Dropdown.Toggle className='btn-pill' variant="secondary">
                        <i className="fa fa-twitter"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>
                          <b>Dropdown</b>
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                </div>
              </div>
              <Collapse in={Icon} className="mt-2 max-height-250">
                <pre>
                  <code>
                    {`
            <div className="example panel panel-default">
            <div className="panel-body p-0">
              <ButtonGroup className="mt-2 mb-2 me-1">

                <Dropdown>
                  <Dropdown.Toggle className='btn-pill' variant="info">
                    <i className="fa fa-facebook"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Header>
                      <b>Dropdown</b>
                    </Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonGroup>
              <ButtonGroup className="mt-2 mb-2 me-1">

                <Dropdown>
                  <Dropdown.Toggle className='btn-pill' variant="danger">
                    <i className="fa fa-youtube "></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Header>
                      <b>Dropdown</b>
                    </Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonGroup>
              <ButtonGroup className="mt-2 mb-2 me-1">

                <Dropdown>
                  <Dropdown.Toggle className='btn-pill' variant="info">
                    <i className="fa fa-google"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Header>
                      <b>Dropdown</b>
                    </Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonGroup>
              <ButtonGroup className="mt-2 mb-2 me-1">

                <Dropdown>
                  <Dropdown.Toggle className='btn-pill' variant="dark">
                    <i className="fa fa-github"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Header>
                      <b>Dropdown</b>
                    </Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonGroup>
              <ButtonGroup className="mt-2 mb-2 me-1">

                <Dropdown>
                  <Dropdown.Toggle className='btn-pill' variant="danger">
                    <i className="fa fa-pinterest-p"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Header>
                      <b>Dropdown</b>
                    </Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </ButtonGroup>
              <ButtonGroup className="mt-2 mb-2 me-1">

                <Dropdown>
                  <Dropdown.Toggle className='btn-pill' variant="secondary">
                    <i className="fa fa-twitter"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Header>
                      <b>Dropdown</b>
                    </Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonGroup>
            </div>
          </div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-1 CLOSED --> */}
    </div>
  )
};

export default DropDowns;

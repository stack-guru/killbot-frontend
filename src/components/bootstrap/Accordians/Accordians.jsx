import React, { useState } from 'react';
import styles from './Accordians.module.scss';
import { Accordion, Row, Col, Card, Form, Collapse, } from 'react-bootstrap';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';


const Accordians = () => {

  const [defaultCode, setdefaultCode] = useState(false);
  const [bootstrapCode, setBootstrapCode] = useState(false);
  const [ClosedIconCode, setClosedIconCode] = useState(false);
  const [Styled1Code, setStyled1Code] = useState(false);
  const [indivisual, setindivisual] = useState(false);

  return (
    <div className={styles.Accordians}>
      <PageHeader titles="Accordion" active="Accordion" items={['Advanced Elements']} />
      {/* <!-- ROW-1 OPEN --> */}
      <Row>
        <Col sm={12} md={12} lg={12} xl={12}>
          <Card>
            <Card.Header className='d-sm-flex justify-content-between align-items-center d-block'>
              <Card.Title className='mb-3 mb-sm-0'>Default Accordion</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setdefaultCode(!defaultCode)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            
            <Card.Body>
              <Accordion defaultActiveKey="0" className="panel-default">
                <Accordion.Item eventKey="0">

                  <Accordion.Header>Collapsible Group Item #1</Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Collapsible Group Item #2</Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Collapsible Group Item #3</Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              {/* <!-- PANEL-GROUP --> */}
              <Collapse in={defaultCode} className="mt-2">
                <pre>
                  <code>
                    {`
 <Accordion defaultActiveKey="0" className="panel-default">
 <Accordion.Item eventKey="0">

   <Accordion.Header>Collapsible Group Item #1</Accordion.Header>
   <Accordion.Body>
     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
     on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
     Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
   </Accordion.Body>
 </Accordion.Item>
 <Accordion.Item eventKey="1">
   <Accordion.Header>Collapsible Group Item #2</Accordion.Header>
   <Accordion.Body>
     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
     on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
     Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
   </Accordion.Body>
 </Accordion.Item>
 <Accordion.Item eventKey="2">
   <Accordion.Header>Collapsible Group Item #3</Accordion.Header>
   <Accordion.Body>
     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
     on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
     Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
   </Accordion.Body>
 </Accordion.Item>
</Accordion>

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}
        <Col sm={12} md={12} lg={12} xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>Bootstrap Accordion</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBootstrapCode(!bootstrapCode)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Collapsible Group Item #1</Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Collapsible Group Item #2</Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Collapsible Group Item #3</Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Collapse in={bootstrapCode} className="mt-2">
                <pre>
                  <code>
                    {`
<Accordion defaultActiveKey="0">
<Accordion.Item eventKey="0">
  <Accordion.Header>Collapsible Group Item #1</Accordion.Header>
  <Accordion.Body>
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>Collapsible Group Item #2</Accordion.Header>
  <Accordion.Body>
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header>Collapsible Group Item #3</Accordion.Header>
  <Accordion.Body>
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
  </Accordion.Body>
</Accordion.Item>
</Accordion>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={12} xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>Closed Accordion</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setClosedIconCode(!ClosedIconCode)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="0" className='red'>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Section 1</Accordion.Header>
                  <Accordion.Body>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Section 2</Accordion.Header>
                  <Accordion.Body>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Section 3</Accordion.Header>
                  <Accordion.Body>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Collapse in={ClosedIconCode} className="mt-2">
                <pre>
                  <code>
                    {`
 <Accordion defaultActiveKey="0" className='red'>
 <Accordion.Item eventKey="0">
   <Accordion.Header>Section 1</Accordion.Header>
   <Accordion.Body>
     Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
   </Accordion.Body>
 </Accordion.Item>
 <Accordion.Item eventKey="1">
   <Accordion.Header>Section 2</Accordion.Header>
   <Accordion.Body>
     Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
   </Accordion.Body>
 </Accordion.Item>
 <Accordion.Item eventKey="2">
   <Accordion.Header>Section 3</Accordion.Header>
   <Accordion.Body>
     Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
   </Accordion.Body>
 </Accordion.Item>
 </Accordion>
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

      {/* <!-- ROW-2 OPEN --> */}
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className='d-sm-flex justify-content-between align-items-center d-block'>
              <Card.Title className='mb-3 mb-sm-0'>Accordion Style 3</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setStyled1Code(!Styled1Code)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="0" className="demo-accordion accordionjs m-0">
                <Accordion.Item eventKey="0" className="acc_section ">
                  <Accordion.Header className="acc_head">Section 1</Accordion.Header>
                  <Accordion.Body>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="acc_section ">
                  <Accordion.Header className="acc_head">Section 2</Accordion.Header>
                  <Accordion.Body>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="acc_section ">
                  <Accordion.Header className="acc_head">Section 3</Accordion.Header>
                  <Accordion.Body>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="acc_section ">
                  <Accordion.Header className="acc_head">Section 4</Accordion.Header>
                  <Accordion.Body>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Collapse in={Styled1Code} className="mt-2">
                <pre>
                  <code>
                    {`
 <Accordion defaultActiveKey="0" className="demo-accordion accordionjs m-0">
 <Accordion.Item eventKey="0" className="acc_section ">
   <Accordion.Header className="acc_head">Section 1</Accordion.Header>
   <Accordion.Body>
     Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
   </Accordion.Body>
 </Accordion.Item>
 <Accordion.Item eventKey="1" className="acc_section ">
   <Accordion.Header className="acc_head">Section 2</Accordion.Header>
   <Accordion.Body>
     Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
   </Accordion.Body>
 </Accordion.Item>
 <Accordion.Item eventKey="2" className="acc_section ">
   <Accordion.Header className="acc_head">Section 3</Accordion.Header>
   <Accordion.Body>
     Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
   </Accordion.Body>
 </Accordion.Item>
 <Accordion.Item eventKey="3" className="acc_section ">
   <Accordion.Header className="acc_head">Section 4</Accordion.Header>
   <Accordion.Body>
     Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
   </Accordion.Body>
 </Accordion.Item>
 </Accordion>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className='d-sm-flex justify-content-between align-items-center d-block'>
              <Card.Title className='mb-3 mb-sm-0'>Accordion Style</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setindivisual(!indivisual)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className='panel-group1'>
                <div className='mb-4'>
                  <Accordion defaultActiveKey="0" className="demo-accordion accordionjs m-0">
                    <Accordion.Item eventKey="0" className="acc_section ">
                      <Accordion.Header className="acc_head">Section 1</Accordion.Header>
                      <Accordion.Body>
                        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className='mb-4'>
                  <Accordion defaultActiveKey="1" className="demo-accordion accordionjs m-0">
                    <Accordion.Item eventKey="1" className="acc_section ">
                      <Accordion.Header className="acc_head">Section 1</Accordion.Header>
                      <Accordion.Body>
                        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <Collapse in={indivisual} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className='panel-group1'>
 <div className='mb-4'>
   <Accordion defaultActiveKey="0" className="demo-accordion accordionjs m-0">
     <Accordion.Item eventKey="0" className="acc_section ">
       <Accordion.Header className="acc_head">Section 1</Accordion.Header>
       <Accordion.Body>
         Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
       </Accordion.Body>
     </Accordion.Item>
   </Accordion>
 </div>
 <div className='mb-4'>
   <Accordion defaultActiveKey="1" className="demo-accordion accordionjs m-0">
     <Accordion.Item eventKey="1" className="acc_section ">
       <Accordion.Header className="acc_head">Section 1</Accordion.Header>
       <Accordion.Body>
         Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
       </Accordion.Body>
     </Accordion.Item>
   </Accordion>
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
      </Row>
      {/* <!-- ROW-2 CLOSED OPEN --> */}
    </div>
  )
};

export default Accordians;

import React, { useState } from 'react';
import styles from './Tabs.module.scss';
import { Tabs, Tab, Row, Col, Nav, Card, Form, Collapse } from 'react-bootstrap';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';


const Tabscontent = () => {

  const [Default, setDefault] = useState(false);
  const [tab, settab] = useState(false);
  const [style, setstyle] = useState(false);
  const [tabs, settabs] = useState(false);
  const [Secondary, setSecondary] = useState(false);
  const [Danger, setDanger] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [Info, setInfo] = useState(false);
  const [right, setright] = useState(false);

  return (

  <div className={styles.Tabs}>
    <PageHeader titles="Tabs" active="Tabs" items={['Advanced Elements']} />
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Tabs style</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setDefault(!Default)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="panel panel-default">
              <Tabs defaultActiveKey="tab1" >
                <Tab eventKey="tab1" title="Tabs1">
                  <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                    by accident, sometimes on purpose (injected humour and the like</p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                </Tab>
                <Tab eventKey="tab2" title="Tabs2">
                  <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                    humour and the like</p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                </Tab>
                <Tab eventKey="tab3" title="Tabs3">
                  <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                </Tab>
                <Tab eventKey="tab4" title="Tabs4">
                  <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                    by accident, sometimes on purpose (injected humour and the like</p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                </Tab>
              </Tabs>
            </div>
              <Collapse in={Default} className="mt-2">
                <pre>
                  <code>
                    {`
<Tabs defaultActiveKey="tab1" >
<Tab eventKey="tab1" title="Tabs1">
  <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
    by accident, sometimes on purpose (injected humour and the like</p>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
</Tab>
<Tab eventKey="tab2" title="Tabs2">
  <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
    humour and the like</p>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
</Tab>
<Tab eventKey="tab3" title="Tabs3">
  <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
</Tab>
<Tab eventKey="tab4" title="Tabs4">
  <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
    by accident, sometimes on purpose (injected humour and the like</p>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
</Tab>
</Tabs>
`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Tabs Style</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => settab(!tab)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="panel panel-tabs">
              <Tabs defaultActiveKey="tab1">
                <Tab className="tab-pane" eventKey="tab1" title="Tabs1">
                  <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                    by accident, sometimes on purpose (injected humour and the like</p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                </Tab>
                <Tab className="tab-pane" eventKey="tab2" title="Tabs2">
                  <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                    humour and the like</p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                </Tab>
                <Tab className="tab-pane" eventKey="tab3" title="Tabs3">
                  <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                </Tab>
                <Tab className="tab-pane" eventKey="tab4" title="Tabs4">
                  <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                    by accident, sometimes on purpose (injected humour and the like</p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                </Tab>
              </Tabs>
            </div>              
            <Collapse in={tab} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="panel panel-tabs">
<Tabs defaultActiveKey="tab1">
  <Tab className="tab-pane" eventKey="tab1" title="Tabs1">
    <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
      by accident, sometimes on purpose (injected humour and the like</p>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
  </Tab>
  <Tab className="tab-pane" eventKey="tab2" title="Tabs2">
    <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
      humour and the like</p>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
  </Tab>
  <Tab className="tab-pane" eventKey="tab3" title="Tabs3">
    <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
  </Tab>
  <Tab className="tab-pane" eventKey="tab4" title="Tabs4">
    <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
      by accident, sometimes on purpose (injected humour and the like</p>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
  </Tab>
</Tabs>
</div> 
`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Tabs style</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setstyle(!style)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="panel panel-tabs-boxed">
              <Tabs defaultActiveKey="tab1" >
                <Tab className="tab-pane" eventKey="tab1" title="Tabs1">
                  <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                    by accident, sometimes on purpose (injected humour and the like</p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                </Tab>
                <Tab className="tab-pane" eventKey="tab2" title="Tabs2">
                  <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                    humour and the like</p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                </Tab>
                <Tab className="tab-pane" eventKey="tab3" title="Tabs3">
                  <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                </Tab>
                <Tab className="tab-pane" eventKey="tab4" title="Tabs4">
                  <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                    by accident, sometimes on purpose (injected humour and the like</p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                </Tab>
              </Tabs>
            </div>              
            <Collapse in={style} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="panel panel-tabs-boxed">
<Tabs defaultActiveKey="tab1" >
  <Tab className="tab-pane" eventKey="tab1" title="Tabs1">
    <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
      by accident, sometimes on purpose (injected humour and the like</p>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
  </Tab>
  <Tab className="tab-pane" eventKey="tab2" title="Tabs2">
    <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
      humour and the like</p>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
  </Tab>
  <Tab className="tab-pane" eventKey="tab3" title="Tabs3">
    <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
  </Tab>
  <Tab className="tab-pane" eventKey="tab4" title="Tabs4">
    <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
      by accident, sometimes on purpose (injected humour and the like</p>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
  </Tab>
</Tabs>
</div>
`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Tabs Style</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => settabs(!tabs)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="panel panel-tabs-border">
              <Tabs defaultActiveKey="tab1" >
                <Tab className="tab-pane" eventKey="tab1" title="Tabs1">
                  <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                    by accident, sometimes on purpose (injected humour and the like</p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                </Tab>
                <Tab className="tab-pane" eventKey="tab2" title="Tabs2">
                  <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                    humour and the like</p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                </Tab>
                <Tab className="tab-pane" eventKey="tab3" title="Tabs3">
                  <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                </Tab>
                <Tab className="tab-pane" eventKey="tab4" title="Tabs4">
                  <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                    by accident, sometimes on purpose (injected humour and the like</p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                </Tab>
              </Tabs>
            </div>             
            <Collapse in={tabs} className="mt-2">
                <pre>
                  <code>
                    {`
   <div className="panel panel-tabs-border">
   <Tabs defaultActiveKey="tab1" >
     <Tab className="tab-pane" eventKey="tab1" title="Tabs1">
       <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
         by accident, sometimes on purpose (injected humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab>
     <Tab className="tab-pane" eventKey="tab2" title="Tabs2">
       <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
         humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab>
     <Tab className="tab-pane" eventKey="tab3" title="Tabs3">
       <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab>
     <Tab className="tab-pane" eventKey="tab4" title="Tabs4">
       <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
         by accident, sometimes on purpose (injected humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab>
   </Tabs>
 </div>
`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Secondary Tabs style</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSecondary(!Secondary)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="panel panel-secondary">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                <Nav variant="pills" className='panel-tabs nav-tabs panel-secondary'>
                  <Nav.Item>
                    <Nav.Link eventKey="first"><i className="fe fe-user me-1"></i>Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second"><i className="fe fe-calendar me-1"></i>Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third"><i className="fe fe-settings me-1"></i>Tab 3</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth"><i className="fe fe-bell me-1"></i>Tab 4</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                      by accident, sometimes on purpose (injected humour and the like</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                      humour and the like</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                      by accident, sometimes on purpose (injected humour and the like</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                  </Tab.Pane>
                </Tab.Content>

              </Tab.Container>
            </div>              
            <Collapse in={Secondary} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="panel panel-secondary">
 <Tab.Container id="left-tabs-example" defaultActiveKey="first">

   <Nav variant="pills" className='panel-tabs nav-tabs panel-secondary'>
     <Nav.Item>
       <Nav.Link eventKey="first"><i className="fe fe-user me-1"></i>Tab 1</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link eventKey="second"><i className="fe fe-calendar me-1"></i>Tab 2</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link eventKey="third"><i className="fe fe-settings me-1"></i>Tab 3</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link eventKey="fourth"><i className="fe fe-bell me-1"></i>Tab 4</Nav.Link>
     </Nav.Item>
   </Nav>

   <Tab.Content>
     <Tab.Pane eventKey="first">
       <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
         by accident, sometimes on purpose (injected humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab.Pane>
     <Tab.Pane eventKey="second">
       <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
         humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab.Pane>
     <Tab.Pane eventKey="third">
       <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab.Pane>
     <Tab.Pane eventKey="fourth">
       <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
         by accident, sometimes on purpose (injected humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab.Pane>
   </Tab.Content>

 </Tab.Container>
</div>

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Danger Tabs style</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setDanger(!Danger)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="panel panel-danger">
              <Tab.Container id="left-tabs-example" defaultActiveKey="firstA">

                <Nav variant="pills" className='panel-tabs nav-tabs panel-danger'>
                  <Nav.Item>
                    <Nav.Link eventKey="firstA"><i className="fe fe-user me-1"></i>Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="secondA"><i className="fe fe-calendar me-1"></i>Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="thirdA"><i className="fe fe-settings me-1"></i>Tab 3</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourthA"><i className="fe fe-bell me-1"></i>Tab 4</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="firstA">
                    <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                      by accident, sometimes on purpose (injected humour and the like</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="secondA">
                    <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                      humour and the like</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="thirdA">
                    <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourthA">
                    <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                      by accident, sometimes on purpose (injected humour and the like</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                  </Tab.Pane>
                </Tab.Content>

              </Tab.Container>
            </div>             
            <Collapse in={Danger} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="panel panel-danger">
 <Tab.Container id="left-tabs-example" defaultActiveKey="firstA">

   <Nav variant="pills" className='panel-tabs nav-tabs panel-danger'>
     <Nav.Item>
       <Nav.Link eventKey="firstA"><i className="fe fe-user me-1"></i>Tab 1</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link eventKey="secondA"><i className="fe fe-calendar me-1"></i>Tab 2</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link eventKey="thirdA"><i className="fe fe-settings me-1"></i>Tab 3</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link eventKey="fourthA"><i className="fe fe-bell me-1"></i>Tab 4</Nav.Link>
     </Nav.Item>
   </Nav>

   <Tab.Content>
     <Tab.Pane eventKey="firstA">
       <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
         by accident, sometimes on purpose (injected humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab.Pane>
     <Tab.Pane eventKey="secondA">
       <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
         humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab.Pane>
     <Tab.Pane eventKey="thirdA">
       <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab.Pane>
     <Tab.Pane eventKey="fourthA">
       <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
         by accident, sometimes on purpose (injected humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab.Pane>
   </Tab.Content>

 </Tab.Container>
</div> 

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Success Tabs style</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSuccess(!Success)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="panel panel-success">
              <Tab.Container id="left-tabs-example" defaultActiveKey="firstB">

                <Nav variant="pills" className='panel-tabs nav-tabs panel-success'>
                  <Nav.Item>
                    <Nav.Link eventKey="firstB"><i className="fe fe-user me-1"></i>Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="secondB"><i className="fe fe-calendar me-1"></i>Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="thirdB"><i className="fe fe-settings me-1"></i>Tab 3</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourthB"><i className="fe fe-bell me-1"></i>Tab 4</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="firstB">
                    <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                      by accident, sometimes on purpose (injected humour and the like</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="secondB">
                    <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                      humour and the like</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="thirdB">
                    <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourthB">
                    <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                      by accident, sometimes on purpose (injected humour and the like</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                  </Tab.Pane>
                </Tab.Content>

              </Tab.Container>
            </div>              
            <Collapse in={Success} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="panel panel-success">
 <Tab.Container id="left-tabs-example" defaultActiveKey="firstB">

   <Nav variant="pills" className='panel-tabs nav-tabs panel-success'>
     <Nav.Item>
       <Nav.Link eventKey="firstB"><i className="fe fe-user me-1"></i>Tab 1</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link eventKey="secondB"><i className="fe fe-calendar me-1"></i>Tab 2</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link eventKey="thirdB"><i className="fe fe-settings me-1"></i>Tab 3</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link eventKey="fourthB"><i className="fe fe-bell me-1"></i>Tab 4</Nav.Link>
     </Nav.Item>
   </Nav>

   <Tab.Content>
     <Tab.Pane eventKey="firstB">
       <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
         by accident, sometimes on purpose (injected humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab.Pane>
     <Tab.Pane eventKey="secondB">
       <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
         humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab.Pane>
     <Tab.Pane eventKey="thirdB">
       <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab.Pane>
     <Tab.Pane eventKey="fourthB">
       <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
         by accident, sometimes on purpose (injected humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab.Pane>
   </Tab.Content>

 </Tab.Container>
</div> 
`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Info Tabs style</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setInfo(!Info)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="panel panel-info">
              <Tab.Container id="left-tabs-example" defaultActiveKey="firstC">

                <Nav variant="pills" className='panel-tabs nav-tabs panel-info'>
                  <Nav.Item>
                    <Nav.Link eventKey="firstC"><i className="fe fe-user me-1"></i>Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="secondC"><i className="fe fe-calendar me-1"></i>Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="thirdC"><i className="fe fe-settings me-1"></i>Tab 3</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourthC"><i className="fe fe-bell me-1"></i>Tab 4</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="firstC">
                    <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                      by accident, sometimes on purpose (injected humour and the like</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="secondC">
                    <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                      humour and the like</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="thirdC">
                    <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourthC">
                    <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                      by accident, sometimes on purpose (injected humour and the like</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                  </Tab.Pane>
                </Tab.Content>

              </Tab.Container>
            </div>             
             <Collapse in={Info} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="panel panel-info">
 <Tab.Container id="left-tabs-example" defaultActiveKey="firstC">

   <Nav variant="pills" className='panel-tabs nav-tabs panel-info'>
     <Nav.Item>
       <Nav.Link eventKey="firstC"><i className="fe fe-user me-1"></i>Tab 1</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link eventKey="secondC"><i className="fe fe-calendar me-1"></i>Tab 2</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link eventKey="thirdC"><i className="fe fe-settings me-1"></i>Tab 3</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link eventKey="fourthC"><i className="fe fe-bell me-1"></i>Tab 4</Nav.Link>
     </Nav.Item>
   </Nav>

   <Tab.Content>
     <Tab.Pane eventKey="firstC">
       <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
         by accident, sometimes on purpose (injected humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab.Pane>
     <Tab.Pane eventKey="secondC">
       <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
         humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab.Pane>
     <Tab.Pane eventKey="thirdC">
       <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab.Pane>
     <Tab.Pane eventKey="fourthC">
       <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
         by accident, sometimes on purpose (injected humour and the like</p>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
     </Tab.Pane>
   </Tab.Content>

 </Tab.Container>
</div>

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Tabs on right side</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setright(!right)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>

          <Card.Body>
            <Tab.Container id="right-tabs-example" defaultActiveKey="first" >
              <Row>

                <Col md={10}>
                  <Tab.Content className="content_wrapper border">
                    <Tab.Pane className="tab_content " eventKey="first">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                        of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                        of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </Tab.Pane>
                    <Tab.Pane className="tab_content" eventKey="second">
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
                        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
                        theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not
                        simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                        up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
                        from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                        Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </Tab.Pane>
                    <Tab.Pane className="tab_content" eventKey="third">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                        of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                        of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </Tab.Pane>
                    <Tab.Pane className="tab_content" eventKey="fourth">
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
                        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
                        theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not
                        simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                        up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
                        from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                        Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </Tab.Pane>
                    <Tab.Pane className="tab_content" eventKey="fifth">
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                        chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
                        which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
                        be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator
                        on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
                        always free from repetition, injected humour, or non-characteristic words etc.</p>
                    </Tab.Pane>
                    <Tab.Pane className="tab_content" eventKey="sixth">
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
                        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
                        theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not
                        simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                        up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
                        from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                        Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
                <Col md={2} >
                  <Nav variant="pills" className="flex-column tab_wrapper second_tab right_side" defaultActiveKey="first">
                    <Nav.Item>
                      <Nav.Link eventKey="first" >Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Tab 5</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">Tab 6</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
            </Tab.Container>
            <Collapse in={right} className="mt-2">
                <pre>
                  <code>
                    {`
   <Tab.Container id="right-tabs-example" defaultActiveKey="first" >
   <Row>

     <Col md={10}>
       <Tab.Content className="content_wrapper border">
         <Tab.Pane className="tab_content " eventKey="first">
           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
             of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
             and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
             of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
             and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
         </Tab.Pane>
         <Tab.Pane className="tab_content" eventKey="second">
           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
             Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
             the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
             theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not
             simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
             up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
             from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
             Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
         </Tab.Pane>
         <Tab.Pane className="tab_content" eventKey="third">
           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
             of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
             and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
             of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
             and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
         </Tab.Pane>
         <Tab.Pane className="tab_content" eventKey="fourth">
           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
             Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
             the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
             theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not
             simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
             up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
             from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
             Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
         </Tab.Pane>
         <Tab.Pane className="tab_content" eventKey="fifth">
           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
             If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
             chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
             which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available,
             but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
             be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator
             on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
             always free from repetition, injected humour, or non-characteristic words etc.</p>
         </Tab.Pane>
         <Tab.Pane className="tab_content" eventKey="sixth">
           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
             Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
             the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
             theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not
             simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
             up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
             from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
             Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
         </Tab.Pane>
       </Tab.Content>
     </Col>
     <Col md={2} >
       <Nav variant="pills" className="flex-column tab_wrapper second_tab right_side" defaultActiveKey="first">
         <Nav.Item>
           <Nav.Link eventKey="first" >Tab 1</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link eventKey="second">Tab 2</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link eventKey="third">Tab 3</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link eventKey="fifth">Tab 5</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link eventKey="sixth">Tab 6</Nav.Link>
         </Nav.Item>
       </Nav>
     </Col>
   </Row>
 </Tab.Container>

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

export default Tabscontent;

import React, { useState } from 'react';
import styles from './Navigation.module.scss';
import { Nav, Dropdown, Row, Col, Card, Form, Collapse } from 'react-bootstrap';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';


const Navigation = () => {

  const [Basic, setBasic] = useState(false);
  const [Vertical, setVertical] = useState(false);
  const [color, setcolor] = useState(false);
  const [Icon, setIcon] = useState(false);
  const [nav, setnav] = useState(false);
  const [NavBG, setNavBG] = useState(false);

  return (
    
    <div className={styles.Navigation}>
      <PageHeader titles="Navigation" active="Navigation" items={['Componets']} />
      {/* <!-- Row --> */}
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title className="me-2">Basic Nav</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBasic(!Basic)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <Nav className="nav1 br-7" activeKey='link-1'>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey='link-1'>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey='link-2'>Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey='link-3'>Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey='link-4' className="disabled">Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
              <Collapse in={Basic} className="mt-2">
                <pre>
                  <code>
                    {`
       <Nav className="nav1 br-7" activeKey='link-1'>
       <Nav.Item className="nav-item1">
         <Nav.Link eventKey='link-1'>Active</Nav.Link>
       </Nav.Item>
       <Nav.Item className="nav-item1">
         <Nav.Link eventKey='link-2'>Link</Nav.Link>
       </Nav.Item>
       <Nav.Item className="nav-item1">
         <Nav.Link eventKey='link-3'>Link</Nav.Link>
       </Nav.Item>
       <Nav.Item className="nav-item1">
         <Nav.Link eventKey='link-4' className="disabled">Disabled</Nav.Link>
       </Nav.Item>
     </Nav>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title className="me-2">Nav Vertical</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setVertical(!Vertical)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <Nav className="nav1 flex-column br-7" activeKey='link-1'>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey='link-1' active>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey='link-2'>Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey='link-3'>Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey='link-4' className="disabled">Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
              <Collapse in={Vertical} className="mt-2">
                <pre>
                  <code>
                    {`
 <Nav className="nav1 flex-column br-7" activeKey='link-1'>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey='link-1' active>Active</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey='link-2'>Link</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey='link-3'>Link</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey='link-4' className="disabled">Disabled</Nav.Link>
 </Nav.Item>
</Nav>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title className="me-2">Color Navigation</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setcolor(!color)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <Nav className="nav-pills" activeKey='link-1'>
                <Nav.Item className="m-2">
                  <Nav.Link eventKey='link-1' className="px-4 py-2" active>Active</Nav.Link>
                </Nav.Item>

                <Dropdown className='nav-item'>
                  <Dropdown.Toggle variant='' className="px-4 m-2 py-2" >Dropdown </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                    <Dropdown.Divider className='text-dark' />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Nav.Item className="m-2">
                  <Nav.Link eventKey='link-2' className="px-4 py-2">Link</Nav.Link>
                </Nav.Item>

                <Nav.Item className="m-2">
                  <Nav.Link eventKey='link-3' className="px-4 py-2 disabled">Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
              <Collapse in={color} className="mt-2">
                <pre>
                  <code>
                    {`
 <Nav className="nav-pills" activeKey='link-1'>
 <Nav.Item className="m-2">
   <Nav.Link eventKey='link-1' className="px-4 py-2" active>Active</Nav.Link>
 </Nav.Item>

 <Dropdown className='nav-item'>
   <Dropdown.Toggle variant='' className="px-4 m-2 py-2" >Dropdown </Dropdown.Toggle>
   <Dropdown.Menu>
     <Dropdown.Item eventKey="1">Action</Dropdown.Item>
     <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
     <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
     <Dropdown.Divider className='text-dark' />
     <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
   </Dropdown.Menu>
 </Dropdown>

 <Nav.Item className="m-2">
   <Nav.Link eventKey='link-2' className="px-4 py-2">Link</Nav.Link>
 </Nav.Item>

 <Nav.Item className="m-2">
   <Nav.Link eventKey='link-3' className="px-4 py-2 disabled">Disabled</Nav.Link>
 </Nav.Item>
</Nav>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title className="me-2">Icon Navigation</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setIcon(!Icon)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>

              <Nav variant="pills" defaultActiveKey="home" className='navicon'>
                <Nav.Item>
                  <Nav.Link className="border py-3 px-5 m-2" eventKey="home" ><i className="fe fe-home me-2"></i> Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="border py-3 px-5 m-2" eventKey="lock" ><i className="fe fe-unlock me-2"></i> Lock</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="py-3 px-5 border show m-2" eventKey="videos"><i className="fe fe-play me-2"></i> Videos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="border py-3 px-5 m-2" eventKey="servers"><i className="fe fe-layers me-2"></i> Severs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="border py-3 px-5 m-2" eventKey="gallery"><i className="fe fe-image me-2"></i> Gallery</Nav.Link>
                </Nav.Item>
              </Nav>
              <Collapse in={Icon} className="mt-2">
                <pre>
                  <code>
                    {`
 <Nav variant="pills" defaultActiveKey="Home">
 <Nav.Item>
   <Nav.Link className="border py-3 px-5 m-2" eventKey="Home" ><i className="fe fe-home me-2"></i> Home</Nav.Link>
 </Nav.Item>
 <Nav.Item>
   <Nav.Link className="border py-3 px-5 m-2" eventKey="Lock" ><i className="fe fe-unlock me-2"></i> Lock</Nav.Link>
 </Nav.Item>
 <Nav.Item>
   <Nav.Link className="py-3 px-5 border show m-2" eventKey="Videos"><i className="fe fe-play me-2"></i> Videos</Nav.Link>
 </Nav.Item>
 <Nav.Item>
   <Nav.Link className="border py-3 px-5 m-2" eventKey="servers"><i className="fe fe-layers me-2"></i> Severs</Nav.Link>
 </Nav.Item>
 <Nav.Item>
   <Nav.Link className="border py-3 px-5 m-2" eventKey="Gallery"><i className="fe fe-image me-2"></i> Gallery</Nav.Link>
 </Nav.Item>
</Nav>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title className="me-2">Icon Nav Bar</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setnav(!nav)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>

              <Nav variant="pills" className="nav-pills-circle" defaultActiveKey="home">
                <Nav.Item>
                  <Nav.Link className="border w-8 h-8 text-center br-100 m-2" eventKey="home" > <span className="text-center mx-auto"><i className="fe fe-home fs-20"></i></span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="border w-8 h-8 br-100 m-2" eventKey="lock" ><span className="text-center mx-auto"><i className="fe fe-unlock fs-20"></i></span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="border show w-8 h-8 br-100 m-2" eventKey="play"><span className="text-center mx-auto"><i className="fe fe-play fs-20"></i></span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="border w-8 h-8 br-100 m-2" eventKey="layer"><span className="text-center mx-auto"><i className="fe fe-layers fs-20"></i></span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="border  w-8 h-8 br-100 m-2" eventKey="images"><span className="text-center mx-auto"><i className="fe fe-image fs-20"></i></span></Nav.Link>
                </Nav.Item>
              </Nav>

              <Collapse in={nav} className="mt-2">
                <pre>
                  <code>
                    {`
 <Nav variant="pills" className="nav-pills-circle" defaultActiveKey="home">
 <Nav.Item>
   <Nav.Link className="border w-8 h-8 text-center br-100 m-2" eventKey="home" > <span className="text-center mx-auto"><i className="fe fe-home fs-20"></i></span></Nav.Link>
 </Nav.Item>
 <Nav.Item>
   <Nav.Link className="border w-8 h-8 br-100 m-2" eventKey="lock" ><span className="text-center mx-auto"><i className="fe fe-unlock fs-20"></i></span></Nav.Link>
 </Nav.Item>
 <Nav.Item>
   <Nav.Link className="border show w-8 h-8 br-100 m-2" eventKey="play"><span className="text-center mx-auto"><i className="fe fe-play fs-20"></i></span></Nav.Link>
 </Nav.Item>
 <Nav.Item>
   <Nav.Link className="border w-8 h-8 br-100 m-2" eventKey="layer"><span className="text-center mx-auto"><i className="fe fe-layers fs-20"></i></span></Nav.Link>
 </Nav.Item>
 <Nav.Item>
   <Nav.Link className="border  w-8 h-8 br-100 m-2" eventKey="images"><span className="text-center mx-auto"><i className="fe fe-image fs-20"></i></span></Nav.Link>
 </Nav.Item>
</Nav>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title className="me-2">Navigation backgrounds</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setNavBG(!NavBG)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <Nav className="nav1 bg-primary br-7" defaultActiveKey="Primary-Active">
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="Primary-Active" className="text-white" active>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="Primary-Link-1" className="text-white">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="Primary-Link-2" className="text-white">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="Primary-Disable" className="text-white-50" disabled>Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav className="nav1 bg-info mt-4 br-7" defaultActiveKey="Info-Active">
                <Nav.Item className="nav-item1">
                  <Nav.Link className="text-white active" eventKey="Info-Active">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link className="text-white" eventKey="Info-Link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link className="text-white" eventKey="Info-Link-2" >Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link className="disabled text-white-50" eventKey="Info-Disable">Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav className="nav1 bg-success mt-4 br-7" defaultActiveKey="Success-Active">
                <Nav.Item className="nav-item1">
                  <Nav.Link className="text-white active" eventKey="Success-Active" >Active</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="Success-Link-1" className="text-white">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="Success-Link-2" className="text-white">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="Success-Disable" className="text-white-50" disabled>Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav className="nav1 bg-danger mt-4 br-7" defaultActiveKey="danger-Active">
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="danger-Active" className="text-white" active>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="danger-Link-1" className="text-white">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="danger-Link-2" className="text-white">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="danger-Disable" className="text-white-50" disabled>Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav className="nav1 bg-secondary mt-4 br-7" defaultActiveKey="secondary-Active">
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="secondary-Active" className="text-white" active>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="secondary-Link-1" className="text-white">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="secondary-Link-2" className="text-white">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="secondary-Disable" className="text-white-50" disabled>Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav className="nav1 bg-yellow mt-4 br-7" defaultActiveKey="yellow-Active">
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="yellow-Active" className="text-white" active>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="yellow-Link-1" className="text-white">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="yellow-Link-2" className="text-white">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="yellow-Disable" className="text-white-50" disabled>Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
              <Collapse in={NavBG} className="mt-2">
                <pre>
                  <code>
                    {`
 <Nav className="nav1 bg-primary br-7" defaultActiveKey="Primary-Active">
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="Primary-Active" className="text-white" active>Active</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="Primary-Link-1" className="text-white">Link</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="Primary-Link-2" className="text-white">Link</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="Primary-Disable" className="text-white-50" disabled>Disabled</Nav.Link>
 </Nav.Item>
</Nav>
<Nav className="nav1 bg-info mt-4 br-7" defaultActiveKey="Info-Active">
 <Nav.Item className="nav-item1">
   <Nav.Link className="text-white active" eventKey="Info-Active">Active</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link className="text-white" eventKey="Info-Link-1">Link</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link className="text-white" eventKey="Info-Link-2" >Link</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link className="disabled text-white-50" eventKey="Info-Disable">Disabled</Nav.Link>
 </Nav.Item>
</Nav>
<Nav className="nav1 bg-success mt-4 br-7" defaultActiveKey="Success-Active">
 <Nav.Item className="nav-item1">
   <Nav.Link className="text-white active" eventKey="Success-Active" >Active</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="Success-Link-1" className="text-white">Link</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="Success-Link-2" className="text-white">Link</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="Success-Disable" className="text-white-50" disabled>Disabled</Nav.Link>
 </Nav.Item>
</Nav>
<Nav className="nav1 bg-danger mt-4 br-7" defaultActiveKey="danger-Active">
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="danger-Active" className="text-white" active>Active</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="danger-Link-1" className="text-white">Link</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="danger-Link-2" className="text-white">Link</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="danger-Disable" className="text-white-50" disabled>Disabled</Nav.Link>
 </Nav.Item>
</Nav>
<Nav className="nav1 bg-secondary mt-4 br-7" defaultActiveKey="secondary-Active">
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="secondary-Active" className="text-white" active>Active</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="secondary-Link-1" className="text-white">Link</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="secondary-Link-2" className="text-white">Link</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="secondary-Disable" className="text-white-50" disabled>Disabled</Nav.Link>
 </Nav.Item>
</Nav>
<Nav className="nav1 bg-yellow mt-4 br-7" defaultActiveKey="yellow-Active">
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="yellow-Active" className="text-white" active>Active</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="yellow-Link-1" className="text-white">Link</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="yellow-Link-2" className="text-white">Link</Nav.Link>
 </Nav.Item>
 <Nav.Item className="nav-item1">
   <Nav.Link eventKey="yellow-Disable" className="text-white-50" disabled>Disabled</Nav.Link>
 </Nav.Item>
</Nav>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </div>
  )
};

export default Navigation;

import React, { useState } from 'react';
import styles from './TooltipPopover.module.scss';
import { Button, Col, Card, OverlayTrigger, Row, Tooltip, Form, Popover, Collapse } from "react-bootstrap";
import PageHeader from '../../../Layouts/PageHeader/PageHeader';

const TooltipPopover = () => {

  // Tooltip DefaultpopOver
  const popoverData = [
    {
      id: "1",
      variant: "primary",

      placement: 'top'
    },
    {
      id: "2",
      variant: "success",

      placement: 'left'
    },
    {
      id: "3",
      variant: "danger",

      placement: 'right'
    },
    {
      id: "4",
      variant: "warning",

      placement: 'bottom'

    }
  ];

  // Static TooltipPopOver

  const StaticTooltipData = [
    {
      id: "1",
      variant: "primary",
      classname: 'bg-primary text-white',
      placement: 'top'
    },
    {
      id: "2",
      variant: "secondary",
      classname: 'bg-secondary text-white',
      placement: 'bottom'
    }
  ];

  // Colored Static TooltipPopOver

  const ColoredTooltipData = [
    {
      id: "1",
      variant: "primary",
      popoverclass: 'bg-primary',
      popheaderclass: 'bg-primary text-white',
      placement: 'top'
    },
    {
      id: "2",
      variant: "secondary",
      popoverclass: 'bg-secondary',
      classname: 'bg-secondary text-white',
      placement: 'bottom'
    }
  ];

  const [Default, setDefault] = useState(false);
  const [color, setcolor] = useState(false);
  const [popOver, setpopOver] = useState(false);
  const [ColorHead, setColorHead] = useState(false);
  const [FullColor, setFullColor] = useState(false);

  return (

    <div className={styles.TooltipPopover}>
      <PageHeader titles="Tooltip and Popover" active="Tooltip and Popover" items={['Advanced Elements']} />
      {/* <!-- Row --> */}
      <Row>
        <Col lg={12}>
          {/* <!-- div --> */}
          <Card id="Tooltip">
            <Card.Header>
              <Card.Title>
                Default Tooltip
              </Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setDefault(!Default)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <Form.Label className="mb-2">
                Static Example
              </Form.Label>
              <div className="tooltip-static-demo mb-4 border br-3">
                <Row>
                  <Col sm={6} lg={3}>
                    <Tooltip placement="top">Tooltip on the top</Tooltip>
                  </Col>
                  <Col sm={6} lg={3} className="mg-t-30 mg-sm-t-0">
                    <Tooltip placement="bottom">Tooltip on the bottom</Tooltip>
                  </Col>
                  <Col sm={6} lg={3} className="mg-t-30 mg-lg-t-0">
                    <Tooltip placement="left">Tooltip on the left</Tooltip>
                  </Col>
                  <Col sm={6} lg={3} className="mg-t-30 mg-lg-t-0">
                    <Tooltip placement="right">Tooltip on the right</Tooltip>
                  </Col>
                </Row>
              </div>
              {/* <!-- tooltip-static-demo --> */}
              <Form.Label className="mb-2">
                Example
              </Form.Label>
              <div className="bg-light p-3 border br-3">
                <Row className="text-center">
                  <Col sm={6} lg={3} className="mt-2 mb-2">
                    <OverlayTrigger placement="top" overlay={<Tooltip >Tooltip on top</Tooltip>}><Button className="ms-1" variant="primary">Hover me</Button></OverlayTrigger>
                  </Col>

                  <Col sm={6} lg={3} className="mt-2 mb-2">
                    <OverlayTrigger placement="bottom" overlay={<Tooltip >Tooltip on bottom</Tooltip>}><Button className="ms-1" variant="primary">Hover me</Button></OverlayTrigger>

                  </Col>
                  <Col sm={6} lg={3} className="mt-2 mb-2">
                    <OverlayTrigger placement="left" overlay={<Tooltip >Tooltip on left</Tooltip>}><Button className="ms-1" variant="primary">Hover me</Button></OverlayTrigger>

                  </Col>
                  <Col sm={6} lg={3} className="mt-2 mb-2">
                    <OverlayTrigger placement="right" overlay={<Tooltip >Tooltip on right</Tooltip>}><Button className="ms-1" variant="primary">Hover me</Button></OverlayTrigger>

                  </Col>
                </Row>
              </div>
              <Collapse in={Default} className="">
                <div id="example-collapse-text">
                      <pre>
                        <code>
                          {`
<div className="bg-light p-3 border br-3">
<Row className="text-center">
  <Col sm={6} lg={3} className="mt-2 mb-2">
    <OverlayTrigger placement="top" overlay={<Tooltip >Tooltip on top</Tooltip>}><Button className="ms-1" variant="primary">Hover me</Button></OverlayTrigger>
  </Col>

  <Col sm={6} lg={3} className="mt-2 mb-2">
    <OverlayTrigger placement="bottom" overlay={<Tooltip >Tooltip on bottom</Tooltip>}><Button className="ms-1" variant="primary">Hover me</Button></OverlayTrigger>

  </Col>
  <Col sm={6} lg={3} className="mt-2 mb-2">
    <OverlayTrigger placement="left" overlay={<Tooltip >Tooltip on left</Tooltip>}><Button className="ms-1" variant="primary">Hover me</Button></OverlayTrigger>

  </Col>
  <Col sm={6} lg={3} className="mt-2 mb-2">
    <OverlayTrigger placement="right" overlay={<Tooltip >Tooltip on right</Tooltip>}><Button className="ms-1" variant="primary">Hover me</Button></OverlayTrigger>

  </Col>
</Row>
</div>
`}
                        </code>
                      </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
          {/* <!-- /div --> */}
          {/* <!-- div --> */}
          <Card id="Tooltip1">
            <Card.Header>
              <Card.Title>
                Color Tooltip
              </Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setcolor(!color)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <Form.Label className="mb-2">
                Static Example
              </Form.Label>
              <div className="tooltip-static-demo mb-4 border br-3">
                <Row>
                  <Col sm={6} lg={3}>
                    <Tooltip className="tooltip-primary" placement="top">Tooltip on the top</Tooltip>
                  </Col>
                  <Col sm={6} lg={3} className="mg-t-30 mg-sm-t-0">
                    <Tooltip className="tooltip-secondary" placement="bottom">Tooltip on the bottom</Tooltip>
                  </Col>
                  <Col sm={6} lg={3} className="mg-t-30 mg-lg-t-0">
                    <Tooltip className="tooltip-danger" placement="left">Tooltip on the left</Tooltip>
                  </Col>
                  <Col sm={6} lg={3} className="mg-t-30 mg-lg-t-0">
                    <Tooltip className="tooltip-info" placement="right">Tooltip on the right</Tooltip>
                  </Col>
                </Row>
              </div>
              {/* <!-- tooltip-static-demo --> */}
              <Form.Label className="mb-2">
                Example
              </Form.Label>
              <div className="bg-light p-3 border br-3">
                <Row className="text-center">
                  <Col sm={6} lg={3} className="mt-2 mb-2">
                    <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary" >Tooltip on top</Tooltip>}><Button className="ms-1" variant="primary">Hover me</Button></OverlayTrigger>
                  </Col>
                  <Col sm={6} lg={3} className="mt-2 mb-2">
                    <OverlayTrigger placement="bottom" overlay={<Tooltip className="tooltip-secondary" >Tooltip on bottom</Tooltip>}><Button className="ms-1" variant="secondary">Hover me</Button></OverlayTrigger>
                  </Col>
                  <Col sm={6} lg={3} className="mt-2 mb-2">
                    <OverlayTrigger placement="left" overlay={<Tooltip className="tooltip-danger" >Tooltip on left</Tooltip>}><Button className="ms-1" variant="danger">Hover me</Button></OverlayTrigger>
                  </Col>
                  <Col sm={6} lg={3} className="mt-2 mb-2">
                    <OverlayTrigger placement="right" overlay={<Tooltip className="tooltip-info" >Tooltip on right</Tooltip>}><Button className="ms-1" variant="info">Hover me</Button></OverlayTrigger>
                  </Col>
                </Row>
              </div>
              <Collapse in={color} className="">
                <div id="example-collapse-text">
                  
                      <pre>
                        <code>
                          {`
<div className="bg-light p-3 border br-3">
<Row className="text-center">
  <Col sm={6} lg={3} className="mt-2 mb-2">
    <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary" >Tooltip on top</Tooltip>}><Button className="ms-1" variant="primary">Hover me</Button></OverlayTrigger>
  </Col>
  <Col sm={6} lg={3} className="mt-2 mb-2">
    <OverlayTrigger placement="bottom" overlay={<Tooltip className="tooltip-secondary" >Tooltip on bottom</Tooltip>}><Button className="ms-1" variant="secondary">Hover me</Button></OverlayTrigger>
  </Col>
  <Col sm={6} lg={3} className="mt-2 mb-2">
    <OverlayTrigger placement="left" overlay={<Tooltip className="tooltip-danger" >Tooltip on left</Tooltip>}><Button className="ms-1" variant="danger">Hover me</Button></OverlayTrigger>
  </Col>
  <Col sm={6} lg={3} className="mt-2 mb-2">
    <OverlayTrigger placement="right" overlay={<Tooltip className="tooltip-info" >Tooltip on right</Tooltip>}><Button className="ms-1" variant="info">Hover me</Button></OverlayTrigger>
  </Col>
</Row>
</div>
`}
                        </code>
                      </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
          {/* <!-- /div --> */}

          {/* <!-- div --> */}
          <Card>
            <Card.Header>
              <Card.Title>
                Default Popover
              </Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setpopOver(!popOver)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <Form.Label className="mb-2">
                Static Example
              </Form.Label>
              <div className="popover-static-demo mb-4 border br-3 pb-6">
                <Row className="row-sm">
                  <Col md={6} className="mt-4">
                    <Popover placement="top">
                      <Popover.Header as="h3">Popover top</Popover.Header>
                      <Popover.Body><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p></Popover.Body>
                    </Popover>
                  </Col>
                  <Col md={6} className="mt-4">
                    <Popover placement="left">
                      <Popover.Header as="h3">Popover Left</Popover.Header>
                      <Popover.Body><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p></Popover.Body>
                    </Popover>
                  </Col>
                  <Col md={6} className="mt-4">
                    <Popover placement="right">
                      <Popover.Header as="h3">Popover Right</Popover.Header>
                      <Popover.Body><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p></Popover.Body>
                    </Popover>
                  </Col>
                  <Col md={6} className="mt-4">
                    <Popover placement="bottom">
                      <Popover.Header as="h3">Popover Bottom</Popover.Header>
                      <Popover.Body><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p></Popover.Body>
                    </Popover>
                  </Col>
                </Row>
              </div>
              <Form.Label className="mb-2">
                Example
              </Form.Label>
              <div className="bg-light p-3 border br-3">
                <Row className="row-sm text-center">
                  {popoverData.map((item, k) => (
                    <Col sm={6} lg={3} className="mt-2 mb-2" key={k}>
                      <OverlayTrigger
                        trigger="click"

                        placement={item.placement}
                        overlay={
                          <Popover id={`popover-positioned-${item.placement}`} style={{ margin: "0px" }}>
                            <Popover.Header as="h3">{`Popover ${item.placement}`}</Popover.Header>
                            <Popover.Body>
                              Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                            </Popover.Body>
                          </Popover>
                        }
                      >
                        <Button variant={item.variant}>Click me</Button>
                      </OverlayTrigger>
                    </Col>
                  ))}

                </Row>
              </div>
              <Collapse in={popOver} className="">
                <div id="example-collapse-text">
                      <pre>
                        <code>
                          {`
  export function DefaultpopOver() {
    return (
      <>
        {popoverData.map((item:any, k:any) => (
          <Col sm={6} lg={3} className="mt-2 mb-2" key={k}>
          <OverlayTrigger
            trigger="click"
            
            placement={item.placement}
            overlay={
              <Popover id={popover-positioned-{item.placement}} style={{ margin: "0px" }}>
                <Popover.Header as="h3">{Popover {item.placement}}</Popover.Header>
                <Popover.Body>
                Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant={item.variant}>Click me</Button>
          </OverlayTrigger>
            </Col>
        ))}
      </>
    );
  }
`}
                        </code>
                      </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
          {/* <!-- /div --> */}

          {/* <!-- div --> */}
          <Card>
            <Card.Header>
              <Card.Title>
                Colored Head Popover
              </Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setColorHead(!ColorHead)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <Form.Label className="mb-2">
                Static Example
              </Form.Label>
              <div className="popover-static-demo mb-4 border br-3 pb-6">
                <Row className="row-sm">
                  <Col md={6}>
                    <Popover placement="top" className="popover-head-primary">
                      <Popover.Header as="h3">Popover top</Popover.Header>
                      <Popover.Body><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p></Popover.Body>
                    </Popover>
                  </Col>
                  <Col md={6} className="mt-5 mt-md-0">
                    <Popover placement="bottom" className="popover-head-secondary">
                      <Popover.Header as="h3">Popover Bottom</Popover.Header>
                      <Popover.Body><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p></Popover.Body>
                    </Popover>
                  </Col>
                </Row>
              </div>
              <Form.Label className="mb-2">
                Example
              </Form.Label>
              <div className="bg-light p-3 border br-3">
                <Row className="row-sm text-center">

                  {StaticTooltipData.map((item, k) => (
                    <Col sm={6} lg={3} className="mt-2 mb-2 text-center" key={k}>
                      <OverlayTrigger
                        trigger="click"
                        placement={item.placement}
                        overlay={
                          <Popover className='colored_Popover' id={`popover-positioned-${item.placement}`} style={{ margin: "0px" }}>
                            <Popover.Header className={item.classname} as="h3">{`Popover ${item.placement}`}</Popover.Header>
                            <Popover.Body>
                              Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                            </Popover.Body>
                          </Popover>
                        }
                      >
                        <Button variant={item.variant}>Click me</Button>
                      </OverlayTrigger>
                    </Col>
                  ))}

                </Row>
              </div>
              <Collapse in={ColorHead} className="">
                <div id="example-collapse-text">
                 
                      <pre>
                        <code>
                          {`
export function StaticTooltip() {
  

  return (
    <>
    {StaticTooltipData.map((item:any, k:any) => (
      <Col sm={6} lg={3} className="mt-2 mb-2 text-center" key={k}>
      <OverlayTrigger
        trigger="click"
        placement={item.placement}
        overlay={
          <Popover id={popover-positioned-{item.placement}} style={{ margin "0px" }}>
            <Popover.Header className={item.classname} as="h3">{Popover {item.placement}}</Popover.Header>
            <Popover.Body>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </Popover.Body>
          </Popover>
        }
      >
        <Button variant={item.variant}>Click me</Button>
      </OverlayTrigger>
        </Col>
    ))}
  </>
  );
}
`}
                        </code>
                      </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
          {/* <!-- /div --> */}

          {/* <!-- div --> */}
          <Card>
            <Card.Header>
              <Card.Title>
                Full Colored Popover
              </Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setFullColor(!FullColor)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <Form.Label className="mb-2">
                Static Example
              </Form.Label>
              <div className="popover-static-demo mb-4 border br-3 pb-6">
                <Row className="row-sm">
                  <Col md={6} className="mt-4">
                    <Popover placement="top" className="popover popover-primary">
                      <Popover.Header as="h3">Popover top</Popover.Header>
                      <Popover.Body><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p></Popover.Body>
                    </Popover>
                  </Col>
                  <Col md={6} className="mt-4">
                    <Popover placement="bottom" className="popover-secondary">
                      <Popover.Header as="h3">Popover Bottom</Popover.Header>
                      <Popover.Body><p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p></Popover.Body>
                    </Popover>
                  </Col>
                </Row>
              </div>
              <Form.Label className="mb-2">
                Example
              </Form.Label>
              <div className="bg-light p-3 border br-3">
                <Row className="row-sm text-center">
                  {ColoredTooltipData.map((item, k) => (
                    <Col sm={6} lg={3} className="mt-2 mb-2" key={k}>
                      <OverlayTrigger
                        trigger="click"
                        placement={item.placement}
                        overlay={
                          <Popover className={item.popoverclass} id={`popover-positioned-${item.placement}`} style={{ margin: "0px" }}>
                            <Popover.Body className="text-white">
                              <h4 className={item.popheaderclass} >{`Popover ${item.placement}`}</h4>
                              Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                            </Popover.Body>
                          </Popover>
                        }
                      >
                        <Button variant={item.variant}>Click me</Button>
                      </OverlayTrigger>
                    </Col>
                  ))}
                </Row>
              </div>
              <Collapse in={FullColor} className="">
                <div id="example-collapse-text">
                 
                      <pre>
                        <code>
                          {`
export function ColoredTooltip() {
  
  return (
    <>
    {ColoredTooltipData.map((item:any, k:any) => (
      <Col  sm={6} lg={3} className="mt-2 mb-2" key={k}>
      <OverlayTrigger
        trigger="click"
        placement={item.placement}
        overlay={
          <Popover className={item.popoverclass} id={popover-positioned-{item.placement}} style={{ margin: "0px" }}>
            <Popover.Body className="text-white">
              <h4 className={item.popheaderclass} >{Popover {item.placement}}</h4>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </Popover.Body>
          </Popover>
        }
      >
        <Button variant={item.variant}>Click me</Button>
      </OverlayTrigger>
        </Col>
    ))}
  </>
  );
}
`}
                        </code>
                      </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
          {/* <!-- /div --> */}

        </Col>
      </Row>
      {/* <!-- End Row-->  */}

    </div>
  )
};

export default TooltipPopover;

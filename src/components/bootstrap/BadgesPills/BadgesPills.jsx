import React, { useState } from 'react';
import { Badge, Button, Card, Row, Col, Form, Collapse } from 'react-bootstrap';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './BadgesPills.module.scss';


const BadgesPills = () => {

  const [Badges, setBadges] = useState(false);
  const [Pill, setPill] = useState(false);
  const [Gradient, setGradient] = useState(false);
  const [Gradientpill, setGradientpill] = useState(false);
  const [Buton, setButon] = useState(false);
  const [Rounded, setRounded] = useState(false);
  const [Heading, setHeading] = useState(false);
  const [color, setcolor] = useState(false);

  return (
  <div className={styles.BadgesPills}>
    <PageHeader titles="Badges" active="Badges" items={['Componets']} />
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Badges</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBadges(!Badges)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <p>Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
            <div className="example">
              <Badge bg="default">Default</Badge> {' '}
              <Badge bg="primary">Primary</Badge>{' '}
              <Badge bg="success">Success</Badge>{' '}
              <Badge bg="danger">Danger</Badge>{' '}
              <Badge bg="info">Info</Badge>{' '}
              <Badge bg="warning">Warning</Badge>{' '}

            </div>
            <Collapse in={Badges} className="mt-2">
                <pre>
                  <code>
                    {`
    <div className="example">
    <Badge bg="default">Default</Badge> {' '}
    <Badge bg="primary">Primary</Badge>{' '}
    <Badge bg="success">Success</Badge>{' '}
    <Badge bg="danger">Danger</Badge>{' '}
    <Badge bg="info">Info</Badge>{' '}
    <Badge bg="warning">Warning</Badge>{' '}

  </div>
`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Pill Badges</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setPill(!Pill)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <p className="text-muted card-sub-title">Use the <code className="highlighter-rouge">.rounded-pill</code> modifier className to make badges more rounded.</p>
            <div className="example">
              <Badge pill bg="default">Default</Badge> {' '}
              <Badge pill bg="primary">Primary</Badge>{' '}
              <Badge pill bg="success">Success</Badge>{' '}
              <Badge pill bg="danger">Danger</Badge>{' '}
              <Badge pill bg="info">Info</Badge>{' '}
              <Badge pill bg="warning">Warning</Badge>{' '}
            </div>
            <Collapse in={Pill} className="mt-2">
                <pre>
                  <code>
                    {`
     <div className="example">
     <Badge pill bg="default">Default</Badge> {' '}
     <Badge pill bg="primary">Primary</Badge>{' '}
     <Badge pill bg="success">Success</Badge>{' '}
     <Badge pill bg="danger">Danger</Badge>{' '}
     <Badge pill bg="info">Info</Badge>{' '}
     <Badge pill bg="warning">Warning</Badge>{' '}
   </div>
`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Gradient Badges</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setGradient(!Gradient)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <p>Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
            <div className="example">
              <Badge bg="default">Default</Badge> {' '}
              <Badge bg="primary-gradient">Primary</Badge>{' '}
              <Badge bg="success-gradient">Success</Badge>{' '}
              <Badge bg="danger-gradient">Danger</Badge>{' '}
              <Badge bg="info-gradient">Info</Badge>{' '}
              <Badge bg="warning-gradient">Warning</Badge>{' '}

            </div>
            <Collapse in={Gradient} className="mt-2">
                <pre>
                  <code>
                    {`
    <div className="example">
    <Badge bg="default">Default</Badge> {' '}
    <Badge bg="primary-gradient">Primary</Badge>{' '}
    <Badge bg="success-gradient">Success</Badge>{' '}
    <Badge bg="danger-gradient">Danger</Badge>{' '}
    <Badge bg="info-gradient">Info</Badge>{' '}
    <Badge bg="warning-gradient">Warning</Badge>{' '}

  </div>
`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Gradient Pill Badges</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setGradientpill(!Gradientpill)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <p className="text-muted card-sub-title">Use the <code className="highlighter-rouge">.rounded-pill</code> modifier className to make badges more rounded.</p>
            <div className="example">
              <Badge pill bg="default">Default</Badge> {' '}
              <Badge pill bg="primary-gradient">Primary</Badge>{' '}
              <Badge pill bg="success-gradient">Success</Badge>{' '}
              <Badge pill bg="danger-gradient">Danger</Badge>{' '}
              <Badge pill bg="info-gradient">Info</Badge>{' '}
              <Badge pill bg="warning-gradient">Warning</Badge>{' '}
            </div>
            <Collapse in={Gradientpill} className="mt-2">
                <pre>
                  <code>
                    {`
   <div className="example">
   <Badge pill bg="default">Default</Badge> {' '}
   <Badge pill bg="primary-gradient">Primary</Badge>{' '}
   <Badge pill bg="success-gradient">Success</Badge>{' '}
   <Badge pill bg="danger-gradient">Danger</Badge>{' '}
   <Badge pill bg="info-gradient">Info</Badge>{' '}
   <Badge pill bg="warning-gradient">Warning</Badge>{' '}
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

    {/* <!-- ROW-2 OPEN --> */}
    <Row>
      <Col xl={12}>
        <Card>
          <Card.Header>
            <Card.Title>Buttons with Badges</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setButon(!Buton)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <p>Badges can be used as part of links or buttons to provide a counter.</p>
            <div className="example2">

              <Button className="mt-1  mb-1 me-3" variant="primary">Notifications<Badge bg="white" className="text-primary ms-2">2</Badge></Button>

              <Button className="mt-1  mb-1 me-3" variant="secondary">Notifications<Badge bg="white" className="text-secondary ms-2">2</Badge></Button>

              <Button className="mt-1  mb-1 me-3" variant="success">Notifications<Badge bg="white" className="text-success ms-2">2</Badge></Button>

              <Button className="mt-1  mb-1 me-3" variant="info">Notifications<Badge bg="white" className="text-info ms-2">2</Badge></Button>

              <Button className="mt-1  mb-1 me-3" variant="warning">Notifications<Badge bg="white" className="text-warning ms-2">2</Badge></Button>

              <Button className="mt-1  mb-1 me-3" variant="danger">Notifications<Badge bg="white" className="text-danger ms-2">2</Badge></Button>
            </div>
            <Collapse in={Buton} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="example2">

 <Button className="mt-1  mb-1 me-3" variant="primary">Notifications<Badge bg="white" className="text-primary ms-2">2</Badge></Button>

 <Button className="mt-1  mb-1 me-3" variant="secondary">Notifications<Badge bg="white" className="text-secondary ms-2">2</Badge></Button>

 <Button className="mt-1  mb-1 me-3" variant="success">Notifications<Badge bg="white" className="text-success ms-2">2</Badge></Button>

 <Button className="mt-1  mb-1 me-3" variant="info">Notifications<Badge bg="white" className="text-info ms-2">2</Badge></Button>

 <Button className="mt-1  mb-1 me-3" variant="warning">Notifications<Badge bg="white" className="text-warning ms-2">2</Badge></Button>

 <Button className="mt-1  mb-1 me-3" variant="danger">Notifications<Badge bg="white" className="text-danger ms-2">2</Badge></Button>
</div>
`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={12}>
        <Card>
          <Card.Header>
            <Card.Title>Buttons with Rounded Badges</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setRounded(!Rounded)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <p>Badges can be used as part of links or buttons to provide a counter.</p>
            <div className="example">

              <Button variant="primary" className="position-relative me-5 mb-3"> Projects
                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle badge rounded-pill">20+</Badge>
                <span className="visually-hidden">unread messages</span></Button>


              <Button variant="secondary" className="position-relative me-5 mb-3"> Projects
                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle badge rounded-pill">20+</Badge>
                <span className="visually-hidden">unread messages</span></Button>

              <Button variant="success" className="position-relative me-5 mb-3"> Projects
                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle badge rounded-pill">20+</Badge>
                <span className="visually-hidden">unread messages</span></Button>

              <Button variant="info" className="position-relative me-5 mb-3"> Projects
                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle badge rounded-pill">20+</Badge>
                <span className="visually-hidden">unread messages</span></Button>

              <Button variant="warning" className="position-relative me-5 mb-3"> Projects
                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle badge rounded-pill">20+</Badge>
                <span className="visually-hidden">unread messages</span></Button>

              <Button variant="green" className="position-relative me-5 mb-3"> Projects
                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle badge rounded-pill">20+</Badge>
                <span className="visually-hidden">unread messages</span></Button>
            </div>
            <Collapse in={Rounded} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="example">

<Button variant="primary" className="position-relative me-5 mb-2"> Projects
  <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle badge rounded-pill">20+</Badge>
  <span className="visually-hidden">unread messages</span></Button>


<Button variant="secondary" className="position-relative me-5 mb-2"> Projects
  <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle badge rounded-pill">20+</Badge>
  <span className="visually-hidden">unread messages</span></Button>

<Button variant="success" className="position-relative me-5 mb-2"> Projects
  <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle badge rounded-pill">20+</Badge>
  <span className="visually-hidden">unread messages</span></Button>

<Button variant="info" className="position-relative me-5 mb-2"> Projects
  <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle badge rounded-pill">20+</Badge>
  <span className="visually-hidden">unread messages</span></Button>

<Button variant="warning" className="position-relative me-5 mb-2"> Projects
  <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle badge rounded-pill">20+</Badge>
  <span className="visually-hidden">unread messages</span></Button>

<Button variant="green" className="position-relative me-5 mb-2"> Projects
  <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle badge rounded-pill">20+</Badge>
  <span className="visually-hidden">unread messages</span></Button>
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
    {/* <!-- ROW-2 CLOSED --> */}

    {/* <!-- ROW-3 OPEN --> */}
    <Row>
      <Col md={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Heading Badges</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setHeading(!Heading)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <p>Badges scale to match the size of the immediate parent element by using relative font sizing and <code className="highlighter-rouge">em</code> units. As of v5, badges no longer have focus or hover styles for links.</p>
            <div className="example">


              <h1>Heading 01<Badge bg="default">New</Badge></h1>
              <h2>Heading 01<Badge bg="default">New</Badge></h2>
              <h3>Heading 01<Badge bg="default">New</Badge></h3>
              <h4>Heading 01<Badge bg="default">New</Badge></h4>
              <h5>Heading 01<Badge bg="default">New</Badge></h5>
              <h6>Heading 01<Badge bg="default">New</Badge></h6>
            </div>
            <Collapse in={Heading} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="example">
 <h1>Heading 01<Badge bg="default">New</Badge></h1>
 <h2>Heading 01<Badge bg="default">New</Badge></h2>
 <h3>Heading 01<Badge bg="default">New</Badge></h3>
 <h4>Heading 01<Badge bg="default">New</Badge></h4>
 <h5>Heading 01<Badge bg="default">New</Badge></h5>
 <h6>Heading 01<Badge bg="default">New</Badge></h6>
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
          <Card.Header>
            <Card.Title>Color Heading Badges</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setcolor(!color)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <p>Badges scale to match the size of the immediate parent element by using relative font sizing and <code className="highlighter-rouge">em</code> units. As of v5, badges no longer have focus or hover styles for links.</p>
            <div className="example">


              <h1 className="text-primary" >Heading 01<Badge bg="primary">New</Badge></h1>
              <h2 className="text-red" >Heading 01<Badge bg="danger">New</Badge></h2>
              <h3 className="text-yellow" >Heading 01<Badge bg="warning">New</Badge></h3>
              <h4 className="text-green" >Heading 01<Badge bg="success">New</Badge></h4>
              <h5 className="text-info" >Heading 01<Badge bg="info">New</Badge></h5>
              <h6 className="text-secondary" >Heading 01<Badge bg="secondary">New</Badge></h6>

            </div>
            <Collapse in={color} className="mt-2">
                <pre>
                  <code>
                    {`
    <div className="example">
    <h1 className="text-primary" >Heading 01<Badge bg="primary">New</Badge></h1>
    <h2 className="text-red" >Heading 01<Badge bg="danger">New</Badge></h2>
    <h3 className="text-yellow" >Heading 01<Badge bg="warning">New</Badge></h3>
    <h4 className="text-green" >Heading 01<Badge bg="success">New</Badge></h4>
    <h5 className="text-info" >Heading 01<Badge bg="info">New</Badge></h5>
    <h6 className="text-secondary" >Heading 01<Badge bg="secondary">New</Badge></h6>

  </div>

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-3 CLOSED --> */}
  </div>
)};

export default BadgesPills;




import React, { useState } from 'react';
import { ProgressBar, Row, Col, Card, Form, Collapse  } from 'react-bootstrap';
import styles from './Progress.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';

const Progress = () => {

  const [Basic, setBasic] = useState(false);
  const [Contextual, setContextual] = useState(false);
  const [label, setlabel] = useState(false);
  const [Progress, setProgress] = useState(false);
  const [Size, setSize] = useState(false);
  const [color, setcolor] = useState(false);
  const [Striped, setStriped] = useState(false);
  const [Animated, setAnimated] = useState(false);

  return (

  <div className={styles.Progress}>
    <PageHeader titles="Progress" active="Progress" items={['Advanced Elements']} /> 
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col xl={6} sm={12}>
        <Card>
          <Card.Header>
            <Card.Title className="me-2">Basic Progress</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBasic(!Basic)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="example">

              <ProgressBar className="mb-3" now={10} />

              <ProgressBar className="mb-3" now={20} />

              <ProgressBar className="mb-3" now={40} />

              <ProgressBar className="mb-3 " now={60} />

              <ProgressBar className="mb-3 " now={80} />
            </div>
                          <Collapse in={Basic} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="example">

 <ProgressBar className="mb-3" now={10} />

 <ProgressBar className="mb-3" now={20} />

 <ProgressBar className="mb-3" now={40} />

 <ProgressBar className="mb-3 " now={60} />

 <ProgressBar className="mb-3 " now={80} />
</div>
`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={6} sm={12}>
        <Card>
          <Card.Header>
            <Card.Title className="me-2">Contextual Progress</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setContextual(!Contextual)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="example">

              <ProgressBar variant="secondary-gradient" className="mb-3 " now={10} />

              <ProgressBar variant="danger-gradient" className="mb-3 " now={20} />

              <ProgressBar variant="warning-gradient" className="mb-3 " now={40} />

              <ProgressBar variant="success-gradient" className="mb-3 " now={60} />

              <ProgressBar variant="info-gradient" className="mb-3 " now={80} />
            </div>
                          <Collapse in={Contextual} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="example">

<ProgressBar variant="secondary-gradient" className="mb-3 " now={10} />

<ProgressBar variant="danger-gradient" className="mb-3 " now={20} />

<ProgressBar variant="warning-gradient" className="mb-3 " now={40} />

<ProgressBar variant="success-gradient" className="mb-3 " now={60} />

<ProgressBar variant="info-gradient" className="mb-3 " now={80} />
</div>

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={6} sm={12}>
        <Card>
          <Card.Header>
            <Card.Title className="me-2">Basic Progress with label</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setlabel(!label)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="example">

              <ProgressBar variant="default" className="mb-3 " now={20} label={`${10}%`} />

              <ProgressBar variant="secondary" className="mb-3 " now={30} label={`${20}%`} />

              <ProgressBar variant="success" className="mb-3 " now={50} label={`${40}%`} />

              <ProgressBar variant="warning" className="mb-3 " now={70} label={`${60}%`} />

              <ProgressBar variant="info" className="mb-3 " now={85} label={`${80}%`} />
            </div>
                          <Collapse in={label} className="mt-2">
                <pre>
                  <code>
                    {`
  <div className="example">

  <ProgressBar variant="default" className="mb-3 " now={20} label={{10}} />

  <ProgressBar variant="secondary" className="mb-3 " now={30} label={{20}} />

  <ProgressBar variant="success" className="mb-3 " now={50} label={{40}} />

  <ProgressBar variant="warning" className="mb-3 " now={70} label={{60}} />

  <ProgressBar variant="info" className="mb-3 " now={85} label={{80}} />
</div>

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={6} sm={12}>
        <Card>
          <Card.Header>
            <Card.Title className="me-2">Contextual Progress with label</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setProgress(!Progress)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="example">

              <ProgressBar variant="pink" className="mb-3 " now={20} label={`${7}%`} />

              <ProgressBar variant="green" className="mb-3 " now={30} label={`${20}%`} />

              <ProgressBar variant="yellow" className="mb-3 " now={50} label={`${40}%`} />

              <ProgressBar variant="blue" className="mb-3 " now={70} label={`${60}%`} />

              <ProgressBar variant="orange" className="mb-3 " now={85} label={`${80}%`} />
            </div>
                          <Collapse in={Progress} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="example">

 <ProgressBar variant="pink" className="mb-3 " now={20} label={{7}} />

 <ProgressBar variant="green" className="mb-3 " now={30} label={{20}} />

 <ProgressBar variant="yellow" className="mb-3 " now={50} label={{40}} />

 <ProgressBar variant="blue" className="mb-3 " now={70} label={{60}} />

 <ProgressBar variant="orange" className="mb-3 " now={85} label={{80}} />
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
    {/* <!-- ROW-1 OPEN --> */}

    {/* <!-- ROW-2 OPEN --> */}
    <Row>
      <Col xl={6} sm={12}>
        <Card>
          <Card.Header>
            <Card.Title className="me-2">Progress Sizes</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSize(!Size)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="example">

              <ProgressBar variant="blue" className="mb-3 progress-xs" now={80} />

              <ProgressBar variant="blue" className="mb-3 progress-sm" now={80} />

              <ProgressBar variant="blue" className="mb-3 progress-md" now={80} />

              <ProgressBar variant="blue" className="mb-3 progress-lg" now={80} />

            </div>
                          <Collapse in={Size} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="example">

 <ProgressBar variant="blue" className="mb-3 progress-xs" now={80} />

 <ProgressBar variant="blue" className="mb-3 progress-sm" now={80} />

 <ProgressBar variant="blue" className="mb-3 progress-md" now={80} />

 <ProgressBar variant="blue" className="mb-3 progress-lg" now={80} />

</div>

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={6} sm={12}>
        <Card>
          <Card.Header>
            <Card.Title className="me-2">Mixed color Progress with Sizes</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setcolor(!color)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="example">

              <ProgressBar className="progress-xs mb-3">
                <ProgressBar variant="orange" now={5} />
                <ProgressBar variant="warning" now={5} />
                <ProgressBar variant="info" now={5} />
              </ProgressBar>

              <ProgressBar className="progress-sm mb-3">
                <ProgressBar variant="pink" now={10} />
                <ProgressBar variant="warning" now={15} />
                <ProgressBar variant="teal" now={15} />
              </ProgressBar>

              <ProgressBar className="progress-md mb-3">
                <ProgressBar variant="pink" now={15} />
                <ProgressBar variant="blue" now={20} />
                <ProgressBar variant="cyan" now={30} />
              </ProgressBar>

              <ProgressBar className="progress-lg mb-3">
                <ProgressBar variant="green" now={30} />
                <ProgressBar variant="pink" now={20} />
                <ProgressBar variant="orange" now={40} />
              </ProgressBar>
            </div>
                          <Collapse in={color} className="mt-2">
                <pre>
                  <code>
                    {`
  <div className="example">

  <ProgressBar className="progress-xs mb-3">
    <ProgressBar variant="orange" now={5} />
    <ProgressBar variant="warning" now={5} />
    <ProgressBar variant="info" now={5} />
  </ProgressBar>

  <ProgressBar className="progress-sm mb-3">
    <ProgressBar variant="pink" now={10} />
    <ProgressBar variant="warning" now={15} />
    <ProgressBar variant="teal" now={15} />
  </ProgressBar>

  <ProgressBar className="progress-md mb-3">
    <ProgressBar variant="pink" now={15} />
    <ProgressBar variant="blue" now={20} />
    <ProgressBar variant="cyan" now={30} />
  </ProgressBar>

  <ProgressBar className="progress-lg mb-3">
    <ProgressBar variant="green" now={30} />
    <ProgressBar variant="pink" now={20} />
    <ProgressBar variant="orange" now={40} />
  </ProgressBar>
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
      <Col xl={6} sm={12}>
        <Card>
          <Card.Header>
            <Card.Title className="me-2">Striped Progress</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setStriped(!Striped)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="example">

              <ProgressBar variant="pink" now={20} animated className="mb-3" />

              <ProgressBar variant="blue-1" animated now={20} className="mb-3" />

              <ProgressBar variant="yellow-1" animated now={45} label={`${40}%`} className="mb-3" />

              <ProgressBar variant="green-1" animated now={65} label={`${60}%`} className="mb-3" />

            </div>
                          <Collapse in={Striped} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="example">

 <ProgressBar variant="pink" now={20} animated className="mb-3" />

 <ProgressBar variant="blue-1" animated now={20} className="mb-3" />

 <ProgressBar variant="yellow-1" animated now={45} label={{40}} className="mb-3" />

 <ProgressBar variant="green-1" animated now={65} label={{60}} className="mb-3" />

</div>

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col xl={6} sm={12}>
        <Card>
          <Card.Header>
            <Card.Title className="me-2">Animated Progress</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setAnimated(!Animated)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="example">
              <ProgressBar className="progress-md mb-3">
                <ProgressBar className="progress-bar-indeterminate bg-pink"></ProgressBar>
              </ProgressBar>
              <ProgressBar className="progress-md mb-3">
                <ProgressBar className="progress-bar-indeterminate bg-yellow-1"></ProgressBar>
              </ProgressBar>
              <ProgressBar className="progress-md mb-3">
                <ProgressBar className="progress-bar-indeterminate bg-blue-1"></ProgressBar>
              </ProgressBar>
              <ProgressBar className="progress-md">
                <ProgressBar className="progress-bar-indeterminate bg-purple-1"></ProgressBar>
              </ProgressBar>
            </div>
                          <Collapse in={Animated} className="mt-2">
                <pre>
                  <code>
                    {`
 <div className="example">
 <ProgressBar className="progress-md mb-3">
   <ProgressBar className="progress-bar-indeterminate bg-pink"></ProgressBar>
 </ProgressBar>
 <ProgressBar className="progress-md mb-3">
   <ProgressBar className="progress-bar-indeterminate bg-yellow-1"></ProgressBar>
 </ProgressBar>
 <ProgressBar className="progress-md mb-3">
   <ProgressBar className="progress-bar-indeterminate bg-blue-1"></ProgressBar>
 </ProgressBar>
 <ProgressBar className="progress-md">
   <ProgressBar className="progress-bar-indeterminate bg-purple-1"></ProgressBar>
 </ProgressBar>
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
    {/* <!-- ROW-3 CLOSED --> */}
  </div>
)
};

export default Progress;

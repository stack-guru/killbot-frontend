import React, { useState } from 'react';
import styles from './Alerts.module.scss';
import { Card, Row, Col, Alert, Form, Collapse } from 'react-bootstrap';
import { alertCard, DefaultAlertList, AlertData, LinkAlertList, IconAlertList, AlertList, AvatarList, IconDismissList } from '../../../Data/bootstrap/booststrapAlertsData';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Link } from "react-router-dom";

const BootstrapAlerts = () => {

  // const [showdata, setshowdata] = useState(alertCard);
  // function handleAlertRemove(id) {
  //   const RemoveData = showdata.filter((idx) => idx.id !== id);
  //   setshowdata(RemoveData);
  // }

  const [mainidx, setMainidx] = useState(alertCard);
	function handleAlertRemove(id) {
		const RemoveData = mainidx.filter((idx) => idx.id !== id);
		setMainidx(RemoveData);
    // console.log(RemoveData);
	}

  //Default alerts

  const [defaultOpen, setdefaultOpen] = useState(false);

  //Multi icon alerts

  const [multiOpen, setmultiOpen] = useState(false);

  //Link in alerts
  const [linkOpen, setlinkOpen] = useState(false);
  const [list, setList] = useState(LinkAlertList);
  const handleLinkRemove = (id) => {
    const newList = list.filter((lit) => lit.id !== id);
    setList(newList);
  }

  //Alert with icon

  const [alertOpen, setalertOpen] = useState(false);
  const [alertList, setalertList] = useState(IconAlertList);
  const handleAlertRemove1 = (id) => {
    const newList = alertList.filter((lit) => lit.id !== id);
    setalertList(newList);
  }

  // Alerts With avatar

  const [avatarOpen, setavatarOpen] = useState(false);
  const [avatarList, setavatarList] = useState(AvatarList);

  const handleavatarRemove = (id) => {
    const newList = avatarList.filter((lit) => lit.id !== id);
    setavatarList(newList);
  }

  //  Alerts Remove style

  const [idx, setidx] = useState(AlertData);
  const [open, setOpen] = useState(false);
  function handleRemove(id) {
    const RemoveData = idx.filter((idx) => idx.id !== id);
    setidx(RemoveData);
  }

  //Alerts With Icons Dismissing

  const [IconOpen, setIconOpen] = useState(false);
  const [IconList, setIconList] = useState(IconDismissList);
  const handlesetIconRemove = (id) => {
    const newList = IconList.filter((lit) => lit.id !== id);
    setIconList(newList);
  }
  return (

    <div className={styles.Alerts}>
      <PageHeader titles="Alerts" active="Alerts" items={['Componets']} />
      {/* <!-- ROW-1 OPEN --> */}
      <Row>
        {mainidx.map((idx) => (
          <Col xl={3} sm={6} key={Math.random()}>
            <Alert className="bg-white border p-0 pb-3 mb-5">
              <Card.Header className="border-0 pt-3">
                <div className="card-options">
                  <Link to="#" onClick={() => { handleAlertRemove(idx.id) }}><i className="fe fe-x icon-dimiss"></i></Link>
                </div>
              </Card.Header>

              <Card.Body className="text-center">
                {idx.icon}
                <h4 className="mb-0 mt-3 text-dark">{idx.title}</h4>
                <Card.Text className="text-dark">{idx.title}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center border-0 pt-0">
                <Row>
                  <div className="text-center">
                    <Link to="#" className="btn btn-white me-2">cancel</Link>
                    <Link to="#" className={`btn btn-${idx.color}`}>{idx.buttonName}</Link>
                  </div>
                </Row>
              </Card.Footer>
            </Alert>
          </Col>
        ))}
      </Row>
      {/* <!-- ROW-1 CLOSED --> */}

      {/* <!-- ROW-2 OPEN --> */}
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Default alerts</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Add <code className="highlighter-rouge">className="alert alert-primary|secondary|success|info|warning|danger"</code> use one of the <b>required</b> className.</p>
                <div className="example">

                  <Form className="mb-3 d-flex ms-auto">
                    <Form.Check
                      type='switch'
                      label="Show Code"
                      id="custom-switch"
                      onClick={() => setdefaultOpen(!defaultOpen)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>

                  {DefaultAlertList.map((item, k) => (
                    <React.Fragment key={k}>
                      <Alert
                        className=""
                        variant={item.variant}
                      >
                        {" "}
                        {item.text}
                      </Alert>
                    </React.Fragment>
                  ))}
                  <Collapse in={defaultOpen} className="">
                    <div id="example-collapse-text">
                      <pre>
                        <code>
                          {`
  <React.Fragment>
  {list.map((item, k) => (
    <React.Fragment key={k}>
      <Alert
        className=""
        variant={item.variant}
      >
        {" "}
         {item.text}
      </Alert>
    </React.Fragment>
  ))}
</React.Fragment>
`}
                        </code>
                      </pre>
                    </div>
                  </Collapse>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Links in alerts</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Add <code className="highlighter-rouge">.alert-link</code> className to quickly provide matching colored links within any alert</p>
                <div className="example">
                  <Form className="mb-3 d-flex ms-auto">
                    <Form.Check
                      type='switch'
                      label="Show Code"
                      id="custom-switch"
                      onClick={() => setlinkOpen(!linkOpen)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>

                  {list.map((item, k) => (
                    <React.Fragment key={k}>
                      <Alert variant={item.variant} className="alert-dismissible">
                      <span><i className="fe fe-x icon-dimiss" onClick={() => handleLinkRemove(item.id)}></i></span>
                        <strong>{item.show}</strong> {item.text} <Alert.Link href="#" className="alert-link">{item.text2}</Alert.Link>
                      </Alert>
                    </React.Fragment>
                  ))}
                  <Collapse in={linkOpen} className="">
                    <div id="example-collapse-text">
                      <pre>
                        <code>
                          {`
export const LinkAlert = () => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(LinkAlertList);
  const handleRemove =(id)=> {
    const newList = list.filter((lit) =>  lit.id !== id);
    setList(newList);
  }
  return (
    <React.Fragment>
    {list.map((item, k) => (
      <React.Fragment key={k}>
        <Alert variant={item.variant}  className="alert-dismissible">
      <strong>{item.show}</strong> {item.text} <Alert.Link href="#" className="alert-link">{item.text2}</Alert.Link>
      <span><i className="fe fe-x icon-dimiss" onClick={() => handleRemove(item.id)}></i></span>
    </Alert>
      </React.Fragment>
    ))}
    </React.Fragment>
  );
};
`}
                        </code>
                      </pre>
                    </div>
                  </Collapse>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-2 CLOSED --> */}

      {/* <!-- ROW-3 OPEN --> */}
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Alert with icon</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Add <code className="highlighter-rouge">.alert-icon</code> className.</p>
                <div className="example">
                  <Form className="mb-3 d-flex ms-auto">
                    <Form.Check
                      type='switch'
                      label="Show Code"
                      id="custom-switch"
                      onClick={() => setalertOpen(!alertOpen)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>

                  {alertList.map((item, k) => (
                    <React.Fragment key={k}>
                      <Alert variant={item.variant} className="alert-dismissible">
                        <span>
                      <i className="fe fe-x icon-dimiss" onClick={() => handleAlertRemove1(item.id)}></i>
                      </span>
                        {item.icon}{item.text}
                        
                      </Alert>
                    </React.Fragment>
                  ))}
                  <Collapse in={alertOpen} className="">
                    <div id="example-collapse-text">
                      <pre>
                        <code>
                          {`
    export const LinkAlert = () => {
      const [open, setOpen] = useState(false);
      const [list, setList] = useState(LinkAlertList);
      const handleRemove =(id)=> {
        const newList = list.filter((lit) =>  lit.id !== id);
        setList(newList);
      }
      return (
        <React.Fragment>
        {list.map((item, k) => (
          <React.Fragment key={k}>
            <Alert variant={item.variant}  className="alert-dismissible">
          <strong>{item.show}</strong> {item.text} <Alert.Link href="#" className="alert-link">{item.text2}</Alert.Link>
          <span><i className="fe fe-x icon-dimiss" onClick={() => handleRemove(item.id)}></i></span>
        </Alert>
          </React.Fragment>
        ))}
        </React.Fragment>
      );
    };
    `}
                        </code>
                      </pre>
                    </div>
                  </Collapse>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Alert with avatar</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Add <code className="highlighter-rouge">.alert-avatar</code> className.</p>
                <div className="example">
                  <Form className="mb-3 d-flex ms-auto">
                    <Form.Check
                      type='switch'
                      label="Show Code"
                      id="custom-switch"
                      onClick={() => setavatarOpen(!avatarOpen)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>

                  {avatarList.map((item, k) => (
                    <React.Fragment key={k}>
                      <Alert variant={item.variant} className={item.classname}>
                      <span><i className="fe fe-x icon-dimiss" onClick={() => handleavatarRemove(item.id)}></i></span>
                        <img className="avatar brround cover-image" alt='' src={item.pic} /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </Alert>
                    </React.Fragment>
                  ))}
                  <Collapse in={avatarOpen} className="">
                    <div id="example-collapse-text">
                      <pre>
                        <code>
                          {`
export const LinkAlert = () => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(AvatarList);
  const handleRemove =(id)=> {
    const newList = list.filter((lit) =>  lit.id !== id);
    setList(newList);
  }
  return (
    <React.Fragment>
       {list.map((item, k) => (
            <React.Fragment key={k}>
          <Alert variant={item.variant} className={item.classname}>
      <img className="avatar brround cover-image" alt='' src={item.pic} /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      <span><i className="fe fe-x icon-dimiss" onClick={() => handleRemove(item.id)}></i></span>
    </Alert>
            </React.Fragment>
          ))}
      </React.Fragment>
  );
};
`}
                        </code>
                      </pre>
                    </div>
                  </Collapse>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-3 CLOSED --> */}

      {/* <!-- ROW-4 OPEN --> */}
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Alerts With Icons</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Add <code className="highlighter-rouge">.alert-avatar</code> className.</p>
                <div className="example">
                  <Form className="mb-3 d-flex ms-auto">
                    <Form.Check
                      type='switch'
                      label="Show Code"
                      id="custom-switch"
                      onClick={() => setmultiOpen(!multiOpen)}
                      className="showcode d-flex ms-auto"
                    />
                  </Form>

                  {AlertList.map((item, k) => (
                    <React.Fragment key={k}>
                      <Alert variant={item.variant} className={item.classname} role="alert">
                        <span className="alert-inner--icon mx-2">{item.icon}</span>
                        <span className="alert-inner--text"><strong>{item.show}</strong> This is a warning alert—check it out that has an icon too!</span>
                      </Alert>
                    </React.Fragment>
                  ))}
                  <Collapse in={multiOpen} className="">
                    <div id="example-collapse-text">
                      <pre>
                        <code>
                          {`
export const LinkAlert = () => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(AlertList);
  const handleRemove =(id)=> {
    const newList = list.filter((lit) =>  lit.id !== id);
    setList(newList);
  }
  return (
    <React.Fragment>
    {list.map((item, k) => (
    <React.Fragment key={k}>
    <Alert className={item.classname} variant={item.variant} >
    <span className="alert-inner--icon">{item.icon}</span>
    <span className="alert-inner--text"><strong>{item.show}</strong> This is a default alert—check it out!</span>
    <span><i className="fe fe-x icon-dimiss" onClick={() => handleRemove(item.id)}></i></span>
  </Alert>
      </React.Fragment>
    ))}
  </React.Fragment>
  );
};
`}
                        </code>
                      </pre>
                    </div>
                  </Collapse>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title className="mb-0">Alerts With Icons Dismissing</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Add <code className="highlighter-rouge">.alert-dismissible</code> className.</p>
                <div className="example">
                  <Form className="mb-3 d-flex ms-auto">
                    <Form.Check
                      type='switch'
                      label="Show Code"
                      id="custom-switch"
                      onClick={() => setIconOpen(!IconOpen)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
                  {IconList.map((item, k) => (
                    <React.Fragment key={k}>
                      <Alert className={item.classname} variant={item.variant} >
                      <span><i className="fe fe-x icon-dimiss" onClick={() => handlesetIconRemove(item.id)}></i></span>
                        <span className="alert-inner--icon mx-2">{item.icon}</span>
                        <span className="alert-inner--text"><strong>{item.show}</strong> This is a default alert—check it out!</span>
                        
                      </Alert>
                    </React.Fragment>
                  ))}
                  <Collapse in={IconOpen} className="">
                    <div id="example-collapse-text">
                      <pre>
                        <code>
                          {`
export const LinkAlert = () => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(AlertList);
  const handleRemove =(id)=> {
    const newList = list.filter((lit) =>  lit.id !== id);
    setList(newList);
  }
  return (
    <React.Fragment>
    {list.map((item, k) => (
    <React.Fragment key={k}>
    <Alert className={item.classname} variant={item.variant} >
    <span className="alert-inner--icon">{item.icon}</span>
    <span className="alert-inner--text"><strong>{item.show}</strong> This is a default alert—check it out!</span>
    <span><i className="fe fe-x icon-dimiss" onClick={() => handleRemove(item.id)}></i></span>
  </Alert>
      </React.Fragment>
    ))}
  </React.Fragment>
  );
};
`}
                        </code>
                      </pre>
                    </div>
                  </Collapse>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-4 CLOSED --> */}

      {/* <!-- ROW-5 OPEN --> */}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Alerts style</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap mb-4">
                <div className="users">
                  <Form className="mb-3 d-flex ms-auto">
                    <Form.Check
                      type='switch'
                      label="Show Code"
                      id="custom-switch"
                      onClick={() => setOpen(!open)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
                  {idx.map((item) => (
                    <Alert key={item.id} variant={`${item.color}`} onClick={() => handleRemove(item.id)}>
                      <span className="ms-auto float-end" onClick={() => handleRemove(item.id)} ><i className={`${item.color} fe fe-x ms-auto`} ></i></span>
                      {item.icon}
                      <strong className='ps-3'>{item.Title}</strong>
                      
                      <hr />
                      <p>{item.description}</p>
                    </Alert>
                  ))}
                  <Collapse in={open} className="">
                    <div id="example-collapse-text">
                      <pre>
                        <code>
                          {`
export const LinkAlert = () => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(AlertList);
  const handleRemove =(id)=> {
    const newList = list.filter((lit) =>  lit.id !== id);
    setList(newList);
  }
  return (
    <React.Fragment>
    {list.map((item, k) => (
    <React.Fragment key={k}>
    <Alert key={item.id} variant={{item.color}} onClick={() => handleRemove(item.id)} show={show}>
    {item.icon}
    <strong>{item.Title}</strong>
    <span className="d-flex ms-auto" onClick={() => handleRemove(item.id)} ><i className={{item.color} fe fe-x ms-auto} ></i></span>
    <hr />
    <p>{item.description}</p>
  </Alert>
      </React.Fragment>
    ))}
  </React.Fragment>
  );
};
`}
                        </code>
                      </pre>
                    </div>
                  </Collapse>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-5 CLOSED --> */}

    </div>
  )
};

export default BootstrapAlerts;

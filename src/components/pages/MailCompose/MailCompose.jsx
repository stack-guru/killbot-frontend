import React from 'react';
import styles from './MailCompose.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Link } from 'react-router-dom';
import { Row, Col, Card, ListGroup, Badge, Form, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';


const MailCompose = () => {

  return (

  <div className={styles.MailCompose}>
    <PageHeader titles="Email-Compose" active="Email-Compose" items={['Pages']} />
    {/* <!-- Row --> */}
    <Row>
      <Col xl={3}>
        <Card>
          <ListGroup className="list-group-transparent mb-0 mail-inbox pb-3" defaultActiveKey='#link'>
            <div className="mt-4 mb-4 mx-4 text-center">
              <Link to={`${process.env.PUBLIC_URL}/pages/mailinbox`} className="btn btn-primary btn-lg d-grid">Inbox</Link>
            </div>
            <Link to={`${process.env.PUBLIC_URL}/pages/mailinbox`} className=""><ListGroup.Item eventKey='#link' className="d-flex align-items-center mx-4">
              <span className="icons"><i className="ri-mail-line"></i></span> Inbox <Badge bg='secondary' className="ms-auto bradius">14</Badge>
            </ListGroup.Item></Link>
            <Link to='#'><ListGroup.Item eventKey="#link1" className="d-flex align-items-center mx-4">
              <span className="icons"><i className="ri-mail-open-line"></i></span> Drafts
            </ListGroup.Item></Link>
            <Link to='#'><ListGroup.Item eventKey="#link2" className="d-flex align-items-center mx-4">
              <span className="icons"><i className="ri-star-line"></i></span> Starred <Badge bg='success' className="ms-auto bradius">03</Badge>
            </ListGroup.Item></Link>
            <Link to='#'><ListGroup.Item eventKey="#link3" className="d-flex align-items-center mx-4">
              <span className="icons"><i className="ri-price-tag-3-line"></i></span> Tags
            </ListGroup.Item></Link>
            <Link to='#'><ListGroup.Item eventKey="#link4" className="d-flex align-items-center mx-4">
              <span className="icons"><i className="ri-mail-send-line"></i></span> Sent Mail
            </ListGroup.Item></Link>
            <Link to='#'><ListGroup.Item eventKey="#link5" className="d-flex align-items-center mx-4">
              <span className="icons"><i className="ri-delete-bin-line"></i></span> Trash
            </ListGroup.Item></Link>
          </ListGroup>
          <Card.Body className="border-top p-0 py-3">
            <ListGroup className="list-group-transparent mb-0 mail-inbox mx-4">
              <ListGroup.Item className="list-group-item-action d-flex align-items-center py-2">
                <span className="w-3 h-3 brround bg-primary me-2"></span> Friends
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-action d-flex align-items-center py-2">
                <span className="w-3 h-3 brround bg-secondary me-2"></span> Family
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-action d-flex align-items-center py-2">
                <span className="w-3 h-3 brround bg-success me-2"></span> Social
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-action d-flex align-items-center py-2">
                <span className="w-3 h-3 brround bg-info me-2"></span> Office
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-action d-flex align-items-center py-2">
                <span className="w-3 h-3 brround bg-warning me-2"></span> Work
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-action d-flex align-items-center py-2">
                <span className="w-3 h-3 brround bg-danger me-2"></span> Settings
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={9}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Compose new message</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Row className="align-items-center">
                  <Form.Label className="col-xl-2">To</Form.Label>
                  <Col xl={10}>
                    <Form.Control type="text" className='my-2' />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row className="align-items-center">
                  <Form.Label className="col-xl-2">CC</Form.Label>
                  <Col xl={10}>
                    <Form.Control type="text" className='my-2' />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row className="align-items-center">
                  <Form.Label className="col-xl-2">BC</Form.Label>
                  <Col xl={10}>
                    <Form.Control type="text" className='my-2' />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row className="align-items-center">
                  <Form.Label className="col-xl-2">Subject</Form.Label>
                  <Col xl={10}>
                    <Form.Control type="text" className='my-2' />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Form.Label className="col-xl-2">Message</Form.Label>
                  <Col xl={10}>
                    <textarea rows={10} className="form-control my-2"></textarea>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer className="d-sm-flex">
            <div className="mt-2 mb-2">
              <OverlayTrigger placement="top" overlay={<Tooltip >Attach</Tooltip>}><Button className="btn-svg me-1" variant="light"><span className="ri-attachment-2"></span></Button></OverlayTrigger>

              <OverlayTrigger placement="top" overlay={<Tooltip >Link</Tooltip>}><Button className="btn-svg me-1" variant="light"><span className="ri-link"></span></Button></OverlayTrigger>

              <OverlayTrigger placement="top" overlay={<Tooltip >Photos</Tooltip>}><Button className="btn-svg me-1" variant="light"><span className="ri-image-line"></span></Button></OverlayTrigger>

              <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}><Button className="btn-svg me-1" variant="light"><span className="ri-delete-bin-line"></span></Button></OverlayTrigger>
            </div>
            <div className="btn-list ms-auto my-auto">
              <Button variant='danger' className="btn-space mb-0">Cancel</Button>
              <Button variant='primary' className="btn-space mb-0">Send message</Button>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
    {/* <!--End Row --> */}
  </div>
)
  };

export default MailCompose;

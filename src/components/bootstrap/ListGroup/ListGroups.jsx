import React from 'react';
import { Badge, Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import styles from './ListGroup.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';

const ListGroups = () => {

  return (

  <div className={styles.ListGroup}>
    <PageHeader titles="List Group" active="List Group" items={['Componets']} /> 
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Basic List Group</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <ListGroup>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>

            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Active List item</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">

              <ListGroup>
                <ListGroupItem active>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}

    {/* <!-- ROW-2 OPEN --> */}
    <Row>
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Order list</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">

              <ListGroup as="ol" numbered>
                <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item as="li">Vestibulum at eros</ListGroup.Item>
              </ListGroup>

            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Unorder list</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <ListGroup as="ul">
                <ListGroupItem as="li" className="listunorder">Cras justo odio</ListGroupItem>
                <ListGroupItem as="li" className="listunorder">Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem as="li" className="listunorder">Morbi leo risus</ListGroupItem>
                <ListGroupItem as="li" className="listunorder">Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem as="li" className="listunorder">Vestibulum at eros</ListGroupItem>
              </ListGroup>
            </div>  
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Order list</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <ListGroup as="ul">
                <ListGroupItem as="li" className="listorder1">Cras justo odio</ListGroupItem>
                <ListGroupItem as="li" className="listorder1">Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem as="li" className="listorder1">Morbi leo risus</ListGroupItem>
                <ListGroupItem as="li" className="listorder1">Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem as="li" className="listorder1">Vestibulum at eros</ListGroupItem>
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Unorder list</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <ListGroup as="ul">
                <ListGroupItem as="li" className="listunorder1">Cras justo odio</ListGroupItem>
                <ListGroupItem as="li" className="listunorder1">Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem as="li" className="listunorder1">Morbi leo risus</ListGroupItem>
                <ListGroupItem as="li" className="listunorder1">Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem as="li" className="listunorder1">Vestibulum at eros</ListGroupItem>
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
    </Row>
    {/* <!-- ROW-2 CLOSED --> */}

    {/* <!-- ROW-3 OPEN --> */}
    <Row>
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Disabled List item</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">

              <ListGroup as="ol" >
                <ListGroup.Item as="li" disabled>Cras justo odio</ListGroup.Item>
                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item as="li">Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Contextual classes with List Group</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <ListGroup as="ul">
                <ListGroup.Item >Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item variant='success'>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item variant='info'>Cras sit amet nibh libero</ListGroup.Item>
                <ListGroup.Item variant='warning'>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item variant='danger'>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
    </Row>
    {/* <!-- ROW-3 CLOSED --> */}

    {/* <!-- ROW-4 OPEN --> */}
    <Row>
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>List Group with icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">

              <ListGroup as="ol">
                <ListGroup.Item as="li"><i className="fa fa-check text-muted me-2"></i>Cras justo odio</ListGroup.Item>
                <ListGroup.Item as="li"><i className="fa fa-check text-muted me-2"></i>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li"><i className="fa fa-check text-muted me-2"></i>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item as="li"><i className="fa fa-check text-muted me-2"></i>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item as="li"><i className="fa fa-check text-muted me-2"></i>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* <!-- COL END --> */}
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>List Group with colored icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">

              <ListGroup as="ol">
                <ListGroup.Item as="li"><i className="fa fa-cog text-primary me-2"></i>Cras justo odio</ListGroup.Item>
                <ListGroup.Item as="li"><i className="fa fa-cog text-danger me-2"></i>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li"><i className="fa fa-cog text-success me-2"></i>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item as="li"><i className="fa fa-cog text-warning me-2"></i>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item as="li"><i className="fa fa-cog text-info me-2"></i>Vestibulum at eros</ListGroup.Item>
              </ListGroup>

            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}

      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>List Group With defalut badges</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">

              <ListGroup as="ol">
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">Cras justo odio<Badge bg="default" className="rounded-pill">20</Badge></ListGroup.Item>
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">Dapibus ac facilisis in<Badge bg="default" className="rounded-pill">15</Badge></ListGroup.Item>
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">Morbi leo risus<Badge bg="default" className="rounded-pill">10</Badge></ListGroup.Item>
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">Porta ac consectetur ac<Badge bg="default" className="rounded-pill">8</Badge></ListGroup.Item>
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">Vestibulum at eros<Badge bg="default" className="rounded-pill">1</Badge></ListGroup.Item>
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}

      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>List Group With color badges</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">

              <ListGroup as="ol">
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">Cras justo odio<Badge bg="primary" className="rounded-pill">20</Badge></ListGroup.Item>
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">Dapibus ac facilisis in<Badge bg="danger" className="rounded-pill">15</Badge></ListGroup.Item>
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">Morbi leo risus<Badge bg="success" className="rounded-pill">10</Badge></ListGroup.Item>
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">Porta ac consectetur ac<Badge bg="warning" className="rounded-pill">8</Badge></ListGroup.Item>
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">Vestibulum at eros<Badge bg="info" className="rounded-pill">1</Badge></ListGroup.Item>
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}

    </Row>
    {/* <!-- ROW-4 CLOSED --> */}

    {/* <!-- ROW-5 OPEN --> */}
    <Row>
      <Col sm={12} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>List Group With Custom content</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <ListGroup>
                <ListGroup.Item className="list-group-item-action flex-column align-items-start active">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted">Donec id elit non mi porta.</small>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted">Donec id elit non mi porta.</small>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted">Donec id elit non mi porta.</small>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
      <Col sm={12} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>List Group With Disabled Custom content</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <ListGroup>
                <ListGroup.Item className="list-group-item-action flex-column align-items-start disabled">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted">Donec id elit non mi porta.</small>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted">Donec id elit non mi porta.</small>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted">Donec id elit non mi porta.</small>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL END --> */}
    </Row>
    {/* <!-- ROW-5 CLOSED --> */}

    {/* <!-- ROW OPEN--> */}
    <Row>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Unorder List Style</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <ul className="list-style-1">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Unorder List Style2</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <ul className="list-style2">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Unorder List Style3</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <ul className="list-style3">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Unorder List Style4</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <ul className="list-style4">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Unorder List Style5</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <ul className="list-style5">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Unorder List Style6</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <ul className="list-style6">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Order list</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <ol className="order-list">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ol className="order-list">
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ol>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ol>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Order With unorder</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <ol className="order-list">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul className="list-style4 ps-5">
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ol>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Paragraph with Order List</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and
              the like).</p>
            <ol className="order-list">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
            </ol>
            <p>Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the
              like).
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Paragraph with Unorder List</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and
              the like).</p>
            <ul className="list-style-1 mb-3">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
            </ul>
            <p>Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the
              like).
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW CLOSED --> */}
  </div>
)
};

export default ListGroups;

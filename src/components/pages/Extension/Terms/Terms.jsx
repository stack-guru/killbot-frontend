import React from 'react';
import styles from './Terms.module.scss';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import { Card, Col, Row, Button } from 'react-bootstrap';


const Terms = () => {
  return (
  <div className={styles.Terms}>
    <PageHeader titles="Terms" active="Terms" items={['Pages']} />

    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col md={12}>
        <Card>
          <Card.Body>
            <h4><b>Welcome to Sash</b></h4>
            <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the
              truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col md={12}>
        <Card>
          <Card.Body>
            <h4><b>Using Our Services</b></h4>
            <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the
              truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col md={12}>
        <Card>
          <Card.Body>
            <h4><b>Privacy policy</b></h4>
            <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the
              truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col md={12}>
        <Card>
          <Card.Body>
            <h4><b>Copyright </b></h4>
            <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the
              truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col md={12}>
        <Card>
          <Card.Body>
            <h4><b>Terms and Conditions</b></h4>
            <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the
              truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
            <ul>
              <li><i className="fa fa-angle-double-right mx-2"></i> ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores </li>
              <li><i className="fa fa-angle-double-right mx-2"></i> quas molestias excepturi sint occaecati cupiditate non provident</li>
              <li><i className="fa fa-angle-double-right mx-2"></i> Nam libero tempore, cum soluta nobis est eligendi optio cumque</li>
              <li><i className="fa fa-angle-double-right mx-2"></i> Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates</li>
              <li><i className="fa fa-angle-double-right mx-2"></i> repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus</li>
              <li><i className="fa fa-angle-double-right mx-2"></i> ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</li>
            </ul>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className="text-start">
            <div className="terms">
              <p>Was this information is Helpful?</p>
              <Button variant='primary' className="text-white me-2">Yes</Button>
              <Button variant='secondary' className="text-white me-2">No</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-1 CLOSE --> */}
  </div>
)
  };

export default Terms;

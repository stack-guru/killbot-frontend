import React, { useState } from 'react';
import styles from './Sweet.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import Swal from "sweetalert2";
import Media from '../../../assets/images/brand/icon-dark.png';



const Sweet = () => {

  const [title, settitle] = useState("Your message")
  const [message, setmessage] = useState("Your message")



  let CongratulationAlert = () => {
    Swal.fire({
      title: 'Congratulations!',
      text: 'Your message has been succesfully sent',
      allowOutsideClick: false,
      icon: 'success',
    })
  };

  let WarningAlert = () => {
    Swal.fire({
      title: 'Alert',
      text: "Waring alert",
      icon: 'warning',
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: 'Stay on the page',
      cancelButtonText: 'Exit',
      confirmButtonColor: "default",
      cancelButtonColor: "#6c5ffc",
    })
  };

  let DangerAlert = () => {
    Swal.fire({
      title: 'Alert',
      text: "Danger alert",
      icon: 'error',
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: 'Stay on the page',
      cancelButtonText: 'Exit',
      confirmButtonColor: "default",
      cancelButtonColor: "#6c5ffc",
    })
  }

  let InfoAlert = () => {
    Swal.fire({
      title: 'Alert',
      text: "Info alert",
      icon: 'info',
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: 'Stay on the page',
      cancelButtonText: 'Exit',
      confirmButtonColor: "default",
      cancelButtonColor: "#6c5ffc",
    })
  };

  let simpleAlert = () => {
    Swal.fire({ text: message, allowOutsideClick: false, })
  }

  let alertTitle = () => {
    Swal.fire({ title: title, text: message, allowOutsideClick: false, })
  }


  let alertImage = () => {
    Swal.fire({
      title: title,
      text: message,
      imageUrl: Media,
      imageAlt: 'logo',
      allowOutsideClick: false,
    })
  }


  let alertTimer = () => {
    Swal.fire({
      title: title,
      text: 'Your message(close after 2 seconds)',
      allowOutsideClick: false,
      timer: 2000,
      timerProgressBar: true,
    })
  }

  return (
    <div className={styles.Sweet} >

      <PageHeader titles="Sweet Alert" active="Sweet Alert" items={['Apps']} />

      {/* <!-- Row --> */}
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Sample Sweet Alerts</Card.Title>
            </Card.Header>
            <Card.Body>
              <Button className="mt-2 me-2" variant="success" onClick={() => { CongratulationAlert() }}>Success Alert</Button>
              <Button className="mt-2 me-2" variant="warning" onClick={() => { WarningAlert() }}>Warning Alert</Button>
              <Button className="mt-2 me-2" variant="danger" onClick={() => { DangerAlert() }}>Danger Alert</Button>
              <Button className="mt-2 me-2" variant="info" onClick={() => { InfoAlert() }}>Info Alert</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Forms Sweet-alert</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group className="form-group">
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' className="" onChange={(ele) => { settitle(ele.target.value) }} placeholder='Title text' id='title' />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>Message</Form.Label>
                <Form.Control type='text' className="" onChange={(ele) => { setmessage(ele.target.value) }} placeholder='Your message' id='message' />
              </Form.Group>
              <Button className="mt-2 me-2" variant="primary" onClick={() => { simpleAlert() }}>Simple Alert</Button>
              <Button className="mt-2 me-2" variant="secondary" onClick={() => { alertTitle() }}>Alert with Title</Button>
              <Button className="mt-2 me-2" variant="info" onClick={() => { alertImage() }}>Alert with Image</Button>
              <Button className="mt-2 me-2" variant="warning" onClick={() => { alertTimer() }}>Alert with Timer</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row >
      {/* <!-- End Row --> */}
    </div >

  )
};

export default Sweet;
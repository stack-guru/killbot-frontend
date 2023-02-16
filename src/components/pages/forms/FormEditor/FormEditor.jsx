import React, { useState } from 'react';
import styles from './FormEditor.module.scss';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import { Card, Col, Row, Modal, Button } from 'react-bootstrap';
import SunEditor from 'suneditor-react';




const FormEditor = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Suneditor with multiple functions

  const htmlWithTableImages = `<center>  </center>`;

  // replace with initial value with different html variables to reproduce bugs;

  const [value, setValue] = useState(htmlWithTableImages);

  return (

    <div className={styles.FormEditor}>
      <PageHeader titles="Form Editor" active="Form Editor" items={['Forms']} />
      {/* <!-- Row --> */}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Sun Form Editor</Card.Title>
            </Card.Header>
            <Card.Body>
              <SunEditor />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End Row--> */}

      {/* <!-- Row --> */}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                Form Editor in Modal
              </Card.Title>
            </Card.Header>
            <Card.Body>
              {/* <!-- pd-y-30 --> */}
              <div className="text-center p-4 bg-light border">
                <Button variant="primary" onClick={handleShow}>
                  View live demo
                </Button>
                <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Create New Document</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <SunEditor />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /Row --> */}
      {/* <!-- /Row --> */}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                From Inline-Edit Editor
              </Card.Title>
            </Card.Header>
            <Card.Body>
            <SunEditor
                setContents={value}
                onChange={setValue}
                setOptions={{
                  buttonList: [
                    ["undo", "redo"],
                    ["font", "fontSize"],
                    ['paragraphStyle', 'blockquote'],
                    [
                      "bold",
                      "underline",
                      "italic",
                      "strike",
                      "subscript",
                      "superscript"
                    ],
                    ["fontColor", "hiliteColor"],
                    ["align", "list", "lineHeight"],
                    ["outdent", "indent"],
                    ["table", "horizontalRule", "link", "image", "video"],
                    ["preview", "print"],
                    ["removeFormat"]
                  ],
                  defaultTag: "div",
                  minHeight: "300px",
                  showPathLabel: false,
                  attributesWhitelist: {
                    all: "style",
                    table: "cellpadding|width|cellspacing|height|style",
                    tr: "valign|style",
                    td: "styleinsert|height|style",
                    img: "title|alt|src|style"
                  }
                }}
              />
              <hr />
              <Card.Title as='h6'>
              Example given value output:
              </Card.Title>
              <textarea className='text-editor bg-white text-dark border'
                disabled
                value={JSON.stringify(value, null, 2)}
                style={{ width: "100%", resize: "none", height: "600px" }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- Row --> */}

    </div>
  )
};

export default FormEditor;

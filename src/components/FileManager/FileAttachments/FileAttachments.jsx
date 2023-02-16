import React from 'react';
import { Card, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './FileAttachments.module.scss';


const FileAttachments = () => {

  return (

  <div className={styles.FileAttachments}>
    <PageHeader titles="File Attachments" active="File Attachments" items={['Componets']} />


    {/* <!-- ROW-1 OPEN --> */}

    <Row>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Color Square File_Attachment</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="tags">
              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='primary' className="text-white" type="button"><i className="mdi mdi-file-image me-2"></i> Image_file.jpg </Button>
                <Button variant='primary' className="text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='secondary' className="text-white"><i className="mdi mdi-file-word me-2"></i> Word_file.doc</Button>
                <Button variant='secondary' className="text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='success' className="text-white"><i className="mdi mdi-file-excel me-2"></i> Excel_file.xls</Button>
                <Button variant='success' className="text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='warning' className="text-white"><i className="mdi mdi-file-pdf me-2"></i> pdf_file.pdf</Button>
                <Button variant='warning' className="text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='danger' className="text-white"><i className="mdi mdi-file-video me-2"></i> Video_file.mp4</Button>
                <Button variant='danger' className="text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='info' className="text-white"><i className="mdi mdi-file-music me-2"></i> Audio_file.mp3</Button>
                <Button variant='info' className="text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Color Rounded File_Attachment</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="tags">
              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='primary' className="btn-pill text-white"><i className="mdi mdi-file-image me-2"></i> Image_file.jpg </Button>
                <Button variant='primary' className="btn-pill btn-close text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='secondary' className="btn-pill text-white"><i className="mdi mdi-file-word me-2"></i> Word_file.doc</Button>
                <Button variant='secondary' className="btn-pill btn-close text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='success' className="btn-pill text-white"><i className="mdi mdi-file-excel me-2"></i> Excel_file.xls</Button>
                <Button variant='success' className="btn-pill btn-close text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='warning' className="btn-pill text-white"><i className="mdi mdi-file-pdf me-2"></i> pdf_file.pdf</Button>
                <Button variant='warning' className="btn-pill btn-close text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='danger' className="btn-pill text-white"><i className="mdi mdi-file-video me-2"></i> Video_file.mp4</Button>
                <Button variant='danger' className="btn-pill btn-close text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='info' className="btn-pill text-white"><i className="mdi mdi-file-music me-2"></i> Audio_file.mp3</Button>
                <Button variant='info' className="btn-pill btn-close text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Outline Square File_Attachment</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="tags">
              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='outline-primary' className=""><i className="mdi mdi-file-image me-2"></i> Image_file.jpg </Button>
                <Button variant='outline-primary' className="btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='outline-secondary' className=""><i className="mdi mdi-file-word me-2"></i> Word_file.doc</Button>
                <Button variant='outline-secondary' className="btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='outline-success' className=""><i className="mdi mdi-file-excel me-2"></i> Excel_file.xls</Button>
                <Button variant='outline-success' className="btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='outline-warning' className=""><i className="mdi mdi-file-pdf me-2"></i> pdf_file.pdf</Button>
                <Button variant='outline-warning' className="btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='outline-danger' className=""><i className="mdi mdi-file-video me-2"></i> Video_file.mp4</Button>
                <Button variant='outline-danger' className="btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='outline-info' className=""><i className="mdi mdi-file-music me-2"></i> Audio_file.mp3</Button>
                <Button variant='outline-info' className="btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Outline Rounded File_Attachment</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="tags">
              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='outline-primary' className="btn-pill"><i className="mdi mdi-file-image me-2"></i> Image_file.jpg </Button>
                <Button variant='outline-primary' className="btn-pill btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='outline-secondary' className="btn-pill"><i className="mdi mdi-file-word me-2"></i> Word_file.doc</Button>
                <Button variant='outline-secondary' className="btn-pill btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='outline-success' className="btn-pill"><i className="mdi mdi-file-excel me-2"></i> Excel_file.xls</Button>
                <Button variant='outline-success' className="btn-pill btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='outline-warning' className="btn-pill"><i className="mdi mdi-file-pdf me-2"></i> pdf_file.pdf</Button>
                <Button variant='outline-warning' className="btn-pill btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='outline-danger' className="btn-pill"><i className="mdi mdi-file-video me-2"></i> Video_file.mp4</Button>
                <Button variant='outline-danger' className="btn-pill btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='outline-info' className="btn-pill"><i className="mdi mdi-file-music me-2"></i> Audio_file.mp3</Button>
                <Button variant='outline-info' className="btn-pill btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Transparent Square File_Attachment</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="tags">
              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='primary-light' className=""><i className="mdi mdi-file-image me-2"></i> Image_file.jpg </Button>
                <Button variant='primary-light' className="btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='secondary-light' className=""><i className="mdi mdi-file-word me-2"></i> Word_file.doc</Button>
                <Button variant='secondary-light' className="btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='success-light' className=""><i className="mdi mdi-file-excel me-2"></i> Excel_file.xls</Button>
                <Button variant='success-light' className="btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='warning-light' className=""><i className="mdi mdi-file-pdf me-2"></i> pdf_file.pdf</Button>
                <Button variant='warning-light' className="btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='danger-light' className=""><i className="mdi mdi-file-video me-2"></i> Video_file.mp4</Button>
                <Button variant='danger-light' className="btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='info-light' className=""><i className="mdi mdi-file-music me-2"></i> Audio_file.mp3</Button>
                <Button variant='info-light' className="btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Transparent Rounded File_Attachment</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="tags">
              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='primary-light' className="btn-pill"><i className="mdi mdi-file-image me-2"></i> Image_file.jpg </Button>
                <Button variant='primary-light' className="btn-close btn-pill" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant="secondary-light" className=" btn-pill"><i className="mdi mdi-file-word me-2"></i> Word_file.doc</Button>
                <Button variant="secondary-light" className="btn-close  btn-pill" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='success-light' className="btn-pill"><i className="mdi mdi-file-excel me-2"></i> Excel_file.xls</Button>
                <Button variant='success-light' className="btn-close btn-pill" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='warning-light' className="btn-pill"><i className="mdi mdi-file-pdf me-2"></i> pdf_file.pdf</Button>
                <Button variant='warning-light' className="btn-close btn-pill" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='danger-light' className="btn-pill"><i className="mdi mdi-file-video me-2"></i> Video_file.mp4</Button>
                <Button variant='danger-light' className="btn-close btn-pill" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='info-light' className="btn-pill"><i className="mdi mdi-file-music me-2"></i> Audio_file.mp3</Button>
                <Button variant='info-light' className="btn-close btn-pill" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Square File_Attachment with link</Card.Title>
          </Card.Header>
          <Card.Body className="p-4 p-sm-5">
            <p>Square File_Attachment with <code className="highlighter-rouge">&lt;Link&gt;</code> tag.</p>
            <div className="tags">
              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-primary text-white"><i className="mdi mdi-file-image mx-2"></i>Image01..._jpg</Link>
                <Link to='#' className="btn btn-close btn-primary text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-outline-secondary"><i className="mdi mdi-file-image me-2"></i> Image_file.jpg </Link>
                <Link to='#' className="btn btn-close btn-outline-secondary" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-success-light"><i className="mdi mdi-file-image me-2"></i> Image_file.jpg </Link>
                <Link to='#' className="btn btn-close btn-success-light" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Rounded File_Attachment with link</Card.Title>
          </Card.Header>
          <Card.Body className="p-4 p-sm-5">
            <p>Rounded File_Attachment with <code className="highlighter-rouge">&lt;Link&gt;</code> tag.</p>
            <div className="tags">
              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-pill btn-info text-white"><i className="mdi mdi-file-image mx-2"></i>Image01..._jpg</Link>
                <Link to='#' className="btn btn-pill btn-close btn-info text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-pill btn-outline-warning"><i className="mdi mdi-file-image me-2"></i> Image_file.jpg </Link>
                <Link to='#' className="btn btn-pill btn-close btn-outline-warning" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-pill btn-danger-light"><i className="mdi mdi-file-image me-2"></i> Image_file.jpg </Link>
                <Link to='#' className="btn btn-pill btn-close btn-danger-light" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Square File Attachment Sizes</Card.Title>
          </Card.Header>
          <Card.Body className="p-4 p-sm-5">
            <div className="tags">
              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='primary' size='sm' className="text-white"><i className="mdi mdi-file-image mx-2"></i>Image01..._jpg</Button>
                <Button variant='primary' size='sm' className="btn-close text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='secondary' className="text-white"><i className="mdi mdi-file-excel me-2"></i>Document.exl</Button>
                <Button variant='secondary' className="btn-close text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='pink' size='lg' className=""><i className="mdi mdi-file-pdf fs-20 me-2"></i>AMN0012.pdf</Button>
                <Button variant='pink' size='lg' className="btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Rounded File Attachment Sizes</Card.Title>
          </Card.Header>
          <Card.Body className="p-4 p-sm-5">
            <div className="tags">
              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='primary' size='sm' className="btn-pill text-white"><i className="mdi mdi-file-image me-2"></i>Image01..._jpg</Button>
                <Button variant='primary' size='sm' className="btn-pill btn-close text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='secondary' className="btn-pill"><i className="mdi mdi-file-excel me-2"></i>Document.exl</Button>
                <Button variant='secondary' className="btn-pill btn-close text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Button variant='pink' size='lg' className="btn-pill"><i className="mdi mdi-file-pdf fs-20 me-2"></i>AMN0012.pdf</Button>
                <Button variant='pink' size='lg' className="btn-pill btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Square File Attachment Sizes with link</Card.Title>
          </Card.Header>
          <Card.Body className="p-4 p-sm-5">
            <p>Square File_Attachment Sizes with <code className="highlighter-rouge">&lt;Link&gt;</code> tag.</p>
            <div className="tags">
              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-sm btn-primary text-white"><i className="mdi mdi-file-image mx-2"></i>Image01..._jpg</Link>
                <Link to='#' className="btn btn-close btn-sm btn-primary text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-secondary text-white"><i className="mdi mdi-file-excel me-2"></i>Document.exl</Link>
                <Link to='#' className="btn btn-close btn-secondary text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-lg btn-pink"><i className="mdi mdi-file-pdf fs-20 me-2"></i>AMN0012.pdf</Link>
                <Link to='#' className="btn btn-close btn-lg btn-pink" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Rounded File Attachment Sizes with link</Card.Title>
          </Card.Header>
          <Card.Body className="p-4 p-sm-5">
            <p>Rounded File_Attachment Sizes with <code className="highlighter-rouge">&lt;Link&gt;</code> tag.</p>
            <div className="tags">
              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-pill btn-sm btn-primary text-white"><i className="mdi mdi-file-image me-2"></i>Image01..._jpg</Link>
                <Link to='#' className="btn btn-pill btn-close btn-sm btn-primary text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-pill btn-secondary text-white"><i className="mdi mdi-file-excel me-2"></i>Document.exl</Link>
                <Link to='#' className="btn btn-pill btn-close btn-secondary text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-2" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-pill btn-lg btn-pink"><i className="mdi mdi-file-pdf fs-20 me-2"></i>AMN0012.pdf</Link>
                <Link to='#' className="btn btn-pill btn-close btn-lg btn-pink" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row >

    {/* // < !--ROW - 1 CLOSED-- > */}

    {/* // < !--ROW - 2 OPEN-- > */}

    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Image File_Attachment</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="">
                <Row>
                  <Col xl={2} lg={3} md={4} sm={4} >
                    <div className="file-image p-2">
                      <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                        <img src={require("../../../assets/images/products/3.jpg")} alt="png-4" className="w-100" />
                      </Link>
                      <ul className="icons">
                        <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                        <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                        <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                      </ul>
                      <Link to="#"><span className="file-name">Image01.jpg</span></Link>
                    </div>
                  </Col>
                  <Col xl={2} lg={3} md={4} sm={4}>
                    <div className="file-image p-2">
                      <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                        <img src={require("../../../assets/images/media/files/11.jpg")} alt="file-2" className="w-100" />
                      </Link>
                      <ul className="icons">
                        <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                        <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                        <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                      </ul>
                      <Link to="#"><span className="file-name">Image02.jpg</span></Link>
                    </div>
                  </Col>
                  <Col xl={2} lg={3} md={4} sm={4}>
                    <div className="file-image p-2">
                      <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                        <img src={require("../../../assets/images/media/files/12.jpg")} alt="file-3"className="w-100" />
                      </Link>
                      <ul className="icons">
                        <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                        <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                        <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                      </ul>
                      <Link to="#"><span className="file-name">Image03.jpg</span></Link>
                    </div>
                  </Col>
                  <Col xl={2} lg={3} md={4} sm={4}>
                    <div className="file-image p-2">
                      <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                        <img src={require("../../../assets/images/media/files/13.jpg")} alt="file-4" className="w-100" />
                      </Link>
                      <ul className="icons">
                        <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                        <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                        <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                      </ul>
                      <Link to="#"><span className="file-name">Image04</span></Link>
                    </div>
                  </Col>
                  <Col xl={2} lg={3} md={4} sm={4}>
                    <div className="file-image p-2">
                      <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                        <img src={require("../../../assets/images/media/files/14.jpg")} alt="file-5" className="w-100" />
                      </Link>
                      <ul className="icons">
                        <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                        <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                        <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                      </ul>
                      <Link to="#"><span className="file-name">Image05.jpg</span></Link>
                    </div>
                  </Col>
                  <Col xl={2} lg={3} md={4} sm={4}>
                    <div className="file-image p-2">
                      <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                        <img src={require("../../../assets/images/media/files/10.jpg")} alt="file-1" className="w-100" />
                      </Link>
                      <ul className="icons">
                        <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                        <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                        <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                      </ul>
                      <Link to="#"><span className="file-name">Image06.jpg</span></Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* <!--ROW - 2 CLOSED-- > */}

    {/* < !--ROW - 3 OPEN-- > */}

    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Image File_Attachment Small Size</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="file-image-1">
                <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                  <img src={require("../../../assets/images/products/3.jpg")} className="br-5" alt="pngs-4" />
                </Link>
                <ul className="icons">
                  <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                  <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                </ul>
                <span className="file-name-1">Image01.jpg</span>
              </div>
              <div className="file-image-1">
                <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}><img src={require("../../../assets/images/media/files/documents/1.png")} alt="file-details" /></Link>
                <ul className="icons">
                  <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                  <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                </ul>
                <span className="file-name-1">Word.doc</span>
              </div>
              <div className="file-image-1">
                <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}><img src={require("../../../assets/images/media/files/documents/4.png")} alt="file-2" /></Link>
                <ul className="icons">
                  <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                  <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                </ul>
                <span className="file-name-1">Excel.xls</span>
              </div>
              <div className="file-image-1">
                <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}><img src={require("../../../assets/images/media/files/documents/3.png")} alt="file-1" /></Link>
                <ul className="icons">
                  <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                  <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                </ul>
                <span className="file-name-1">Document.pdf</span>
              </div>
              <div className="file-image-1">
                <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                  <img src={require("../../../assets/images/media/files/documents/5.png")} className="br-5" alt="formart" />
                </Link>
                <ul className="icons">
                  <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                  <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                </ul>
                <span className="file-name-1">Image02.jpg</span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* <!--ROW - 3 CLOSED-- > */}

    {/* < !--ROW - 4 OPEN-- > */}

    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Image File_Attachment Medium Size</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="file-image-1 file-image-md">
                <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                  <img src={require("../../../assets/images/products/3.jpg")} className="br-5" alt="pngs-4" />
                </Link>
                <ul className="icons">
                  <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                  <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                </ul>
                <span className="file-name-1">Image01.jpg</span>
              </div>
              <div className="file-image-1 file-image-md">
                <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}><img src={require("../../../assets/images/media/files/documents/1.png")} alt="file-docs" /></Link>
                <ul className="icons">
                  <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                  <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                </ul>
                <span className="file-name-1">Word.doc</span>
              </div>
              <div className="file-image-1 file-image-md">
                <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}><img src={require("../../../assets/images/media/files/documents/4.png")} alt="file-2" /></Link>
                <ul className="icons">
                  <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                  <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                </ul>
                <span className="file-name-1">Excel.xls</span>
              </div>
              <div className="file-image-1 file-image-md">
                <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}><img src={require("../../../assets/images/media/files/documents/3.png")} alt="file-1" /></Link>
                <ul className="icons">
                  <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                  <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                </ul>
                <span className="file-name-1">Document.pdf</span>
              </div>
              <div className="file-image-1 file-image-md">
                <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                  <img src={require("../../../assets/images/media/files/documents/5.png")} className="br-5" alt="file-5" />
                </Link>
                <ul className="icons">
                  <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                  <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                </ul>
                <span className="file-name-1">Image02.jpg</span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* <!--ROW - 4 CLOSED-- > */}

    {/* < !--ROW - 5 OPEN-- > */}

    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Image File_Attachment Large Size</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="file-image-1 file-image-lg">
                <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                  <img src={require("../../../assets/images/products/3.jpg")} className="br-5" alt="pngs-4" />
                </Link>
                <ul className="icons">
                  <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                  <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                </ul>
                <span className="file-name-1">Image01.jpg</span>
              </div>
              <div className="file-image-1 file-image-lg">
                <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}><img src={require("../../../assets/images/media/files/documents/1.png")} alt="file-details" /></Link>
                <ul className="icons">
                  <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                  <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                </ul>
                <span className="file-name-1">Word.doc</span>
              </div>
              <div className="file-image-1 file-image-lg">
                <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}><img src={require("../../../assets/images/media/files/documents/4.png")} alt="file-2" /></Link>
                <ul className="icons">
                  <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                  <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                </ul>
                <span className="file-name-1">Excel.xls</span>
              </div>
              <div className="file-image-1 file-image-lg">
                <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}><img src={require("../../../assets/images/media/files/documents/3.png")} alt="file-1" /></Link>
                <ul className="icons">
                  <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                  <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                </ul>
                <span className="file-name-1">Document.pdf</span>
              </div>
              <div className="file-image-1 file-image-lg">
                <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                  <img src={require("../../../assets/images/media/files/documents/5.png")} className="br-5" alt="file-3" />
                </Link>
                <ul className="icons">
                  <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                  <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                </ul>
                <span className="file-name-1">Image02.jpg</span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* <!--ROW - 5 CLOSED-- > */}

  </div >
)
  };

export default FileAttachments;

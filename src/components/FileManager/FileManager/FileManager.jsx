import React from 'react';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './FileManager.module.scss';
import { Link } from 'react-router-dom';
import { Row, Col, Card, ListGroup, ProgressBar, Dropdown } from 'react-bootstrap';
import { DataFileManager } from '../../../Data/DataFileManger/DataFileManager';


const FileManager = () => {
  return (
  <div className={styles.FileManager}>
    <PageHeader titles="File Manager" active="File Manager" items={['Componets']} />
    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col md={5} lg={5} xl={3}>
        <Card>
          <Card.Body className="text-center">
            <DataFileManager />
          </Card.Body>
          <Card.Body className="pt-4">
            <ListGroup className="list-group-transparent mb-0 file-manager">
              <div className="d-flex">
                <div><Link to="#" className="list-group-item  d-flex align-items-center px-0"><i className="fe fe-image fs-18 me-2 text-success p-2"></i>Images</Link></div>
                <div className="text-end ms-auto mt-3"><span className="fs-11  text-dark">20 MB</span></div>
              </div>
              <ProgressBar className='progress-xs mb-3 ms-2' variant='success' now={30} />
              <div className="d-flex">
                <div><Link to="#" className="list-group-item  d-flex align-items-center px-0"><i className="fe fe-video fs-18 me-2 text-secondary p-2"></i>Videos</Link></div>
                <div className="text-end ms-auto mt-3"><span className="fs-11  text-dark">32.5 MB</span></div>
              </div>
              <ProgressBar className='progress-xs mb-3 ms-2' variant='secondary' now={40} />
              <div className="d-flex">
                <div><Link to="#" className="list-group-item  d-flex align-items-center px-0"><i className="fe fe-file-text fs-18 me-2 text-primary p-2"></i> Docs</Link></div>
                <div className="text-end ms-auto mt-3"><span className="fs-11  text-dark">14.2 MB</span></div>
              </div>
              <ProgressBar className='progress-xs mb-3 ms-2' variant='primary' now={25} />
              <div className="d-flex">
                <div><Link to="#" className="list-group-item  d-flex align-items-center px-0"><i className="fe fe-music fs-18 me-2 text-warning p-2"></i> Music</Link></div>
                <div className="text-end ms-auto mt-3"><span className="fs-11  text-dark">13 MB</span></div>
              </div>
              <ProgressBar className='progress-xs mb-3 ms-2' variant='warning' now={30} />
              <div className="d-flex">
                <div><Link to="#" className="list-group-item  d-flex align-items-center px-0"><i className="fe fe-download fs-18 me-2 text-info p-2"></i> Downloads</Link></div>
                <div className="text-end ms-auto mt-3"><span className="fs-11  text-dark">19.3 MB</span></div>
              </div>
              <ProgressBar className='progress-xs mb-3 ms-2' variant='info' now={40} />
              <div className="d-flex">
                <div><Link to="#" className="list-group-item  d-flex align-items-center px-0"><i className="fe fe-grid fs-18 me-2 text-danger p-2"></i> More</Link></div>
                <div className="text-end ms-auto mt-3"><span className="fs-11  text-dark">23 MB</span></div>
              </div>
              <ProgressBar className='progress-xs mb-3 ms-2' variant='danger' now={45} />
            </ListGroup>
          </Card.Body>
          <Card.Body>
            <ListGroup className="list-group-transparent mb-0">
              <Link to="#" className="list-group-item  d-flex align-items-center px-0 py-2"><span className="text-primary me-2 fs-12"><i className="fe fe-circle"></i></span>Remote Control</Link>
              <Link to="#" className="list-group-item  d-flex align-items-center px-0 py-2"><span className="text-secondary me-2 fs-12"><i className="fe fe-circle"></i></span>Google Drive</Link>
              <Link to="#" className="list-group-item  d-flex align-items-center px-0 py-2"><span className="text-danger me-2 fs-12"><i className="fe fe-circle"></i></span>FTP Files</Link>
              <Link to="#" className="list-group-item  d-flex align-items-center px-0 py-2"><span className="text-warning me-2 fs-12"><i className="fe fe-circle"></i></span>Transfer files</Link>
              <Link to="#" className="list-group-item  d-flex align-items-center px-0 py-2"><span className="text-success me-2 fs-12"><i className="fe fe-circle"></i></span>Deep Clean</Link>
              <Link to="#" className="list-group-item  d-flex align-items-center px-0 py-2"><span className="text-info me-2 fs-12"><i className="fe fe-circle"></i></span>Favourities</Link>
              <Link to="#" className="list-group-item  d-flex align-items-center px-0 py-2"><span className="text-pink me-2 fs-12"><i className="fe fe-circle"></i></span>Settings</Link>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <div className="d-flex">
              <Link to="#" className="file-manager-image"><img src={require("../../../assets/images/media/files/documents/11.png")} alt="img" /></Link>
              <h3 className="ms-3 mt-5 fw-semibold">467 Files</h3>
              <div className="ms-5 ms-auto">
                <Dropdown>
                  <Dropdown.Toggle as='a' className="text-muted no-caret"><i className="fe fe-more-vertical fs-18"></i></Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Internal Storage</Dropdown.Item>
                    <Dropdown.Item>External Storage</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <ProgressBar className='progress-xs mb-3' variant='warning' now={60} />
            <div className="">
              <div className="d-flex">
                <div className="d-flex">
                  <div>
                    <h6 className="mt-2"><i className="fe fe-circle text-success fs-12"></i> Total Storage</h6>
                    <span className="text-muted">128 GB</span>
                  </div>
                </div>
                <div className="ms-auto my-auto">
                  <h6 className="mt-2"><i className="fe fe-circle text-danger fs-12"></i> Used</h6>
                  <span className="text-muted">100 GB</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={7} lg={7} xl={9}>
        <Row className="row-sm">
          <div className="text-dark mb-2 ms-1 fs-20 fw-semibold">All Folders</div>
          <Col xl={3} md={6} sm={6}>
            <Card className="pos-relative">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filemanagerlist`} className="open-file"></Link>
              <Card.Body className="px-4 pt-4 pb-2">
                <div className="d-flex">
                  <span className="bg-primary-transparent border border-primary brround">
                    <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                      <path fill="#645acf" d="M9.3 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H10L12 6H20C21.1 6 22 6.9 22 8V14.6C20.6 13.6 18.9 13 17 13C13.5 13 10.4 15.1 9.1 18.3L8.8 19L9.1 19.7C9.2 19.8 9.2 19.9 9.3 20M23 19C22.1 21.3 19.7 23 17 23S11.9 21.3 11 19C11.9 16.7 14.3 15 17 15S22.1 16.7 23 19M19.5 19C19.5 17.6 18.4 16.5 17 16.5S14.5 17.6 14.5 19 15.6 21.5 17 21.5 19.5 20.4 19.5 19M17 18C16.4 18 16 18.4 16 19S16.4 20 17 20 18 19.6 18 19 17.6 18 17 18" />
                    </svg>
                  </span>
                  <Dropdown className="ms-auto mt-1">
                    <Dropdown.Toggle as='a' className="text-muted no-caret"><i className="fe fe-more-vertical fs-18"></i></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item><i className="fe fe-edit mx-1"></i> Edit</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-share mx-1"></i> Share</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-download mx-1"></i> Download</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-trash mx-1"></i> Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
              <Card.Footer className="border-top-0">
                <div className="d-flex">
                  <div>
                    <h5 className="text-primary">Videos</h5>
                    <p className="text-muted fs-13 mb-0">35 Files</p>
                  </div>
                  <div className="ms-auto mt-4">
                    <h6 className="">23 MB</h6>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={3} md={6} sm={6}>
            <Card className="pos-relative">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filemanagerlist`} className="open-file"></Link>
              <Card.Body className="px-4 pt-4 pb-2">
                <div className="d-flex">
                  <span className="bg-danger-transparent border border-danger brround">
                    <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                      <path fill="#e82646" d="M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z" />
                    </svg>
                  </span>
                  <Dropdown className="ms-auto mt-1">
                    <Dropdown.Toggle as='a' className="text-muted no-caret"><i className="fe fe-more-vertical fs-18"></i></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item><i className="fe fe-edit mx-1"></i> Edit</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-share mx-1"></i> Share</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-download mx-1"></i> Download</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-trash mx-1"></i> Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
              <Card.Footer className="border-top-0">
                <div className="d-flex">
                  <div>
                    <h5 className="text-danger">PPT</h5>
                    <p className="text-muted fs-13 mb-0">25 Files</p>
                  </div>
                  <div className="ms-auto mt-4">
                    <h6 className="">15 MB</h6>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={3} md={6} sm={6}>
            <Card className="pos-relative">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filemanagerlist`} className="open-file"></Link>
              <Card.Body className="px-4 pt-4 pb-2">
                <div className="d-flex">
                  <span className="bg-success-transparent border border-success brround">
                    <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                      <path fill="#09ad95" d="M10 4L12 6H20C21.1 6 22 6.89 22 8V18C22 19.1 21.1 20 20 20H4C2.89 20 2 19.1 2 18L2 6C2 4.89 2.89 4 4 4H10M19 9H15.5V13.06L15 13C13.9 13 13 13.9 13 15C13 16.11 13.9 17 15 17C16.11 17 17 16.11 17 15V11H19V9Z" />
                    </svg>
                  </span>
                  <Dropdown className="ms-auto mt-1">
                    <Dropdown.Toggle as='a' className="text-muted no-caret"><i className="fe fe-more-vertical fs-18"></i></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item><i className="fe fe-edit mx-1"></i> Edit</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-share mx-1"></i> Share</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-download mx-1"></i> Download</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-trash mx-1"></i> Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
              <Card.Footer className="border-top-0">
                <div className="d-flex">
                  <div>
                    <h5 className="text-teal">Music</h5>
                    <p className="text-muted fs-13 mb-0">25 Files</p>
                  </div>
                  <div className="ms-auto mt-4">
                    <h6 className="">15 MB</h6>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={3} md={6} sm={6}>
            <Card className="pos-relative">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filemanagerlist`} className="open-file"></Link>
              <Card.Body className="px-4 pt-4 pb-2">
                <div className="d-flex">
                  <span className="bg-pink-transparent border border-pink brround">
                    <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                      <path fill="#fc5296" d="M10,4L12,6H20A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10M12.46,10.88L14.59,13L12.46,15.12L13.88,16.54L16,14.41L18.12,16.54L19.54,15.12L17.41,13L19.54,10.88L18.12,9.46L16,11.59L13.88,9.46L12.46,10.88Z" />
                    </svg>
                  </span>
                  <Dropdown className="ms-auto mt-1">
                    <Dropdown.Toggle as='a' className="text-muted no-caret"><i className="fe fe-more-vertical fs-18"></i></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item><i className="fe fe-edit mx-1"></i> Edit</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-share mx-1"></i> Share</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-download mx-1"></i> Download</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-trash mx-1"></i> Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
              <Card.Footer className="border-top-0">
                <div className="d-flex">
                  <div>
                    <h5 className="text-pink">XLS</h5>
                    <p className="text-muted fs-13 mb-0">25 Files</p>
                  </div>
                  <div className="ms-auto mt-4">
                    <h6 className="">15 MB</h6>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={3} md={6} sm={6}>
            <Card className="pos-relative">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filemanagerlist`} className="open-file"></Link>
              <Card.Body className="px-4 pt-4 pb-2">
                <div className="d-flex">
                  <span className="bg-warning-transparent border border-warning brround">
                    <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                      <path fill="#f7b731" d="M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z" />
                    </svg>
                  </span>
                  <Dropdown className="ms-auto mt-1">
                    <Dropdown.Toggle as='a' className="text-muted no-caret"><i className="fe fe-more-vertical fs-18"></i></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item><i className="fe fe-edit mx-1"></i> Edit</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-share mx-1"></i> Share</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-download mx-1"></i> Download</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-trash mx-1"></i> Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
              <Card.Footer className="border-top-0">
                <div className="d-flex">
                  <div>
                    <h5 className="text-warning">PDF</h5>
                    <p className="text-muted fs-13 mb-0">25 Files</p>
                  </div>
                  <div className="ms-auto mt-4">
                    <h6 className="">15 MB</h6>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={3} md={6} sm={6}>
            <Card className="pos-relative">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filemanagerlist`} className="open-file"></Link>
              <Card.Body className="px-4 pt-4 pb-2">
                <div className="d-flex">
                  <span className="bg-secondary-transparent border border-secondary brround">
                    <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                      <path fill="#05c3fb" d="M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6M15,16H6V14H15V16M18,12H6V10H18V12Z" />
                    </svg>
                  </span>
                  <Dropdown className="ms-auto mt-1">
                    <Dropdown.Toggle as='a' className="text-muted no-caret"><i className="fe fe-more-vertical fs-18"></i></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item><i className="fe fe-edit mx-1"></i> Edit</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-share mx-1"></i> Share</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-download mx-1"></i> Download</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-trash mx-1"></i> Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
              <Card.Footer className="border-top-0">
                <div className="d-flex">
                  <div>
                    <h5 className="text-secondary">TXT</h5>
                    <p className="text-muted fs-13 mb-0">25 Files</p>
                  </div>
                  <div className="ms-auto mt-4">
                    <h6 className="">15 MB</h6>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={3} md={6} sm={6}>
            <Card className="pos-relative">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filemanagerlist`} className="open-file"></Link>
              <Card.Body className="px-4 pt-4 pb-2">
                <div className="d-flex">
                  <span className="bg-danger-transparent border border-orange brround">
                    <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                      <path fill="#fc7303" d="M5,17L9.5,11L13,15.5L15.5,12.5L19,17M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6Z" />
                    </svg>
                  </span>
                  <Dropdown className="ms-auto mt-1">
                    <Dropdown.Toggle as='a' className="text-muted no-caret"><i className="fe fe-more-vertical fs-18"></i></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item><i className="fe fe-edit mx-1"></i> Edit</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-share mx-1"></i> Share</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-download mx-1"></i> Download</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-trash mx-1"></i> Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
              <Card.Footer className="border-top-0">
                <div className="d-flex">
                  <div>
                    <h5 className="text-orange">Images</h5>
                    <p className="text-muted fs-13 mb-0">21 Files</p>
                  </div>
                  <div className="ms-auto mt-4">
                    <h6 className="">19 MB</h6>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={3} md={6} sm={6}>
            <Card className="pos-relative">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filemanagerlist`} className="open-file"></Link>
              <Card.Body className="px-4 pt-4 pb-2">
                <div className="d-flex">
                  <span className="bg-info-transparent border border-info brround">
                    <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                      <path fill="#1170e4" d="M20 6H12L10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6M18 12H16V14H18V16H16V18H14V16H16V14H14V12H16V10H14V8H16V10H18V12Z" />
                    </svg>
                  </span>
                  <Dropdown className="ms-auto mt-1">
                    <Dropdown.Toggle as='a' className="text-muted no-caret"><i className="fe fe-more-vertical fs-18"></i></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item><i className="fe fe-edit mx-1"></i> Edit</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-share mx-1"></i> Share</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-download mx-1"></i> Download</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-trash mx-1"></i> Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
              <Card.Footer className="border-top-0">
                <div className="d-flex">
                  <div>
                    <h5 className="text-info">ZIP</h5>
                    <p className="text-muted fs-13 mb-0">22 Files</p>
                  </div>
                  <div className="ms-auto mt-4">
                    <h6 className="">10 MB</h6>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <div className="text-dark mb-2 ms-1 fs-20 fw-semibold">Files</div>
        <Row className="row-sm">
          <Col xl={4} xxl={3} lg={6} md={6} sm={6}>
            <Card className="overflow-hidden">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="mx-auto my-3"><img src={require("../../../assets/images/media/files/documents/6.png")} alt="img" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">file.pdf</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">32 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={4} xxl={3} lg={6} md={6} sm={6}>
            <Card className="overflow-hidden">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}><img src={require("../../../assets/images/media/files/07.jpg")} alt="img" className="w-100 file-manager-list" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">image1.jpg</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">76 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={4} xxl={3} lg={6} md={6} sm={6}>
            <Card className="overflow-hidden">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="mx-auto my-3"><img src={require("../../../assets/images/media/files/documents/2.png")} alt="img" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">excel.xls</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">34 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={4} xxl={3} lg={6} md={6} sm={6}>
            <Card className="overflow-hidden">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}><img src={require("../../../assets/images/media/files/06.jpg")} alt="img" className="w-100 file-manager-list" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">nature.jpg</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">66 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={4} xxl={3} lg={6} md={6} sm={6}>
            <Card className="overflow-hidden">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="mx-auto my-3"><img src={require("../../../assets/images/media/files/documents/7.png")} alt="img" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">demo.ppt</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">67 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={4} xxl={3} lg={6} md={6} sm={6}>
            <Card className="overflow-hidden">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="mx-auto my-3"><img src={require("../../../assets/images/media/files/documents/10.png")} alt="img" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">video.mp4</h5>
                  </div>
                  <div className="ms-auto my-auto mt-3">
                    <span className="text-muted mb-0">320 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={4} xxl={3} lg={6} md={6} sm={6}>
            <Card className="overflow-hidden">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="mx-auto my-3"><img src={require("../../../assets/images/media/files/documents/8.png")} alt="img" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">word.doc</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">320 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={4} xxl={3} lg={6} md={6} sm={6}>
            <Card className="overflow-hidden">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}><img src={require("../../../assets/images/media/files/01.jpg")} alt="img" className="w-100 file-manager-list" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">mountain.jpg</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">320 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={4} xxl={3} lg={6} md={6} sm={6}>
            <Card className="overflow-hidden">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="mx-auto my-3"><img src={require("../../../assets/images/media/files/documents/6.png")} alt="img" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">file.pdf</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">32 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={4} xxl={3} lg={6} md={6} sm={6}>
            <Card className="overflow-hidden">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="mx-auto my-3"><img src={require("../../../assets/images/media/files/documents/2.png")} alt="img" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">excel.xls</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">34 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={4} xxl={3} lg={6} md={6} sm={6}>
            <Card className="overflow-hidden">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}><img src={require("../../../assets/images/media/files/02.jpg")} alt="img" className="w-100 file-manager-list" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="d-flex">
                    <h5 className="mb-0 fw-semibold text-break">image1.jpg</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">76 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={4} xxl={3} lg={6} md={6} sm={6}>
            <Card className="overflow-hidden">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="mx-auto my-3"><img src={require("../../../assets/images/media/files/documents/7.png")} alt="img" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">profile.ppt</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">67 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={4} xxl={3} lg={6} md={6} sm={6}>
            <Card className="overflow-hidden">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}><img src={require("../../../assets/images/media/files/04.jpg")} alt="img" className="w-100 file-manager-list" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">image2.jpg</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">66 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={4} xxl={3} lg={6} md={6} sm={6}>
            <Card className="overflow-hidden">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`}><img src={require("../../../assets/images/media/files/05.jpg")} alt="img" className="w-100 file-manager-list" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">nature.jpg</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">66 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={4} xxl={3} lg={6} md={6} sm={6}>
            <Card className="overflow-hidden">
              <Link to={`${process.env.PUBLIC_URL}/filemanager/filedetails`} className="mx-auto my-3"><img src={require("../../../assets/images/media/files/documents/9.png")} alt="img" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">exe.zip</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">320 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Col>
      {/* <!-- End Row --> */}
    </Row>
    {/* <!-- End Row --> */}
  </div>
)
  };

export default FileManager;

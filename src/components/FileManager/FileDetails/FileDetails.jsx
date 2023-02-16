import React from 'react';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './FileDetails.module.scss';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Table } from 'react-bootstrap';
import { LightGallery, RecentFolder } from '../../../Data/DataFileManger/DataFIleDetails';


const FileDetails = () => {
  return (
  <div className={styles.FileDetails}>
    <PageHeader titles="File Manager Details" active="File Manager Details" items={['Componets']} />
    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col xl={8} lg={12} md={12}>
        <Card className="custom-card overflow-hidden">
          <Card.Body className="p-3">
            <Link to="#"><img src={require("../../../assets/images/media/files/09.jpg")} alt="img" className="br-5 w-100" /></Link>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Header className="border-bottom-0">
            Related Files
          </Card.Header>
          <Card.Body className="pt-0 h-100">
            <RecentFolder />
          </Card.Body>
        </Card>
      </Col>
      <Col xl={4} lg={12} md={12}>
        <Card className="custom-card">
          <Card.Body>
            <h5 className="mb-3">File details</h5>
            <div className="">
              <Row>
                <Col xl={12}>
                  <div className="table-responsive">
                    <Table className="mb-0 table-bordered text-nowrap file-details">
                      <tbody>
                        <tr>
                          <th>File Name</th>
                          <td>image.jpg</td>
                        </tr>
                        <tr>
                          <th>Uploaded</th>
                          <td>10-10-2021</td>
                        </tr>
                        <tr>
                          <th>Size</th>
                          <td>25 MB</td>
                        </tr>
                        <tr>
                          <th>Dimensions</th>
                          <td>1000 x 350</td>
                        </tr>
                        <tr>
                          <th>Resolution Unit</th>
                          <td>1</td>
                        </tr>
                        <tr>
                          <th>File Type</th>
                          <td>jpg</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <div className="mt-5 text-center">
                    <button type="button" className="btn btn-icon  btn-info-light me-2 bradius"><i className="fe fe-edit"></i></button>
                    <button type="button" className="btn btn-icon  btn-danger-light me-2 bradius"><i className="fe fe-trash"></i></button>
                    <button type="button" className="btn btn-icon  btn-success-light me-2 bradius"><i className="fe fe-download fs-14"></i></button>
                    <button type="button" className="btn btn-icon  btn-warning-light bradius"><i className="fe fe-share-2 fs-14"></i></button>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Body className="pb-0">
            <h5 className="mb-3">Recent Files</h5>
            <LightGallery />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row--> */}
  </div>
)
};

export default FileDetails;

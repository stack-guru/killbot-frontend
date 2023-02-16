import React from 'react';
import styles from './EditTable.module.scss';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import { Col, Row, Card } from 'react-bootstrap';
import { BasicEditTable, Savetable } from '../../../../Data/Pages/TablesData/DataEditable';

const EditTable = () => {
  return (
  <div className={styles.EditTable}>
    <PageHeader titles="Editor-Table" active="Editor-Table" items={['Tables']} />
    {/* <!-- Row --> */}
    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Edit Table</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <BasicEditTable />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <div className="row">
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Add New Row with Edit Table</Card.Title>
          </Card.Header>
          <Card.Body>
            <Savetable />
          </Card.Body>
        </Card>
      </Col>
    </div>
    {/* <!-- End Row --> */}
  </div>
)
  };

export default EditTable;

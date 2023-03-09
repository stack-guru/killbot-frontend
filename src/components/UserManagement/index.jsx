import React, { useEffect } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import PageHeader from "../../Layouts/PageHeader/PageHeader";
import { Col, Row, Card } from 'react-bootstrap';
// import { BasicEditTable, Savetable } from '../../Data/Pages/TablesData/DataEditable';
import UserTable from "./components/UserTable";

const UserManagement = () => {

  return (
    <div className={styles.userManagement}>
      <PageHeader
        titles="User Management"
        active="User Management"
        items={["Home"]}
      />

      {/* <!-- Row --> */}
      <div className="row">
        <Col lg={12}>
          <Card>
            {/* <Card.Header>
              <Card.Title as="h3">Add New Row with Edit Table</Card.Title>
            </Card.Header> */}
            <Card.Body>
              <UserTable />
            </Card.Body>
          </Card>
        </Col>
      </div>
      {/* <!-- End Row --> */}
    </div>
  );
};

export default UserManagement;

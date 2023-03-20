import React, { useState, Fragment, useEffect } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import PageHeader from "../../Layouts/PageHeader/PageHeader";
import {
  Col,
  Row,
  Card,
  Button,
  Tab,
  Nav,
  Tabs,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import { Chartdetails } from "../../Data/App/DataChart";
import { getPackages } from "../../Slices/packageSlice";
import { useDispatch, useSelector } from "react-redux";
import PackageTable from "./PackageTable";

const PackageManage = () => {
  return (
    <div className={styles.PackageManage}>
      <PageHeader
        titles="Package Management"
        active="Package Management"
        items={["Home"]}
      />

      <Card>
        <Card.Body>
          <div className="table-responsive">
            <PackageTable />
          </div>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <Card.Title as="h3">Sales</Card.Title>
        </Card.Header>
        <Card.Body>
          <Chartdetails />
        </Card.Body>
      </Card>
    </div>
  );
};

export default PackageManage;

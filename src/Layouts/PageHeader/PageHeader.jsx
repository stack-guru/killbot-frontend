import React from 'react';
import styles from './PageHeader.module.scss';
import { Breadcrumb } from 'react-bootstrap';

const PageHeader = (props) => {

  return (

    <div className={styles.PageHeader}>
      {/* <!-- PAGE-HEADER --> */}
      <div className="page-header">
        <h1 className="page-title">{props.titles}</h1>
        <div>
          <Breadcrumb>
          {props.items.map((value, index) => {
          return<Breadcrumb.Item href="#" key={index}>{value}</Breadcrumb.Item>
        })}
        <Breadcrumb.Item href="#" active>{props.active}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- PAGE-HEADER END --> */}
    </div>
  )
};

export default PageHeader;

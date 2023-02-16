import React from 'react';
import styles from './TypiconsIcons.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';


const TypiconsIcons = () => {

  return (
    
  <div className={styles.TypiconsIcons}>
    <PageHeader titles="Typicons" active="Typicons" items={['Icons']} />

    {/* <!-- ROW OPEN --> */}
    <Row className="row-cards">
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Typicons icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={12} sm={12}>
                <p>Simply beautiful open source icons. For more info <a href="https://www.s-ings.com/typicons/">click here</a>.</p>
                <p><code>&lt;i className="typcn typcn-ICON_NAME"&gt;&lt;/i&gt;</code></p>
              </Col>
              <Col lg={12} sm={12}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-chart-pie-outline</Tooltip>}>
                        <i className="typcn typcn-chart-pie-outline" title="typcn typcn-chart-pie-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-chart-pie</Tooltip>}>
                        <i className="typcn typcn-chart-pie" title="typcn typcn-chart-pie"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-chevron-left-outline</Tooltip>}>
                        <i className="typcn typcn-chevron-left-outline" title="typcn typcn-chevron-left-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-chevron-left</Tooltip>}>
                        <i className="typcn typcn-chevron-left" title="typcn typcn-chevron-left"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-chevron-right-outline</Tooltip>}>
                        <i className="typcn typcn-chevron-right-outline" title="typcn typcn-chevron-right-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-chevron-right</Tooltip>}>
                        <i className="typcn typcn-chevron-right" title="typcn typcn-chevron-right"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-clipboard</Tooltip>}>
                        <i className="typcn typcn-clipboard" title="typcn typcn-clipboard"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-cloud-storage</Tooltip>}>
                        <i className="typcn typcn-cloud-storage" title="typcn typcn-cloud-storage"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-cloud-storage-outline</Tooltip>}>
                        <i className="typcn typcn-cloud-storage-outline" title="typcn typcn-cloud-storage-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-code-outline</Tooltip>}>
                        <i className="typcn typcn-code-outline" title="typcn typcn-code-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-code</Tooltip>}>
                        <i className="typcn typcn-code" title="typcn typcn-code"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-coffee</Tooltip>}>
                        <i className="typcn typcn-coffee" title="typcn typcn-coffee"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-cog-outline</Tooltip>}>
                        <i className="typcn typcn-cog-outline" title="typcn typcn-cog-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-cog</Tooltip>}>
                        <i className="typcn typcn-cog" title="typcn typcn-cog"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-compass</Tooltip>}>
                        <i className="typcn typcn-compass" title="typcn typcn-compass"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-contacts</Tooltip>}>
                        <i className="typcn typcn-contacts" title="typcn typcn-contacts"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-credit-card</Tooltip>}>
                        <i className="typcn typcn-credit-card" title="typcn typcn-credit-card"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-css3</Tooltip>}>
                        <i className="typcn typcn-css3" title="typcn typcn-css3"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-database</Tooltip>}>
                        <i className="typcn typcn-database" title="typcn typcn-database"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-delete-outline</Tooltip>}>
                        <i className="typcn typcn-delete-outline" title="typcn typcn-delete-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-delete</Tooltip>}>
                        <i className="typcn typcn-delete" title="typcn typcn-delete"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-device-desktop</Tooltip>}>
                        <i className="typcn typcn-device-desktop" title="typcn typcn-device-desktop"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-device-laptop</Tooltip>}>
                        <i className="typcn typcn-device-laptop" title="typcn typcn-device-laptop"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-device-phone</Tooltip>}>
                        <i className="typcn typcn-device-phone" title="typcn typcn-device-phone"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-device-tablet</Tooltip>}>
                        <i className="typcn typcn-device-tablet" title="typcn typcn-device-tablet"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-directions</Tooltip>}>
                        <i className="typcn typcn-directions" title="typcn typcn-directions"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-divide-outline</Tooltip>}>
                        <i className="typcn typcn-divide-outline" title="typcn typcn-divide-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-divide</Tooltip>}>
                        <i className="typcn typcn-divide" title="typcn typcn-divide"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-document-add</Tooltip>}>
                        <i className="typcn typcn-document-add" title="typcn typcn-document-add"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-document-delete</Tooltip>}>
                        <i className="typcn typcn-document-delete" title="typcn typcn-document-delete"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-document-text</Tooltip>}>
                        <i className="typcn typcn-document-text" title="typcn typcn-document-text"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-document</Tooltip>}>
                        <i className="typcn typcn-document" title="typcn typcn-document"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-download-outline</Tooltip>}>
                        <i className="typcn typcn-download-outline" title="typcn typcn-download-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-download</Tooltip>}>
                        <i className="typcn typcn-download" title="typcn typcn-download"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-dropbox</Tooltip>}>
                        <i className="typcn typcn-dropbox" title="typcn typcn-dropbox"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-edit</Tooltip>}>
                        <i className="typcn typcn-edit" title="typcn typcn-edit"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-eject-outline</Tooltip>}>
                        <i className="typcn typcn-eject-outline" title="typcn typcn-eject-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-eject</Tooltip>}>
                        <i className="typcn typcn-eject" title="typcn typcn-eject"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-equals-outline</Tooltip>}>
                        <i className="typcn typcn-equals-outline" title="typcn typcn-equals-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-equals</Tooltip>}>
                        <i className="typcn typcn-equals" title="typcn typcn-equals"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-export-outline</Tooltip>}>
                        <i className="typcn typcn-export-outline" title="typcn typcn-export-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-export</Tooltip>}>
                        <i className="typcn typcn-export" title="typcn typcn-export"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-eye-outline</Tooltip>}>
                        <i className="typcn typcn-eye-outline" title="typcn typcn-eye-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-eye</Tooltip>}>
                        <i className="typcn typcn-eye" title="typcn typcn-eye"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-feather</Tooltip>}>
                        <i className="typcn typcn-feather" title="typcn typcn-feather"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-film</Tooltip>}>
                        <i className="typcn typcn-film" title="typcn typcn-film"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-filter</Tooltip>}>
                        <i className="typcn typcn-filter" title="typcn typcn-filter"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-flag-outline</Tooltip>}>
                        <i className="typcn typcn-flag-outline" title="typcn typcn-flag-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-flag</Tooltip>}>
                        <i className="typcn typcn-flag" title="typcn typcn-flag"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-flash-outline</Tooltip>}>
                        <i className="typcn typcn-flash-outline" title="typcn typcn-flash-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-flash</Tooltip>}>
                        <i className="typcn typcn-flash" title="typcn typcn-flash"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-flow-children</Tooltip>}>
                        <i className="typcn typcn-flow-children" title="typcn typcn-flow-children"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-flow-merge</Tooltip>}>
                        <i className="typcn typcn-flow-merge" title="typcn typcn-flow-merge"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-flow-parallel</Tooltip>}>
                        <i className="typcn typcn-flow-parallel" title="typcn typcn-flow-parallel"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-flow-switch</Tooltip>}>
                        <i className="typcn typcn-flow-switch" title="typcn typcn-flow-switch"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-folder-add</Tooltip>}>
                        <i className="typcn typcn-folder-add" title="typcn typcn-folder-add"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-folder-delete</Tooltip>}>
                        <i className="typcn typcn-folder-delete" title="typcn typcn-folder-delete"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-folder-open</Tooltip>}>
                        <i className="typcn typcn-folder-open" title="typcn typcn-folder-open"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-folder</Tooltip>}>
                        <i className="typcn typcn-folder" title="typcn typcn-folder"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-gift</Tooltip>}>
                        <i className="typcn typcn-gift" title="typcn typcn-gift"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-globe-outline</Tooltip>}>
                        <i className="typcn typcn-globe-outline" title="typcn typcn-globe-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-globe</Tooltip>}>
                        <i className="typcn typcn-globe" title="typcn typcn-globe"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-group-outline</Tooltip>}>
                        <i className="typcn typcn-group-outline" title="typcn typcn-group-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-group</Tooltip>}>
                        <i className="typcn typcn-group" title="typcn typcn-group"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-headphones</Tooltip>}>
                        <i className="typcn typcn-headphones" title="typcn typcn-headphones"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-heart-full-outline</Tooltip>}>
                        <i className="typcn typcn-heart-full-outline" title="typcn typcn-heart-full-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-heart-half-outline</Tooltip>}>
                        <i className="typcn typcn-heart-half-outline" title="typcn typcn-heart-half-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-heart-outline</Tooltip>}>
                        <i className="typcn typcn-heart-outline" title="typcn typcn-heart-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-heart</Tooltip>}>
                        <i className="typcn typcn-heart" title="typcn typcn-heart"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-home-outline</Tooltip>}>
                        <i className="typcn typcn-home-outline" title="typcn typcn-home-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-home</Tooltip>}>
                        <i className="typcn typcn-home" title="typcn typcn-home"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-html5</Tooltip>}>
                        <i className="typcn typcn-html5" title="typcn typcn-html5"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-image-outline</Tooltip>}>
                        <i className="typcn typcn-image-outline" title="typcn typcn-image-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-image</Tooltip>}>
                        <i className="typcn typcn-image" title="typcn typcn-image"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-infinity-outline</Tooltip>}>
                        <i className="typcn typcn-infinity-outline" title="typcn typcn-infinity-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-info-large-outline</Tooltip>}>
                        <i className="typcn typcn-info-large-outline" title="typcn typcn-info-large-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-info-large</Tooltip>}>
                        <i className="typcn typcn-info-large" title="typcn typcn-info-large"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-info-outline</Tooltip>}>
                        <i className="typcn typcn-info-outline" title="typcn typcn-info-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-info</Tooltip>}>
                        <i className="typcn typcn-info" title="typcn typcn-info"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-input-checked-outline</Tooltip>}>
                        <i className="typcn typcn-input-checked-outline" title="typcn typcn-input-checked-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-input-checked</Tooltip>}>
                        <i className="typcn typcn-input-checked" title="typcn typcn-input-checked"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-key-outline</Tooltip>}>
                        <i className="typcn typcn-key-outline" title="typcn typcn-key-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-key</Tooltip>}>
                        <i className="typcn typcn-key" title="typcn typcn-key"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-keyboard</Tooltip>}>
                        <i className="typcn typcn-keyboard" title="typcn typcn-keyboard"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-leaf</Tooltip>}>
                        <i className="typcn typcn-leaf" title="typcn typcn-leaf"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-lightbulb</Tooltip>}>
                        <i className="typcn typcn-lightbulb" title="typcn typcn-lightbulb"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-link-outline</Tooltip>}>
                        <i className="typcn typcn-link-outline" title="typcn typcn-link-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-link</Tooltip>}>
                        <i className="typcn typcn-link" title="typcn typcn-link"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-location-arrow-outline</Tooltip>}>
                        <i className="typcn typcn-location-arrow-outline" title="typcn typcn-location-arrow-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-location-arrow</Tooltip>}>
                        <i className="typcn typcn-location-arrow" title="typcn typcn-location-arrow"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-location-outline</Tooltip>}>
                        <i className="typcn typcn-location-outline" title="typcn typcn-location-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-location</Tooltip>}>
                        <i className="typcn typcn-location" title="typcn typcn-location"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-lock-closed-outline</Tooltip>}>
                        <i className="typcn typcn-lock-closed-outline" title="typcn typcn-lock-closed-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-lock-closed</Tooltip>}>
                        <i className="typcn typcn-lock-closed" title="typcn typcn-lock-closed"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-lock-open-outline</Tooltip>}>
                        <i className="typcn typcn-lock-open-outline" title="typcn typcn-lock-open-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-lock-open</Tooltip>}>
                        <i className="typcn typcn-lock-open" title="typcn typcn-lock-open"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-mail</Tooltip>}>
                        <i className="typcn typcn-mail" title="typcn typcn-mail"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-map</Tooltip>}>
                        <i className="typcn typcn-map" title="typcn typcn-map"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-media-eject-outline</Tooltip>}>
                        <i className="typcn typcn-media-eject-outline" title="typcn typcn-media-eject-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-media-eject</Tooltip>}>
                        <i className="typcn typcn-media-eject" title="typcn typcn-media-eject"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-media-fast-forward-outline</Tooltip>}>
                        <i className="typcn typcn-media-fast-forward-outline" title="typcn typcn-media-fast-forward-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-media-fast-forward</Tooltip>}>
                        <i className="typcn typcn-media-fast-forward" title="typcn typcn-media-fast-forward"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-media-pause-outline</Tooltip>}>
                        <i className="typcn typcn-media-pause-outline" title="typcn typcn-media-pause-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-media-pause</Tooltip>}>
                        <i className="typcn typcn-media-pause" title="typcn typcn-media-pause"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-media-play-outline</Tooltip>}>
                        <i className="typcn typcn-media-play-outline" title="typcn typcn-media-play-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-media-play-reverse-outline</Tooltip>}>
                        <i className="typcn typcn-media-play-reverse-outline" title="typcn typcn-media-play-reverse-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-media-play-reverse</Tooltip>}>
                        <i className="typcn typcn-media-play-reverse" title="typcn typcn-media-play-reverse"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-media-play</Tooltip>}>
                        <i className="typcn typcn-media-play" title="typcn typcn-media-play"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-media-record-outline</Tooltip>}>
                        <i className="typcn typcn-media-record-outline" title="typcn typcn-media-record-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-media-record</Tooltip>}>
                        <i className="typcn typcn-media-record" title="typcn typcn-media-record"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-media-rewind-outline</Tooltip>}>
                        <i className="typcn typcn-media-rewind-outline" title="typcn typcn-media-rewind-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-media-rewind</Tooltip>}>
                        <i className="typcn typcn-media-rewind" title="typcn typcn-media-rewind"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-media-stop-outline</Tooltip>}>
                        <i className="typcn typcn-media-stop-outline" title="typcn typcn-media-stop-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-media-stop</Tooltip>}>
                        <i className="typcn typcn-media-stop" title="typcn typcn-media-stop"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-message-typing</Tooltip>}>
                        <i className="typcn typcn-message-typing" title="typcn typcn-message-typing"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-message</Tooltip>}>
                        <i className="typcn typcn-message" title="typcn typcn-message"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-messages</Tooltip>}>
                        <i className="typcn typcn-messages" title="typcn typcn-messages"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-microphone-outline</Tooltip>}>
                        <i className="typcn typcn-microphone-outline" title="typcn typcn-microphone-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-microphone</Tooltip>}>
                        <i className="typcn typcn-microphone" title="typcn typcn-microphone"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-minus-outline</Tooltip>}>
                        <i className="typcn typcn-minus-outline" title="typcn typcn-minus-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-minus</Tooltip>}>
                        <i className="typcn typcn-minus" title="typcn typcn-minus"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-mortar-board</Tooltip>}>
                        <i className="typcn typcn-mortar-board" title="typcn typcn-mortar-board"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-news</Tooltip>}>
                        <i className="typcn typcn-news" title="typcn typcn-news"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-notes-outline</Tooltip>}>
                        <i className="typcn typcn-notes-outline" title="typcn typcn-notes-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-notes</Tooltip>}>
                        <i className="typcn typcn-notes" title="typcn typcn-notes"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-pen</Tooltip>}>
                        <i className="typcn typcn-pen" title="typcn typcn-pen"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-pencil</Tooltip>}>
                        <i className="typcn typcn-pencil" title="typcn typcn-pencil"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-phone-outline</Tooltip>}>
                        <i className="typcn typcn-phone-outline" title="typcn typcn-phone-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-phone</Tooltip>}>
                        <i className="typcn typcn-phone" title="typcn typcn-phone"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-pi-outline</Tooltip>}>
                        <i className="typcn typcn-pi-outline" title="typcn typcn-pi-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-pi</Tooltip>}>
                        <i className="typcn typcn-pi" title="typcn typcn-pi"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-pin-outline</Tooltip>}>
                        <i className="typcn typcn-pin-outline" title="typcn typcn-pin-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-pin</Tooltip>}>
                        <i className="typcn typcn-pin" title="typcn typcn-pin"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-pipette</Tooltip>}>
                        <i className="typcn typcn-pipette" title="typcn typcn-pipette"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-plane-outline</Tooltip>}>
                        <i className="typcn typcn-plane-outline" title="typcn typcn-plane-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-plane</Tooltip>}>
                        <i className="typcn typcn-plane" title="typcn typcn-plane"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-plug</Tooltip>}>
                        <i className="typcn typcn-plug" title="typcn typcn-plug"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-plus-outline</Tooltip>}>
                        <i className="typcn typcn-plus-outline" title="typcn typcn-plus-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-plus</Tooltip>}>
                        <i className="typcn typcn-plus" title="typcn typcn-plus"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-point-of-interest-outline</Tooltip>}>
                        <i className="typcn typcn-point-of-interest-outline" title="typcn typcn-point-of-interest-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-point-of-interest</Tooltip>}>
                        <i className="typcn typcn-point-of-interest" title="typcn typcn-point-of-interest"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-power-outline</Tooltip>}>
                        <i className="typcn typcn-power-outline" title="typcn typcn-power-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-power</Tooltip>}>
                        <i className="typcn typcn-power" title="typcn typcn-power"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-printer</Tooltip>}>
                        <i className="typcn typcn-printer" title="typcn typcn-printer"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-puzzle-outline</Tooltip>}>
                        <i className="typcn typcn-puzzle-outline" title="typcn typcn-puzzle-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-puzzle</Tooltip>}>
                        <i className="typcn typcn-puzzle" title="typcn typcn-puzzle"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-radar-outline</Tooltip>}>
                        <i className="typcn typcn-radar-outline" title="typcn typcn-radar-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-rada</Tooltip>}>
                        <i className="typcn typcn-radar" title="typcn typcn-radar"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-refresh-outline</Tooltip>}>
                        <i className="typcn typcn-refresh-outline" title="typcn typcn-refresh-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-refresh</Tooltip>}>
                        <i className="typcn typcn-refresh" title="typcn typcn-refresh"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-rss-outline</Tooltip>}>
                        <i className="typcn typcn-rss-outline" title="typcn typcn-rss-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-rss</Tooltip>}>
                        <i className="typcn typcn-rss" title="typcn typcn-rss"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-scissors-outline</Tooltip>}>
                        <i className="typcn typcn-scissors-outline" title="typcn typcn-scissors-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-scissors</Tooltip>}>
                        <i className="typcn typcn-scissors" title="typcn typcn-scissors"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-shopping-bag</Tooltip>}>
                        <i className="typcn typcn-shopping-bag" title="typcn typcn-shopping-bag"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-shopping-cart</Tooltip>}>
                        <i className="typcn typcn-shopping-cart" title="typcn typcn-shopping-cart"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-at-circular</Tooltip>}>
                        <i className="typcn typcn-social-at-circular" title="typcn typcn-social-at-circular"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-dribbble-circular</Tooltip>}>
                        <i className="typcn typcn-social-dribbble-circular" title="typcn typcn-social-dribbble-circular"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-dribbble</Tooltip>}>
                        <i className="typcn typcn-social-dribbble" title="typcn typcn-social-dribbble"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-facebook-circular</Tooltip>}>
                        <i className="typcn typcn-social-facebook-circular" title="typcn typcn-social-facebook-circular"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-facebook</Tooltip>}>
                        <i className="typcn typcn-social-facebook" title="typcn typcn-social-facebook"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-flickr-circular</Tooltip>}>
                        <i className="typcn typcn-social-flickr-circular" title="typcn typcn-social-flickr-circular"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-flickr</Tooltip>}>
                        <i className="typcn typcn-social-flickr" title="typcn typcn-social-flickr"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-github-circular</Tooltip>}>
                        <i className="typcn typcn-social-github-circular" title="typcn typcn-social-github-circular"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-github</Tooltip>}>
                        <i className="typcn typcn-social-github" title="typcn typcn-social-github"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-google-plus-circular</Tooltip>}>
                        <i className="typcn typcn-social-google-plus-circular" title="typcn typcn-social-google-plus-circular"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-google-plus</Tooltip>}>
                        <i className="typcn typcn-social-google-plus" title="typcn typcn-social-google-plus"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-instagram-circular</Tooltip>}>
                        <i className="typcn typcn-social-instagram-circular" title="typcn typcn-social-instagram-circular"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-instagram</Tooltip>}>
                        <i className="typcn typcn-social-instagram" title="typcn typcn-social-instagram"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-last-fm-circular</Tooltip>}>
                        <i className="typcn typcn-social-last-fm-circular" title="typcn typcn-social-last-fm-circular"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-last-fm</Tooltip>}>
                        <i className="typcn typcn-social-last-fm" title="typcn typcn-social-last-fm"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-linkedin-circular</Tooltip>}>
                        <i className="typcn typcn-social-linkedin-circular" title="typcn typcn-social-linkedin-circular"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-linkedin</Tooltip>}>
                        <i className="typcn typcn-social-linkedin" title="typcn typcn-social-linkedin"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-pinterest-circular</Tooltip>}>
                        <i className="typcn typcn-social-pinterest-circular" title="typcn typcn-social-pinterest-circular"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-pinterest</Tooltip>}>
                        <i className="typcn typcn-social-pinterest" title="typcn typcn-social-pinterest"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-skype-outline</Tooltip>}>
                        <i className="typcn typcn-social-skype-outline" title="typcn typcn-social-skype-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-skype</Tooltip>}>
                        <i className="typcn typcn-social-skype" title="typcn typcn-social-skype"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-tumbler-circular</Tooltip>}>
                        <i className="typcn typcn-social-tumbler-circular" title="typcn typcn-social-tumbler-circular"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-tumbler</Tooltip>}>
                        <i className="typcn typcn-social-tumbler" title="typcn typcn-social-tumbler"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-twitter-circular</Tooltip>}>
                        <i className="typcn typcn-social-twitter-circular" title="typcn typcn-social-twitter-circular"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-twitter</Tooltip>}>
                        <i className="typcn typcn-social-twitter" title="typcn typcn-social-twitter"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-vimeo-circular</Tooltip>}>
                        <i className="typcn typcn-social-vimeo-circular" title="typcn typcn-social-vimeo-circular"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-vimeo</Tooltip>}>
                        <i className="typcn typcn-social-vimeo" title="typcn typcn-social-vimeo"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-youtube-circular</Tooltip>}>
                        <i className="typcn typcn-social-youtube-circular" title="typcn typcn-social-youtube-circular"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-social-youtube</Tooltip>}>
                        <i className="typcn typcn-social-youtube" title="typcn typcn-social-youtube"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-sort-alphabetically-outline</Tooltip>}>
                        <i className="typcn typcn-sort-alphabetically-outline" title="typcn typcn-sort-alphabetically-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-sort-alphabetically</Tooltip>}>
                        <i className="typcn typcn-sort-alphabetically" title="typcn typcn-sort-alphabetically"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-sort-numerically-outline</Tooltip>}>
                        <i className="typcn typcn-sort-numerically-outline" title="typcn typcn-sort-numerically-outline"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-tabs-outline</Tooltip>}>
                        <i className="typcn typcn-tabs-outline" title="typcn typcn-tabs-outline"></i></OverlayTrigger>
                    </li>
                    <li></li>
                    <li>

                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW CLOSED --> */}
  </div>
)
  };

export default TypiconsIcons;

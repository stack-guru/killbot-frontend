import React from 'react';
import styles from './FeatherIcons.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';


const FeatherIcons = () => {

  return (

  <div className={styles.FeatherIcons}>
    <PageHeader titles="Feather Icons" active="Feather Icons" items={['Icons']} />
    {/* <!-- ROW OPEN --> */}
    <Row className="row-cards">
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Feather Icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={12} sm={12}>
                <p>Simply beautiful open source icons. For more info <a href="https://dropways.github.io/feathericons/">click here</a>.</p>
                <p><code>&lt;i className="fe fe-ICON_NAME"&gt;&lt;/i&gt;</code></p>
              </Col>
              <Col lg={12} sm={12}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item"><OverlayTrigger placement='top' overlay={<Tooltip>fe fe-activity</Tooltip>}>
                      <i className="fe fe-activity"></i>
                    </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-airplay</Tooltip>}><i className="fe fe-airplay"></i>

                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-alert-circle</Tooltip>}>
                        <i className="fe fe-alert-circle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-alert-octagon</Tooltip>}>
                        <i className="fe fe-alert-octagon"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-alert-triangle</Tooltip>}>
                        <i className="fe fe-alert-triangle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-align-center</Tooltip>}>
                        <i className="fe fe-align-center"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-align-justify</Tooltip>}>
                        <i className="fe fe-align-justify"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-align-left</Tooltip>}>
                        <i className="fe fe-align-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-align-right</Tooltip>}>
                        <i className="fe fe-align-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-anchor</Tooltip>}>
                        <i className="fe fe-anchor"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-aperture</Tooltip>}>
                        <i className="fe fe-aperture"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-arrow-down</Tooltip>}>
                        <i className="fe fe-arrow-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-arrow-down-circle</Tooltip>}>
                        <i className="fe fe-arrow-down-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-arrow-down-left</Tooltip>}>
                        <i className="fe fe-arrow-down-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-arrow-down-right</Tooltip>}>
                        <i className="fe fe-arrow-down-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-arrow-left</Tooltip>}>
                        <i className="fe fe-arrow-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-arrow-left-circle</Tooltip>}>
                        <i className="fe fe-arrow-left-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-arrow-right</Tooltip>}>
                        <i className="fe fe-arrow-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-arrow-right-circle</Tooltip>}>
                        <i className="fe fe-arrow-right-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-arrow-up</Tooltip>}>
                        <i className="fe fe-arrow-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-arrow-up-circle</Tooltip>}>
                        <i className="fe fe-arrow-up-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-arrow-up-left</Tooltip>}>
                        <i className="fe fe-arrow-up-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-arrow-up-right</Tooltip>}>
                        <i className="fe fe-arrow-up-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-at-sign</Tooltip>}>
                        <i className="fe fe-at-sign"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-award</Tooltip>}>
                        <i className="fe fe-award"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>lnr lnr-pie-chart</Tooltip>}>
                        <i className="lnr lnr-pie-chart"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-battery</Tooltip>}>
                        <i className="fe fe-battery"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-battery-charging</Tooltip>}>
                        <i className="fe fe-battery-charging"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-bell</Tooltip>}>
                        <i className="fe fe-bell"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-bell-off</Tooltip>}>
                        <i className="fe fe-bell-off"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-bluetooth</Tooltip>}>
                        <i className="fe fe-bluetooth"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-bold</Tooltip>}>
                        <i className="fe fe-bold"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-book</Tooltip>}>
                        <i className="fe fe-book"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-book-open</Tooltip>}>
                        <i className="fe fe-book-open"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-bookmark</Tooltip>}>
                        <i className="fe fe-bookmark"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-box</Tooltip>}>
                        <i className="fe fe-box"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-briefcase</Tooltip>}>
                        <i className="fe fe-briefcase"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-calendar</Tooltip>}>
                        <i className="fe fe-calendar"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-camera</Tooltip>}>
                        <i className="fe fe-camera"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-camera-off</Tooltip>}>
                        <i className="fe fe-camera-off"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-cast</Tooltip>}>
                        <i className="fe fe-cast"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-check</Tooltip>}>
                        <i className="fe fe-check"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-check-circle</Tooltip>}>
                        <i className="fe fe-check-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-check-square</Tooltip>}>
                        <i className="fe fe-check-square"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-chevron-down</Tooltip>}>
                        <i className="fe fe-chevron-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-chevron-left</Tooltip>}>
                        <i className="fe fe-chevron-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-chevron-right</Tooltip>}>
                        <i className="fe fe-chevron-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-chevron-up</Tooltip>}>
                        <i className="fe fe-chevron-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-chevrons-down</Tooltip>}>
                        <i className="fe fe-chevrons-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-chevrons-left</Tooltip>}>
                        <i className="fe fe-chevrons-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-chevrons-right</Tooltip>}>
                        <i className="fe fe-chevrons-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-chevrons-up</Tooltip>}>
                        <i className="fe fe-chevrons-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-chrome</Tooltip>}>
                        <i className="fe fe-chrome"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-circle</Tooltip>}>
                        <i className="fe fe-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-clipboard</Tooltip>}>
                        <i className="fe fe-clipboard"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-clock</Tooltip>}>
                        <i className="fe fe-clock"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-cloud</Tooltip>}>
                        <i className="fe fe-cloud"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-cloud-drizzle</Tooltip>}>
                        <i className="fe fe-cloud-drizzle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-cloud-lightning</Tooltip>}>
                        <i className="fe fe-cloud-lightning"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-cloud-off</Tooltip>}>
                        <i className="fe fe-cloud-off"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-cloud-rain</Tooltip>}>
                        <i className="fe fe-cloud-rain"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-cloud-snow</Tooltip>}>
                        <i className="fe fe-cloud-snow"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-code</Tooltip>}>
                        <i className="fe fe-code"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-codepen</Tooltip>}>
                        <i className="fe fe-codepen"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-command</Tooltip>}>
                        <i className="fe fe-command"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-compass</Tooltip>}>
                        <i className="fe fe-compass"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-copy</Tooltip>}>
                        <i className="fe fe-copy"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-corner-down-left</Tooltip>}>
                        <i className="fe fe-corner-down-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-corner-down-right</Tooltip>}>
                        <i className="fe fe-corner-down-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-corner-left-down</Tooltip>}>
                        <i className="fe fe-corner-left-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-corner-left-up</Tooltip>}>
                        <i className="fe fe-corner-left-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-corner-right-down</Tooltip>}>
                        <i className="fe fe-corner-right-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-corner-right-up</Tooltip>}>
                        <i className="fe fe-corner-right-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-corner-up-left</Tooltip>}>
                        <i className="fe fe-corner-up-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-corner-up-right</Tooltip>}>
                        <i className="fe fe-corner-up-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-cpu</Tooltip>}>
                        <i className="fe fe-cpu"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-credit-card</Tooltip>}>
                        <i className="fe fe-credit-card"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-crop-bs-tip</Tooltip>}>
                        <i className="fe fe-crop"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-crosshair</Tooltip>}>
                        <i className="fe fe-crosshair"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-database</Tooltip>}>
                        <i className="fe fe-database"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-delete</Tooltip>}>
                        <i className="fe fe-delete"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-disc-bs-tip</Tooltip>}>
                        <i className="fe fe-disc"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-dollar-sign</Tooltip>}>
                        <i className="fe fe-dollar-sign"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-download</Tooltip>}>
                        <i className="fe fe-download"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-download-cloud</Tooltip>}>
                        <i className="fe fe-download-cloud"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-droplet</Tooltip>}>
                        <i className="fe fe-droplet"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-edit</Tooltip>}>
                        <i className="fe fe-edit"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-edit-2</Tooltip>}>
                        <i className="fe fe-edit-2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-edit-3</Tooltip>}>
                        <i className="fe fe-edit-3"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-external-link</Tooltip>}>
                        <i className="fe fe-external-link"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-eye</Tooltip>}>
                        <i className="fe fe-eye"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-eye-off</Tooltip>}>
                        <i className="fe fe-eye-off"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-facebook</Tooltip>}>
                        <i className="fe fe-facebook"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-fast-forward</Tooltip>}>
                        <i className="fe fe-fast-forward"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-feather</Tooltip>}>
                        <i className="fe fe-feather"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-file</Tooltip>}>
                        <i className="fe fe-file"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-file-minus</Tooltip>}>
                        <i className="fe fe-file-minus"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-file-plus</Tooltip>}>
                        <i className="fe fe-file-plus"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-file-text</Tooltip>}>
                        <i className="fe fe-file-text"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-film</Tooltip>}>
                        <i className="fe fe-film"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-filter</Tooltip>}>
                        <i className="fe fe-filter"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-flag</Tooltip>}>
                        <i className="fe fe-flag"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-folder</Tooltip>}>
                        <i className="fe fe-folder"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-folder-minus</Tooltip>}>
                        <i className="fe fe-folder-minus"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-folder-plus</Tooltip>}>
                        <i className="fe fe-folder-plus"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-git-branch</Tooltip>}>
                        <i className="fe fe-git-branch"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-git-commit</Tooltip>}>
                        <i className="fe fe-git-commit"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-git-merge</Tooltip>}>
                        <i className="fe fe-git-merge"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-git-pull-request</Tooltip>}>
                        <i className="fe fe-git-pull-request"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-github</Tooltip>}>
                        <i className="fe fe-github"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-gitlab</Tooltip>}>
                        <i className="fe fe-gitlab"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-globe</Tooltip>}>
                        <i className="fe fe-globe"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-grid</Tooltip>}>
                        <i className="fe fe-grid"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-hard-drive</Tooltip>}>
                        <i className="fe fe-hard-drive"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-hash</Tooltip>}>
                        <i className="fe fe-hash"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-headphones</Tooltip>}>
                        <i className="fe fe-headphones"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-heart</Tooltip>}>
                        <i className="fe fe-heart"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-help-circle</Tooltip>}>
                        <i className="fe fe-help-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-home</Tooltip>}>
                        <i className="fe fe-home"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-image</Tooltip>}>
                        <i className="fe fe-image"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-inbox</Tooltip>}>
                        <i className="fe fe-inbox"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-info</Tooltip>}>
                        <i className="fe fe-info"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-instagram</Tooltip>}>
                        <i className="fe fe-instagram"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-italic</Tooltip>}>
                        <i className="fe fe-italic"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-layers</Tooltip>}>
                        <i className="fe fe-layers"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-layout</Tooltip>}>
                        <i className="fe fe-layout"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-life-buoy</Tooltip>}>
                        <i className="fe fe-life-buoy"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-link</Tooltip>}>
                        <i className="fe fe-link"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-link-2</Tooltip>}>
                        <i className="fe fe-link-2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-linkedin</Tooltip>}>
                        <i className="fe fe-linkedin"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-list</Tooltip>}>
                        <i className="fe fe-list"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-loader</Tooltip>}>
                        <i className="fe fe-loader"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-lock</Tooltip>}>
                        <i className="fe fe-lock"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-log-in</Tooltip>}>
                        <i className="fe fe-log-in"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-log-out</Tooltip>}>
                        <i className="fe fe-log-out"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-mail</Tooltip>}>
                        <i className="fe fe-mail"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-map</Tooltip>}>
                        <i className="fe fe-map"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-map-pin</Tooltip>}>
                        <i className="fe fe-map-pin"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-maximize</Tooltip>}>
                        <i className="fe fe-maximize"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-maximize-2</Tooltip>}>
                        <i className="fe fe-maximize-2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-menu</Tooltip>}>
                        <i className="fe fe-menu"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-message-circle</Tooltip>}>
                        <i className="fe fe-message-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-message-square</Tooltip>}>
                        <i className="fe fe-message-square"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-mi</Tooltip>}>
                        <i className="fe fe-mic"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-mic-off</Tooltip>}>
                        <i className="fe fe-mic-off"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-minimize</Tooltip>}>
                        <i className="fe fe-minimize"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-minimize-2</Tooltip>}>
                        <i className="fe fe-minimize-2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-minus</Tooltip>}>
                        <i className="fe fe-minus"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-minus-circle</Tooltip>}>
                        <i className="fe fe-minus-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-minus-square</Tooltip>}>
                        <i className="fe fe-minus-square"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-monitor</Tooltip>}>
                        <i className="fe fe-monitor"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-moon</Tooltip>}>
                        <i className="fe fe-moon"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-more-horizontal</Tooltip>}>
                        <i className="fe fe-more-horizontal"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-more-vertical</Tooltip>}>
                        <i className="fe fe-more-vertical"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-move</Tooltip>}>
                        <i className="fe fe-move"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-music</Tooltip>}>
                        <i className="fe fe-music"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-navigation</Tooltip>}>
                        <i className="fe fe-navigation"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-navigation-2</Tooltip>}>
                        <i className="fe fe-navigation-2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-octagon</Tooltip>}>
                        <i className="fe fe-octagon"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-package</Tooltip>}>
                        <i className="fe fe-package"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-paperclip</Tooltip>}>
                        <i className="fe fe-paperclip"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-pause</Tooltip>}>
                        <i className="fe fe-pause"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-pause-circle</Tooltip>}>
                        <i className="fe fe-pause-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-percent</Tooltip>}>
                        <i className="fe fe-percent"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-phone</Tooltip>}>
                        <i className="fe fe-phone"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-phone-call</Tooltip>}>
                        <i className="fe fe-phone-call"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-phone-forwarded</Tooltip>}>
                        <i className="fe fe-phone-forwarded"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-phone-incoming</Tooltip>}>
                        <i className="fe fe-phone-incoming"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-phone-missed</Tooltip>}>
                        <i className="fe fe-phone-missed"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-phone-off</Tooltip>}>
                        <i className="fe fe-phone-off"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-phone-outgoing</Tooltip>}>
                        <i className="fe fe-phone-outgoing"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-pie-chart</Tooltip>}>
                        <i className="fe fe-pie-chart"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-play</Tooltip>}>
                        <i className="fe fe-play"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-play-circle</Tooltip>}>
                        <i className="fe fe-play-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-plus</Tooltip>}>
                        <i className="fe fe-plus"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-plus-circle</Tooltip>}>
                        <i className="fe fe-plus-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-plus-square</Tooltip>}>
                        <i className="fe fe-plus-square"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-pocket</Tooltip>}>
                        <i className="fe fe-pocket"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-power</Tooltip>}>
                        <i className="fe fe-power"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-printer</Tooltip>}>
                        <i className="fe fe-printer"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-radio</Tooltip>}>
                        <i className="fe fe-radio"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-refresh-ccw</Tooltip>}>
                        <i className="fe fe-refresh-ccw"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-refresh-cw</Tooltip>}>
                        <i className="fe fe-refresh-cw"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-repeat</Tooltip>}>
                        <i className="fe fe-repeat"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-rewind</Tooltip>}>
                        <i className="fe fe-rewind"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-rotate-ccw</Tooltip>}>
                        <i className="fe fe-rotate-ccw"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-rotate-cw</Tooltip>}>
                        <i className="fe fe-rotate-cw"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-rss</Tooltip>}>
                        <i className="fe fe-rss"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-save</Tooltip>}>
                        <i className="fe fe-save"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-scissors</Tooltip>}>
                        <i className="fe fe-scissors"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-search</Tooltip>}>
                        <i className="fe fe-search"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-send</Tooltip>}>
                        <i className="fe fe-send"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-server</Tooltip>}>
                        <i className="fe fe-server"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-settings</Tooltip>}>
                        <i className="fe fe-settings"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-share</Tooltip>}>
                        <i className="fe fe-share"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-share-2</Tooltip>}>
                        <i className="fe fe-share-2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-shield-bs-tip</Tooltip>}>
                        <i className="fe fe-shield"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-shield-off</Tooltip>}>
                        <i className="fe fe-shield-off"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-shopping-bag</Tooltip>}>
                        <i className="fe fe-shopping-bag"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-shopping-cart</Tooltip>}>
                        <i className="fe fe-shopping-cart"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-shuffle="f</Tooltip>}>
                        <i className="fe fe-shuffle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-sidebar="f</Tooltip>}>
                        <i className="fe fe-sidebar"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-skip-back=</Tooltip>}>
                        <i className="fe fe-skip-back"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-skip-forward</Tooltip>}>
                        <i className="fe fe-skip-forward"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-slack</Tooltip>}>
                        <i className="fe fe-slack"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-slash</Tooltip>}>
                        <i className="fe fe-slash"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-sliders</Tooltip>}>
                        <i className="fe fe-sliders"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-smartphone</Tooltip>}>
                        <i className="fe fe-smartphone"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-speaker</Tooltip>}>
                        <i className="fe fe-speaker"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-square</Tooltip>}>
                        <i className="fe fe-square"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-star</Tooltip>}>
                        <i className="fe fe-star"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-stop-circle</Tooltip>}>
                        <i className="fe fe-stop-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-sun</Tooltip>}>
                        <i className="fe fe-sun"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-sunrise</Tooltip>}>
                        <i className="fe fe-sunrise"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-sunset</Tooltip>}>
                        <i className="fe fe-sunset"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-tablet</Tooltip>}>
                        <i className="fe fe-tablet"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-tag</Tooltip>}>
                        <i className="fe fe-tag"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-target</Tooltip>}>
                        <i className="fe fe-target"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-terminal</Tooltip>}>
                        <i className="fe fe-terminal"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-thermometer</Tooltip>}>
                        <i className="fe fe-thermometer"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-thumbs-down</Tooltip>}>
                        <i className="fe fe-thumbs-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-thumbs-up</Tooltip>}>
                        <i className="fe fe-thumbs-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-toggle-left</Tooltip>}>
                        <i className="fe fe-toggle-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-toggle-right</Tooltip>}>
                        <i className="fe fe-toggle-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-trash-bs-tip</Tooltip>}>
                        <i className="fe fe-trash"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-trash-2-bs-tip</Tooltip>}>
                        <i className="fe fe-trash-2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-trending-down</Tooltip>}>
                        <i className="fe fe-trending-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-trending-up</Tooltip>}>
                        <i className="fe fe-trending-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-triangle</Tooltip>}>
                        <i className="fe fe-triangle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-truck</Tooltip>}>
                        <i className="fe fe-truck"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-tv</Tooltip>}>
                        <i className="fe fe-tv"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-twitter</Tooltip>}>
                        <i className="fe fe-twitter"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-type</Tooltip>}>
                        <i className="fe fe-type"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-umbrella</Tooltip>}>
                        <i className="fe fe-umbrella"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-underline</Tooltip>}>
                        <i className="fe fe-underline"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-unlock</Tooltip>}>
                        <i className="fe fe-unlock"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-upload</Tooltip>}>
                        <i className="fe fe-upload"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-upload-cloud</Tooltip>}>
                        <i className="fe fe-upload-cloud"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-user</Tooltip>}>
                        <i className="fe fe-user"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-user-check</Tooltip>}>
                        <i className="fe fe-user-check"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-user-minus</Tooltip>}>
                        <i className="fe fe-user-minus"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-user-plus</Tooltip>}>
                        <i className="fe fe-user-plus"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-user-x</Tooltip>}>
                        <i className="fe fe-user-x"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-users</Tooltip>}>
                        <i className="fe fe-users"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-video</Tooltip>}>
                        <i className="fe fe-video"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-video-off</Tooltip>}>
                        <i className="fe fe-video-off"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-voicemail</Tooltip>}>
                        <i className="fe fe-voicemail"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-volume</Tooltip>}>
                        <i className="fe fe-volume"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-volume-1</Tooltip>}>
                        <i className="fe fe-volume-1"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-volume-2</Tooltip>}>
                        <i className="fe fe-volume-2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-volume-x</Tooltip>}>
                        <i className="fe fe-volume-x"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-watch</Tooltip>}>
                        <i className="fe fe-watch"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-wifi</Tooltip>}>
                        <i className="fe fe-wifi"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-wifi-off</Tooltip>}>
                        <i className="fe fe-wifi-off"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-wind</Tooltip>}>
                        <i className="fe fe-wind"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-x</Tooltip>}>
                        <i className="fe fe-x"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-x-circle</Tooltip>}>
                        <i className="fe fe-x-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-x-square</Tooltip>}>
                        <i className="fe fe-x-square"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-zap</Tooltip>}>
                        <i className="fe fe-zap"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-zap-off</Tooltip>}>
                        <i className="fe fe-zap-off"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-zoom-in</Tooltip>}>
                        <i className="fe fe-zoom-in"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fe fe-zoom-out</Tooltip>}>
                        <i className="fe fe-zoom-out"></i></OverlayTrigger></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
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

export default FeatherIcons;

import React from 'react';
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './BootstrapIcons.module.scss';


const BootstrapIcons = () => {
  return (
  <div className={styles.BootstrapIcons}>
    <PageHeader titles="Bootstrap Icons" active="Bootstrap Icons" items={['Icons']} />
    {/* <!-- ROW OPEN --> */}
    <Row className="row-cards">
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Bootstrap 5</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={12} sm={12}>
                <p>Powered by Bootstrap set. For more info <a href="https://icons.getbootstrap.com/">click here</a>.</p>
                <p><code>&lt;i className="bi-ICON_NAME"&gt;&lt;/i&gt;</code></p>
              </Col>
              <Col lg={12} sm={12}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-alarm</Tooltip>}><i className="bi-alarm"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-alarm-fill</Tooltip>}>
                        <i className="bi-alarm-fill" title="bi-alarm-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-align-bottom</Tooltip>}>
                        <i className="bi-align-bottom"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item"><OverlayTrigger placement="top" overlay={<Tooltip >bi-align-center</Tooltip>}><i className="bi-align-center"></i></OverlayTrigger></li>

                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-align-end</Tooltip>}>
                        <i className="bi-align-end" title="bi-align-end"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-align-middle</Tooltip>}>
                        <i className="bi-align-middle" title="bi-align-middle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-align-start</Tooltip>}>
                        <i className="bi-align-start" title="bi-align-start"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-align-top</Tooltip>}>
                        <i className="bi-align-top" title="bi-align-top"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-alt</Tooltip>}>
                        <i className="bi-alt" title="bi-alt"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-app</Tooltip>}>
                        <i className="bi-app" title="bi-app"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-app-indicator</Tooltip>}>
                        <i className="bi-app-indicator" title="bi-app-indicator"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-archive</Tooltip>}>
                        <i className="bi-archive" title="bi-archive"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-archive-fill</Tooltip>}>
                        <i className="bi-archive-fill" title="bi-archive-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-90deg-down</Tooltip>}>
                        <i className="bi-arrow-90deg-down" title="bi-arrow-90deg-down"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-90deg-left</Tooltip>}>
                        <i className="bi-arrow-90deg-left" title="bi-arrow-90deg-left"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-90deg-right</Tooltip>}>
                        <i className="bi-arrow-90deg-right" title="bi-arrow-90deg-right"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-90deg-up</Tooltip>}>
                        <i className="bi-arrow-90deg-up" title="bi-arrow-90deg-up"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-bar-down</Tooltip>}>
                        <i className="bi-arrow-bar-down" title="bi-arrow-bar-down"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-bar-left</Tooltip>}>
                        <i className="bi-arrow-bar-left" title="bi-arrow-bar-left"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-bar-right</Tooltip>}>
                        <i className="bi-arrow-bar-right" title="bi-arrow-bar-right"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-bar-up</Tooltip>}>
                        <i className="bi-arrow-bar-up" title="bi-arrow-bar-up"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-clockwise</Tooltip>}>
                        <i className="bi-arrow-clockwise" title="bi-arrow-clockwise"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-counterclockwise</Tooltip>}>
                        <i className="bi-arrow-counterclockwise" title="bi-arrow-counterclockwise"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-down-circle</Tooltip>}>
                        <i className="bi-arrow-down-circle" title="bi-arrow-down-circle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-down-circle-fill</Tooltip>}>
                        <i className="bi-arrow-down-circle-fill" title="bi-arrow-down-circle-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-down-left</Tooltip>}>
                        <i className="bi-arrow-down-left" title="bi-arrow-down-left"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-down-left-circle</Tooltip>}>
                        <i className="bi-arrow-down-left-circle" title="bi-arrow-down-left-circle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-down-left-circle-fill</Tooltip>}>
                        <i className="bi-arrow-down-left-circle-fill" title="bi-arrow-down-left-circle-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-down-left-square</Tooltip>}>
                        <i className="bi-arrow-down-left-square" title="bi-arrow-down-left-square"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-down-left-square-fill</Tooltip>}>
                        <i className="bi-arrow-down-left-square-fill" title="bi-arrow-down-left-square-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-down-right</Tooltip>}>
                        <i className="bi-arrow-down-right" title="bi-arrow-down-right"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-down-right-circle</Tooltip>}>
                        <i className="bi-arrow-down-right-circle" title="bi-arrow-down-right-circle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-down-right-circle-fill</Tooltip>}>
                        <i className="bi-arrow-down-right-circle-fill" title="bi-arrow-down-right-circle-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-down-right-square</Tooltip>}>
                        <i className="bi-arrow-down-right-square" title="bi-arrow-down-right-square"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-down-short</Tooltip>}>
                        <i className="bi-arrow-down-short" title="bi-arrow-down-short"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-down-square</Tooltip>}>
                        <i className="bi-arrow-down-square" title="bi-arrow-down-square"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-down-square-fill</Tooltip>}>
                        <i className="bi-arrow-down-square-fill" title="bi-arrow-down-square-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-down-up</Tooltip>}>
                        <i className="bi-arrow-down-up" title="bi-arrow-down-up"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-left</Tooltip>}>
                        <i className="bi-arrow-left" title="bi-arrow-left"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-left-circle</Tooltip>}>
                        <i className="bi-arrow-left-circle" title="bi-arrow-left-circle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-left-circle-fill</Tooltip>}>
                        <i className="bi-arrow-left-circle-fill" title="bi-arrow-left-circle-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-left-right</Tooltip>}>
                        <i className="bi-arrow-left-right" title="bi-arrow-left-right"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-left-short</Tooltip>}>
                        <i className="bi-arrow-left-short" title="bi-arrow-left-short"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-left-square</Tooltip>}>
                        <i className="bi-arrow-left-square" title="bi-arrow-left-square"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-left-square-fill</Tooltip>}>
                        <i className="bi-arrow-left-square-fill" title="bi-arrow-left-square-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-repeat</Tooltip>}>
                        <i className="bi-arrow-repeat" title="bi-arrow-repeat"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-return-left</Tooltip>}>
                        <i className="bi-arrow-return-left" title="bi-arrow-return-left"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-return-right</Tooltip>}>
                        <i className="bi-arrow-return-right" title="bi-arrow-return-right"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-right</Tooltip>}>
                        <i className="bi-arrow-right" title="bi-arrow-right"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-right-circle</Tooltip>}>
                        <i className="bi-arrow-right-circle" title="bi-arrow-right-circle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-right-circle-fill</Tooltip>}>
                        <i className="bi-arrow-right-circle-fill" title="bi-arrow-right-circle-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-right-short</Tooltip>}>
                        <i className="bi-arrow-right-short" title="bi-arrow-right-short"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-right-square</Tooltip>}>
                        <i className="bi-arrow-right-square" title="bi-arrow-right-square"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-right-square-fill</Tooltip>}>
                        <i className="bi-arrow-right-square-fill" title="bi-arrow-right-square-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrows-angle-contract</Tooltip>}>
                        <i className="bi-arrows-angle-contract" title="bi-arrows-angle-contract"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-right-square-fill</Tooltip>}>
                        <i className="bi-arrow-right-square-fill" title="bi-arrow-right-square-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrows-angle-expand</Tooltip>}>
                        <i className="bi-arrows-angle-expand" title="bi-arrows-angle-expand"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrows-collapse</Tooltip>}>
                        <i className="bi-arrows-collapse" title="bi-arrows-collapse"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrows-expand</Tooltip>}>
                        <i className="bi-arrows-expand" title="bi-arrows-expand"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrows-fullscreen</Tooltip>}>
                        <i className="bi-arrows-fullscreen" title="bi-arrows-fullscreen"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrows-move</Tooltip>}>
                        <i className="bi-arrows-move" title="bi-arrows-move"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-up</Tooltip>}>
                        <i className="bi-arrow-up" title="bi-arrow-up"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-up-circle</Tooltip>}>
                        <i className="bi-arrow-up-circle" title="bi-arrow-up-circle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-up-circle-fill</Tooltip>}>
                        <i className="bi-arrow-up-circle-fill" title="bi-arrow-up-circle-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-up-left</Tooltip>}>
                        <i className="bi-arrow-up-left" title="bi-arrow-up-left"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-up-left-circle</Tooltip>}>
                        <i className="bi-arrow-up-left-circle" title="bi-arrow-up-left-circle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-up-left-circle-fill</Tooltip>}>
                        <i className="bi-arrow-up-left-circle-fill" title="bi-arrow-up-left-circle-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-up-left-square</Tooltip>}>
                        <i className="bi-arrow-up-left-square" title="bi-arrow-up-left-square"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-up-left-square-fill</Tooltip>}>
                        <i className="bi-arrow-up-left-square-fill" title="bi-arrow-up-left-square-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-up-right</Tooltip>}>
                        <i className="bi-arrow-up-right" title="bi-arrow-up-right"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-up-right-circle</Tooltip>}>
                        <i className="bi-arrow-up-right-circle" title="bi-arrow-up-right-circle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-up-right-circle-fill</Tooltip>}>
                        <i className="bi-arrow-up-right-circle-fill" title="bi-arrow-up-right-circle-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-up-right-square</Tooltip>}>
                        <i className="bi-arrow-up-right-square" title="bi-arrow-up-right-square"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-up-right-square-fill</Tooltip>}>
                        <i className="bi-arrow-up-right-square-fill" title="bi-arrow-up-right-square-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-up-short</Tooltip>}>
                        <i className="bi-arrow-up-short" title="bi-arrow-up-short"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-up-square</Tooltip>}>
                        <i className="bi-arrow-up-square" title="bi-arrow-up-square"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-arrow-up-square-fill</Tooltip>}>
                        <i className="bi-arrow-up-square-fill" title="bi-arrow-up-square-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-aspect-ratio</Tooltip>}>
                        <i className="bi-aspect-ratio" title="bi-aspect-ratio"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-aspect-ratio-fill</Tooltip>}>
                        <i className="bi-aspect-ratio-fill" title="bi-aspect-ratio-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-asterisk</Tooltip>}>
                        <i className="bi-asterisk" title="bi-asterisk"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-at</Tooltip>}>
                        <i className="bi-at" title="bi-at"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-award</Tooltip>}>
                        <i className="bi-award" title="bi-award"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-award-fill</Tooltip>}>
                        <i className="bi-award-fill" title="bi-award-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-back</Tooltip>}>
                        <i className="bi-back" title="bi-back"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-backspace</Tooltip>}>
                        <i className="bi-backspace" title="bi-backspace"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-backspace-fill</Tooltip>}>
                        <i className="bi-backspace-fill" title="bi-backspace-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-backspace-reverse</Tooltip>}>
                        <i className="bi-backspace-reverse" title="bi-backspace-reverse"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-backspace-reverse-fill</Tooltip>}>
                        <i className="bi-backspace-reverse-fill" title="bi-backspace-reverse-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-3d</Tooltip>}>
                        <i className="bi-badge-3d" title="bi-badge-3d"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-3d-fill</Tooltip>}>
                        <i className="bi-badge-3d-fill" title="bi-badge-3d-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-4k</Tooltip>}>
                        <i className="bi-badge-4k" title="bi-badge-4k"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-4k-fill</Tooltip>}>
                        <i className="bi-badge-4k-fill" title="bi-badge-4k-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-8k</Tooltip>}>
                        <i className="bi-badge-8k" title="bi-badge-8k"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-4k</Tooltip>}>
                        <i className="bi-badge-4k" title="bi-badge-4k"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-8k-fill</Tooltip>}>
                        <i className="bi-badge-8k-fill" title="bi-badge-8k-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-ad</Tooltip>}>
                        <i className="bi-badge-ad" title="bi-badge-ad"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-ad-fill</Tooltip>}>
                        <i className="bi-badge-ad-fill" title="bi-badge-ad-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-ar</Tooltip>}>
                        <i className="bi-badge-ar" title="bi-badge-ar"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-ar-fill</Tooltip>}>
                        <i className="bi-badge-ar-fill" title="bi-badge-ar-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-cc</Tooltip>}>
                        <i className="bi-badge-cc" title="bi-badge-cc"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-ad-fill</Tooltip>}>
                        <i className="bi-badge-cc-fill" title="bi-badge-ad-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-hd</Tooltip>}>
                        <i className="bi-badge-hd" title="bi-badge-hd"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-hd-fill</Tooltip>}>
                        <i className="bi-badge-hd-fill" title="bi-badge-hd-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-tm</Tooltip>}>
                        <i className="bi-badge-tm" title="bi-badge-tm"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-tm-fill</Tooltip>}>
                        <i className="bi-badge-tm-fill" title="bi-badge-tm-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-vo</Tooltip>}>
                        <i className="bi-badge-vo" title="bi-badge-vo"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-vo-fill</Tooltip>}>
                        <i className="bi-badge-vo-fill" title="bi-badge-vo-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-vr</Tooltip>}>
                        <i className="bi-badge-vr" title="bi-badge-vr"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-vr-fill</Tooltip>}>
                        <i className="bi-badge-vr-fill" title="bi-badge-vr-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-wc</Tooltip>}>
                        <i className="bi-badge-wc" title="bi-badge-wc"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-badge-wc-fill</Tooltip>}>
                        <i className="bi-badge-wc-fill" title="bi-badge-wc-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bag-check</Tooltip>}>
                        <i className="bi-bag-check" title="bi-bag-check"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bag-dash</Tooltip>}>
                        <i className="bi-bag-dash" title="bi-bag-dash"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bag-fill</Tooltip>}>
                        <i className="bi-bag-fill" title="bi-bag-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bag-plus</Tooltip>}>
                        <i className="bi-bag-plus" title="bi-bag-plus"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bag-x</Tooltip>}>
                        <i className="bi-bag-x" title="bi-bag-x"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bank</Tooltip>}>
                        <i className="bi-bank" title="bi-bank"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bank2</Tooltip>}>
                        <i className="bi-bank2" title="bi-bank2"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bar-chart</Tooltip>}>
                        <i className="bi-bar-chart" title="bi-bar-chart"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bar-chart-fill</Tooltip>}>
                        <i className="bi-bar-chart-fill" title="bi-bar-chart-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bar-chart-line</Tooltip>}>
                        <i className="bi-bar-chart-line" title="bi-bar-chart-line"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bar-chart-steps</Tooltip>}>
                        <i className="bi-bar-chart-steps" title="bi-bar-chart-steps"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-basket</Tooltip>}>
                        <i className="bi-basket" title="bi-basket"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-basket2</Tooltip>}>
                        <i className="bi-basket2" title="bi-basket2"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-basket3</Tooltip>}>
                        <i className="bi-basket3" title="bi-basket3"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-battery</Tooltip>}>
                        <i className="bi-battery" title="bi-battery"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-battery-charging</Tooltip>}>
                        <i className="bi-battery-charging" title="bi-battery-charging"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-battery-full</Tooltip>}>
                        <i className="bi-battery-full" title="bi-battery-full"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-battery-half</Tooltip>}>
                        <i className="bi-battery-half" title="bi-battery-half"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bell</Tooltip>}>
                        <i className="bi-bell" title="bi-bell"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bell-fill</Tooltip>}>
                        <i className="bi-bell-fill" title="bi-bell-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bell-slash</Tooltip>}>
                        <i className="bi-bell-slash" title="bi-bell-slash"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bell-slash-fill</Tooltip>}>
                        <i className="bi-bell-slash-fill" title="bi-bell-slash-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-book</Tooltip>}>
                        <i className="bi-book" title="bi-book"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bookmarks</Tooltip>}>
                        <i className="bi-bookmarks" title="bi-bookmarks"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bookmark-x</Tooltip>}>
                        <i className="bi-bookmark-x" title="bi-bookmark-x"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bootstrap</Tooltip>}>
                        <i className="bi-bootstrap" title="bi-bootstrap"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-bootstrap-fill</Tooltip>}>
                        <i className="bi-bootstrap-fill" title="bi-bootstrap-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-calculator</Tooltip>}>
                        <i className="bi-calculator" title="bi-calculator"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-calendar</Tooltip>}>
                        <i className="bi-calendar" title="bi-calendar"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-calendar2</Tooltip>}>
                        <i className="bi-calendar2" title="bi-calendar2"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-calendar2-check</Tooltip>}>
                        <i className="bi-calendar2-check" title="bi-calendar2-check"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-calendar2-date</Tooltip>}>
                        <i className="bi-calendar2-date" title="bi-calendar2-date"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-calendar2-day</Tooltip>}>
                        <i className="bi-calendar2-day" title="bi-calendar2-day"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-calendar2-event</Tooltip>}>
                        <i className="bi-calendar2-event" title="bi-calendar2-event"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-calendar2-fill</Tooltip>}>
                        <i className="bi-calendar2-fill" title="bi-calendar2-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-calendar2-minus</Tooltip>}>
                        <i className="bi-calendar2-minus" title="bi-calendar2-minus"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-calendar2-month</Tooltip>}>
                        <i className="bi-calendar2-month" title="bi-calendar2-month"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-camera</Tooltip>}>
                        <i className="bi-camera" title="bi-camera"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-camera2</Tooltip>}>
                        <i className="bi-camera2" title="bi-camera2"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-camera-fill</Tooltip>}>
                        <i className="bi-camera-fill" title="bi-camera-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-camera-reels</Tooltip>}>
                        <i className="bi-camera-reels" title="bi-camera-reels"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-camera-video</Tooltip>}>
                        <i className="bi-camera-video" title="bi-camera-video"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-capslock</Tooltip>}>
                        <i className="bi-capslock" title="bi-capslock"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-clock</Tooltip>}>
                        <i className="bi-clock" title="bi-clock"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-dash</Tooltip>}>
                        <i className="bi-dash" title="bi-dash"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-dash-circle</Tooltip>}>
                        <i className="bi-dash-circle" title="bi-dash-circle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-dash-circle-dotted</Tooltip>}>
                        <i className="bi-dash-circle-dotted" title="bi-dash-circle-dotted"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-dash-circle-fill</Tooltip>}>
                        <i className="bi-dash-circle-fill" title="bi-dash-circle-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-dash-lg</Tooltip>}>
                        <i className="bi-dash-lg" title="bi-dash-lg"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-diagram-2</Tooltip>}>
                        <i className="bi-diagram-2" title="bi-diagram-2"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-diamond</Tooltip>}>
                        <i className="bi-diamond" title="bi-diamond"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-dice-1</Tooltip>}>
                        <i className="bi-dice-1" title="bi-dice-1"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-display</Tooltip>}>
                        <i className="bi-display" title="bi-display"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-display-fill</Tooltip>}>
                        <i className="bi-display-fill" title="bi-display-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-distribute-horizontal</Tooltip>}>
                        <i className="bi-distribute-horizontal" title="bi-distribute-horizontal"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-door-closed</Tooltip>}>
                        <i className="bi-door-closed" title="bi-door-closed"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-door-open</Tooltip>}>
                        <i className="bi-door-open" title="bi-door-open"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-dot</Tooltip>}>
                        <i className="bi-dot" title="bi-dot"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-earbuds</Tooltip>}>
                        <i className="bi-earbuds" title="bi-earbuds"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-easel</Tooltip>}>
                        <i className="bi-easel" title="bi-easel"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-egg</Tooltip>}>
                        <i className="bi-egg" title="bi-egg"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-eject</Tooltip>}>
                        <i className="bi-eject" title="bi-eject"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-emoji-angry</Tooltip>}>
                        <i className="bi-emoji-angry" title="bi-emoji-angry"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-eraser</Tooltip>}>
                        <i className="bi-eraser" title="bi-eraser"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-file</Tooltip>}>
                        <i className="bi-file" title="bi-file"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-facebook</Tooltip>}>
                        <i className="bi-facebook" title="bi-facebook"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-file-arrow-down</Tooltip>}>
                        <i className="bi-file-arrow-down" title="bi-file-arrow-down"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-file-arrow-down-fill</Tooltip>}>
                        <i className="bi-file-arrow-down-fill" title="bi-file-arrow-down-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-file-binary</Tooltip>}>
                        <i className="bi-file-binary" title="bi-file-binary"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-file-break</Tooltip>}>
                        <i className="bi-file-break" title="bi-file-break"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-file-check</Tooltip>}>
                        <i className="bi-file-check" title="bi-file-check"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-file-code</Tooltip>}>
                        <i className="bi-file-code" title="bi-file-code"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-file-diff</Tooltip>}>
                        <i className="bi-file-diff" title="bi-file-diff"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-film</Tooltip>}>
                        <i className="bi-film" title="bi-film"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-gear</Tooltip>}>
                        <i className="bi-gear" title="bi-gear"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-gem</Tooltip>}>
                        <i className="bi-gem" title="bi-gem"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement="top" overlay={<Tooltip >bi-gift</Tooltip>}>
                        <i className="bi-gift" title="bi-gift"></i>
                      </OverlayTrigger>
                    </li>
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

export default BootstrapIcons;

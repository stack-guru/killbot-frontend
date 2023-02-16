import React from 'react';
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './Pe7Icons.module.scss';


const Pe7Icons = () => {
  return (
  <div className={styles.Pe7Icons}>
    <PageHeader titles="Pe7 Icons" active="Pe7 Icons" items={['Icons']} />
    {/* <!-- ROW OPEN --> */}
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Pe7 Icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={12} sm={12}>
                <p>Simply beautiful open source icons. For more info <a href="https://themes-pixeden.com/font-demos/7-stroke/">click here</a>.</p>
                <p><code>&lt;i className="pe-ICON_NAME"&gt;&lt;/i&gt;</code></p>
              </Col>
              <Col lg={12} sm={12}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-album</Tooltip>}>
                        <i className="pe-7s-album" data-bs-toggle="tooltip" title="pe-7s-album"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-arc</Tooltip>}>
                        <i className="pe-7s-arc" data-bs-toggle="tooltip" title="pe-7s-arc"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-back-2</Tooltip>}>
                        <i className="pe-7s-back-2" data-bs-toggle="tooltip" title="pe-7s-back-2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-bandaid</Tooltip>}>
                        <i className="pe-7s-bandaid" data-bs-toggle="tooltip" title="pe-7s-bandaid"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-car</Tooltip>}>
                        <i className="pe-7s-car" data-bs-toggle="tooltip" title="pe-7s-car"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-diamond</Tooltip>}>
                        <i className="pe-7s-diamond" data-bs-toggle="tooltip" title="pe-7s-diamond"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-door-lock</Tooltip>}>
                        <i className="pe-7s-door-lock" data-bs-toggle="tooltip" title="pe-7s-door-lock"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-eyedropper</Tooltip>}>
                        <i className="pe-7s-eyedropper" data-bs-toggle="tooltip" title="pe-7s-eyedropper"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-female</Tooltip>}>
                        <i className="pe-7s-female" data-bs-toggle="tooltip" title="pe-7s-female"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-gym</Tooltip>}>
                        <i className="pe-7s-gym" data-bs-toggle="tooltip" title="pe-7s-gym"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-hammer</Tooltip>}>
                        <i className="pe-7s-hammer" data-bs-toggle="tooltip" title="pe-7s-hammer"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-headphones</Tooltip>}>
                        <i className="pe-7s-headphones" data-bs-toggle="tooltip" title="pe-7s-headphones"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-helm</Tooltip>}>
                        <i className="pe-7s-helm" data-bs-toggle="tooltip" title="pe-7s-helm"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-hourglass</Tooltip>}>
                        <i className="pe-7s-hourglass" data-bs-toggle="tooltip" title="pe-7s-hourglass"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-leaf</Tooltip>}>
                        <i className="pe-7s-leaf" data-bs-toggle="tooltip" title="pe-7s-leaf"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-magic-wand</Tooltip>}>
                        <i className="pe-7s-magic-wand" data-bs-toggle="tooltip" title="pe-7s-magic-wand"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-male</Tooltip>}>
                        <i className="pe-7s-male" data-bs-toggle="tooltip" title="pe-7s-male"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-map-2</Tooltip>}>
                        <i className="pe-7s-map-2" data-bs-toggle="tooltip" title="pe-7s-map-2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-next-2</Tooltip>}>
                        <i className="pe-7s-next-2" data-bs-toggle="tooltip" title="pe-7s-next-2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-paint-bucket</Tooltip>}>
                        <i className="pe-7s-paint-bucket" data-bs-toggle="tooltip" title="pe-7s-paint-bucket"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-pendrive</Tooltip>}>
                        <i className="pe-7s-pendrive" data-bs-toggle="tooltip" title="pe-7s-pendrive"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-photo</Tooltip>}>
                        <i className="pe-7s-photo" data-bs-toggle="tooltip" title="pe-7s-photo"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-piggy</Tooltip>}>
                        <i className="pe-7s-piggy" data-bs-toggle="tooltip" title="pe-7s-piggy"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-plugin</Tooltip>}>
                        <i className="pe-7s-plugin" data-bs-toggle="tooltip" title="pe-7s-plugin"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-refresh-2</Tooltip>}>
                        <i className="pe-7s-refresh-2" data-bs-toggle="tooltip" title="pe-7s-refresh-2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-rocket</Tooltip>}>
                        <i className="pe-7s-rocket" data-bs-toggle="tooltip" title="pe-7s-rocket"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-settings</Tooltip>}>
                        <i className="pe-7s-settings" data-bs-toggle="tooltip" title="pe-7s-settings"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-shield</Tooltip>}>
                        <i className="pe-7s-shield" data-bs-toggle="tooltip" title="pe-7s-shield"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-smile</Tooltip>}>
                        <i className="pe-7s-smile" data-bs-toggle="tooltip" title="pe-7s-smile"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-usb</Tooltip>}>
                        <i className="pe-7s-usb" data-bs-toggle="tooltip" title="pe-7s-usb"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-vector</Tooltip>}>
                        <i className="pe-7s-vector" data-bs-toggle="tooltip" title="pe-7s-vector"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-wine</Tooltip>}>
                        <i className="pe-7s-wine" data-bs-toggle="tooltip" title="pe-7s-wine"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-cloud-upload</Tooltip>}>
                        <i className="pe-7s-cloud-upload" data-bs-toggle="tooltip" title="pe-7s-cloud-upload"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-cash</Tooltip>}>
                        <i className="pe-7s-cash" data-bs-toggle="tooltip" title="pe-7s-cash"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-close</Tooltip>}>
                        <i className="pe-7s-close" data-bs-toggle="tooltip" title="pe-7s-close"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-bluetooth</Tooltip>}>
                        <i className="pe-7s-bluetooth" data-bs-toggle="tooltip" title="pe-7s-bluetooth"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-cloud-download</Tooltip>}>
                        <i className="pe-7s-cloud-download" data-bs-toggle="tooltip" title="pe-7s-cloud-download"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-way</Tooltip>}>
                        <i className="pe-7s-way" data-bs-toggle="tooltip" title="pe-7s-way"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-close-circle</Tooltip>}>
                        <i className="pe-7s-close-circle" data-bs-toggle="tooltip" title="pe-7s-close-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-id</Tooltip>}>
                        <i className="pe-7s-id" data-bs-toggle="tooltip" title="pe-7s-id"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-angle-up</Tooltip>}>
                        <i className="pe-7s-angle-up" data-bs-toggle="tooltip" title="pe-7s-angle-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-wristwatch</Tooltip>}>
                        <i className="pe-7s-wristwatch" data-bs-toggle="tooltip" title="pe-7s-wristwatch"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-angle-up-circle</Tooltip>}>
                        <i className="pe-7s-angle-up-circle" data-bs-toggle="tooltip" title="pe-7s-angle-up-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-world</Tooltip>}>
                        <i className="pe-7s-world" data-bs-toggle="tooltip" title="pe-7s-world"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-angle-right</Tooltip>}>
                        <i className="pe-7s-angle-right" data-bs-toggle="tooltip" title="pe-7s-angle-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-volume</Tooltip>}>
                        <i className="pe-7s-volume" data-bs-toggle="tooltip" title="pe-7s-volume"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-angle-right-circle</Tooltip>}>
                        <i className="pe-7s-angle-right-circle" data-bs-toggle="tooltip" title="pe-7s-angle-right-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-users</Tooltip>}>
                        <i className="pe-7s-users" data-bs-toggle="tooltip" title="pe-7s-users"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-angle-left</Tooltip>}>
                        <i className="pe-7s-angle-left" data-bs-toggle="tooltip" title="pe-7s-angle-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-user-female</Tooltip>}>
                        <i className="pe-7s-user-female" data-bs-toggle="tooltip" title="pe-7s-user-female"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-angle-left-circle</Tooltip>}>
                        <i className="pe-7s-angle-left-circle" data-bs-toggle="tooltip" title="pe-7s-angle-left-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-up-arrow</Tooltip>}>
                        <i className="pe-7s-up-arrow" data-bs-toggle="tooltip" title="pe-7s-up-arrow"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-angle-down</Tooltip>}>
                        <i className="pe-7s-angle-down" data-bs-toggle="tooltip" title="pe-7s-angle-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-switch</Tooltip>}>
                        <i className="pe-7s-switch" data-bs-toggle="tooltip" title="pe-7s-switch"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-angle-down-circle</Tooltip>}>
                        <i className="pe-7s-angle-down-circle" data-bs-toggle="tooltip" title="pe-7s-angle-down-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-scissors</Tooltip>}>
                        <i className="pe-7s-scissors" data-bs-toggle="tooltip" title="pe-7s-scissors"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-wallet</Tooltip>}>
                        <i className="pe-7s-wallet" data-bs-toggle="tooltip" title="pe-7s-wallet"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-safe</Tooltip>}>
                        <i className="pe-7s-safe" data-bs-toggle="tooltip" title="pe-7s-safe"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-volume2</Tooltip>}>
                        <i className="pe-7s-volume2" data-bs-toggle="tooltip" title="pe-7s-volume2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-volume1</Tooltip>}>
                        <i className="pe-7s-volume1" data-bs-toggle="tooltip" title="pe-7s-volume1"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-voicemail</Tooltip>}>
                        <i className="pe-7s-voicemail" data-bs-toggle="tooltip" title="pe-7s-voicemail"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-video</Tooltip>}>
                        <i className="pe-7s-video" data-bs-toggle="tooltip" title="pe-7s-video"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-user</Tooltip>}>
                        <i className="pe-7s-user" data-bs-toggle="tooltip" title="pe-7s-user"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-upload</Tooltip>}>
                        <i className="pe-7s-upload" data-bs-toggle="tooltip" title="pe-7s-upload"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-unlock</Tooltip>}>
                        <i className="pe-7s-unlock" data-bs-toggle="tooltip" title="pe-7s-unlock"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-umbrella</Tooltip>}>
                        <i className="pe-7s-umbrella" data-bs-toggle="tooltip" title="pe-7s-umbrella"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-trash</Tooltip>}>
                        <i className="pe-7s-trash" data-bs-toggle="tooltip" title="pe-7s-trash"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-tools</Tooltip>}>
                        <i className="pe-7s-tools" data-bs-toggle="tooltip" title="pe-7s-tools"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-timer</Tooltip>}>
                        <i className="pe-7s-timer" data-bs-toggle="tooltip" title="pe-7s-timer"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-ticket</Tooltip>}>
                        <i className="pe-7s-ticket" data-bs-toggle="tooltip" title="pe-7s-ticket"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-target</Tooltip>}>
                        <i className="pe-7s-target" data-bs-toggle="tooltip" title="pe-7s-target"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-sun</Tooltip>}>
                        <i className="pe-7s-sun" data-bs-toggle="tooltip" title="pe-7s-sun"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-study</Tooltip>}>
                        <i className="pe-7s-study" data-bs-toggle="tooltip" title="pe-7s-study"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-stopwatch</Tooltip>}>
                        <i className="pe-7s-stopwatch" data-bs-toggle="tooltip" title="pe-7s-stopwatch"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-star</Tooltip>}>
                        <i className="pe-7s-star" data-bs-toggle="tooltip" title="pe-7s-star"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-speaker</Tooltip>}>
                        <i className="pe-7s-speaker" data-bs-toggle="tooltip" title="pe-7s-speaker"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-signal</Tooltip>}>
                        <i className="pe-7s-signal" data-bs-toggle="tooltip" title="pe-7s-signal"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-shuffle</Tooltip>}>
                        <i className="pe-7s-shuffle" data-bs-toggle="tooltip" title="pe-7s-shuffle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-shopbag</Tooltip>}>
                        <i className="pe-7s-shopbag" data-bs-toggle="tooltip" title="pe-7s-shopbag"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-share</Tooltip>}>
                        <i className="pe-7s-share" data-bs-toggle="tooltip" title="pe-7s-share"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-server</Tooltip>}>
                        <i className="pe-7s-server" data-bs-toggle="tooltip" title="pe-7s-server"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-search</Tooltip>}>
                        <i className="pe-7s-search" data-bs-toggle="tooltip" title="pe-7s-search"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-film</Tooltip>}>
                        <i className="pe-7s-film" data-bs-toggle="tooltip" title="pe-7s-film"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-science</Tooltip>}>
                        <i className="pe-7s-science" data-bs-toggle="tooltip" title="pe-7s-science"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-disk</Tooltip>}>
                        <i className="pe-7s-disk" data-bs-toggle="tooltip" title="pe-7s-disk"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-ribbon</Tooltip>}>
                        <i className="pe-7s-ribbon" data-bs-toggle="tooltip" title="pe-7s-ribbon"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-repeat</Tooltip>}>
                        <i className="pe-7s-repeat" data-bs-toggle="tooltip" title="pe-7s-repeat"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-refresh</Tooltip>}>
                        <i className="pe-7s-refresh" data-bs-toggle="tooltip" title="pe-7s-refresh"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-add-user</Tooltip>}>
                        <i className="pe-7s-add-user" data-bs-toggle="tooltip" title="pe-7s-add-user"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-refresh-cloud</Tooltip>}>
                        <i className="pe-7s-refresh-cloud" data-bs-toggle="tooltip" title="pe-7s-refresh-cloud"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-paperclip</Tooltip>}>
                        <i className="pe-7s-paperclip" data-bs-toggle="tooltip" title="pe-7s-paperclip"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-radio</Tooltip>}>
                        <i className="pe-7s-radio" data-bs-toggle="tooltip" title="pe-7s-radio"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-note2</Tooltip>}>
                        <i className="pe-7s-note2" data-bs-toggle="tooltip" title="pe-7s-note2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-print</Tooltip>}>
                        <i className="pe-7s-print" data-bs-toggle="tooltip" title="pe-7s-print"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-network</Tooltip>}>
                        <i className="pe-7s-network" data-bs-toggle="tooltip" title="pe-7s-network"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-prev</Tooltip>}>
                        <i className="pe-7s-prev" data-bs-toggle="tooltip" title="pe-7s-prev"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-mute</Tooltip>}>
                        <i className="pe-7s-mute" data-bs-toggle="tooltip" title="pe-7s-mute"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-power</Tooltip>}>
                        <i className="pe-7s-power" data-bs-toggle="tooltip" title="pe-7s-power"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-medal</Tooltip>}>
                        <i className="pe-7s-medal" data-bs-toggle="tooltip" title="pe-7s-medal"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-portfolio</Tooltip>}>
                        <i className="pe-7s-portfolio" data-bs-toggle="tooltip" title="pe-7s-portfolio"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-like2</Tooltip>}>
                        <i className="pe-7s-like2" data-bs-toggle="tooltip" title="pe-7s-like2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-plus</Tooltip>}>
                        <i className="pe-7s-plus" data-bs-toggle="tooltip" title="pe-7s-plus"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-left-arrow</Tooltip>}>
                        <i className="pe-7s-left-arrow" data-bs-toggle="tooltip" title="pe-7s-left-arrow"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-play</Tooltip>}>
                        <i className="pe-7s-play" data-bs-toggle="tooltip" title="pe-7s-play"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-key</Tooltip>}>
                        <i className="pe-7s-key" data-bs-toggle="tooltip" title="pe-7s-key"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-plane</Tooltip>}>
                        <i className="pe-7s-plane" data-bs-toggle="tooltip" title="pe-7s-plane"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-joy</Tooltip>}>
                        <i className="pe-7s-joy" data-bs-toggle="tooltip" title="pe-7s-joy"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-photo-gallery</Tooltip>}>
                        <i className="pe-7s-photo-gallery" data-bs-toggle="tooltip" title="pe-7s-photo-gallery"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-pin</Tooltip>}>
                        <i className="pe-7s-pin" data-bs-toggle="tooltip" title="pe-7s-pin"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-phone</Tooltip>}>
                        <i className="pe-7s-phone" data-bs-toggle="tooltip" title="pe-7s-phone"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-plug</Tooltip>}>
                        <i className="pe-7s-plug" data-bs-toggle="tooltip" title="pe-7s-plug"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-pen</Tooltip>}>
                        <i className="pe-7s-pen" data-bs-toggle="tooltip" title="pe-7s-pen"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-right-arrow</Tooltip>}>
                        <i className="pe-7s-right-arrow" data-bs-toggle="tooltip" title="pe-7s-right-arrow"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-paper-plane</Tooltip>}>
                        <i className="pe-7s-paper-plane" data-bs-toggle="tooltip" title="pe-7s-paper-plane"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-delete-user</Tooltip>}>
                        <i className="pe-7s-delete-user" data-bs-toggle="tooltip" title="pe-7s-delete-user"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-paint</Tooltip>}>
                        <i className="pe-7s-paint" data-bs-toggle="tooltip" title="pe-7s-paint"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-bottom-arrow</Tooltip>}>
                        <i className="pe-7s-bottom-arrow" data-bs-toggle="tooltip" title="pe-7s-bottom-arrow"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-notebook</Tooltip>}>
                        <i className="pe-7s-notebook" data-bs-toggle="tooltip" title="pe-7s-notebook"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-note</Tooltip>}>
                        <i className="pe-7s-note" data-bs-toggle="tooltip" title="pe-7s-note"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-next</Tooltip>}>
                        <i className="pe-7s-next" data-bs-toggle="tooltip" title="pe-7s-next"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-news-paper</Tooltip>}>
                        <i className="pe-7s-news-paper" data-bs-toggle="tooltip" title="pe-7s-news-paper"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-musiclist</Tooltip>}>
                        <i className="pe-7s-musiclist" data-bs-toggle="tooltip" title="pe-7s-musiclist"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-music</Tooltip>}>
                        <i className="pe-7s-music" data-bs-toggle="tooltip" title="pe-7s-music"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-mouse</Tooltip>}>
                        <i className="pe-7s-mouse" data-bs-toggle="tooltip" title="pe-7s-mouse"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-more</Tooltip>}>
                        <i className="pe-7s-more" data-bs-toggle="tooltip" title="pe-7s-more"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-moon</Tooltip>}>
                        <i className="pe-7s-moon" data-bs-toggle="tooltip" title="pe-7s-moon"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-monitor</Tooltip>}>
                        <i className="pe-7s-monitor" data-bs-toggle="tooltip" title="pe-7s-monitor"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-micro</Tooltip>}>
                        <i className="pe-7s-micro" data-bs-toggle="tooltip" title="pe-7s-micro"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-menu</Tooltip>}>
                        <i className="pe-7s-menu" data-bs-toggle="tooltip" title="pe-7s-menu"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-map</Tooltip>}>
                        <i className="pe-7s-map" data-bs-toggle="tooltip" title="pe-7s-map"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-map-marker</Tooltip>}>
                        <i className="pe-7s-map-marker" data-bs-toggle="tooltip" title="pe-7s-map-marker"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-mail</Tooltip>}>
                        <i className="pe-7s-mail" data-bs-toggle="tooltip" title="pe-7s-mail"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-mail-open</Tooltip>}>
                        <i className="pe-7s-mail-open" data-bs-toggle="tooltip" title="pe-7s-mail-open"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-mail-open-file</Tooltip>}>
                        <i className="pe-7s-mail-open-file" data-bs-toggle="tooltip" title="pe-7s-mail-open-file"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-magnet</Tooltip>}>
                        <i className="pe-7s-magnet" data-bs-toggle="tooltip" title="pe-7s-magnet"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-loop</Tooltip>}>
                        <i className="pe-7s-loop" data-bs-toggle="tooltip" title="pe-7s-loop"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-look</Tooltip>}>
                        <i className="pe-7s-look" data-bs-toggle="tooltip" title="pe-7s-look"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-lock</Tooltip>}>
                        <i className="pe-7s-lock" data-bs-toggle="tooltip" title="pe-7s-lock"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-lintern</Tooltip>}>
                        <i className="pe-7s-lintern" data-bs-toggle="tooltip" title="pe-7s-lintern"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-link</Tooltip>}>
                        <i className="pe-7s-link" data-bs-toggle="tooltip" title="pe-7s-link"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-like</Tooltip>}>
                        <i className="pe-7s-like" data-bs-toggle="tooltip" title="pe-7s-like"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-light</Tooltip>}>
                        <i className="pe-7s-light" data-bs-toggle="tooltip" title="pe-7s-light"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-less</Tooltip>}>
                        <i className="pe-7s-less" data-bs-toggle="tooltip" title="pe-7s-less"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-keypad</Tooltip>}>
                        <i className="pe-7s-keypad" data-bs-toggle="tooltip" title="pe-7s-keypad"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-junk</Tooltip>}>
                        <i className="pe-7s-junk" data-bs-toggle="tooltip" title="pe-7s-junk"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-info</Tooltip>}>
                        <i className="pe-7s-info" data-bs-toggle="tooltip" title="pe-7s-info"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-home</Tooltip>}>
                        <i className="pe-7s-home" data-bs-toggle="tooltip" title="pe-7s-home"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-help2</Tooltip>}>
                        <i className="pe-7s-help2" data-bs-toggle="tooltip" title="pe-7s-help2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-help1</Tooltip>}>
                        <i className="pe-7s-help1" data-bs-toggle="tooltip" title="pe-7s-help1"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-graph3</Tooltip>}>
                        <i className="pe-7s-graph3" data-bs-toggle="tooltip" title="pe-7s-graph3"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-graph2</Tooltip>}>
                        <i className="pe-7s-graph2" data-bs-toggle="tooltip" title="pe-7s-graph2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-graph1</Tooltip>}>
                        <i className="pe-7s-graph1" data-bs-toggle="tooltip" title="pe-7s-graph1"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-graph</Tooltip>}>
                        <i className="pe-7s-graph" data-bs-toggle="tooltip" title="pe-7s-graph"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-global</Tooltip>}>
                        <i className="pe-7s-global" data-bs-toggle="tooltip" title="pe-7s-global"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-gleam</Tooltip>}>
                        <i className="pe-7s-gleam" data-bs-toggle="tooltip" title="pe-7s-gleam"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-glasses</Tooltip>}>
                        <i className="pe-7s-glasses" data-bs-toggle="tooltip" title="pe-7s-glasses"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-gift</Tooltip>}>
                        <i className="pe-7s-gift" data-bs-toggle="tooltip" title="pe-7s-gift"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-folder</Tooltip>}>
                        <i className="pe-7s-folder" data-bs-toggle="tooltip" title="pe-7s-folder"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-flag</Tooltip>}>
                        <i className="pe-7s-flag" data-bs-toggle="tooltip" title="pe-7s-flag"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-filter</Tooltip>}>
                        <i className="pe-7s-filter" data-bs-toggle="tooltip" title="pe-7s-filter"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-file</Tooltip>}>
                        <i className="pe-7s-file" data-bs-toggle="tooltip" title="pe-7s-file"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-expand1</Tooltip>}>
                        <i className="pe-7s-expand1" data-bs-toggle="tooltip" title="pe-7s-expand1"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-exapnd2</Tooltip>}>
                        <i className="pe-7s-exapnd2" data-bs-toggle="tooltip" title="pe-7s-exapnd2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-edit</Tooltip>}>
                        <i className="pe-7s-edit" data-bs-toggle="tooltip" title="pe-7s-edit"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-drop</Tooltip>}>
                        <i className="pe-7s-drop" data-bs-toggle="tooltip" title="pe-7s-drop"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-drawer</Tooltip>}>
                        <i className="pe-7s-drawer" data-bs-toggle="tooltip" title="pe-7s-drawer"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-download</Tooltip>}>
                        <i className="pe-7s-download" data-bs-toggle="tooltip" title="pe-7s-download"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-display2</Tooltip>}>
                        <i className="pe-7s-display2" data-bs-toggle="tooltip" title="pe-7s-display2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-display1</Tooltip>}>
                        <i className="pe-7s-display1" data-bs-toggle="tooltip" title="pe-7s-display1"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-diskette</Tooltip>}>
                        <i className="pe-7s-diskette" data-bs-toggle="tooltip" title="pe-7s-diskette"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-date</Tooltip>}>
                        <i className="pe-7s-date" data-bs-toggle="tooltip" title="pe-7s-date"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-cup</Tooltip>}>
                        <i className="pe-7s-cup" data-bs-toggle="tooltip" title="pe-7s-cup"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-culture</Tooltip>}>
                        <i className="pe-7s-culture" data-bs-toggle="tooltip" title="pe-7s-culture"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-crop</Tooltip>}>
                        <i className="pe-7s-crop" data-bs-toggle="tooltip" title="pe-7s-crop"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-credit</Tooltip>}>
                        <i className="pe-7s-credit" data-bs-toggle="tooltip" title="pe-7s-credit"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-copy-file</Tooltip>}>
                        <i className="pe-7s-copy-file" data-bs-toggle="tooltip" title="pe-7s-copy-file"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-config</Tooltip>}>
                        <i className="pe-7s-config" data-bs-toggle="tooltip" title="pe-7s-config"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-compass</Tooltip>}>
                        <i className="pe-7s-compass" data-bs-toggle="tooltip" title="pe-7s-compass"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-comment</Tooltip>}>
                        <i className="pe-7s-comment" data-bs-toggle="tooltip" title="pe-7s-comment"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-coffee</Tooltip>}>
                        <i className="pe-7s-coffee" data-bs-toggle="tooltip" title="pe-7s-coffee"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-cloud</Tooltip>}>
                        <i className="pe-7s-cloud" data-bs-toggle="tooltip" title="pe-7s-cloud"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-clock</Tooltip>}>
                        <i className="pe-7s-clock" data-bs-toggle="tooltip" title="pe-7s-clock"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-check</Tooltip>}>
                        <i className="pe-7s-check" data-bs-toggle="tooltip" title="pe-7s-check"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-chat</Tooltip>}>
                        <i className="pe-7s-chat" data-bs-toggle="tooltip" title="pe-7s-chat"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-cart</Tooltip>}>
                        <i className="pe-7s-cart" data-bs-toggle="tooltip" title="pe-7s-cart"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-camera</Tooltip>}>
                        <i className="pe-7s-camera" data-bs-toggle="tooltip" title="pe-7s-camera"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-call</Tooltip>}>
                        <i className="pe-7s-call" data-bs-toggle="tooltip" title="pe-7s-call"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-calculator</Tooltip>}>
                        <i className="pe-7s-calculator" data-bs-toggle="tooltip" title="pe-7s-calculator"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>pe-7s-box2</Tooltip>}>
                        <i className="pe-7s-box2" data-bs-toggle="tooltip" title="pe-7s-box2"></i></OverlayTrigger></li>
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

export default Pe7Icons;

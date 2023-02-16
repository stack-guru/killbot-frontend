import React from 'react';
import styles from './IonicIcons.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';


const IonicIcons = () => {

  return (

  <div className={styles.IonicIcons}>
    <PageHeader titles="Ionic Icons" active="Ionic Icons" items={['Icons']} />
    {/* <!-- ROW OPEN --> */}
    <Row className="row-cards">
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Ionic Icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={12} sm={12}>
                <p>Simply beautiful open source icons. For more info <a href="https://ionicons.com/">click here</a>.</p>
                <p><code>&lt;i className="ion ICON_NAME"&gt;&lt;/i&gt;</code></p>
              </Col>
              <div className="col-lg-12 col-sm-12">
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ionic</Tooltip>}>
                        <i className="ion-ionic" data-bs-toggle="tooltip" title="ion-ionic"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-up-a</Tooltip>}>
                        <i className="ion-arrow-up-a" data-bs-toggle="tooltip" title="ion-arrow-up-a"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-right-a</Tooltip>}>
                        <i className="ion-arrow-right-a" data-bs-toggle="tooltip" title="ion-arrow-right-a"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-down-a</Tooltip>}>
                        <i className="ion-arrow-down-a" data-bs-toggle="tooltip" title="ion-arrow-down-a"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-left-a</Tooltip>}>
                        <i className="ion-arrow-left-a" data-bs-toggle="tooltip" title="ion-arrow-left-a"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-up-b</Tooltip>}>
                        <i className="ion-arrow-up-b" data-bs-toggle="tooltip" title="ion-arrow-up-b"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-right-b</Tooltip>}>
                        <i className="ion-arrow-right-b" data-bs-toggle="tooltip" title="ion-arrow-right-b"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-down-b</Tooltip>}>
                        <i className="ion-arrow-down-b" data-bs-toggle="tooltip" title="ion-arrow-down-b"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-left-b</Tooltip>}>
                        <i className="ion-arrow-left-b" data-bs-toggle="tooltip" title="ion-arrow-left-b"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-up-c</Tooltip>}>
                        <i className="ion-arrow-up-c" data-bs-toggle="tooltip" title="ion-arrow-up-c"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-right-c</Tooltip>}>
                        <i className="ion-arrow-right-c" data-bs-toggle="tooltip" title="ion-arrow-right-c"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-down-c</Tooltip>}>
                        <i className="ion-arrow-down-c" data-bs-toggle="tooltip" title="ion-arrow-down-c"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-left-c</Tooltip>}>
                        <i className="ion-arrow-left-c" data-bs-toggle="tooltip" title="ion-arrow-left-c"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-return-right</Tooltip>}>
                        <i className="ion-arrow-return-right" data-bs-toggle="tooltip" title="ion-arrow-return-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-return-left</Tooltip>}>
                        <i className="ion-arrow-return-left" data-bs-toggle="tooltip" title="ion-arrow-return-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-swap</Tooltip>}>
                        <i className="ion-arrow-swap" data-bs-toggle="tooltip" title="ion-arrow-swap"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-shrink</Tooltip>}>
                        <i className="ion-arrow-shrink" data-bs-toggle="tooltip" title="ion-arrow-shrink"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-expand</Tooltip>}>
                        <i className="ion-arrow-expand" data-bs-toggle="tooltip" title="ion-arrow-expand"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-move</Tooltip>}>
                        <i className="ion-arrow-move" data-bs-toggle="tooltip" title="ion-arrow-move"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-resize</Tooltip>}>
                        <i className="ion-arrow-resize" data-bs-toggle="tooltip" title="ion-arrow-resize"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-chevron-up</Tooltip>}>
                        <i className="ion-chevron-up" data-bs-toggle="tooltip" title="ion-chevron-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-chevron-right</Tooltip>}>
                        <i className="ion-chevron-right" data-bs-toggle="tooltip" title="ion-chevron-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-chevron-down</Tooltip>}>
                        <i className="ion-chevron-down" data-bs-toggle="tooltip" title="ion-chevron-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-chevron-left</Tooltip>}>
                        <i className="ion-chevron-left" data-bs-toggle="tooltip" title="ion-chevron-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-navicon-round</Tooltip>}>
                        <i className="ion-navicon-round" data-bs-toggle="tooltip" title="ion-navicon-round"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-navicon</Tooltip>}>
                        <i className="ion-navicon" data-bs-toggle="tooltip" title="ion-navicon"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-drag</Tooltip>}>
                        <i className="ion-drag" data-bs-toggle="tooltip" title="ion-drag"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-log-in</Tooltip>}>
                        <i className="ion-log-in" data-bs-toggle="tooltip" title="ion-log-in"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-log-out</Tooltip>}>
                        <i className="ion-log-out" data-bs-toggle="tooltip" title="ion-log-out"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-checkmark-round</Tooltip>}>
                        <i className="ion-checkmark-round" data-bs-toggle="tooltip" title="ion-checkmark-round"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-checkmark</Tooltip>}>
                        <i className="ion-checkmark" data-bs-toggle="tooltip" title="ion-checkmark"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-checkmark-circled</Tooltip>}>
                        <i className="ion-checkmark-circled" data-bs-toggle="tooltip" title="ion-checkmark-circled"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-close-round</Tooltip>}>
                        <i className="ion-close-round" data-bs-toggle="tooltip" title="ion-close-round"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-close</Tooltip>}>
                        <i className="ion-close" data-bs-toggle="tooltip" title="ion-close"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-close-circled</Tooltip>}>
                        <i className="ion-close-circled" data-bs-toggle="tooltip" title="ion-close-circled"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-plus-round</Tooltip>}>
                        <i className="ion-plus-round" data-bs-toggle="tooltip" title="ion-plus-round"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-plus</Tooltip>}>
                        <i className="ion-plus" data-bs-toggle="tooltip" title="ion-plus"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-plus-circled</Tooltip>}>
                        <i className="ion-plus-circled" data-bs-toggle="tooltip" title="ion-plus-circled"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-minus-round</Tooltip>}>
                        <i className="ion-minus-round" data-bs-toggle="tooltip" title="ion-minus-round"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-minus</Tooltip>}>
                        <i className="ion-minus" data-bs-toggle="tooltip" title="ion-minus"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-minus-circled</Tooltip>}>
                        <i className="ion-minus-circled" data-bs-toggle="tooltip" title="ion-minus-circled"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-information</Tooltip>}>
                        <i className="ion-information" data-bs-toggle="tooltip" title="ion-information"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-information-circled</Tooltip>}>
                        <i className="ion-information-circled" data-bs-toggle="tooltip" title="ion-information-circled"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-help</Tooltip>}>
                        <i className="ion-help" data-bs-toggle="tooltip" title="ion-help"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-help-circled</Tooltip>}>
                        <i className="ion-help-circled" data-bs-toggle="tooltip" title="ion-help-circled"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-help-buoy</Tooltip>}>
                        <i className="ion-help-buoy" data-bs-toggle="tooltip" title="ion-help-buoy"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-asterisk</Tooltip>}>
                        <i className="ion-asterisk" data-bs-toggle="tooltip" title="ion-asterisk"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-alert</Tooltip>}>
                        <i className="ion-alert" data-bs-toggle="tooltip" title="ion-alert"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-alert-circled</Tooltip>}>
                        <i className="ion-alert-circled" data-bs-toggle="tooltip" title="ion-alert-circled"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-refresh</Tooltip>}>
                        <i className="ion-refresh" data-bs-toggle="tooltip" title="ion-refresh"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-loop</Tooltip>}>
                        <i className="ion-loop" data-bs-toggle="tooltip" title="ion-loop"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-shuffle</Tooltip>}>
                        <i className="ion-shuffle" data-bs-toggle="tooltip" title="ion-shuffle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-home</Tooltip>}>
                        <i className="ion-home" data-bs-toggle="tooltip" title="ion-home"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-search</Tooltip>}>
                        <i className="ion-search" data-bs-toggle="tooltip" title="ion-search"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-flag</Tooltip>}>
                        <i className="ion-flag" data-bs-toggle="tooltip" title="ion-flag"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-star</Tooltip>}>
                        <i className="ion-star" data-bs-toggle="tooltip" title="ion-star"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-heart</Tooltip>}>
                        <i className="ion-heart" data-bs-toggle="tooltip" title="ion-heart"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-heart-broken</Tooltip>}>
                        <i className="ion-heart-broken" data-bs-toggle="tooltip" title="ion-heart-broken"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-gear-a</Tooltip>}>
                        <i className="ion-gear-a" data-bs-toggle="tooltip" title="ion-gear-a"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-gear-b</Tooltip>}>
                        <i className="ion-gear-b" data-bs-toggle="tooltip" title="ion-gear-b"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-toggle-filled</Tooltip>}>
                        <i className="ion-toggle-filled" data-bs-toggle="tooltip" title="ion-toggle-filled"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-toggle</Tooltip>}>
                        <i className="ion-toggle" data-bs-toggle="tooltip" title="ion-toggle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-settings</Tooltip>}>
                        <i className="ion-settings" data-bs-toggle="tooltip" title="ion-settings"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-wrench</Tooltip>}>
                        <i className="ion-wrench" data-bs-toggle="tooltip" title="ion-wrench"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-folder</Tooltip>}>
                        <i className="ion-folder" data-bs-toggle="tooltip" title="ion-folder"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-hammer</Tooltip>}>
                        <i className="ion-hammer" data-bs-toggle="tooltip" title="ion-hammer"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-edit</Tooltip>}>
                        <i className="ion-edit" data-bs-toggle="tooltip" title="ion-edit"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-trash-a</Tooltip>}>
                        <i className="ion-trash-a" data-bs-toggle="tooltip" title="ion-trash-a"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-trash-b</Tooltip>}>
                        <i className="ion-trash-b" data-bs-toggle="tooltip" title="ion-trash-b"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-document</Tooltip>}>
                        <i className="ion-document" data-bs-toggle="tooltip" title="ion-document"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-document-text</Tooltip>}>
                        <i className="ion-document-text" data-bs-toggle="tooltip" title="ion-document-text"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-clipboard</Tooltip>}>
                        <i className="ion-clipboard" data-bs-toggle="tooltip" title="ion-clipboard"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-scissors</Tooltip>}>
                        <i className="ion-scissors" data-bs-toggle="tooltip" title="ion-scissors"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-funnel</Tooltip>}>
                        <i className="ion-funnel" data-bs-toggle="tooltip" title="ion-funnel"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-bookmark</Tooltip>}>
                        <i className="ion-bookmark" data-bs-toggle="tooltip" title="ion-bookmark"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-email</Tooltip>}>
                        <i className="ion-email" data-bs-toggle="tooltip" title="ion-email"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-folder</Tooltip>}>
                        <i className="ion-folder" data-bs-toggle="tooltip" title="ion-folder"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-filing</Tooltip>}>
                        <i className="ion-filing" data-bs-toggle="tooltip" title="ion-filing"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-archive</Tooltip>}>
                        <i className="ion-archive" data-bs-toggle="tooltip" title="ion-archive"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-reply</Tooltip>}>
                        <i className="ion-reply" data-bs-toggle="tooltip" title="ion-reply"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-reply-all</Tooltip>}>
                        <i className="ion-reply-all" data-bs-toggle="tooltip" title="ion-reply-all"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-forward</Tooltip>}>
                        <i className="ion-forward" data-bs-toggle="tooltip" title="ion-forward"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-share</Tooltip>}>
                        <i className="ion-share" data-bs-toggle="tooltip" title="ion-share"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-paper-airplane</Tooltip>}>
                        <i className="ion-paper-airplane" data-bs-toggle="tooltip" title="ion-paper-airplane"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-link</Tooltip>}>
                        <i className="ion-link" data-bs-toggle="tooltip" title="ion-link"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-paperclip</Tooltip>}>
                        <i className="ion-paperclip" data-bs-toggle="tooltip" title="ion-paperclip"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-compose</Tooltip>}>
                        <i className="ion-compose" data-bs-toggle="tooltip" title="ion-compose"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-briefcase</Tooltip>}>
                        <i className="ion-briefcase" data-bs-toggle="tooltip" title="ion-briefcase"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-medkit</Tooltip>}>
                        <i className="ion-medkit" data-bs-toggle="tooltip" title="ion-medkit"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-at</Tooltip>}>
                        <i className="ion-at" data-bs-toggle="tooltip" title="ion-at"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-pound</Tooltip>}>
                        <i className="ion-pound" data-bs-toggle="tooltip" title="ion-pound"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-quote</Tooltip>}>
                        <i className="ion-quote" data-bs-toggle="tooltip" title="ion-quote"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-cloud</Tooltip>}>
                        <i className="ion-cloud" data-bs-toggle="tooltip" title="ion-cloud"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-upload</Tooltip>}>
                        <i className="ion-upload" data-bs-toggle="tooltip" title="ion-upload"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-more</Tooltip>}>
                        <i className="ion-more" data-bs-toggle="tooltip" title="ion-more"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-grid</Tooltip>}>
                        <i className="ion-grid" data-bs-toggle="tooltip" title="ion-grid"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-calendar</Tooltip>}>
                        <i className="ion-calendar" data-bs-toggle="tooltip" title="ion-calendar"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-clock</Tooltip>}>
                        <i className="ion-clock" data-bs-toggle="tooltip" title="ion-clock"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-compass</Tooltip>}>
                        <i className="ion-compass" data-bs-toggle="tooltip" title="ion-compass"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-pinpoint</Tooltip>}>
                        <i className="ion-pinpoint" data-bs-toggle="tooltip" title="ion-pinpoint"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-pin</Tooltip>}>
                        <i className="ion-pin" data-bs-toggle="tooltip" title="ion-pin"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-navigate</Tooltip>}>
                        <i className="ion-navigate" data-bs-toggle="tooltip" title="ion-navigate"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-location</Tooltip>}>
                        <i className="ion-location" data-bs-toggle="tooltip" title="ion-location"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-map</Tooltip>}>
                        <i className="ion-map" data-bs-toggle="tooltip" title="ion-map"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-model-s</Tooltip>}>
                        <i className="ion-model-s" data-bs-toggle="tooltip" title="ion-model-s"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-locked</Tooltip>}>
                        <i className="ion-locked" data-bs-toggle="tooltip" title="ion-locked"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-unlocked</Tooltip>}>
                        <i className="ion-unlocked" data-bs-toggle="tooltip" title="ion-unlocked"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-key</Tooltip>}>
                        <i className="ion-key" data-bs-toggle="tooltip" title="ion-key"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-graph-up-right</Tooltip>}>
                        <i className="ion-arrow-graph-up-right" data-bs-toggle="tooltip" title="ion-arrow-graph-up-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-graph-down-right</Tooltip>}>
                        <i className="ion-arrow-graph-down-right" data-bs-toggle="tooltip" title="ion-arrow-graph-down-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-arrow-graph-down-left</Tooltip>}>
                        <i className="ion-arrow-graph-down-left" data-bs-toggle="tooltip" title="ion-arrow-graph-down-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-stats-bars</Tooltip>}>
                        <i className="ion-stats-bars" data-bs-toggle="tooltip" title="ion-stats-bars"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-connection-bars</Tooltip>}>
                        <i className="ion-connection-bars" data-bs-toggle="tooltip" title="ion-connection-bars"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-pie-graph</Tooltip>}>
                        <i className="ion-pie-graph" data-bs-toggle="tooltip" title="ion-pie-graph"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-chatbubble</Tooltip>}>
                        <i className="ion-chatbubble" data-bs-toggle="tooltip" title="ion-chatbubble"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-chatbubble-working</Tooltip>}>
                        <i className="ion-chatbubble-working" data-bs-toggle="tooltip" title="ion-chatbubble-working"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-chatbubbles</Tooltip>}>
                        <i className="ion-chatbubbles" data-bs-toggle="tooltip" title="ion-chatbubbles"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-chatbox</Tooltip>}>
                        <i className="ion-chatbox" data-bs-toggle="tooltip" title="ion-chatbox"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-chatbox-working</Tooltip>}>
                        <i className="ion-chatbox-working" data-bs-toggle="tooltip" title="ion-chatbox-working"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-chatboxes</Tooltip>}>
                        <i className="ion-chatboxes" data-bs-toggle="tooltip" title="ion-chatboxes"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-person</Tooltip>}>
                        <i className="ion-person" data-bs-toggle="tooltip" title="ion-person"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-person-add</Tooltip>}>
                        <i className="ion-person-add" data-bs-toggle="tooltip" title="ion-person-add"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-person-stalker</Tooltip>}>
                        <i className="ion-person-stalker" data-bs-toggle="tooltip" title="ion-person-stalker"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-woman</Tooltip>}>
                        <i className="ion-woman" data-bs-toggle="tooltip" title="ion-woman"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-man</Tooltip>}>
                        <i className="ion-man" data-bs-toggle="tooltip" title="ion-man"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-female</Tooltip>}>
                        <i className="ion-female" data-bs-toggle="tooltip" title="ion-female"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-male</Tooltip>}>
                        <i className="ion-male" data-bs-toggle="tooltip" title="ion-male"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-fork</Tooltip>}>
                        <i className="ion-fork" data-bs-toggle="tooltip" title="ion-fork"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-knife</Tooltip>}>
                        <i className="ion-knife" data-bs-toggle="tooltip" title="ion-knife"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-spoon</Tooltip>}>
                        <i className="ion-spoon" data-bs-toggle="tooltip" title="ion-spoon"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-beer</Tooltip>}>
                        <i className="ion-beer" data-bs-toggle="tooltip" title="ion-beer"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-wineglass</Tooltip>}>
                        <i className="ion-wineglass" data-bs-toggle="tooltip" title="ion-wineglass"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-coffee</Tooltip>}>
                        <i className="ion-coffee" data-bs-toggle="tooltip" title="ion-coffee"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-icecream</Tooltip>}>
                        <i className="ion-icecream" data-bs-toggle="tooltip" title="ion-icecream"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-pizza</Tooltip>}>
                        <i className="ion-pizza" data-bs-toggle="tooltip" title="ion-pizza"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-power</Tooltip>}>
                        <i className="ion-power" data-bs-toggle="tooltip" title="ion-power"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-mouse</Tooltip>}>
                        <i className="ion-mouse" data-bs-toggle="tooltip" title="ion-mouse"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-battery-full</Tooltip>}>
                        <i className="ion-battery-full" data-bs-toggle="tooltip" title="ion-battery-full"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-battery-half</Tooltip>}>
                        <i className="ion-battery-half" data-bs-toggle="tooltip" title="ion-battery-half"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-battery-low</Tooltip>}>
                        <i className="ion-battery-low" data-bs-toggle="tooltip" title="ion-battery-low"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-battery-empty</Tooltip>}>
                        <i className="ion-battery-empty" data-bs-toggle="tooltip" title="ion-battery-empty"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-battery-charging</Tooltip>}>
                        <i className="ion-battery-charging" data-bs-toggle="tooltip" title="ion-battery-charging"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-bluetooth</Tooltip>}>
                        <i className="ion-bluetooth" data-bs-toggle="tooltip" title="ion-bluetooth"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-calculator</Tooltip>}>
                        <i className="ion-calculator" data-bs-toggle="tooltip" title="ion-calculator"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-camera</Tooltip>}>
                        <i className="ion-camera" data-bs-toggle="tooltip" title="ion-camera"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-eye</Tooltip>}>
                        <i className="ion-eye" data-bs-toggle="tooltip" title="ion-eye"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-eye-disabled</Tooltip>}>
                        <i className="ion-eye-disabled" data-bs-toggle="tooltip" title="ion-eye-disabled"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-flash</Tooltip>}>
                        <i className="ion-flash" data-bs-toggle="tooltip" title="ion-flash"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-flash-off</Tooltip>}>
                        <i className="ion-flash-off" data-bs-toggle="tooltip" title="ion-flash-off"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-qr-scanner</Tooltip>}>
                        <i className="ion-qr-scanner" data-bs-toggle="tooltip" title="ion-qr-scanner"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-image</Tooltip>}>
                        <i className="ion-image" data-bs-toggle="tooltip" title="ion-image"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-images</Tooltip>}>
                        <i className="ion-images" data-bs-toggle="tooltip" title="ion-images"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-contrast</Tooltip>}>
                        <i className="ion-contrast" data-bs-toggle="tooltip" title="ion-contrast"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-wand</Tooltip>}>
                        <i className="ion-wand" data-bs-toggle="tooltip" title="ion-wand"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-aperture</Tooltip>}>
                        <i className="ion-aperture" data-bs-toggle="tooltip" title="ion-aperture"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-monitor</Tooltip>}>
                        <i className="ion-monitor" data-bs-toggle="tooltip" title="ion-monitor"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-laptop</Tooltip>}>
                        <i className="ion-laptop" data-bs-toggle="tooltip" title="ion-laptop"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ipad</Tooltip>}>
                        <i className="ion-ipad" data-bs-toggle="tooltip" title="ion-ipad"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-iphone</Tooltip>}>
                        <i className="ion-iphone" data-bs-toggle="tooltip" title="ion-iphone"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ipod</Tooltip>}>
                        <i className="ion-ipod" data-bs-toggle="tooltip" title="ion-ipod"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-printer</Tooltip>}>
                        <i className="ion-printer" data-bs-toggle="tooltip" title="ion-printer"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-usb</Tooltip>}>
                        <i className="ion-usb" data-bs-toggle="tooltip" title="ion-usb"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-outlet</Tooltip>}>
                        <i className="ion-outlet" data-bs-toggle="tooltip" title="ion-outlet"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-bug</Tooltip>}>
                        <i className="ion-bug" data-bs-toggle="tooltip" title="ion-bug"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-code</Tooltip>}>
                        <i className="ion-code" data-bs-toggle="tooltip" title="ion-code"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-code-working</Tooltip>}>
                        <i className="ion-code-working" data-bs-toggle="tooltip" title="ion-code-working"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-code-download</Tooltip>}>
                        <i className="ion-code-download" data-bs-toggle="tooltip" title="ion-code-download"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-fork-repo</Tooltip>}>
                        <i className="ion-fork-repo" data-bs-toggle="tooltip" title="ion-fork-repo"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-network</Tooltip>}>
                        <i className="ion-network" data-bs-toggle="tooltip" title="ion-network"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-pull-request</Tooltip>}>
                        <i className="ion-pull-request" data-bs-toggle="tooltip" title="ion-pull-request"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-merge</Tooltip>}>
                        <i className="ion-merge" data-bs-toggle="tooltip" title="ion-merge"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-game-controller-a</Tooltip>}>
                        <i className="ion-game-controller-a" data-bs-toggle="tooltip" title="ion-game-controller-a"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-game-controller-b</Tooltip>}>
                        <i className="ion-game-controller-b" data-bs-toggle="tooltip" title="ion-game-controller-b"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-xbox</Tooltip>}>
                        <i className="ion-xbox" data-bs-toggle="tooltip" title="ion-xbox"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-playstation</Tooltip>}>
                        <i className="ion-playstation" data-bs-toggle="tooltip" title="ion-playstation"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-steam</Tooltip>}>
                        <i className="ion-steam" data-bs-toggle="tooltip" title="ion-steam"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-closed-captioning</Tooltip>}>
                        <i className="ion-closed-captioning" data-bs-toggle="tooltip" title="ion-closed-captioning"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-videocamera</Tooltip>}>
                        <i className="ion-videocamera" data-bs-toggle="tooltip" title="ion-videocamera"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-film-marker</Tooltip>}>
                        <i className="ion-film-marker" data-bs-toggle="tooltip" title="ion-film-marker"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-disc</Tooltip>}>
                        <i className="ion-disc" data-bs-toggle="tooltip" title="ion-disc"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-headphone</Tooltip>}>
                        <i className="ion-headphone" data-bs-toggle="tooltip" title="ion-headphone"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-music-note</Tooltip>}>
                        <i className="ion-music-note" data-bs-toggle="tooltip" title="ion-music-note"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-radio-waves</Tooltip>}>
                        <i className="ion-radio-waves" data-bs-toggle="tooltip" title="ion-radio-waves"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-speakerphone</Tooltip>}>
                        <i className="ion-speakerphone" data-bs-toggle="tooltip" title="ion-speakerphone"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-mic-a</Tooltip>}>
                        <i className="ion-mic-a" data-bs-toggle="tooltip" title="ion-mic-a"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-mic-b</Tooltip>}>
                        <i className="ion-mic-b" data-bs-toggle="tooltip" title="ion-mic-b"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-mic-c</Tooltip>}>
                        <i className="ion-mic-c" data-bs-toggle="tooltip" title="ion-mic-c"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-volume-high</Tooltip>}>
                        <i className="ion-volume-high" data-bs-toggle="tooltip" title="ion-volume-high"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-volume-medium</Tooltip>}>
                        <i className="ion-volume-medium" data-bs-toggle="tooltip" title="ion-volume-medium"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-volume-low</Tooltip>}>
                        <i className="ion-volume-low" data-bs-toggle="tooltip" title="ion-volume-low"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-volume-mute</Tooltip>}>
                        <i className="ion-volume-mute" data-bs-toggle="tooltip" title="ion-volume-mute"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-levels</Tooltip>}>
                        <i className="ion-levels" data-bs-toggle="tooltip" title="ion-levels"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-play</Tooltip>}>
                        <i className="ion-play" data-bs-toggle="tooltip" title="ion-play"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-pause</Tooltip>}>
                        <i className="ion-pause" data-bs-toggle="tooltip" title="ion-pause"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-stop</Tooltip>}>
                        <i className="ion-stop" data-bs-toggle="tooltip" title="ion-stop"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-record</Tooltip>}>
                        <i className="ion-record" data-bs-toggle="tooltip" title="ion-record"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-skip-forward</Tooltip>}>
                        <i className="ion-skip-forward" data-bs-toggle="tooltip" title="ion-skip-forward"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-skip-backward</Tooltip>}>
                        <i className="ion-skip-backward" data-bs-toggle="tooltip" title="ion-skip-backward"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-eject</Tooltip>}>
                        <i className="ion-eject" data-bs-toggle="tooltip" title="ion-eject"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-bag</Tooltip>}>
                        <i className="ion-bag" data-bs-toggle="tooltip" title="ion-bag"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-card</Tooltip>}>
                        <i className="ion-card" data-bs-toggle="tooltip" title="ion-card"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-cash</Tooltip>}>
                        <i className="ion-cash" data-bs-toggle="tooltip" title="ion-cash"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-pricetag</Tooltip>}>
                        <i className="ion-pricetag" data-bs-toggle="tooltip" title="ion-pricetag"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-pricetags</Tooltip>}>
                        <i className="ion-pricetags" data-bs-toggle="tooltip" title="ion-pricetags"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-thumbsup</Tooltip>}>
                        <i className="ion-thumbsup" data-bs-toggle="tooltip" title="ion-thumbsup"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-thumbsdown</Tooltip>}>
                        <i className="ion-thumbsdown" data-bs-toggle="tooltip" title="ion-thumbsdown"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-happy</Tooltip>}>
                        <i className="ion-happy" data-bs-toggle="tooltip" title="ion-happy"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-sad</Tooltip>}>
                        <i className="ion-sad" data-bs-toggle="tooltip" title="ion-sad"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-trophy</Tooltip>}>
                        <i className="ion-trophy" data-bs-toggle="tooltip" title="ion-trophy"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-podium</Tooltip>}>
                        <i className="ion-podium" data-bs-toggle="tooltip" title="ion-podium"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ribbon-a</Tooltip>}>
                        <i className="ion-ribbon-a" data-bs-toggle="tooltip" title="ion-ribbon-a"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ribbon-b</Tooltip>}>
                        <i className="ion-ribbon-b" data-bs-toggle="tooltip" title="ion-ribbon-b"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-university</Tooltip>}>
                        <i className="ion-university" data-bs-toggle="tooltip" title="ion-university"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-magnet</Tooltip>}>
                        <i className="ion-magnet" data-bs-toggle="tooltip" title="ion-magnet"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-beaker</Tooltip>}>
                        <i className="ion-beaker" data-bs-toggle="tooltip" title="ion-beaker"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-flask</Tooltip>}>
                        <i className="ion-flask" data-bs-toggle="tooltip" title="ion-flask"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-egg</Tooltip>}>
                        <i className="ion-egg" data-bs-toggle="tooltip" title="ion-egg"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-earth</Tooltip>}>
                        <i className="ion-earth" data-bs-toggle="tooltip" title="ion-earth"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-planet</Tooltip>}>
                        <i className="ion-planet" data-bs-toggle="tooltip" title="ion-planet"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-lightbulb</Tooltip>}>
                        <i className="ion-lightbulb" data-bs-toggle="tooltip" title="ion-lightbulb"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-cube</Tooltip>}>
                        <i className="ion-cube" data-bs-toggle="tooltip" title="ion-cube"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-leaf</Tooltip>}>
                        <i className="ion-leaf" data-bs-toggle="tooltip" title="ion-leaf"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-waterdrop</Tooltip>}>
                        <i className="ion-waterdrop" data-bs-toggle="tooltip" title="ion-waterdrop"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-flame</Tooltip>}>
                        <i className="ion-flame" data-bs-toggle="tooltip" title="ion-flame"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-fireball</Tooltip>}>
                        <i className="ion-fireball" data-bs-toggle="tooltip" title="ion-fireball"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-bonfire</Tooltip>}>
                        <i className="ion-bonfire" data-bs-toggle="tooltip" title="ion-bonfire"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-umbrella</Tooltip>}>
                        <i className="ion-umbrella" data-bs-toggle="tooltip" title="ion-umbrella"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-nuclear</Tooltip>}>
                        <i className="ion-nuclear" data-bs-toggle="tooltip" title="ion-nuclear"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-no-smoking</Tooltip>}>
                        <i className="ion-no-smoking" data-bs-toggle="tooltip" title="ion-no-smoking"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-thermometer</Tooltip>}>
                        <i className="ion-thermometer" data-bs-toggle="tooltip" title="ion-thermometer"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-speedometer</Tooltip>}>
                        <i className="ion-speedometer" data-bs-toggle="tooltip" title="ion-speedometer"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-plane</Tooltip>}>
                        <i className="ion-plane" data-bs-toggle="tooltip" title="ion-plane"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-jet</Tooltip>}>
                        <i className="ion-jet" data-bs-toggle="tooltip" title="ion-jet"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-load-a</Tooltip>}>
                        <i className="ion-load-a" data-bs-toggle="tooltip" title="ion-load-a"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-load-b</Tooltip>}>
                        <i className="ion-load-b" data-bs-toggle="tooltip" title="ion-load-b"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-load-c</Tooltip>}>
                        <i className="ion-load-c" data-bs-toggle="tooltip" title="ion-load-c"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-load-d</Tooltip>}>
                        <i className="ion-load-d" data-bs-toggle="tooltip" title="ion-load-d"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-ionic-outline</Tooltip>}>
                        <i className="ion-ios7-ionic-outline" data-bs-toggle="tooltip" title="ion-ios7-ionic-outline"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-arrow-back</Tooltip>}>
                        <i className="ion-ios7-arrow-back" data-bs-toggle="tooltip" title="ion-ios7-arrow-back"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-arrow-forward</Tooltip>}>
                        <i className="ion-ios7-arrow-forward" data-bs-toggle="tooltip" title="ion-ios7-arrow-forward"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-arrow-up</Tooltip>}>
                        <i className="ion-ios7-arrow-up" data-bs-toggle="tooltip" title="ion-ios7-arrow-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-arrow-right</Tooltip>}>
                        <i className="ion-ios7-arrow-right" data-bs-toggle="tooltip" title="ion-ios7-arrow-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-arrow-down</Tooltip>}>
                        <i className="ion-ios7-arrow-down" data-bs-toggle="tooltip" title="ion-ios7-arrow-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-arrow-left</Tooltip>}>
                        <i className="ion-ios7-arrow-left" data-bs-toggle="tooltip" title="ion-ios7-arrow-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-arrow-thin-up</Tooltip>}>
                        <i className="ion-ios7-arrow-thin-up" data-bs-toggle="tooltip" title="ion-ios7-arrow-thin-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-arrow-thin-right</Tooltip>}>
                        <i className="ion-ios7-arrow-thin-right" data-bs-toggle="tooltip" title="ion-ios7-arrow-thin-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-arrow-thin-down</Tooltip>}>
                        <i className="ion-ios7-arrow-thin-down" data-bs-toggle="tooltip" title="ion-ios7-arrow-thin-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-arrow-thin-left</Tooltip>}>
                        <i className="ion-ios7-arrow-thin-left" data-bs-toggle="tooltip" title="ion-ios7-arrow-thin-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-circle-filled</Tooltip>}>
                        <i className="ion-ios7-circle-filled" data-bs-toggle="tooltip" title="ion-ios7-circle-filled"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-circle-outline</Tooltip>}>
                        <i className="ion-ios7-circle-outline" data-bs-toggle="tooltip" title="ion-ios7-circle-outline"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-checkmark-empty</Tooltip>}>
                        <i className="ion-ios7-checkmark-empty" data-bs-toggle="tooltip" title="ion-ios7-checkmark-empty"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-checkmark-outline</Tooltip>}>
                        <i className="ion-ios7-checkmark-outline" data-bs-toggle="tooltip" title="ion-ios7-checkmark-outline"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-checkmark</Tooltip>}>
                        <i className="ion-ios7-checkmark" data-bs-toggle="tooltip" title="ion-ios7-checkmark"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-plus-empty</Tooltip>}>
                        <i className="ion-ios7-plus-empty" data-bs-toggle="tooltip" title="ion-ios7-plus-empty"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-plus-outline</Tooltip>}>
                        <i className="ion-ios7-plus-outline" data-bs-toggle="tooltip" title="ion-ios7-plus-outline"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-plus</Tooltip>}>
                        <i className="ion-ios7-plus" data-bs-toggle="tooltip" title="ion-ios7-plus"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-close-empty</Tooltip>}>
                        <i className="ion-ios7-close-empty" data-bs-toggle="tooltip" title="ion-ios7-close-empty"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-close-outline</Tooltip>}>
                        <i className="ion-ios7-close-outline" data-bs-toggle="tooltip" title="ion-ios7-close-outline"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-close</Tooltip>}>
                        <i className="ion-ios7-close" data-bs-toggle="tooltip" title="ion-ios7-close"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-minus-empty</Tooltip>}>
                        <i className="ion-ios7-minus-empty" data-bs-toggle="tooltip" title="ion-ios7-minus-empty"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-minus-outline</Tooltip>}>
                        <i className="ion-ios7-minus-outline" data-bs-toggle="tooltip" title="ion-ios7-minus-outline"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-minus</Tooltip>}>
                        <i className="ion-ios7-minus" data-bs-toggle="tooltip" title="ion-ios7-minus"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-information-empty</Tooltip>}>
                        <i className="ion-ios7-information-empty" data-bs-toggle="tooltip" title="ion-ios7-information-empty"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-information-outline</Tooltip>}>
                        <i className="ion-ios7-information-outline" data-bs-toggle="tooltip" title="ion-ios7-information-outline"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-information</Tooltip>}>
                        <i className="ion-ios7-information" data-bs-toggle="tooltip" title="ion-ios7-information"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-help-empty</Tooltip>}>
                        <i className="ion-ios7-help-empty" data-bs-toggle="tooltip" title="ion-ios7-help-empty"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-help-outline</Tooltip>}>
                        <i className="ion-ios7-help-outline" data-bs-toggle="tooltip" title="ion-ios7-help-outline"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-help</Tooltip>}>
                        <i className="ion-ios7-help" data-bs-toggle="tooltip" title="ion-ios7-help"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-search</Tooltip>}>
                        <i className="ion-ios7-search" data-bs-toggle="tooltip" title="ion-ios7-search"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-search-strong</Tooltip>}>
                        <i className="ion-ios7-search-strong" data-bs-toggle="tooltip" title="ion-ios7-search-strong"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-star</Tooltip>}>
                        <i className="ion-ios7-star" data-bs-toggle="tooltip" title="ion-ios7-star"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-star-half</Tooltip>}>
                        <i className="ion-ios7-star-half" data-bs-toggle="tooltip" title="ion-ios7-star-half"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-star-outline</Tooltip>}>
                        <i className="ion-ios7-star-outline" data-bs-toggle="tooltip" title="ion-ios7-star-outline"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-heart</Tooltip>}>
                        <i className="ion-ios7-heart" data-bs-toggle="tooltip" title="ion-ios7-heart"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-heart-outline</Tooltip>}>
                        <i className="ion-ios7-heart-outline" data-bs-toggle="tooltip" title="ion-ios7-heart-outline"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-more</Tooltip>}>
                        <i className="ion-ios7-more" data-bs-toggle="tooltip" title="ion-ios7-more"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-more-outline</Tooltip>}>
                        <i className="ion-ios7-more-outline" data-bs-toggle="tooltip" title="ion-ios7-more-outline"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-home</Tooltip>}>
                        <i className="ion-ios7-home" data-bs-toggle="tooltip" title="ion-ios7-home"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-home-outline</Tooltip>}>
                        <i className="ion-ios7-home-outline" data-bs-toggle="tooltip" title="ion-ios7-home-outline"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-cloud</Tooltip>}>
                        <i className="ion-ios7-cloud" data-bs-toggle="tooltip" title="ion-ios7-cloud"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-cloud-outline</Tooltip>}>
                        <i className="ion-ios7-cloud-outline" data-bs-toggle="tooltip" title="ion-ios7-cloud-outline"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-cloud-upload</Tooltip>}>
                        <i className="ion-ios7-cloud-upload" data-bs-toggle="tooltip" title="ion-ios7-cloud-upload"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-cloud-upload-outline</Tooltip>}>
                        <i className="ion-ios7-cloud-upload-outline" data-bs-toggle="tooltip" title="ion-ios7-cloud-upload-outline"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-cloud-download</Tooltip>}>
                        <i className="ion-ios7-cloud-download" data-bs-toggle="tooltip" title="ion-ios7-cloud-download"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-cloud-download-outline</Tooltip>}>
                        <i className="ion-ios7-cloud-download-outline" data-bs-toggle="tooltip" title="ion-ios7-cloud-download-outline"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-upload</Tooltip>}>
                        <i className="ion-ios7-upload" data-bs-toggle="tooltip" title="ion-ios7-upload"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-upload-outline</Tooltip>}>
                        <i className="ion-ios7-upload-outline" data-bs-toggle="tooltip" title="ion-ios7-upload-outline"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-download</Tooltip>}>
                        <i className="ion-ios7-download" data-bs-toggle="tooltip" title="ion-ios7-download"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-refresh</Tooltip>}>
                        <i className="ion-ios7-refresh" data-bs-toggle="tooltip" title="ion-ios7-refresh"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-refresh-outline</Tooltip>}>
                        <i className="ion-ios7-refresh-outline" data-bs-toggle="tooltip" title="ion-ios7-refresh-outline"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-refresh-empty</Tooltip>}>
                        <i className="ion-ios7-refresh-empty" data-bs-toggle="tooltip" title="ion-ios7-refresh-empty"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-reload</Tooltip>}>
                        <i className="ion-ios7-reload" data-bs-toggle="tooltip" title="ion-ios7-reload"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-loop-strong</Tooltip>}>
                        <i className="ion-ios7-loop-strong" data-bs-toggle="tooltip" title="ion-ios7-loop-strong"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-loop</Tooltip>}>
                        <i className="ion-ios7-loop" data-bs-toggle="tooltip" title="ion-ios7-loop"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-bookmarks</Tooltip>}>
                        <i className="ion-ios7-bookmarks" data-bs-toggle="tooltip" title="ion-ios7-bookmarks"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ion-ios7-bookmarks-outline</Tooltip>}>
                        <i className="ion-ios7-bookmarks-outline" data-bs-toggle="tooltip" title="ion-ios7-bookmarks-outline"></i></OverlayTrigger></li>
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
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW CLOSE --> */}
  </div>
)
  };

export default IonicIcons;

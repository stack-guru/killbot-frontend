import React from 'react';
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './ThemifyIcons.module.scss';

const ThemifyIcons = () => {
  return (
  <div className={styles.ThemifyIcons}>
    <PageHeader titles="Themify Icons" active="Themify Icons" items={['Icons']} />
    {/* <!-- ROW OPEN --> */}
    <Row className="row-cards">
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Themify Icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={12} sm={12}>
                <p>Simply beautiful open source icons. For more info <a href="https://themify.me/themify-icons">click here</a>.</p>
                <p><code>&lt;i className="ti-ICON_NAME"&gt;&lt;/i&gt;</code></p>
              </Col>
              <Col lg={12} sm={12}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-arrow-up</Tooltip>}>
                        <i className="ti-arrow-up" title="ti-arrow-up"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-arrow-right</Tooltip>}>
                        <i className="ti-arrow-right" title="ti-arrow-right"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-arrow-left</Tooltip>}>
                        <i className="ti-arrow-left" title="ti-arrow-left"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-arrow-down</Tooltip>}>
                        <i className="ti-arrow-down" title="ti-arrow-down"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-arrows-vertical</Tooltip>}>
                        <i className="ti-arrows-vertical" title="ti-arrows-vertical"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-arrows-horizontal</Tooltip>}>
                        <i className="ti-arrows-horizontal" title="ti-arrows-horizontal"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-angle-up</Tooltip>}>
                        <i className="ti-angle-up" title="ti-angle-up"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-angle-right</Tooltip>}>
                        <i className="ti-angle-right" title="ti-angle-right"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-angle-left</Tooltip>}>
                        <i className="ti-angle-left" title="ti-angle-left"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-angle-down</Tooltip>}>
                        <i className="ti-angle-down" title="ti-angle-down"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-angle-double-up</Tooltip>}>
                        <i className="ti-angle-double-up" title="ti-angle-double-up"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-angle-double-right</Tooltip>}>
                        <i className="ti-angle-double-right" title="ti-angle-double-right"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-angle-double-left</Tooltip>}>
                        <i className="ti-angle-double-left" title="ti-angle-double-left"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-angle-double-down</Tooltip>}>
                        <i className="ti-angle-double-down" title="ti-angle-double-down"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-move</Tooltip>}>
                        <i className="ti-move" title="ti-move"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-fullscreen</Tooltip>}>
                        <i className="ti-fullscreen" title="ti-fullscreen"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-arrow-top-right</Tooltip>}>
                        <i className="ti-arrow-top-right" title="ti-arrow-top-right"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-arrow-top-left</Tooltip>}>
                        <i className="ti-arrow-top-left" title="ti-arrow-top-left"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-arrow-circle-up</Tooltip>}>
                        <i className="ti-arrow-circle-up" title="ti-arrow-circle-up"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-arrow-circle-right</Tooltip>}>
                        <i className="ti-arrow-circle-right" title="ti-arrow-circle-right"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-arrow-circle-left</Tooltip>}>
                        <i className="ti-arrow-circle-left" title="ti-arrow-circle-left"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-arrow-circle-down</Tooltip>}>
                        <i className="ti-arrow-circle-down" title="ti-arrow-circle-down"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-arrows-corner</Tooltip>}>
                        <i className="ti-arrows-corner" title="ti-arrows-corner"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-split-v</Tooltip>}>
                        <i className="ti-split-v" title="ti-split-v"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-split-v-alt</Tooltip>}>
                        <i className="ti-split-v-alt" title="ti-split-v-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-split-h</Tooltip>}>
                        <i className="ti-split-h" title="ti-split-h"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-hand-point-up</Tooltip>}>
                        <i className="ti-hand-point-up" title="ti-hand-point-up"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-hand-point-right</Tooltip>}>
                        <i className="ti-hand-point-right" title="ti-hand-point-right"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-hand-point-left</Tooltip>}>
                        <i className="ti-hand-point-left" title="ti-hand-point-left"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-hand-point-down</Tooltip>}>
                        <i className="ti-hand-point-down" title="ti-hand-point-down"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-back-right</Tooltip>}>
                        <i className="ti-back-right" title="ti-back-right"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-back-left</Tooltip>}>
                        <i className="ti-back-left" title="ti-back-left"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-exchange-vertical</Tooltip>}>
                        <i className="ti-exchange-vertical" title="ti-exchange-vertical"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-wand</Tooltip>}>
                        <i className="ti-wand" title="ti-wand"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-save</Tooltip>}>
                        <i className="ti-save" title="ti-save"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-save-alt</Tooltip>}>
                        <i className="ti-save-alt" title="ti-save-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-direction</Tooltip>}>
                        <i className="ti-direction" title="ti-direction"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-direction-alt</Tooltip>}>
                        <i className="ti-direction-alt" title="ti-direction-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-user</Tooltip>}>
                        <i className="ti-user" title="ti-user"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-link</Tooltip>}>
                        <i className="ti-link" title="ti-link"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-unlink</Tooltip>}>
                        <i className="ti-unlink" title="ti-unlink"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-trash</Tooltip>}>
                        <i className="ti-trash" title="ti-trash"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-target</Tooltip>}>
                        <i className="ti-target" title="ti-target"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-tag</Tooltip>}>
                        <i className="ti-tag" title="ti-tag"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-desktop</Tooltip>}>
                        <i className="ti-desktop" title="ti-desktop"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-tablet</Tooltip>}>
                        <i className="ti-tablet" title="ti-tablet"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-mobile</Tooltip>}>
                        <i className="ti-mobile" title="ti-mobile"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-email</Tooltip>}>
                        <i className="ti-email" title="ti-email"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-star</Tooltip>}>
                        <i className="ti-star" title="ti-star"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-spray</Tooltip>}>
                        <i className="ti-spray" title="ti-spray"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-signal</Tooltip>}>
                        <i className="ti-signal" title="ti-signal"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-shopping-cart</Tooltip>}>
                        <i className="ti-shopping-cart" title="ti-shopping-cart"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-shopping-cart-full</Tooltip>}>
                        <i className="ti-shopping-cart-full" title="ti-shopping-cart-full"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-settings</Tooltip>}>
                        <i className="ti-settings" title="ti-settings"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-search</Tooltip>}>
                        <i className="ti-search" title="ti-search"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-zoom-in</Tooltip>}>
                        <i className="ti-zoom-in" title="ti-zoom-in"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-zoom-out</Tooltip>}>
                        <i className="ti-zoom-out" title="ti-zoom-out"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-cut</Tooltip>}>
                        <i className="ti-cut" title="ti-cut"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-ruler</Tooltip>}>
                        <i className="ti-ruler" title="ti-ruler"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-ruler-alt-2</Tooltip>}>
                        <i className="ti-ruler-alt-2" title="ti-ruler-alt-2"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-ruler-pencil</Tooltip>}>
                        <i className="ti-ruler-pencil" title="ti-ruler-pencil"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-ruler-alt</Tooltip>}>
                        <i className="ti-ruler-alt" title="ti-ruler-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-bookmark</Tooltip>}>
                        <i className="ti-bookmark" title="ti-bookmark"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-bookmark-alt</Tooltip>}>
                        <i className="ti-bookmark-alt" title="ti-bookmark-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-reload</Tooltip>}>
                        <i className="ti-reload" title="ti-reload"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-plus</Tooltip>}>
                        <i className="ti-plus" title="ti-plus"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-minus</Tooltip>}>
                        <i className="ti-minus" title="ti-minus"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-close</Tooltip>}>
                        <i className="ti-close" title="ti-close"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-pin</Tooltip>}>
                        <i className="ti-pin" title="ti-pin"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-pencil</Tooltip>}>
                        <i className="ti-pencil" title="ti-pencil"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-pencil-alt</Tooltip>}>
                        <i className="ti-pencil-alt" title="ti-pencil-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-paint-roller</Tooltip>}>
                        <i className="ti-paint-roller" title="ti-paint-roller"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-paint-bucket</Tooltip>}>
                        <i className="ti-paint-bucket" title="ti-paint-bucket"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-na</Tooltip>}>
                        <i className="ti-na" title="ti-na"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-medall</Tooltip>}>
                        <i className="ti-medall" title="ti-medall"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-medall-alt</Tooltip>}>
                        <i className="ti-medall-alt" title="ti-medall-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-marker</Tooltip>}>
                        <i className="ti-marker" title="ti-marker"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-marker-alt</Tooltip>}>
                        <i className="ti-marker-alt" title="ti-marker-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-lock</Tooltip>}>
                        <i className="ti-lock" title="ti-lock"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-unlock</Tooltip>}>
                        <i className="ti-unlock" title="ti-unlock"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-location-arrow</Tooltip>}>
                        <i className="ti-location-arrow" title="ti-location-arrow"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-layout</Tooltip>}>
                        <i className="ti-layout" title="ti-layout"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-layers</Tooltip>}>
                        <i className="ti-layers" title="ti-layers"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-layers-alt</Tooltip>}>
                        <i className="ti-layers-alt" title="ti-layers-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-key</Tooltip>}>
                        <i className="ti-key" title="ti-key"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-image</Tooltip>}>
                        <i className="ti-image" title="ti-image"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-heart</Tooltip>}>
                        <i className="ti-heart" title="ti-heart"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-heart-broken</Tooltip>}>
                        <i className="ti-heart-broken" title="ti-heart-broken"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-hand-stop</Tooltip>}>
                        <i className="ti-hand-stop" title="ti-hand-stop"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-hand-open</Tooltip>}>
                        <i className="ti-hand-open" title="ti-hand-open"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-hand-drag</Tooltip>}>
                        <i className="ti-hand-drag" title="ti-hand-drag"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-flag</Tooltip>}>
                        <i className="ti-flag" title="ti-flag"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-flag-alt</Tooltip>}>
                        <i className="ti-flag-alt" title="ti-flag-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-flag-alt-2</Tooltip>}>
                        <i className="ti-flag-alt-2" title="ti-flag-alt-2"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-eye</Tooltip>}>
                        <i className="ti-eye" title="ti-eye"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-import</Tooltip>}>
                        <i className="ti-import" title="ti-import"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-export</Tooltip>}>
                        <i className="ti-export" title="ti-export"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-cup</Tooltip>}>
                        <i className="ti-cup" title="ti-cup"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-crown</Tooltip>}>
                        <i className="ti-crown" title="ti-crown"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-comments</Tooltip>}>
                        <i className="ti-comments" title="ti-comments"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-comment</Tooltip>}>
                        <i className="ti-comment" title="ti-comment"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-comment-alt</Tooltip>}>
                        <i className="ti-comment-alt" title="ti-comment-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-thought</Tooltip>}>
                        <i className="ti-thought" title="ti-thought"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-clip</Tooltip>}>
                        <i className="ti-clip"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-check</Tooltip>}>
                        <i className="ti-check" title="ti-check"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-check-box</Tooltip>}>
                        <i className="ti-check-box" title="ti-check-box"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-camera</Tooltip>}>
                        <i className="ti-camera" title="ti-camera"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-announcement</Tooltip>}>
                        <i className="ti-announcement" title="ti-announcement"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-brush</Tooltip>}>
                        <i className="ti-brush" title="ti-brush"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-brush-alt</Tooltip>}>
                        <i className="ti-brush-alt" title="ti-brush-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-palette</Tooltip>}>
                        <i className="ti-palette" title="ti-palette"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-briefcase</Tooltip>}>
                        <i className="ti-briefcase" title="ti-briefcase"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-bolt</Tooltip>}>
                        <i className="ti-bolt" title="ti-bolt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-bolt-alt</Tooltip>}>
                        <i className="ti-bolt-alt" title="ti-bolt-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-blackboard</Tooltip>}>
                        <i className="ti-blackboard" title="ti-blackboard"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-bag</Tooltip>}>
                        <i className="ti-bag" title="ti-bag"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-world</Tooltip>}>
                        <i className="ti-world" title="ti-world"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-wheelchair</Tooltip>}>
                        <i className="ti-wheelchair" title="ti-wheelchair"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-car</Tooltip>}>
                        <i className="ti-car" title="ti-car"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-truck</Tooltip>}>
                        <i className="ti-truck" title="ti-truck"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-timer</Tooltip>}>
                        <i className="ti-timer" title="ti-timer"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-ticket</Tooltip>}>
                        <i className="ti-ticket" title="ti-ticket"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-thumb-up</Tooltip>}>
                        <i className="ti-thumb-up" title="ti-thumb-up"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-thumb-down</Tooltip>}>
                        <i className="ti-thumb-down" title="ti-thumb-down"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-stats-up</Tooltip>}>
                        <i className="ti-stats-up" title="ti-stats-up"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-stats-down</Tooltip>}>
                        <i className="ti-stats-down" title="ti-stats-down"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-shine</Tooltip>}>
                        <i className="ti-shine" title="ti-shine"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-shift-right</Tooltip>}>
                        <i className="ti-shift-right" title="ti-shift-right"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-shift-left</Tooltip>}>
                        <i className="ti-shift-left" title="ti-shift-left"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-shift-right-alt</Tooltip>}>
                        <i className="ti-shift-right-alt" title="ti-shift-right-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-shift-left-alt</Tooltip>}>
                        <i className="ti-shift-left-alt" title="ti-shift-left-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-shield</Tooltip>}>
                        <i className="ti-shield" title="ti-shield"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-notepad</Tooltip>}>
                        <i className="ti-notepad" title="ti-notepad"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-server</Tooltip>}>
                        <i className="ti-server" title="ti-server"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-pulse</Tooltip>}>
                        <i className="ti-pulse" title="ti-pulse"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-printer</Tooltip>}>
                        <i className="ti-printer" title="ti-printer"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-power-off</Tooltip>}>
                        <i className="ti-power-off" title="ti-power-off"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-plug</Tooltip>}>
                        <i className="ti-plug" title="ti-plug"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-pie-chart</Tooltip>}>
                        <i className="ti-pie-chart" title="ti-pie-chart"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-panel</Tooltip>}>
                        <i className="ti-panel" title="ti-panel"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-package</Tooltip>}>
                        <i className="ti-package" title="ti-package"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-music</Tooltip>}>
                        <i className="ti-music" title="ti-music"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-music-alt</Tooltip>}>
                        <i className="ti-music-alt" title="ti-music-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-mouse</Tooltip>}>
                        <i className="ti-mouse" title="ti-mouse"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-mouse-alt</Tooltip>}>
                        <i className="ti-mouse-alt" title="ti-mouse-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-money</Tooltip>}>
                        <i className="ti-money" title="ti-money"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-microphone</Tooltip>}>
                        <i className="ti-microphone" title="ti-microphone"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-menu</Tooltip>}>
                        <i className="ti-menu" title="ti-menu"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-menu-alt</Tooltip>}>
                        <i className="ti-menu-alt" title="ti-menu-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-map</Tooltip>}>
                        <i className="ti-map" title="ti-map"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-map-alt</Tooltip>}>
                        <i className="ti-map-alt" title="ti-map-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-location-pin</Tooltip>}>
                        <i className="ti-location-pin" title="ti-location-pin"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-light-bulb</Tooltip>}>
                        <i className="ti-light-bulb" title="ti-light-bulb"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-info</Tooltip>}>
                        <i className="ti-info" title="ti-info"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-infinite</Tooltip>}>
                        <i className="ti-infinite" title="ti-infinite"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-id-badge</Tooltip>}>
                        <i className="ti-id-badge" title="ti-id-badge"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-hummer</Tooltip>}>
                        <i className="ti-hummer" title="ti-hummer"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-home</Tooltip>}>
                        <i className="ti-home" title="ti-home"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-help</Tooltip>}>
                        <i className="ti-help" title="ti-help"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-headphone</Tooltip>}>
                        <i className="ti-headphone" title="ti-headphone"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-harddrives</Tooltip>}>
                        <i className="ti-harddrives" title="ti-harddrives"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-harddrive</Tooltip>}>
                        <i className="ti-harddrive" title="ti-harddrive"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-gift</Tooltip>}>
                        <i className="ti-gift" title="ti-gift"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-game</Tooltip>}>
                        <i className="ti-game" title="ti-game"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-filter</Tooltip>}>
                        <i className="ti-filter" title="ti-filter"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-files</Tooltip>}>
                        <i className="ti-files" title="ti-files"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-file</Tooltip>}>
                        <i className="ti-file" title="ti-file"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-zip</Tooltip>}>
                        <i className="ti-zip"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-folder</Tooltip>}>
                        <i className="ti-folder" title="ti-folder"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-envelope</Tooltip>}>
                        <i className="ti-envelope" title="ti-envelope"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-dashboard</Tooltip>}>
                        <i className="ti-dashboard" title="ti-dashboard"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-cloud</Tooltip>}>
                        <i className="ti-cloud" title="ti-cloud"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-cloud-up</Tooltip>}>
                        <i className="ti-cloud-up" title="ti-cloud-up"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-cloud-down</Tooltip>}>
                        <i className="ti-cloud-down" title="ti-cloud-down"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-clipboard</Tooltip>}>
                        <i className="ti-clipboard" title="ti-clipboard"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-calendar</Tooltip>}>
                        <i className="ti-calendar" title="ti-calendar"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-book</Tooltip>}>
                        <i className="ti-book" title="ti-book"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-bell</Tooltip>}>
                        <i className="ti-bell" title="ti-bell"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-basketball</Tooltip>}>
                        <i className="ti-basketball" title="ti-basketball"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-bar-chart</Tooltip>}>
                        <i className="ti-bar-chart" title="ti-bar-chart"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-bar-chart-alt</Tooltip>}>
                        <i className="ti-bar-chart-alt" title="ti-bar-chart-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-archive</Tooltip>}>
                        <i className="ti-archive" title="ti-archive"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-anchor</Tooltip>}>
                        <i className="ti-anchor" title="ti-anchor"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-alert</Tooltip>}>
                        <i className="ti-alert" title="ti-alert"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-alarm-clock</Tooltip>}>
                        <i className="ti-alarm-clock" title="ti-alarm-clock"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-agenda</Tooltip>}>
                        <i className="ti-agenda" title="ti-agenda"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-write</Tooltip>}>
                        <i className="ti-write" title="ti-write"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-wallet</Tooltip>}>
                        <i className="ti-wallet" title="ti-wallet"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-video-clapper</Tooltip>}>
                        <i className="ti-video-clapper" title="ti-video-clapper"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-video-camera</Tooltip>}>
                        <i className="ti-video-camera" title="ti-video-camera"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-vector</Tooltip>}>
                        <i className="ti-vector" title="ti-vector"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-support</Tooltip>}>
                        <i className="ti-support" title="ti-support"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-stamp</Tooltip>}>
                        <i className="ti-stamp" title="ti-stamp"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-slice</Tooltip>}>
                        <i className="ti-slice" title="ti-slice"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-shortcode</Tooltip>}>
                        <i className="ti-shortcode" title="ti-shortcode"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-receipt</Tooltip>}>
                        <i className="ti-receipt" title="ti-receipt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-pin2</Tooltip>}>
                        <i className="ti-pin2" title="ti-pin2"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-pin-alt</Tooltip>}>
                        <i className="ti-pin-alt" title="ti-pin-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-pencil-alt2</Tooltip>}>
                        <i className="ti-pencil-alt2" title="ti-pencil-alt2"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-eraser</Tooltip>}>
                        <i className="ti-eraser" title="ti-eraser"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-more</Tooltip>}>
                        <i className="ti-more" title="ti-more"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-more-alt</Tooltip>}>
                        <i className="ti-more-alt" title="ti-more-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-microphone-alt</Tooltip>}>
                        <i className="ti-microphone-alt" title="ti-microphone-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-magnet</Tooltip>}>
                        <i className="ti-magnet" title="ti-magnet"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-line-double</Tooltip>}>
                        <i className="ti-line-double" title="ti-line-double"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-line-dotted</Tooltip>}>
                        <i className="ti-line-dotted" title="ti-line-dotted"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-line-dashed</Tooltip>}>
                        <i className="ti-line-dashed" title="ti-line-dashed"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-ink-pen</Tooltip>}>
                        <i className="ti-ink-pen" title="ti-ink-pen"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-info-alt</Tooltip>}>
                        <i className="ti-info-alt" title="ti-info-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-help-alt</Tooltip>}>
                        <i className="ti-help-alt" title="ti-help-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-headphone-alt</Tooltip>}>
                        <i className="ti-headphone-alt" title="ti-headphone-alt"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-gallery</Tooltip>}>
                        <i className="ti-gallery" title="ti-gallery"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-face-smile</Tooltip>}>
                        <i className="ti-face-smile" title="ti-face-smile"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-face-sad</Tooltip>}>
                        <i className="ti-face-sad" title="ti-face-sad"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-credit-card</Tooltip>}>
                        <i className="ti-credit-card" title="ti-credit-card"></i></OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>ti-comments-smiley</Tooltip>}>
                        <i className="ti-comments-smiley" title="ti-comments-smiley"></i></OverlayTrigger>
                    </li>
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

export default ThemifyIcons;

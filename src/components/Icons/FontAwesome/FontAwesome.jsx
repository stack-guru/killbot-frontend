import React from 'react';
import styles from './FontAwesome.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';

const FontAwesome = () => {

  return (

  <div className={styles.FontAwesome}>
    <PageHeader titles="Font Awesome" active="Font Awesome" items={['Icons']} />
    {/* <!-- ROW OPEN --> */}
    <Row className="row-cards">
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Font Awesome</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={12} sm={12}>
                <p>Powered by Font Awesome set. For more info <a href="https://fontawesome.com/v4.7/icons/">click here</a>.</p>
                <p><code>&lt;i className="fa fa-ICON_NAME"&gt;&lt;/i&gt;</code></p>
              </Col>
              <Col lg={12} sm={12}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip> fa fa-500px</Tooltip>}>
                        <i className="fa fa-500px"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip> fa fa-address-book</Tooltip>}>
                        <i className="fa fa-address-book"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip> fa fa-address-book-o</Tooltip>}>

                        <i className="fa fa-address-book-o"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip> fa fa-address-card</Tooltip>}>
                        <i className="fa fa-address-card"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip> fa fa-address-card-o</Tooltip>}>

                        <i className="fa fa-address-card-o"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip> fa fa-adjust</Tooltip>}>
                        <i className="fa fa-adjust"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip> fa fa-adn</Tooltip>}>
                        <i className="fa fa-adn"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip> fa fa-align-center</Tooltip>}>
                        <i className="fa fa-align-center"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip> fa fa-align-justify</Tooltip>}>
                        <i className="fa fa-align-justify"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip> fa fa-align-left</Tooltip>}>
                        <i className="fa fa-align-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip> fa fa-align-right</Tooltip>}>
                        <i className="fa fa-align-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip> fa fa-amazon</Tooltip>}>
                        <i className="fa fa-amazon"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip> fa fa-ambulance</Tooltip>}>
                        <i className="fa fa-ambulance"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-american-sign-language-interpreting</Tooltip>}>

                        <i className="fa fa-american-sign-language-interpreting"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-anchorggle="tooltip</Tooltip>}>

                        <i className="fa fa-anchor"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-androidggle="tooltip</Tooltip>}>

                        <i className="fa fa-android"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-angellist</Tooltip>}>

                        <i className="fa fa-angellist"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-angle-double-down</Tooltip>}>

                        <i className="fa fa-angle-double-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-angle-double-left</Tooltip>}>

                        <i className="fa fa-angle-double-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-angle-double-right</Tooltip>}>

                        <i className="fa fa-angle-double-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-angle-double-up</Tooltip>}>

                        <i className="fa fa-angle-double-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-angle-down</Tooltip>}>

                        <i className="fa fa-angle-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-angle-left</Tooltip>}>

                        <i className="fa fa-angle-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-angle-right</Tooltip>}>

                        <i className="fa fa-angle-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-angle-up</Tooltip>}>

                        <i className="fa fa-angle-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-apple</Tooltip>}>

                        <i className="fa fa-apple"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-archive</Tooltip>}>

                        <i className="fa fa-archive"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-area-chart</Tooltip>}>

                        <i className="fa fa-area-chart"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-arrow-circle-down</Tooltip>}>

                        <i className="fa fa-arrow-circle-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-arrow-circle-left</Tooltip>}>

                        <i className="fa fa-arrow-circle-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-arrow-circle-o-down</Tooltip>}>

                        <i className="fa fa-arrow-circle-o-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-arrow-circle-o-left</Tooltip>}>

                        <i className="fa fa-arrow-circle-o-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-arrow-circle-o-right</Tooltip>}>

                        <i className="fa fa-arrow-circle-o-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-arrow-circle-o-up</Tooltip>}>

                        <i className="fa fa-arrow-circle-o-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-arrow-circle-right</Tooltip>}>

                        <i className="fa fa-arrow-circle-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-arrow-circle-up</Tooltip>}>

                        <i className="fa fa-arrow-circle-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-arrow-down</Tooltip>}>

                        <i className="fa fa-arrow-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-arrow-left</Tooltip>}>

                        <i className="fa fa-arrow-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-arrow-right</Tooltip>}>

                        <i className="fa fa-arrow-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-arrow-up</Tooltip>}>

                        <i className="fa fa-arrow-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-arrows</Tooltip>}>

                        <i className="fa fa-arrows"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-arrows-alt</Tooltip>}>

                        <i className="fa fa-arrows-alt"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-arrows-h</Tooltip>}>

                        <i className="fa fa-arrows-h"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-arrows-v</Tooltip>}>

                        <i className="fa fa-arrows-v"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-asl-interpreting</Tooltip>}>

                        <i className="fa fa-asl-interpreting"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-assistive-listening-systems</Tooltip>}>

                        <i className="fa fa-assistive-listening-systems"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-asterisk</Tooltip>}>

                        <i className="fa fa-asterisk"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-at</Tooltip>}>

                        <i className="fa fa-at"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-audio-description</Tooltip>}>

                        <i className="fa fa-audio-description"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-automobile</Tooltip>}>

                        <i className="fa fa-automobile"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-backward</Tooltip>}>

                        <i className="fa fa-backward"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-balance-scale</Tooltip>}>

                        <i className="fa fa-balance-scale"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-ban</Tooltip>}>

                        <i className="fa fa-ban"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bandcamp</Tooltip>}>

                        <i className="fa fa-bandcamp"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bank</Tooltip>}>

                        <i className="fa fa-bank"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-area-chart</Tooltip>}>

                        <i className="fa fa-area-chart"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-barcode</Tooltip>}>

                        <i className="fa fa-barcode"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bars</Tooltip>}>

                        <i className="fa fa-bars"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bath</Tooltip>}>

                        <i className="fa fa-bath"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bathtub</Tooltip>}>

                        <i className="fa fa-bathtub"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-battery</Tooltip>}>

                        <i className="fa fa-battery"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-battery-0</Tooltip>}>

                        <i className="fa fa-battery-0"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-battery-1</Tooltip>}>

                        <i className="fa fa-battery-1"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-battery-2</Tooltip>}>

                        <i className="fa fa-battery-2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-battery-3</Tooltip>}>

                        <i className="fa fa-battery-3"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-battery-4</Tooltip>}>

                        <i className="fa fa-battery-4"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-battery-empty</Tooltip>}>

                        <i className="fa fa-battery-empty"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-battery-full</Tooltip>}>

                        <i className="fa fa-battery-full"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-battery-half</Tooltip>}>

                        <i className="fa fa-battery-half"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-battery-quarter</Tooltip>}>

                        <i className="fa fa-battery-quarter"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-battery-three-quarters</Tooltip>}>

                        <i className="fa fa-battery-three-quarters"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bed</Tooltip>}>

                        <i className="fa fa-bed"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-beer</Tooltip>}>

                        <i className="fa fa-beer"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-behance</Tooltip>}>

                        <i className="fa fa-behance"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-behance-square</Tooltip>}>

                        <i className="fa fa-behance-square"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bell</Tooltip>}>

                        <i className="fa fa-bell"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bell-o</Tooltip>}>

                        <i className="fa fa-bell-o"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bell-slash</Tooltip>}>

                        <i className="fa fa-bell-slash"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bell-slash-o</Tooltip>}>

                        <i className="fa fa-bell-slash-o"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bicycle</Tooltip>}>

                        <i className="fa fa-bicycle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-binoculars</Tooltip>}>

                        <i className="fa fa-binoculars"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-birthday-cake</Tooltip>}>

                        <i className="fa fa-birthday-cake"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bitbucket</Tooltip>}>

                        <i className="fa fa-bitbucket"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bitbucket-square</Tooltip>}>

                        <i className="fa fa-bitbucket-square"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bitcoin</Tooltip>}>

                        <i className="fa fa-bitcoin"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-black-tie</Tooltip>}>

                        <i className="fa fa-black-tie"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-blind</Tooltip>}>

                        <i className="fa fa-blind"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bluetooth</Tooltip>}>

                        <i className="fa fa-bluetooth"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bluetooth-b</Tooltip>}>

                        <i className="fa fa-bluetooth-b"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bold</Tooltip>}>

                        <i className="fa fa-bold"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bolt</Tooltip>}>

                        <i className="fa fa-bolt"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bomb</Tooltip>}>

                        <i className="fa fa-bomb"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-book</Tooltip>}>

                        <i className="fa fa-book"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bookmark</Tooltip>}>

                        <i className="fa fa-bookmark"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bookmark-o</Tooltip>}>

                        <i className="fa fa-bookmark-o"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-braille"</Tooltip>}>

                        <i className="fa fa-braille"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-briefcase</Tooltip>}>

                        <i className="fa fa-briefcase"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-btc</Tooltip>}>

                        <i className="fa fa-btc"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bug</Tooltip>}>

                        <i className="fa fa-bug" title="fa fa-bug"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-building</Tooltip>}>

                        <i className="fa fa-building"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-building-o</Tooltip>}>

                        <i className="fa fa-building-o"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bullhorn</Tooltip>}>

                        <i className="fa fa-bullhorn"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bullseye</Tooltip>}>

                        <i className="fa fa-bullseye"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-bus</Tooltip>}>

                        <i className="fa fa-bus" title="fa fa-bus"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-buysellads</Tooltip>}>

                        <i className="fa fa-buysellads"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cab</Tooltip>}>

                        <i className="fa fa-cab"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-calculator</Tooltip>}>

                        <i className="fa fa-calculator"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-calendar</Tooltip>}>

                        <i className="fa fa-calendar"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-calendar-check-o</Tooltip>}>

                        <i className="fa fa-calendar-check-o"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-calendar-minus-o</Tooltip>}>

                        <i className="fa fa-calendar-minus-o"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-calendar-o</Tooltip>}>

                        <i className="fa fa-calendar-o"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-calendar-plus-o</Tooltip>}>

                        <i className="fa fa-calendar-plus-o"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-calendar-times-o</Tooltip>}>

                        <i className="fa fa-calendar-times-o"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-camera</Tooltip>}>

                        <i className="fa fa-camera"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-camera-retro</Tooltip>}>

                        <i className="fa fa-camera-retro"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-car</Tooltip>}>

                        <i className="fa fa-car"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-caret-down</Tooltip>}>

                        <i className="fa fa-caret-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-caret-left</Tooltip>}>

                        <i className="fa fa-caret-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-caret-right</Tooltip>}>

                        <i className="fa fa-caret-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-caret-square-o-down</Tooltip>}>

                        <i className="fa fa-caret-square-o-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-caret-square-o-left</Tooltip>}>

                        <i className="fa fa-caret-square-o-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-caret-square-o-right</Tooltip>}>

                        <i className="fa fa-caret-square-o-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-caret-square-o-up</Tooltip>}>

                        <i className="fa fa-caret-square-o-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-caret-up</Tooltip>}>

                        <i className="fa fa-caret-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cart-arrow-down</Tooltip>}>

                        <i className="fa fa-cart-arrow-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cart-plus</Tooltip>}>

                        <i className="fa fa-cart-plus"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cc</Tooltip>}>

                        <i className="fa fa-cc"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cc-amex</Tooltip>}>

                        <i className="fa fa-cc-amex"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cc-diners-club</Tooltip>}>

                        <i className="fa fa-cc-diners-club"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cc-discove</Tooltip>}>

                        <i className="fa fa-cc-discover"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cc-jcb</Tooltip>}>

                        <i className="fa fa-cc-jcb"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cc-mastercard</Tooltip>}>

                        <i className="fa fa-cc-mastercard"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cc-paypal</Tooltip>}>

                        <i className="fa fa-cc-paypal"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cc-stripe</Tooltip>}>

                        <i className="fa fa-cc-stripe"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cc-visa</Tooltip>}>

                        <i className="fa fa-cc-visa"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-certificate</Tooltip>}>

                        <i className="fa fa-certificate"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-chain</Tooltip>}>

                        <i className="fa fa-chain"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-chain-broken</Tooltip>}>

                        <i className="fa fa-chain-broken"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-check</Tooltip>}>

                        <i className="fa fa-check"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-check-circle</Tooltip>}>

                        <i className="fa fa-check-circle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-check-circle-o</Tooltip>}>

                        <i className="fa fa-check-circle-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-check-square</Tooltip>}>

                        <i className="fa fa-check-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-check-square-o</Tooltip>}>

                        <i className="fa fa-check-square-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-chevron-circle-down" </Tooltip>}>

                        <i className="fa fa-chevron-circle-down"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-chevron-circle-left" </Tooltip>}>

                        <i className="fa fa-chevron-circle-left"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-chevron-circle-right"</Tooltip>}>

                        <i className="fa fa-chevron-circle-right"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-chevron-circle-up</Tooltip>}>

                        <i className="fa fa-chevron-circle-up"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-chevron-down</Tooltip>}>

                        <i className="fa fa-chevron-down"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-chevron-left</Tooltip>}>

                        <i className="fa fa-chevron-left"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-chevron-right</Tooltip>}>

                        <i className="fa fa-chevron-right"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-chevron-up</Tooltip>}>

                        <i className="fa fa-chevron-up"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-child</Tooltip>}>

                        <i className="fa fa-child"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-chrome</Tooltip>}>

                        <i className="fa fa-chrome"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-circle</Tooltip>}>

                        <i className="fa fa-circle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-circle-o</Tooltip>}>

                        <i className="fa fa-circle-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-circle-o-notch</Tooltip>}>

                        <i className="fa fa-circle-o-notch"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-circle-thin</Tooltip>}>

                        <i className="fa fa-circle-thin"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-clipboard</Tooltip>}>

                        <i className="fa fa-clipboard"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-clock-o</Tooltip>}>

                        <i className="fa fa-clock-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-clone</Tooltip>}>

                        <i className="fa fa-clone"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-close</Tooltip>}>

                        <i className="fa fa-close"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cloud</Tooltip>}>

                        <i className="fa fa-cloud"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cloud-download</Tooltip>}>

                        <i className="fa fa-cloud-download"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cloud-upload</Tooltip>}>

                        <i className="fa fa-cloud-upload"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cny</Tooltip>}>

                        <i className="fa fa-cny"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-code</Tooltip>}>

                        <i className="fa fa-code"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-code-fork</Tooltip>}>

                        <i className="fa fa-code-fork"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-codepen</Tooltip>}>

                        <i className="fa fa-codepen"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-codiepie</Tooltip>}>

                        <i className="fa fa-codiepie"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-coffee</Tooltip>}>

                        <i className="fa fa-coffee"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cog</Tooltip>}>

                        <i className="fa fa-cog"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cogs</Tooltip>}>

                        <i className="fa fa-cogs" ></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-columns</Tooltip>}>

                        <i className="fa fa-columns"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-comment</Tooltip>}>

                        <i className="fa fa-comment"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-comment-o</Tooltip>}>

                        <i className="fa fa-comment-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-commenting</Tooltip>}>

                        <i className="fa fa-commenting"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-commenting-o</Tooltip>}>

                        <i className="fa fa-commenting-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-comments</Tooltip>}>

                        <i className="fa fa-comments"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-comments-o</Tooltip>}>

                        <i className="fa fa-comments-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-compass</Tooltip>}>

                        <i className="fa fa-compass"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-compress</Tooltip>}>

                        <i className="fa fa-compress"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-connectdevelop</Tooltip>}>

                        <i className="fa fa-connectdevelop"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-contao</Tooltip>}>

                        <i className="fa fa-contao"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-copy</Tooltip>}>

                        <i className="fa fa-copy"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-copyright</Tooltip>}>

                        <i className="fa fa-copyright"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-creative-commons</Tooltip>}>

                        <i className="fa fa-creative-commons"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-credit-card</Tooltip>}>

                        <i className="fa fa-credit-card"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-credit-card-alt</Tooltip>}>

                        <i className="fa fa-credit-card-alt"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-crop</Tooltip>}>

                        <i className="fa fa-crop"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-crosshairs</Tooltip>}>

                        <i className="fa fa-crosshairs"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-css3"</Tooltip>}>

                        <i className="fa fa-css3"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cube"</Tooltip>}>

                        <i className="fa fa-cube"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cubes"</Tooltip>}>

                        <i className="fa fa-cubes"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cut"</Tooltip>}>

                        <i className="fa fa-cut" ></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-cutlery</Tooltip>}>

                        <i className="fa fa-cutlery"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-dashboard</Tooltip>}>

                        <i className="fa fa-dashboard"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-dashcube</Tooltip>}>

                        <i className="fa fa-dashcube"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-database</Tooltip>}>

                        <i className="fa fa-database"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-deaf</Tooltip>}>

                        <i className="fa fa-deaf"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-deafness</Tooltip>}>

                        <i className="fa fa-deafness"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-dedent</Tooltip>}>

                        <i className="fa fa-dedent"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-delicious</Tooltip>}>

                        <i className="fa fa-delicious"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-desktop</Tooltip>}>

                        <i className="fa fa-desktop"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-deviantart</Tooltip>}>

                        <i className="fa fa-deviantart"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-diamond</Tooltip>}>

                        <i className="fa fa-diamond"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-digg</Tooltip>}>

                        <i className="fa fa-digg"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-dollar</Tooltip>}>

                        <i className="fa fa-dollar"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-dot-circle-o</Tooltip>}>

                        <i className="fa fa-dot-circle-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-download</Tooltip>}>

                        <i className="fa fa-download"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-dribbble</Tooltip>}>

                        <i className="fa fa-dribbble"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-drivers-license</Tooltip>}>

                        <i className="fa fa-drivers-license"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-drivers-license-o</Tooltip>}>

                        <i className="fa fa-drivers-license-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-dropbox</Tooltip>}>

                        <i className="fa fa-dropbox"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-drupal</Tooltip>}>

                        <i className="fa fa-drupal"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-edge</Tooltip>}>

                        <i className="fa fa-edge"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-edit</Tooltip>}>

                        <i className="fa fa-edit"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-eercast</Tooltip>}>

                        <i className="fa fa-eercast"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-eject</Tooltip>}>

                        <i className="fa fa-eject"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-ellipsis-h</Tooltip>}>

                        <i className="fa fa-ellipsis-h"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-ellipsis-v</Tooltip>}>

                        <i className="fa fa-ellipsis-v"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-empire</Tooltip>}>

                        <i className="fa fa-empire"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-envelope</Tooltip>}>

                        <i className="fa fa-envelope"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-envelope-o</Tooltip>}>

                        <i className="fa fa-envelope-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-envelope-open</Tooltip>}>

                        <i className="fa fa-envelope-open"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-envelope-open-o</Tooltip>}>

                        <i className="fa fa-envelope-open-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-envelope-square</Tooltip>}>

                        <i className="fa fa-envelope-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-envira</Tooltip>}>

                        <i className="fa fa-envira" ></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-eraser</Tooltip>}>

                        <i className="fa fa-eraser"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-etsy</Tooltip>}>

                        <i className="fa fa-etsy"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-eur</Tooltip>}>

                        <i className="fa fa-eur"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-euro</Tooltip>}>

                        <i className="fa fa-euro"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-exchange</Tooltip>}>

                        <i className="fa fa-exchange"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-exclamation</Tooltip>}>

                        <i className="fa fa-exclamation"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-exclamation-circle</Tooltip>}>

                        <i className="fa fa-exclamation-circle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-exclamation-triangle</Tooltip>}>

                        <i className="fa fa-exclamation-triangle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-expand</Tooltip>}>

                        <i className="fa fa-expand"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-expeditedssl</Tooltip>}>

                        <i className="fa fa-expeditedssl"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-external-link</Tooltip>}>

                        <i className="fa fa-external-link"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-external-link-square</Tooltip>}>

                        <i className="fa fa-external-link-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-eye</Tooltip>}>

                        <i className="fa fa-eye"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-eye-slash</Tooltip>}>

                        <i className="fa fa-eye-slash"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-eyedropper</Tooltip>}>

                        <i className="fa fa-eyedropper"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-fa</Tooltip>}>

                        <i className="fa fa-fa" ></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-facebook</Tooltip>}>

                        <i className="fa fa-facebook"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-facebook-f</Tooltip>}>

                        <i className="fa fa-facebook-f"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-facebook-official</Tooltip>}>

                        <i className="fa fa-facebook-official"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-facebook-square</Tooltip>}>

                        <i className="fa fa-facebook-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-fast-backward</Tooltip>}>

                        <i className="fa fa-fast-backward"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-fast-forward</Tooltip>}>

                        <i className="fa fa-fast-forward"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-fax</Tooltip>}>

                        <i className="fa fa-fax"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-feed</Tooltip>}>

                        <i className="fa fa-feed"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-female</Tooltip>}>

                        <i className="fa fa-female"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-fighter-jet</Tooltip>}>

                        <i className="fa fa-fighter-jet"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-file</Tooltip>}>

                        <i className="fa fa-file"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-file-archive-o</Tooltip>}>

                        <i className="fa fa-file-archive-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-file-audio-o</Tooltip>}>

                        <i className="fa fa-file-audio-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-file-code-o</Tooltip>}>

                        <i className="fa fa-file-code-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-file-excel-os</Tooltip>}>

                        <i className="fa fa-file-excel-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-file-image-o</Tooltip>}>

                        <i className="fa fa-file-image-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-file-movie-o</Tooltip>}>

                        <i className="fa fa-file-movie-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-file-o</Tooltip>}>

                        <i className="fa fa-file-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-file-pdf-o</Tooltip>}>

                        <i className="fa fa-file-pdf-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-file-photo-o</Tooltip>}>

                        <i className="fa fa-file-photo-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-file-picture-o</Tooltip>}>

                        <i className="fa fa-file-picture-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-file-powerpoint-o</Tooltip>}>

                        <i className="fa fa-file-powerpoint-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-file-sound-o</Tooltip>}>

                        <i className="fa fa-file-sound-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-file-text</Tooltip>}>

                        <i className="fa fa-file-text"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-file-text-o</Tooltip>}>

                        <i className="fa fa-file-text-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-file-video-o</Tooltip>}>

                        <i className="fa fa-file-video-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-file-word-o</Tooltip>}>

                        <i className="fa fa-file-word-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-file-zip-ot</Tooltip>}>

                        <i className="fa fa-file-zip-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-files-ogg</Tooltip>}>

                        <i className="fa fa-files-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-filmggle=</Tooltip>}>

                        <i className="fa fa-film"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-filterggl</Tooltip>}>

                        <i className="fa fa-filter"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-fireggle=</Tooltip>}>

                        <i className="fa fa-fire"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-fire-extinguisher" da</Tooltip>}>

                        <i className="fa fa-fire-extinguisher"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-firefoxgg</Tooltip>}>

                        <i className="fa fa-firefox"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-first-order</Tooltip>}>

                        <i className="fa fa-first-order"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-flagggle=</Tooltip>}>

                        <i className="fa fa-flag"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-flag-checkered</Tooltip>}>

                        <i className="fa fa-flag-checkered"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-flag-oggl</Tooltip>}>

                        <i className="fa fa-flag-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-flashggle</Tooltip>}>

                        <i className="fa fa-flash"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-flask</Tooltip>}>

                        <i className="fa fa-flask"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-flickr</Tooltip>}>

                        <i className="fa fa-flickr"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-floppy-o</Tooltip>}>

                        <i className="fa fa-floppy-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-folder</Tooltip>}>

                        <i className="fa fa-folder"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-folder-og</Tooltip>}>

                        <i className="fa fa-folder-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-folder-open</Tooltip>}>

                        <i className="fa fa-folder-open"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-folder-open-ob</Tooltip>}>

                        <i className="fa fa-folder-open-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-font</Tooltip>}>

                        <i className="fa fa-font"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-font-awesome</Tooltip>}>

                        <i className="fa fa-font-awesome"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-fonticons</Tooltip>}>

                        <i className="fa fa-fonticons"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-fort-awesome</Tooltip>}>

                        <i className="fa fa-fort-awesome"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-forumbeeg</Tooltip>}>

                        <i className="fa fa-forumbee"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-forwardgg</Tooltip>}>

                        <i className="fa fa-forward"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-foursquaret</Tooltip>}>

                        <i className="fa fa-foursquare"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-free-code-camp</Tooltip>}>

                        <i className="fa fa-free-code-camp"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-frown-ogg</Tooltip>}>

                        <i className="fa fa-frown-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-futbol-og</Tooltip>}>

                        <i className="fa fa-futbol-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-gamepad</Tooltip>}>

                        <i className="fa fa-gamepad"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-gavel</Tooltip>}>

                        <i className="fa fa-gavel"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-gavel</Tooltip>}>

                        <i className="fa fa-gavel"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-gbp</Tooltip>}>

                        <i className="fa fa-gbp"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-ge</Tooltip>}>

                        <i className="fa fa-ge"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-gear</Tooltip>}>

                        <i className="fa fa-gear"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-genderless</Tooltip>}>

                        <i className="fa fa-genderless"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-get-pocket</Tooltip>}>

                        <i className="fa fa-get-pocket"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-gg</Tooltip>}>

                        <i className="fa fa-gg"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-gg-circle</Tooltip>}>

                        <i className="fa fa-gg-circle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-gift</Tooltip>}>

                        <i className="fa fa-gift"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-git</Tooltip>}>

                        <i className="fa fa-git"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-git-square</Tooltip>}>

                        <i className="fa fa-git-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-github</Tooltip>}>

                        <i className="fa fa-github"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-github-altt</Tooltip>}>

                        <i className="fa fa-github-alt"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-github-squareb</Tooltip>}>

                        <i className="fa fa-github-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-gitlab</Tooltip>}>

                        <i className="fa fa-gitlab"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-gittip</Tooltip>}>

                        <i className="fa fa-gittip"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-glass</Tooltip>}>

                        <i className="fa fa-glass"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-glide</Tooltip>}>

                        <i className="fa fa-glide"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-glide-g</Tooltip>}>

                        <i className="fa fa-glide-g"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-globe</Tooltip>}>

                        <i className="fa fa-globe"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-google</Tooltip>}>

                        <i className="fa fa-google"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-google-plus</Tooltip>}>

                        <i className="fa fa-google-plus"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-google-plus-circle" d</Tooltip>}>

                        <i className="fa fa-google-plus-circle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-google-plus-official"</Tooltip>}>

                        <i className="fa fa-google-plus-official"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-google-plus-square" d</Tooltip>}>

                        <i className="fa fa-google-plus-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-google-wallet</Tooltip>}>

                        <i className="fa fa-google-wallet"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-graduation-cap</Tooltip>}>

                        <i className="fa fa-graduation-cap"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-gratipayg</Tooltip>}>

                        <i className="fa fa-gratipay"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-grav</Tooltip>}>

                        <i className="fa fa-grav"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-group</Tooltip>}>

                        <i className="fa fa-group"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-h-squareg</Tooltip>}>

                        <i className="fa fa-h-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hacker-news</Tooltip>}>

                        <i className="fa fa-hacker-news"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hand-grab-o</Tooltip>}>

                        <i className="fa fa-hand-grab-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hand-lizard-ob</Tooltip>}>

                        <i className="fa fa-hand-lizard-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hand-o-down</Tooltip>}>

                        <i className="fa fa-hand-o-down"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hand-o-left</Tooltip>}>

                        <i className="fa fa-hand-o-left"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hand-o-right</Tooltip>}>

                        <i className="fa fa-hand-o-right"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hand-o-up</Tooltip>}>

                        <i className="fa fa-hand-o-up"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hand-paper-o</Tooltip>}>

                        <i className="fa fa-hand-paper-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hand-peace-o</Tooltip>}>

                        <i className="fa fa-hand-peace-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hand-pointer-o</Tooltip>}>

                        <i className="fa fa-hand-pointer-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hand-rock-o</Tooltip>}>

                        <i className="fa fa-hand-rock-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hand-scissors-o" data</Tooltip>}>

                        <i className="fa fa-hand-scissors-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hand-spock-o</Tooltip>}>

                        <i className="fa fa-hand-spock-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hand-stop-o</Tooltip>}>

                        <i className="fa fa-hand-stop-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-handshake-o</Tooltip>}>

                        <i className="fa fa-handshake-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hard-of-hearing" data</Tooltip>}>

                        <i className="fa fa-hard-of-hearing"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hashtaggg</Tooltip>}>

                        <i className="fa fa-hashtag"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hdd-o</Tooltip>}>

                        <i className="fa fa-hdd-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-header</Tooltip>}>

                        <i className="fa fa-header"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-headphonest</Tooltip>}>

                        <i className="fa fa-headphones"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-heart</Tooltip>}>

                        <i className="fa fa-heart"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-heart-ogg</Tooltip>}>

                        <i className="fa fa-heart-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-heartbeat</Tooltip>}>

                        <i className="fa fa-heartbeat"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-historygg</Tooltip>}>

                        <i className="fa fa-history"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-home</Tooltip>}>

                        <i className="fa fa-home"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hospital-ot</Tooltip>}>

                        <i className="fa fa-hospital-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hotel</Tooltip>}>

                        <i className="fa fa-hotel"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hourglass</Tooltip>}>

                        <i className="fa fa-hourglass"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hourglass-1</Tooltip>}>

                        <i className="fa fa-hourglass-1"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hourglass-2</Tooltip>}>

                        <i className="fa fa-hourglass-2"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hourglass-3</Tooltip>}>

                        <i className="fa fa-hourglass-3"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hourglass-endb</Tooltip>}>

                        <i className="fa fa-hourglass-end"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hourglass-half</Tooltip>}>

                        <i className="fa fa-hourglass-half"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hourglass-o</Tooltip>}>

                        <i className="fa fa-hourglass-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-hourglass-start" data</Tooltip>}>

                        <i className="fa fa-hourglass-start"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-houzz</Tooltip>}>

                        <i className="fa fa-houzz"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-html5</Tooltip>}>

                        <i className="fa fa-html5"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-i-cursorg</Tooltip>}>

                        <i className="fa fa-i-cursor"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-id-badgeg</Tooltip>}>

                        <i className="fa fa-id-badge"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-id-cardgg</Tooltip>}>

                        <i className="fa fa-id-card"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-id-card-o</Tooltip>}>

                        <i className="fa fa-id-card-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-ilsggle="</Tooltip>}>

                        <i className="fa fa-ils"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-imageggle</Tooltip>}>

                        <i className="fa fa-image"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-imdbggle=</Tooltip>}>

                        <i className="fa fa-imdb"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-inboxggle</Tooltip>}>

                        <i className="fa fa-inbox"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-indentggl</Tooltip>}>

                        <i className="fa fa-indent"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-industryg</Tooltip>}>

                        <i className="fa fa-industry"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-infoggle</Tooltip>}>

                        <i className="fa fa-info"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-info-circle</Tooltip>}>

                        <i className="fa fa-info-circle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-inrggle</Tooltip>}>

                        <i className="fa fa-inr"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-instagram</Tooltip>}>

                        <i className="fa fa-instagram"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-institution</Tooltip>}>

                        <i className="fa fa-institution"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-internet-explorer" da</Tooltip>}>

                        <i className="fa fa-internet-explorer"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-intersexg</Tooltip>}>

                        <i className="fa fa-intersex"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-ioxhostgg</Tooltip>}>

                        <i className="fa fa-ioxhost"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-italicggl</Tooltip>}>

                        <i className="fa fa-italic"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-joomlaggl</Tooltip>}>

                        <i className="fa fa-joomla"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-jpyggle="</Tooltip>}>

                        <i className="fa fa-jpy"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-jsfiddleg</Tooltip>}>

                        <i className="fa fa-jsfiddle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-keyggle="</Tooltip>}>

                        <i className="fa fa-key"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-keyboard-ot</Tooltip>}>

                        <i className="fa fa-keyboard-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-krwggle="</Tooltip>}>

                        <i className="fa fa-krw"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-languageg</Tooltip>}>

                        <i className="fa fa-language"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-laptopggl</Tooltip>}>

                        <i className="fa fa-laptop"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-lastfmggl</Tooltip>}>

                        <i className="fa fa-lastfm"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-lastfm-squareb</Tooltip>}>

                        <i className="fa fa-lastfm-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-legalggle</Tooltip>}>

                        <i className="fa fa-legal"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-lemon-ogg</Tooltip>}>

                        <i className="fa fa-lemon-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-level-downt</Tooltip>}>

                        <i className="fa fa-level-down"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-level-upg</Tooltip>}>

                        <i className="fa fa-level-up"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-life-bouy</Tooltip>}>

                        <i className="fa fa-life-bouy"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-life-buoy</Tooltip>}>

                        <i className="fa fa-life-buoy"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-life-ring</Tooltip>}>

                        <i className="fa fa-life-ring"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-life-savert</Tooltip>}>

                        <i className="fa fa-life-saver"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-lightbulb-o</Tooltip>}>

                        <i className="fa fa-lightbulb-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-line-chartt</Tooltip>}>

                        <i className="fa fa-line-chart"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-linkggle=</Tooltip>}>

                        <i className="fa fa-link"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-linkeding</Tooltip>}>

                        <i className="fa fa-linkedin"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-linkedin-square" data</Tooltip>}>

                        <i className="fa fa-linkedin-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-linodeggl</Tooltip>}>

                        <i className="fa fa-linode"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-linuxggle</Tooltip>}>

                        <i className="fa fa-linux"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-listggle=</Tooltip>}>

                        <i className="fa fa-list"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-list-altg</Tooltip>}>

                        <i className="fa fa-list-alt"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-list-olgg</Tooltip>}>

                        <i className="fa fa-list-ol"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-list-ulgg</Tooltip>}>

                        <i className="fa fa-list-ul"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-location-arrow</Tooltip>}>

                        <i className="fa fa-location-arrow"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-lockggle=</Tooltip>}>

                        <i className="fa fa-lock"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-long-arrow-down" data</Tooltip>}>

                        <i className="fa fa-long-arrow-down"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-long-arrow-left" data</Tooltip>}>

                        <i className="fa fa-long-arrow-left"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-long-arrow-right" dat</Tooltip>}>

                        <i className="fa fa-long-arrow-right"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-long-arrow-upb</Tooltip>}>

                        <i className="fa fa-long-arrow-up"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-low-visiont</Tooltip>}>

                        <i className="fa fa-low-vision"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-magicggle</Tooltip>}>

                        <i className="fa fa-magic"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-magnetggl</Tooltip>}>

                        <i className="fa fa-magnet"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-mail-forward</Tooltip>}>

                        <i className="fa fa-mail-forward"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-mail-replyt</Tooltip>}>

                        <i className="fa fa-mail-reply"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-mail-reply-all</Tooltip>}>

                        <i className="fa fa-mail-reply-all"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-maleggle=</Tooltip>}>

                        <i className="fa fa-male"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-mapggle="</Tooltip>}>

                        <i className="fa fa-map"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-map-markert</Tooltip>}>

                        <i className="fa fa-map-marker"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-map-oggle</Tooltip>}>

                        <i className="fa fa-map-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-map-pingg</Tooltip>}>

                        <i className="fa fa-map-pin"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-map-signs</Tooltip>}>

                        <i className="fa fa-map-signs"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-marsggle=</Tooltip>}>

                        <i className="fa fa-mars"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-mars-double</Tooltip>}>

                        <i className="fa fa-mars-double"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-mars-stroke</Tooltip>}>

                        <i className="fa fa-mars-stroke"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-mars-stroke-hb</Tooltip>}>

                        <i className="fa fa-mars-stroke-h"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-mars-stroke-vb</Tooltip>}>

                        <i className="fa fa-mars-stroke-v"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-maxcdnggl</Tooltip>}>

                        <i className="fa fa-maxcdn"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-meanpathg</Tooltip>}>

                        <i className="fa fa-meanpath"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-mediumggl</Tooltip>}>

                        <i className="fa fa-medium"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-medkitggl</Tooltip>}>

                        <i className="fa fa-medkit"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-meetupggl</Tooltip>}>

                        <i className="fa fa-meetup"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-meh-oggle</Tooltip>}>

                        <i className="fa fa-meh-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-mercurygg</Tooltip>}>

                        <i className="fa fa-mercury"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-microchip</Tooltip>}>

                        <i className="fa fa-microchip"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-microphonet</Tooltip>}>

                        <i className="fa fa-microphone"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-microphone-slash" dat</Tooltip>}>

                        <i className="fa fa-microphone-slash"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-minusggle</Tooltip>}>

                        <i className="fa fa-minus"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-minus-circle</Tooltip>}>

                        <i className="fa fa-minus-circle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-minus-square</Tooltip>}>

                        <i className="fa fa-minus-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-minus-square-o</Tooltip>}>

                        <i className="fa fa-minus-square-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-mixcloudg</Tooltip>}>

                        <i className="fa fa-mixcloud"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-mobileggl</Tooltip>}>

                        <i className="fa fa-mobile"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-mobile-phone</Tooltip>}>

                        <i className="fa fa-mobile-phone"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-modxggle=</Tooltip>}>

                        <i className="fa fa-modx"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-moneyggle</Tooltip>}>

                        <i className="fa fa-money"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-moon-oggl</Tooltip>}>

                        <i className="fa fa-moon-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-mortar-board</Tooltip>}>

                        <i className="fa fa-mortar-board"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-motorcyclet</Tooltip>}>

                        <i className="fa fa-motorcycle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-mouse-pointerb</Tooltip>}>

                        <i className="fa fa-mouse-pointer"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-musicggle</Tooltip>}>

                        <i className="fa fa-music"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-navicongg</Tooltip>}>

                        <i className="fa fa-navicon"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-neuterggl</Tooltip>}>

                        <i className="fa fa-neuter"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-newspaper-o</Tooltip>}>

                        <i className="fa fa-newspaper-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-object-group</Tooltip>}>

                        <i className="fa fa-object-group"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-object-ungroup</Tooltip>}>

                        <i className="fa fa-object-ungroup"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-odnoklassnikib</Tooltip>}>

                        <i className="fa fa-odnoklassniki"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-odnoklassniki-square"</Tooltip>}>

                        <i className="fa fa-odnoklassniki-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-opencartg</Tooltip>}>

                        <i className="fa fa-opencart"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-openidggl</Tooltip>}>

                        <i className="fa fa-openid"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-operaggle</Tooltip>}>

                        <i className="fa fa-opera"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-optin-monsterb</Tooltip>}>

                        <i className="fa fa-optin-monster"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-outdentgg</Tooltip>}>

                        <i className="fa fa-outdent"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-pagelines</Tooltip>}>

                        <i className="fa fa-pagelines"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-paint-brush</Tooltip>}>

                        <i className="fa fa-paint-brush"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-paper-plane</Tooltip>}>

                        <i className="fa fa-paper-plane"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-paper-plane-ob</Tooltip>}>

                        <i className="fa fa-paper-plane-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-paperclip</Tooltip>}>

                        <i className="fa fa-paperclip"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-paragraph</Tooltip>}>

                        <i className="fa fa-paragraph"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-pasteggle</Tooltip>}>

                        <i className="fa fa-paste"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-pauseggle</Tooltip>}>

                        <i className="fa fa-pause"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-pause-circle</Tooltip>}>

                        <i className="fa fa-pause-circle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-pause-circle-o</Tooltip>}>

                        <i className="fa fa-pause-circle-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-pawggle="</Tooltip>}>

                        <i className="fa fa-paw"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-paypalggl</Tooltip>}>

                        <i className="fa fa-paypal"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-pencilggl</Tooltip>}>

                        <i className="fa fa-pencil"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-pencil-squareb</Tooltip>}>

                        <i className="fa fa-pencil-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-pencil-square-o" data</Tooltip>}>

                        <i className="fa fa-pencil-square-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-percentgg</Tooltip>}>

                        <i className="fa fa-percent"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-phoneggle</Tooltip>}>

                        <i className="fa fa-phone"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-phone-square</Tooltip>}>

                        <i className="fa fa-phone-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-photoggle</Tooltip>}>

                        <i className="fa fa-photo"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-picture-o</Tooltip>}>

                        <i className="fa fa-picture-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-pie-chart</Tooltip>}>

                        <i className="fa fa-pie-chart"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-pied-pipert</Tooltip>}>

                        <i className="fa fa-pied-piper"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-pied-piper-alt</Tooltip>}>

                        <i className="fa fa-pied-piper-alt"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-pied-piper-ppb</Tooltip>}>

                        <i className="fa fa-pied-piper-pp"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-pinterest</Tooltip>}>

                        <i className="fa fa-pinterest"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-pinterest-p</Tooltip>}>

                        <i className="fa fa-pinterest-p"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-pinterest-square" dat</Tooltip>}>

                        <i className="fa fa-pinterest-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-planeggle</Tooltip>}>

                        <i className="fa fa-plane"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-playggle=</Tooltip>}>

                        <i className="fa fa-play"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-play-circle</Tooltip>}>

                        <i className="fa fa-play-circle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-play-circle-ob</Tooltip>}>

                        <i className="fa fa-play-circle-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-plugggle=</Tooltip>}>

                        <i className="fa fa-plug"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-plusggle=</Tooltip>}>

                        <i className="fa fa-plus"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-plus-circle</Tooltip>}>

                        <i className="fa fa-plus-circle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-plus-square</Tooltip>}>

                        <i className="fa fa-plus-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-plus-square-ob</Tooltip>}>

                        <i className="fa fa-plus-square-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-podcastgg</Tooltip>}>

                        <i className="fa fa-podcast"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-power-off</Tooltip>}>

                        <i className="fa fa-power-off"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-printggle</Tooltip>}>

                        <i className="fa fa-print"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-product-hunt</Tooltip>}>

                        <i className="fa fa-product-hunt"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-puzzle-piece</Tooltip>}>

                        <i className="fa fa-puzzle-piece"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-qqggle="t</Tooltip>}>

                        <i className="fa fa-qq" ></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-qrcodeggl</Tooltip>}>

                        <i className="fa fa-qrcode"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-questiong</Tooltip>}>

                        <i className="fa fa-question"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-question-circle" data</Tooltip>}>

                        <i className="fa fa-question-circle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-question-circle-o" da</Tooltip>}>

                        <i className="fa fa-question-circle-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-quoraggle</Tooltip>}>

                        <i className="fa fa-quora"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-quote-leftt</Tooltip>}>

                        <i className="fa fa-quote-left"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-quote-right</Tooltip>}>

                        <i className="fa fa-quote-right"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-raggle="t</Tooltip>}>

                        <i className="fa fa-ra" ></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-randomggl</Tooltip>}>

                        <i className="fa fa-random"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-ravelrygg</Tooltip>}>

                        <i className="fa fa-ravelry"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-rebelggle</Tooltip>}>

                        <i className="fa fa-rebel"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-recyclegg</Tooltip>}>

                        <i className="fa fa-recycle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-redditggl</Tooltip>}>

                        <i className="fa fa-reddit"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-reddit-alien</Tooltip>}>

                        <i className="fa fa-reddit-alien"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-reddit-squareb</Tooltip>}>

                        <i className="fa fa-reddit-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-refreshgg</Tooltip>}>

                        <i className="fa fa-refresh"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-registeredt</Tooltip>}>

                        <i className="fa fa-registered"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-removeggl</Tooltip>}>

                        <i className="fa fa-remove"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-renrenggl</Tooltip>}>

                        <i className="fa fa-renren"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-reordergg</Tooltip>}>

                        <i className="fa fa-reorder"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-repeatggl</Tooltip>}>

                        <i className="fa fa-repeat"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-replyggle</Tooltip>}>

                        <i className="fa fa-reply"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-reply-all</Tooltip>}>

                        <i className="fa fa-reply-all"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-resistancet</Tooltip>}>

                        <i className="fa fa-resistance"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-retweetgg</Tooltip>}>

                        <i className="fa fa-retweet"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-rmbggle="</Tooltip>}>

                        <i className="fa fa-rmb"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-roadggle=</Tooltip>}>

                        <i className="fa fa-road"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-rocketggl</Tooltip>}>

                        <i className="fa fa-rocket"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-rotate-left</Tooltip>}>

                        <i className="fa fa-rotate-left"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-rotate-right</Tooltip>}>

                        <i className="fa fa-rotate-right"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-roubleggl</Tooltip>}>

                        <i className="fa fa-rouble"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-rssggle="</Tooltip>}>

                        <i className="fa fa-rss"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-rss-squaret</Tooltip>}>

                        <i className="fa fa-rss-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-rubggle="</Tooltip>}>

                        <i className="fa fa-rub"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-rubleggle</Tooltip>}>

                        <i className="fa fa-ruble"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-rupeeggle</Tooltip>}>

                        <i className="fa fa-rupee"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-s15ggle="</Tooltip>}>

                        <i className="fa fa-s15"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-safariggl</Tooltip>}>

                        <i className="fa fa-safari"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-saveggle=</Tooltip>}>

                        <i className="fa fa-save"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-scissorsg</Tooltip>}>

                        <i className="fa fa-scissors"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-scribdggl</Tooltip>}>

                        <i className="fa fa-scribd"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-searchggl</Tooltip>}>

                        <i className="fa fa-search"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-search-minus</Tooltip>}>

                        <i className="fa fa-search-minus"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-search-plus</Tooltip>}>

                        <i className="fa fa-search-plus"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sellsyggl</Tooltip>}>

                        <i className="fa fa-sellsy"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sendggle=</Tooltip>}>

                        <i className="fa fa-send"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-send-oggl</Tooltip>}>

                        <i className="fa fa-send-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-serverggl</Tooltip>}>

                        <i className="fa fa-server"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-shareggle</Tooltip>}>

                        <i className="fa fa-share"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-share-alt</Tooltip>}>

                        <i className="fa fa-share-alt"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-share-alt-square" dat</Tooltip>}>

                        <i className="fa fa-share-alt-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-share-square</Tooltip>}>

                        <i className="fa fa-share-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-share-square-o</Tooltip>}>

                        <i className="fa fa-share-square-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-shekelggl</Tooltip>}>

                        <i className="fa fa-shekel"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sheqelggl</Tooltip>}>

                        <i className="fa fa-sheqel"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-shieldggl</Tooltip>}>

                        <i className="fa fa-shield"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-shipggle=</Tooltip>}>

                        <i className="fa fa-ship"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-shirtsinbulk</Tooltip>}>

                        <i className="fa fa-shirtsinbulk"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-shopping-bag</Tooltip>}>

                        <i className="fa fa-shopping-bag"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-shopping-basket" data</Tooltip>}>

                        <i className="fa fa-shopping-basket"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-shopping-cartb</Tooltip>}>

                        <i className="fa fa-shopping-cart"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-showerggl</Tooltip>}>

                        <i className="fa fa-shower"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sign-ingg</Tooltip>}>

                        <i className="fa fa-sign-in"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sign-languageb</Tooltip>}>

                        <i className="fa fa-sign-language"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sign-outg</Tooltip>}>

                        <i className="fa fa-sign-out"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-signal</Tooltip>}>

                        <i className="fa fa-signal"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-signing</Tooltip>}>

                        <i className="fa fa-signing"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-simplybuilt</Tooltip>}>

                        <i className="fa fa-simplybuilt"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sitemap</Tooltip>}>

                        <i className="fa fa-sitemap"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-skyatlas</Tooltip>}>

                        <i className="fa fa-skyatlas"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-skype</Tooltip>}>

                        <i className="fa fa-skype"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-slack</Tooltip>}>

                        <i className="fa fa-slack"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sliders</Tooltip>}>

                        <i className="fa fa-sliders"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-slideshare</Tooltip>}>

                        <i className="fa fa-slideshare"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-smile-o</Tooltip>}>

                        <i className="fa fa-smile-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-snapchat</Tooltip>}>

                        <i className="fa fa-snapchat"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-snapchat-ghost</Tooltip>}>

                        <i className="fa fa-snapchat-ghost"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-snapchat-square</Tooltip>}>

                        <i className="fa fa-snapchat-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-snowflake-o</Tooltip>}>

                        <i className="fa fa-snowflake-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-soccer-ball-o</Tooltip>}>

                        <i className="fa fa-soccer-ball-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sort</Tooltip>}>

                        <i className="fa fa-sort"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sort-alpha-asc</Tooltip>}>

                        <i className="fa fa-sort-alpha-asc"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sort-alpha-desc</Tooltip>}>

                        <i className="fa fa-sort-alpha-desc"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sort-amount-asc</Tooltip>}>

                        <i className="fa fa-sort-amount-asc"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sort-amount-desc</Tooltip>}>

                        <i className="fa fa-sort-amount-desc"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sort-asc</Tooltip>}>

                        <i className="fa fa-sort-asc"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sort-desc</Tooltip>}>

                        <i className="fa fa-sort-desc"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sort-down</Tooltip>}>

                        <i className="fa fa-sort-down"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sort-numeric-asc</Tooltip>}>

                        <i className="fa fa-sort-numeric-asc"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sort-numeric-desc</Tooltip>}>

                        <i className="fa fa-sort-numeric-desc"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sort-up</Tooltip>}>

                        <i className="fa fa-sort-up"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-soundcloud</Tooltip>}>

                        <i className="fa fa-soundcloud"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-space-shuttle</Tooltip>}>

                        <i className="fa fa-space-shuttle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-spinner</Tooltip>}>

                        <i className="fa fa-spinner"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-spoon</Tooltip>}>

                        <i className="fa fa-spoon"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-spotify</Tooltip>}>

                        <i className="fa fa-spotify"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-square</Tooltip>}>

                        <i className="fa fa-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-square-o</Tooltip>}>

                        <i className="fa fa-square-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-stack-exchange</Tooltip>}>

                        <i className="fa fa-stack-exchange"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-stack-overflow</Tooltip>}>

                        <i className="fa fa-stack-overflow"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-star</Tooltip>}>

                        <i className="fa fa-star"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-star-half</Tooltip>}>

                        <i className="fa fa-star-half"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-star-half-empty</Tooltip>}>

                        <i className="fa fa-star-half-empty"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-star-half-full</Tooltip>}>

                        <i className="fa fa-star-half-full"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-star-half-o</Tooltip>}>

                        <i className="fa fa-star-half-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-star-o</Tooltip>}>

                        <i className="fa fa-star-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-steam</Tooltip>}>

                        <i className="fa fa-steam"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-steam-square</Tooltip>}>

                        <i className="fa fa-steam-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-step-backward</Tooltip>}>

                        <i className="fa fa-step-backward"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-step-forward</Tooltip>}>

                        <i className="fa fa-step-forward"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-stethoscope</Tooltip>}>

                        <i className="fa fa-stethoscope"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sticky-note</Tooltip>}>

                        <i className="fa fa-sticky-note"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sticky-note-o</Tooltip>}>

                        <i className="fa fa-sticky-note-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-stop</Tooltip>}>

                        <i className="fa fa-stop"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-stop-circle</Tooltip>}>

                        <i className="fa fa-stop-circle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-stop-circle-o</Tooltip>}>

                        <i className="fa fa-stop-circle-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-street-view</Tooltip>}>

                        <i className="fa fa-street-view"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-strikethrough</Tooltip>}>

                        <i className="fa fa-strikethrough"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-stumbleupon</Tooltip>}>

                        <i className="fa fa-stumbleupon"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-stumbleupon-circle</Tooltip>}>

                        <i className="fa fa-stumbleupon-circle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-subscript</Tooltip>}>

                        <i className="fa fa-subscript"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-subway</Tooltip>}>

                        <i className="fa fa-subway"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-suitcase</Tooltip>}>

                        <i className="fa fa-suitcase"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-sun-o</Tooltip>}>

                        <i className="fa fa-sun-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-superpowers</Tooltip>}>

                        <i className="fa fa-superpowers"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-superscript</Tooltip>}>

                        <i className="fa fa-superscript"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-support</Tooltip>}>

                        <i className="fa fa-support"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-table</Tooltip>}>

                        <i className="fa fa-table"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-tablet</Tooltip>}>

                        <i className="fa fa-tablet"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-tachometer</Tooltip>}>

                        <i className="fa fa-tachometer"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-tag</Tooltip>}>

                        <i className="fa fa-tag"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-tags</Tooltip>}>

                        <i className="fa fa-tags"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-tasks</Tooltip>}>

                        <i className="fa fa-tasks"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-taxi</Tooltip>}>

                        <i className="fa fa-taxi"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-telegram</Tooltip>}>

                        <i className="fa fa-telegram"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-television</Tooltip>}>

                        <i className="fa fa-television"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-tencent-weibo</Tooltip>}>

                        <i className="fa fa-tencent-weibo"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-terminal</Tooltip>}>

                        <i className="fa fa-terminal"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-text-height</Tooltip>}>

                        <i className="fa fa-text-height"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-text-width</Tooltip>}>

                        <i className="fa fa-text-width"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-th</Tooltip>}>

                        <i className="fa fa-th"  ></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-th-large</Tooltip>}>

                        <i className="fa fa-th-large"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-th-list</Tooltip>}>

                        <i className="fa fa-th-list"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-themeisle</Tooltip>}>

                        <i className="fa fa-themeisle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-thermometer</Tooltip>}>

                        <i className="fa fa-thermometer"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-thermometer-0</Tooltip>}>

                        <i className="fa fa-thermometer-0"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-thermometer-1</Tooltip>}>

                        <i className="fa fa-thermometer-1"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-thermometer-2"</Tooltip>}>

                        <i className="fa fa-thermometer-2"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-thermometer-3"</Tooltip>}>

                        <i className="fa fa-thermometer-3"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-thermometer-4</Tooltip>}>

                        <i className="fa fa-thermometer-4"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-thermometer-empty</Tooltip>}>

                        <i className="fa fa-thermometer-empty"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-thermometer-full</Tooltip>}>

                        <i className="fa fa-thermometer-full"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-thermometer-half</Tooltip>}>

                        <i className="fa fa-thermometer-half"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-thermometer-quarter</Tooltip>}>

                        <i className="fa fa-thermometer-quarter"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-thermometer-three-quarters</Tooltip>}>

                        <i className="fa fa-thermometer-three-quarters"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-thumb-tack</Tooltip>}>

                        <i className="fa fa-thumb-tack"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-thumbs-down</Tooltip>}>

                        <i className="fa fa-thumbs-down"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-thumbs-o-down</Tooltip>}>

                        <i className="fa fa-thumbs-o-down"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-thumbs-o-up</Tooltip>}>

                        <i className="fa fa-thumbs-o-up"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-thumbs-up</Tooltip>}>

                        <i className="fa fa-thumbs-up"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-ticket</Tooltip>}>

                        <i className="fa fa-ticket"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-times</Tooltip>}>

                        <i className="fa fa-times"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-times-circle</Tooltip>}>

                        <i className="fa fa-times-circle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-times-circle-o</Tooltip>}>

                        <i className="fa fa-times-circle-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-times-rectangle</Tooltip>}>

                        <i className="fa fa-times-rectangle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-times-rectangle-o</Tooltip>}>

                        <i className="fa fa-times-rectangle-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-tint</Tooltip>}>

                        <i className="fa fa-tint"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-toggle-down</Tooltip>}>

                        <i className="fa fa-toggle-down"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-toggle-left</Tooltip>}>

                        <i className="fa fa-toggle-left"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-toggle-off</Tooltip>}>

                        <i className="fa fa-toggle-off"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-toggle-on</Tooltip>}>

                        <i className="fa fa-toggle-on"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-toggle-right</Tooltip>}>

                        <i className="fa fa-toggle-right"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-toggle-up</Tooltip>}>

                        <i className="fa fa-toggle-up"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-trademark</Tooltip>}>

                        <i className="fa fa-trademark"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-train</Tooltip>}>

                        <i className="fa fa-train"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-transgender</Tooltip>}>

                        <i className="fa fa-transgender"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-transgender-alt</Tooltip>}>

                        <i className="fa fa-transgender-alt"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-trash</Tooltip>}>

                        <i className="fa fa-trash"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-trash-o</Tooltip>}>

                        <i className="fa fa-trash-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-tree</Tooltip>}>

                        <i className="fa fa-tree"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-trello</Tooltip>}>

                        <i className="fa fa-trello"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-tripadvisor</Tooltip>}>

                        <i className="fa fa-tripadvisor"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-trophy</Tooltip>}>

                        <i className="fa fa-trophy"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-truck</Tooltip>}>

                        <i className="fa fa-truck"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-try</Tooltip>}>

                        <i className="fa fa-try"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-tty</Tooltip>}>

                        <i className="fa fa-tty"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-tumblr</Tooltip>}>

                        <i className="fa fa-tumblr"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-tumblr-square</Tooltip>}>

                        <i className="fa fa-tumblr-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-turkish-lira</Tooltip>}>

                        <i className="fa fa-turkish-lira"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-tv</Tooltip>}>

                        <i className="fa fa-tv"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-twitch</Tooltip>}>

                        <i className="fa fa-twitch"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-twitter</Tooltip>}>

                        <i className="fa fa-twitter"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-twitter-square</Tooltip>}>

                        <i className="fa fa-twitter-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-umbrella</Tooltip>}>

                        <i className="fa fa-umbrella"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-underline</Tooltip>}>

                        <i className="fa fa-underline"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-undo</Tooltip>}>

                        <i className="fa fa-undo"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-universal-access</Tooltip>}>

                        <i className="fa fa-universal-access"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-university</Tooltip>}>

                        <i className="fa fa-university"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-unlink</Tooltip>}>

                        <i className="fa fa-unlink"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-unlock</Tooltip>}>

                        <i className="fa fa-unlock"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-unlock-alt</Tooltip>}>

                        <i className="fa fa-unlock-alt"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-unsorted</Tooltip>}>

                        <i className="fa fa-unsorted"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-upload</Tooltip>}>

                        <i className="fa fa-upload"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-usb</Tooltip>}>

                        <i className="fa fa-usb"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-usd</Tooltip>}>

                        <i className="fa fa-usd"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-user</Tooltip>}>

                        <i className="fa fa-user"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-user-circle</Tooltip>}>

                        <i className="fa fa-user-circle"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-user-circle-o</Tooltip>}>

                        <i className="fa fa-user-circle-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-user-md</Tooltip>}>

                        <i className="fa fa-user-md"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-user-o</Tooltip>}>

                        <i className="fa fa-user-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-user-plus</Tooltip>}>

                        <i className="fa fa-user-plus"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-user-secret</Tooltip>}>

                        <i className="fa fa-user-secret"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-user-times</Tooltip>}>

                        <i className="fa fa-user-times"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-users</Tooltip>}>

                        <i className="fa fa-users"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-vcard</Tooltip>}>

                        <i className="fa fa-vcard"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-vcard-o</Tooltip>}>

                        <i className="fa fa-vcard-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-venus</Tooltip>}>

                        <i className="fa fa-venus"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-venus-double</Tooltip>}>

                        <i className="fa fa-venus-double"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-venus-mars</Tooltip>}>

                        <i className="fa fa-venus-mars"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-viacoin</Tooltip>}>

                        <i className="fa fa-viacoin"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-viadeoggl</Tooltip>}>

                        <i className="fa fa-viadeo"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-viadeo-square</Tooltip>}>

                        <i className="fa fa-viadeo-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-video-camera</Tooltip>}>

                        <i className="fa fa-video-camera"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-vimeo</Tooltip>}>

                        <i className="fa fa-vimeo"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-vimeo-square</Tooltip>}>

                        <i className="fa fa-vimeo-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-vine</Tooltip>}>

                        <i className="fa fa-vine"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-vk</Tooltip>}>

                        <i className="fa fa-vk"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-volume-control-phone</Tooltip>}>

                        <i className="fa fa-volume-control-phone"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-volume-down</Tooltip>}>

                        <i className="fa fa-volume-down"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-volume-off</Tooltip>}>

                        <i className="fa fa-volume-off"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-volume-up</Tooltip>}>

                        <i className="fa fa-volume-up"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-warning</Tooltip>}>

                        <i className="fa fa-warning"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-wechat</Tooltip>}>

                        <i className="fa fa-wechat"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-weibo</Tooltip>}>

                        <i className="fa fa-weibo"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-weixin</Tooltip>}>

                        <i className="fa fa-weixin"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-whatsapp</Tooltip>}>

                        <i className="fa fa-whatsapp"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-wheelchair</Tooltip>}>

                        <i className="fa fa-wheelchair"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-wheelchair-alt</Tooltip>}>

                        <i className="fa fa-wheelchair-alt"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-wifi</Tooltip>}>

                        <i className="fa fa-wifi"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-wikipedia-w</Tooltip>}>

                        <i className="fa fa-wikipedia-w"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-window-close</Tooltip>}>

                        <i className="fa fa-window-close"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-window-close-o</Tooltip>}>

                        <i className="fa fa-window-close-o"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-window-maximize</Tooltip>}>

                        <i className="fa fa-window-maximize"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-window-minimize</Tooltip>}>

                        <i className="fa fa-window-minimize"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-window-restore</Tooltip>}>

                        <i className="fa fa-window-restore"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-windows</Tooltip>}>

                        <i className="fa fa-windows"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-won</Tooltip>}>

                        <i className="fa fa-won"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-wordpress</Tooltip>}>

                        <i className="fa fa-wordpress"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-wpbeginner</Tooltip>}>

                        <i className="fa fa-wpbeginner"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-wpexplorer</Tooltip>}>

                        <i className="fa fa-wpexplorer"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-wpformsg</Tooltip>}>

                        <i className="fa fa-wpforms"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-wrench</Tooltip>}>

                        <i className="fa fa-wrench"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-xing</Tooltip>}>

                        <i className="fa fa-xing"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-xing-square</Tooltip>}>

                        <i className="fa fa-xing-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-y-combinator</Tooltip>}>

                        <i className="fa fa-y-combinator"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-y-combinator-square</Tooltip>}>

                        <i className="fa fa-y-combinator-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-yahoo</Tooltip>}>

                        <i className="fa fa-yahoo"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-yc</Tooltip>}>

                        <i className="fa fa-yc"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-yc-square</Tooltip>}>

                        <i className="fa fa-yc-square"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-yelp</Tooltip>}>

                        <i className="fa fa-yelp"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-yen</Tooltip>}>

                        <i className="fa fa-yen"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-yoast</Tooltip>}>

                        <i className="fa fa-yoast"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-youtube</Tooltip>}>

                        <i className="fa fa-youtube"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-youtube-play</Tooltip>}>

                        <i className="fa fa-youtube-play"></i>
                      </OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>fa fa-youtube-square</Tooltip>}>

                        <i className="fa fa-youtube-square"></i>
                      </OverlayTrigger></li>
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

export default FontAwesome;

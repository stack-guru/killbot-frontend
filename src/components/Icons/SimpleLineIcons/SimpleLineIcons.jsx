import React from 'react';
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './SimpleLineIcons.module.scss';

const SimpleLineIcons = () => {
  return (
  <div className={styles.SimpleLineIcons}>
    <PageHeader titles="Simpleline Icons" active="Simpleline Icons" items={['Icons']} />
    {/* <!-- ROW OPEN --> */}
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Simpleline Icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={12} sm={12}>
                <p>Simply beautiful open source icons. For more info <a href="https://simplelineicons.github.io/">click here</a>.</p>
                <p><code>&lt;i className="icon icon-user"&gt;&lt;/i&gt;</code></p>
              </Col>
              <Col lg={12} sm={12}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-user</Tooltip>}>
                        <i className="icon icon-user" data-bs-toggle="tooltip" title="icon-user"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-people</Tooltip>}>
                        <i className="icon icon-people" data-bs-toggle="tooltip" title="icon-people"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-user-female</Tooltip>}>
                        <i className="icon icon-user-female" data-bs-toggle="tooltip" title="icon-user-female"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-user-follow</Tooltip>}>
                        <i className="icon icon-user-follow" data-bs-toggle="tooltip" title="icon-user-follow"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-user-following</Tooltip>}>
                        <i className="icon icon-user-following" data-bs-toggle="tooltip" title="icon-user-following"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-user-unfollow</Tooltip>}>
                        <i className="icon icon-user-unfollow" data-bs-toggle="tooltip" title="icon-user-unfollow"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-login</Tooltip>}>
                        <i className="icon icon-login" data-bs-toggle="tooltip" title="icon-login"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-logout</Tooltip>}>
                        <i className="icon icon-logout" data-bs-toggle="tooltip" title="icon-logout"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-emotsmile</Tooltip>}>
                        <i className="icon icon-emotsmile" data-bs-toggle="tooltip" title="icon-emotsmile"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-phone</Tooltip>}>
                        <i className="icon icon-phone" data-bs-toggle="tooltip" title="icon-phone"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-call-end</Tooltip>}>
                        <i className="icon icon-call-end" data-bs-toggle="tooltip" title="icon-call-end"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-call-in</Tooltip>}>
                        <i className="icon icon-call-in" data-bs-toggle="tooltip" title="icon-call-in"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-call-out</Tooltip>}>
                        <i className="icon icon-call-out" data-bs-toggle="tooltip" title="icon-call-out"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-map</Tooltip>}>
                        <i className="icon icon-map" data-bs-toggle="tooltip" title="icon-map"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-location-pin</Tooltip>}>
                        <i className="icon icon-location-pin" data-bs-toggle="tooltip" title="icon-location-pin"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-direction</Tooltip>}>
                        <i className="icon icon-direction" data-bs-toggle="tooltip" title="icon-direction"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-directions</Tooltip>}>
                        <i className="icon icon-directions" data-bs-toggle="tooltip" title="icon-directions"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-compass</Tooltip>}>
                        <i className="icon icon-compass" data-bs-toggle="tooltip" title="icon-compass"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-layers</Tooltip>}>
                        <i className="icon icon-layers" data-bs-toggle="tooltip" title="icon-layers"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-menu</Tooltip>}>
                        <i className="icon icon-menu" data-bs-toggle="tooltip" title="icon-menu"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-list</Tooltip>}>
                        <i className="icon icon-list" data-bs-toggle="tooltip" title="icon-list"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-options-vertical</Tooltip>}>
                        <i className="icon icon-options-vertical" data-bs-toggle="tooltip" title="icon-options-vertical"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-options</Tooltip>}>
                        <i className="icon icon-options" data-bs-toggle="tooltip" title="icon-options"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-arrow-down</Tooltip>}>
                        <i className="icon icon-arrow-down" data-bs-toggle="tooltip" title="icon-arrow-down"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-arrow-left</Tooltip>}>
                        <i className="icon icon-arrow-left" data-bs-toggle="tooltip" title="icon-arrow-left"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-arrow-right</Tooltip>}>
                        <i className="icon icon-arrow-right" data-bs-toggle="tooltip" title="icon-arrow-right"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-arrow-up</Tooltip>}>
                        <i className="icon icon-arrow-up" data-bs-toggle="tooltip" title="icon-arrow-up"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-arrow-up-circle</Tooltip>}>
                        <i className="icon icon-arrow-up-circle" data-bs-toggle="tooltip" title="icon-arrow-up-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-arrow-left-circle</Tooltip>}>
                        <i className="icon icon-arrow-left-circle" data-bs-toggle="tooltip" title="icon-arrow-left-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-arrow-right-circle</Tooltip>}>
                        <i className="icon icon-arrow-right-circle" data-bs-toggle="tooltip" title="icon-arrow-right-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-arrow-down-circle</Tooltip>}>
                        <i className="icon icon-arrow-down-circle" data-bs-toggle="tooltip" title="icon-arrow-down-circle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-check</Tooltip>}>
                        <i className="icon icon-check" data-bs-toggle="tooltip" title="icon-check"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-clock</Tooltip>}>
                        <i className="icon icon-clock" data-bs-toggle="tooltip" title="icon-clock"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-plus</Tooltip>}>
                        <i className="icon icon-plus" data-bs-toggle="tooltip" title="icon-plus"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-minus</Tooltip>}>
                        <i className="icon icon-minus" data-bs-toggle="tooltip" title="icon-minus"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-close</Tooltip>}>
                        <i className="icon icon-close" data-bs-toggle="tooltip" title="icon-close"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-event</Tooltip>}>
                        <i className="icon icon-event" data-bs-toggle="tooltip" title="icon-event"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-exclamation</Tooltip>}>
                        <i className="icon icon-exclamation" data-bs-toggle="tooltip" title="icon-exclamation"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-organization</Tooltip>}>
                        <i className="icon icon-organization" data-bs-toggle="tooltip" title="icon-organization"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-trophy</Tooltip>}>
                        <i className="icon icon-trophy" data-bs-toggle="tooltip" title="icon-trophy"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-screen-smartphone</Tooltip>}>
                        <i className="icon icon-screen-smartphone" data-bs-toggle="tooltip" title="icon-screen-smartphone"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-screen-desktop</Tooltip>}>
                        <i className="icon icon-screen-desktop" data-bs-toggle="tooltip" title="icon-screen-desktop"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-plane</Tooltip>}>
                        <i className="icon icon-plane" data-bs-toggle="tooltip" title="icon-plane"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-notebook</Tooltip>}>
                        <i className="icon icon-notebook" data-bs-toggle="tooltip" title="icon-notebook"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-mustache</Tooltip>}>
                        <i className="icon icon-mustache" data-bs-toggle="tooltip" title="icon-mustache"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-mouse</Tooltip>}>
                        <i className="icon icon-mouse" data-bs-toggle="tooltip" title="icon-mouse"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-magnet</Tooltip>}>
                        <i className="icon icon-magnet" data-bs-toggle="tooltip" title="icon-magnet"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-energy</Tooltip>}>
                        <i className="icon icon-energy" data-bs-toggle="tooltip" title="icon-energy"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-disc</Tooltip>}>
                        <i className="icon icon-disc" data-bs-toggle="tooltip" title="icon-disc"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-cursor</Tooltip>}>
                        <i className="icon icon-cursor" data-bs-toggle="tooltip" title="icon-cursor"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-cursor-move</Tooltip>}>
                        <i className="icon icon-cursor-move" data-bs-toggle="tooltip" title="icon-cursor-move"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-crop</Tooltip>}>
                        <i className="icon icon-crop" data-bs-toggle="tooltip" title="icon-crop"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-chemistry</Tooltip>}>
                        <i className="icon icon-chemistry" data-bs-toggle="tooltip" title="icon-chemistry"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-speedometer</Tooltip>}>
                        <i className="icon icon-speedometer" data-bs-toggle="tooltip" title="icon-speedometer"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-shield</Tooltip>}>
                        <i className="icon icon-shield" data-bs-toggle="tooltip" title="icon-shield"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-screen-tablet</Tooltip>}>
                        <i className="icon icon-screen-tablet" data-bs-toggle="tooltip" title="icon-screen-tablet"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-magic-wand</Tooltip>}>
                        <i className="icon icon-magic-wand" data-bs-toggle="tooltip" title="icon-magic-wand"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-hourglass</Tooltip>}>
                        <i className="icon icon-hourglass" data-bs-toggle="tooltip" title="icon-hourglass"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-graduation</Tooltip>}>
                        <i className="icon icon-graduation" data-bs-toggle="tooltip" title="icon-graduation"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-ghost</Tooltip>}>
                        <i className="icon icon-ghost" data-bs-toggle="tooltip" title="icon-ghost"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-game-controller</Tooltip>}>
                        <i className="icon icon-game-controller" data-bs-toggle="tooltip" title="icon-game-controller"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-fire</Tooltip>}>
                        <i className="icon icon-fire" data-bs-toggle="tooltip" title="icon-fire"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-eyeglass</Tooltip>}>
                        <i className="icon icon-eyeglass" data-bs-toggle="tooltip" title="icon-eyeglass"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-envelope-open</Tooltip>}>
                        <i className="icon icon-envelope-open" data-bs-toggle="tooltip" title="icon-envelope-open"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-envelope-letter</Tooltip>}>
                        <i className="icon icon-envelope-letter" data-bs-toggle="tooltip" title="icon-envelope-letter"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-bell</Tooltip>}>
                        <i className="icon icon-bell" data-bs-toggle="tooltip" title="icon-bell"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-badge</Tooltip>}>
                        <i className="icon icon-badge" data-bs-toggle="tooltip" title="icon-badge"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-anchor</Tooltip>}>
                        <i className="icon icon-anchor" data-bs-toggle="tooltip" title="icon-anchor"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-wallet</Tooltip>}>
                        <i className="icon icon-wallet" data-bs-toggle="tooltip" title="icon-wallet"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-vector</Tooltip>}>
                        <i className="icon icon-vector" data-bs-toggle="tooltip" title="icon-vector"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-speech</Tooltip>}>
                        <i className="icon icon-speech" data-bs-toggle="tooltip" title="icon-speech"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-puzzle</Tooltip>}>
                        <i className="icon icon-puzzle" data-bs-toggle="tooltip" title="icon-puzzle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-printer</Tooltip>}>
                        <i className="icon icon-printer" data-bs-toggle="tooltip" title="icon-printer"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-present</Tooltip>}>
                        <i className="icon icon-present" data-bs-toggle="tooltip" title="icon-present"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-playlist</Tooltip>}>
                        <i className="icon icon-playlist" data-bs-toggle="tooltip" title="icon-playlist"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-pin</Tooltip>}>
                        <i className="icon icon-pin" data-bs-toggle="tooltip" title="icon-pin"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-picture</Tooltip>}>
                        <i className="icon icon-picture" data-bs-toggle="tooltip" title="icon-picture"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-handbag</Tooltip>}>
                        <i className="icon icon-handbag" data-bs-toggle="tooltip" title="icon-handbag"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-globe-alt</Tooltip>}>
                        <i className="icon icon-globe-alt" data-bs-toggle="tooltip" title="icon-globe-alt"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-globe</Tooltip>}>
                        <i className="icon icon-globe" data-bs-toggle="tooltip" title="icon-globe"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-folder-alt</Tooltip>}>
                        <i className="icon icon-folder-alt" data-bs-toggle="tooltip" title="icon-folder-alt"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-folder</Tooltip>}>
                        <i className="icon icon-folder" data-bs-toggle="tooltip" title="icon-folder"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-film</Tooltip>}>
                        <i className="icon icon-film" data-bs-toggle="tooltip" title="icon-film"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-feed</Tooltip>}>
                        <i className="icon icon-feed" data-bs-toggle="tooltip" title="icon-feed"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-drop</Tooltip>}>
                        <i className="icon icon-drop" data-bs-toggle="tooltip" title="icon-drop"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-drawer</Tooltip>}>
                        <i className="icon icon-drawer" data-bs-toggle="tooltip" title="icon-drawer"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-docs</Tooltip>}>
                        <i className="icon icon-docs" data-bs-toggle="tooltip" title="icon-docs"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-doc</Tooltip>}>
                        <i className="icon icon-doc" data-bs-toggle="tooltip" title="icon-doc"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-diamond</Tooltip>}>
                        <i className="icon icon-diamond" data-bs-toggle="tooltip" title="icon-diamond"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-cup</Tooltip>}>
                        <i className="icon icon-cup" data-bs-toggle="tooltip" title="icon-cup"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-calculator</Tooltip>}>
                        <i className="icon icon-calculator" data-bs-toggle="tooltip" title="icon-calculator"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-bubbles</Tooltip>}>
                        <i className="icon icon-bubbles" data-bs-toggle="tooltip" title="icon-bubbles"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-briefcase</Tooltip>}>
                        <i className="icon icon-briefcase" data-bs-toggle="tooltip" title="icon-briefcase"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-book-open</Tooltip>}>
                        <i className="icon icon-book-open" data-bs-toggle="tooltip" title="icon-book-open"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-basket-loaded</Tooltip>}>
                        <i className="icon icon-basket-loaded" data-bs-toggle="tooltip" title="icon-basket-loaded"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-basket</Tooltip>}>
                        <i className="icon icon-basket" data-bs-toggle="tooltip" title="icon-basket"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-bag</Tooltip>}>
                        <i className="icon icon-bag" data-bs-toggle="tooltip" title="icon-bag"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-action-undo</Tooltip>}>
                        <i className="icon icon-action-undo" data-bs-toggle="tooltip" title="icon-action-undo"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-action-redo</Tooltip>}>
                        <i className="icon icon-action-redo" data-bs-toggle="tooltip" title="icon-action-redo"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-wrench</Tooltip>}>
                        <i className="icon icon-wrench" data-bs-toggle="tooltip" title="icon-wrench"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-umbrella</Tooltip>}>
                        <i className="icon icon-umbrella" data-bs-toggle="tooltip" title="icon-umbrella"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-trash</Tooltip>}>
                        <i className="icon icon-trash" data-bs-toggle="tooltip" title="icon-trash"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-tag</Tooltip>}>
                        <i className="icon icon-tag" data-bs-toggle="tooltip" title="icon-tag"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-support</Tooltip>}>
                        <i className="icon icon-support" data-bs-toggle="tooltip" title="icon-support"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-frame</Tooltip>}>
                        <i className="icon icon-frame" data-bs-toggle="tooltip" title="icon-frame"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-size-fullscreen</Tooltip>}>
                        <i className="icon icon icon-size-fullscreen" data-bs-toggle="tooltip" title="icon-size-fullscreen"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-size-actual</Tooltip>}>
                        <i className="icon icon-size-actual" data-bs-toggle="tooltip" title="icon-size-actual"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-shuffle</Tooltip>}>
                        <i className="icon icon-shuffle" data-bs-toggle="tooltip" title="icon-shuffle"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-share-alt</Tooltip>}>
                        <i className="icon icon-share-alt" data-bs-toggle="tooltip" title="icon-share-alt"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-share</Tooltip>}>
                        <i className="icon icon-share" data-bs-toggle="tooltip" title="icon-share"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-rocket</Tooltip>}>
                        <i className="icon icon-rocket" data-bs-toggle="tooltip" title="icon-rocket"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-question</Tooltip>}>
                        <i className="icon icon-question" data-bs-toggle="tooltip" title="icon-question"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-pie-chart</Tooltip>}>
                        <i className="icon icon-pie-chart" data-bs-toggle="tooltip" title="icon-pie-chart"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-pencil</Tooltip>}>
                        <i className="icon icon-pencil" data-bs-toggle="tooltip" title="icon-pencil"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-note</Tooltip>}>
                        <i className="icon icon-note" data-bs-toggle="tooltip" title="icon-note"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-loop</Tooltip>}>
                        <i className="icon icon-loop" data-bs-toggle="tooltip" title="icon-loop"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-home</Tooltip>}>
                        <i className="icon icon-home" data-bs-toggle="tooltip" title="icon-home"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-grid</Tooltip>}>
                        <i className="icon icon-grid" data-bs-toggle="tooltip" title="icon-grid"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-graph</Tooltip>}>
                        <i className="icon icon-graph" data-bs-toggle="tooltip" title="icon-graph"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-microphone</Tooltip>}>
                        <i className="icon icon-microphone" data-bs-toggle="tooltip" title="icon-microphone"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-music-tone-alt</Tooltip>}>
                        <i className="icon icon-music-tone-alt" data-bs-toggle="tooltip" title="icon-music-tone-alt"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-music-tone</Tooltip>}>
                        <i className="icon icon-music-tone" data-bs-toggle="tooltip" title="icon-music-tone"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-earphones-alt</Tooltip>}>
                        <i className="icon icon-earphones-alt" data-bs-toggle="tooltip" title="icon-earphones-alt"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-earphones</Tooltip>}>
                        <i className="icon icon-earphones" data-bs-toggle="tooltip" title="icon-earphones"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-equalizer</Tooltip>}>
                        <i className="icon icon-equalizer" data-bs-toggle="tooltip" title="icon-equalizer"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-like</Tooltip>}>
                        <i className="icon icon-like" data-bs-toggle="tooltip" title="icon-like"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-dislike</Tooltip>}>
                        <i className="icon icon-dislike" data-bs-toggle="tooltip" title="icon-dislike"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-control-start</Tooltip>}>
                        <i className="icon icon-control-start" data-bs-toggle="tooltip" title="icon-control-start"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-control-rewind</Tooltip>}>
                        <i className="icon icon-control-rewind" data-bs-toggle="tooltip" title="icon-control-rewind"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-control-play</Tooltip>}>
                        <i className="icon icon-control-play" data-bs-toggle="tooltip" title="icon-control-play"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-control-pause</Tooltip>}>
                        <i className="icon icon-control-pause" data-bs-toggle="tooltip" title="icon-control-pause"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-control-forward</Tooltip>}>
                        <i className="icon icon-control-forward" data-bs-toggle="tooltip" title="icon-control-forward"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-control-end</Tooltip>}>
                        <i className="icon icon-control-end" data-bs-toggle="tooltip" title="icon-control-end"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-volume-1</Tooltip>}>
                        <i className="icon icon-volume-1" data-bs-toggle="tooltip" title="icon-volume-1"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-volume-2</Tooltip>}>
                        <i className="icon icon-volume-2" data-bs-toggle="tooltip" title="icon-volume-2"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-volume-off</Tooltip>}>
                        <i className="icon icon-volume-off" data-bs-toggle="tooltip" title="icon-volume-off"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-calendar</Tooltip>}>
                        <i className="icon icon-calendar" data-bs-toggle="tooltip" title="icon-calendar"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-bulb</Tooltip>}>
                        <i className="icon icon-bulb" data-bs-toggle="tooltip" title="icon-bulb"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-chart</Tooltip>}>
                        <i className="icon icon-chart" data-bs-toggle="tooltip" title="icon-chart"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-ban</Tooltip>}>
                        <i className="icon icon-ban" data-bs-toggle="tooltip" title="icon-ban"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-bubble</Tooltip>}>
                        <i className="icon icon-bubble" data-bs-toggle="tooltip" title="icon-bubble"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-camrecorder</Tooltip>}>
                        <i className="icon icon-camrecorder" data-bs-toggle="tooltip" title="icon-camrecorder"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-camera</Tooltip>}>
                        <i className="icon icon-camera" data-bs-toggle="tooltip" title="icon-camera"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-cloud-download</Tooltip>}>
                        <i className="icon icon-cloud-download" data-bs-toggle="tooltip" title="icon-cloud-download"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-cloud-upload</Tooltip>}>
                        <i className="icon icon-cloud-upload" data-bs-toggle="tooltip" title="icon-cloud-upload"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-envelope</Tooltip>}>
                        <i className="icon icon-envelope" data-bs-toggle="tooltip" title="icon-envelope"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-eye</Tooltip>}>
                        <i className="icon icon-eye" data-bs-toggle="tooltip" title="icon-eye"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-flag</Tooltip>}>
                        <i className="icon icon-flag" data-bs-toggle="tooltip" title="icon-flag"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-heart</Tooltip>}>
                        <i className="icon icon-heart" data-bs-toggle="tooltip" title="icon-heart"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-info</Tooltip>}>
                        <i className="icon icon-info" data-bs-toggle="tooltip" title="icon-info"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-key</Tooltip>}>
                        <i className="icon icon-key" data-bs-toggle="tooltip" title="icon-key"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-link</Tooltip>}>
                        <i className="icon icon-link" data-bs-toggle="tooltip" title="icon-link"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-lock</Tooltip>}>
                        <i className="icon icon-lock" data-bs-toggle="tooltip" title="icon-lock"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-lock-open</Tooltip>}>
                        <i className="icon icon-lock-open" data-bs-toggle="tooltip" title="icon-lock-open"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-magnifier</Tooltip>}>
                        <i className="icon icon-magnifier" data-bs-toggle="tooltip" title="icon-magnifier"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-magnifier-add</Tooltip>}>
                        <i className="icon icon-magnifier-add" data-bs-toggle="tooltip" title="icon-magnifier-add"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-magnifier-remove</Tooltip>}>
                        <i className="icon icon-magnifier-remove" data-bs-toggle="tooltip" title="icon-magnifier-remove"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-paper-clip</Tooltip>}>
                        <i className="icon icon-paper-clip" data-bs-toggle="tooltip" title="icon-paper-clip"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-paper-plane</Tooltip>}>
                        <i className="icon icon-paper-plane" data-bs-toggle="tooltip" title="icon-paper-plane"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-power</Tooltip>}>
                        <i className="icon icon-power" data-bs-toggle="tooltip" title="icon-power"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-refresh</Tooltip>}>
                        <i className="icon icon-refresh" data-bs-toggle="tooltip" title="icon-refresh"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-reload</Tooltip>}>
                        <i className="icon icon-reload" data-bs-toggle="tooltip" title="icon-reload"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-settings</Tooltip>}>
                        <i className="icon icon-settings" data-bs-toggle="tooltip" title="icon-settings"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-star</Tooltip>}>
                        <i className="icon icon-star" data-bs-toggle="tooltip" title="icon-star"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-symbol-female</Tooltip>}>
                        <i className="icon icon-symbol-female" data-bs-toggle="tooltip" title="icon-symbol-female"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-symbol-male</Tooltip>}>
                        <i className="icon icon-symbol-male" data-bs-toggle="tooltip" title="icon-symbol-male"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-target</Tooltip>}>
                        <i className="icon icon-target" data-bs-toggle="tooltip" title="icon-target"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-credit-card</Tooltip>}>
                        <i className="icon icon-credit-card" data-bs-toggle="tooltip" title="icon-credit-card"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-paypal</Tooltip>}>
                        <i className="icon icon-paypal" data-bs-toggle="tooltip" title="icon-paypal"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-tumblr</Tooltip>}>
                        <i className="icon icon-social-tumblr" data-bs-toggle="tooltip" title="icon-social-tumblr"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-twitter</Tooltip>}>
                        <i className="icon icon-social-twitter" data-bs-toggle="tooltip" title="icon-social-twitter"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-facebook</Tooltip>}>
                        <i className="icon icon-social-facebook" data-bs-toggle="tooltip" title="icon-social-facebook"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-instagram</Tooltip>}>
                        <i className="icon icon-social-instagram" data-bs-toggle="tooltip" title="icon-social-instagram"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-linkedin</Tooltip>}>
                        <i className="icon icon-social-linkedin" data-bs-toggle="tooltip" title="icon-social-linkedin"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-pinterest</Tooltip>}>
                        <i className="icon icon-social-pinterest" data-bs-toggle="tooltip" title="icon-social-pinterest"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-github</Tooltip>}>
                        <i className="icon icon-social-github" data-bs-toggle="tooltip" title="icon-social-github"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-google</Tooltip>}>
                        <i className="icon icon-social-google" data-bs-toggle="tooltip" title="icon-social-google"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-reddit</Tooltip>}>
                        <i className="icon icon-social-reddit" data-bs-toggle="tooltip" title="icon-social-reddit"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-skype</Tooltip>}>
                        <i className="icon icon-social-skype" data-bs-toggle="tooltip" title="icon-social-skype"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-dribbble</Tooltip>}>
                        <i className="icon icon-social-dribbble" data-bs-toggle="tooltip" title="icon-social-dribbble"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-behance</Tooltip>}>
                        <i className="icon icon-social-behance" data-bs-toggle="tooltip" title="icon-social-behance"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-foursqare</Tooltip>}>
                        <i className="icon icon-social-foursqare" data-bs-toggle="tooltip" title="icon-social-foursqare"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-soundcloud</Tooltip>}>
                        <i className="icon icon-social-soundcloud" data-bs-toggle="tooltip" title="icon-social-soundcloud"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-spotify</Tooltip>}>
                        <i className="icon icon-social-spotify" data-bs-toggle="tooltip" title="icon-social-spotify"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-stumbleupon</Tooltip>}>
                        <i className="icon icon-social-stumbleupon" data-bs-toggle="tooltip" title="icon-social-stumbleupon"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-youtube</Tooltip>}>
                        <i className="icon icon-social-youtube" data-bs-toggle="tooltip" title="icon-social-youtube"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-dropbox</Tooltip>}>
                        <i className="icon icon-social-dropbox" data-bs-toggle="tooltip" title="icon-social-dropbox"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-vkontakte</Tooltip>}>
                        <i className="icon icon-social-vkontakte" data-bs-toggle="tooltip" title="icon-social-vkontakte"></i></OverlayTrigger></li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>icon-social-steam</Tooltip>}>
                        <i className="icon icon-social-steam" data-bs-toggle="tooltip" title="icon-social-steam"></i></OverlayTrigger></li>
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

export default SimpleLineIcons;

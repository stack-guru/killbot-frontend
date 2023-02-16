import React from 'react';
import styles from './WeatherIcons.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';


const WeatherIcons = () => {
  return (

  <div className={styles.WeatherIcons}>
    <PageHeader titles="Weather Icons" active="Weather Icons" items={['Icons']} />
    {/* <!-- ROW OPEN --> */}
    <Row className="row-cards">
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Weather icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={12} sm={12}>
                <p>Simply beautiful open source icons. For more info <a href="https://erikflowers.github.io/weather-icons/">click here</a>.</p>
                <p><code>&lt;i className="wi wi-ICON_NAME"&gt;&lt;/i&gt;</code></p>
              </Col>
              <Col lg={12} sm={12}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-cloudy-high</Tooltip>}>
                        <i className="wi wi-day-cloudy-high" title="wi wi-day-cloudy-high"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-moonrise</Tooltip>}>
                        <i className="wi wi-moonrise" title="wi wi-moonrise"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-na</Tooltip>}>
                        <i className="wi wi-na" title="wi wi-na"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-volcano</Tooltip>}>
                        <i className="wi wi-volcano" title="wi wi-volcano"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-light-wind</Tooltip>}>
                        <i className="wi wi-day-light-wind" title="wi wi-day-light-wind"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-moonset</Tooltip>}>
                        <i className="wi wi-moonset" title="wi wi-moonset"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-flood</Tooltip>}>
                        <i className="wi wi-flood" title="wi wi-flood"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-train</Tooltip>}>
                        <i className="wi wi-train" title="wi wi-train"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-sleet</Tooltip>}>
                        <i className="wi wi-day-sleet" title="wi wi-day-sleet"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-sleet</Tooltip>}>
                        <i className="wi wi-night-sleet" title="wi wi-night-sleet"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-sandstorm</Tooltip>}>
                        <i className="wi wi-sandstorm" title="wi wi-sandstorm"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-small-craft-advisory</Tooltip>}>
                        <i className="wi wi-small-craft-advisory" title="wi wi-small-craft-advisory"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-haze</Tooltip>}>
                        <i className="wi wi-day-haze" title="wi wi-day-haze"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-sleet</Tooltip>}>
                        <i className="wi wi-night-alt-sleet" title="wi wi-night-alt-sleet"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-tsunami</Tooltip>}>
                        <i className="wi wi-tsunami" title="wi wi-tsunami"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-gale-warning</Tooltip>}>
                        <i className="wi wi-gale-warning" title="wi wi-gale-warning"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-cloudy-high</Tooltip>}>
                        <i className="wi wi-night-cloudy-high" title="wi wi-night-cloudy-high"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-raindrop</Tooltip>}>
                        <i className="wi wi-raindrop" title="wi wi-raindrop"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-earthquake</Tooltip>}>
                        <i className="wi wi-earthquake" title="wi wi-earthquake"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-storm-warning</Tooltip>}>
                        <i className="wi wi-storm-warning" title="wi wi-storm-warning"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-partly-cloudy</Tooltip>}>
                        <i className="wi wi-night-alt-partly-cloudy" title="wi wi-night-alt-partly-cloudy"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-barometer</Tooltip>}>
                        <i className="wi wi-barometer" title="wi wi-barometer"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-fire</Tooltip>}>
                        <i className="wi wi-fire" title="wi wi-fire"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-hurricane-warning</Tooltip>}>
                        <i className="wi wi-hurricane-warning" title="wi wi-hurricane-warning"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-sleet</Tooltip>}>
                        <i className="wi wi-sleet" title="wi wi-sleet"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-humidity</Tooltip>}>
                        <i className="wi wi-humidity" title="wi wi-humidity"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-sunny</Tooltip>}>
                        <i className="wi wi-day-sunny" title="wi wi-day-sunny"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-cloudy</Tooltip>}>
                        <i className="wi wi-day-cloudy" title="wi wi-day-cloudy"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-cloudy-gusts</Tooltip>}>
                        <i className="wi wi-day-cloudy-gusts" title="wi wi-day-cloudy-gusts"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-cloudy-windy</Tooltip>}>
                        <i className="wi wi-day-cloudy-windy" title="wi wi-day-cloudy-windy"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-fog</Tooltip>}>
                        <i className="wi wi-day-fog" title="wi wi-day-fog"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-hail</Tooltip>}>
                        <i className="wi wi-day-hail" title="wi wi-day-hail"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-haze</Tooltip>}>
                        <i className="wi wi-day-haze" title="wi wi-day-haze"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-lightning</Tooltip>}>
                        <i className="wi wi-day-lightning" title="wi wi-day-lightning"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-rain</Tooltip>}>
                        <i className="wi wi-day-rain" title="wi wi-day-rain"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-rain-mix</Tooltip>}>
                        <i className="wi wi-day-rain-mix" title="wi wi-day-rain-mix"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-rain-wind</Tooltip>}>
                        <i className="wi wi-day-rain-wind" title="wi wi-day-rain-wind"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-showers</Tooltip>}>
                        <i className="wi wi-day-showers" title="wi wi-day-showers"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-sleet</Tooltip>}>
                        <i className="wi wi-day-sleet" title="wi wi-day-sleet"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-sleet-storm</Tooltip>}>
                        <i className="wi wi-day-sleet-storm" title="wi wi-day-sleet-storm"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-snow</Tooltip>}>
                        <i className="wi wi-day-snow" title="wi wi-day-snow"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-snow-thunderstorm</Tooltip>}>
                        <i className="wi wi-day-snow-thunderstorm" title="wi wi-day-snow-thunderstorm"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-snow-wind</Tooltip>}>
                        <i className="wi wi-day-snow-wind" title="wi wi-day-snow-wind"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-sprinkle</Tooltip>}>
                        <i className="wi wi-day-sprinkle" title="wi wi-day-sprinkle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-storm-showers</Tooltip>}>
                        <i className="wi wi-day-storm-showers" title="wi wi-day-storm-showers"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-sunny-overcast</Tooltip>}>
                        <i className="wi wi-day-sunny-overcast" title="wi wi-day-sunny-overcast"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-thunderstorm</Tooltip>}>
                        <i className="wi wi-day-thunderstorm" title="wi wi-day-thunderstorm"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-windy</Tooltip>}>
                        <i className="wi wi-day-windy" title="wi wi-day-windy"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-solar-eclipse</Tooltip>}>
                        <i className="wi wi-solar-eclipse" title="wi wi-solar-eclipse"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-hot</Tooltip>}>
                        <i className="wi wi-hot" title="wi wi-hot"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-cloudy-high</Tooltip>}>
                        <i className="wi wi-day-cloudy-high" title="wi wi-day-cloudy-high"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-day-light-wind</Tooltip>}>
                        <i className="wi wi-day-light-wind" title="wi wi-day-light-wind"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-clear</Tooltip>}>
                        <i className="wi wi-night-clear" title="wi wi-night-clear"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-cloudy</Tooltip>}>
                        <i className="wi wi-night-alt-cloudy" title="wi wi-night-alt-cloudy"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-cloudy-gusts</Tooltip>}>
                        <i className="wi wi-night-alt-cloudy-gusts" title="wi wi-night-alt-cloudy-gusts"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-cloudy-windy</Tooltip>}>
                        <i className="wi wi-night-alt-cloudy-windy" title="wi wi-night-alt-cloudy-windy"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-hail</Tooltip>}>
                        <i className="wi wi-night-alt-hail" title="wi wi-night-alt-hail"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-lightning</Tooltip>}>
                        <i className="wi wi-night-alt-lightning" title="wi wi-night-alt-lightning"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-rain</Tooltip>}>
                        <i className="wi wi-night-alt-rain" title="wi wi-night-alt-rain"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-rain-mix</Tooltip>}>
                        <i className="wi wi-night-alt-rain-mix" title="wi wi-night-alt-rain-mix"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-rain-wind</Tooltip>}>
                        <i className="wi wi-night-alt-rain-wind" title="wi wi-night-alt-rain-wind"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-showers</Tooltip>}>
                        <i className="wi wi-night-alt-showers" title="wi wi-night-alt-showers"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-sleet</Tooltip>}>
                        <i className="wi wi-night-alt-sleet" title="wi wi-night-alt-sleet"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-sleet-storm</Tooltip>}>
                        <i className="wi wi-night-alt-sleet-storm" title="wi wi-night-alt-sleet-storm"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-snow</Tooltip>}>
                        <i className="wi wi-night-alt-snow" title="wi wi-night-alt-snow"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-snow-thunderstorm</Tooltip>}>
                        <i className="wi wi-night-alt-snow-thunderstorm" title="wi wi-night-alt-snow-thunderstorm"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-snow-wind</Tooltip>}>
                        <i className="wi wi-night-alt-snow-wind" title="wi wi-night-alt-snow-wind"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-sprinkle</Tooltip>}>
                        <i className="wi wi-night-alt-sprinkle" title="wi wi-night-alt-sprinkle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-storm-showers</Tooltip>}>
                        <i className="wi wi-night-alt-storm-showers" title="wi wi-night-alt-storm-showers"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-thunderstorm</Tooltip>}>
                        <i className="wi wi-night-alt-thunderstorm" title="wi wi-night-alt-thunderstorm"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-cloudy</Tooltip>}>
                        <i className="wi wi-night-cloudy" title="wi wi-night-cloudy"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-cloudy-gusts</Tooltip>}>
                        <i className="wi wi-night-cloudy-gusts" title="wi wi-night-cloudy-gusts"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-cloudy-windy</Tooltip>}>
                        <i className="wi wi-night-cloudy-windy" title="wi wi-night-cloudy-windy"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-fog</Tooltip>}>
                        <i className="wi wi-night-fog" title="wi wi-night-fog"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-hail</Tooltip>}>
                        <i className="wi wi-night-hail" title="wi wi-night-hail"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-lightning</Tooltip>}>
                        <i className="wi wi-night-lightning" title="wi wi-night-lightning"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-partly-cloudy</Tooltip>}>
                        <i className="wi wi-night-partly-cloudy" title="wi wi-night-partly-cloudy"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-rain</Tooltip>}>
                        <i className="wi wi-night-rain" title="wi wi-night-rain"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-rain-mix</Tooltip>}>
                        <i className="wi wi-night-rain-mix" title="wi wi-night-rain-mix"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-rain-wind</Tooltip>}>
                        <i className="wi wi-night-rain-wind" title="wi wi-night-rain-wind"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-showers</Tooltip>}>
                        <i className="wi wi-night-showers" title="wi wi-night-showers"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-sleet</Tooltip>}>
                        <i className="wi wi-night-sleet" title="wi wi-night-sleet"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-sleet-storm</Tooltip>}>
                        <i className="wi wi-night-sleet-storm" title="wi wi-night-sleet-storm"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-snow</Tooltip>}>
                        <i className="wi wi-night-snow" title="wi wi-night-snow"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-snow-thunderstorm</Tooltip>}>
                        <i className="wi wi-night-snow-thunderstorm" title="wi wi-night-snow-thunderstorm"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-snow-wind</Tooltip>}>
                        <i className="wi wi-night-snow-wind" title="wi wi-night-snow-wind"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-sprinkle</Tooltip>}>
                        <i className="wi wi-night-sprinkle" title="wi wi-night-sprinkle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-storm-showers</Tooltip>}>
                        <i className="wi wi-night-storm-showers" title="wi wi-night-storm-showers"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-thunderstorm</Tooltip>}>
                        <i className="wi wi-night-thunderstorm" title="wi wi-night-thunderstorm"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-lunar-eclipse</Tooltip>}>
                        <i className="wi wi-lunar-eclipse" title="wi wi-lunar-eclipse"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-stars</Tooltip>}>
                        <i className="wi wi-stars" title="wi wi-stars"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-storm-showers</Tooltip>}>
                        <i className="wi wi-storm-showers" title="wi wi-storm-showers"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-cloudy-high</Tooltip>}>
                        <i className="wi wi-night-alt-cloudy-high" title="wi wi-night-alt-cloudy-high"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-cloudy-high</Tooltip>}>
                        <i className="wi wi-night-cloudy-high" title="wi wi-night-cloudy-high"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-night-alt-partly-cloudy</Tooltip>}>
                        <i className="wi wi-night-alt-partly-cloudy" title="wi wi-night-alt-partly-cloudy"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-cloud</Tooltip>}>
                        <i className="wi wi-cloud" title="wi wi-cloud"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-cloudy</Tooltip>}>
                        <i className="wi wi-cloudy" title="wi wi-cloudy"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-cloudy-gusts</Tooltip>}>
                        <i className="wi wi-cloudy-gusts" title="wi wi-cloudy-gusts"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-cloudy-windy</Tooltip>}>
                        <i className="wi wi-cloudy-windy" title="wi wi-cloudy-windy"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-fog</Tooltip>}>
                        <i className="wi wi-fog" title="wi wi-fog"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-hail</Tooltip>}>
                        <i className="wi wi-hail" title="wi wi-hail"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-rain</Tooltip>}>
                        <i className="wi wi-rain" title="wi wi-rain"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-rain-mix</Tooltip>}>
                        <i className="wi wi-rain-mix" title="wi wi-rain-mix"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-rain-wind</Tooltip>}>
                        <i className="wi wi-rain-wind" title="wi wi-rain-wind"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-showers</Tooltip>}>
                        <i className="wi wi-showers" title="wi wi-showers"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-sleet</Tooltip>}>
                        <i className="wi wi-sleet" title="wi wi-sleet"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-snow</Tooltip>}>
                        <i className="wi wi-snow" title="wi wi-snow"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-sprinkle</Tooltip>}>
                        <i className="wi wi-sprinkle" title="wi wi-sprinkle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-storm-showers</Tooltip>}>
                        <i className="wi wi-storm-showers" title="wi wi-storm-showers"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-thunderstorm</Tooltip>}>
                        <i className="wi wi-thunderstorm" title="wi wi-thunderstorm"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-snow-wind</Tooltip>}>
                        <i className="wi wi-snow-wind" title="wi wi-snow-wind"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-snow</Tooltip>}>
                        <i className="wi wi-snow" title="wi wi-snow"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-smog</Tooltip>}>
                        <i className="wi wi-smog" title="wi wi-smog"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-smoke</Tooltip>}>
                        <i className="wi wi-smoke" title="wi wi-smoke"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-lightning</Tooltip>}>
                        <i className="wi wi-lightning" title="wi wi-lightning"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-raindrops</Tooltip>}>
                        <i className="wi wi-raindrops" title="wi wi-raindrops"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-raindrop</Tooltip>}>
                        <i className="wi wi-raindrop" title="wi wi-raindrop"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-snowflake-cold</Tooltip>}>
                        <i className="wi wi-snowflake-cold" title="wi wi-snowflake-cold"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-windy</Tooltip>}>
                        <i className="wi wi-windy" title="wi wi-windy"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-strong-wind</Tooltip>}>
                        <i className="wi wi-strong-wind" title="wi wi-strong-wind"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-sandstorm</Tooltip>}>
                        <i className="wi wi-sandstorm" title="wi wi-sandstorm"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-earthquake</Tooltip>}>
                        <i className="wi wi-earthquake" title="wi wi-earthquake"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-fire</Tooltip>}>
                        <i className="wi wi-fire" title="wi wi-fire"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-flood</Tooltip>}>
                        <i className="wi wi-flood" title="wi wi-flood"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-meteor</Tooltip>}>
                        <i className="wi wi-meteor" title="wi wi-meteor"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-tsunami</Tooltip>}>
                        <i className="wi wi-tsunami" title="wi wi-tsunami"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-volcano</Tooltip>}>
                        <i className="wi wi-volcano" title="wi wi-volcano"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-hurricane</Tooltip>}>
                        <i className="wi wi-hurricane" title="wi wi-hurricane"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-tornado</Tooltip>}>
                        <i className="wi wi-tornado" title="wi wi-tornado"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-small-craft-advisory</Tooltip>}>
                        <i className="wi wi-small-craft-advisory" title="wi wi-small-craft-advisory"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-gale-warning</Tooltip>}>
                        <i className="wi wi-gale-warning" title="wi wi-gale-warning"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-storm-warning</Tooltip>}>
                        <i className="wi wi-storm-warning" title="wi wi-storm-warning"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-hurricane-warning</Tooltip>}>
                        <i className="wi wi-hurricane-warning" title="wi wi-hurricane-warning"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-wind-direction</Tooltip>}>
                        <i className="wi wi-wind-direction" title="wi wi-wind-direction"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-alien</Tooltip>}>
                        <i className="wi wi-alien" title="wi wi-alien"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-celsius</Tooltip>}>
                        <i className="wi wi-celsius" title="wi wi-celsius"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-fahrenheit</Tooltip>}>
                        <i className="wi wi-fahrenheit" title="wi wi-fahrenheit"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-degrees</Tooltip>}>
                        <i className="wi wi-degrees" title="wi wi-degrees"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-thermometer</Tooltip>}>
                        <i className="wi wi-thermometer" title="wi wi-thermometer"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-thermometer-exterior</Tooltip>}>
                        <i className="wi wi-thermometer-exterior" title="wi wi-thermometer-exterior"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-thermometer-internal</Tooltip>}>
                        <i className="wi wi-thermometer-internal" title="wi wi-thermometer-internal"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-cloud-down</Tooltip>}>
                        <i className="wi wi-cloud-down" title="wi wi-cloud-down"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-cloud-up</Tooltip>}>
                        <i className="wi wi-cloud-up" title="wi wi-cloud-up"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-cloud-refresh</Tooltip>}>
                        <i className="wi wi-cloud-refresh" title="wi wi-cloud-refresh"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-horizon</Tooltip>}>
                        <i className="wi wi-horizon" title="wi wi-horizon"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-horizon-alt</Tooltip>}>
                        <i className="wi wi-horizon-alt" title="wi wi-horizon-alt"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-sunrise</Tooltip>}>
                        <i className="wi wi-sunrise" title="wi wi-sunrise"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-sunset</Tooltip>}>
                        <i className="wi wi-sunset" title="wi wi-sunset"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-moonrise</Tooltip>}>
                        <i className="wi wi-moonrise" title="wi wi-moonrise"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-moonset</Tooltip>}>
                        <i className="wi wi-moonset" title="wi wi-moonset"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>typcn typcn-rss-outline</Tooltip>}>
                        <i className="wi wi-refresh" title="typcn typcn-rss-outline"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-refresh-alt</Tooltip>}>
                        <i className="wi wi-refresh-alt" title="wi wi-refresh-alt"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-umbrella</Tooltip>}>
                        <i className="wi wi-umbrella" title="wi wi-umbrella"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-barometer</Tooltip>}>
                        <i className="wi wi-barometer" title="wi wi-barometer"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-humidity</Tooltip>}>
                        <i className="wi wi-humidity" title="wi wi-humidity"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-na</Tooltip>}>
                        <i className="wi wi-na" title="wi wi-na"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger placement='top' overlay={<Tooltip>wi wi-train</Tooltip>}>
                        <i className="wi wi-train" title="wi wi-train"></i>
                      </OverlayTrigger>
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

export default WeatherIcons;

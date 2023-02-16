import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Timeline.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';

const Timeline = () => {
  return (

  <div className={styles.Timeline}>
    <PageHeader titles="Timeline" active="Timeline" items={['Apps']} /> 
    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={12}>
        <Card>
          <Card.Header className="border-bottom-0 custom-card-header">
            <h6 className="main-content-label mb-0">Vertical Timeline</h6>
          </Card.Header>
          <Card.Body>
            <div className="vtimeline">
              <div className="timeline-wrapper timeline-wrapper-primary">
                <div className="avatar avatar-md timeline-badge">
                  <span className="timeline-icon"><svg style={{width:"25px",height:"25px"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M4,2A2,2 0 0,0 2,4V11C2,11.55 2.22,12.05 2.59,12.42L11.59,21.42C11.95,21.78 12.45,22 13,22C13.55,22 14.05,21.78 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.45 21.77,11.94 21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4V2M11,4L20,13L13,20L4,11V4H11V4H11M6.5,5A1.5,1.5 0 0,0 5,6.5A1.5,1.5 0 0,0 6.5,8A1.5,1.5 0 0,0 8,6.5A1.5,1.5 0 0,0 6.5,5M10.95,10.5C9.82,10.5 8.9,11.42 8.9,12.55C8.9,13.12 9.13,13.62 9.5,14L13,17.5L16.5,14C16.87,13.63 17.1,13.11 17.1,12.55A2.05,2.05 0 0,0 15.05,10.5C14.5,10.5 13.97,10.73 13.6,11.1L13,11.7L12.4,11.11C12.03,10.73 11.5,10.5 10.95,10.5Z" />
                  </svg></span>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h6 className="timeline-title">Art Ramadani posted a status update</h6>
                  </div>
                  <div className="timeline-body">
                    <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief
                      trees but rooms think may.</p>
                  </div>
                  <div className="timeline-footer d-flex align-items-center flex-wrap">
                    <i className="fe fe-heart  text-muted me-1"></i>
                    <span>19</span>
                    <span className="ms-auto"><i className="fe fe-calendar text-muted mx-1"></i>19 Oct 2020</span>
                  </div>
                </div>
              </div>
              <div className="timeline-wrapper timeline-inverted timeline-wrapper-secondary">
                <div className="avatar avatar-md timeline-badge">
                  <span className="timeline-icon"><svg style={{width:"26px",height:"26px"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 4C14.2 4 16 5.8 16 8C16 10.1 13.9 13.5 12 15.9C10.1 13.4 8 10.1 8 8C8 5.8 9.8 4 12 4M12 2C8.7 2 6 4.7 6 8C6 12.5 12 19 12 19S18 12.4 18 8C18 4.7 15.3 2 12 2M12 6C10.9 6 10 6.9 10 8S10.9 10 12 10 14 9.1 14 8 13.1 6 12 6M20 19C20 21.2 16.4 23 12 23S4 21.2 4 19C4 17.7 5.2 16.6 7.1 15.8L7.7 16.7C6.7 17.2 6 17.8 6 18.5C6 19.9 8.7 21 12 21S18 19.9 18 18.5C18 17.8 17.3 17.2 16.2 16.7L16.8 15.8C18.8 16.6 20 17.7 20 19Z" />
                  </svg></span>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h6 className="timeline-title">Job Meeting</h6>
                  </div>
                  <div className="timeline-body">
                    <p>You have a meeting at Laborator Office Today.</p>
                  </div>
                  <div className="timeline-footer d-flex align-items-center flex-wrap">
                    <i className="fe fe-heart  text-muted me-1"></i>
                    <span>25</span>
                    <span className="ms-auto"><i className="fe fe-calendar text-muted mx-1"></i>10th Oct 2020</span>
                  </div>
                </div>
              </div>
              <div className="timeline-wrapper timeline-wrapper-green">
                <div className="avatar avatar-md timeline-badge">
                  <span className="timeline-icon"><svg style={{width:"25px",height:"25px"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M15.33 11.05C14.17 11.88 13.34 13.14 13.09 14.58L11.55 11.63L7.66 15.5L8 18L6.95 19.06L5.18 15.87L2 14.11L3.06 13.05L5.54 13.4L9.43 9.5L2 5.62L3.41 4.21L12.61 6.33L16.5 2.44C17.08 1.85 18.03 1.85 18.62 2.44C19.2 3.03 19.2 4 18.62 4.56L14.73 8.45L15.33 11.05M22 15.5C22 18.1 18.5 22 18.5 22S15 18.1 15 15.5C15 13.6 16.6 12 18.5 12S22 13.6 22 15.5M19.7 15.6C19.7 15 19.1 14.4 18.5 14.4S17.3 14.9 17.3 15.6C17.3 16.2 17.8 16.8 18.5 16.8S19.8 16.2 19.7 15.6" />
                  </svg></span>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h6 className="timeline-title">Arlind Nushi checked in at New York</h6>
                  </div>
                  <div className="timeline-body">
                    <p>Alpha 5 has arrived just over a month after Alpha 4 with some major feature improvements and a boat load of bug fixes.</p>
                  </div>
                  <div className="timeline-footer d-flex align-items-center flex-wrap">
                    <i className="fe fe-heart  text-muted me-1"></i>
                    <span>19</span>
                    <span className="ms-auto"><i className="fe fe-calendar text-muted mx-1"></i>5th Oct 2020</span>
                  </div>
                </div>
              </div>
              <div className="timeline-wrapper timeline-inverted timeline-wrapper-danger">
                <div className="avatar avatar-md timeline-badge">
                  <span className="timeline-icon"><svg style={{width:"24px",height:"24px"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3M15.96,10.29L13.21,13.83L11.25,11.47L8.5,15H19.5L15.96,10.29Z" />
                  </svg></span>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h6 className="timeline-title">Eroll Maxhuni uploaded 4 new photos to album Summer Trip</h6>
                  </div>
                  <div className="timeline-body">
                    <p>Pianoforte principles our unaffected not for astonished travelling are particular.</p>
                    <img src={require("../../../assets/images/media/1.jpg")} className="mb-3" alt="img"/>
                  </div>
                  <div className="timeline-footer d-flex align-items-center flex-wrap">
                    <i className="fe fe-heart  text-muted me-1"></i>
                    <span>19</span>
                    <span className="ms-auto"><i className="fe fe-calendar text-muted mx-1"></i>27th Sep 2017</span>
                  </div>
                </div>
              </div>
              <div className="timeline-wrapper timeline-wrapper-success">
                <div className="avatar avatar-md timeline-badge">
                  <span className="timeline-icon"><svg style={{width:"24px",height:"24px"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M13 17H17V14L22 18.5L17 23V20H13V17M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H11V18H4V8L12 13L20 8V14H22V6A2 2 0 0 0 20 4M12 11L4 6H20Z" />
                  </svg></span>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h6 className="timeline-title">Support Team sent you an email</h6>
                  </div>
                  <div className="timeline-body">
                    <p>Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo
                      ideeli hulu weebly balihoo....</p>
                    <Link to="#" className="btn ripple btn-primary text-white mb-3">Read more</Link>
                  </div>
                  <div className="timeline-footer d-flex align-items-center flex-wrap">
                    <i className="fe fe-heart  text-muted me-1"></i>
                    <span>25</span>
                    <span className="ms-auto"><i className="fe fe-calendar text-muted mx-1"></i>25th Sep 2017</span>
                  </div>
                </div>
              </div>
              <div className="timeline-wrapper timeline-inverted timeline-wrapper-warning">
                <div className="avatar avatar-md timeline-badge">
                  <span className="timeline-icon"><svg style={{width:"26px",height:"26px"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10 16.5L16 12L10 7.5M22 12C22 6.46 17.54 2 12 2C10.83 2 9.7 2.19 8.62 2.56L9.32 4.5C10.17 4.16 11.06 3.97 12 3.97C16.41 3.97 20.03 7.59 20.03 12C20.03 16.41 16.41 20.03 12 20.03C7.59 20.03 3.97 16.41 3.97 12C3.97 11.06 4.16 10.12 4.5 9.28L2.56 8.62C2.19 9.7 2 10.83 2 12C2 17.54 6.46 22 12 22C17.54 22 22 17.54 22 12M5.47 3.97C6.32 3.97 7 4.68 7 5.47C7 6.32 6.32 7 5.47 7C4.68 7 3.97 6.32 3.97 5.47C3.97 4.68 4.68 3.97 5.47 3.97Z" />
                  </svg></span>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h6 className="timeline-title">Mr. Doe shared a video</h6>
                  </div>
                  <div className="timeline-body">
                    <div className="embed-responsive embed-responsive-16by9 mb-3">
                      <iframe className="embed-responsive-item" title='media1' src="https://www.youtube.com/embed/XZmGGAbHqa0?rel=0&amp;controls=0&amp;showinfo=0" allowFullScreen   />
                    </div>
                  </div>
                  <div className="timeline-footer d-flex align-items-center flex-wrap">
                    <i className="fe fe-heart  text-muted me-1"></i>
                    <span>32</span>
                    <span className="ms-auto"><i className="fe fe-calendar text-muted mx-1"></i>19th Sep 2017</span>
                  </div>
                </div>
              </div>
              <div className="timeline-wrapper timeline-wrapper-dark">
                <div className="avatar avatar-md timeline-badge">
                  <span className="timeline-icon"><svg style={{width:"24px",height:"24px"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M16,14H8V13C8,11.67 10.67,11 12,11C13.33,11 16,11.67 16,13V14M12,6A2,2 0 0,1 14,8A2,2 0 0,1 12,10A2,2 0 0,1 10,8A2,2 0 0,1 12,6Z" />
                  </svg></span>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h6 className="timeline-title">Sarah Young accepted your friend request</h6>
                  </div>
                  <div className="timeline-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cupiditate, delectus deserunt doloribus earum eveniet explicabo fuga iste magni maxime</p>
                  </div>
                  <div className="timeline-footer d-flex align-items-center flex-wrap">
                    <i className="fe fe-heart text-muted me-1"></i>
                    <span>26</span>
                    <span className="ms-auto"><i className="fe fe-calendar text-muted mx-1"></i>15th Sep 2017</span>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </div>
)
};

export default Timeline;

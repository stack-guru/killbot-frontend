import React from 'react';
import styles from './MailInbox.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Link } from 'react-router-dom';
import { Row, Col, Card, ListGroup, Badge, ButtonGroup, Dropdown, Table, Form, Pagination } from 'react-bootstrap';



const MailInbox = () => {

  const tableData = [
    { id: 1, starClass: "inbox-started", bookMark: '', subject: 'Tim Reid, S P N', description: "Boost Your Website Traffic ", date: 'April 01', className: "" },
    { id: 2, starClass: "inbox-started", bookMark: '', subject: 'Freelancer.com', description: "Stop wasting your visitors", date: 'May 23', className: "" },
    { id: 3, starClass: "", bookMark: 'text-danger', subject: 'PHPClass', description: "Added a new className: Login Class Fast Site", date: '9:27 AM', className: "unread" },
    { id: 4, starClass: "", bookMark: '', subject: 'Facebook', description: "Somebody requested a new password", date: 'June 13', className: "" },
    { id: 5, starClass: "inbox-started", bookMark: '', subject: 'Skype', description: "Password successfully changed", date: 'March 24', className: "" },
    { id: 6, starClass: "inbox-started", bookMark: '', subject: 'Google+', description: "alireza, do you know", date: 'March 09', className: "" },
    { id: 7, starClass: "inbox-started", bookMark: '', subject: 'WOW Slider ', description: "New WOW Slider v7.8 - 67% off", date: 'March 14', className: "" },
    { id: 8, starClass: "inbox-started", bookMark: '', subject: 'LinkedIn Pulse', description: "The One Sign Your Co-Worker Will Stab", date: 'Feb 19', className: "" },
    { id: 9, starClass: "", bookMark: '', subject: 'Google Webmaster', description: "Improve the search presence of WebSite", date: 'March 15', className: "unread" },
    { id: 10, starClass: "", bookMark: '', subject: 'JW Player', description: "Last Chance: Upgrade to Pro for", date: 'March 15', className: "" },
    { id: 11, starClass: "", bookMark: '', subject: 'Drupal Community', description: "Welcome to the Drupal Community", date: 'March 04', className: "" },
    { id: 12, starClass: "inbox-started", bookMark: '', subject: 'Zoosk', description: "7 new singles we think you'll like", date: 'May 14', className: "" },
    { id: 13, starClass: "", bookMark: 'text-danger', subject: 'LinkedIn', description: "Alireza: Nokia Networks, System Group and", date: 'February 25', className: "" },
    { id: 14, starClass: "", bookMark: '', subject: 'Facebook', description: "Your account was recently logged into", date: 'March 14', className: "" },
    { id: 15, starClass: "", bookMark: '', subject: 'Twitter', description: "Your Twitter password has been changed", date: 'April 07', className: "" },
    { id: 16, starClass: "", bookMark: '', subject: 'InternetSeer', description: "Performance Report", date: 'July 14', className: "" },
    { id: 17, starClass: "", bookMark: 'text-danger', subject: 'Bertina', description: "IMPORTANT: Don't lose your domains!", date: 'June 16', className: "" },
    { id: 18, starClass: "inbox-started", bookMark: 'text-danger', subject: 'Laura Gaffin, S P N ', description: "Your Website On Google (Higher Rankings Are Better)", date: 'August 10', className: "" },
    { id: 19, starClass: "", bookMark: '', subject: 'Facebook', description: "Alireza Zare Login faild", date: 'feb 14', className: "" },
    { id: 20, starClass: "inbox-started", bookMark: '', subject: 'AddMe.com', description: "Submit Your Website to the AddMe Business Directory", date: 'August 10', className: "" },
    { id: 21, starClass: "", bookMark: '', subject: 'Terri Rexer, S P N', description: "Forget Google AdWords: Un-Limited Clicks fo", date: 'April 14', className: "" },
  
  ]
  
  return (

  <div className={styles.MailInbox}>
    <PageHeader titles="Mail-Inbox" active="Mail-Inbox" items={['Pages']} />
    {/* <!-- Row --> */}
    <Row>
      <Col xl={3}>
        <Card>
          <ListGroup className="list-group-transparent mb-0 mail-inbox pb-3" defaultActiveKey='#link'>
            <div className="mt-4 mx-4 mb-4 text-center">
              <Link to={`${process.env.PUBLIC_URL}/pages/mailcompose`} className="btn btn-primary btn-lg d-grid">Compose</Link>
            </div>
            <Link to='#'><ListGroup.Item  className="d-flex align-items-center mx-4">
              <span className="icons"><i className="ri-mail-line"></i></span> Inbox <Badge bg='secondary' className="ms-auto bradius">14</Badge>
            </ListGroup.Item></Link>
            <Link to='#'><ListGroup.Item  eventKey="#link1" className="d-flex align-items-center mx-4">
              <span className="icons"><i className="ri-mail-open-line"></i></span> Drafts
            </ListGroup.Item></Link>
            <Link to='#'><ListGroup.Item eventKey="#link2" className="d-flex align-items-center mx-4">
              <span className="icons"><i className="ri-star-line"></i></span> Starred <Badge bg='success' className="ms-auto bradius">03</Badge>
            </ListGroup.Item></Link>
            <Link to='#'><ListGroup.Item eventKey="#link3" className="d-flex align-items-center mx-4">
              <span className="icons"><i className="ri-price-tag-3-line"></i></span> Tags
            </ListGroup.Item></Link>
            <Link to='#'><ListGroup.Item eventKey="#link4" className="d-flex align-items-center mx-4">
              <span className="icons"><i className="ri-mail-send-line"></i></span> Sent Mail
            </ListGroup.Item></Link>
            <Link to='#'><ListGroup.Item eventKey="#link5" className="d-flex align-items-center mx-4">
              <span className="icons"><i className="ri-delete-bin-line"></i></span> Trash
            </ListGroup.Item></Link>
          </ListGroup>
          <Card.Body className="border-top p-0 py-3">
            <ListGroup className="list-group-transparent mb-0 mail-inbox mx-4">
              <ListGroup.Item className="list-group-item-action d-flex align-items-center py-2">
                <span className="w-3 h-3 brround bg-primary me-2"></span> Friends
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-action d-flex align-items-center py-2">
                <span className="w-3 h-3 brround bg-secondary me-2"></span> Family
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-action d-flex align-items-center py-2">
                <span className="w-3 h-3 brround bg-success me-2"></span> Social
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-action d-flex align-items-center py-2">
                <span className="w-3 h-3 brround bg-info me-2"></span> Office
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-action d-flex align-items-center py-2">
                <span className="w-3 h-3 brround bg-warning me-2"></span> Work
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-action d-flex align-items-center py-2">
                <span className="w-3 h-3 brround bg-danger me-2"></span> Settings
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={9}>
        <Card>
          <Card.Body className="p-6">
            <div className="inbox-body">
              <div className="mail-option">
                <div className="chk-all">
                  <ButtonGroup>
                    <Dropdown className='Inbox-mail'>
                      <Dropdown.Toggle className="p-0 bg-transparent border-0" variant='light' size='sm'>All</Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item to="#"> None</Dropdown.Item>
                        <Dropdown.Item to="#"> Read</Dropdown.Item>
                        <Dropdown.Item to="#"> Unread</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                </div>
                <ButtonGroup>
                  <Link to="#" className="btn mini tooltips p-1">
                    <i className=" fa fa-refresh"></i>
                  </Link>
                </ButtonGroup>
                <ButtonGroup className="hidden-phone">
                  <Dropdown>
                    <Dropdown.Toggle className="py-2 bg-transparent" variant='light' size='sm'>More</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="#"><i className="fa fa-pencil me-2"></i> Mark as Read</Dropdown.Item>
                      <Dropdown.Item to="#"><i className="fa fa-ban me-2"></i> Spam</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item to="#"><i className="fa fa-trash-o me-2"></i> Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ul className="unstyled inbox-pagination">
                  <li><span className="fs-13">1-50 of 234</span></li>

                  <li>
                    <Link className="np-btn" to="#"><i className="fa fa-angle-right pagination-right"></i></Link>
                  </li>
                </ul>
              </div>
              <div className="table-responsive">
                  <Table className="table-inbox table-hover text-nowrap mb-0">
                  <>
                      <tbody>
                        {tableData.map((item) => (
                          <tr className={item.className} key={item.id}>
                            <td className="inbox-small-cells">
                              <Form.Check type="checkbox" id="custom-check" className="mb-0 ms-3" />
                            </td>
                            <td className="inbox-small-cells"><i className={`fa fa-star ${item.starClass}`}></i></td>
                            <td className="inbox-small-cells"><i className={`fa fa-bookmark ${item.bookMark}`}></i></td>
                            <td className="view-message dont-show fw-semibold clickable-row" ><Link to={`${process.env.PUBLIC_URL}/Pages/mailread`} className='text-dark'>{item.subject}</Link></td>
                            <td className="view-message clickable-row" ><Link to={`${process.env.PUBLIC_URL}/Pages/mailread`} className='text-dark'>{item.description}</Link></td>
                            <td className="view-message text-end fw-semibold clickable-row" >{item.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </>
                  </Table>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Pagination>
          <Pagination.Item disabled>Prev</Pagination.Item>
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Item>Next</Pagination.Item>
        </Pagination>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}
  </div>
)
 };

export default MailInbox;

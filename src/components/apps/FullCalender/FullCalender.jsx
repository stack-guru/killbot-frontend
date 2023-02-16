import React, { Component } from 'react';
import { Col, Row, Card, Dropdown } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Link } from 'react-router-dom';
import listWeek from "@fullcalendar/list";


class FullCalenderComponent extends Component {

  state = {

    calendarWeekends: true,

    // Data for ListCalendar******

    calendarEvents1: [
      { id: '1', title: "Event Now1", start: new Date() },
      { id: '2', title: "Event Now2", start: new Date() },
      { id: '3', title: "Event Now3", start: new Date() },
      { id: '4', title: "Event Now4", start: new Date() },
      { id: '5', title: "Event Now5", start: new Date() },
      { id: '6', title: "Event Now6", start: new Date() },
    ],


    // Data for FullCalendar******

    calendarEvents: [
      {
        title: "Atlanta Monster", start: new Date("2019-04-04 00:00"), id: "99999998"
      },
      {
        title: "My Favorite Murder", start: new Date("2019-04-05 00:00"), id: "99999999"
      }
    ],
    events: [

      { title: "My Event 1", id: "1", bg: "bg-primary", border: "border-primary" },
      { title: "My Event 2", id: "2", bg: " bg-secondary", border: "border-secondary" },
      { title: "My Event 3", id: "3", bg: "bg-warning", border: "border-warning" },
      { title: "My Event 4", id: "4", bg: "bg-success", border: "border-success" },
      { title: "My Event 5", id: "5", bg: "bg-danger", border: "border-danger" },

    ],
  };
  componentDidMount() {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");

        return {
          title: title,
          id: id
        };
      }
    });
  }

  eventClick = eventClick => {
    Alert.fire({
      title: eventClick.event.title,
      html:
        `<div class="table-responsive">
      <table class="table">
      <tbody>
      <tr >
      <td>Title</td>
      <td><strong>` +
        eventClick.event.title +
        `</strong></td>
      </tr>
      <tr >
      <td>Start Time</td>
      <td><strong>
      ` +
        eventClick.event.start +
        `
      </strong></td>
      </tr>
      </tbody>
      </table>
      </div>`,

      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Remove Event",
      cancelButtonText: "Close"
    }).then(result => {
      if (result.value) {
        eventClick.event.remove();
        Alert.fire("Deleted!", "Your Event has been deleted.", "success");
      }
    });
  };

  render() {

    return (
      <React.Fragment>
        <PageHeader titles="Full Calendar" active="Full Calendar" items={['Apps']} />
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Calender With different Color Events</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col xl={3} className="animated fadeIn p-4 demo-app">

                    <div id="external-events" style={{ padding: "10px", height: "auto", maxHeight: "-webkit-fill-available" }}>
                      <h4>Draggable Events</h4>
                      {this.state.events.map(event => (
                        <div className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event ${event.bg} ${event.border}`} title={event.title} datatype={event.id} key={event.id}>
                          <div className="fc-event-main"> {event.title}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5">
                      <Card.Title as='h4' className="mb-4">My Schedules</Card.Title>
                      <Card className="border p-0 pt-3">
                        <Card.Body className="pt-3">
                          <Dropdown>
                            <Dropdown.Toggle className='float-end text-muted pe-0 pt-0 no-caret' as='a'><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#"><i className="fe fe-edit me-1"></i> Shedule Date</Dropdown.Item>
                              <Dropdown.Item href="#"><i className="fe fe-trash-2 me-1"></i> Delete</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <Card.Title as='h5'>Design Review</Card.Title>
                          <h6 className="card-subtitle mb-2 text-muted">05-09-2021</h6>
                          <Link to="#" className="btn btn-primary btn-sm me-3 mb-3">Urgent</Link>
                          <Link to="#" className="btn btn-secondary btn-sm mb-3">Face to Face</Link>
                        </Card.Body>
                        <Card.Footer>
                          <div className="media media-xs overflow-visible">
                            <img className="avatar brround avatar-md me-3" src={require("../../../assets/images/users/12.jpg")} alt="avatar-img" />
                            <div className="media-body valign-middle">
                              <Link to={`${process.env.PUBLIC_URL}/pages/profile`} className=" fw-semibold text-dark">John Paige</Link><br />
                              <Link to={`${process.env.PUBLIC_URL}/pages/profile`} className="text-muted mb-0"> View client profile</Link>
                            </div>
                          </div>
                        </Card.Footer>
                      </Card>
                      <Card className="border p-0 pt-3">
                        <Card.Body className="pt-3">
                          <Dropdown className="pe-0 pt-0">
                            <Dropdown.Toggle className='float-end text-muted pe-0 pt-0 no-caret' as='a'><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#"><i className="fe fe-edit me-1"></i> Shedule Date</Dropdown.Item>
                              <Dropdown.Item href="#"><i className="fe fe-trash-2 me-1"></i> Delete</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                         
                          <Card.Title as='h5'>New Project</Card.Title>
                          <h6 className="card-subtitle mb-2 text-muted">14-10-2021</h6>
                          <Link to="#" className="btn btn-primary btn-sm me-3 mb-3">Urgent</Link>
                          <Link to="#" className="btn btn-danger btn-sm mb-3">Online Meeting</Link>
                        </Card.Body>
                        <Card.Footer>
                          <div className="media media-xs overflow-visible">
                            <img className="avatar brround avatar-md me-3" src={require("../../../assets/images/users/16.jpg")} alt="avatar-img" />
                            <div className="media-body valign-middle">
                              <Link to={`${process.env.PUBLIC_URL}/pages/profile`} className=" fw-semibold text-dark">Mozelle Belt</Link><br />
                              <Link to={`${process.env.PUBLIC_URL}/pages/profile`} className="text-muted mb-0"> View client profile</Link>
                            </div>
                          </div>
                        </Card.Footer>
                      </Card>
                    </div>
                  </Col>
                  <Col xl={9} className="demo-app-calendar" id="mycalendartest">
                    <FullCalendar initialView="dayGridMonth"
                      headerToolbar={{ start: "prev,next today", center: "title", end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek" }}
                      rerenderDelay={10}
                      eventDurationEditable={false}
                      editable={true}
                      droppable={true}
                      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                      events={this.state.calendarEvents}
                      eventClick={this.eventClick}
                      selectable={true}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">List Calendar</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className='list-calender'>
                  <FullCalendar initialView="listWeek" plugins={[listWeek]} events={this.state.calendarEvents1} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
};

export default FullCalenderComponent;




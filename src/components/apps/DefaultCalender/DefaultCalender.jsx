import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import PageHeader from '../../../Layouts/PageHeader/PageHeader';

class DefaultCalender extends Component {

  render() {

    return (
      <div>
        {/* <!-- PAGE-HEADER --> */}
        <PageHeader titles="Default Calender" active="Default Calender" items={['Apps']} />

        {/* <!-- ROW OPEN--> */}
        <div className="">
          <Card>
            <Card.Body>
              <div >
                <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  headerToolbar={{
                    left: "prev",
                    center: "title",
                    right: "next",
                  }}
                  initialView="dayGridMonth"
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                />
              </div>
            </Card.Body>
          </Card>
        </div>
        {/* <!-- ROW CLOSE--> */}
      </div>
    )
  }
};

export default DefaultCalender;

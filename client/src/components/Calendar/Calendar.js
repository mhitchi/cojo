import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Sidebar from "../Sidebar";
import "./CalendarStyles.css";
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel, DataManager, WebApiAdaptor } from "@syncfusion/ej2-react-schedule";

// https://www.youtube.com/watch?v=iNkryf_TtZw

class Calendar extends Component {
  constructor(props) {
    super(props)
      this.state = {
        events: []
      }
  }

  localData: EventSettingsModel = {
    dataSource: [{
      EndTime: new Date( 2020,3,11,6,30),
      StartTime: new Date( 2020,3,11,4,0)
    }]
  }

  render() {
    return (
      <>
      <Row>
        <Sidebar page="myprofile"/>
        <Col md={10}>
          <ScheduleComponent currentView="Month">
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </Col>
      </Row>
      </>
    );
  }
}

export default Calendar;
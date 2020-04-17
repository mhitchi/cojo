import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Sidebar from "../Sidebar";
import "./CalendarStyles.css";
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-react-schedule";

class Calendar extends Component {
  constructor(props) {
    super(props)
      this.state = {
        events: []
      }
  }

  render() {
    return (
      <>
      <ScheduleComponent>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
      </>
    );
  }
}

export default Calendar;
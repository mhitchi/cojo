import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Sidebar from "../Sidebar";
// import ApiCalendar from 'react-google-calendar-api';
import dateFns from "date-fns";

class Calendar extends Component {
  render() {
    return (
      <>
      <Row>
        <Sidebar page="calendar"/>
        <Col xs={3}>
          <h1>Calendar Component</h1>
          <div>
            <div>Header</div>
            <div>Days</div>
            <div>Cells</div>
          </div>
        </Col>
      </Row>
      </>
    )
  }
};

export default Calendar;
import React, { Component } from "react";
import ApiCalendar from 'react-google-calendar-api';
import dateFns from "date-fns";

class Calendar extends Component {
  render() {
    return (
      <>
      <h1>Calendar Component</h1>
      <div>
        <div>Header</div>
        <div>Days</div>
        <div>Cells</div>
      </div>
      </>
    )
  }
};

export default Calendar;
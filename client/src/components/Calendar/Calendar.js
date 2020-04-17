import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Sidebar from "../Sidebar";
import "./CalendarStyles.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/sass/styles';
// import 'react-big-calendar/lib/addons/dragAndDrop/styles';

const localizer = momentLocalizer(moment)

const calendar_configuration = {
  api_key: 'AIzaSyD9CaNV_zJ8KyLbN52dtkHQdYrhTuDFv5s',
  calendars: [
    {
      name: 'demo',
      url: 'mayhitchings@gmail.com'
    }
  ],
  dailyRecurrence: 700,
  weeklyRecurrence: 500,
  monthlyRecurrence: 20
}

class App_Calendar extends Component {
  constructor(props) {
    super(props)
      this.state = {
        events: []
      }
  }

  render() {
    return (
      <Calendar
        events={this.state.events}
        config={calendar_configuration} 
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}/>
    );
  }
}

export default App_Calendar;
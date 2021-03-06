import React from 'react';
import Landing from "./pages/Landing";
import Login from "./pages/LoginPage";
import Profile from "./pages/Profile";
import Directory from "./pages/DirectoryPage";
import Feedback from "./pages/Feedback";
import CalendarPage from "./pages/CalendarPage";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
require('dotenv').config();

function App() {
  return (
    <>
    {/* ROUTER HERE surrounded by firebaseauthprovider */}
    <Router>
      {/* iffirebaseauthed return */}
      <Switch>
        <Route exact path="/landing" component={Landing}/>
        <Route exact path="/" render={() => <Redirect to="/myprofile"></Redirect>} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/myprofile" render={() => (
          <Profile /> //pass props
        )} />
        <Route exact path="/directory" render={() => (
          <Directory /> //pass props
        )} />
        <Route exact path="/feedback" render={()=> (
          <Feedback /> //pass props
        )} />
        <Route exact path="/calendar" render={() => (
          <CalendarPage /> //pass props
        )} />
      </Switch>
    </Router>
    </>
  );
}

export default App;

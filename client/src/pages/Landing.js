// intro to the app
// button -> login
// button -> create account for company, get companyID

import React from "react";
import About from "../components/About";
import { Jumbotron, Button } from "reactstrap";

function Landing() {
  return (
    <>
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a landing page.</p>
        <hr className="my-2" />
        <p>It's for landing and stuff</p>
        <p className="lead">
          <Button color="primary" href="/login">Get Started</Button>
        </p>
      </Jumbotron>
    </div>
    <About />
    </>
  )
}

export default Landing;
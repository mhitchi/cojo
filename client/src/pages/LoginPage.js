//login
//firebase
// button -> profile with userID and companyID
import React from "react";
import Login from "../components/Login";
import { Button } from "reactstrap";

const LoginPage = () => {
  return (
    <>
    <Login />
    <Button color="primary" href="/myprofile">Go to Profile</Button>
    </>
  )
};

export default LoginPage;
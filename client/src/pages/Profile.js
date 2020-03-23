//profiles for user and coworkers
//companyID determines directory/calendar
//if user's, editable
  //sidebar includes:
    //directory for companyID
    //calendar for companyID
    //feedback for companyID
    //user's weekly pair's name
//if coworker's, not editable
  //sidebar includes:
    //directory for companyID
    //calendar for companyID
    //feedback for companyID
    //user's weekly pair's name

//image from url
//info //edit buttons for user
//sidebar -> directory || calendar || feedback || pair's profile
import React from "react";
import Header from "../components/Header";
import CoProfile from "../components/CoProfile";
import MyProfile from "../components/MyProfile";

const Profile = () => {
  return (
    <>
    <Header />
    <MyProfile />
    <CoProfile />
    </>
  )
};

export default Profile;
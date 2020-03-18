//feedback form for companyID, sent automatically to the creator of the company account

//header with user image -> profile
//sidebar -> directory || calendar || feedback || pair's profile
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import FeedbackForm from "../components/FeedbackForm";

const Feedback = () => {
  return (
    <>
    <Header />
    <Sidebar />
    <FeedbackForm />
    </>
  )
}

export default Feedback;
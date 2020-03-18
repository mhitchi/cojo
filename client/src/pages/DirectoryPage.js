//list of names for that companyID with email, department

//each name -> profile

//header with user image -> profile
//list of coworkers
//sidebar -> directory || calendar || feedback || pair's profile
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Directory from "../components/Directory";

const DirectoryPage = () => {
  return (
    <>
    <Header />
    <Sidebar />
    <Directory />
    </>
  )
}

export default DirectoryPage;
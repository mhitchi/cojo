import React, { useEffect } from "react";
import employeeFetch from "../../utils/employeeFetch";

const Directory = () => {
  let employeeArr = [];
  const getAllEmployees = coID => {
    employeeFetch.fetchAll(coID).then(res => {
      res.data.forEach(employee => {
        employeeArr.push(employee)
      })
    })
  }

  useEffect(() => {
    getAllEmployees(1);
  })

  return (
    <>
    <h1>Directory component</h1>
    <ul>
      {employeeArr.map(employee => <li>{employee.name}</li>)}
    </ul>
    </>
  )
};

export default Directory;
# cojo
Build connections within your company.

## About
It can be hard to build a friendly and open company culture, but the facts are that highly engaged workspaces are more efficient and profitable and have significantly lower turnover rates than workspaces that are less engaged. Cojo is a tool for coworkers to take charge of their work relationships and build an environment where people feel valued and seen.

## Research

- 63.3% of companies say retaining employees is actually harder than hiring them.
- As a result, US employers spend $2.9M per day looking for replacement workers. That's $1.1B per year.
- 69% of employees say they’d work harder if they were better appreciated.
- Overall, companies with high employee engagement are 21% more profitable.
- Highly engaged workplaces see 41% lower absenteeism. 
- Disengaged employees cost organizations around $450-550 billion each year.

# Sources: 
  - https://blog.smarp.com/employee-engagement-8-statistics-you-need-to-know
  - https://www.forbes.com/sites/alankohll/2018/08/14/how-to-build-a-positive-company-culture/#328ee59a49b5
  - https://builtin.com/company-culture/building-company-culture

## Features

- employee profile pages
  - contact info
  - department/ job
  - birthday
  - date hired
  - holidays
  - favorite snacks
  - coffee order
  - dietary restrictions
- google calendar
  - autofilled with everyone's important dates
  - editable by every user
- random weekly pairings for lunches/coffee
- feedback forms 

## User Stories

# Employee
As an employee, I want to invest in building relationships with the people I work with every day so that I enjoy my work more and communicate more easily with my coworkers.

# Employer
As an employer, I want to build a thriving company culture so that my company has lower turnover and higher productivity.

## MVP
- login to workspace
- employee profile pages
  - editable by user
- google calendar
  - autofilled
  - editable by all
- random pairings
- feedback forms

## Tech

Cojo is built and deployed using the MERN (Mongo, Express, React, Node) stack. Information is displayed to the user via React. Express and Node handle server-side functionality. User data is stored using MongoDB with Mongoose as the ORM.

Authenication flow is handled with Firebase Authentication. Users are able to securely log in with Google or anonymously to access features.

Cojo will be deployed via Heroku with MLabs as the cloud DB provider.
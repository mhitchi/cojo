import React from "react";
import styles from "./SidebarStyles";
import { Col, Nav, NavItem, NavLink } from "reactstrap";

const Sidebar = (props) => {
  return (
    <>
    <Col xs={2}>
      <Nav vertical style={styles.nav}>
        <NavItem >
          <NavLink href="/directory" style={props.page === "directory" ? styles.item : styles.currentItem}>Directory</NavLink>
        </NavItem>
        <NavItem >
          <NavLink href="/calendar" style={props.page === "calendar" ? styles.item : styles.currentItem}>Calendar</NavLink>
        </NavItem>
        <NavItem >
          <NavLink href="/myprofile" style={props.page === "myprofile" ? styles.item : styles.currentItem}>My Pair</NavLink>
        </NavItem>
        <NavItem >
          <NavLink href="/feedback" style={props.page === "feedback" ? styles.item : styles.currentItem}>Feedback</NavLink>
        </NavItem>
      </Nav>
    </Col>
    </>
  )
};

export default Sidebar;
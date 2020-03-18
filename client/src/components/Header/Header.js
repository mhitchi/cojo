import React from "react";
import { Row, Col, Button } from "reactstrap";
import styles from "./HeaderStyles";

const Header = () => {
  return (
    <>
    <Row fluid={true} style={styles.background}>
      <Col xs={2} style={styles.logo}>
        <h1>COJO</h1>
      </Col>
      <Col xs={1} style={styles.userIcon}>
        <Button outline color="warning" href="/myprofile">User</Button>
      </Col>
      <Col xs={8}></Col>
      <Col xs={1} style={styles.helpIcon}>
        <Button outline color="secondary">?</Button>
      </Col>
    </Row>
    </>
  )
};

export default Header;
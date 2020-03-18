import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import styles from "./HeaderStyles";

const Header = () => {
  return (
    <>
    <Container fluid={true} style={styles.background}>
      <Row>
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
    </Container>
    </>
  )
};

export default Header;
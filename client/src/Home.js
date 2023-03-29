import React from "react";
import Chats from "./Chats";
import Notes from "./Notes";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = ({ user }) => {
  return (
    <Container fluid>
      <Row>
        <Col xs={6}>
          <Chats user={user} />
        </Col>
        <Col>
          <Notes user={user} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

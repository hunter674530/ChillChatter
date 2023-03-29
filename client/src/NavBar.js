import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./App.css";

const NavBar = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>ChillChatter</h1>
          </Col>
          <Col>
            <Button variant="primary" size="lg">
              <Link to="/home" style={{ color: "black" }}>
                Home
              </Link>
            </Button>
          </Col>
          <Col>
            <Button variant="primary" size="lg">
              <Link to="/chats" style={{ color: "black" }}>
                Chats
              </Link>
            </Button>
          </Col>
          <Col>
            <Button variant="primary" size="lg">
              <Link to="/notes" style={{ color: "black" }}>
                Notes
              </Link>
            </Button>
          </Col>
          <Col>
            <Button variant="danger" size="lg">
              <Link to="/" style={{ color: "black" }}>
                Logout
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>

      <Outlet />
    </div>
  );
};

export default NavBar;

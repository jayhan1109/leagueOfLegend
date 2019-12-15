import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Nav } from "react-bootstrap";
import styled from "styled-components";
import { NavLink,Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../reducers/auth";

const ContainerBlock = styled.div`
  justify-content: center;
  align-items: center;
  height: 90vh;
  display: flex;

  .container {
    margin-top: -20%;
  }

  .footer {
    margin-top: 1.5rem;
  }

  h5 {
    display: flex;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
  }

  .toRegister {
    padding: 0;
    margin-left: 1rem;
  }
`;

const Login = ({ login,auth:{isAuthenticated} }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login({ email, password });
  };

  // Redirect if Sign up
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <ContainerBlock>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </Form.Group>

              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
            <div className="footer">
              <h5>
                Don't have an account?{" "}
                <Nav.Link
                  as={NavLink}
                  to="/register"
                  exact
                  className="toRegister"
                >
                  Register
                </Nav.Link>
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </ContainerBlock>
  );
};

export default connect(state=>({
    auth:state.auth
}), {
  login
})(Login);

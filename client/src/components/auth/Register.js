import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Nav } from "react-bootstrap";
import styled from "styled-components";
import { NavLink,Redirect } from "react-router-dom";
import { setAlert } from "../../reducers/alert";
import { connect } from "react-redux";
import { register } from "../../reducers/auth";


const ContainerBlock = styled.div`
  justify-content: center;
  align-items: center;
  height: 90vh;
  display: flex;

  .container {
    margin-top: -10%;
  }

  .footer{
      margin-top:1.5rem;
  }

  h5{
    display:flex;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
  }

  .toLogin{
      padding:0;
      margin-left:1rem;
  }
`;

const Register = ({ setAlert, register,auth:{isAuthenticated} }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    password2: ""
  });

  const { email, name, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password does not match", "danger");
    } else {
      register({ email, name, password });
    }
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
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="name">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="name"
                  value={name}
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

              <Form.Group controlId="formBasicPassword2">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  name="password2"
                  value={password2}
                  onChange={onChange}
                />
              </Form.Group>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
            <div className="footer">
              <h5>
                Already have an account?{" "}
                <Nav.Link as={NavLink} to="/login" exact className="toLogin">
                  Login
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
  setAlert,
  register
})(Register);

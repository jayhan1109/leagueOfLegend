import React, { Fragment, useEffect } from "react";
import { Route,Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import NavbarTop from "./components/layout/NavbarTop";
import "./App.css";
import AlertComponent from "./components/layout/AlertComponent";
import { Container } from "react-bootstrap";
import setAuthToken from "./utils/setAuthToken";
import {store} from './index'
import{loadUser} from './reducers/auth';
import LeaderBoard from "./components/pages/LeaderBoard";

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <Fragment>
      <NavbarTop />
      <Route exact path="/" component={Landing} />
      <Container>
      <AlertComponent />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/leaderboard" component={LeaderBoard} />
        </Switch>

      </Container>
    </Fragment>
  );
};

export default App;

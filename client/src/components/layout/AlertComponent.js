import React from "react";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";
import styled from 'styled-components';

const AlertBlock = styled(Alert)`
  margin-top:5%;
`

const AlertComponent = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <AlertBlock key={alert.id} variant={alert.alertType}>
      {alert.msg}
    </AlertBlock>
  ));

export default connect(state => ({
  alerts: state.alert
}))(AlertComponent);

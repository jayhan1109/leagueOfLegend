import React, { Fragment } from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import { MediaQuery } from "../layout/MediaQuery";

const Category = styled.div`
  position: relative;
  word-wrap: break-word;
  background-color: #555;
  background-clip: border-box;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  width: 100%;
  height: 3rem;
  margin-top: 1.2rem;

  .rowStyle {
    margin-right: 0;
    margin-left: 0;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  
  .ratio {
    display: none;

    @media ${MediaQuery.md} {
      display: block;
    }
  }
`;

const RankCategory = () => {
  return (
    <Fragment>
      <Category>
        <Row className="rowStyle">
          <Col xs={2} md={2}>
            &nbsp;
          </Col>
          <Col xs={6} md={4}>
            Summoners
          </Col>
          <Col xs={4} md={2}>
            LP
          </Col>
          <Col md={4} className="ratio">
            Win Ratio
          </Col>
        </Row>
      </Category>
    </Fragment>
  );
};

export default RankCategory;

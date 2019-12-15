import React, { Fragment } from "react";
import styled from "styled-components";
import { Col, Row, ProgressBar } from "react-bootstrap";
import { MediaQuery } from "../layout/MediaQuery";

const Container = styled.div`
  position: relative;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  color: #555;
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

  .num {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .name {
  }

  .lp {
  }

  .ratio {
    display: none;

    @media ${MediaQuery.md} {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &_chart{
        flex:0 0 80%;
      }

      &_text{
        
      }
    }
  }
`;

const RankCard = ({ id, name, lp, win, lose }) => {
  return (
    <Fragment>
      <Container>
        <Row className="rowStyle">
          <Col xs={2} md={2} className="num">
            {id}
          </Col>
          <Col xs={6} md={4} className="name">
            {name}
          </Col>
          <Col xs={4} md={2} className="lp">
            {lp}
          </Col>
          <Col md={4} className="ratio">
            <div className="ratio_chart">
              <ProgressBar now={(win/(lose+win))*100} label={`W${win} / L${win+lose}`}/>
            </div>
            <div className="ratio_text">{parseFloat(win/(lose+win)*100).toFixed(2)+"%"}</div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default React.memo(RankCard);

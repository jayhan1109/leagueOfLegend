import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { InputGroup, FormControl, Button, Card } from "react-bootstrap";
import { MediaQuery } from "../layout/MediaQuery";
import { findUser } from "../../reducers/search";
import { connect } from "react-redux";

const SearchBlock = styled.div`
  width: 100%;
  height: 100%;

  .searchForm {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;

    @media ${MediaQuery.md} {
      width: 50%;
    }
  }
`;

const ResultBlock = styled.div`
  width: 100%;
  height: 100%;
  .cardo {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Landing = ({ findUser, summoner }) => {
  useEffect(() => {
    findUser("");
  }, [findUser]);
  const [username, setUsername] = useState("");

  const onChange = e => {
    setUsername(e.target.value);
  };

  const find = () => {
    findUser({ username });
  };

  return (
    <Fragment>
      {summoner.user == null || summoner.user.name === "Undefined" ? (
        <SearchBlock>
          <InputGroup className="mb-3 searchForm">
            <FormControl value={username} onChange={onChange} />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={find}>
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </SearchBlock>
      ) : (
        <ResultBlock>
          <Card
            bg="dark"
            text="white"
            style={{ width: "18rem" }}
            className="cardo"
          >
            <Card.Header>Summoner</Card.Header>
            <Card.Body>
              <Card.Title>{summoner.user.name}</Card.Title>
              <Card.Text>
                Level : {summoner.user.summonerLevel}
              </Card.Text>
            </Card.Body>
          </Card>
        </ResultBlock>
      )}
    </Fragment>
  );
};

export default connect(
  state => ({
    summoner: state.search
  }),
  {
    findUser
  }
)(Landing);

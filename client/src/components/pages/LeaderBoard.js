import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { getChallenger } from "../../reducers/rank";
import RankCard from "../pageItem/RankCard";
import styled from "styled-components";
import RankCategory from "../pageItem/RankCategory";
import { Button } from "react-bootstrap";

const LeaderBoardBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;

  .page_btn {
    display: flex;
    margin-top: 2rem;
    width: 20%;
    justify-content: space-around;
  }
`;

const LeaderBoard = ({ getChallenger, rank: { challenger, loading } }) => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    getChallenger();
  }, [getChallenger]);

  const pageBtn = type => {
    if (type === "next") {
      setPage(page => page + 1);
    } else {
      setPage(page => page - 1);
    }
  };

  return (
    <Fragment>
      {loading || challenger == null ? (
        <div>Loading...</div>
      ) : (
        <LeaderBoardBlock>
          <RankCategory />
          {challenger.slice(page * 20, (page + 1) * 20).map((card, index) => (
            <RankCard
              key={index}
              id={page*20+1+index}
              name={card.summonerName}
              lp={card.leaguePoints}
              win={card.wins}
              lose={card.losses}
            />
          ))}

          <div className="page_btn">
            {page !== 0 && <Button variant="outline-dark back" onClick={()=>pageBtn('back')}>Back</Button>}
            {page !== 9 && <Button variant="outline-dark next" onClick={()=>pageBtn('next')}>Next</Button>}
          </div>
        </LeaderBoardBlock>
      )}
    </Fragment>
  );
};

export default connect(
  state => ({
    rank: state.rank
  }),
  {
    getChallenger
  }
)(React.memo(LeaderBoard));

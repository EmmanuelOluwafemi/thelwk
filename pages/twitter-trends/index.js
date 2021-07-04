import React from "react";
import styled from "styled-components";
import { LoggedHeader } from "../../components/Header";
import LeftSection from "../../parts/twitter-trend/LeftSection";
import MiddleSection from "../../parts/twitter-trend/MiddleSection";
import RightSection from "../../parts/twitter-trend/RightSection";

const Twitter = () => {
  return (
    <>
      <LoggedHeader />
      <TwitterStyles>
        <LeftSection />
        <div id="wr">
          <MiddleSection />
          <RightSection />
        </div>
      </TwitterStyles>
    </>
  );
};

export default Twitter;

const TwitterStyles = styled.div`
  width: 100%;
  min-height: 90vh;
  background: #e1f6ff;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem;

  @media screen and (max-width: 789px) {
    display: block;
    padding: 1rem;
  }

  #wr {
    width: 78%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width: 789px) {
      display: block;
      width: 100%;
      margin-top: 1.3rem;
    }
  }
`;

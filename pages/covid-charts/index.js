import React from "react";
import styled from "styled-components";
import ChartLayout from "../../layout/chartLayout/ChartLayout";

const Covid19Charts = () => {
  return (
    <>
      <ChartLayout>
        <CovidChartsStyles>jifjiri</CovidChartsStyles>
      </ChartLayout>
    </>
  );
};

export default Covid19Charts;
const CovidChartsStyles = styled.div`
  padding: 2rem;

  @media screen and (max-width: 789px) {
    padding: 1rem;
  }
`;

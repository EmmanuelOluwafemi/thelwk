import React from "react";
import styled from "styled-components";
import images from "../../assets/images";
import TweetCard from "../../components/cards/tweetCard";

const MiddleSection = () => {
  const { tweetAvatar1, tweetAvatar4, tweetPhoto1, tweetPhoto2 } = images;
  return (
    <>
      <MiddleSectionStyles>
        <TweetCard
          userPhoto={tweetAvatar1}
          userFullName="John Smith"
          userName="john_smith20"
          tweet="Hey, guys, check out these views of mountains"
          tweetPhotos={[tweetPhoto1, tweetPhoto2]}
          likes="30"
          retweets="345"
        />
        <TweetCard
          userPhoto={tweetAvatar1}
          userFullName="John Smith"
          userName="john_smith20"
          tweet="Hey, guys, check out these views of mountains"
          likes="30"
          retweets="345"
        />
      </MiddleSectionStyles>
    </>
  );
};

export default MiddleSection;
const MiddleSectionStyles = styled.div`
  width: 49%;
  @media screen and (max-width: 789px) {
    width: 100%;
  }
`;

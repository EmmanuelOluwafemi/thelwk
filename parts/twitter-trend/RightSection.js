import React from "react";
import styled from "styled-components";
import images from "../../assets/images";
import TweetCard from "../../components/cards/tweetCard";

const RightSection = () => {
  const { tweetAvatar3, tweetAvatar2 } = images;

  const options = [
    tweetAvatar3,
    tweetAvatar2,
    tweetAvatar2,
    tweetAvatar2,
    tweetAvatar3,
    tweetAvatar3,
    tweetAvatar2,
    tweetAvatar2,
  ];
  return (
    <>
      <RightSectionStyles>
        {options.map((option, index) => (
          <TweetCard
            userPhoto={option}
            key={option + index}
            userFullName="John Smith"
            userName="john_smith20"
            tweet="Hey, guys, check out these views of mountains"
            likes="30"
            retweets="345"
          />
        ))}
      </RightSectionStyles>
    </>
  );
};

export default RightSection;
const RightSectionStyles = styled.div`
  width: 48%;

  @media screen and (max-width: 789px) {
    width: 100%;
  }
`;

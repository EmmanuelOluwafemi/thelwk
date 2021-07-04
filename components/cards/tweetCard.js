import React from "react";
import { AiFillHeart, AiOutlineRetweet } from "react-icons/ai";
import styled from "styled-components";

const TweetCard = ({
  userPhoto,
  userName,
  userFullName,
  tweetPhotos,
  likes,
  retweets,
  tweet,
}) => {
  return (
    <>
      <TweetCardStyles>
        <div id="fl">
          <div className="top">
            <div className="avatar">
              <img src={userPhoto} alt={userFullName} />
            </div>
          </div>
          <div className="body">
            <div className="user-details">
              <h5>{userFullName}</h5>
              <p>&#64;{userName}</p>
            </div>
            <p id="tweet">{tweet}</p>
            {tweetPhotos && tweetPhotos.length ? (
              <div className="images">
                {tweetPhotos.map((tweetPhoto) => (
                  <img src={tweetPhoto} alt="Tweet has an image" />
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <div className="footer">
          <div>
            <span id="rt">
              <AiOutlineRetweet />
            </span>
            <p>{retweets}</p>
          </div>
          <div>
            <span id="lk">
              <AiFillHeart />
            </span>
            <p>{likes}</p>
          </div>
        </div>
      </TweetCardStyles>
    </>
  );
};

export default TweetCard;
const TweetCardStyles = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 30px;
  padding: 1.2rem;
  margin-bottom: 1.3rem;
  cursor: pointer;

  #fl {
    display: flex;
    align-items: flex-start;
    .top {
      display: flex;
      align-items: center;

      .avatar {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        overflow: hidden;
        @media screen and (max-width: 789px) {
          width: 35px;
          height: 35px;
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 100%;
          object-fit: cover;
        }
      }
    }

    .body {
      margin-left: 1.2rem;
      .user-details {
        display: flex;
        padding-top: 1rem;
        @media screen and (max-width: 789px) {
          padding-top: 0rem;
        }

        p {
          font-size: 0.9rem;
          color: #999999;
          margin-left: 2rem;

          @media screen and (max-width: 330px) {
            margin-left: 1rem;
          }
        }
      }

      #tweet {
        font-size: 0.9rem;
        margin: 2rem 0;
        @media screen and (max-width: 789px) {
          margin: 0;
          margin-bottom: 1rem;
        }
      }

      .images {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        img {
          display: block;
          width: 48%;
          height: 120px;
          border-radius: 10px;
          object-fit: cover;

          @media screen and (max-width: 789px) {
            height: 80px;
          }
        }
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;

    div {
      display: flex;
      align-items: center;

      p {
        font-weight: 600;
        margin-left: 0.5rem;

        @media screen and (max-width: 789px) { 
          margin-bottom: 0;
        }
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        &#rt {
          width: 34px;
          height: 34px;
          background: #b8e9ff;
          border-radius: 100%;

          svg {
            color: #169fdb;
          }
        }

        &#lk {
          svg {
            font-size: 1.8rem;
            color: #ff0000;
          }
        }
      }
    }
  }
`;

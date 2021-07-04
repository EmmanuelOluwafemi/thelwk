import React, { useState } from "react";
import "antd/dist/antd.css";
import { Drawer } from "antd";
import { AiOutlineTwitter } from "react-icons/ai";
import styled from "styled-components";
import { BiMenuAltRight } from "react-icons/bi";

const LeftSection = () => {
  const arr = [
    "as",
    "ad",
    "adas",
    "dak",
    "asd",
    "as4",
    "rsd",
    "asx",
    "dsa",
    "sda",
  ];

  // Mobile Drawer
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  // set active nav

  const [active, setActive] = useState("as");

  const navClicked = (element) => {
    setActive(element);
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <>
      <LeftSectionStyles>
        <div className="input">
          <input type="text" placeholder="Search Twitter" />
        </div>
        <div id="title">
          <h3>
            Twitter Trends <AiOutlineTwitter />
          </h3>
          <BiMenuAltRight id="toggle" onClick={showDrawer} />
        </div>
        <TweetNav className="mb">
          {arr.map((element) => (
            <div
              className={active === element ? "card active" : "card"}
              key={element}
              onClick={() => setActive(element)}
            >
              <h5>She’s 15</h5>
              <p>9, 569 tweets</p>
            </div>
          ))}
        </TweetNav>
        <Drawer
          title="Trending Today"
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visible}
          width="75%"
        >
          <TweetNav>
            {arr.map((element) => (
              <div
                className={active === element ? "card active" : "card"}
                key={element}
                onClick={() => navClicked(element)}
              >
                <h5>She’s 15</h5>
                <p>9, 569 tweets</p>
              </div>
            ))}
          </TweetNav>
        </Drawer>
      </LeftSectionStyles>
    </>
  );
};

export default LeftSection;
const LeftSectionStyles = styled.div`
  width: 20%;
  position: sticky;
  top: 5%;

  @media screen and (max-width: 789px) {
    position: static;
    width: 100%;
  }

  .mb {
    padding: 1rem;

    @media screen and (max-width: 789px) {
      display: none;
    }
  }

  .input {
    width: 100%;
    padding-bottom: 0.5rem;
    input {
      width: 100%;
      background: #fff;
      border-radius: 50px;
      padding: 0.7rem;
      outline: none;
      border: none;
    }
  }
  #title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      display: flex;
      align-items: center;
      margin: 1.2rem 0;
      font-size: 0.9rem;

      svg {
        color: #3dc8f9;
        margin-left: 0.6rem;
        font-size: 1.4rem;
      }
    }

    #toggle {
      display: none;
      @media screen and (max-width: 789px) {
        display: block;
        font-size: 1.5rem;
      }
    }
  }
`;

const TweetNav = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: 16px;

  .card {
    width: 100%;
    height: 60px;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #b8e9ff;
    border-radius: 14px;
    cursor: pointer;

    &.active {
      background: #b8e9ff;
    }

    p {
      font-size: 0.79rem;
      color: #ababab;
      margin: 0;
      margin-top: 0.5rem;
    }
  }
`;

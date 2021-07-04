import React, { useState } from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import { FiEdit } from "react-icons/fi";
import images from "../../assets/images";
import { GrAdd } from "react-icons/gr";

const LeftSide = ({ showDrawer }) => {
  return (
    <>
      <LeftSideStyles>
        <div className="user">
          <div className="avatar">
            <img src={images.avatar1} alt="avatar" />
            <span onClick={showDrawer}>
              <GrAdd />
            </span>
          </div>
          <div className="user-info">
            <h3>Solaru Olusegun</h3>
            <p>segunsolaru@gmail.com</p>
          </div>
        </div>
        <div className="update-user">
          <div className="card">
            <p>Username</p>
            <div>
              <h6>Shegz</h6>
              <FiEdit />
            </div>
          </div>
          <div className="card">
            <p>Date of birth</p>
            <div>
              <h6>08 Apr, 2000</h6>
              <FiEdit />
            </div>
          </div>
        </div>
      </LeftSideStyles>
    </>
  );
};

export default LeftSide;
const LeftSideStyles = styled.div`
  width: 25%;
  height: 100%;
  background: #fff;
  font-family: Gilroy;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 3rem;

  @media screen and (max-width: 789px) {
    width: 100%;
    margin-top: 1rem;
  }

  .user {
    .avatar {
      width: 140px;
      height: 140px;
      border-radius: 100px;
      overflow: hidden;
      margin: auto;
      position: relative;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }

      span {
        position: absolute;
        bottom: 15%;
        right: 15%;
        width: 25px;
        height: 25px;
        background: #e1f6ff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;

        @media screen and (min-width: 789px) {
          display: none;
        }
      }
    }

    h3 {
      font-size: 1.8rem;
      text-align: center;
      color: #0c2333;
      margin: 1.2rem auto 0;
    }

    p {
      font-size: 0.85rem;
      text-align: center;
      color: #757575;
    }
  }

  .update-user {
    width: 100%;
    background: #e2fdff;
    border-radius: 30px;
    margin-top: 3rem;
    padding: 1.5rem;

    .card {
      &:nth-child(1) {
        margin-bottom: 2rem;
      }
      p {
        font-size: 0.75rem;
        color: #9c9c9c;
      }

      div {
        margin-top: 0.7rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h6 {
          font-size: 0.9rem;
          color: #0c2333;
        }

        svg {
          color: #3376bc;
          cursor: pointer;
        }
      }
    }
  }
`;

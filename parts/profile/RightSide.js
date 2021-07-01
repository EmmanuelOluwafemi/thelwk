import React, { useState } from "react";
import styled from "styled-components";
import { BsFillHeartFill } from "react-icons/bs";
import { GrPlayFill } from "react-icons/gr";
import images from "../../assets/images";

const RightSide = () => {
  const [active, setActive] = useState("avatar1");
  const [activeUrl, setActiveUrl] = useState("avatar1");

  const {
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
  } = images;

  const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
  ];

  switch (active) {
    case "avatar1":
      break;

    default:
      break;
  }

  return (
    <>
      <RightSideStyles>
        <div className="gallery-card">
          <div className="title">
            <h3>Change Avatar</h3>
            <button>Save</button>
          </div>
          <div className="avatars">
            {avatars.map((avatar, index) => (
              <div
                className={
                  active === "avatar" + (index + 1) ? "avatar active" : "avatar"
                }
                onClick={() => setActive("avatar" + (index + 1))}
              >
                <img src={avatar} alt={avatar} />
              </div>
            ))}
          </div>
        </div>

        <div className="ctas">
          <div className="cta">
            <div className="icon">
              <BsFillHeartFill />
            </div>
            <div className="words">
              <h3>3000</h3>
              <p>Likes</p>
            </div>
          </div>
          <div className="cta">
            <div className="icon">
              <GrPlayFill />
            </div>
            <div className="words">
              <h3>3000</h3>
              <p>Previews</p>
            </div>
          </div>
        </div>
      </RightSideStyles>
    </>
  );
};

export default RightSide;
const RightSideStyles = styled.div`
  width: 72%;

  .gallery-card {
    width: 65%;
    height: auto;
    background: #ffffff;
    border-radius: 30px;
    margin-top: 2rem;
    padding: 1.5rem;

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-size: 1.2rem;
        color: #0c2333;
      }

      button {
        width: 90px;
        height: 35px;
        background: #3376bc;
        border: 1.5px solid #3376bc;
        box-sizing: border-box;
        border-radius: 60px;
        cursor: pointer;
        color: #e2fdff;
        transition: opacity 0.4s ease-in-out;
        &:hover {
          opacity: 0.4;
        }
      }
    }

    .avatars {
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      .avatar {
        width: 85px;
        height: 85px;
        overflow: hidden;
        border-radius: 100%;
        cursor: pointer;
        margin: 1.5rem;

        img {
          width: 100%;
          height: 100%;
        }

        &.active {
          border: 3px solid #3dc8f9;
        }
      }
    }
  }

  .ctas {
    width: 65%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.7rem;

    .cta {
      width: 45%;
      padding: 1.3rem;
      border-radius: 30px;
      display: flex;

      .icon {
        width: 43px;
        height: 43px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        svg {
          font-size: 1.2rem;
        }
      }

      .words {
        margin-left: 1rem;

        p {
          font-size: 0.85rem;
        }
      }

      &:nth-child(1) {
        background: #3376bc;

        .icon {
          background: #fff;

          svg {
            color: #ff0000;
          }
        }

        .words {
          color: #fff;

          p {
            color: #c4c4c4;
          }
        }
      }

      &:nth-child(2) {
        background: #fff;
        color: #0c2333;
        .icon {
          background: #e1f6ff;
          border: 2.5px solid #3376bc;
        }

        .words {

          p {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
`;

import React from "react";
import Head from "next/head";
import styled from "styled-components";
import images from "../../assets/images";

const { naijaflag, falz, ogaVP, ogaBubu, endSars, halfMoon, drop } = images;

const AuthLayout = ({ children }) => {
  return (
    <>
      {/* Prevent Page from zooming on IOS devices */}
      <Head>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <AuthLayoutStyle>
        <div id="left">
          <div id="flag">
            <img src={naijaflag} />
          </div>
          <div id="falz">
            <img src={falz} />
          </div>
          <div id="moonSm">
            <img src={halfMoon} />
          </div>
          <div id="ogaVP">
            <img src={ogaVP} />
          </div>
          <div id="moonLg">
            <img src={halfMoon} />
          </div>
          <div id="ogaBubu">
            <img src={ogaBubu} />
          </div>
          <div id="endSars">
            <img src={endSars} />
          </div>
        </div>
        <div id="right">{children}</div>
      </AuthLayoutStyle>
    </>
  );
};

export default AuthLayout;

const AuthLayoutStyle = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 780px) {
    display: block;
  }

  a {
    color: #3376bc;
    &:hover {
      text-decoration: underline;
    }
  }

  .show {
    font-size: 1.3rem;
    position: absolute;
    right: 10px;
    bottom: 0;
    cursor: pointer;
    color: #3376bc;
  }

  #left {
    width: 55%;
    height: 100%;
    background: #0c2333;
    position: relative;
    @media screen and (max-width: 780px) {
      display: none;
    }

    div {
      width: 85px;
      position: absolute;

      img {
        display: block;
        width: 100%;
      }

      &#flag {
        left: 40%;
        top: 9%;
      }

      &#falz {
        left: 10%;
        top: 35%;
      }

      &#ogaBubu {
        width: 85px;
        right: 8%;
        top: 29%;
      }

      &#moonSm {
        width: 85px;
        right: 8.5%;
        top: 30%;
      }

      &#endSars {
        width: 110px;
        left: 40%;
        bottom: 25%;
      }

      &#moonLg {
        width: 120px;
        left: 40%;
        bottom: 15%;
      }

      &#ogaVP {
        right: 15%;
        bottom: 10%;
      }
    }
  }

  #right {
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 780px) {
      width: 100%;
    }

    form {
      width: 70%;
      margin: auto;

      @media screen and (max-width: 780px) {
        width: 80%;
      }

      h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 2.625rem;
        margin-bottom: 10%;

        @media screen and (max-width: 780px) {
          font-size: 2rem;
        }
      }

      .input {
        margin: 2rem 0;
        position: relative;

        &.reg {
          margin: 1rem 0;
        }

        label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 0.4rem;
        }

        .group {
          display: flex;
          align-items: center;
          justify-content: space-between;

          input,
          select {
            width: 30%;
          }
        }

        input,
        select {
          width: 100%;
          height: 40px;
          outline: none;
          padding: 0.3rem 0.7rem;
          background: #deefff;
          border: none;
          border-radius: 10px;
        }

        select {
          -webkit-appearance: none;
          background-image: url(${drop});
          background-position: right center;
          background-repeat: no-repeat;
          padding-right: 1.5em;
          border: 10px solid #deefff;
        }
      }
      button {
        background: #3376bc;
        box-shadow: 0px 4px 20px rgba(51, 118, 188, 0.25);
        border-radius: 16px;
        outline: none;
        border: 0;
        color: #deefff;
        width: 100%;
        height: 40px;
        margin-top: 1.5rem;
        cursor: pointer;
        font-size: 1rem;
        font-weight: bold;

        &:hover {
          opacity: 0.7;
        }
      }

      .cta {
        display: block;
        margin-top: 1.3rem;
      }
    }
  }
`;

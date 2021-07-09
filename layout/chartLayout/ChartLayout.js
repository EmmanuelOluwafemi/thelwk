import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillApple } from "react-icons/ai";
import { RiNetflixFill, RiVirusFill } from "react-icons/ri";
import "antd/dist/antd.css";
import styled from "styled-components";
import { LoggedHeader } from "../../components/Header";
import { Drawer } from "antd";
import { BiMenuAltLeft } from "react-icons/bi";

const ChartLayout = ({ children }) => {
  // imported router to monitor active nav link
  const router = useRouter();

  // Handle Mobile nav
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <>
      <LoggedHeader />
      <ChartLayoutStyles>
        <SideNav className="side-nav">
          <Link href="/music-nigeria">
            <a className={router.pathname === "/music-nigeria" ? "active" : ""}>
              <AiFillApple id="music" /> Music Nigeria
            </a>
          </Link>
          <Link href="/netflix-charts">
            <a
              className={router.pathname === "/netflix-charts" ? "active" : ""}
            >
              <RiNetflixFill id="netflix" /> Netflix Chart
            </a>
          </Link>
          <Link href="/covid-charts">
            <a className={router.pathname === "/covid-charts" ? "active" : ""}>
              <RiVirusFill id="covid" /> COVID Chart
            </a>
          </Link>
        </SideNav>
        <div className="outlet">
          <BiMenuAltLeft id="toggle" onClick={showDrawer} />

          {children}
        </div>
      </ChartLayoutStyles>
      <Drawer
        title="Trending Today"
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
        width="75%"
        drawerStyle={{
          background: "#0c2333",
          color: "#fff",
        }}
      >
        <SideNav className="side-nav">
          <Link href="/music-nigeria">
            <a className={router.pathname === "/music-nigeria" ? "active" : ""}>
              <AiFillApple id="music" /> Music Nigeria
            </a>
          </Link>
          <Link href="/netflix-charts">
            <a
              className={router.pathname === "/netflix-charts" ? "active" : ""}
            >
              <RiNetflixFill id="netflix" /> Netflix Chart
            </a>
          </Link>
          <Link href="/covid-charts">
            <a className={router.pathname === "/covid-charts" ? "active" : ""}>
              <RiVirusFill id="covid" /> COVID Chart
            </a>
          </Link>
        </SideNav>
      </Drawer>
    </>
  );
};

export default ChartLayout;
const ChartLayoutStyles = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .side-nav {
    background: #0c2333;
    color: #fff;
    width: 15%;
    height: 90vh;
    position: fixed;
    left: 0;
    top: 10vh;
    padding-top: 5rem;
    padding-left: 1rem;

    @media screen and (max-width: 789px) {
      display: none;
    }
  }

  .outlet {
    #toggle {
      display: none;
      @media screen and (max-width: 789px) {
        display: block;
        font-size: 2.8rem;
      }
    }
  }
`;

const SideNav = styled.div`
  box-sizing: border-box;

  a {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    text-align: center;
    margin-bottom: 2rem;
    padding: 1rem;
    color: #fff;

    svg {
      font-size: 1.3rem;
      margin-right: 0.5rem;
    }

    &:hover,
    &.active {
      background: #3376bc;
      border-radius: 40px 0px 0px 40px;

      #music {
        color: #27aae1;
      }

      #netflix {
        color: #e50914;
      }

      #covid {
        color: #4aff72;
      }
    }
  }
`;

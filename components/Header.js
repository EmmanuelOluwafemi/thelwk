import React, { useState } from "react";
import Styled from "styled-components";

import Link from "next/link";

import { Button } from "./Button";

// icons
import { TiInfoLargeOutline } from "react-icons/ti";
import { GiNewspaper } from "react-icons/gi";
import { RiPieChartLine } from "react-icons/ri";
import { SiTwitter } from "react-icons/si";
import { BiUserCircle } from "react-icons/bi";
import { BiChevronDownCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { Drawer } from "antd";
import styled from "styled-components";

export const Header = () => {
  // Handle Mobile nav
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <StyledHeader>
      <div className="logo">logo</div>
      <div className="menu">
        <Link href="/">Home</Link>
        <Link href="/twitter-trends">Twitter trends</Link>
        <Link href="/nigeria-news">Nigeria News</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">
          <Button>Sign up</Button>
        </Link>
      </div>
      <div onClick={showDrawer} className="mobileToggler">
        <GiHamburgerMenu className="icon" />
        Menu
      </div>
      <Drawer
        title="Nav Bar"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        width="65%"
      >
        <MenuStyle onClick={onClose}>
          <Link href="/">
            Home
          </Link>
          <Link href="/twitter-trends">
            Twitter trends
          </Link>
          <Link href="/nigeria-news">
            Nigeria News
          </Link>
          <Link href="/login">
            Login
          </Link>
          <Link href="/register">
            <Button>Sign up</Button>
          </Link>
        </MenuStyle>
      </Drawer>
    </StyledHeader>
  );
};

export const LoggedHeader = () => {
  // Handle Mobile nav
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <StyledLoggedHeader>
      <div className="logo">logo</div>
      <div className="menu">
        <Link href="/nigeria-info">
          <a>
            Nigerian Info
            <TiInfoLargeOutline className="icon" />
          </a>
        </Link>
        <Link href="/nigeria-news">
          <a>
            Nigerian News
            <GiNewspaper className="icon" />
          </a>
        </Link>
        <Link href="/trends-charts">
          <a>
            Trend Charts
            <RiPieChartLine className="icon" />
          </a>
        </Link>
        <Link href="/twitter-trends">
          <a>
            Twitter Trends
            <SiTwitter className="icon" />
          </a>
        </Link>

        <div className="user">
          <BiUserCircle className="icon" />
          <div className="name">Solaru Olusegun</div>
          <BiChevronDownCircle className="icon small" />
          {/* 
                    <div className="dropdown">
                        <Link href="/">
                            <a>
                                <FaUser className="icon" />
                                Profile
                            </a>
                        </Link>
                        <button>
                            <AiOutlineLogout className="icon" />
                            Logout
                        </button>
                    </div> */}
        </div>
      </div>
      <div onClick={showDrawer} className="mobileToggler">
        <GiHamburgerMenu className="icon" />
        Menu
      </div>

      <Drawer
        title="Nav Bar"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        width="65%"
      >
        <MenuStyle onClick={onClose}>
          <Link href="/">Home</Link>
          <Link href="/nigeria-info">Nigerian Info</Link>
          <Link href="/nigeria-news">Nigeria News</Link>
          <Link href="/trends-charts">Trend Charts</Link>
          <Link href="/twitter-trends">Twitter Trends</Link>
        </MenuStyle>
      </Drawer>
    </StyledLoggedHeader>
  );
};

const StyledHeader = Styled.header`
    width: 100%;
    max-width: 100%;
    min-height: 80px;
    padding: 0 4%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .menu {
        display: flex;
        align-items: center;

        @media (max-width: 768px) {
            display: none;
        }
        
        a {
            margin-right: 2.1rem;
            font-size: 1.125rem;
            font-weight: 600;
            color: #0C2333;
        }
    }

    .mobileToggler {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: .7rem;
        font-weight: 600;
        color: #000;

        .icon {
            font-size: 1.5rem;
            color: #000;
        }

        @media (min-width: 768px) {
            display: none;
        }
    }    
`;

const StyledLoggedHeader = Styled.header`
    width: 100%;
    max-width: 100vw;
    min-height: 10vh;
    padding: 0 4%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #0C2333;

    .logo {
        font-size: 1.3rem;
        color: #fff;
    }

    .menu {
        height: 100%;
        display: flex;
        align-items: center;

        @media (max-width: 768px) {
            display: none;
        }

        a {
            height: 100%;
            display: flex;
            align-items: center;
            font-size: 1rem;
            font-weight: 600;
            color: #656565;
            text-decoration: none;
            margin-left: 2.5rem;

            .icon {
                font-size: 1.3rem;
                color: inherit;
                margin-left: .8rem;
            }

            &:hover {
                color: #fff;
            }
        }

        .user {
            height: 100%;
            display: flex;
            align-items: center;
            margin-left: 2.5rem;
            cursor: pointer;
            position: relative;

            .icon {
                font-size: 1.5rem;
                color: #fff;

                &.small {
                    font-size: 1rem;
                }
            }

            .name {
                font-size: 1rem;
                font-weight: 600;
                color: #fff;
                margin: 0 .8rem;
            }

            .dropdown {
                position: absolute;
                top: 100%;
                right: 0;
                left: 0;
                background: #0C2333;
                padding: 1.5rem;

                a {
                    width: 100%;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1rem;
                    font-weight: 700;
                    color: #fff;

                    .icon {
                        font-size: 1.5rem;
                        color: #fff;
                        margin-right: .7rem;
                    }
                }
            }
        }
    }

    .mobileToggler {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: .7rem;
        font-weight: 600;
        color: #fff;

        .icon {
            font-size: 1.5rem;
            color: #fff;
        }

        @media (min-width: 768px) {
            display: none;
        }
    }
`;

const MenuStyle = Styled.div`
  height: 100%;
  width: 100%;
  background: #fff;
  padding: 3rem 1rem;

  a {
    display: block;
    font-size: 1.25rem;
    font-weight: 600;
    color: #0C2333;
    margin-bottom: 2rem;
  }
`;

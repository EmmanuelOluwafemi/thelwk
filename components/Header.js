import React, { useState } from "react";
import Styled from "styled-components";

import Link from "next/link";
import { useRouter } from 'next/router'

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
        <div className="logo">
          <Link href="/">logo</Link>
        </div>
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

  const router = useRouter();

  // Handle Mobile nav
  const [visible, setVisible] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <StyledLoggedHeader className="header">
      <div className="logo">
          <Link href="/">logo</Link>
      </div>
      <div className="menu">
        <Link href="/nigeria-info">
          <a className={router.pathname == "/nigeria-info" ? 'active' : ''}>
            Nigerian Info
            <TiInfoLargeOutline className="icon" />
          </a>
        </Link>
        <Link href="/nigeria-news">
          <a className={router.pathname == "/nigeria-news" ? 'active' : ''}>
            Nigerian News
            <GiNewspaper className="icon" />
          </a>
        </Link>
        <Link href="/trends-charts">
          <a className={router.pathname == "/trends-charts" ? 'active' : ''}>
            Trend Charts
            <RiPieChartLine className="icon" />
          </a>
        </Link>
        <Link href="/twitter-trends">
          <a className={router.pathname == "/twitter-trends" ? 'active' : ''}>
            Twitter Trends
            <SiTwitter className="icon" />
          </a>
        </Link>

        <div onClick={() => setDropdown(!dropdown)} className="user">
          <BiUserCircle className="icon" />
          <div className="name">Solaru Olusegun</div>
          <BiChevronDownCircle className="icon small" />

          <div className={dropdown ? "dropdown active": "dropdown"}>
              <Link href="/profile">
                  <a style={{ padding: '.7rem 0' }}>
                      <FaUser className="icon" />
                      Profile
                  </a>
              </Link>
              <button>
                  <AiOutlineLogout className="icon" />
                  Logout
              </button>
          </div>
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

    &.sticky {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }

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
    position: relative;
    z-index: 2;

    .logo {
        font-size: 1.3rem;
        color: #fff;

        a {
            color: #fff;
        }
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

            &.active {
              color: #fff;
            }

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
                padding: 0;
                height: 0;
                overflow: hidden;
                transform: scaleY(0);
                transform-origin: top;
                transition: all .6s ease-in-out;

                &.active {
                  height: 150px;
                  padding: 1.5rem;
                  transform: scaleY(1);
                }

                a {
                    width: 100%;
                    height: 4rem;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    font-size: 1rem;
                    font-weight: 700;
                    color: #fff;
                    margin: 0;
                    padding: .5rem 0;
                    border-bottom: 1px solid rgba(255, 255, 255, .4);

                    .icon {
                        font-size: 1.5rem;
                        color: #fff;
                        margin-right: 1.5rem;
                        margin-left: 0;
                    }

                    &:hover {
                      background: #0f2d42;
                    }
                }

                button {
                  background: none;
                  width: 100%;
                  height: 4rem;
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  font-size: 1rem;
                  font-weight: 700;
                  color: #fff;
                  border: none;
                  outline: none;
                  padding: .5rem 0;
                  cursor: pointer;

                  .icon {
                      font-size: 1.5rem;
                      color: #fff;
                      margin-right: 1.5rem;
                      margin-left: 0;
                  }

                  &:hover {
                      background: #0f2d42;
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

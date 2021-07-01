import React from 'react';
import Styled from 'styled-components';

import Link from 'next/link';

import {Button} from './Button';

// icons
import { TiInfoLargeOutline } from 'react-icons/ti';
import { GiNewspaper } from 'react-icons/gi';
import { RiPieChartLine } from 'react-icons/ri';
import { SiTwitter } from 'react-icons/si';
import { BiUserCircle } from 'react-icons/bi';
import { BiChevronDownCircle } from 'react-icons/bi';

export const Header = () => {

    // let router = useRouter();

    const handleFunc = () => {
        // router.push('/');    
    }

    return (
        <StyledHeader>
            <div className="logo">logo</div>
            <div className="menu">
                <Link href="/">Home</Link>
                <Link href="/twitter">Twitter trends</Link>
                <Link href="/news">Nigeria News</Link>
                <Link href="/login">Login</Link>
                <Button func={handleFunc}>Sign up</Button>
            </div>
        </StyledHeader>
    )
}

export const LoggedHeader = () => {
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
                <Link href="/">
                    <a>
                        Trend Charts
                        <RiPieChartLine className="icon" />
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        Twitter Trends
                        <SiTwitter className="icon" />
                    </a>
                </Link>

                <div className="user">
                    <BiUserCircle className="icon" />
                    <div className="name">Solaru Olusegun</div>
                    <BiChevronDownCircle className="icon small" />
                </div>
            </div>
        </StyledLoggedHeader>
    )
}

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
`;

const StyledLoggedHeader = Styled.header`
    width: 100%;
    max-width: 100vw;
    min-height: 15vh;
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
        }
    }
`
import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

// External Library
import Styled from 'styled-components'

// icons
import { BsMusicNoteBeamed } from 'react-icons/bs'
import { RiNetflixFill } from 'react-icons/ri'
import covid from '../assets/icons/covid.svg'

// Components
import { LoggedHeader } from '../components/Header'

const TrendsChartsLayout = ({ children }) => {

    const router = useRouter();

    return (
        <>
            <LoggedHeader />
            <StyledLayout>
                <div className="side-bar">
                    <Link href="/trends-charts">
                        <a className={router.pathname == "/trends-charts" ? "active": ""}> 
                            <BsMusicNoteBeamed className="icons" />
                            Music Nigeria
                        </a>
                    </Link>
                    <Link href="/trends-charts/netflix">
                        <a className={router.pathname == "/trends-charts/netflix" ? "active": ""}>
                            <RiNetflixFill className="icons netflix" />
                            Netflix Chart
                        </a>
                    </Link>
                    <Link href="/trends-charts/covid-chart">
                        <a className={router.pathname == "/trends-charts/covid-chart" ? "active": ""}>
                            <img src={covid} alt="covid symbol" className="covid" />
                            COVID Chart
                        </a>
                    </Link>
                </div>

                <div className="bottom-bar">
                    <Link href="/trends-charts">
                        <a className="active"> 
                            <BsMusicNoteBeamed className="icons" />
                            Music Nigeria
                        </a>
                    </Link>
                    <Link href="/trends-charts/netflix">
                        <a>
                            <RiNetflixFill className="icons netflix" />
                            Netflix Chart
                        </a>
                    </Link>
                    <Link href="/trends-charts/covid">
                        <a>
                            <img src={covid} alt="covid symbol" className="covid" />
                            COVID Chart
                        </a>
                    </Link>
                </div>

                <div className="content">
                    {children}
                </div>
            </StyledLayout>
        </>
    )
}

export default TrendsChartsLayout

const StyledLayout = Styled.section`
    width: 100%;
    height: 100%;
    min-height: 90vh;
    overflow-x: hidden;

    .side-bar {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 250px;
        height: 100%;
        background: #0C2333;
        padding: 7rem;
        padding-right: 0;
        padding-left: 1.5rem;

        a {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            padding-left: 1.5rem;
            font-size: .9rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 1.5rem;

            .icons {
                font-size: 1.7rem;
                margin-right: 1rem;
                color: #fff;

                &.netflix {
                    color: #E50914;
                }
            }

            img {
                width: 1.7rem;
                height: auto;
                margin-right: 1rem;
            }

            &.active, &:hover {
                background: #3376BC;
                border-top-left-radius: 40px; 
                border-bottom-left-radius: 40px;
            }
        }

        @media (max-width: 768px) {
            display: none;
        }
    }

    .bottom-bar {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        height: 72px;
        padding: 0 8%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #0C2333;
        margin-top: 1px solid #0C233303;
        z-index: 1;

        @media  (min-width: 768px) {
            display: none;
        }

        a {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: .5rem;
            color: #fff;

            .icons {
                font-size: 1.25rem;
                color: #fff;
                margin-bottom: .5rem;
            }

            img {
                width: 1.25rem;
                height: auto;
                margin-bottom: .5rem;
            }
        }
    }

    .content {
        width: 100%;
        height: 100%;
        padding-left: 250px;

        @media (max-width: 768px) {
            padding-left: 0;
        }
    }
`
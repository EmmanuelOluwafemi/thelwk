import React from 'react'

import Link from 'next/link'

// External Library
import Styled from 'styled-components'

// icons
import { BsMusicNoteBeamed } from 'react-icons/bs'
import { RiNetflixFill } from 'react-icons/ri'
import covid from '../assets/icons/covid.svg'

// Components
import { LoggedHeader } from '../components/Header'

const TrendsChartsLayout = ({ children }) => {
    return (
        <>
            <LoggedHeader />
            <StyledLayout>
                <div className="side-bar">
                    <Link href="/trends-charts">
                        <a className="active"> 
                            <BsMusicNoteBeamed className="icons" />
                            Music Nigeria
                        </a>
                    </Link>
                    <Link href="/trends-charts/netflix-chart">
                        <a>
                            <RiNetflixFill className="icons netflix" />
                            Netflix Chart
                        </a>
                    </Link>
                    <Link href="/trends-charts/covid-chart">
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
    /* display: grid;
    grid-template-columns: 250px 1fr; */
    overflow-x: hidden;

    .side-bar {
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        bottom: 0;
        width: 250px;
        height: 100%;
        background: #0C2333;
        padding: 3.5rem;
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
    }

    .content {
        width: 100%;
        height: 100%;
        padding-left: 250px;
    }
`
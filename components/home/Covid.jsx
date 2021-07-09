import React from 'react';

import Styled from 'styled-components';
import { LinkButton } from '../Button';

import Link from 'next/link'

const CovidCard = ({ num, status, color }) => (
    <StyledCard>
        <div style={{ background: `${color}` }} className="circle"></div>
        <div className="info">
            <div className="num">{num}</div>
            <div className="status">{status}</div>
        </div>
    </StyledCard>
)

const Covid = () => {
    return (
        <StyledCovid>
            <div className="heading">
                COVID -19 Chart: Nigeria
            </div>
            <div className="grid">
                <CovidCard num='57,595' color='#62CEFF' status='Cases' />
                <CovidCard num='57,595' color='#4AFF72' status='Recovered' />
                <CovidCard num='57,595' color='#FF7070' status='Deaths' />
                <div>
                    <Link href="/nigeria-info" passHref>
                        <LinkButton text="See breakdown" color="primary" link="/" />
                    </Link>
                </div>
            </div>
        </StyledCovid>
    )
}

export default Covid;

const StyledCovid = Styled.section`
    width: 100%;
    max-width: 100vw;
    padding: 2rem 4%;

    .heading {
        font-size: 1.6rem;
        font-weight: 500;
        color: #0C2333;
        margin-bottom: 1.5rem;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min-content, 260px));
        justify-content: space-between;
        grid-gap: 2rem;

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: .7rem;
        }
    }
`;

const StyledCard = Styled.div`
    width: 100%;
    padding: 1.9rem;
    background: #fff;
    display: flex;
    border-radius: 1rem;

    @media (max-width: 768px) {
        padding: 1rem;
    }

    .circle {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: red;

        @media (max-width: 768px) {
            width: 32px;
            height: 32px;
        }
    }

    .info {
        margin-left: 1.5rem;

        .num {
            font-size: 2rem;
            font-weight: 600;
            color: #000;

            @media (max-width: 768px) {
                font-size: 1.25rem;
            }
        }

        .status {
            font-size: 1rem;
            font-weight: 300;
            color: #000;

            @media (max-width: 768px) {
                font-size: 1rem;
            }
        }
    }
`;
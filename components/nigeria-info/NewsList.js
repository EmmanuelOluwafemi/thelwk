import React from 'react'

import Styled from 'styled-components'
import Link from 'next/link'

// images
import buhari from '../../assets/images/buhari.jpg';
import ads3 from '../../assets/images/ads3.jpg';

const NewsList = () => {
    return (
        <StyledNewList>
            <div className="title">
                <div className="list">
                    News
                </div>
            </div>

            <p><span>Lagos state</span> Appeared <span>300</span> times in the news</p>

            <div className="grid">
                <div className="card">
                    <img src={buhari} alt="buhari" />
                    <Link href="/nigeria-news/acj">
                        <a className="subtitle">Lagos estimated a budget of 1trillion to...</a>
                    </Link>
                    <div className="shortContent">Lorem Ipsum d’olor sat...</div>
                </div>
                <div className="card">
                    <img src={buhari} alt="buhari" />
                    <Link href="/nigeria-news/acj">
                        <a className="subtitle">Lagos estimated a budget of 1trillion to...</a>
                    </Link>
                    <div className="shortContent">Lorem Ipsum d’olor sat...</div>
                </div>
                <div className="card">
                    <img src={buhari} alt="buhari" />
                    <Link href="/nigeria-news/acj">
                        <a className="subtitle">Lagos estimated a budget of 1trillion to...</a>
                    </Link>
                    <div className="shortContent">Lorem Ipsum d’olor sat...</div>
                </div>
                <div className="card">
                    <img src={ads3} alt="buhari" />
                    <Link href="/nigeria-news/acj">
                        <a className="subtitle">Lagos estimated a budget of 1trillion to...</a>
                    </Link>
                    <div className="shortContent">Lorem Ipsum d’olor sat...</div>
                </div>
            </div>
        </StyledNewList>
    )
}

export default NewsList;

const StyledNewList = Styled.section`
    width: 100%;
    padding-bottom: 3rem;

    .title {
        width: 100%;
        height: 64px;
        padding: 0 6%;
        background: #0C2333;
        margin-bottom: 1.5rem;

        .list {
            height: 100%;
            max-width: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 4px solid #fff;
            font-size: 1.25rem;
            font-weight: 600;
            color: #fff;
        }
    }

    p {
        font-size: .9rem;
        font-weight: 400;
        color: #9C9C9C;
        line-height: 1.6rem;
        margin-bottom: 1.8rem;
        margin-top: .5rem;
        padding: 0 4%;

        span {
            color: #3F3F3F;
        }
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min-content, 170px));
        grid-gap: 2rem;
        margin-bottom: 3.5rem;
        padding: 0 4%;

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1rem;
        }

        .card {
            width: 100%;
            
            img {
                width: 100%;
                height: auto;
            }

            .subtitle {
                font-size: 1rem;
                font-weight: 300;
                color: #026F9F;
                margin-top: 14px;
                cursor: pointer;
            }

            .shortContent {
                font-size: .85rem;
                font-weight: 300;
                color: #000;
            }
        }
    }
`
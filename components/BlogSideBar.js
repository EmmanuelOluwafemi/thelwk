import React from 'react';

import Styled from 'styled-components';

import Link from 'next/link'

// image
import news from '../assets/images/new.jpg';
import manu from '../assets/images/manchester-united.png';
import mancity from '../assets/images/manchester-city.png';

const BlogSideBar = () => {
    return (
        <StyledSidebar>
            <div className="title-container">
                <div className="blog-title">
                    Today's News
                    <span>4 years ago</span>
                </div>

                <Link href="/">
                    <a className="link">See More   &#62;</a>
                </Link>
            </div>

            <div className="relatedNews">
                <div className="card">
                    <img src={news} alt="news" />
                    <p>Lorem Ipsum d’olor sa’at amet</p>
                </div>
                <div className="card">
                    <img src={news} alt="news" />
                    <p>Lorem Ipsum d’olor sa’at amet</p>
                </div>
                <div className="card">
                    <img src={news} alt="news" />
                    <p>Lorem Ipsum d’olor sa’at amet</p>
                </div>
            </div>

            <div className="sport">
                <div className="card">
                    <img src={manu} alt="man united logo" />
                    <p>Manchester United</p>
                </div>

                <h3>Vs</h3>

                <div className="card">
                    <img src={mancity} alt="man city logo" />
                    <p>Manchester City</p>
                </div>
                <p className="foot">Lorem Ipsum d’olor sa’at amet</p>
            </div>

            <div className="title-container">
                <div className="blog-title">
                    Politics
                </div>

                <Link href="/">
                    <a className="link">See More   &#62;</a>
                </Link>
            </div>

            <div className="relatedNews">
                <div className="card">
                    <img src={news} alt="news" />
                    <p>Lorem Ipsum d’olor sa’at amet</p>
                </div>
                <div className="card">
                    <img src={news} alt="news" />
                    <p>Lorem Ipsum d’olor sa’at amet</p>
                </div>
            </div>
        </StyledSidebar>
    )
}

export default BlogSideBar;

const StyledSidebar = Styled.div`
    width: 100%;

    .title-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .blog-title {
            display: flex;
            flex-direction: column;
            font-size: 1.5rem;
            font-weight: 600;
            color: #000;

            span {
                font-size: .6rem;
                font-weight: 300;
                color: #fff;
            }
        }

        .link {
            font-size: 1rem;
            font-weight: 600;
            color: #3376BC;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .relatedNews {
        width: 100%;
        padding: 1rem;
        border-radius: 14px;
        background: #fff;
        margin-top: 1.5rem;
        margin-bottom: 2rem;

        .card {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 1rem;

            img {
                height: 90px;
                width: 90px;
                border-radius: 10px;
            }

            p {
                font-size: 1.5rem;
                font-weight: 600;
                color: #000;
                margin-left: .7rem;
            }
        }
    }

    .sport {
        width: 100%;
        padding: 1rem;
        border-radius: 14px;
        background: #fff;
        margin-top: 1.5rem;
        margin-bottom: 4.5rem;

        .card {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 1rem;

            img {
                width: 72px;
                height: auto;
            }

            p {
                font-size: 1.5rem;
                font-weight: 600;
                color: #000;
                margin-left: 1rem;
            }
        }

        h6 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #9C9C9C;
            margin-bottom: 1rem;
            padding-left: 1rem;
        }

        p.foot {
            font-size: 1rem;
            font-weight: 400;
            color: #9C9C9C;
            padding-left: 1rem;
        }
    }

`;
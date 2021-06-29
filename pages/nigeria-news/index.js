import 'antd/dist/antd.css';
import {LoggedHeader} from '../../components/Header'
import React from 'react';

import Styled from 'styled-components';

import Link from 'next/link'

// icons
import { AiOutlineEye } from 'react-icons/ai';
import { BiShareAlt } from 'react-icons/bi';

// image
import blogImage from '../../assets/images/blogImage.jpg';
import offender1 from '../../assets/images/offender1.jpg';
import offender2 from '../../assets/images/offender2.png';

const data = [
    {
        imgUrl: offender1,
        name: 'Adewale Adejobi',
        offence: 'rape',
        date: 'April 20, 2012'
    },
    {
        imgUrl: offender2,
        name: 'Adewale Adejobi',
        offence: 'rape',
        date: 'April 20, 2012'
    },
] 

// External Library
import { Select } from 'antd';
import OffendersCard from '../../components/cards/OffendersCard';
import BlogSideBar from '../../components/BlogSideBar';

const { Option } = Select;

const NigeriaNews = () => {
    return (
        <>
            <LoggedHeader />

            <TwoGrid>
                <div className="news">
                    <div className="title-container">
                        <div className="title">Today's News</div>
                        <Select defaultValue="All" className="selector">
                            <Option value='All'>All</Option>
                            <Option value='Sport'>Sport</Option>
                            <Option value='Entertainment'>Entertainment</Option>
                            <Option value='Business'>Business</Option>
                            <Option value='Polities'>Polities</Option>
                        </Select>
                    </div>
                    <div className="news-container">
                        <img src={blogImage} alt="post" />
                        <div className="sub-container">
                            <div className="seen">
                                <AiOutlineEye className="icon" />
                                3.5k
                            </div>
                            <div className="share">
                                <BiShareAlt className="icon" />
                                700
                            </div>
                        </div>
                        <div className="blog-title">
                            The world’s clamour now asides COVID-19 is to #EndPoliceBrutality in Nigeria.
                        </div>
                    </div>

                    <div className="offenders-container">
                        <div className="offenders-header">
                            <div className="offenders-title">Law offenders</div>
                            <Link href="/nigeria-news/offenders">
                                <a className="link">See More   &#62;</a>
                            </Link>
                        </div>

                        <div className="offenders-grid">
                            {
                                data.map(({ imgUrl, name, offence, date }) => (
                                    <OffendersCard key={imgUrl} name={name} imgUrl={imgUrl} offence={offence} date={date} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <BlogSideBar />
            </TwoGrid>
        </>
    )
}

export default NigeriaNews

const TwoGrid = Styled.div`
    width: 100%;
    max-width: 100vw;
    padding: 2rem 4%;
    display: grid;
    grid-template-columns: 6fr 3fr;
    grid-gap: 2rem;

    .news {
        width: 100%;

        .title-container {
            display: flex;
            align-items: center;

            .title {
                font-size: 2rem;
                font-weight: 700;
                color: #000;
            }

            .selector {
                margin-left: 2rem;
                width: 100%;
                max-width: 124px;
                border-radius: 32px;

                .ant-select-selector {
                    border-radius: 32px;
                }
            }
        }

        .news-container {
            width: 100%;
            padding: 1rem;
            border-radius: 14px;
            margin-top: 2rem;
            background: #fff;

            img {
                width: 100%;
                height: auto;
                border-radius: 14px;
            }

            .sub-container {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                margin-top: 1rem;

                .seen, .share {
                    display: flex;
                    align-items: center;
                    font-size: .8rem;
                    font-weight: 600;
                    color: #000;
                    margin-right: 2rem;

                    .icon {
                        font-size: .8rem;
                        color: #c4c4c4;
                        margin-right: .6rem;
                    }
                }
            }

            .blog-title {
                font-size: 1.5rem;
                font-weight: 600;
                color: #000;
                margin-top: 1rem;
                margin-bottom: 3rem;
            }

        }

        .offenders-container {
            width: 100%;
            margin-top: 3rem;

            .offenders-header {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .offenders-title {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #000;
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

            .offenders-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 2rem;
                margin-top: 2rem;

                @media (max-width: 768px) {
                    grid-template-columns: repeat(1, 1fr);
                }
            }
        }
    }
`;
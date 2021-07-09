import React from 'react';

import Styled from 'styled-components';
import {Header} from '../../components/Header';
import NewsList from '../../components/nigeria-info/NewsList';

// icon
import { IoIosArrowBack } from 'react-icons/io';
import { BsLockFill } from 'react-icons/bs';

// image
import buhari from '../../assets/images/buhari.jpg';

const Elected = () => {
    return (
        <>
            <Header />

            <StyledElected>
                <div className="iconContainer">
                    <IoIosArrowBack className="icon" />
                </div>

                <div className="user-details">
                    <div className="img">
                        <img src={buhari} alt="buhari" />
                        <div className="user">
                            <div className="name">Mohammadu Buhari</div>
                            <div className="position">President , Federal Republic of Nigeria</div>
                        </div>
                    </div>
                    <div className="content">
                        <p>Start - End(Year): <span>2018 - Present</span></p>
                        <p>Other position: <span>Nil</span></p>
                        <p>Succession:  <span> - </span></p>
                        <p>Party: <span>PDP</span></p>
                        <p>Age: <span>76 years</span></p>
                        <p>Origin:  <span className="btn">Bakori, Katsina</span></p>
                        <p>Salary: <span>30million Naira</span></p>
                        <p>Contact: <span><BsLockFill className="newIcon" /></span></p>
                    </div>
                </div>
            </StyledElected>
            <NewsList />
        </>
    )
}

export default Elected;

const StyledElected = Styled.div`
    width: 100%;
    padding: 2rem 4%;

    .iconContainer {
        width: 40px;
        height: 40px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #0c2333;
        cursor: pointer;

        .icon {
            font-size: 1.3rem;
            color: #0C2333;
        }
    }

    .user-details {
        display: grid;
        grid-template-columns: 35% 60%;
        grid-gap: 3rem;
        margin-top: 1.5rem;

        @media (max-width: 768px) {
            grid-template-columns: 100%;
        }

        .img {
            position: relative;
            border-radius: 50px;
            overflow: hidden;

            img {
                width: 100%;
                height: auto;
            }

            .user {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 120px;
                background: #DEEEFF;
                padding: 2rem;

                .name {
                    font-size: 1.3rem;
                    font-weight: 600;
                    color: #0C2333;
                    margin-bottom: .5rem;
                }

                .position {
                    font-size: .9rem;
                    font-weight: 400;
                    color: #9C9C9C;
                }
            }
        }

        .content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            p {
                font-size: 1.25rem;
                font-weight: 600;
                color: #0C2333;
                margin-bottom: 1.3rem;

                span {
                    font-weight: 400;

                    &.btn {
                        padding: .5rem 1rem;
                        background: #3376BC;
                        color: #fff;
                        border-radius: 4px;
                    }
                }
            }
        }
    }
`;
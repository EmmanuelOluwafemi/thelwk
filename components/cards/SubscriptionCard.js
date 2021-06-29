import React from 'react';

import Styled from 'styled-components';

// Icons
import { IoArrowForwardSharp } from 'react-icons/io5';

const SubscriptionCard = ({ imgUrl, title, price, plans  }) => {
    return (
        <StyledSubscriber>
            <div className="price-wrapper">
                <img src={imgUrl} alt="price tag" />
                <div className="content">
                    <div className="title">
                        {title}
                    </div>

                    <div className="price-container">
                        <div className="currency">N</div>
                        <div className="price">
                            {price}
                            <span>/month</span>
                        </div>
                    </div>
                </div>
            </div>

            <ul>
                {
                    plans.map(item => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>

            <button>
                Choose Plan 
                <IoArrowForwardSharp className="icon" />
            </button>
        </StyledSubscriber>
    )
}

export default SubscriptionCard;

const StyledSubscriber = Styled.div`
    width: 100%;
    max-width: 290px;
    border-radius: 20px;
    background: #FFFFFF;
    box-shadow: 1px 10px 30px rgba(153, 153, 153, 0.25);
    padding: 1.4rem;
    margin-right: 2rem;

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 1rem;
    }

    &:last-child {
        margin-left: 2rem;
        
        @media (max-width: 768px) {
            margin-left: 0;
            margin-bottom: 0;
        }
    }

    .price-wrapper {
        display: flex;
        align-items: center;

        img {
            width: 54px;
            height: 54px;
        }

        .content {
            .title {
                font-size: 1.2rem;
                font-weight: 600;
                color: #000;
            }

            .price-container {
                display: flex;
                align-items: flex-start;

                .currency {
                    font-size: .75rem;
                    font-weight: #C4C4C4;
                }

                .price {
                    font-size: 1.6rem;
                    font-weight: 700;
                    color: #000;

                    span {
                        font-size: .75rem;
                        font-weight: 600;
                        color: #C4C4C4;
                    }
                }
            }
        }
    }

    ul {
        margin-top: 1.5rem;

        @media (max-width: 768px) {
            margin-top: 1rem;
        }

        li {
            font-size: .9rem;
            font-weight: 400;
            color: #000;
            margin-bottom: 1.8rem;
            margin-left: 1rem;

            @media (max-width: 768px) {
                margin-bottom: .7rem;
            }
        }
    }

    button {
        width: 100%;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.5rem;
        font-size: .85rem;
        font-weight: 600;
        color: #fff;
        border-radius: 50px;
        background: #3376BC;
        border: none;
        cursor: pointer;

        @media (max-width: 768px) {
            font-size: .7rem;
            padding: 0 1.5rem;
        }

        .icon {
            font-size: 1rem;
            color: #fff;
        }
    }
`;
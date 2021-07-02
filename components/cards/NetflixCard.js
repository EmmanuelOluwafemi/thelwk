import React from 'react';
import Styled from 'styled-components';

import { AiTwotoneHeart } from 'react-icons/ai';
import { BsFillStarFill } from 'react-icons/bs';

const NetflixCard = ({ imgUrl, title, date, rate }) => {
    return (
        <StyledNetflixCard>
            <img src={imgUrl} alt={title} />
            <div className="title">
                {title}
            </div>
            <div className="buttomContent">
                <div className="date">
                    {date}
                </div>
                <div className="rate">
                    <AiTwotoneHeart className="heart" />
                    <div className="rateText">
                        {rate}
                    </div>
                    <BsFillStarFill className="star" />
                </div>
            </div>
        </StyledNetflixCard>
    )
}

export default NetflixCard;

const StyledNetflixCard = Styled.div`
    width: 100%;
    position: relative;
    
    img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .title {
        font-size: 1.1rem;
        font-weight: 600;
        color: #0C2333;
        line-height: 1.4rem;
        margin-bottom: 1rem;
        margin-top: 1rem;

        @media (max-width: 768px) {
            font-size: .8rem;
        }
    }

    .buttomContent {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .date {
            font-size: 1rem;
            font-weight: 600;
            color: #9C9C9C;
        }

        .rate {
            display: flex;
            align-items: center;

            .heart {
                font-size: 1.1rem;
                color: #9C9C9C;
            }

            .rateText {
                font-size: 1rem;
                font-weight: 600;
                color: #FFB800;
                margin-left: 1.3rem;
                margin-right: 4px;
            }

            .star {
                font-size: 1.1rem;
                color: #FFB800;
            }
        }
    }
`;
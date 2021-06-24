import React from 'react';
import Styled from 'styled-components';

// icons
import { AiOutlineDown } from 'react-icons/ai';

const TwitterCard = () => {
    return (
        <StyledTwitterCard>
            <div className="card">
                <h5>Trending in Nigeria</h5>
                <h2>She’s 15</h2>
                <p>9, 569 tweets</p>
            </div>
            <div className="card">
                <h5>Trending in Nigeria</h5>
                <h2>She’s 15</h2>
                <p>9, 569 tweets</p>
            </div>
            <div className="card">
                <h5>Trending in Nigeria</h5>
                <h2>She’s 15</h2>
                <p>9, 569 tweets</p>
            </div>

            <div className="seeMore">
                Show more <AiOutlineDown className="icon" />
            </div>
        </StyledTwitterCard>
    )
}

export default TwitterCard;

const StyledTwitterCard = Styled.div`
    width: 100%;
    border-radius: 1rem;
    padding: 1rem;
    background: #fff;

    .seeMore {
        display: flex;
        align-items: center;
        color: #169FDB;
        font-size: .85rem;
        font-weight: 600;
        cursor: pointer;

        .icon {
            margin-left: .2rem;
        }
    }

    .card {
        border: 1px solid #B8E9FF;
        border-radius: 14px;
        padding: 10px 20px;
        display: block;
        margin-bottom: 1rem;

        h5 {
            font-weight: 300;
            font-size: .75rem;
            margin-bottom: 4px;
            color: #000;
            margin-bottom: .6rem;
            text-align: left;
        }

        h2 {
            font-size: 1rem;
            font-weight: 600;
            color: #000;
            margin-bottom: 1.2rem;
            text-align: left;
        }

        p {
            font-size: .75rem;
            font-weight: 300;
            color: #000;
            text-align: left;
        }
    }
`;
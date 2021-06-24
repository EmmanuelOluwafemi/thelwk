import React from 'react';
import Styled from 'styled-components';

export const SmallAds = ({ img }) => {
    return (
        <StyledSmallAds style={{ backgroundImage: `url(${img})` }}>
            <div className="ads">Ad</div>
        </StyledSmallAds>
    )
}

export const BigAds = ({ img }) => (
    <StyledBigAds style={{ backgroundImage: `url(${img})` }}>
        <div className="ads">Ad</div>
    </StyledBigAds>
)

const StyledSmallAds = Styled.div`
    width: 100%;
    height: 160px;
    border-radius: 12px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    margin-top: 2rem;

    .ads {
        position: absolute;
        right: 1rem;
        top: 1rem;
        padding: 6px .9rem;
        border-radius: 6px;
        background: rgba(0, 0, 0, .4);
        font-size: .85rem;
        color: #fff;
    }
`;

const StyledBigAds = Styled.div`
    width: 100%;
    min-height: 400px;
    height: auto;
    border-radius: 3rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    margin-top: 2rem;

    @media (max-width: 768px) {
        min-height: 200px;
        border-radius: 1.5rem;
    }

    .ads {
        position: absolute;
        right: 2rem;
        top: 1.5rem;
        padding: 6px .9rem;
        border-radius: 6px;
        background: rgba(0, 0, 0, .4);
        font-size: .85rem;
        color: #fff;

        @media (max-width: 768px) {
            right: 1.5rem;
        }
    }
`; 
import React from 'react';

import Styled from 'styled-components';

export const OfficerCard = ({ imgUrl, name, position }) => {
    return (
        <StyledCard>
            <img src={imgUrl} alt={name} />
            <div className="name">{name}</div>
            <div className="position">{position}</div>
        </StyledCard>
    )
}

export const AmenitiesCard = ({ imgUrl, title, num }) => {
    return (
        <AmenitiesStyle>
            <img src={imgUrl} alt={title} />
            <div className="title"><span>{num}</span> {title}</div>
        </AmenitiesStyle>
    )
}

const StyledCard = Styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    &:hover {
        
    }

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: .7rem;
    }

    .name {
        text-align: center;
        font-size: 1rem;
        font-weight: 600;
        color: #000;
        margin-bottom: .5rem;
    }

    .position {
        text-align: center;
        font-size: .8rem;
        font-weight: 400;
        color: #9C9C9C;
        text-align: center;
    }
`;

const AmenitiesStyle = Styled.div`
    width: 100%;
    min-height: 140px;
    padding: 1.4rem 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 1rem;
    cursor: pointer;
    transition: all .3s ease-in-out;

    @media (max-width: 768px) {
        min-height: 100px;
        padding: .7rem .8rem;
    }

    img {
        width: 50px;
        height: auto;
        margin-bottom: 1.3rem;

        @media (max-width: 768px) {
            width: 32px;
        }
    }

    .title {
        font-size: .9rem;
        font-weight: 600;
        color: #999;
        text-align: center;

        @media (max-width: 768px) {
            font-size: .7rem;
        }

        span {
            color: #000;
        }
    }

    &:hover {
        background: #3376BC;

        .title {
            color: #fff;
        }
    }
`;
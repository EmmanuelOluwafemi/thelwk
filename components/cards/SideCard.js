import React from 'react';
import Styled from 'styled-components';
import { LinkButton } from '../Button';
import Link from 'next/link';

const SideCard = ({ imgUrl, title, desc }) => {
    return (
        <StyledSideCard>
            <img src={imgUrl} alt={title} />

            <div className="content">
                <div className="title">
                    {title}
                </div>
                <div className="desc">
                    {desc}
                </div>
                <div className="buttonContainer">
                    <Link href="/nigeria-news/abs" passHref>
                        <LinkButton color="primary" text="Read More" />
                    </Link>
                </div>
            </div>
        </StyledSideCard>
    )
}

export default SideCard;

const StyledSideCard = Styled.article`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

    img {
        width: 100%;
        height: auto;
    }

    .content {
        .title {
            text-align: left;
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 11px;
        }

        .desc {
            font-size: .95rem;
            font-weight: 400;
            color: #3F3F3F;
            text-align: left;
        }

        .buttonContainer {
            display: flex;
            justify-content: flex-end;
            margin-top: .5rem;
        }
    }
`;
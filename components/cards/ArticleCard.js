import React, {useState} from 'react';
import Styled from 'styled-components';
import { LinkButton } from '../Button';

import Link from 'next/link'

const ArticleCard = ({ imgUrl, title, desc, date, ads }) => {

    return (
        <StyledArticleCard>
            <div className="imgContainer">
                {ads && <div className="ads">AD</div>}

                <img src={imgUrl} alt={title} />

                {
                    !ads ?
                    <div className="overlay">
                        <Link href={`/nigeria-news/${title}`}>
                            <LinkButton text="Read More" />
                        </Link>
                    </div>
                    : null
                }
            </div>
            <div className="titleNew">{title}</div>
            <div className="discription">{desc}</div>
            <div className="date">{date}</div>
        </StyledArticleCard>
    )
}

export default ArticleCard;

const StyledArticleCard = Styled.article`
    width: 100%;
    margin: 0 1rem;

    .titleNew {
        font-size: 1.1rem;
        font-weight: 700;
        color:#0C2333;
        line-height: 1.5;
        text-align: left;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .discription {
        font-size: .95rem;
        font-weight: 400;
        color: #3F3F3F;
        line-height: 1.3;
        width: 99%;
        margin-bottom: 1.5rem;
    }

    .date {
        font-size: .8rem;
        color: #999999;
        font-weight: 600;
    }

    .imgContainer {
        position: relative;
        width: 95%;

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 12px;
            align-items: center;
            justify-content: center;
            display: none;
            cursor: pointer;
        }

        &:hover {
            .overlay {
                display: flex;
            }
        }

        .ads {
            position: absolute;
            top: 1rem;
            right: 1rem;
            padding: 6px 1rem;
            background: rgba(0, 0, 0, 0.4);
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-style: normal;
            font-weight: 600;
            font-size: .8rem;
            line-height: 1rem;
            color: #fff;
        }

        img {
            width: 100%;    
            height: auto;
            pointer-events: none;
        }

        /* img:hover ~ .overlay {
            display: flex;
        } */
    }
`;
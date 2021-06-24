import React from 'react';
import Styled from 'styled-components';

const SingleMusicCard = ({ imgUrl, title, subtitle, album, dur }) => {
    return (
        <StyledMusicCard>
            <div className="music-info">
                <div className="img">
                    <img src={imgUrl} alt={title} />
                </div>
                <div className="info">
                    <div className="titleful">
                        {title}
                    </div>
                    <div className="subtitle">{subtitle}</div>
                </div>
            </div>
            <div className="albumName">{album}</div>
            <div className="dur">{dur}</div>
        </StyledMusicCard>
    )
}

export default SingleMusicCard;

const StyledMusicCard = Styled.div`
    width: 100%;
    min-height: 80px;
    border-radius: 8px;
    background: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .8rem;

    &:last-child {
        margin-bottom: 0;
    }


    .music-info {
        display: flex;
        align-items: center;

        .img {
            width: 60px;
            height: 60px;
            position: relative;
            border-radius: 3px;

            img {
                object-fit: cover;
            }
        }

        .info {
            margin-left: 1rem;

            .titleful {
                font-size: 1rem;
                font-weight: 600;
                color: #0C2333;
            }

            .subtitle {
                font-size: 1rem;
                font-weight: 300;
                color: #888;
            }
        }

        .albumName {
            font-size: 1rem;
            font-weight: 300;
            color: #000;
        }

        .dur {
            font-size: 1rem;
            font-weight: 300;
            color: #000;
        }
    }
`;
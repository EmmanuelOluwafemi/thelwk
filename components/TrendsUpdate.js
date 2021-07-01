import React from 'react';
import Styled from 'styled-components';
import TwitterCard from './TwitterCard';
import BigNewsCard from './cards/BigNewsCard';
import Subscribe from './Subscribe';
import { SmallAds } from './cards/Ads';

// images
import ads1 from '../assets/images/ads1.jpg'
import ads2 from '../assets/images/ads2.jpg'

// icons
import { FaTwitter } from 'react-icons/fa';

const TrendsUpdate = () => {
    return (
        <StyledTrendsUpdate>
            <div className="title">
                Trend <span>Charts</span>

                <div className="grid">
                    <div className="twitterSidebar">
                        <div className="twitterTittle">
                            <FaTwitter className="icon" />
                            Trending on twitter
                        </div>
                        <TwitterCard />
                    </div>
                    <BigNewsCard />
                    <div>
                        <Subscribe />
                        <SmallAds img={ads1} />
                        <SmallAds img={ads2} />
                    </div>
                </div>
            </div>
        </StyledTrendsUpdate>
    )
}

export default TrendsUpdate;

const StyledTrendsUpdate = Styled.section`
    width: 100%;
    max-width: 100vw;
    padding: 0 4%;
    margin-top: 4rem;

    .title {
        font-weight: 700;
        font-size: 2.5rem;
        text-align: center;
        text-transform: capitalize;
        margin-bottom: 3rem;

        span {
            color: #FF7070;
        }
    }

    .grid {
        display: grid;
        grid-template-columns: 23% 43% 30%;
        justify-content: space-between;
        grid-gap: 2rem;
        margin-top: 3rem;

        @media (max-width: 768px) {
            grid-template-columns: 100%;
            grid-gap: 3rem;
        }

        .twitterSidebar {
            max-width: 316px;

            .twitterTittle {
                font-size: 1.5rem;
                font-weight: 600;
                color: #0C2333;
                text-align: left;
                margin-bottom: 1.4rem;

                .icon {
                    color: #3DC8F9;
                    margin-right: 1rem;
                }
            }
        }
    }
`;
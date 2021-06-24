import React from 'react';
import Styled from 'styled-components'

// Components
import HomeSlider from './HomeSlider';
import SideCard from './cards/SideCard';

// images
import news1 from '../assets/images/news1.jpg';
import news2 from '../assets/images/news2.jpg';

const DoubleNews = [
    {
        imgUrl: news1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu...',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet iaculis id massa 
                faucibus. Pretium pellentesque sed arcu et. Nam tellus orci ac et lobortis luctus dui 
                venenatis tortor. Euismod id feugiat cras suspendisse vel sed maecenas. Nam netus nunc 
                ut in vel auctor in. Nulla malesuada id tellus id vel. Ipsum non blandit scelerisque 
                varius arcu aliquam, donec venenatis condimentum.`
    },
    {
        imgUrl: news2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu...',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet iaculis id massa 
                faucibus. Pretium pellentesque sed arcu et. Nam tellus orci ac et lobortis luctus dui 
                venenatis tortor. Euismod id feugiat cras suspendisse vel sed maecenas. Nam netus nunc 
                ut in vel auctor in. Nulla malesuada id tellus id vel. Ipsum non blandit scelerisque 
                varius arcu aliquam, donec venenatis condimentum.`
    }
]

const HomeNews = () => {
    return (
        <StyledHomeNews>
            <div className="title">
                latest nigeria <span>news</span>
            </div>
            <div className="subtitle">
                Lorem ipsum dolor sit amet, 
            </div>
            <HomeSlider />

            <div className="doubleNews">
                {
                    DoubleNews.map(({ imgUrl, title, content }) => (
                        <SideCard key={imgUrl} imgUrl={imgUrl} title={title} desc={content} />
                    ))
                }
            </div>
        </StyledHomeNews>
    )
}

export default HomeNews;

const StyledHomeNews = Styled.section`
    max-width: 100vw;
    padding: 5rem 4%;

    .title {
        font-weight: 700;
        font-size: 2.5rem;
        text-align: center;
        text-transform: capitalize;
        margin-bottom: 10px;

        span {
            color: #FF7070;
        }

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }

    .subtitle {
        font-size: 1.2rem;
        font-weight: 400;
        text-align: center;
        color: #cdcdcd;
        margin-bottom: 56px;

        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }

    .doubleNews {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        margin-top: 4rem;

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;
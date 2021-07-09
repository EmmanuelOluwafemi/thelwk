import React from 'react';
import Styled from 'styled-components';
import Link from 'next/link'

// component
import NetflixCard from './cards/NetflixCard';
import { LinkButton } from './Button';

// icons
import { FiTrendingUp } from 'react-icons/fi';

// images
import vid1 from '../assets/images/vid1.jpg'
import vid2 from '../assets/images/vid2.jpg'
import vid3 from '../assets/images/vid3.jpg'
import vid4 from '../assets/images/vid4.jpg'
import netflixAd from '../assets/images/netflixAd1.jpg'

const data = [
    {
        title: 'Eurovision',
        date: '2020',
        rate: '4.2',
        imgUrl: vid1
    },
    {
        title: 'The Boys In The Band',
        date: '2020',
        rate: '4.2',
        imgUrl: vid2
    },
    {
        title: 'king restaurant',
        date: '2020',
        rate: '4.2',
        imgUrl: netflixAd
    },
    {
        title: 'Athlete A',
        date: '2020',
        rate: '4.2',
        imgUrl: vid3
    },
    {
        title: 'Athlete A',
        date: '2020',
        rate: '4.2',
        imgUrl: vid4
    },
]

const NetflixTrend = () => {
    return (
        <StyledNetflixTrend>
            <div className="logo">
                <FiTrendingUp className="icon" />
                Netflix Ng
            </div>

            <div className="grid">
                {
                    data.map(({ title, imgUrl, date, rate }) => (
                        <NetflixCard 
                            key={imgUrl}
                            title={title} 
                            imgUrl={imgUrl} 
                            date={date} 
                            rate={rate} 
                        />
                    ))
                }
            </div>

            <div className="buttonContainer">
                <Link href="/trends-charts/netflix" passRef>
                    <LinkButton text="See all" color="primary" link="/" />
                </Link>
            </div>
        </StyledNetflixTrend>
    )
}

export default NetflixTrend;

const StyledNetflixTrend = Styled.section`
    width: 100%;
    max-width: 100vw;
    padding: 3rem 4%;

    .logo {
        font-weight: 600;
        font-size: 1.6rem;
        color: #0C2333;
        display: flex;
        align-items: center;

        .icon {
            font-size: 2rem;
            color: #0C2333;
            margin-right: 1rem;
        }
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min-content, 210px));
        justify-content: space-between;
        grid-gap: 2rem;
        margin-top: 1.5rem;

        @media (max-width: 768px) {
            width: 100%;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1rem;
        }
    }

    .buttonContainer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 1.5rem;
    }
`;
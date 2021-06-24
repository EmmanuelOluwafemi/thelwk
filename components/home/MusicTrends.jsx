import React from 'react';
import Styled from 'styled-components';

// icons
import { AiFillApple } from 'react-icons/ai';

// images
import mark from '../../assets/images/mark.png';

import music1 from '../../assets/images/music1.png';
import music2 from '../../assets/images/music2.png';

// Components
import MusicList from './MusicList';
import { LinkButton } from '../Button';

const audiomarkData = [
    {
        title: 'Infinty (ft. Omah Lay)',
        subtitle: 'Olamide',
        album: 'Carpe Diem',
        dur: '3:25',
        imgUrl: music1
    },
    {
        title: 'Cash App',
        subtitle: 'Bella shmurda, Zlatan & Lincoln',
        album: 'Cash App - Single',
        dur: '3:25',
        imgUrl: music2
    },
    {
        title: 'Cash App',
        subtitle: 'Bella shmurda, Zlatan & Lincoln',
        album: 'Cash App - Single',
        dur: '3:25',
        imgUrl: music2
    },
    {
        title: 'Cash App',
        subtitle: 'Bella shmurda, Zlatan & Lincoln',
        album: 'Cash App - Single',
        dur: '3:25',
        imgUrl: music2
    },
    {
        title: 'Cash App',
        subtitle: 'Bella shmurda, Zlatan & Lincoln',
        album: 'Cash App - Single',
        dur: '3:25',
        imgUrl: music2
    },
]

const MusicTrends = () => {
    return (
        <StyledMusicTrend>
            <div className="grid">
                <div className="card">
                    <div className="title">
                        <img src={mark} alt="audiomark logo" />
                        Top 5 Audiomack
                    </div>
                    <MusicList listTitle="Preview not available" color='#FFB800' data={audiomarkData} />
                </div>
                <div className="card">
                    <div className="title">
                        <AiFillApple className="icon" />
                        Top 5 Apple
                    </div>
                    <MusicList listTitle="Lyrics available" color='#169FDB' data={audiomarkData} />
                </div>
            </div>
            <div className="buttonContainer">
                <LinkButton text="See all" color="primary" link="/" />
            </div>
        </StyledMusicTrend>
    )
}

export default MusicTrends;

const StyledMusicTrend = Styled.section`
    width: 100%;
    max-width: 100vw;
    padding: 2rem 4%;

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr)
        }

        .card {
            width: 100%;

            .title {
                display: flex;
                align-items: center;
                font-size: 1.5rem;
                font-weight: 500;
                color: #0C2333;
                margin-bottom: 1.5rem;

                img {
                    height: 3rem;
                    width: auto;
                    margin-right: 1.5rem;
                }

                .icon {
                    font-size: 3rem;
                    margin-right: 1.5rem;
                }
            }
        }
    }


    .buttonContainer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 1.5rem;
    }
`;
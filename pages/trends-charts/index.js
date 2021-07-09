import React, { useState } from 'react'

// layout
import TrendsChartsLayout from '../../layout/TrendsChartsLayout'

// styled-components
import Styled from 'styled-components'

// Components
import SingleMusicCard from '../../components/cards/SingleMusicCard';

// icons
import { AiFillApple } from 'react-icons/ai';
import { SiAudiomack } from 'react-icons/si';

// images
import mainAlbum from '../../assets/images/main-album.jpg'
import music1 from '../../assets/images/music1.png'
import music2 from '../../assets/images/music2.png'
import fem from '../../assets/images/fem.png'
import zoom from '../../assets/images/zoom.png'
import influence from '../../assets/images/influence.png'
import Accordion from '../../components/Accordion';


const topAlbum = [
    {
        imgUrl: music1,
        name: 'Infinty (ft. Omah Lay)',
        artist: 'Olamide',
        album: 'Carpe Diem',
        dur: '3:25'
    },
    {
        imgUrl: music2,
        name: 'Cash App',
        artist: 'Bella shmurda, Zlatan & Lincoln',
        album: 'Cash App - Single',
        dur: '3:25'
    },
    {
        imgUrl: fem,
        name: 'Fem',
        artist: 'Davido',
        album: 'Made In Lagos',
        dur: '3:25'
    },
]

const list = [
    {
        mainTitle: 'Top 9ja reggae',
        num: '10 songs',
        data: [
            {
                imgUrl: fem,
                title: 'Fem',
                artist: 'Davido',
                dur: '3:25',
                album: 'Made In Lagos'
            },
            {
                imgUrl: zoom,
                title: 'Zoom',
                artist: 'Cheque',
                dur: '3:25',
                album: 'Made In Lagos'
            },
            {
                imgUrl: influence,
                title: 'Bad Influence',
                artist: 'Omah Lay',
                dur: '3:25',
                album: 'Made In Lagos'
            },
            {
                imgUrl: music1,
                title: 'Do Better',
                artist: 'Olamide',
                dur: '3:25',
                album: 'Made In Lagos'
            },
            {
                imgUrl: music1,
                title: 'Do Better',
                artist: 'Olamide',
                dur: '3:25',
                album: 'Made In Lagos'
            },
        ]
    },
    {
        mainTitle: 'Latest gospels',
        num: '10 songs',
        data: [
            {
                imgUrl: fem,
                title: 'Fem',
                artist: 'Davido',
                dur: '3:25',
                album: 'Made In Lagos'
            },
            {
                imgUrl: zoom,
                title: 'Zoom',
                artist: 'Cheque',
                dur: '3:25',
                album: 'Made In Lagos'
            }
        ]
    },
]

const Trends = () => {

    const [toggle, setToggle] = useState(false) 

    return (
        <TrendsChartsLayout>
            <StyledTrends>
                <div className="tab-heading">
                    <div className={toggle ? "bg second": "bg"} />
                    <div onClick={() => setToggle(false)} className={!toggle ? "tab active" : "tab"}>
                        <AiFillApple className="icons" />
                        Apple chart
                    </div>
                    <div onClick={() => setToggle(true)} className={toggle ? "tab active" : "tab"}>
                        <SiAudiomack className="icons" />
                        Audiomack chart
                    </div>
                </div>

                <div className="grid">
                    <div className="main-card">
                        <div className="main-music">
                            <img src={mainAlbum} alt="infinity" />
                            <div className="info">
                                <div className="name">Infinity (ft. Omah Lay)</div>
                                <div className="artist">Olamide</div>
                            </div>
                        </div>

                        <div className="top-music">
                            <h1>Top 100: Nigerian Apple</h1>

                            <div className="list">
                                {
                                    topAlbum.map(({ imgUrl, name, artist, album, dur }) => (
                                        <SingleMusicCard 
                                            key={imgUrl}
                                            imgUrl={imgUrl} 
                                            title={name} 
                                            subtitle={artist} 
                                            album={album} 
                                            dur={dur} 
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="sub-bar">
                        <div className="heading">
                            Other playlists
                        </div>
                        <div className="list-content">
                            {
                                list.map(({ mainTitle, num, data }) => (
                                    <Accordion 
                                      mainTitle={mainTitle} 
                                      num={num}
                                      data={data}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </StyledTrends>
        </TrendsChartsLayout>
    )
}

export default Trends

const StyledTrends =  Styled.div`
    width: 100%;
    height: 100%;
    padding: 2.1rem 1.5rem;
    padding-right: 4%;

    .tab-heading {
        position: relative;
        background: #fff;
        display: flex;
        align-items: center;
        height: 70px;
        border-radius: 10px;
        max-width: 460px;
        margin-bottom: 2rem;

        .bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 230px;
            height: 100%;
            border-radius: 10px;
            background: #3376BC;
            z-index: 1;
            transition: .3s all ease-in-out;

            &.second {
                left: 50%;
            }

            @media (max-width: 768px) {
                width: 160px;
            }
        }

        .tab {
            position: relative;
            z-index: 1;
            width: 230px;
            height: 100%;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            font-weight: 600;
            color: #0C2333;
            cursor: pointer;

            .icons {
                font-size: 1.5rem;
                color: #0C2333;
                margin-right: 1rem;
            }

            &.active {
                color: #fff;

                .icons {
                    color: #fff;
                }
            }

            @media (max-width: 768px) {
                width: 160px;
                font-size: 1rem;

                &:last-child {
                    margin-left: 1rem;
                }

                .icons {
                    font-size: 1.2rem;
                }
            }
        }
    }

    .grid {
        width: 100%;
        display: grid;
        grid-template-columns: 60% 35%;
        grid-gap: 3rem;

        @media (max-width: 768px) {
            grid-template-columns: 100%;

        }

        .main-card {
            width: 100%;

            .main-music {
                width: 100%;
                position: relative;

                img {
                    width: 100%;
                    height: auto;
                    border-radius: 1rem;
                }

                .info {
                    position: absolute;
                    top: 1.8rem;
                    left: 2rem;

                    .name {
                        font-size: 1.3rem;
                        font-weight: 500;
                        color: #fff;
                    }

                    .artist {
                        font-size: .8rem;
                        font-weight: 500;
                        color: #fff;
                        margin-top: .7rem;
                    }
                }
            }

            .top-music {
                width: 100%;
                margin-top: 3rem;

                h1 {
                    font-size: 1.6rem;
                    font-weight: 700;
                    color: #000;
                    margin-bottom: 1.5rem;
                }
            }
        }

        .sub-bar {
            width: 100%;

            .heading {
                font-size: 1.5rem;
                font-weight: 700;
                color: #000;
                margin-bottom: 1.5rem;
            }

            .list-content {
                width: 100%;
                padding: 2.5rem 1.8rem;
                border-radius: 1rem;
                background: #fff;
            }
        }
    }
`
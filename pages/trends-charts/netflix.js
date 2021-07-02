import React, {useState} from 'react'

// layout
import TrendsChartsLayout from '../../layout/TrendsChartsLayout'

import Styled from 'styled-components'
import Slider from "react-slick"
import { Slider as MainSlider } from 'antd'
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import 'antd/dist/antd.css'

// components
import NetflixCard from '../../components/cards/NetflixCard';

// images
import rampage from '../../assets/images/rampage.jpg'
import vid1 from '../../assets/images/vid1.jpg'
import vid2 from '../../assets/images/vid2.jpg'
import vid3 from '../../assets/images/vid3.jpg'
import vid4 from '../../assets/images/vid4.jpg'

// icons
import { AiFillStar } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import { FiTrendingUp } from 'react-icons/fi'

// dummy Data
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
        imgUrl: vid3
    },
    {
        title: 'Athlete A',
        date: '2020',
        rate: '4.2',
        imgUrl: vid4
    }
]

const Netflix = () => {
    const settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    function onChange(value) {
        console.log('onChange: ', value);
    }
      
    function onAfterChange(value) {
        console.log('onAfterChange: ', value);
    }

    const [setActive, setActiveState] = useState('first')
    
    return (
        <TrendsChartsLayout>
            <StyledTrend>
                <Slider className="slider" {...settings}>
                    <div className="slider-content">
                        <img src={rampage} alt="rampage" />

                        <div className="content">
                            <div className="bigTitle">
                                Rampage
                            </div>
                            <div className="rating">
                                <AiFillStar className="icon" />
                                <span>6.9 &nbsp;</span> Action | Adventure | Sci-fi
                            </div>

                            <div className="title">Rampage</div>

                            <div className="desc">
                                When three different animals become infected with a pathogen, a primatologist and geneticist team up to stop them.
                            </div>

                            <button>
                                <div className="icon-container">
                                    <BsFillPlayFill className="icon" />
                                </div>
                                Preview
                            </button>
                        </div>
                    </div>
                </Slider>

                <div className="main-content">
                    <div className="heading">
                        <FiTrendingUp className="icon" />
                        Trends Now
                    </div>

                    <div className="button-container">
                        <button className={setActive === 'first' ? 'active' : ''} onClick={()=>setActiveState('first')}>Top 100</button>
                        <button className={setActive === 'second' ? 'active' : ''} onClick={()=>setActiveState('second')}>Popular</button>
                        <button className={setActive === 'third' ? 'active' : ''} onClick={()=>setActiveState('third')}>Megahits</button>
                    </div>

                    <div className="range-container">
                        <AiFillStar className="icon" />
                        <MainSlider className="glider" defaultValue={2} max={5} onChange={onChange} onAfterChange={onAfterChange} />
                        5.0
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
                </div>

            </StyledTrend>
        </TrendsChartsLayout>
    )
}

export default Netflix

const StyledTrend = Styled.section`
    width: 100%;

    .slider {
        width: 100%;

        .slider-content {
            width: 100%;
            position: relative;

            img {
                width: 100%;
                height: auto;
            }

            .content {
                position: absolute;
                top: 1.5rem;
                left: 3rem;

                .bigTitle {
                    font-size: 12rem;
                    font-weight: 700;
                    -webkit-text-stroke: 1px #E0CDBA;
                    -webkit-text-fill-color: transparent;
                }

                .rating {
                    display: flex;
                    align-items: center;
                    font-size: 1rem;
                    font-weight: 600;
                    color: #fff;

                    span {
                        font-size: 1.2rem;
                    }

                    .icon {
                        font-size: 1.3rem;
                        color: #FFB800;
                        margin-right: 4px;
                    }
                }

                .title {
                    font-size: 3.3rem;
                    font-weight: 700;
                    color: #fff;
                }

                .desc {
                    font-size: 1rem;
                    font-weight: 400;
                    color: #fff;
                    line-height: 1.5;
                    max-width: 480px;
                }

                button {
                    margin-top: 2rem;
                    padding: 8px;
                    border-radius: 60px;
                    background: #E50914;
                    box-shadow: 0px 4px 30px rgba(251, 6, 18, 0.6);
                    border: none;
                    outline: none;
                    display: flex;
                    align-items: center;
                    font-size: .85rem;
                    font-weight: 600;
                    color: #fff;
                    padding-right: 2rem;
                    cursor: pointer;
                    transition: all .3s ease-in-out;

                    &:hover {
                        box-shadow: 0px 8px 50px rgba(251, 6, 18, 0.6);
                        transform: scale(1.05);
                    }

                    .icon-container {
                        width: 2.1rem;
                        height: 2.1rem;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.15);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 1rem;

                        .icon {
                            font-size: 1rem;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }

    .main-content {
        width: 100%;
        padding: 1.5rem 3rem;

        .heading {
            font-size: 1.5rem;
            font-weight: 700;
            color: #000;
            padding: 1.5rem 0;
            border-bottom: 1px solid #999;
            display: flex;
            align-items: center;

            .icon {
                font-size: 2.5rem;
                color: #000;
                margin-right: 1.25rem;
            }
        }

        .button-container {
            margin: 2rem 0;
            
            button {
                padding: 1rem 3rem;
                border: 2px solid #0C2333;
                border-radius: 50px;
                font-weight: 700;
                font-size: 1rem;
                color: #0C2333;
                background: none;
                cursor: pointer;

                &:nth-child(2) {
                    margin: 0 2rem;
                }

                &.active, &:hover {
                    background: #E50914;
                    color: #fff;
                    border: none;
                }
            }
        }

        .range-container {
            display: flex;
            align-items: center;
            max-width: 300px;
            font-size: 1rem;
            color: #000;
            margin: 1rem 0;

            .icon {
                font-size: 2rem;
                color: #FFB800;
                margin-right: 4px;
            }

            .ant-slider {
                width: 100%;
                margin-left: 4px;

                .ant-slider-track {
                    background: #FFB800;
                }

                .ant-slider-handle {
                    border: solid 2px #FFB800;
                }
            }
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(min-content, 210px));
            justify-content: space-between;
            grid-gap: 2rem;
            margin: 4rem 0;

            @media (max-width: 768px) {
                width: 100%;
                grid-template-columns: repeat(1, 1fr);
                grid-gap: 3rem;
            }
        }
    }

`
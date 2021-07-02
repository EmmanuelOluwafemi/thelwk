import React, { useState, useRef } from 'react'

import Styled from 'styled-components'

// icons
import { AiOutlineRight } from 'react-icons/ai';

import fem from '../assets/images/fem.png'
import { data } from 'browserslist';


// music list inside accordion card
const AccordionCard = ({ imgUrl, title, artist, dur, album }) => (
    <StyledAccordionCard>
        <div className="card-left">
            <img src={imgUrl} alt={title} />
            <div className="details">
                <div className="name">{title}</div>
                <div className="artist">{artist}</div>
            </div>
        </div>

        <div className="card-right">
            <div className="dur">{dur}</div>
            <div className="album">{album}</div>
        </div>
    </StyledAccordionCard>
)

const Accordion = ({ mainTitle, num, data }) => {

    const [setActive, setActiveState] = useState('')
    const [setHeight, setHeightState] = useState('0px')

    const content = useRef(null)

    // handle accordion open and close
    const handleClick = () => {
        setActiveState(setActive === '' ? 'active' : '')
        setHeightState(setActive === '' ? '0px' : `${content.current.scrollHeight}px`)
    }

    return (
        <StyledAccordion className={setActive} onClick={handleClick}>
            <div className="title">
                <div className="title-left">
                    <h3>{mainTitle}</h3>
                    <p>{num}</p>
                </div>
                <div className="icon-container">
                    <AiOutlineRight className={`icon ${setActive}` } />
                </div>
            </div>
            <div ref={content} style={{ maxHeight: `${setHeight}` }} className="content">
                {
                    data.map(({ imgUrl, title, artist, dur, album }) => (
                        <AccordionCard 
                            imgUrl={imgUrl}
                            title={title}
                            artist={artist}
                            dur={dur}
                            album={album}
                        />
                    ))
                }
            </div>
        </StyledAccordion>
    )
}

export default Accordion

const StyledAccordion = Styled.div`
    width: 100%;
    cursor: pointer;

    .title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title-left {
            h3 {
                font-size: 1.3rem;
                font-weight: 700;
                color: #000;
            }

            p {
                font-weight: 500;
                font-size: .85rem;
                color: #000;
                margin-top: .6rem;
            }
        }

        .icon-container {
            width: 1.9rem;
            height: 1.9rem;
            border-radius: 50%;
            border: 1px solid #c4c4c4;
            display: flex;
            align-items: center;
            justify-content: center;
            
            .icon {
                font-size: .85rem;
                color: #000;
                transform: rotate(90deg);
                transition: all .6s ease-in-out;

                &.active {
                    transform: rotate(270deg);
                }
            }
        }
    }

    .content {
        margin-top: 2rem;
        margin-bottom: 1rem;
        overflow: hidden;
        transition: all .6s ease-in-out;
    }
`

const StyledAccordionCard = Styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    &:last-child {
        margin-bottom: 0;
    }

    .card-left {
        display: flex;
        align-items: center;

        img {
            width: 60px;
            height: auto;
        }

        .details {
            margin-left: .6rem;

            .name {
                font-size: 1.3rem;
                font-weight: 700;
                color: #000;
            }

            .artist {
                font-size: .85rem;
                font-weight: 500;
                color: #000;
                margin-top: 7px;
            }
        }
    }

    .card-right {
        .dur, .album {
            font-size: .85rem;
            font-weight: 500;
            color: #000;
            text-align: right;
        }

        .album {
            margin-top: 7px;
        }
    }
`
import React from 'react';
import Styled from 'styled-components';
import Slider from "react-slick";
import Link from 'next/link'

// Components
import {LinkButton} from './Button';

import bg1 from '../assets/images/bg1.jpg';

const Hero = () => {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function (i) {
            return <div className="dot"></div>;
        },
        dotsClass: "slick-dots slick-thumb"
    };
    return (
        <SliderContainer>
            <Slider {...settings}>
                <div>
                    <StyledHero style={{ backgroundImage: `url(${bg1})` }}>
                        <h2>Lorem ipsum dolor sit amet, consectetur</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Eu suspendisse tortor nunc arcu. Ut et netus vel tellus.</p>
                        <Link href="/register" passHref>
                            <LinkButton text="Sign up" color="primary" bg />
                        </Link>
                    </StyledHero>
                </div>
                <div>
                    <StyledHero style={{ backgroundImage: `url(${bg1})` }}>
                        <h2>Lorem ipsum dolor sit amet, consectetur</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Eu suspendisse tortor nunc arcu. Ut et netus vel tellus.</p>
                        <Link href="/register" passHref>
                            <LinkButton text="Sign up" color="primary" bg />
                        </Link>
                    </StyledHero>
                </div>
                <div>
                    <StyledHero style={{ backgroundImage: `url(${bg1})` }}>
                        <h2>Lorem ipsum dolor sit amet, consectetur</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Eu suspendisse tortor nunc arcu. Ut et netus vel tellus.</p>
                        <Link href="/register" passHref>
                            <LinkButton text="Sign up" color="primary" bg />
                        </Link>
                    </StyledHero>
                </div>
            </Slider>
        </SliderContainer>
    )
}

export default Hero;

const SliderContainer = Styled.div`
    width: 100%;
    max-width: 100vw;
    overflow: hidden;


    .slick-slider {
        .slick-dots.slick-thumb {
            top: 0;
            left: 73%;
            transform: translateX(-50%) rotate(90deg);
            pointer-events: none;

            @media (max-width: 768px) {
                top: 90%;
                left: 50%;
                transform: translateX(-50%) rotate(0);
            }

            li {
                position: relative;
                width: 1rem;
                height: 1rem;
                margin: 0 3px;
                border-radius: 999px;
                transition: all 0.5s ease-in-out;
                will-change: width;
                background-color: none;
                border: 1px solid #fff;
            }

            li.slick-active {
                &:after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 3px;
                    height: 3px;
                    background: #fff;
                    border-radius: 50%;
                }
            }
        }

    } 
`


const StyledHero = Styled.section`
    width: 100%;
    min-height: 85vh;
    padding: 0 4%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h2 {
        font-size: 3rem;
        font-weight: 600;
        max-width: 507px;
        color: #fff;
        line-height: 1.2;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
        font-weight: 400;
        color: #fff;
        line-height: 1.4;
        max-width: 507px;
        margin-bottom: 4rem;
    }
`;
import React from 'react';
import Styled from 'styled-components';
import Slider from "react-slick";
import { IoArrowForwardSharp } from 'react-icons/io5';

// Components
import {Button} from './Button';

import bg1 from '../assets/images/bg1.jpg';

const Hero = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <SliderContainer>
            <Slider {...settings}>
                <div>
                    <StyledHero style={{ backgroundImage: `url(${bg1})` }}>
                        <h2>Lorem ipsum dolor sit amet, consectetur</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Eu suspendisse tortor nunc arcu. Ut et netus vel tellus.</p>
                        <Button>
                            Sign up

                            <IoArrowForwardSharp className="icon" />
                        </Button>
                    </StyledHero>
                </div>
                <div>
                    <StyledHero style={{ backgroundImage: `url(${bg1})` }}>
                        <h2>Lorem ipsum dolor sit amet, consectetur</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Eu suspendisse tortor nunc arcu. Ut et netus vel tellus.</p>
                        <Button>
                            Sign up

                            <IoArrowForwardSharp className="icon" />
                        </Button>
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
    overflow-x: hidden;
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
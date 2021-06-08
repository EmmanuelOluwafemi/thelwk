import React from 'react';
import Styled from 'styled-components';
import Slider from "react-slick";
import { IoArrowForwardSharp } from 'react-icons/io';

// Components
import Button from './Button';

import bg1 from '../assets/images/bg1.jpg';

const Hero = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div>
                <StyledHero style={{ backgroundImage: `url(${bg1})` }}>
                    <h2>Lorem ipsum dolor sit amet, consectetur</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Eu suspendisse tortor nunc arcu. Ut et netus vel tellus.</p>
                    <Button>
                        Sign up


                    </Button>
                </StyledHero>
            </div>
        </Slider>
    )
}

export default Hero;

const StyledHero = Styled.section`
    width: 100%;
    max-width: 100vw;
    min-height: 85vh;
`;
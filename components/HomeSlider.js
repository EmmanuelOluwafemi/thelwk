import React, {useState} from 'react';

// External library
import Styled from 'styled-components';
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";

// images
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/trendNews.jpg';
import slide3 from '../assets/images/slide3.jpg';
import slide4 from '../assets/images/slide4.jpg';
import ArticleCard from './cards/ArticleCard';

// Data
const news = [
    {
        imgUrl: slide1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu...',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu...',
        date: 'December 20'
    },
    {
        imgUrl: slide2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu...',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu...',
        date: 'December 20'
    },
    {
        imgUrl: slide3,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu...',
        ads: true
    },
    {
        imgUrl: slide4,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu...',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu...',
        date: 'December 20'
    }
]

const HomeSlider = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <StyledHomeSlider>
            <Slider {...settings}>
                {
                    news.map(({ imgUrl, title, desc, date, ads }) => (
                        <ArticleCard 
                            key={imgUrl}
                            title={title}
                            imgUrl={imgUrl}
                            desc={desc}
                            date={date}
                            ads={ads}
                        />
                    ))
                }
            </Slider>
        </StyledHomeSlider>
    )
}

export default HomeSlider;

const StyledHomeSlider = Styled.div`
    width: 100%;
`;
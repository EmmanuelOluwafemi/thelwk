import React, {useState, useRef} from 'react';

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

// Icons
import { IoChevronBack } from 'react-icons/io5';
import { MdNavigateNext } from 'react-icons/md';

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
    },
    {
        imgUrl: slide1,
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
        beforeChange: (prev, next) => {
            setCurrentSlide(next)
          },
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

    const [currentSlide, setCurrentSlide] = useState(0);
    const slider = useRef(null);

    const next = () => {
        slider.current.slickNext();
    }
    const previous = () => {
        slider.current.slickPrev();
    }

    return (
        <StyledHomeSlider>
            <Slider ref={slider} {...settings}>
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

            <button className={currentSlide === 0 ? "button backward" : "button backward show"} onClick={previous}>
                    <IoChevronBack className="icon" />
                </button>
            <button className={currentSlide >= 2 ? "button forward" : "button forward show"} onClick={next}>
                <MdNavigateNext className="icon" />
            </button>
        </StyledHomeSlider>
    )
}

export default HomeSlider;

const StyledHomeSlider = Styled.div`
    width: 100%;
    position: relative;

    .button {
        position: absolute;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: none;
        outline: none;
        cursor: pointer;
        top: 35%;
        transform: translateY(-50%);
        display: none;
        background: #fff;

        &.backward {
            left: 0;
        }

        &.forward {
            left: 99%;
        }
        
        &.show {
            display: flex;
            align-items: center;
            justify-content: center;

            .icon {
                font-size: 1.5rem;
                color: #000;
            }
        }
    }
`;
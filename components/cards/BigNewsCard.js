import React, { useState, useRef } from 'react';

// External Library
import Styled from 'styled-components';
import Slider from 'react-slick';
import Link from 'next/link'

// Icons
import { IoChevronBack } from 'react-icons/io5';
import { MdNavigateNext } from 'react-icons/md';

// images
import slide2 from '../../assets/images/slide2.jpg';

// Data
const data = [
    {
        imgUrl: slide2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu...',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci pretium, 
        pharetra lacus, pulvinar habitasse faucibus. Iaculis tincidunt nisl nisl condimentum 
        velit tellus egestas platea. Morbi faucibus elementum pretium integer nec aliquam libero. 
        At facilisi eu quam at nibh sit. Vel egestas facilisi viverra duis.
        In nunc, volutpat lorem commodo tempor tincidunt porttitor rhoncus, ut. Rhoncus purus cursus
        luctus vulputate donec quam. Etiam suscipit aliquet pellentesque gravida duis. Lobortis placerat 
        sagittis, est, nulla lectus`
    },
    {
        imgUrl: slide2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu...',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci pretium, 
        pharetra lacus, pulvinar habitasse faucibus. Iaculis tincidunt nisl nisl condimentum 
        velit tellus egestas platea. Morbi faucibus elementum pretium integer nec aliquam libero. 
        At facilisi eu quam at nibh sit. Vel egestas facilisi viverra duis.
        In nunc, volutpat lorem commodo tempor tincidunt porttitor rhoncus, ut. Rhoncus purus cursus
        luctus vulputate donec quam. Etiam suscipit aliquet pellentesque gravida duis. Lobortis placerat 
        sagittis, est, nulla lectus`
    },
]

const BigNewsCard = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (prev, next) => {
          setCurrentSlide(next)
        },
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
        <StyledNewCard>
            <Slider 
                ref={slider} 
                className="slider"
                {...settings}
            >
                {
                    data.map(({ imgUrl, title, content }) => (
                        <article key={imgUrl}>
                            <img src={imgUrl} alt={title} />
                            <h4>{title}</h4>
                            <p>{content} <Link href={`/nigeria-news/${title}`}>read more...</Link></p>
                        </article>
                    ) )
                }
            </Slider>
            <div className="buttonContanier">
                <button className={currentSlide === 0 ? "button backward" : "button backward show"} onClick={previous}>
                        <IoChevronBack className="icon" />
                    </button>
                <button className={currentSlide >= 2 ? "button forward" : "button forward show"} onClick={next}>
                    <MdNavigateNext className="icon" />
                </button>
            </div>
        </StyledNewCard>
    )
}

export default BigNewsCard;

const StyledNewCard = Styled.div`
    width: 100%;

    article {
        width: 100%;

        img {
            width: 100%;
            max-width: 100%;
            border-radius: 14px;
        }

        h4 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #0C2333;
            text-align: left;
            margin-top: 2rem;
        }

        p {
            font-size: 1rem;
            color: #3F3F3F;
            text-align: left;
            line-height: 1.5;
            font-weight: 400;
            margin-top: .5rem;

            a {
                color: #3376BC !important;
                cursor: pointer;
            }
        }
    }

    .buttonContanier {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        button {
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
            border: 2px solid #CBCBCB;
            outline: none;
            background: none;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 1rem;
            cursor: pointer;
            
            .icon {
                font-size: 1.3rem;
                color: #000;
            }

            &.show {
                background: #3376BC;
                border: none;
                
                .icon {
                    color: #fff;
                }
            }
        }
    }
`;
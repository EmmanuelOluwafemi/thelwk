import React, { useState } from 'react';

// Libraries
import Styled from 'styled-components';

// Components
import {AmenitiesCard, OfficerCard} from '../../components/nigeria-info/OfficerCard';
import NigeriaInfoLayout from '../../layout/NigeriaInfoLayout';
import GridModal from '../../components/nigeria-info/GridModal';
import { BigAds } from '../../components/cards/Ads';

// images
import coat from '../../assets/images/coat.png'
import elect1 from '../../assets/images/elect-1.jpg';
import elect2 from '../../assets/images/elect-2.jpg';
import elect3 from '../../assets/images/elect-3.jpg';
import bigAds from '../../assets/images/bigAds.jpg';

// Icons
import { IoArrowForwardSharp } from 'react-icons/io5';
import AmenitiesGrid from '../../components/nigeria-info/AmenitiesGrid';

// Datas
const ElectedOfficers = [
    {
        imgUrl: elect1,
        name: 'Mohammadu Buhari',
        position: 'President Federal Republic of Nigeria'
    },
    {
        imgUrl: elect2,
        name: 'Yemi Osinbajo',
        position: 'Vice President Federal Republic of Nigeria'
    },
    {
        imgUrl: elect3,
        name: 'Mohammed Adamu',
        position: 'Inspector General of Police Federal Republic of Nigeria'
    },
    {
        imgUrl: elect3,
        name: 'Senators (234)'
    },
    {
        imgUrl: elect3,
        name: 'House of reps(234)'
    },
]

const NigerInfo = () => {

    const [modal, setModal] = useState(false);

    const handleClose = () => {
        setModal(!modal);
    }

    return (
        <NigeriaInfoLayout>
            <StyledNigerInfo>
                {
                    modal &&
                    <GridModal func={handleClose} />
                }
                <img src={coat} className="topImage" />

                <div className="subTitle">Nigeria</div>
                <div className="sectionTitle">Elected Officials</div>
                <div className="grid">
                    {
                        ElectedOfficers.map(({ imgUrl, name, position }) => (

                            <OfficerCard 
                                key={imgUrl}
                                imgUrl={imgUrl}
                                name={name}
                                position={position}
                            />
                        ))
                    }

                    <div onClick={handleClose} className="seemore">
                        Show all
                        <IoArrowForwardSharp className="icon" />
                    </div>
                </div>

                {/* Ads */}
                <BigAds img={bigAds} />
                {/* Ads Ends */}

                {/* Basic Amenities */}
                <div className="sectionTitle">Basic Amenities</div>
                <AmenitiesGrid />
            </StyledNigerInfo>
        </NigeriaInfoLayout>
    )
}

export default NigerInfo;

const StyledNigerInfo = Styled.section`
    width: 100%;
    max-width: 100vw;
    min-height: 93%;
    position: relative;
    padding: 0 4%;

    .topImage {
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
        width: 90%;
        max-width: 600px;
        height: auto;
    }

    .subTitle {
        font-size: 1.3rem;
        font-weight: 600;
        line-height: 1.6rem;
        color:#3376BC;
    }

    .sectionTitle {
        font-size: 1.3rem;
        font-weight: 600;
        color: #000;
        line-height: 1.6rem;
        margin-bottom: 1.8rem;
        margin-top: 2rem;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min-content, 170px));
        grid-gap: 2rem;
        margin-bottom: 3.5rem;

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1rem;
        }

        .seemore {
            width: 80%;
            height: 80%;
            border-radius: 1rem;
            background: #3376BC;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;

            .icon {
                font-size: 1rem;
                color: #fff;
                margin-left: 1rem;
            }
        }
    }
`;
import React from 'react';

import Styled from 'styled-components';
import { OfficerCard } from '../../components/nigeria-info/OfficerCard';
import NigeriaInfoLayout from '../../layout/NigeriaInfoLayout';
import AmenitiesGrid from '../../components/nigeria-info/AmenitiesGrid';
import NewsList from '../../components/nigeria-info/NewsList';

// images
import elect1 from '../../assets/images/elect-1.jpg';
import elect2 from '../../assets/images/elect-2.jpg';
import elect3 from '../../assets/images/elect-3.jpg';

// Datas
const data = [
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
]

const State = () => {
    return (
        <>
            <NigeriaInfoLayout>
                <StyledState>
                    <div className="subTitle">Nigeria</div>
                    <p>Appeared <span>300</span> times in the news</p>
                    <div className="sectionTitle">Elected Officials</div>

                    {/* Elected Officials */}
                    <div className="grid">
                        {
                            data.map(({ imgUrl, name, position }) => (
                                <OfficerCard 
                                    key={imgUrl}
                                    imgUrl={imgUrl}
                                    name={name}
                                    position={position}
                                />
                            ))
                        }
                    </div>

                    {/* Sections */}

                    <div className="grid">
                        <div className="card">
                            State Asssemby Members
                        </div>
                        <div className="card">
                            Local Government Members
                        </div>
                        <div className="card">
                            National Assembly Senators in the state
                        </div>
                        <div className="card">
                            House of Reps Members
                        </div>
                    </div>

                    {/* Amenities */}
                    <div className="sectionTitle">Basic Amenities</div>
                    <AmenitiesGrid />
                </StyledState>
            </NigeriaInfoLayout>
            <NewsList />
        </>
    )
}

export default State;

const StyledState = Styled.div`
    width: 100%;

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

    p {
        font-size: .9rem;
        font-weight: 400;
        color: #9C9C9C;
        line-height: 1.6rem;
        margin-bottom: 1.8rem;
        margin-top: .5rem;

        span {
            color: #3F3F3F;
        }
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

        .card {
            width: 100%;
            background: #3376BC;
            color: #fff;
            padding: 1.2rem 1rem;
            border-radius: 8px;
            text-align: center;
            cursor: pointer;
        }
    }
`;
import React from 'react';
import Styled from 'styled-components';

// component
import { AmenitiesCard } from './OfficerCard';

// icons
import hospital from '../../assets/images/hospital.svg';
import school from '../../assets/images/school.svg';
import unemployment from '../../assets/images/unemployment.svg';
import overpopulation from '../../assets/images/overpopulation.svg';
import idea from '../../assets/images/idea.svg';
import soldier from '../../assets/images/soldier.svg';
import classroom from '../../assets/images/classroom.svg';
import agriculture from '../../assets/images/agriculture.svg';
import road from '../../assets/images/road.svg';
import house from '../../assets/images/house.svg';
import law from '../../assets/images/law.svg';

const Amenities = [
    {
        imgUrl: hospital,
        num: '50',
        title: 'Hospitals'
    },
    {
        imgUrl: school,
        num: '50',
        title: 'Schools'
    },
    {
        imgUrl: unemployment,
        title: 'Unemployment'
    },
    {
        imgUrl: overpopulation,
        title: 'Population'
    },
    {
        imgUrl: idea,
        title: 'Electricity'
    },
    {
        imgUrl: soldier,
        title: 'Military'
    },
    {
        imgUrl: classroom,
        title: 'Education'
    },
    {
        imgUrl: agriculture,
        title: 'Agriculture'
    },
    {
        imgUrl: road,
        title: 'Road'
    },
    {
        imgUrl: house,
        title: 'Housing'
    },
    {
        imgUrl: law,
        title: 'Law'
    },
]

const AmenitiesGrid = () => {
    return (
        <StyledAmenities>
            {
                Amenities.map(({ imgUrl, title, num }) => (
                    <AmenitiesCard 
                        key={imgUrl}
                        imgUrl={imgUrl}
                        title={title}
                        num={num}
                    />
                ))
            }
        </StyledAmenities>
    )
}

export default AmenitiesGrid;

const StyledAmenities = Styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min-content, 140px));
    grid-gap: 1rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }
`;
import React from 'react';

import Styled from 'styled-components';
import NigeriaInfoLayout from '../../../layout/NigeriaInfoLayout';
import Link from 'next/link';

import school from '../../../assets/images/school.svg'

const School = () => {
    return (
        <NigeriaInfoLayout title="School">
            <StyledSchool>
                <Link href="/nigeria-info/schools/nwq">
                    <List>
                        <img className="icon" src={school} alt="school icon" />
                        <div className="text">Lorem Ipsum d’olo sat amet</div>
                    </List>
                </Link>
                <Link href="/nigeria-info/schools/nwq">
                    <List>
                        <img className="icon" src={school} alt="school icon" />
                        <div className="text">Lorem Ipsum d’olo sat amet</div>
                    </List>
                </Link>
                <Link href="/nigeria-info/schools/nwq">
                    <List>
                        <img className="icon" src={school} alt="school icon" />
                        <div className="text">Lorem Ipsum d’olo sat amet</div>
                    </List>
                </Link>
                <Link href="/nigeria-info/schools/nwq">
                    <List>
                        <img className="icon" src={school} alt="school icon" />
                        <div className="text">Lorem Ipsum d’olo sat amet</div>
                    </List>
                </Link>
            </StyledSchool>
        </NigeriaInfoLayout>
    )
}

export default School;

const StyledSchool = Styled.section`
    width: 100%;
`;

const List = Styled.a`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    cursor: pointer;

    .icon {
        width: 1.8rem;
        height: auto;
        margin-right: 1rem;
    }

    .text {
        font-size: 1.25rem;
        font-weight: 300;
        color: #0C2333;
    }
`;
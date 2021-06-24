import React from 'react';

import Styled from 'styled-components';

import NigeriaInfoLayout from '../../../layout/NigeriaInfoLayout';
import school from '../../../assets/images/school.svg'

const School = () => {
    return (
        <NigeriaInfoLayout title="Schools">
            <StyledSchool>
                <div className="title">
                    <img src={school} alt="school icon" />
                    Lorem Ipsum d’olo sat amet
                </div>

                <div className="content">
                    <p>Address: <span>lorem ipsum d’olo sat amet</span></p>
                    <p>Phone No: <span>09013867441</span></p>
                    <p>Reg No: <span>  - </span></p>
                </div>

                <a href="#">View Google map</a>
            </StyledSchool>
        </NigeriaInfoLayout>
    )
}

export default School;

const StyledSchool = Styled.div`
    width: 100%;

    .title {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 700;
        color: #0C2333;

        img {
            width: 50px;
            height: auto;
            margin-right: 1.5rem;
        }
    }

    .content {
        margin-top: 1.5rem;
        margin-bottom: 4rem;

        p {
            font-size: 1.125rem;
            font-weight: 600;
            color: #0C2333;

            span {
                font-weight: 400;
            }
        }
    }

    a {
        padding: 1.25rem 4rem;
        background: #3376BC;
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 1rem;
    }
`;
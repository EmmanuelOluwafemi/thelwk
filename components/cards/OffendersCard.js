import React, { useState } from 'react'

import Styled from 'styled-components';

import {Button} from '../Button';
import SubscriptionModal from '../SubscriptionModal';

const OffendersCard = ({imgUrl, name, offence, date }) => {

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(!modal)
    }

    return (
        <StyledOffenders>
            {
                modal &&
                <SubscriptionModal handleClose={openModal} />
            }
            <img src={imgUrl} alt={name} />
            <div className="content">
                <div className="name">{name}</div>
                <div className="content-container">
                    <div className="label">Offence committed:</div>
                    <div className="new">{offence}</div>
                </div>
                <div className="content-container">
                    <div className="label">Date Convicted</div>
                    <div className="new">{date}</div>
                </div>
                <Button func={openModal}>More Details</Button>
            </div>
        </StyledOffenders>
    )
}

export default OffendersCard;

const StyledOffenders = Styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    img {
        width: 100%;
        height: auto;
        border-radius: .9rem;
    }

    .content {
        padding: .5rem 0;

        .name {
            font-size: .9rem;
            font-weight: 700;
            color: #000;
        }

        .content-container {
            .label {
                font-size: .9rem;
                font-weight: 700;
                color: #999999;
                margin-bottom: .4rem;
            }

            .new {
                font-size: .9rem;
                font-weight: 700;
                color: #000;
                margin-bottom: .4rem;
            }
        }
    }
`;
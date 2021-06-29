import React from 'react';

import Styled from 'styled-components';
import SubscriptionCard from './cards/SubscriptionCard';
import Modal from './Modal';

import basic from '../assets/icons/basic.svg';
import premium from '../assets/icons/premium.svg';

const data = [
    {
        imgUrl: basic,
        title: 'Basic',
        price: 3000,
        plans: ['lorem ipsumdj', 'lorem ipsumsa', 'lorem ipsumjg']
    },
    {
        imgUrl: premium,
        title: 'Premium',
        price: 6000,
        plans: ['lorem ipsumh', 'lorem ipsumjkfd', 'lorem ipsumjdfhjkds']
    },
]

const SubscriptionModal = ({ handleClose }) => {
    return (
        <StyledModal>
            <Modal handleClose={handleClose}>
                <div>
                    <div className="container-new">
                        {
                            data.map(({imgUrl, title, price, plans}) => (
                                <SubscriptionCard
                                    key={imgUrl}
                                    imgUrl={imgUrl}
                                    title={title}
                                    price={price}
                                    plans={plans}
                                />
                            ))
                        }
                    </div>

                    <div className="buttonContainer">
                        <button>
                            Proceed
                        </button>
                    </div>
                </div>
            </Modal>
        </StyledModal>
    )
}

export default SubscriptionModal;

const StyledModal = Styled.div`
    width: 100%;

    .container-new {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
        }
    }

    .buttonContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3rem;

        button {
            height: 56px;
            width: 100%;
            max-width: 200px;
            background: #3376BC;
            color: #fff;
            border: none;
            border-radius: 50px;
            outline: none;
            cursor: pointer;

            &:hover {
                transform: scale(1.05);
            }
        }
    }
`;
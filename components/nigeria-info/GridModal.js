import React from 'react';

import Styled from 'styled-components';
import Modal from '../../components/Modal';

import elect from '../../assets/images/elect-1.jpg';

const data = [
    {
        imgUrl: elect,
        title: 'Mohammadu Buhari',
        position: 'President Federal Republic of Nigeria'
    },
    {
        imgUrl: elect,
        title: 'Yemi Osinbajo',
        position: 'Vice President Federal Republic of Nigeria'
    },
    {
        imgUrl: elect,
        title: 'Mohammadu Buhari',
        position: 'President Federal Republic of Nigeria'
    },
    {
        imgUrl: elect,
        title: 'Mohammadu Buhari',
        position: 'President Federal Republic of Nigeria'
    },
    {
        imgUrl: elect,
        title: 'Mohammadu Buhari',
        position: 'President Federal Republic of Nigeria'
    },
    {
        imgUrl: elect,
        title: 'Mohammadu Buhari',
        position: 'President Federal Republic of Nigeria'
    },
    {
        imgUrl: elect,
        title: 'Mohammadu Buhari',
        position: 'President Federal Republic of Nigeria'
    },
    {
        imgUrl: elect,
        title: 'Mohammadu Buhari',
        position: 'President Federal Republic of Nigeria'
    },
]

const GridModal = ({ func }) => {
    return (
        <ModalContainer>
            <Modal handleClose={func}>
                <h3>Elected Officials In Nigeria</h3>
                <div className="modalGrid">
                    {
                        data.map(({ imgUrl, title, position }) => (
                            <div className="card">
                                <img src={imgUrl} alt={title} />
                                <div className="title">{title}</div>
                                <div className="position">{position}</div>
                            </div>
                        ))
                    }
                </div>
            </Modal>
        </ModalContainer>
    )
}

export default GridModal;

const ModalContainer = Styled.div`
    width: 100%;

    h3 {
        font-size: 1.4rem;
        font-weight: 600;
        color: #000;
    }

    .modalGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min-content, 220px));

        .card {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 2rem;
            border-radius: 40px;
            cursor: pointer;

            img {
                width: 5rem;
                height: 5rem;
                border-radius: 50%;
            }

            .name {
                font-size: 1rem;
                font-weight: 700;
                color: #000;
                text-align: center;
                margin-top: 8px;
            }

            .position {
                font-size: .8rem;
                font-weight: 400;
                color: #9C9C9C;
                text-align: center;
                margin-top: 4px;
            }

            &:hover {
                background: #DEEEFF;

                img {
                    border: 2px solid #fff;
                }
            }
        }
    }
`;


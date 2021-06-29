import React from 'react';

import Styled from 'styled-components';

import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ children, handleClose }) => {
    return (
        <StyledModal onClick={handleClose}>
            <div className="container">
                <div onClick={handleClose} className="close">
                    <AiOutlineClose className="icon" />
                </div>
                {
                    children
                }
            </div>
        </StyledModal>
    )
}

export default Modal;

const StyledModal = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;

    .container {
        width: 100%;
        max-width: 1000px;
        min-height: 600px;
        border-radius: 10px;
        position: relative;
        background: #fff;
        padding: 2.5rem 3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        @media( max-width: 768px ) {
            min-height: 300px;
            max-width: 90vw;

            overflow: auto;
        }
        
        .close {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(145, 187, 229, 0.3);
            cursor: pointer;

            .icon {
                font-size: 1rem;
                color: #3376BC;
            }

            &:hover {
                background: rgba(145, 0, 0, 0.3);

                .icon {
                    color: rgba(145, 0, 0, 1);
                }
            }
        }
    }
`;
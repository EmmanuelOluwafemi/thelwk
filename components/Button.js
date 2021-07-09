import React from 'react';
import Styled from 'styled-components';
import Link from 'next/link'

// Icons
import { IoArrowForwardSharp } from 'react-icons/io5';

export const Button = ({ children, func }) => {
    return (
        <StyledButton onClick={func}>
            {children}
        </StyledButton>
    )
}

export const LinkButton = React.forwardRef(({ onClick, href, text, color, bg }, ref) => {
    return (
        <LinkButtonStyled href={href} onClick={onClick} ref={ref} style={{ backgroundColor: `${bg ? '#3376BC' : ''}`, color: `${bg ? '#fff': ''}`  }} className={color === 'primary' ? 'primary' : ''}>
            {text}
            <IoArrowForwardSharp className="icon" />
        </LinkButtonStyled>
    )
})

const StyledButton = Styled.button`
    padding: 1.05rem 1.0625rem;
    background: #3376BC;
    border-radius: 60px;
    color: #fff;
    font-size: 1.125rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all .5s ease-in;
    display: flex;
    align-items: center;

    .icon {
        margin-left: 1.5rem;
    }

    &:hover {
        transform: scale(1.05);
    }
`;

const LinkButtonStyled = Styled.a`
    padding: 1rem 1.6rem;
    border: 1.5px solid #fff;
    background: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 220px;
    cursor: pointer;

    &.primary {
        color: #3376BC;
        border: 1.5px solid #3376BC;
    }

    .icon {
        margin-left: 1rem;
    }
`;
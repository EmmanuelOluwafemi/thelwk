import React from 'react';
import Styled from 'styled-components';

const Button = ({ children, func }) => {
    return (
        <StyledButton onClick={func}>
            {children}
        </StyledButton>
    )
}

export default Button;

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

    &:hover {
        transform: scale(1.05);
    }
`;
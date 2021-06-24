import React from 'react';
import Styled from 'styled-components';

const Footer = () => {
    return (
        <StyledFooter>
            © TheLWK
        </StyledFooter>
    )
}

export default Footer;

const StyledFooter = Styled.footer`
    width: 100%;
    padding: 0 4%;
    max-width: 100vw;
    height: 94px;
    background: #0C2333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
`;
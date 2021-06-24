import React from 'react';
import Styled from 'styled-components'

const Subscribe = () => {
    return (
        <StyledSubscribe>
            <h6>
                Subscribe to our mailing list
            </h6>
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
        </StyledSubscribe>
    )
}

export default Subscribe;

const StyledSubscribe = Styled.form`
    width: 100%;
    padding: 1.5rem 2rem;
    border-radius: .75rem;
    background: #0C2333;

    h6 {
        text-align: center;
        font-weight: 700;
        font-size: 1.125rem;
        color: #fff;
        margin-bottom: 1rem;
    }

    input {
        width: 100%;
        height: 64px;
        border-radius: 50px;
        border: none;
        outline: none;
        padding: 22px 24px;
        background: #0D2F47;
        color: #fff;
        font-size: 1rem;
    }

    button {
        width: 100%;
        height: 64px;
        border-radius: 50px;
        outline: none;
        border: none;
        margin-top: 1.5rem;
        border-radius: none;
        color: #fff;
        font-size: 1.2rem;
        font-weight: 600;
        background: #3376BC;
        cursor: pointer;
    }
`;
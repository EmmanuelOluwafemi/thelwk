import React from 'react';
import Styled from 'styled-components';

import Link from 'next/link';

import useRouter from 'next/router';

import Button from './Button';

const Header = () => {

    // let router = useRouter();

    const handleFunc = () => {
        // router.push('/');    
    }

    return (
        <StyledHeader>
            <div className="logo">logo</div>
            <div className="menu">
                <Link href="/">Home</Link>
                <Link href="/twitter">Twitter trends</Link>
                <Link href="/news">Nigeria News</Link>
                <Link href="/login">Login</Link>
                <Button func={handleFunc}>Sign up</Button>
            </div>
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = Styled.header`
    width: 100%;
    max-width: 100%;
    min-height: 80px;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .menu {
        a {
            margin-right: 2.1rem;
            font-size: 1.125rem;
            font-weight: 600;
            color: #0C2333;
        }
    }
`;
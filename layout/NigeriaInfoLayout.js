import 'antd/dist/antd.css';

import '../styles/nigeriaInfo.module.css'

import React, { useState } from 'react';

import Styled from 'styled-components';
import Header from '../components/Header';
import NaijaStates from 'naija-state-local-government';

// External Library
import { Select } from 'antd';

const { Option } = Select;

const NigeriaInfoLayout = ({ children, title }) => {

    const [state, setState] = useState('')
    const [lgas, setLg] = useState([])

    const handleOnchange = (value) => {
        setState(value)

        setLg(NaijaStates.lgas(value).lgas)

        console.log(lgas)
    }

    return (
        <>
        <Header />
        <StyledLayout>
            <div className="container">
                <div className="heading">
                    {title && <h4>{title}</h4>}
                    <div className="selectContainer">
                        <Select defaultValue="Select State" className="selector" onChange={handleOnchange}>
                            {
                                NaijaStates.states().map((state) => (
                                    <Option key={state} value={state}>{state}</Option>
                                ))
                            }
                        </Select>
                        <Select defaultValue="Select LGA" className="selector">
                            {
                                lgas.length && lgas.map((lg) => (
                                    <Option key={lg} value={lg}>{lg}</Option>
                                ))
                            }
                        </Select>
                    </div>
                </div>
                { children }
            </div>
        </StyledLayout>
        </>
    )
}

export default NigeriaInfoLayout;

const StyledLayout = Styled.div`
    width: 100%;

    .container {
        padding: 0 4%;
    }

    .heading {
        display: flex;
        align-items: center;

        h4 {
            font-size: 2rem;
            font-weight: 600;
            color: #000;
            margin-right: 2.5rem;
        }
    }

    .selectContainer {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        width: 100%;
        max-width: 600px;
        margin: 3rem 0;

        .selector {
            width: 100%;
            border-radius: 32px;

            .ant-select-selector {
                height: 48px;
                border-radius: 32px;
            }
        }
    }

`;
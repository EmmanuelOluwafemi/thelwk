import 'antd/dist/antd.css';
import React from 'react';

import Styled from 'styled-components';

import {LoggedHeader} from '../../../components/Header';
import OffendersCard from '../../../components/cards/OffendersCard';

import { Select } from 'antd';

// icon
import { IoChevronBackOutline } from 'react-icons/io5';

const { Option } = Select;

// image
import offender1 from '../../../assets/images/offender1.jpg';

const Offenders = () => {
    return (
        <>
            <LoggedHeader />
            <OffendersContainer>
                <div className="heading">
                    <div className="back">
                        <IoChevronBackOutline className="icon" />
                    </div>

                    <div className="title">Law Offenders</div>
                    <Select defaultValue="All" className="selector">
                        <Option value='All'>All</Option>
                        <Option value='Sport'>Sport</Option>
                        <Option value='Entertainment'>Entertainment</Option>
                        <Option value='Business'>Business</Option>
                        <Option value='Polities'>Polities</Option>
                    </Select>
                </div>

                <div className="grid">
                    <OffendersCard name='Adewale Adejobi' imgUrl={offender1} offence='rape' date='April 20, 2012' />
                    <OffendersCard name='Adewale Adejobi' imgUrl={offender1} offence='rape' date='April 20, 2012' />
                    <OffendersCard name='Adewale Adejobi' imgUrl={offender1} offence='rape' date='April 20, 2012' />
                    <OffendersCard name='Adewale Adejobi' imgUrl={offender1} offence='rape' date='April 20, 2012' />
                    <OffendersCard name='Adewale Adejobi' imgUrl={offender1} offence='rape' date='April 20, 2012' />
                    <OffendersCard name='Adewale Adejobi' imgUrl={offender1} offence='rape' date='April 20, 2012' />
                    <OffendersCard name='Adewale Adejobi' imgUrl={offender1} offence='rape' date='April 20, 2012' />
                    <OffendersCard name='Adewale Adejobi' imgUrl={offender1} offence='rape' date='April 20, 2012' />
                    <OffendersCard name='Adewale Adejobi' imgUrl={offender1} offence='rape' date='April 20, 2012' />
                    <OffendersCard name='Adewale Adejobi' imgUrl={offender1} offence='rape' date='April 20, 2012' />
                    <OffendersCard name='Adewale Adejobi' imgUrl={offender1} offence='rape' date='April 20, 2012' />
                    <OffendersCard name='Adewale Adejobi' imgUrl={offender1} offence='rape' date='April 20, 2012' />
                    <OffendersCard name='Adewale Adejobi' imgUrl={offender1} offence='rape' date='April 20, 2012' />
                    <OffendersCard name='Adewale Adejobi' imgUrl={offender1} offence='rape' date='April 20, 2012' />
                    <OffendersCard name='Adewale Adejobi' imgUrl={offender1} offence='rape' date='April 20, 2012' />
                </div>
            </OffendersContainer>
        </>
    )
}

export default Offenders;

const OffendersContainer = Styled.section`
    width: 100%;
    max-width: 100vw;
    padding: 0 4%;
    padding-bottom: 8rem;

    .heading {
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 2.5rem;
        margin-bottom: 3rem;

        .back {
            width: 56px;
            height: 56px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #000;
            margin-right: 2rem;

            .icon {
                font-size: 1.5rem;
                color: #000;
            }
        }

        .title {
            font-size: 2rem;
            font-weight: 600;
            color: #000;
            margin-right: 2.5rem;

            @media (max-width: 768px) {
                font-size: 1.3rem;
            }
        }

        .selector {
            margin-left: 2rem;
            width: 100%;
            max-width: 124px;
            border-radius: 32px;

            .ant-select-selector {
                border-radius: 32px;
            }
        }
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min-content, 350px));
        grid-gap: 3rem;
        justify-content: space-between;
    }
`;
import 'antd/dist/antd.css';
import {LoggedHeader} from '../../components/Header'
import React from 'react';

import Styled from 'styled-components';

// image
import blogImage from '../../assets/images/blogImage.jpg';

// External Library
import { Select } from 'antd';
import BlogSideBar from '../../components/BlogSideBar';

const { Option } = Select;

const NigeriaNews = () => {
    return (
        <>
            <LoggedHeader />

            <TwoGrid>
                <div className="news">
                    <div className="title-container">
                        <div className="title">Today's News</div>
                        <Select defaultValue="All" className="selector">
                            <Option value='All'>All</Option>
                            <Option value='Sport'>Sport</Option>
                            <Option value='Entertainment'>Entertainment</Option>
                            <Option value='Business'>Business</Option>
                            <Option value='Polities'>Polities</Option>
                        </Select>
                    </div>
                    <div className="news-container">
                        <img src={blogImage} alt="post" />
                        <div className="blog-title">
                            The world’s clamour now asides COVID-19 is to #EndPoliceBrutality in Nigeria.
                        </div>
                        <div className="subtitle">
                            Source: punch news
                        </div>

                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod nibh eu egestas pharetra pellentesque. 
                        Feugiat aliquet venenatis commodo, mattis proin ultrices dolor id pulvinar. Ultrices tortor dignissim et 
                        elementum ac pellentesque natoque adipiscing volutpat. Amet, morbi elementum, aliquam et morbi pellentesque 
                        id amet, tellus. Blandit laoreet eget semper dictum ornare accumsan, pulvinar.
                        In aliquet facilisi quis et tristique. Iaculis vulputate non et adipiscing odio eget morbi mauris 
                        pellentesque. Duis sit maecenas maecenas elementum. Arcu, massa 
                        <br /><br />
                        penatibus eu facilisis dolor odio consequat sed. Sed congue velit tellus malesuada eleifend ac nec sit 
                        suspendisse. Vestibulum pharetra est quis ultrices nec neque, cursus magna venenatis. Ut adipiscing amet 
                        ac magna. Vestibulum aliquam suscipit suspendisse eget. Risus imperdiet porttitor congue vulputate enim 
                        dictum. Urna, massa viverra vulputate egestas ultrices. Nunc faucibus lectus rhoncus urna. Dapibus eu 
                        tempor amet, nulla curabitur in rutrum mattis congue. Condimentum sollicitudin id vitae massa, laoreet 
                        ipsum ultrices ut. Sagittis turpis egestas sit suspendisse non, vel nisl vitae. Sapien, 
                        ac ante egestas morbi aliquet egestas arcu.
                        </p>
                    </div>
                </div>
                <BlogSideBar />
            </TwoGrid>
        </>
    )
}

export default NigeriaNews

const TwoGrid = Styled.div`
    width: 100%;
    max-width: 100vw;
    padding: 2rem 4%;
    display: grid;
    grid-template-columns: 6fr 3fr;
    grid-gap: 2rem;

    .news {
        width: 100%;

        .title-container {
            display: flex;
            align-items: center;

            .title {
                font-size: 2rem;
                font-weight: 700;
                color: #000;
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

        .news-container {
            width: 100%;
            padding: 1rem;
            border-radius: 14px;
            margin-top: 2rem;
            background: #fff;

            img {
                width: 100%;
                height: auto;
                border-radius: 14px;
            }
            .blog-title {
                font-size: 1.5rem;
                font-weight: 600;
                color: #000;
                margin-top: 1rem;
            }

            .subtitle {
                font-size: .85rem;
                font-weight: 400;
                color: #999;
                margin-bottom: 2rem;
            }

            p {
                font-size: 1.2rem;
                font-weight: 400;
                color: #000;
                line-height: 1.5;
            }

        }

    }
`;
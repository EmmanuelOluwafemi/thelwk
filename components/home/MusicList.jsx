import React from 'react';
import Styled from 'styled-components';

// components
import SingleMusicCard from '../cards/SingleMusicCard';

const MusicList = ({ listTitle, data, color }) => {
    return (
        <StyledList>
            <div className="titlenew" style={{ background: `${color}` }}>{listTitle}</div>
            <div className="list">
                {
                    data.map(({imgUrl, title, subtitle, album, dur}) => (
                        <SingleMusicCard 
                            key={imgUrl}
                            imgUrl={imgUrl}
                            title={title}
                            subtitle={subtitle}
                            album={album}
                            dur={dur}
                        />
                    ))
                }
            </div>
        </StyledList>
    )
}

export default MusicList;

const StyledList = Styled.div`
    width: 100%;
    min-height: 150px;

    .titlenew {
        padding: 4px 8px;
        border-radius: 8px 8px 0px 0px;
        color: #fff;
        font-size: .9rem;
        font-weight: 400;
        margin-left: 4px;
        max-width: 200px;
    }

    .list {
        width: 100%;
    }
`
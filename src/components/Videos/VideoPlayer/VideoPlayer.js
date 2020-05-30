import React from 'react'
import ReactPlayer from 'react-player';

import './VideoPlayer.css'

const VideoPlayer = (props) => {
    return (
        <div className="wrapper">
            <ReactPlayer
                className="player"
                width="100%"
                height="240px"
                controls
                url={props.url} />
        </div>
    )
}

export default VideoPlayer

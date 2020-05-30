import React from 'react'

import Header from '../Header/Header'
import VideoPlayer from './VideoPlayer/VideoPlayer'
import './Videos.css'

const urls = [
    {url: 'https://www.youtube.com/watch?v=AuVHftBiDVw'},
    {url: 'https://www.youtube.com/watch?v=bNpx7gpSqbY'},
    {url: 'https://www.youtube.com/watch?v=5JKgUoY9pTg'},
    {url: 'https://www.youtube.com/watch?v=9q4ExgXBxL0'},
    {url: 'https://www.youtube.com/watch?v=S_wNRx7f7rU'}
]

const Videos = () => {
    const videoPlayer = urls.map((video, i) => (
        <VideoPlayer key={i} url={video.url} />
    ));

    return (
        <div className="videos">
            <Header name='Videos' />
            {videoPlayer}
        </div>
    )
}

export default Videos

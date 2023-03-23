import React from 'react';
import VideoItem from './VideoItem'
import './VideoList.css'

const VideoList = ({videos, count, onVideoSelect}) => {

    const renderedList = videos.map(video =>{
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
});




    return <div className="video-list ui relaxed divided list">
        <p className='ui small header'>There are currently {count} videos </p>
        {renderedList}
    </div>

}

export default VideoList;
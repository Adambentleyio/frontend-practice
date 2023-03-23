import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('buildings')

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    // setSelectedVideo(response.data.items[0]);


    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                <div className="nine wide column"><VideoDetail video={selectedVideo} /></div>
                <div className="seven wide column"><VideoList
                videos={videos}
                onVideoSelect={setSelectedVideo} /></div>
                </div>
            </div>
        </div>
            )

};


export default App
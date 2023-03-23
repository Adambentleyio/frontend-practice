import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { videos: [], selectedVideo: null};

    componentDidMount() {
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            q: term
        });
        console.log(response.data.items)
        this.setState( {videos: response.data.items})

        this.setState( { videos: response.data.items, selectedVideo: response.data.items[0] });
    }



    onVideoSelect = (video) => {
        console.log('From the App', video)
        this.setState({ selectedVideo: video })

    }

    render(){
        return (
        <div>
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                <div className="nine wide column"><VideoDetail video={this.state.selectedVideo} /></div>
                <div className="seven wide column"><VideoList videos={this.state.videos} count={this.state.videos.length} onVideoSelect={this.onVideoSelect} /></div>
                </div>
            </div>
        </div>
            )
    }
}

export default App
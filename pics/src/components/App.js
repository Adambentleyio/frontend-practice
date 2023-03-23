import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

// 2 different ways of network requests. Promise, or Async
// onSearchSubmit(term) {
//    axios.get(URL, {
//    params: { query: term }
//    }).then((response) = > console.log(response.data.results))
//  // // // // // /// // // //
//  async onSearchSubmit(term) {
//  const response = await axios.get(url , {params: { query: term }})
//  )};
//  console.log(response.data.results)

class App extends React.Component {

    state = { images: [], }

    onSearchSubmit = async term => {
         const response = await unsplash.get('/search/photos',{
            params: { query: term },
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
    <div className="ui container" style= {{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
    </div>
    );
}
}

export default App
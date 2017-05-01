import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = process.env.API_KEY; // Now in env variables

// Create a new component. This component should produce some HTML.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // console.log(data);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}

// Take this components genereated HMTL and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

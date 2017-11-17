import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/search_bar';
import VideoList from './components/video_list'

import API_KEY from './credentials';

// create a new component. This component should produce
// some HTML
class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            //console.log(data);
            this.setState({ videos });
            //this.setState({videos:videos});
        });
    }

    render() {
        return (
            <div>
                <Searchbar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }

}
//passing a prop:
//videos={this.state.videos}

//Take this component generated HTML and put it
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
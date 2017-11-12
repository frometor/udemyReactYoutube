import React from 'react';
import ReactDOM from 'react-dom'

import Searchbar from './components/search_bar'
import API_KEY from './credentials'

// create a new component. This component should produce
// some HTML
const App = () => {
    return (
        <div>
            <Searchbar />
        </div>
    );
}

//Take this component generated HTML and put it
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
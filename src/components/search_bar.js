// import react and pull of Component as "Component"
import React, { Component } from 'react';

//class based component
// neccessary when state changes
class SearchBar extends Component {

    //called whenever new Searchbar is instantiated
    constructor(props) {

        //use methods from parent
        super(props);

        this.state = { term: '' }
    }

    //must have
    render() {
        //BAD!!
        // this.state.term = event.target.value
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}
/*
// functional component
const SearchBar = () => {
    return <input />
};
*/

// export it so that others can import it
export default SearchBar;
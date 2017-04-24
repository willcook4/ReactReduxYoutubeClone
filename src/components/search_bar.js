import React, { Component } from 'react';

// Make an API request to the youtube API from the text input in the box

// Functional Component:
// const SearchBar = () => {
//   return <input />;
// };

// Class based component: Only these have have state
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};  // term is short for search term
  }



  render() {
    return (
      <div>
        <input
          value={ this.state.term }
          onChange={event => this.setState({ term: event.target.value })} />
        {/* Value of the input: { this.state.term } */}
      </div>
    );
  }

  // onInputChange(event) {
  //   // This declares a custom Event handler...
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
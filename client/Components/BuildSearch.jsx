import React from 'react';

class BuildSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      radius: 5
    };
  }

  componentDidMount() {
    /* global $ */

    $('input.location').autocomplete({
      source: (search, result) => {
        const suggestionReqest = new Request('/api/locations/suggestions/', {
          method: 'POST',
          body: JSON.stringify({ search: search.term }),
          headers: { 'Content-Type': 'application/json' }
        });

        fetch(suggestionReqest)
          .then((res) => res.json())
          .then((res) => result(res))
          .catch((err) => console.log(err));
      },
      delay: 100
    });
  }

  searchFor() {
    this.setState({ search: this.refs.search.value });
  }

  radiusTo() {
    this.setState({ radius: this.refs.radius.value });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          list="location-list"
          ref="search"
          className="autocomplete location"
          onChange={this.searchFor.bind(this)}
          placeholder="enter location name or coordinates"/>
        <div className="row">
          <p className="col s4 center">radius: {this.state.radius} mi</p>
          <p className="range-field col s8">
            <input
              ref="radius"
              onChange={this.radiusTo.bind(this)}
              type="range"
              defaultValue="5"
              max="25"
              step="0.1"/>
          </p>
        </div>
      </form>
    );
  }
}

export default BuildSearch;

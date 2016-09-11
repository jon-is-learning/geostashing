import React from 'react';

class BuildSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { search: '' };
  }

  searchFor() {
    this.setState({ search: this.refs.search.value });
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
        <LocationSuggest search={this.state.search} />
      </form>
    );
  }
}


class LocationSuggest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  getSuggestions(search) {
    if (search.length === 0) {
      this.setState({ results: [] });

      return;
    }

    const suggestionReqest = new Request('/api/locations/suggestions/', {
      method: 'POST',
      body: JSON.stringify({ search }),
      headers: { 'Content-Type': 'application/json' }
    });

    fetch(suggestionReqest)
      .then((res) => res.json())
      .then((res) => this.setState({ results: res }))
      .catch((err) => console.log(err));
  }


  componentWillReceiveProps(newProps) {
    this.getSuggestions(newProps.search);
  }

  render() {
    return (
      <datalist id="location-list">
        {
          this.state.results.map((sugg, index) =>
            <option key={index}>{sugg}</option>)
        }
      </datalist>
    );
  }
}

LocationSuggest.propTypes = { search: React.PropTypes.string };

export default BuildSearch;

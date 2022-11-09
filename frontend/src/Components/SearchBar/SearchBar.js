import {Component} from 'react'

class SearchBar extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
    };

    this.handleTerm = this.handleTerm.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleTerm(event) {
    this.setState({term: event.target.value});
  }

  handleLocation(event) {
    this.setState({location: event.target.value});
  }

  handleSearch() {
    this.props.searchYelp(this.state.term, this.state.location);
  }

  render() {
    return (
      <div className='body'>
        <div className='header'> Search for Restaurants </div>
        <div className='Input boxes'>
            <input placeholder="Type of Food" onChange={this.handleTerm} className='searchbar'/>
            <input placeholder="Location" onChange={this.handleLocation} className='searchbar'/>
            <button onClick={this.handleSearch} className='Search-btn'>Search Crash button</button> {/*This will crash you if you click right now*/}
        </div>
      </div>
    );
  }
}

export default SearchBar;
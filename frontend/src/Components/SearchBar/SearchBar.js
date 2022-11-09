import {Component} from 'react'

class SearchBar extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
    };
    this.handleLocation = this.handleLocation.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
            <input placeholder="City/Zipcode" onChange={this.handleLocation} className='searchbar'/>
            <button onClick={this.handleSearch} className='Search-btn'>Search Crash button</button> {/*This will crash you if you click right now*/}
        </div>
      </div>
    );
  }
}

export default SearchBar;
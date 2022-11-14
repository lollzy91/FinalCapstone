import {Component} from 'react';

export default class SearchBar extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleTermChange(event) {this.setState({term: event.target.value});}

  handleLocationChange(event) {this.setState({location: event.target.value});}

  handleSearch(event) {
    event.preventDefault();
    this.props.searchYelp(this.state.term, this.state.location);
  }

  render() {
    return (
      <div className='searchbar-holder'>
        <div className='Header'>Restaurants for Food</div>
          <div>
            <input placeholder="type of food" onChange={this.handleTermChange}  className='searchbar-Input'/>
            <input placeholder="location" onChange={this.handleLocationChange}className='searchbar-Input'/>
            <button onClick={this.handleSearch} className='Search-btn'>Search</button>
          </div>
        </div>
    );
  }
}
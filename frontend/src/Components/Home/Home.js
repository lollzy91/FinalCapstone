import {Component} from 'react';
import apiData from '../hooks/yelp-api/api';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../Business/BusinessList';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: []
    };

    this.searchData = this.searchData.bind(this);
  }

  searchData(term, location) {
      apiData.search(term, location).then(businesses => {
      this.setState({businesses: businesses});
    });
  }

  render() {
    return (
       <div className='Content-Container'>
        <SearchBar searchYelp={this.searchData} />
        <BusinessList businesses={this.state.businesses} />
        </div>
    );
  }
}



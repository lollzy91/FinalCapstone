import React, {Component} from 'react';
import Business from '../Business/Business';

export default class BusinessList extends Component {
  render() {
    return (
      <div className='list'>
        <div className='businesses'>
        {
          (this.props.businesses && this.props.businesses.map(business => {
            return (<Business business={business} key={business.id} /> )}))
        }
        </div>
      </div>
    );
  }
}

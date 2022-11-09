import {Component} from 'react'

class RestaurantsList extends Component{

    render()
    {
        return (
            <div className='businessList'>
              <div className='business'>
              {
                (this.props.businesses && this.props.businesses.map(business => {
                  return (
                  {}
                )}))
              }
              </div>
            </div>
          );
    }
}

export default RestaurantsList;
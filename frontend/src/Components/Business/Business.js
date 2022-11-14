import React from 'react';
//import BusinessHours from './BusinessHours'
export default function Business (props) {
  return (
      <div className="business">
      <div className="Header Bussiness-Name">{props.business.name}</div>
        <br/>
        <img src={props.business.imageSrc} alt='' className='business-image' />
        <button className='view-more'>View More Details</button>
        <p>{props.business.transactions[0]} {props.business.transactions[1]} {props.business.transactions[2]}</p>
        <p>{props.business.isClosed}</p>
        <p>{props.business.address} {props.business.city} {props.business.state} {props.business.zipCode}</p>
        <p>Contact Number: {props.business.displayPhone}</p>
        <p>Type: {props.business.category}</p>
        <p>{`${props.business.rating} stars`}</p>
      </div>
    )
}
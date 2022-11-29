import BusinessHours from './BusinessHours'
import axios from 'axios';
import { useState } from 'react';
import {BEARER_TOKEN, API_BASE_URL} from '../hooks/yelp-api/config'

/*
  The token can't be accessed from here so this function saves the restraunt info to an array of objects. 
  Another function in CreatorInvite will save it to the DB to create the request 
*/
export const mapToArray = []


export default function Business (props) {
  const [showDetails, setShowDetails] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mondayStart, setMondayStart] = useState('Closed');
  const [mondayEnd, setMondayEnd] = useState('Closed');
  const [tuesdayStart, setTuesDayStart] = useState('Closed');
  const [tuesdayEnd, setTuesdayEnd] = useState('Closed');
  const [wednesdayStart, setWednesdayStart] = useState('Closed');
  const [wesnesdayEnd, setWednesdayEnd] = useState('Closed');
  const [thursdayStart, setThursdayStart] = useState('Closed');
  const [thursdayEnd, setThursdayEnd] = useState('Closed');
  const [fridayStart, setFridayStart] = useState('Closed');
  const [fridayEnd, setFridayEnd] = useState('Closed');
  const [saturdayStart, setSaturdayStart] = useState('Closed');
  const [saturdayEnd, setSaturdayEnd] = useState('Closed');
  const [sundayStart, setSundayStart] = useState('Closed');
  const [sundayEnd, setSundayEnd] = useState('Closed');
  const [businsessName, setBusinessName] = useState ('');


   const registerToDB = async() => {
     mapToArray = [
      {
        businsessName: '',
        address: '',
        city: '',
        state:'',
        zipcode: ''
    }

  
  ]
  setBusinessName(mapToArray.businsessName = this.props.businsessName)
  console.log(this.businsessName)
    
}

  const handleClick = async() => {
    setShowDetails(true) //....make this button toggle at some point
    axios.get(API_BASE_URL+`/businesses/${props.business.id}`, {headers: {Authorization: `Bearer ${BEARER_TOKEN}`}}) //Calls to only the one business
    .then(response => {
    if(response.data.hours)
      setIsOpen(response.data.hours[0].is_open_now);
    if(response.data.hours[0].open[0]) 
    {
      setMondayStart(response.data.hours[0].open[0].start)
      setMondayEnd(response.data.hours[0].open[0].end)
    }
    if(response.data.hours[0].open[1]) 
    {
      setTuesDayStart(response.data.hours[0].open[1].start)
      setTuesdayEnd(response.data.hours[0].open[1].end)
    } 
    if(response.data.hours[0].open[2]) 
    {
      setWednesdayStart(response.data.hours[0].open[2].start)
      setWednesdayEnd(response.data.hours[0].open[2].end)
    } 
    if(response.data.hours[0].open[3]) 
    {
      setThursdayStart(response.data.hours[0].open[3].start)
      setThursdayEnd(response.data.hours[0].open[3].end)
    }
    if(response.data.hours[0].open[4]) 
    {  
      setFridayStart(response.data.hours[0].open[4].start)
      setFridayEnd(response.data.hours[0].open[4].end)
    }
    if(response.data.hours[0].open[5]) 
    {
      setSaturdayStart(response.data.hours[0].open[5].start)
      setSaturdayEnd(response.data.hours[0].open[5].end)
    }
    if(response.data.hours[0].open[6]) 
    {
      setSundayStart(response.data.hours[0].open[6].start)
      setSundayEnd(response.data.hours[0].open[6].end)
    }
    })
  } 

  


  return (
      <div className="business">
      <div className="Header Bussiness-Name">{props.business.name}</div>
        <br/>
        <img src={props.business.imageSrc} alt='' className='business-image' />
        <button onClick={registerToDB} className ='registerToDB'>Select Business</button>
        <button onClick={handleClick} className='view-more'>View More Details</button>
        <p>{props.business.transactions[0]} {props.business.transactions[1]} {props.business.transactions[2]}</p>
        <p>type: {props.business.category}</p>
        <p>{props.business.isClosed}</p>
        {showDetails ? <BusinessHours 
        monStart={mondayStart} monClose={mondayEnd} 
        tuesStart={tuesdayStart} tuesClose={tuesdayEnd} 
        wedStart={wednesdayStart} wedClose={wesnesdayEnd} 
        thursStart={thursdayStart} thursClose={thursdayEnd} 
        friStart={fridayStart} friClose={fridayEnd} 
        satStart={saturdayStart} satClose={saturdayEnd} 
        sunStart={sundayStart} sunClose={sundayEnd} 
        isOpen={isOpen}/> : null} 
        <p>Location: {props.business.address} {props.business.city} {props.business.state} {props.business.zipCode}</p>
        <p>Contact Number: {props.business.displayPhone}  <button>Call Now</button></p> 
        <p>{`${props.business.rating} stars`}</p> {/*HOW TO MAKE A STAR HERE*/}
      </div>
    )
}

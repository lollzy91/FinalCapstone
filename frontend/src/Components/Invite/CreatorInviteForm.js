import React, {useState, useEffect} from "react";
import axios from 'axios';
import {baseUrl} from '../../Shared/baseUrl'
import "../Login/Login"

export default function InviteForm () {

   const [location, setLocation] = useState('')
   const [eventDate, setDateTime] = useState('')
   const [userId, setUserId] = useState()

 useEffect (() => {
        axios.get(baseUrl + '/invites/getUsers').then((response) => {
            console.log(response)
        })
   }, [])


   
//    const submitInvite = () =>   {
//         Axios.post("http://localhost:3000/invite"), {loclocation, eventDate}
//    }
   
// On change function for location
// onChange={(e) => {
//     setLocation(e.target.value)
// }}


/* On change function for datetime

onChange={(e) => {
                    setDateTime(e.target.value)
                }}*/

    return (
        <div>
            <span>{userId}</span>
            
            <form>
                <label for="Location">Location:</label>
                <input type="text" id="location" name="location" 
                />
                <label for="eventDate">Event Date</label>
                <input type="datetime-local" id="eventDate" name="eventDate" 
                />
                <button input type="submit" value="Submit" ></button>
                
            </form>
        </div>

    )
}
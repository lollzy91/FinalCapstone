import React, {useState, useEffect} from "react";
import axios from 'axios';
import {baseUrl} from '../../Shared/baseUrl'


export default function InviteForm () {

//    const [location, setLocation] = useState('')
//    const [eventDate, setDateTime] = useState('')
//    const [userId, setUserId] = useState()

// const getUserId = async () => {
//     try {}
//     catch 
// }

console.log(ConfigureStore.checkUser);
   
//    const submitInvite = () =>   {
//         axios.get("http://localhost:3000/invite"), {location: location, eventDate: eventdate}
    
//    }
   




/* On change function for datetime

onChange={(e) => {
                    setDateTime(e.target.value)
                }}*/


                // onChange={(e) => {
                //     setLocation(e.target.value)
                // }}

    return (
        <div>
            
            <div className='Invite-container'>
            <form>
                <label for="Location">Location:</label>
                <input type="text" id="location" name="location" 
                />
                <label for="eventDate">Event Date</label>
                <input type="datetime-local" id="eventDate" name="eventDate" 
                />
                <button input type="submit" value="Submit" ></button>
                
            </form>
         <div className='view-invites-container'>
            <span > View Invites </span>
         </div>
        </div>
            
           
        </div>

    )
}
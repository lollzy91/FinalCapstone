import React, { useContext, useState} from "react";
import axios from 'axios';
import {baseUrl} from '../../Shared/baseUrl'
import { UseRestaurantContext } from "../hooks/yelp-api/RestaurantContext";
import {PlusCircle, DashCircle} from 'react-bootstrap-icons';


export default function InviteForm () {

    const [location, setLocation] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [select, setSelect] = useState('');
    const [submit, setSubmit] = useState('');
    const [inputFields, setInputFields] = useState([
        {Name: '', Email: ''}
    ]);



   
//    const submitInvite = () =>   {
//         axios.get("http://localhost:3000/invite"), {location: location, eventDate: eventdate}
    
//    }
   

            const handleChange = (event) => {
                setSelect({value: event.target.value})

            }

            const handleAddGuests = () => {
                setInputFields([...inputFields, {Name: ' ', Email: ' '}])
            }

            const handleSubtractGuests = (index) => {
                const values = [...inputFields]
                values.splice(index, 1)
                setInputFields(values)
            }

    return (
        <div className="FormContainer">
            <h2>Create Invite</h2>
             <div className="Form-Inputs">
                <label>Choose Location:</label>
                    <input
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                        <label>Choose Event Date and Time</label>    
                            <input 
                                type="datetime-local"
                                required
                                value={dateTime}
                                onChange={(e) => setDateTime(e.target.value)}
                            />
                    <label>Select Restraunts</label>    
                            <input 
                                type="search"
                                required
                                value={select}
                                onChange={(e) => setSelect(e.target.value)}
                            /> 
                <div className="addGuests"> 
                    <label>Add Guests</label>
                        { inputFields.map((inputField, index) =>(
                            <div key={index}>
                                <div className="IconContainer">
                                    <PlusCircle onClick={handleAddGuests}/>
                                    <DashCircle onClick={() => handleSubtractGuests(index)}/>
                                </div>
                                <fieldset>
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        value={inputField.Name}
                                        required
                                    />
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        value={inputField.Email}
                                        required
                                    />
                                </fieldset>
                            </div>
                        ))}
                </div> 
            </div>
         </div>
       

    )
    }
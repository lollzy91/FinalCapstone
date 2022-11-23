import React, {useState, useEffect} from "react";
import InviteForm from "./CreatorInviteForm";
import apiData from '../hooks/yelp-api/api';
import axios from "axios";


export default function CreatorInvite () {

    return (

        <div>
         <InviteForm />
        </div>
    )
}
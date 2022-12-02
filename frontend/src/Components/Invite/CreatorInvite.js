import React, {Component, useState, useEffect, useContext} from "react";
import apiData from '../hooks/yelp-api/api';
import axios from "axios";
import {checkUser} from '../../Redux/actionCreators';
import { baseUrl } from "../../Shared/baseUrl";
import {connect} from "react-redux"
import business, {updatedObject} from "../Business/Business";

import InviteForm from "./CreatorInviteForm";




const mapStateToProps = state => {return {
    token: state.token,
    user: state.user
}}




const mapDispatchToProps = (dispatch) => ({
    
    checkUser: () => {dispatch(checkUser())}

});

// axios.get(baseUrl+`invites`, {headers: {Authorization: `Bearer ${this.props.token.token}`}}) 
//     .then(response => {
//         console.log(response)
//     })




class CreatorInvite extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            invites: [],
        };
        
       }

       
/* returns a working request yayy!!*/

    //    componentDidMount() {
    //     axios.get('http://localhost:8081/invites', { headers: {"Authorization" : `Bearer ${this.props.token.token}`} } )
    //     .then(response => {
    //         console.log(response)
    //         this.setState({invites: response.data})
    //     })
    //    } 

   
    
 

    render () {
return (
<div>
    <InviteForm />
    </div>
);
    }
        }

        
    
        export default connect (mapStateToProps, mapDispatchToProps)(CreatorInvite)


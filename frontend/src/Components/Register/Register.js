import axios from 'axios'
import {Component} from 'react'
import { baseUrl } from '../../Shared/baseUrl'
import validator from 'validator'
import {Link} from 'react-router-dom'
import "./registerCSS.css"

class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            email:'',
        }
        
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        const data = {username: this.state.username, password: this.state.password, confirmPassword: this.state.confirmPassword, email: this.state.email, role: 'USER'}
        if (validator.isStrongPassword(this.state.password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
          })) {
            
            if(this.state.password === this.state.confirmPassword)
            {
                    axios.post(baseUrl + "/register", data).then(response => {
                        response.json().then(response =>{
                            if(response.ok)
                                alert("Account Created")
                        })
                    })
                    .catch(function (error) {
                        if(error.response)   
                            alert('User already exist') 
                        })
                //Redirect to login page from here / give response of register success
            }
            else{
                alert("Password and Confirm Password must match!!!")
            }
        }
            else {
                alert('Password is not strong enough. Must have a minimum length of 8, 1 upper and lower case, 1 number, and 1 symbol.')
              }
    }

    render(){
        return(
            <div className='Base'>
                <div className="header">Create Account</div>
                    <div className="content">
                        <div className="form">
                            <div className = 'form-group'>
                                <label class="sr-only">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        class="form-control"
                                        placeholder="Username"
                                        v-model="user.username"
                                        onChange={this.handleInputChange}
                                        required
                                    />
                            </div>
                            <div className = 'form-group'>
                                <label class="sr-only">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        class="form-control"
                                        placeholder="Password"
                                        v-model="user.password"
                                        onChange={this.handleInputChange}
                                        required
                                    />
                            </div>
                            <div className = 'form-group'>
                                <label class="sr-only">Confirm Password</label>
                                    <input
                                        type="password"
                                        id="password-confirm"
                                        name="confirmPassword"
                                        class="form-control"
                                        placeholder="Confirm Password"
                                        v-model="user.password"
                                        onChange={this.handleInputChange}
                                        required
                                    />
                            </div>
                            <div className = 'form-group'>
                                <label class="sr-only">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        class="form-control"
                                        placeholder="Email"
                                        v-model="user.email"
                                        onChange={this.handleInputChange}
                                        required
                                    />
                            </div>
                        </div>
                    </div>
                <div className='SubmitButton'>
                    <button type="submit" onClick={this.handleSubmit}>Register</button>
                    <Link to="/login">Have an account?</Link>
                </div>
            </div>
        )
    }
}

export default Register;
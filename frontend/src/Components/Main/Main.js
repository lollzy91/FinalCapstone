import {Component} from 'react'
import {connect} from 'react-redux'
import {addToken, deleteUser} from '../../Redux/actionCreators'

import {Switch, Route, Link, Redirect} from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'
import Header from '../Header/Header'
import Invite from '../Invite/CreatorInvite'
import CreatorInvite from '../Invite/CreatorInvite'

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToken: () => { dispatch(addToken()) },
    deleteUser: () => { dispatch(deleteUser())}
});

class Main extends Component {

    handleLogout = () => {
        this.props.addToken("")
        this.props.deleteUser()
    }

    render(){
        return(
            <div className='Main-Body'>
                {this.props.token.token !== undefined ?
                    <div className='NavBar'>
                        <Navbar collapseOnSelect fixed='static-top' expand='sm' bg='dark' variant='dark'>
                                <Container className='Container'>  
                                    <Nav>
                                        <Nav.Link as={Link} to='/login' onClick={this.handleLogout}>Logout</Nav.Link> 
                                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                                        <Nav.Link as={Link} to='/invite'>Invitations</Nav.Link>
                                        <Redirect to='/home' />
                                    </Nav>
                                </Container>
                        </Navbar>
                    </div>
                    : //I do not know why this crashes the program if not here as is....so confused
                    <Header />  
//Header is used to keep the navbar at the top when you first visit website If you switch to login it will cause interesting UI issues
                }
                <Switch>
                    <Route path='/login' component={() => <Login/>}/>
                    <Route path='/register'component={() => <Register/>}/>
                    <Route path='/home' component={this.props.token.token !== undefined ? () => <Home /> : null} />
                    <Route path='/invite' component={() => <CreatorInvite/>}/>
                </Switch>
            </div>
        )
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
import { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (   
            <Navbar collapseOnSelect fixed='static-top' expand='sm' className='Navbar'>
                <Container className='Container'>  
                    <Nav>
                        <Nav.Link href='/login'>Home</Nav.Link>
                        <Nav.Link href='/login'>Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}
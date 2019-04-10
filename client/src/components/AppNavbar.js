import React, {Component} from 'react'
import {
    Collapse, 
    Navbar, 
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'

class AppNavBar extends Component {
    constructor(props) {
        super(props);
    
        // visto che è un mio metodo, devo bindarlo al component
        // posso farlo con la riga sotto, oppure come si vede nel metodo toggle

        // this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }
    
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <div>
            <Navbar color='dark' dark expand='sm' className ='mb-5'>
                <Container>
                    <NavbarBrand href='/'>Shopping List</NavbarBrand>
                    <NavbarToggler onClick = {this.toggle}/>
                    <Collapse isOpen= {this.state.isOpen} navbar>
                        <Nav className = 'ml-auto' navbar>
                            <NavItem>
                                <NavLink href = 'https://google.com'>GOOGLE</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        )
    }
}

export default AppNavBar
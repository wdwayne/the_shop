import { Nav, Badge } from 'react-bootstrap'
import { HiShoppingCart } from 'react-icons/hi'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'

import './style.css'

const NavBar = ({ totalItems }) => {
    return (
        <>
        <Nav className='nav justify-content-center' >
            <>
                <Nav.Item>
                    <Nav.Link href='/'>The Shop</Nav.Link>
                </Nav.Item>
                
                <Nav.Item className='ml-auto'>
                    <Nav.Link eventKey="link-1" href='/cart'>
                        <IconContext.Provider value={{className: "menuIcon" }}>
                            <HiShoppingCart /> <Badge pill variant='danger'>{ totalItems }</Badge> 
                        </IconContext.Provider>
                    </Nav.Link>
                </Nav.Item>
            </>
        </Nav>
        </>
    )
}

export default NavBar;

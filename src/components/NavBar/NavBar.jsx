import { Nav, Badge } from 'react-bootstrap'
import { HiShoppingCart } from 'react-icons/hi'
import { IconContext } from 'react-icons'

import './style.css'

const NavBar = ({ cartQuan }) => {
    return (
        <>
        <Nav className='nav justify-content-center' >
            <>
                <Nav.Item>
                    <Nav.Link href="/home">The Shop</Nav.Link>
                </Nav.Item>
                
                <Nav.Item className='ml-auto'>
                    <Nav.Link eventKey="link-1">
                        <IconContext.Provider value={{className: "menuIcon" }}>
                            <HiShoppingCart /> <Badge pill variant='danger'>{ cartQuan }</Badge> 
                        </IconContext.Provider>
                    </Nav.Link>
                </Nav.Item>
            </>
        </Nav>
        </>
    )
}

export default NavBar;

import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap'
import {Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'

import './style.css'
import img from '../../assets/3024051.jpg'

const Cart = ({ cart, updateCartQuantity, rmFromCart, emptyCart }) => {


    if (!cart.line_items) return (
        <div className='d-flex justify-content-center mt-5 '>
            <Spinner animation="border" />
        </div>
    );

    const cartItems = () => {
        return (
            <>
                <Row>
                    {cart.line_items.map(( item ) =>(
                        <Col xs={12} sm={6} md={4} className='mb-5' key={item.id}>
                            <CartItem item={item} updateCartQuantity={updateCartQuantity} rmFromCart={rmFromCart}  />
                        </Col>
                    ))}
                </Row>
                <div className="mt-5 d-flex justify-content-between p-2">
                    <h1 className='p-2'>Subtotal: ${cart.subtotal.formatted_with_code}</h1>

                    <div className="p-2" >
                        <Button variant="danger" className="mr-1" onClick={() => {emptyCart()}}>Empty Cart</Button>
                        <Button>Chectout</Button>
                    </div>
                </div>
            </>
        )
    }

    const emptyCartDisplay = () => {
        return (
            <>
                <Card className="  emptyCart" >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Text>
                        <h1 className='pb-3'>Nothing in cart yet</h1>
                        <Link to='/'>
                            <p>Click here to add items</p>
                        </Link>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }

    return (
        <Container>
            <h1 className='p-3'>Your Shopping Cart</h1>
            {!cart.line_items.length ? emptyCartDisplay() : cartItems()}
        </Container>
    )
}

export default Cart

import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import CartItem from './CartItem/CartItem'

const Cart = ({ cart }) => {

    const emptyCartDisplay = () => {
        return (
                <Card>
                <Card.Img variant="top" src="../../assets/3024051.jpg" />
                <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
            
        )
    }

    return (
        <Container>
            {emptyCartDisplay()}
        </Container>
    )
}

export default Cart

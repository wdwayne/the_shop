import Product from './product/product'
import { Container, Row, Col } from 'react-bootstrap'

const Products = ({ products, onAddToCart }) => {
    return (
        <Container>
            <Row>
                {products.map( product => (
                    <Col xs={12} sm={6} md={4} key={product.id} className='mb-5' >
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Products;

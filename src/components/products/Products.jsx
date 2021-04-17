import Product from './product/product'
import { Container, Row, Col, Spinner } from 'react-bootstrap'

const Products = ({ products, onAddToCart }) => {
    if (!products) return (
        <div className='d-flex justify-content-center mt-5 '>
            <Spinner animation="border" />
        </div>
    );

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

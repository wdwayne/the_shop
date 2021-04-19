import Product from './product/product'
import { Container, Row, Col, Spinner } from 'react-bootstrap'

const Products = ({ products, onAddToCart, fetchProduct, indevidualProduct }) => {

    if (!products) return (
        <div className='d-flex justify-content-center mt-5 '>
            <Spinner animation="border" />
        </div>
    );

    return (
        <Container>
            <Row md={3}>
                {products.map( product => (
                    <Col xs={12}  key={product.id} className='mb-5' >
                        <Product product={product} indevidualProduct={indevidualProduct} onAddToCart={onAddToCart} fetchProduct={fetchProduct} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Products;

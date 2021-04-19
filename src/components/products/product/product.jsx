import { Card, Modal, Button } from 'react-bootstrap'
import { stripHtml } from 'string-strip-html';
import { useState } from 'react';
import ProductPopUp from './popup/ProductPopUp'

import { IconContext } from 'react-icons'
import { MdAddShoppingCart, MdZoomOutMap } from 'react-icons/md'

import './style.css'


const Product = ({ product, onAddToCart, fetchProduct, indevidualProduct }) => {

    const [modal, setModal] = useState(false)

    const { result } = stripHtml(product.description);

    return (
        <>
            <Card className="card text-center mb-3 mt-3">
                <Card.Img variant="top" src={product.media.source} />
                <Card.Body>
                    <Card.Title className='pb-1'>{`${product.name.slice(0, 19)}`}</Card.Title>
                    <Card.Subtitle className='pb-1'>
                        ${product.price.formatted_with_code}
                    </Card.Subtitle>
                    <Card.Text>
                        {`${result.slice(0, 100)}.....`}
                    </Card.Text>
                    <div className="btnPos">
                        <IconContext.Provider value={{className: "cardIcon" }}>
                            <MdZoomOutMap onClick={() => (fetchProduct(product.id), setModal(true))} />
                            {indevidualProduct && <ProductPopUp show={modal} onHide={() => setModal(false)} indevidualProduct={indevidualProduct} result={result} />}
                        </IconContext.Provider>

                        <IconContext.Provider value={{className: "cardIcon" }} >
                            <MdAddShoppingCart onClick={() => onAddToCart(product.id, 1)} />
                        </IconContext.Provider>
                    </div>
                </Card.Body>
            </Card>
            
        </>
    )
}

export default Product;

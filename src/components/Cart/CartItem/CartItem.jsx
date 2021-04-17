import { Card, Button, } from 'react-bootstrap'
import { TiDelete } from 'react-icons/ti'

import './style.css'

const CartItem = ( { item, updateCartQuantity, rmFromCart } ) => {
    // console.log(item);
    return (
        <div>
            <Card className='card m-2'>
                <Card.Img variant="top" src={item.media.source} />
                <Card.Body>
                    <Card.Title className='pb-2'>{item.name}</Card.Title>
                    <Card.Subtitle className='pb-2'>${item.line_total.formatted_with_code}</Card.Subtitle>
                        <div className="d-flex justify-content-around cartBtn">
                            <div className="d-flex justify-content-between quan">
                                <Button variant="outline-light" size='sm' className="text-secondary" 
                                onClick={() => updateCartQuantity( item.id, item.quantity - 1 )}>
                                -
                                </Button>
                                <h6 className='p-1'>{item.quantity}</h6>
                                <Button variant="outline-light" size="sm" className="text-secondary"
                                onClick={() => updateCartQuantity( item.id, item.quantity + 1 )}>
                                +
                                </Button>
                            </div>
                            <div className="remove text-danger">
                                <TiDelete onClick={() => rmFromCart(item.id)} />
                            </div>
                        </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CartItem;

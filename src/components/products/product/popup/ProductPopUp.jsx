import { Modal, Button, Spinner } from 'react-bootstrap'

const ProductPopUp = ({ indevidualProduct, result, show, onHide }) => {

    if (!indevidualProduct) return (
        <div className='d-flex justify-content-center mt-5 '>
            <Spinner animation="border" />
        </div>
    );

    return (
        <>
           <Modal show={show} onHide={onHide}  size="lg"
            aria-labelledby="contained-modal-title-vcenter" centered >
                    <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {indevidualProduct.name}
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={indevidualProduct.media.source} alt=""/>
                        <p>{result}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={ onHide }>Close</Button>
                    </Modal.Footer>
            </Modal> 
        </>
    )
}

export default ProductPopUp;

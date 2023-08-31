import { useContext, useState } from 'react'
import { Container, ListGroup, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/ShoppingCartContext'
import CheckoutForm from '../components/CheckoutForm';

const Cart = () => {
    const { cart, setCart } = useContext(CartContext)
    const [currentStep, setCurrentStep] = useState("cart");  
    const cartTotal = cart.reduce((total, product) => total + product.PRICE * product.quantity, 0);

    const handleEmpty = () => {
        setCart([]);
    }

    const handleRemoveProduct = (productId) => {
        const updatedCart = cart.filter(product => product.id !== productId);
        setCart(updatedCart);
    };

    const handleProceedToCheckout = () => {
        setCurrentStep("checkout");
    };

    const handleGoBack = () => {
        setCurrentStep("cart");
    };

    return (
        <div>
            {currentStep === "cart" && (
                <Container>
                    <h1 className="heading">Cart</h1>
                <Container>
                    <ListGroup className="mt-5">
                        {cart.map((product) => (
                            <ListGroup.Item key={product.id}>
                                <Row>
                                    <Col xs={3} className="align-self-start">
                                        <img src={product.IMAGE}
                                             alt={product.TITLE}
                                             className="align-self-start mr-3"
                                             style={{ maxWidth: '100px' }}
                                            />
                                    </Col>
                                    <Col xs={7}>
                                        <div>
                                            <h2>title: {product.TITLE}</h2>
                                            <p>Unit price: ${product.PRICE}</p>
                                        </div>
                                    </Col>
                                    <Col xs={2} className="text-end">
                                        <div>
                                            <p>Qty: {product.quantity}</p>
                                            <p>Total price: ${product.PRICE * product.quantity}</p>
                                            <Trash 
                                                className="trash-icon"
                                                onClick={() => handleRemoveProduct(product.id)}
                                                />
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            ))}
                            {cart.length > 0 ? (
                                <ListGroup.Item>
                                    <Row>
                                        <div className="text-end">
                                            <h2>Total: ${cartTotal}</h2>
                                            <div>
                                                <ButtonGroup>
                                                    <Button className="m-2" variant="secondary" onClick={handleEmpty}>Empty Cart</Button>
                                                    <Button className="m-2" variant="primary" onClick={handleProceedToCheckout}>Proceed to Checkout</Button>
                                                </ButtonGroup>
                                            </div>
                                        </div>
                                    </Row>
                                </ListGroup.Item>) :
                                <div>
                                    <h3 className='cart-empty'>Your cart is empty</h3>
                                    <Link to={`/prints`}>
                                        <Button className="m-3">Start shopping!</Button>
                                    </Link>
                                </div>
                            }
                        </ListGroup>
                    </Container>
                </Container>
                )
            }
            {currentStep === "checkout" && (
                <div>
                    <CheckoutForm handleGoBack={handleGoBack} total={cartTotal}/>
                </div>
            )}
        </div >
    )
}

export default Cart
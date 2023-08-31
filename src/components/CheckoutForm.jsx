import { useState, useContext } from "react"
import { Form, Button, Container, ButtonGroup, ListGroupItem, ListGroup } from 'react-bootstrap';
import { collection, addDoc, getFirestore } from "firebase/firestore"
import { CartContext } from '../context/ShoppingCartContext';

const CheckoutForm = ({ handleGoBack, total }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const [error, setError] = useState("");
    const [phone, setPhone] = useState("")
    const [orderId, setOrderId] = useState(null)
    const [confirmation, setConfirmation] = useState(false)
    const [cartCopy, setCartCopy] = useState([]);
    const cartCopyTotal = cartCopy.reduce((total, product) => total + product.PRICE * product.quantity, 0);
    const date = new Date();

    const { cart, setCart } = useContext(CartContext)

    const db = getFirestore()

    const handleError = (errorMessage) => {
        setError(errorMessage);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email !== confirmEmail) {
            handleError("The emails don't match");
        } else {
            handleError("");
            addDoc(ordersCollection, order).then(({ id }) =>
                setOrderId(id))
            setConfirmation(true)
            setCartCopy([...cart])
            setCart([])
        }
    }

    const order = {
        buyer: {
            name, email, phone
        },
        items: cart.map(({ id, TITLE, PRICE, quantity }) => ({
            id,
            TITLE,
            PRICE,
            quantity
        })),
        total: {
            total
        },
        date: {
            date
        }
    }

    const ordersCollection = collection(db, "order")

    return (
        <>
            {confirmation ? (
                <Container className="checkout">
                    <div>
                        <h2 className="mb-5">Thank You!</h2>
                        <p className="lead mb-3">
                            Your order has been confirmed, {name}. We will be reaching out to you shortly to provide further information about payment and shipping.
                        </p>
                        <p className="mb-5">
                            <strong>Order number:</strong> {orderId}
                        </p>
                    </div>
                    <ListGroup>
                        <p className="mb-3"><strong>Order details:</strong></p>
                        {cartCopy.map((item, id) => (
                            <ListGroupItem key={id}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <img
                                        src={item.IMAGE}
                                        alt={item.TITLE}
                                        style={{ maxWidth: '150px', maxHeight: '150px' }}
                                    />
                                    <div>
                                        <h4>{item.TITLE}</h4>
                                        <p>Price: ${item.PRICE}</p>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                    <div>
                        <h4>
                            <strong>Order total:</strong> ${cartCopyTotal}
                        </h4>
                    </div>
                </Container>
            ) : (
                <Container className="margin-bottom">
                    <h2 className="heading mb-3">Checkout Form</h2>
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" controlId="nameField">
                            <Form.Label className="label">Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your full name" required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className={`mb-3 ${error ? 'has-error' : ''}`} controlId="emailField">
                            <Form.Label className="label">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className={`mb-3 ${error ? 'has-error' : ''}`} controlId="confirmEmailField">
                            <Form.Label className="label">Confirm Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Confirm your email"
                                required
                                onChange={(e) => setConfirmEmail(e.target.value)}
                            />
                            {error && <div className="error-message">{error}</div>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="phoneField">
                            <Form.Label className="label">Phone Number</Form.Label>
                            <Form.Control type="tel" placeholder="Enter your phone number" required
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Form.Group>
                        <ButtonGroup >
                            <Button className="m-2 seconday" onClick={handleGoBack}>Go Back</Button>
                            <Button type="submit" className="m-2 primary" >Place Order</Button>
                        </ButtonGroup>
                    </Form>
                </Container>
            )}
        </>
    );
};

export default CheckoutForm;
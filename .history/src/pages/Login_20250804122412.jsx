import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useFirebase } from '../context/FirebaseContext';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firebase = useFirebase();
    const navigate = useNavigate();
    console.log(firebase)

    useEffect(() => {
        if (firebase.isLoggedIn) {
            navigate('/');
        }
    }, [navigate, firebase]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await firebase.signInEp(email, password);
    };

    const googleSign = async () => {
        await firebase.signGoogle(email, password);
    };

    return (
        <>
            <style>{`
                .login-container {
                    max-width: 500px;
                    margin: 3rem auto;
                    padding: 2rem;
                    border-radius: 10px;
                    background: #f8f9fa;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }

                .login-container h2 {
                    text-align: center;
                    margin-bottom: 1.5rem;
                    color: #343a40;
                }

                .form-group {
                    margin-bottom: 1rem;
                }

                .google-button {
                    background-color: #db4437;
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-left: 10px;
                    transition: background-color 0.3s ease;
                }

                .google-button:hover {
                    background-color: #c23321;
                }

                .form-buttons {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-top: 1rem;
                }
            `}</style>

            <div className='login-container'>
                <h2>Login</h2>
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group as={Col} md="12" className="form-group" controlId="validationCustom01">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="12" className="form-group" controlId="validationCustom02">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <div className="form-buttons">
                        <Button type="submit" variant="primary">Login</Button>
                        or
                        <button type="button" className="google-button" onClick={googleSign}>
                            Sign in with Google
                        </button>
                        <br />
                        <Nav.Link href="/Register"><Button  variant="success" className="register-button">
                                    For Register
                          </Button></Nav.Link>
                    </div>
                </Form>
            </div>
        </>
    );
};

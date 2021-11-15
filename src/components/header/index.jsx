import Button from '@restart/ui/esm/Button';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React, { useEffect, useState } from 'react';
import { Container, Modal, Nav, Navbar } from 'react-bootstrap';
import { StyledFirebaseAuth } from 'react-firebaseui';
import WithCounter from '../pages/auth/counter/withCounter';
import './style.scss';

const config = {
    apiKey: 'AIzaSyDg658m4QsHj_arpRd7-CE0fMNIOM6mtBc',
    authDomain: 'reactjs-apple.firebaseapp.com',
    // ...
};
firebase.initializeApp(config);

// Configure FirebaseUI.
export const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,

    ],
};

function HeaderComponent(props) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    if (!isSignedIn) {
        return (
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src='https://logoeps.com/wp-content/uploads/2011/05/apple-3d-vector-logo-200x200.png' alt='https://logoeps.com/wp-content/uploads/2011/05/apple-3d-vector-logo-200x200.png' style={{ width: 'unset', height: '35px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle className='bg-light text-dark' aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="container d-flex align-items-center flex-md-row justify-content-around">
                            <Nav.Link href="/" className='text-white'>
                                Home
                            </Nav.Link>
                            <Nav.Link href="/employee" className='text-white'>
                                Employee
                            </Nav.Link>
                            <Nav.Link href="/store" className='text-white'>
                                Store
                            </Nav.Link>
                            <Nav.Link href="/cart" className='text-white'>
                                Cart
                            </Nav.Link>
                            <Nav.Link href="/register" className='text-white'>
                                Sign Up
                            </Nav.Link>

                            <Nav.Link onClick={handleShow} className='text-white'>
                                Login
                                <Modal show={show} onHide={handleClose} animation={false}>
                                    <Modal.Header className='d-flex justify-content-center'>
                                        <h1 className='text-center mt-3'><i className="fas fa-users me-2 "></i> Sign-in</h1>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <h5 className='text-center mb-4 text-dark'>Get started with your free account</h5>
                                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                                    </Modal.Body>
                                </Modal>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
    return (

        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src='https://logoeps.com/wp-content/uploads/2011/05/apple-3d-vector-logo-200x200.png' alt='https://logoeps.com/wp-content/uploads/2011/05/apple-3d-vector-logo-200x200.png' style={{ width: 'unset', height: '35px' }} />
                </Navbar.Brand>
                <Navbar.Toggle className='bg-light text-dark' aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="container d-flex align-items-center flex-md-row justify-content-around">
                        <Nav.Link href="/" className='text-white'>
                            Home
                        </Nav.Link>
                        <Nav.Link href="/employee" className='text-white'>
                            Employee
                        </Nav.Link>
                        <Nav.Link href="/store" className='text-white'>
                            Store
                        </Nav.Link>
                        <Nav.Link href="/cart" className='text-white'>
                            Cart
                        </Nav.Link>
                        <Nav.Link href="/register" className='text-white'>
                            Sign Up
                        </Nav.Link>
                        <Nav.Link className='text-white'>
                            <div>
                                <span className='me-1 text-white'>{firebase.auth().currentUser.displayName}</span>
                                <img
                                    src={firebase.auth().currentUser.photoURL}
                                    alt={firebase.auth().currentUser.photoURL}
                                    style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '20px' }} />
                                <Button className='btn btn-primary' onClick={() => firebase.auth().signOut()}>
                                    Sign-out
                                </Button>
                            </div>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default WithCounter(HeaderComponent);
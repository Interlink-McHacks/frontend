import Head from 'next/head'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {useState} from "react";
import {Button, Modal, Form, Container} from "react-bootstrap";

export default function Login() {
    const [show, setShow] = useState(false);
    const handleLoginClose = () => setShow(false);
    const handleLoginOpen = () => setShow(true);

    const [sshow, ssetShow] = useState(false);
    const handleSignupClose = () => ssetShow(false);
    const handleSignupOpen = () => ssetShow(true);

    return (
        <div className={styles.container}>
            <Head>
                <title></title>
            </Head>
            <main className={styles.main}>
                <Button variant={"primary"} onClick={handleLoginOpen}>Login</Button>
                <Button variant={"success"} onClick={handleSignupOpen}>Sign Up</Button>
                <Modal show={show} onHide={handleLoginClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Enter your login info below:
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant={'warning'} onClick={function() {handleLoginClose(); handleSignupOpen();}}>Create Account</Button>
                        <Button variant="secondary" onClick={handleLoginClose}>
                            Cancel
                        </Button>
                        <Button variant="primary"  type={"submit"}>
                            Login
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={sshow} onHide={handleSignupClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign Up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Enter your information below:</p>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant={'warning'} onClick={function() {handleSignupClose(); handleLoginOpen();}}>Login Instead</Button>
                        <Button variant="secondary" onClick={handleSignupClose}>
                            Cancel
                        </Button>
                        <Button variant="primary"  type={"submit"}>
                            Sign Up
                        </Button>
                    </Modal.Footer>
                </Modal>
            </main>
        </div>
    )
}

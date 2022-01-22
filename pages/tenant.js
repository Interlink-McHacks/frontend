import Head from 'next/head'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

export default function Tenant() {
    const [show, setShow] = useState(false);
    const handleLoginClose = () => setShow(false);
    const handleLoginOpen = () => setShow(true);

    const [sshow, ssetShow] = useState(false);
    const handleSignupClose = () => ssetShow(false);
    const handleSignupOpen = () => ssetShow(true);

    return (
        <div className={styles.container} style={{padding: 0}}>
            <Head>
                <title>Tenant Client</title>
            </Head>
            <main>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Interlink</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="tenant">Home</Nav.Link>
                            <Nav.Link href="users">Users</Nav.Link>
                            <Nav.Link href="#dns">DNS Records</Nav.Link>
                            <Nav.Link href="#activePrograms">Active Programs</Nav.Link>
                            <Nav.Link href="#pricing">Tunnels</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </main>
        </div>
    )
}

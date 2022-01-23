import Head from 'next/head'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import { useRouter } from 'next/router'
import Router from 'next/router'
import * as jwt from 'jsonwebtoken'




export default function Tenant() {

    const router = useRouter();
    const token = router.query.token;
    const decoded = jwt.decode(token);



    const [show, setShow] = useState(false);
    const handleLoginClose = () => setShow(false);
    const handleLoginOpen = () => setShow(true);


    const [sshow, ssetShow] = useState(false);
    const handleSignupClose = () => ssetShow(false);
    const handleSignupOpen = () => ssetShow(true);



    return (
        <div className={styles.container} style={{padding: 0}}>
            <Head>
                <title>Interlink</title>
            </Head>
            <main>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Interlink</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link onClick={ function() { Router.push({
                                pathname: '/tenant',
                                query: { token: token }
                            })}}>Home</Nav.Link>
                            <Nav.Link onClick={ function() {Router.push({
                                pathname: '/users',
                                query: { token: token }
                            })}}>Users</Nav.Link>
                            <Nav.Link onClick={ function() {Router.push({
                                pathname: '/dns',
                                query: { token: token }
                            })}}>DNS Records</Nav.Link>
                            <Nav.Link onClick={ function() {Router.push({
                                pathname: '/activePrograms',
                                query: { token: token }
                            })}}>Active Programs</Nav.Link>
                            <Nav.Link onClick={ function() {Router.push({
                                pathname: '/tunnels',
                                query: { token: token }
                            })}}>Tunnels</Nav.Link>
                            {/*<Nav.Link href="tenant">Home</Nav.Link>*/}
                            {/*<Nav.Link href="users">Users</Nav.Link>*/}
                            {/*<Nav.Link href="dns">DNS Records</Nav.Link>*/}
                            {/*<Nav.Link href="activePrograms">Active Programs</Nav.Link>*/}
                            {/*<Nav.Link href="tunnels">Tunnels</Nav.Link>*/}
                        </Nav>
                    </Container>
                </Navbar>
                <div className={styles.main}>
                    Hi {decoded['user']['name']}! Navigate thru the web pages to configure your account!
                </div>

            </main>
        </div>
    )
}

import Head from 'next/head'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {useState} from "react";
import {Button, Modal, Form, Container, Navbar, Nav, Table} from "react-bootstrap";

export default function Users() {


    return (
        <div className={styles.container}  style={{padding: 0}}>
            <Head>
                <title>Users</title>
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
                <div className={styles.main} style={{paddingLeft: 50 , paddingRight: 50}}>
                    <h1>Users</h1>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        {userList}
                        </tbody>
                    </Table>
                </div>
            </main>
        </div>
    )
}

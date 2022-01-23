import Head from 'next/head'
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {useState} from "react";
import {Button, Modal, Form, Container, Navbar, Nav, Table} from "react-bootstrap";


export default function Users() {


        const f = {
            "status": 200,
            "message": "OK",
            "data": {
                "acls": [
                    {
                        "_id": "61ec7730f7d05e81788c51f3",
                        "tenantID": "61ec73a88d868f0bfc5a3ce6",
                        "userID": "61ec72195b7c7526436f183f",
                        "__v": 0
                    },
                    {
                        "_id": "61ec7730f7d05e81788c51f3",
                        "tenantID": "asdf",
                        "userID": "61ec72195b7c7526436f183f",
                        "__v": 0
                    }
                ]
            }
        }
        const tenantList = f.data.acls.map(item => {
            return (
                <tr>
                    <td>{item.tenantID}</td>
                    <td>{item.userID}</td>
                    <td>
                        <Button className={'btn btn-primary'}>Delete</Button>
                    </td>
                </tr>
            )
        });




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
                            <Nav.Link href="dns">DNS Records</Nav.Link>
                            <Nav.Link href="#activePrograms">Active Programs</Nav.Link>
                            <Nav.Link href="#pricing">Tunnels</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Container fluid style={{paddingLeft: 300 , paddingRight: 300}}>
                    <h1 style={{textAlign: "center", marginTop: 50}}>Tenants</h1>
                    <div style={{textAlign: "right", marginLeft: 0, marginRight: 0}}>
                        <Button variant={'secondary'} size={'lg'}  >Add New Tenant</Button>
                    </div>
                    <Table striped bordered hover variant="dark" style={{marginTop: 5}}>
                        <thead>
                        <tr >
                            <th style={{width: 700}}>Tenant ID</th>
                            <th style={{width: 700}}>User ID</th>
                            <th style={{width: 1 }}>Modify</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tenantList}
                        </tbody>
                    </Table>
                </Container>
            </main>
        </div>
    )
}

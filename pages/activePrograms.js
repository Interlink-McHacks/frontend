import Head from 'next/head'
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {useState} from "react";
import {Button, Modal, Form, Container, Navbar, Nav, Table} from "react-bootstrap";
import Router, {useRouter} from 'next/router'

export default function ActivePrograms() {

    const router = useRouter();
    const token = router.query.token;
    const f = {
        "status": 200,
        "message": "OK",
        "data": {
            "acls": [
                {
                    "_id": "61ec7730f7d05e81788c51f3",
                    "name": "61ec73a88d868f0bfc5a3ce6",
                    "description": "61ec72195b7c7526436f183f",
                    "host connecting port" : 3000,
                    "type" : "TCP",
                    "__v": 0
                },
                {
                    "_id": "61ec7730f7d05e81788c51f3",
                    "name": "asdf",
                    "description": "61ec72195b7c7526436f183f",
                    "host connecting port" : 324,
                    "type" : "RZAS",
                    "__v": 0
                }
            ]
        }
    }
    const programList = f.data.acls.map(item => {
        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item["host connecting port"]}</td>
                <td>{item.type}</td>

            </tr>
        )
    });




    return (
        <div className={styles.container}  style={{padding: 0}}>
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
                        </Nav>
                    </Container>
                </Navbar>
                <Container fluid style={{paddingLeft: 300 , paddingRight: 300}}>
                    <h1 style={{textAlign: "center", marginTop: 50}}>Active Programs</h1>
                    <Table striped bordered hover variant="dark" style={{marginTop: 5}}>
                        <thead>
                        <tr >
                            <th>Name</th>
                            <th>Description</th>
                            <th>Host Connect Port</th>
                            <th>Type</th>
                        </tr>
                        </thead>
                        <tbody>
                        {programList}
                        </tbody>
                    </Table>
                </Container>
            </main>
        </div>
    )
}

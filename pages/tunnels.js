import Head from 'next/head'
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {useState} from "react";
import {Button, Modal, Form, Container, Navbar, Nav, Table} from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import Router, {useRouter} from 'next/router'


export default function Tunnels() {
    const router = useRouter();
    const token = router.query.token;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //const tenantID = "61ec73a88d868f0bfc5a3ce6";
    const [recordName, setRecordName] = useState()
    const [recordDescription, setRecordDescription] = useState()
    const [recordhostID, setRecordhostID] = useState()
    const [recordhostConnectPort, setRecordhostConnectPort] = useState()
    const clearRecordModal = (close) => {
        setRecordName(undefined);
        setRecordDescription(undefined);
        setRecordhostID(undefined);
        setRecordhostConnectPort(undefined);
        if (close) {
            setShow(false);
        }
    }
    const createRecord = () => {
        axios({
            url: `http://100.81.35.39:3000/api/tenant/${tenantID}/dns/A`,
            method: "POST",
            data: {
                name: recordName,
                destination: recordDestination,
                description: recordDescription,
            }
        }).then(()=>{
            Swal.fire({
                title: "Success",
                text: "DNS record created yipee!",
                icon: "success",
            }).then(()=>{
                clearRecordModal(true)
            })
        }).catch(error=>{
            Swal.fire({
                title: "not Success",
                text: "DNS record not created awww",
                icon: "error",
            })
        })
    }
    const f = {
        "status": 200,
        "message": "OK",
        "data": {
            "acls": [
                {
                    "_id": "61ec7730f7d05e81788c51f3",
                    "name": "61ec73a88d868f0bfc5a3ce6",
                    "description": "61ec72195b7c7526436f183f",
                    "hostConnectPort" : 3000,
                    "hostID" : "TCP",
                    "__v": 0
                },
                {
                    "_id": "61ec7730f7d05e81788c51f3",
                    "name": "asdf",
                    "description": "61ec72195b7c7526436f183f",
                    "hostConnectPort" : 324,
                    "hostID" : "RZAS",
                    "__v": 0
                }
            ]
        }
    }
    const tunnelsList = f.data.acls.map(item => {
        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.hostID}</td>
                <td>{item.hostConnectPort}</td>



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
                    <h1 style={{textAlign: "center", marginTop: 50}}>Active Tunnels</h1>
                    <div style={{textAlign: "right", marginLeft: 0, marginRight: 0, paddingRight: 0}}>
                        <Button variant={'secondary'} size={'lg'} onClick={handleShow} >Add New Tunnel</Button>
                    </div>
                    <Modal show={show} size={"lg"} onHide={()=>{clearRecordModal(true)}}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Tunnel</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><div className="max-w-xs px-4">
                            <div className="px-6">

                                <Form>
                                    <Form.Group className="mb-3" controlId="Name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control onChange={event=>{setRecordName(event.target.value)}} value={recordName}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Description">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} onChange={event=>{setRecordDescription(event.target.value)}} value={recordDescription}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Host ID">
                                        <Form.Label>Host ID</Form.Label>
                                        <Form.Control onChange={event=>{setRecordhostID(event.target.value)}} value={recordhostID}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Host Connect Port">
                                        <Form.Label>Host Connect Port</Form.Label>
                                        <Form.Control onChange={event=>{setRecordhostConnectPort(event.target.value)}} value={recordhostConnectPort}/>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={()=>{clearRecordModal(true)}}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={createRecord}>
                                Save
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Table striped bordered hover variant="dark" style={{marginTop: 5}}>
                        <thead>
                        <tr >
                            <th>Name</th>
                            <th>Description</th>
                            <th>Host ID</th>
                            <th>Host Connect Port</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tunnelsList}
                        </tbody>
                    </Table>
                </Container>
            </main>
        </div>
    )
}

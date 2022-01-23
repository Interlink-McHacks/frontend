import Head from 'next/head'
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios"
import {useState} from "react";
import {Button, Modal, Form, Container, Navbar, Nav, Table} from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function Dns() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const tenantID = "61ec73a88d868f0bfc5a3ce6";
    const [recordName, setRecordName] = useState()
    const [recordDestination, setRecordDestination] = useState()
    const [recordDescription, setRecordDescription] = useState()
    const clearRecordModal = (close) => {
        setRecordName(undefined);
        setRecordDescription(undefined);
        setRecordDestination(undefined);
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
                    <h1 style={{textAlign: "center", marginTop: 50}}>DNS Records</h1>

                        <div style={{textAlign: "right", marginLeft: 0, marginRight: 0, paddingRight: 0}}>
                            <Button variant={'secondary'} size={'lg'} onClick={handleShow} >Add New Record</Button>
                        </div>
                        {/*<Button variant="primary" onClick={handleShow}>*/}
                        {/*    Add New Record*/}
                        {/*</Button>*/}

                        <Modal show={show} size={"lg"} onHide={()=>{clearRecordModal(true)}}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body><div className="max-w-xs px-4">
                                <div className="px-6">
                                    <div className="mb-2 text-xl font-bold">Here you can configure custom DNS records for your domain</div>
                                    <Form>
                                        {/*<Form.Group className="mb-3">*/}
                                        {/*    <Form.Label htmlFor="Type">Type</Form.Label>*/}
                                        {/*    <Form.Select id="Type" onChange={event=>record}>*/}
                                        {/*        <option>A - Address record</option>*/}
                                        {/*        <option>B - Address record</option>*/}
                                        {/*        <option>C - Address record</option>*/}
                                        {/*    </Form.Select>*/}
                                        {/*</Form.Group>*/}
                                        <Form.Group className="mb-3" controlId="Host">
                                            <Form.Label>Host</Form.Label>
                                            <Form.Text className="text-muted">
                                                <p>Leave blank to create a record for the root domain. Use * to create a wildcard. Please note that ALIAS records do not support wildcards.</p>
                                            </Form.Text>
                                            <Form.Control onChange={event=>{setRecordName(event.target.value)}} value={recordName}/>
                                            <Form.Label>.interlink.rest</Form.Label>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="Answer">
                                            <Form.Label>Answer</Form.Label>
                                            <Form.Control onChange={event=>{setRecordDestination(event.target.value)}} value={recordDestination}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="Notes">
                                            <Form.Label>Notes</Form.Label>
                                            <Form.Text className="text-muted">
                                                <p>This is for your own use and does not affect DNS.</p>
                                            </Form.Text>
                                            <Form.Control as="textarea" rows={3} onChange={event=>{setRecordDescription(event.target.value)}} value={recordDescription}/>
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
                            <th>Host</th>
                            <th>Answer</th>
                            <th>Notes</th>
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </Table>
                </Container>
            </main>
        </div>
    )
}
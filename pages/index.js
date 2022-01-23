import Head from 'next/head'
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Home.module.css";
import {Button, Container, Form, Modal, Nav, Navbar} from "react-bootstrap";
import axios from "axios"
import Swal from "sweetalert2";
import Router from 'next/router';



export default function Home() {
    //LOG IN
    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
    const [recordEmailLogin, setRecordEmailLogin] = useState()
    const [recordPasswordLogin, setRecordPasswordLogin] = useState()

    const clearRecordModalLogin = (close) => {
        setRecordEmailLogin(undefined);
        setRecordPasswordLogin(undefined);
        if (close) {
            setShowLogin(false);
        }
    }
    const authenticateUserLogin = () => {
        axios({
            url: `http://api.interlink.rest/api/login`,
            method: "POST",
            data: {
                email : recordEmailLogin,
                password : recordPasswordLogin,
            }
        }).then((response)=>{
            //const allReducers = combineReducers({
               // token: response.data.data.token
            //})
            Swal.fire({
                title: "Login Success",
                text : "asdf",
                icon: "success"
            }).then(() => {
                Router.push({
                    pathname: '/tenant',
                    query: { token: response.data.data.token }
                })
            })


        }).catch(err => {
            Swal.fire({
                title: "Login Failed",
                text : "Bad email or password",
                icon: "error"
            })
        })
    }
    /*SIGN UP*/
    const [showSignup, setShowSignup] = useState(false);
    const handleCloseSignup = () => setShowSignup(false);
    const handleShowSignup = () => setShowSignup(true);
    const [recordNameSignup, setRecordNameSignup] = useState()
    const [recordEmailSignup, setRecordEmailSignup] = useState()
    const [recordPasswordSignup, setRecordPasswordSignup] = useState()
    const clearRecordModalSignup = (close) => {
        setRecordEmailSignup(undefined);
        setRecordPasswordSignup(undefined);
        setRecordNameSignup(undefined);
        if (close) {
            setShowSignup(false);
        }
    }
    const authenticateUserSignup = () => {
        axios({
            url: `http://100.81.35.39:3000/api/user`,
            method: "POST",
            data: {
                email : recordEmailSignup,
                name : recordNameSignup,
                password : recordPasswordSignup,
            }
        }).then(()=>{
            Swal.fire({
                title: "Account created!",
                text : "Proceed to your account",
                icon: "success"
            })
        }).catch(err => {
            Swal.fire({
                title: "Signup Failed",
                text : "Bad email or password",
                icon: "error"
            })
        })
    }
    return (
      <div className={styles.container} style={{padding: 0}}>
          <Head>
              <title>Home</title>
          </Head>
          <main>
              <Navbar bg="dark" variant="dark">
                  <Container>
                      <Navbar.Brand>Interlink</Navbar.Brand>
                      <Nav className="me-auto">
                          <Nav.Link onClick={handleShowLogin}>
                              Log in
                          </Nav.Link>
                          <Nav.Link onClick={handleShowSignup}>
                              Sign up
                          </Nav.Link>

                      </Nav>
                  </Container>
              </Navbar>
              <Modal show={showLogin} size={"lg"} onHide={()=>{clearRecordModalLogin(true)}}>
                  <Modal.Header closeButton>
                      <Modal.Title>Login</Modal.Title>
                  </Modal.Header>
                  <Modal.Body><div className="max-w-xs px-4">
                      <div className="px-6">
                          <Form>
                              <Form.Group className="mb-3" controlId="email">
                                  <Form.Label>Login</Form.Label>
                                  <Form.Text className="text-muted">
                                      <p>Enter the email address associated with your account.</p>
                                  </Form.Text>
                                  <Form.Control type={'email'} onChange={event=>{setRecordEmailLogin(event.target.value)}} value={recordEmailLogin}/>
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="password">
                                  <Form.Label>Password</Form.Label>
                                  <Form.Control type={'password'} onChange={event=>{setRecordPasswordLogin(event.target.value)}} value={recordPasswordLogin}/>
                              </Form.Group>
                          </Form>
                      </div>
                  </div>
                  </Modal.Body>
                  <Modal.Footer>
                      <Button variant="secondary" onClick={()=>{clearRecordModalLogin(true)}}>
                          Close
                      </Button>
                      <Button variant="primary" onClick={authenticateUserLogin}>
                          Log in!
                      </Button>
                  </Modal.Footer>
              </Modal>

              <Modal show={showSignup} size={"lg"} onHide={()=>{clearRecordModalSignup(true)}}>
                  <Modal.Header closeButton>
                      <Modal.Title>Signup</Modal.Title>
                  </Modal.Header>
                  <Modal.Body><div className="max-w-xs px-4">
                      <div className="px-6">
                          <Form>
                              <Form.Group className="mb-3" controlId="name">
                                  <Form.Label>Name</Form.Label>
                                  <Form.Control onChange={event=>{setRecordNameSignup(event.target.value)}} value={recordNameSignup}/>
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="email">
                                  <Form.Label>Signup</Form.Label>
                                  <Form.Text className="text-muted">
                                      <p>Enter the email address you'd want to associate with your account.</p>
                                  </Form.Text>
                                  <Form.Control type={'email'} onChange={event=>{setRecordEmailSignup(event.target.value)}} value={recordEmailSignup}/>
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="password">
                                  <Form.Label>Password</Form.Label>
                                  <Form.Control type={'password'} onChange={event=>{setRecordPasswordSignup(event.target.value)}} value={recordPasswordSignup}/>
                              </Form.Group>
                          </Form>
                      </div>
                  </div>
                  </Modal.Body>
                  <Modal.Footer>
                      <Button variant="secondary" onClick={()=>{clearRecordModalSignup(true)}}>
                          Close
                      </Button>
                      <Button variant="primary" onClick={authenticateUserSignup}>
                          Sign up!
                      </Button>
                  </Modal.Footer>
              </Modal>

          </main>
      </div>
    )
}


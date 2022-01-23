import React from "react"
import {Form, Button, Container} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'
export default function FirstPost() {
    return <Container> <div className="max-w-xs my-2 px-4 overflow-hidden rounded shadow-lg">
        <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Here you can configure custom DNS records for your domain</div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Type">Type</Form.Label>
                    <Form.Select id="Type">
                        <option>A - Address record</option>
                        <option>B - Address record</option>
                        <option>C - Address record</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Host">
                    <Form.Label>Host</Form.Label>
                    <Form.Text className="text-muted">
                        <p>Leave blank to create a record for the root domain. Use * to create a wildcard. Please note that ALIAS records do not support wildcards.</p>
                    </Form.Text>
                    <Form.Control/>
                    <Form.Label>.interlink.rest</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Answer">
                    <Form.Label>Answer</Form.Label>
                    <Form.Control/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="TTL">
                    <Form.Label>TTL</Form.Label>
                    <Form.Control/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Priority">
                    <Form.Label>Priority</Form.Label>
                    <Form.Control/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Notes">
                    <Form.Label>Notes</Form.Label>
                    <Form.Text className="text-muted">
                        <p>This is for your own use and does not affect DNS.</p>
                    </Form.Text>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </div>
    </div>
    </Container>
}

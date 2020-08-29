import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class Signin extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row className="justify-content-center">
                        <h1>
                            Sign In
                        </h1>
                    </Row>
                    <Row className="justify-content-center" style={{ marginTop: "auto", marginBottom: "auto" }}>
                        <Col xs={6}>
                            <Form>
                                <Form.Group controlId="emailLogin">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="passwordLogin">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" onClick={this.props.signin}>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Signin;
import React from 'react';
import { Container, Row } from 'react-bootstrap';

class Signin extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row className="justify-content-center">
                        <h1>Sign in</h1>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Signin;
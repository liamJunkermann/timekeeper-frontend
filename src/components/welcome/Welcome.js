import React from 'react';
import { Container, Row } from 'react-bootstrap';

class Welcome extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Container>
                    <Row className="justify-content-center">
                        <h1>Welcome to Timekeeper</h1>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Welcome;
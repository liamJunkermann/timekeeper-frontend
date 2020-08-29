import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Clock from './Clock';

class Timekeeper extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Container>
                        <Clock />
                    <Row className="justify-content-center">
                        <h1>Time Panel</h1>
                    </Row>
                    <Row className="justify-content-center">
                        <h1>Hours table</h1>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Timekeeper;
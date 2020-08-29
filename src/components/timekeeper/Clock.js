import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ClockButton from './ClockButton';

class Clock extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row className="justify-content-center">
                    <Col style={{ boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.1)", borderRadius: "15px", margin: "1rem", padding: "2rem" }}>
                        {/* <Row style={{ marginBottom: "1rem" }}>
                            <Col>
                                <h3 style={{ color: "grey" }}>Clock</h3>
                            </Col>
                        </Row> */}
                        <Row>
                            <Col xs={4} >
                                <div style={{ background: "#E5E5E5", borderRadius: "15px", padding: "1rem", paddingLeft: "1rem" }}>
                                    <h3>
                                        Source
                                    </h3>
                                </div>
                            </Col>
                            <Col xs={4} />
                            <Col xs={2} className="justify-content-center">
                                <ClockButton name="In" baseColor="#5EB948" />
                            </Col>
                            <Col xs={2} className="justify-content-center">
                                <ClockButton name="Out" baseColor="#E8503C" />
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </React.Fragment>
        )
    }
}

export default Clock;
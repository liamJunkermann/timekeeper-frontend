import React from 'react';
import { withRouter, Switch, Route } from 'react-router';
import { Navbar, Button, Container } from 'react-bootstrap';
import Signin from '../signin/Signin';
import Welcome from '../welcome/Welcome';

class Main extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Container>
                    <Navbar bg="dark" variant="dark" expand="lg" style={{marginBottom: "1rem", borderBottomLeftRadius: "0.25rem", borderBottomRightRadius: "0.25rem"}} >
                        <Navbar.Brand href="/">Timekeeper</Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Button variant="outline-light">
                                Sign in
                            </Button>
                        </Navbar.Collapse>
                    </Navbar>
                    <Switch>
                        <Route path="/sign-in">
                            <Signin />
                        </Route>

                        <Route path="/" exact>
                            <Welcome />
                        </Route>
                    </Switch>
                </Container>
            </React.Fragment>
        )
    }
}

export default withRouter(Main);
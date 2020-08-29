import React from 'react';
import { withRouter, Switch, Route } from 'react-router';
import { Navbar, Button, Container } from 'react-bootstrap';
import Signin from '../signin/Signin';
import Welcome from '../welcome/Welcome';
import PrivateRoute from '../privateRoute/PrivateRoute';
import Timekeeper from '../timekeeper/Timekeeper';

class Main extends React.Component{
    signIn = () => {
        this.props.history.push("/timekeeper");
    }
    render(){
        return(
            <React.Fragment>
                <Container fluid style={{ width: "75%" }}>
                    <Navbar bg="dark" variant="dark" expand="lg" style={{marginBottom: "2rem", borderBottomLeftRadius: "0.25rem", borderBottomRightRadius: "0.25rem"}} >
                        <Navbar.Brand href="/">Timekeeper</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-collapse" />
                        <Navbar.Collapse className="justify-content-end">
                            <Button variant="outline-light" href="/sign-in">
                                Sign in
                            </Button>
                        </Navbar.Collapse>
                    </Navbar>
                    <Container>
                        <Switch>
                            <Route path="/sign-in">
                                <Signin signin={this.signIn} />
                            </Route>

                            <Route path="/" exact>
                                <Welcome />
                            </Route>
                            <PrivateRoute path="/timekeeper">
                                <Timekeeper />
                            </PrivateRoute>
                        </Switch>
                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}

export default withRouter(Main);
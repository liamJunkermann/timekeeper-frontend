import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// import { ACCESS_TOKEN_NAME } from '../../constants/apiConstants';
import { getAccessToken } from '../../services/tokenStorage';

function PrivateRoute({ children, ...routeProps }) {
    return (
        <Route {...routeProps}
            render={({ location }) =>
                getAccessToken ? (
                    children
                ) : (
                        <Redirect to={{ pathname: '/sign-in', state: { from: location } }} />
                    )
            }
        />
    )
}

export default PrivateRoute;
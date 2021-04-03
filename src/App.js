import React from 'react'
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import Login from './components/Login/Login';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route to="/Login" component={Login} />
                    <Redirect to="/Login" />
                </Switch>
        </BrowserRouter>
        </>
    )
}

export default App;
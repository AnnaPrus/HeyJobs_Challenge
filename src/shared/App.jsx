import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from './routes'
import { Navbar } from './components/Navbar'
import NoMatch from './views/NoMatch/NoMatch'
import { Layout, NavbarWrapper, Content } from './components/styledComponents';

class App extends Component {
    render() {
        return (
            <Layout>
                <NavbarWrapper>
                    <Navbar />
                </NavbarWrapper>
                <Content>
                    <Switch>
                        {routes.map(({ path, exact, component: Component, ...rest }) => (
                            <Route key={path} path={path} exact={exact} render={(props) => (
                                <Component {...props} {...rest} />
                            )} />
                        ))}
                        <Route render={(props) => <NoMatch {...props} /> } />
                    </Switch>
                </Content>
            </Layout>
        );
    }
}

export default App
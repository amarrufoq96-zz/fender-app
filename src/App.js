import React, { Component } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { GlobalStyles } from './Commons/GlobalStyles/GlobalStyles'
import { PublicRoute, PrivateRoute } from './acces-routes'
import Home from './Modules/Home'
import NotFound from './Modules/NotFound'
import { Layout } from './Modules/Layout'
import { setHeaders, decode, setTokenExpirationInterceptor } from './Utils/tokens'
import { setItem } from './Utils/global'

class App extends Component {
  constructor(props) {
    super(props);
    setTokenExpirationInterceptor(this.handleLoginError);
    let isAuthenticated = false;
    if (localStorage.token) {
      setHeaders(localStorage.token);
      const user = decode(localStorage.token);
      if (user.id) isAuthenticated = true;
    }
    this.state = {
      isAuthenticated,
    };
  }

  componentDidMount () {
    const { isAuthenticated } = this.state
    if (isAuthenticated) {
      const user = decode(localStorage.token)
      setItem('user_name', user.name)
    }
  }

  UNSAFE_componentWillReceiveProps (nextProps) {
    const { location } = this.props
    if (location.pathname === '/Login' && location.pathname !== nextProps.location.pathname) {
      this.refreshToken()
    }
  }

  refreshToken = () => {
    let isAuthenticated = false
    if (localStorage.token) {
      setHeaders(localStorage.token)
      const user = decode(localStorage.token)
      if (user.user_id) isAuthenticated = true
    }
    this.setState({ isAuthenticated })
    console.log(isAuthenticated, 'isAuthenticated')
  }

  decodedToken = () => decode(localStorage.token);

  renderLayout = ({ component: ComponentToRender, props }) => {
    const { isAuthenticated } = this.state
    return (
      <Layout {...props} isAuthenticated={isAuthenticated} decodedToken={this.decodedToken()}>
        <ComponentToRender {...props} isAuthenticated={isAuthenticated} />
      </Layout>
    )
  }

  render () {
    const { isAuthenticated } = this.state
    console.log(isAuthenticated, 'isAuthenticated')
    return (
      <BrowserRouter>
        <GlobalStyles />
        <Switch>
          <PublicRoute exact path='/' component={Home} isAuthenticated={isAuthenticated} renderLayout={this.renderLayout} redirectTo='/' />
          <PublicRoute component={NotFound} renderLayout={this.renderLayout} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App

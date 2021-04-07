import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({
  component, isAuthenticated, hasAccess, renderLayout, redirectTo, ...rest
}) => (
  <Route
    {...rest} render={props => (isAuthenticated && hasAccess ? (renderLayout({ component, props, isAuthenticated }))
      : (<Redirect to={{ pathname: redirectTo, state: { from: props.location } }} />))}
  />)

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  hasAccess: PropTypes.bool,
  renderLayout: PropTypes.func.isRequired,
  location: PropTypes.shape({}),
  redirectTo: PropTypes.string
}

PrivateRoute.defaultProps = {
  hasAccess: true,
  location: null,
  redirectTo: '/'
}

export const PublicRoute = ({ component, renderLayout, ...rest }) => (
  <Route
    {...rest}
    render={props => (renderLayout({ component, props }))}
  />
)

PublicRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]).isRequired,
  renderLayout: PropTypes.func.isRequired
}

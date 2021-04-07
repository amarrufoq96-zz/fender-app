import React from 'react';
import PropTypes from 'prop-types';
import './Styles/styles.css';

export const Layout = ({ location, isAuthenticated, routes, history, children, decodedToken }) => {
  if ((window.self !== window.top) === false) {
    return (
      <div className="layout__container">
        <React.Fragment>
          {children}
        </React.Fragment>
      </div>
    );
  }
  return null;
};

Layout.propTypes = {
  decodedToken: PropTypes.object.isRequired,
  children: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  routes: PropTypes.shape({}).isRequired,
};
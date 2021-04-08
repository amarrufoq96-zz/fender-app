import React, { Component } from 'react';
import PropTypes from 'prop-types';

// React Router
import { Redirect } from 'react-router-dom';

class MainOrg extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
  
  }

  render() {
    const { children } = this.props;
    const { history } = this.props.children.props;

    return (
      <>
        {children}
      </>
    );
  }
}

MainOrg.propTypes = {
  children: PropTypes.node,
  backButton: PropTypes.bool,
  sidebar: PropTypes.bool,
  history: PropTypes.object
};

export default MainOrg;

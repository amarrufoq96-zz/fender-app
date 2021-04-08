import React, { Component } from 'react';
import PropTypes from 'prop-types';

// React Router
import { MenuBar } from 'common/components';

class MainOrg extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
  
  }

  render() {
    const { children } = this.props;
    // const { history } = this.props.children.props;

    return (
      <>
      <MenuBar />
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

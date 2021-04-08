import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from 'api';

class Home extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
  
  }

  render () {
    const { history } = this.props;
    return (
      <>
        <h1>HOLA COMPONENTE LOGIN</h1>
      </>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object
};
export default Home;
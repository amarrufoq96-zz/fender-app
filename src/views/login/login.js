import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Card } from 'antd'
import jwtDecode from 'jwt-decode'
import 'antd/dist/antd.css'
import LoginForm from './components/login-form';
import logo from '../../common/Images/logo.png'
import api from 'api';


class Home extends Component {
  constructor (props) {
    super(props)
  }

  onFinish = (values) => {
    api.service.postLogin(values)
    .then(result => this.handlePostLogin(result));
  };

  handlePostLogin = data => {
    const { history } = this.props;
    if (data.success === 200) {
      const token = jwtDecode(data.token);
      localStorage.setItem('token', token.id)
      history.push('/home');
    } else {
      window.alert("User or password incorrect");
    }
  }

  handlerCreateUser = () => {
    const { history } = this.props;
    history.push('/create');
  }

  render () {
    return (
    <>
      <Row justify="center" gutter={[8, 8]}>
        <Col span={8} />
        <Col span={8} >
          <div style={{ textAlign: 'center', width: '100%' }}>
            <img src={logo} alt='logo' style={{ width: '70%'}} />
          </div>
        </Col>
        <Col span={8} />
      </Row>
      <Row style={{ textAlign: 'center'}} justify="center" gutter={[8, 8]}>
        <Col span={8} />
        <Col style={{ textAlign: 'center'}} span={8}>
          <Card style={{ width: '100%' }}>
            <LoginForm
              handlerCreateUser={this.handlerCreateUser}
              onFinish={this.onFinish}
            />
          </Card>
        </Col>
        <Col span={8} />
      </Row>
    </>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object
};
export default Home;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Card, Typography, message, Button, Space } from 'antd'
import 'antd/dist/antd.css'
import CreateUserForm from './components/create-user-form';
import create from '../../common/Images/create.png'
import api from 'api';

const { Title } = Typography;

class CreateUser extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const { history } = this.props;
   // const token = localStorage.getItem('token');
    //console.log(token, '<----token');
    //  if (token === null) { history.push('./') }
  }

  onFinish = async (values) => {
    const body = values['user'];
    console.log(body, '<----body');
    const service = await api.service.postCreateUser(body);
    this.handlePostCreate(service);
  };

  handlePostCreate = data => {
    const { history } = this.props;
    if (data) {
      message.success('User created!');
      history.push('/');
    } else {
      window.alert("There was an error in the petition");
    }
  }

  render () {
    return (
    <>
      <Row justify="center" gutter={[8, 8]}>
        <Col span={8} />
        <Col span={8} >
          <div style={{ width: '100%' }}>
            <img src={create} alt='logo' style={{ width: '100%'}} />
          </div>
          <br />
        </Col>
        <Col span={8} />
      </Row>
      <Row style={{ textAlign: 'center'}} justify="center" gutter={[8, 8]}>
        <Col span={8} />
        <Col style={{ textAlign: 'center'}} span={8}>
          <Card style={{ width: '100%' }}>
            <Title level={3}>Create a new user</Title>
            <CreateUserForm
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

CreateUser.propTypes = {
  history: PropTypes.object
};

export default CreateUser;
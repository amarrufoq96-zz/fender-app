import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, notification, Spin } from 'antd'
import 'antd/dist/antd.css'
import UserCard from './components/user-card';
import EditUserModal from './components/edit-user-modal';
import api from 'api';

const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Success',
    description:
      'Character succesfully added to favorites.',
  });
};

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userData: [],
      visibleSpin: true,
      formVisible: false,
    };
  }

  componentDidMount() {
    const id = localStorage.getItem('token');
    api.service.getUserProfile(id)
    .then(result => this.handleProfile(result));
  }

  handleProfile = data => {
    this.setState({ userData: data, visibleSpin: false, formVisible: false });
  }

  handleEditProfile = () => {
    this.setState({ formVisible: true })
  }

  onFinish = (values) => {
    this.setState({ visibleSpin: true })
    const id = localStorage.getItem('token');
    const body = values['user'];
    body.id = id;
    api.service.updateUserInformation(body).then(result =>{
      if (result.status === 200) {
        api.service.getUserProfile(id)
        .then(result => this.handleProfile(result));
      }
    });
  };

  render () {
    const { visibleSpin, userData, formVisible } = this.state;
    return (
      <>
        <Spin spinning={visibleSpin} tip="loading...">
          <Row>
            <Col sm={4} md={6} lg={8} />
            <Col justify="center" xsm={16} md={12} lg={8}>
            <div style={{ marginTop: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <UserCard handleEditProfile={this.handleEditProfile} userData={userData} />
            </div>
            </Col>
            <Col sm={4} md={6} lg={8} />
          </Row>
          <br />
          {
            formVisible ?
            <Row>
              <Col sm={4} md={6} lg={8} />
              <Col justify="center" xsm={16} md={12} lg={8}>
                <EditUserModal 
                  onFinish={this.onFinish}/>
              </Col>
              <Col sm={4} md={6} lg={8} />
            </Row>
            : null
          }
        </Spin>
      </>
    );
  }
}

Profile.propTypes = {
  history: PropTypes.object
};

export default Profile;

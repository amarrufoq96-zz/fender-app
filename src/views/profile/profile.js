import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Button, Spin, Modal, notification } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import UserCard from './components/user-card';
import EditUserModal from './components/edit-user-modal';
import CardsCharacter from './components/characters-cards';
import api from 'api';

const { confirm } = Modal;

function showDeleteConfirm() {
  confirm({
    title: 'Are you sure you want to delete your account?',
    icon: <ExclamationCircleOutlined />,
    content: 'If you delete your account, you are not gonna have any access to the site :(',
    okText: 'Yes, delete it',
    okType: 'danger',
    cancelText: 'No, stay',
    onOk() {
      const id = localStorage.getItem('token');
      const { history } = this.props;
      api.service.updateUserInformation({ id, active: 0}).then(result =>{
        if (result.status === 200) {
          history.push('/');
         localStorage.removeItem('token');
         openNotificationWithIcon("success");
        } else {
          console.log('error');
        }
      });
    },
  });
}

const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Success',
    description:
      'Petition succesfully executed.',
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
        openNotificationWithIcon("success");
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
            <Col justify="center"sm={24} md={12} lg={8}>
            <div style={{ marginTop: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button onClick={showDeleteConfirm} danger type="dashed">
                Delete my user
              </Button>
              <br />
              <br />
              <br />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <UserCard handleEditProfile={this.handleEditProfile} userData={userData} />
            </div>
            <br />
            {
              formVisible ?
              <EditUserModal 
              onFinish={this.onFinish}/>
              : null
            }
            </Col>
            <Col sm={24} md={12} lg={16}>
             <CardsCharacter showDeleteConfirm={this.showDeleteConfirm} charactersList={userData.fav}/>
            </Col>
          </Row>
        </Spin>
      </>
    );
  }
}

Profile.propTypes = {
  history: PropTypes.object
};

export default Profile;

import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import { ProfileOutlined, SmileOutlined, LogoutOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '1',
    };
  } 

  handleClick = e => {
    const { history } = this.props;
    this.setState({ current: e.key });
    if (e.key === '1') {
      history.push('/home')
    }
    if (e.key === '2') {
      history.push('/profile')
    }
    if (e.key === '3') {
      localStorage.removeItem('token');
      history.push('/')
    }
  };

  render() {
    const { current } = this.state;
    const path = window.location.pathname
    return (
      <>
      { 
      path === '/' || path === '/create' ?
        null
      : 
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="1" icon={<SmileOutlined />}>
            Rick and Morty
          </Menu.Item>
          <Menu.Item key="2" icon={<ProfileOutlined />}>
            My Information
          </Menu.Item>
          <Menu.Item key="3" icon={<LogoutOutlined />}>
              Log Out
          </Menu.Item>
        </Menu>
    }
      </>

    );
  }
}

export default MenuBar;
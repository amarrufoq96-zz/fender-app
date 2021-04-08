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
    this.setState({ current: e.key });
    if (e.key === '1') {
      window.location.href = '/home'
    }
    if (e.key === '2') {
      window.location.href = '/profile'
    }
    if (e.key === '3') {
      localStorage.removeItem('token');
      window.location.href = '/'
    }
  };

  render() {
    const { current } = this.state;
    return (
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
    );
  }
}

export default MenuBar;
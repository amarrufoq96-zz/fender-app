import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import { UserOutlined , SmileOutlined, LogoutOutlined, OrderedListOutlined  } from '@ant-design/icons';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '1',
    };
  } 

  componentDidMount () {
    const path = window.location.pathname;
    this.setState({ current: path === '/' ? '3' : path === '/home' ? '1' : path === '/profile' ? '2' : path === '/users' ? '4' : '1' });
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
    if (e.key === '4') {
      history.push('/users')
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
          <Menu.Item key="2" icon={<UserOutlined  />}>
            My Information
          </Menu.Item>
          <Menu.Item key="4" icon={<OrderedListOutlined  />}>
            Users List
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
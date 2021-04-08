import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import { ProfileOutlined, SmileOutlined, LogoutOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class MenuBar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<SmileOutlined />}>
          Rick and Morty
        </Menu.Item>
        <Menu.Item key="app" icon={<ProfileOutlined />}>
          My Information
        </Menu.Item>
        <Menu.Item key="alipay" icon={<LogoutOutlined />}>
          Log Out
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuBar;
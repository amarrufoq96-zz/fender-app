import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, notification, Spin } from 'antd'
import ListUsers from './components/characters-cards';
import 'antd/dist/antd.css'
import api from 'api';

const count = 3;

class UsersList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      data: [],
      visibleSpin: true,
      initLoading: false,
      loading: false,
    };
  }

  componentDidMount() {
    api.service.getUsersList().then(result=> this.handleUsers(result));
  }

  handleUsers = result => {
    this.setState({ list: result.users, data: result.users, visibleSpin: false })
  }

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData(res => {
      const data = this.state.data.concat(res.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };

  render () {
    const { visibleSpin, list, initLoading, loading } = this.state;    
    return (
      <>
        <Spin spinning={visibleSpin} tip="loading...">
          <Row>
            <Col sm={4} md={6} lg={8} />
            <Col sm={16} md={12} lg={8}>
              <ListUsers 
              initLoading={initLoading}
              loading={loading}
              list={list}
              onLoadMore={this.onLoadMore}
              />
            </Col>
            <Col sm={4} md={6} lg={8} />
          </Row>
        </Spin>
      </>
    );
  }
}

UsersList.propTypes = {
  history: PropTypes.object
};

export default UsersList;

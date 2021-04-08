import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, notification, Spin } from 'antd'
import 'antd/dist/antd.css'
import CardsCharacter from './components/characters-cards';
import Home1 from '../../common/Images/home1.png'
import api from 'api';

const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Success',
    description:
      'Character succesfully added to favorites.',
  });
};

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      charactersList: [],
      favDisplay: true,
      visibleSpin: true,
    };
  }

  componentDidMount() {
    const { history } = this.props;
    const token = localStorage.getItem('token');
    if (!token) { history.push('./') }
    api.service.getCharacters()
    .then(result => this.handleCharacters(result));
  }

  handleCharacters = data => {
    this.setState({ charactersList: data, visibleSpin: false });
  }

  handleAddFav = id => {
    this.setState({ visibleSpin: true});
    const idCharacter = id;
    const idUser = localStorage.getItem('token');
    const body = { id: idUser, idCharacter };
    api.service.createFavorite(body)
    .then(result => {
      if(result.status === 200) {
        openNotificationWithIcon('success')
        this.setState({ visibleSpin: false });
      }
    });
  }

  render () {
    const { charactersList, favDisplay, visibleSpin } = this.state;
    return (
    <>
    <Spin spinning={visibleSpin} tip="Adding...">
    <div style={{ textAlign: 'center', width: '100%' }}>
      <img src={Home1} alt='logo' style={{ width: '30%'}} />
    </div>
      <Row>
        <Col sm={1} md={4} lg={6} />
        <Col sm={10} md={8} lg={12}>
        <CardsCharacter
          handleAddFav={this.handleAddFav}
          charactersList={charactersList}
          favDisplay={favDisplay}
        />
        </Col>
        <Col sm={1} md={4} lg={6}/>
      </Row>
    </Spin>
    </>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object
};

export default Home;

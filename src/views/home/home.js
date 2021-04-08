import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, notification } from 'antd'
import 'antd/dist/antd.css'
import CardsCharacter from './components/characters-cards';
import logo from '../../common/Images/logo.png'
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
    };
  }

  componentDidMount() {
    api.service.getCharacters()
    .then(result => this.handleCharacters(result));
  }

  handleCharacters = data => {
    this.setState({ charactersList: data });
  }

  handleAddFav = id => {
    const idCharacter = id;
    const body = { id: 5, idCharacter };
    api.service.createFavorite(body)
    .then(result => {
      if(result.status === 200) {
        openNotificationWithIcon('success')
      }
    });
  }

  render () {
    const { charactersList, favDisplay } = this.state;
    return (
    <>
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
    </>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object
};

export default Home;

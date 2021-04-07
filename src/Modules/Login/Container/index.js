import React, { Component } from 'react'
import { Col, Row, message, Layout, Card } from 'antd'
import { setToken, setHeaders, decode } from '../../Utils/tokens'
import { setItem } from '../../Utils/global'
import { ContainerLogin, LoginFormContainer } from '../Styles/styles.js'
import 'antd/dist/antd.css'
import LoginForm from '../Components/LoginForm'

import logo from '../../Commons/Images/img_logocompu.png'
import { login } from '../services/loginService'
import api from '../../api'

function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

const { Header, Content } = Layout

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>

class NormalLoginForm extends React.Component {
  state = {
    visible: false,
    confirmLoading: false,
    loading: false,
    user: '',
    password: ''
  }

  componentDidMount () {
    setToken()
    setHeaders()
  }

  handleLogin = response => {
    const { history } = this.props
    if (response.status === 200) {
      const token = response.data.token
      setToken(token)
      setHeaders(token)
      const user = decode(response.data.token)
      setItem('token', user.token)
      setItem('user_name', user.name)
      setItem('user_id', user.user_id)
      setItem('user_photo', user.photo)
      setItem('user_business_unit', user.business_unit)
      history.push('/')
      // window.location.reload() // eslint-disable-line no-undef
      this.success('Te damos la bienvenida')
    } else if (response.status !== 200) {
      setToken()
      setHeaders()
      this.error('Error al iniciar sesión, por favor intenta de nuevo...')
    }
  }

  loading = () => {
    message.loading('Cargando...')
    // Dismiss manually and asynchronously
    // setTimeout(hide, 2500)
  }

  success = (successMessage) => {
    message.success(`${successMessage}`)
  }

  error = (errorMessage) => {
    message.error(`${errorMessage}`)
  }

  handleFinish = values => {
    const { user, password } = values
    this.loading()
    api.user.login({ user, password }).then(this.handleLogin)
  };

  render () {
    const { user, password } = this.state
    return (
      <ContainerLogin>
        <Layout style={{ backgroundColor: 'white' }}>
          <Header style={{ backgroundColor: 'white', height: '15vh' }} />
          <Content>
            <LoginFormContainer>
              <Row>
                <Col span={12} offset={7}>
                  <DemoBox value={100}>
                    <div style={{ height: '15vh' }}>
                      <img src={logo} alt='logo' />
                    </div>
                  </DemoBox>
                </Col>
                <Col span={12} offset={6}>
                  <Card style={{ width: 400 }}>
                    <LoginForm
                      user={user}
                      password={password}
                      handleEmailChange={this.onHandleEmailChange}
                      handlePassword={this.onHandlePassword}
                      onFinish={this.handleFinish}
                    />
                  </Card>
                </Col>
              </Row>
            </LoginFormContainer>
          </Content>
        </Layout>
      </ContainerLogin>
    )
  }
}

export default NormalLoginForm

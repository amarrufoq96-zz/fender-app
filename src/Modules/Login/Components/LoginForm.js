import React from 'react'
import { Button, Form, Input } from 'antd'

function LoginForm (props) {
  const { onFinish, handleEmailChange, handlePassword } = props
  return (
    <>
      <Form
        layout='vertical'
        name='dynamic_rule'
        className='login-form'
        onFinish={onFinish}
      >
        <Form.Item
          label='Usuario'
          name='user'
          rules={[{ required: true, message: 'Escribe tu usuario' }]}
        >
          <Input
            type='text'
            // prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Escribe tu usuario'
            onChange={handleEmailChange}
          />
        </Form.Item>
        <Form.Item
          label='Contraseña'
          name='password'
          rules={[{ required: true, message: 'Escribe tu contraseña' }]}
        >
          <Input
            // prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Contraseña'
            onChange={handlePassword}
          />
        </Form.Item>
        <Form.Item>
          <a className='login-form-forgot' href='https://appsd.compusoluciones.com/csActualizaInfo/recuperar.aspx'>
          ¿Olvidaste tu contraseña?
          </a>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            Iniciar sesión
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default LoginForm

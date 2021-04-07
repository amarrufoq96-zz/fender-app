import React from 'react'
import { Form, Input, Button, Modal } from 'antd'

function ModalForgottenPassword (props) {
  const { onOk, confirmLoading, onCancel, onClick, onClickOk, loading, onChange, visible } = props
  return (
    <div>
      <Modal
        title='¿Olvidaste tu contraseña?'
        visible={visible}
        onOk={onOk}
        confirmLoading={confirmLoading}
        onCancel={onCancel}
        footer={[
          <Button
            key='back'
            onClick={onClick}
          >
            Cerrar
          </Button>,
          <Button
            key='submit'
            type='primary'
            loading={loading}
            onClick={onClickOk}
          >
            Guardar
          </Button>
        ]}
      >
        <Form>
          <Form.Item>
            <Input
              placeholder='Correo electrónico'
              onChange={onChange}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

// const Login = Form.create({ name: 'normal_login' })(ModalForgottenPassword)

export default ModalForgottenPassword

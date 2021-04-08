import React from 'react';
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Fender from 'common/Images/fender.jpg'
const { Meta } = Card;

const UserCard = props => {
  const { handleEditProfile } = props;
  const { id, username, name } = props.userData;
  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src={Fender}
          />
        }
        actions={[
          <EditOutlined onClick={handleEditProfile} key="edit" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={name}
          description={`ID: ${id}, Username: ${username}`}
        />
      </Card>
      ,
    </>
  );
}


export default UserCard;
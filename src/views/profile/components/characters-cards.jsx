import React from 'react';
import 'antd/dist/antd.css';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const CardsCharacter = props => {
  const { charactersList, favDisplay, handleAddFav } = props;
  console.log(charactersList, '<---charactersList');
  return (
    <>
    {/* {
      charactersList.length < 0 ? */}
      <>
      <br />
      <h3>User favorite Characters:</h3>
        <List
            style={{ marginRight: '3%' }}
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={charactersList}
            renderItem={item => (
              <List.Item
                key={item.name}
                extra={
                  <img
                    width={200}
                    alt="logo"
                    src={item.image}
                  />
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src="https://cdn.shopify.com/s/files/1/0113/2589/8816/products/Fender_AC-004_600x600.jpg?v=1600741523" />}
                  title={<a>{item.name}</a>}
                  description={item.species}
                />
                <b>Last known status:</b> <br />
                {item.status}
                {
                  favDisplay ?
                  <div
                  onClick={()=> handleAddFav(item.id)}
                  style={{ cursor: "pointer", paddingTop: '10%' }}
                >
                  <IconText
                    icon={StarOutlined}
                    text="add favorite"
                    key="list-vertical-star-o"
                  />
                </div>
                : null
                }
              </List.Item>
            )}
          />,
      </>
      {/* : <h3>There are no favorites characters right now :/</h3>
    } */}
    </>
  );
}


export default CardsCharacter;
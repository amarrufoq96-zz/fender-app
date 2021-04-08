import React from 'react';
import 'antd/dist/antd.css';
import { List, Avatar, Button, Skeleton } from 'antd';


const ListUsers = props => {
  const { initLoading, loading, list, onLoadMore } = props;
  const loadMore =
  !initLoading && !loading ? (
    <div
      style={{
        textAlign: 'center',
        marginTop: 12,
        height: 32,
        lineHeight: '32px',
      }}
    >
      <Button onClick={onLoadMore}>loading more</Button>
    </div>
  ) : null;
  return (
    <>
    <br />
    <h3>All the users in the Web Site:</h3>
    <List
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
          <List.Item
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.name}</a>}
                description={`ID: ${item.id}, Username: ${item.username}`}
                />
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
}

export default ListUsers;
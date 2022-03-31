import React from 'react';
import { Card } from 'antd';
import { Input } from 'antd';

const UserReader = (props) => {
  /* console.log(props.user); */
  return (
    <>
      <Card title="User" style={{ width: 300 }}>
        <Input readOnly value={props.user.firstName} />
        <Input readOnly value={props.user.lastName} />
        <Input readOnly value={props.user.userName} />
        <Input readOnly value={props.user.city} />
        <Input readOnly value={props.user.email} />
      </Card>
    </>
  );
};

export default UserReader;

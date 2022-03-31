import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';

const ListUsers = (props) => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const resp = await axios.get('http://localhost:8080/api/users');

    console.log(resp);

    setUsers(resp.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Username',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record) => {
        return (
          <div>
            <EditOutlined
              onClick={() => {
                props.onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                props.onDeleteUsers(record);
              }}
            />
            <EyeOutlined
              onClick={() => {
                props.viewUser(record);
              }}
            />
          </div>
        );
      },
    },
  ];
  return <Table dataSource={users} columns={columns} />;
};

export default ListUsers;

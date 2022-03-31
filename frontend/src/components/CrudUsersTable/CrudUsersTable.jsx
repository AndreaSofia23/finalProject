import React, { useState, useEffect, useContext } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import LoginContext from '../../context/LoginContext';

const ListUsers = (props) => {

  const { token } = useContext(LoginContext);
  console.log(token)
  const TOKEN2 = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluMDAxIiwicGFzc3dvcmQiOiIkMmIkMTAkZmtra0piSnJ1NlNHckl2dXZZM1pIZTU2MFFaczJHSDVSN0hhalU4cHNDSDNlcE5MYS5HaksiLCJpYXQiOjE2NDg2ODI3OTksImV4cCI6MTY0ODc2OTE5OX0.XBcLepBB5jN-uq_YgR61K4ygdke7jyqGO_sTeNZI2sA'
  console.log(TOKEN2)

// Establecer configuraciones por defecto al crear la instancia
const instance = axios.create({
  baseURL: 'http://localhost:8080/api/'
});

// Modificar valores por defecto después que una instancia ha sido creada
instance.defaults.headers.common['Authorization'] = TOKEN2;

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const resp = await axios.get('http://localhost:8080/api/users', {
      headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluMDAxIiwicGFzc3dvcmQiOiIkMmIkMTAkZmtra0piSnJ1NlNHckl2dXZZM1pIZTU2MFFaczJHSDVSN0hhalU4cHNDSDNlcE5MYS5HaksiLCJpYXQiOjE2NDg2ODI3OTksImV4cCI6MTY0ODc2OTE5OX0.XBcLepBB5jN-uq_YgR61K4ygdke7jyqGO_sTeNZI2sA'}
    });

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

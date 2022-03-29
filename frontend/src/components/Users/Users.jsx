import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'antd';
import UserForm from '../UserForm/UserForm';
import UserEditorForm from '../UserEditorForm/UserEditorForm';
import ListUsers from '../ListUsers/ListUsers';
import UserReader from '../UserReader/UserReader';
import './Users.css';

const Users = () => {
  const [user, setUser] = useState([]);
  const [isCreatorVisible, setIsCreatorVisible] = useState(false);
  const [isEditorVisible, setIsEditorVisible] = useState(false);
  const [isLectorVisible, setIsLectorVisible] = useState(false);

  const showEditor = () => {
    setIsEditorVisible(true);
  };

  const handleOkOfEditor = () => {
    setIsEditorVisible(false);
  };

  const handleCancelOfEditor = () => {
    setIsEditorVisible(false);
  };

  const showCreator = () => {
    setIsCreatorVisible(true);
  };

  const handleOkOfCreator = () => {
    setIsCreatorVisible(false);
  };

  const handleCancelOfCreator = () => {
    setIsCreatorVisible(false);
  };

  const showLector = () => {
    setIsLectorVisible(true);
  };

  const handleOkOfLector = () => {
    setIsLectorVisible(false);
  };

  const handleCancelOfLector = () => {
    setIsLectorVisible(false);
  };

  const createUser = async (values) => {
    console.log(values);
    const resp = await axios.post('http://localhost:8080/api/users', values);
    console.log(resp);
  };

  const editUser = async (values) => {
    console.log(values);
    console.log(user);
    const foundUser = await axios.get(
      `http://localhost:8080/api/users/${user._id}`
    );
    console.log(foundUser.data);
    console.log(foundUser.data._id);
    await axios.put(
      `http://localhost:8080/api/users/${foundUser.data._id}`,
      values
    );
  };

  const onDeleteUsers = (record) => {
    Modal.confirm({
      title: 'Are you sure, you want to delete this student record?',
      okText: 'Yes',
      okType: 'danger',
      onOk: async () => {
        const resp = await axios.delete(
          `http://localhost:8080/api/users/${record._id}`
        );
        console.log(resp);
      },
    });
  };

  const onEditStudent = (record) => {
    setUser(record);
    showEditor();
  };

  const viewUser = (record) => {
    setUser(record);
    showLector();
  };

  return (
    <div className="contenedor">
      <h1>Users</h1>
      <Button type="primary" onClick={showCreator}>
        Create User
      </Button>
      <Modal
        title="Basic Modal"
        visible={isCreatorVisible}
        onOk={handleOkOfCreator}
        onCancel={handleCancelOfCreator}
      >
        <UserForm createUser={createUser} />
      </Modal>
      <Modal
        title="Basic Modal"
        visible={isEditorVisible}
        onOk={handleOkOfEditor}
        onCancel={handleCancelOfEditor}
      >
        <UserEditorForm editUser={editUser} presetsValues={user} />
      </Modal>
      <Modal
        title="Basic Modal"
        visible={isLectorVisible}
        onOk={handleOkOfLector}
        onCancel={handleCancelOfLector}
      >
        <UserReader user={user} />
      </Modal>
      <ListUsers
        onEditStudent={onEditStudent}
        onDeleteUsers={onDeleteUsers}
        viewUser={viewUser}
      />
    </div>
  );
};

export default Users;

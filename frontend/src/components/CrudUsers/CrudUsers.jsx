import './CrudUsers.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'antd';
import CrudUsersForm from '../CrudUsersForm/CrudUsersForm';
import UserEditorForm from '../UserEditorForm/UserEditorForm';
import CrudUsersTable from '../CrudUsersTable/CrudUsersTable';
import CrudUsersVisor from '../CrudUsersVisor/CrudUsersVisor';
import { CrudUsersHandlers } from '../../handlers/CrudUsersHandlers';

const Users = () => {
  const {
    isCreatorVisible,
    isEditorVisible,
    isLectorVisible,
    showEditor,
    handleOkOfEditor,
    handleCancelOfEditor,
    showCreator,
    handleOkOfCreator,
    handleCancelOfCreator,
    showLector,
    handleOkOfLector,
    handleCancelOfLector,
  } = CrudUsersHandlers();

  const [user, setUser] = useState([]);

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
      <Button 
        type="primary" 
        onClick={showCreator} 
        style={{
          background: '#22563e',
          borderColor: '#a7ddc6'
        }}
      >
        Create User
      </Button>
      <Modal
        title="Create User"
        visible={isCreatorVisible}
        onOk={handleOkOfCreator}
        onCancel={handleCancelOfCreator}
      >
        <CrudUsersForm createUser={createUser} />
      </Modal>
      <Modal
        title="Edit User"
        visible={isEditorVisible}
        onOk={handleOkOfEditor}
        onCancel={handleCancelOfEditor}
      >
        <UserEditorForm editUser={editUser} presetsValues={user} />
      </Modal>
      <Modal
        title="Information"
        visible={isLectorVisible}
        onOk={handleOkOfLector}
        onCancel={handleCancelOfLector}
      >
        <CrudUsersVisor user={user} />
      </Modal>
      <CrudUsersTable
        onEditStudent={onEditStudent}
        onDeleteUsers={onDeleteUsers}
        viewUser={viewUser}
      />
    </div>
  );
};

export default Users;

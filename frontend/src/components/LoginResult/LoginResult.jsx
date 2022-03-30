import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import LoginContext from '../../context/LoginContext';

const LoginResult = (props) => {
  const { handleLogin } = useContext(LoginContext);
  return (
    <Result
      icon={<SmileOutlined />}
      title="Welcome to Funko Pop Web!!"
      extra={
        <Button onClick={handleLogin} type="primary">
          Continue
        </Button>
      }
    />
  );
};

export default LoginResult;

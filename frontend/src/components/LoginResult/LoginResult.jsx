import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import LoginContext from '../../context/LoginContext';

const LoginResult = (props) => {
  const { setIsLoggedIn } = useContext(LoginContext);
  return (
    <Result
      icon={<SmileOutlined />}
      title="Welcome to Funko Pop Web!!"
      extra={
        <Button
          onClick={() => {
            setIsLoggedIn(true);
          }}
          type="primary"
        >
          Continue
        </Button>
      }
    />
  );
};

export default LoginResult;

import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import LoginContext from '../../context/LoginContext';

const LoginResult = (props) => {
  const { setIsLoggedIn } = useContext(LoginContext);
  return (
    <Result
      icon={<SmileOutlined  style={{ color: '#68b38f' }}/>}
      title="Welcome to Funko Pop Web!!"
      extra={
        <Button 
          style={{
            background: '#22563e',
            borderColor: '#a7ddc6',
          }}
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

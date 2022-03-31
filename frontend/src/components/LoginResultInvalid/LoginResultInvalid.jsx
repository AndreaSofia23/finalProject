import { Result, Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

const LoginResult = (props) => {
  return (
    <Result
      icon={<CloseCircleOutlined style={{ color: 'red' }} />}
      title="Invalid Credentials"
      extra={
        <Button 
          onClick={props.restartLogin} 
          type="primary" 
          style={{
            background: '#22563e',
            borderColor: '#a7ddc6',
          }}
        >
          Try again
        </Button>
      }
    />
  );
};

export default LoginResult;

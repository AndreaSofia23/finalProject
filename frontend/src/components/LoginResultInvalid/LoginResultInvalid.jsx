import { Result, Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

const LoginResult = (props) => {
  return (
    <Result
      icon={<CloseCircleOutlined style={{ color: 'red' }} />}
      title="Invalid Credentials"
      extra={
        <Button onClick={props.restartLogin} type="primary">
          Try again
        </Button>
      }
    />
  );
};

export default LoginResult;

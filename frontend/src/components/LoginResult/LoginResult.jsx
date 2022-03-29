import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons'

const LoginResult= (props) =>{
  
  return( 
    <Result
      icon={<SmileOutlined />}
      title="Welcome to Funko Pop Web!!"
      extra={<Button onClick={props.booleanLoginHandler} type="primary" >Continue</Button>}
    />
  );
 
}

export default LoginResult;
  

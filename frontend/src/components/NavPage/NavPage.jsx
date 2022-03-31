import { UsergroupAddOutlined, SmileOutlined} from '@ant-design/icons'

const NavPage = () => {

   if(window.localStorage.getItem('token') &&
  window.localStorage.getItem('token') !== 'null' ){
    return (
        <>
        <a style={{
            color: '#a7ddc6',
            fontSize: '1.2em',
            margin: '1em'
            
            
        }} href="/users"><UsergroupAddOutlined />USERS</a>
        <a style={{
            color: '#a7ddc6',
            fontSize: '1.2em',
            margin: '1em'
            
        }}href="/funkos"><SmileOutlined />FUNKOS</a>
    
        </>
    )
  } 
   else{
    return(<div></div>);
   } 
  }
   
  export default NavPage
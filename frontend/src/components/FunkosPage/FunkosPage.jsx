import React,{ useState,useEffect } from 'react';
import FunkoList from '../FunkoList/FunkoList';
import axios from 'axios';
import { Button,Modal,Form,Input,Select} from 'antd';

const FunkosPage = () => {
  const [funko,setFunko] = useState([])
  
  const getFunkosBackend = async() => {
    const resp = await axios.get(`http://localhost:8080/api/funkos`);
    const funkos = resp.data.map((funko)=>{
      return {...funko,}
    })
    setFunko(funkos)
}

useEffect(() => {
  getFunkosBackend()
},[funko])

  const addNewFunko = (funkoData) => {
    setFunko([...funko,funkoData])
  }

  
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    }
  
    const handleOk = () => {
      setIsModalVisible(false);
      
      
      
    }
  
    const handleCancel = () => {
      setIsModalVisible(false);
    }
    const onFinish = async (values) => {
      
      const resp = await axios.post('http://localhost:8080/api/funkos', values.funko);
      addNewFunko(resp.data);
      
      
    };
    
       
  
  return(
    <>
    <Button type='primary' style={{background: '#22563e',borderColor: '#a7ddc6'}} onClick={()=>showModal()} >Agregar nuevo Funko</Button>

    <div className='cointainerFunkos' style={{justifyContent:'center'}} >
      
      <FunkoList data={funko} />
      <Modal title="Add a new Funko" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
        <Form
          style={{}}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onFinish={onFinish}>
          

            <Form.Item 
              label="Name"
              name= {['funko', 'name']}
              rules={[
                {
                  required: true,
                },
              ]}>
            <Input placeholder='Insert name' />
            </Form.Item>
            <Form.Item 
              label="Category"
              name={['funko', 'category']}
              rules={[
                {
                  required: true,
                },
              ]}>
            <Input placeholder='Insert a category' />
            </Form.Item>
            <Form.Item 
            label="Exclusive"
            name={['funko', 'ilimited']}
              rules={[
                {
                  required: true,
                },
              ]}>
              <Select>
              <Select.Option value="true">Yes</Select.Option>
              <Select.Option value="false">No </Select.Option>
            </Select>
            </Form.Item>
              <Form.Item 
              label="Price"
              name={['funko', 'price']}
              rules={[
                {
                  required: true,
                },
              ]}>
              <Input placeholder='Insert price '/>
              </Form.Item>
              <Form.Item 
              label="Image"
              name={['funko', 'image']}
              rules={[
                {
                  required: true,
                },
              ]}>
              <Input placeholder='Insert image url' />
              </Form.Item>
              <Form.Item 
              label="Franchisea"
              name={['funko', 'franchise']}
              rules={[
                {
                  required: true,
                },
              ]}>
              <Input placeholder='Insert franchise' />
              </Form.Item>
              <Button 
                style={{
                  background: '#22563e',
                  borderColor: '#a7ddc6'
                }} 
              type='primary'
              htmlType='submit'
              > Add
              </Button>
 
          </Form>
          
      </Modal>

    </div>
    </>
  )
}

export default FunkosPage;
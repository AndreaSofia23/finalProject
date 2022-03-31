import React,{ useState,useEffect } from 'react';
import FunkoList from '../FunkoList/FunkoList';
import axios from 'axios';
import { Button,Modal,Form,Input,Select} from 'antd';

const FunkosPage = () => {
  const [funko,setFunko] = useState([])
  
  const [form] = Form.useForm();

  const getFunkosBackend = async() => {
    const resp = await axios.get(`http://localhost:8080/api/funkos`);
    const funkos = resp.data.map((funko)=>{
      return {...funko,}
    })
    setFunko(funkos)
}

useEffect(() => {
  getFunkosBackend()
},[])

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

    const onReset = () => {
      form.resetFields();
    }

    const onFill = () => {
      form.setFieldsValue({
      });
    };
  
  return(
    <div className='cointainerFunkos' >
      
      <Button type='primary' style={{background: '#22563e',borderColor: '#a7ddc6'}} onClick={()=>showModal()}>Agregar nuevo Funko</Button>
      <FunkoList data={funko} />
      <Modal title="Agregar nuevo Funko" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
        <Form
          style={{}}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onFinish={onFinish}>
          

            <Form.Item 
              label="Nombre"
              name={['funko', 'name']}
              rules={[
                {
                  required: true,
                },
              ]}>
            <Input placeholder='Ingrese el nombre' />
            </Form.Item>
            <Form.Item 
              label="Categoria"
              name={['funko', 'category']}
              rules={[
                {
                  required: true,
                },
              ]}>
            <Input placeholder='Ingrese a que categoria pertenece' />
            </Form.Item>
            <Form.Item 
            label="Ilimitado"
            name={['funko', 'ilimited']}
              rules={[
                {
                  required: true,
                },
              ]}>
              <Select>
              <Select.Option value="true">Si</Select.Option>
              <Select.Option value="false">No </Select.Option>
            </Select>
            </Form.Item>
              <Form.Item 
              label="Precio"
              name={['funko', 'price']}
              rules={[
                {
                  required: true,
                },
              ]}>
              <Input placeholder='Ingrese el precio '/>
              </Form.Item>
              <Form.Item 
              label="Franquicia"
              name={['funko', 'franchise']}
              rules={[
                {
                  required: true,
                },
              ]}>
              <Input placeholder='Ingrese a que franquicia pertenece' />
              </Form.Item>
              <Button 
                style={{
                  background: '#22563e',
                  borderColor: '#a7ddc6'
                }} 
              type='primary'
              htmlType='submit'
              > Agregar 
              </Button>
              <Button 
                style={{
                  background: '#a7ddc6',
                  borderColor: '#22563e',
                  color:'#22563e',
                }} 
                type="link" 
                htmlType="button" 
                onClick={onFill}
              >
                Limpiar Formulario
              </Button>
          </Form>
          
      </Modal>

    </div>
  )
}

export default FunkosPage;
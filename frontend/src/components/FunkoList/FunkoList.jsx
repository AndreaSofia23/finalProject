import {Col,Row,Card,Modal,Form,Button,Select,Input} from 'antd';
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';
import React,{useEffect, useState} from 'react';
import axios from 'axios';


const FunkoList = (props) => {
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [funkoToEdit,setFunkoToEdit] = useState({})
  const {Meta} = Card;

  
  const styleContainer = {
  
    display: 'grid',
    gridTemplateRows: '1fr 1fr ',
    gridTemplateColumns: '1fr 1fr 1fr',
    backgroundColor:'#ffffff33',
    

  }
  const showModalEdit = (funko) => {
   setFunkoToEdit(funko);
   setIsModalVisible(true);
  
  }

  const handleOk = (values) => {
    console.log(values);
    setIsModalVisible(false);
    
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  }
 
  const onFinish = async (values) => {
    console.log(values)
    const foundFunko = await axios.get(
      `http://localhost:8080/api/funkos/${funkoToEdit._id}`
    );
    console.log(foundFunko)
   const resp = await axios.put(
      `http://localhost:8080/api/funkos/${foundFunko.data._id}`,
      values
    );

   console.log(resp) 

}

  const onDeleteFunko = (funkoToDelete) => {
      Modal.confirm({
      title:'¿Confirma que desea eliminar el funko?',
      okText:'Confirmar',
      okType:'danger',
      onOk: () => {
        axios.delete(`http://localhost:8080/api/funkos/${funkoToDelete._id}`)
      }
    })
  }

  return (
    
    <>
      <div className='cointainer-funkos-list' style={styleContainer} >
        
        {props.data.map(funko => 
        <div className="site-card-wrapper"  >
          <Row gutter={[16,16]} >
            <Col span={8} >
              <Card
                actions={[
                  <EditOutlined style={{color:'#819f5f'}} onClick={ () => showModalEdit(funko)}  />,
                  <DeleteOutlined style={{color:'red'}} onClick={ () => onDeleteFunko(funko) }/>,
                  
                ]}
                hoverable
                title={funko.category}
                style={{width: '250px',
                        height:'400px',
                        textAlign: 'center',
                        fontSize:'medium',
                        margin:'1em',
                        justifySelf:'center'
                        }}
                cover={<img alt='funko images' src={funko.image} style={{height:'100%'}}/>}
                size='small'
                >
                  <Meta title={funko.name} description={ funko.price} />
                </Card>
                
          </Col>
          </Row>
          
          <Modal title="Editar datos del Funko" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText='Listo' cancelText='Cancelar' okType='submit' >
              <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                onFinish={onFinish}
                initialValues={funkoToEdit}
                >
                  <Form.Item 
                    label="Nombre"
                    name='name'
                    rules={[
                      {
                        required: true,
                        message: 'Por favor ingrese un nombre',

                      },
                    ]}
                    hasFeedback>
                  <Input placeholder='Ingrese el nombre'   />
                  </Form.Item>
                  <Form.Item 
                    label="Categoria"
                    name='category'
                    rules={[
                      {
                        required: true,
                        message:'Por favor ingrese una catergoria',
                      },
                    ]}>
                  <Input placeholder='Ingrese a que categoria pertenece' />
                  </Form.Item>
                  <Form.Item 
                  label="Ilimitado"
                  name='ilimited'
                    rules={[
                      {
                        required: true,
                      },
                    ]}>
                    <Select initialValue={funkoToEdit.ilimited}>
                    <Select.Option value="true" >Si</Select.Option>
                    <Select.Option value="false">No </Select.Option>
                  </Select>
                  </Form.Item>
                    <Form.Item 
                    label="Precio"
                    name='price'
                    rules={[
                      {
                        required: true,
                        message:'Por favor ingrese un precio'
                      },
                    ]}>
                    <Input placeholder='Ingrese el precio '/>
                    </Form.Item>
                    <Form.Item 
                    label="Imagen"
                    name='image'
                    rules={[
                      {
                        required: true,
                        message:'Por favor ingrese la url de la imagen'
                      },
                    ]}>
                    <Input placeholder='Ingrese la url de la imagen' />
                    </Form.Item>
                    <Form.Item 
                    label="Franquicia"
                    name='franchise'
                    rules={[
                      {
                        required: true,
                        message:'Por favor ingrese la franquicia a la que pertenece'
                      },
                    ]}>
                    <Input placeholder='Ingrese a que franquicia pertenece' />
                    </Form.Item>
                    <Button 
                      type='primary'
                      htmlType='submit'
                      > Editar
                    </Button>
                </Form>
          
      </Modal>
          </div>)
          }
        
      </div>

    </>  
  
    
  )

}


export default FunkoList;
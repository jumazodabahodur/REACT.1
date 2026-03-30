import React, { useEffect, useState, useCallback } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card, Row, Col, Upload, Popconfirm, Modal, Checkbox, Tag } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined, UploadOutlined } from '@ant-design/icons';

const API_URL = "http://37.27.29.18:8001/api/to-dos";
const IMG_URL = "http://37.27.29.18:8001/images";
const Apich = "http://37.27.29.18:8001";

const Add = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const [form] = Form.useForm();
  const [editForm] = Form.useForm();
  const navigate = useNavigate();

  const fetchItems = useCallback(async () => {
    try {
      const { data } = await axios.get(API_URL);
      setItems(data.data || []);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const chekboxEdit = async (id) => {
    try {
      await axios.put(`${Apich}/completed?id=${id}`);
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  const sendData = async (values, id = null) => {
    setLoading(true);
    const fd = new FormData();
    fd.append("Name", values.name);
    fd.append("Description", values.description || "");
    fd.append("IsActive", values.isActive ? "true" : "false");

    if (id) fd.append("Id", id);

    const file = values.images?.[0]?.originFileObj;
    if (file) {
      fd.append("Images", file);
    }

    try {
      await axios({
        method: id ? 'put' : 'post',
        url: id ? `${API_URL}?id=${id}` : API_URL,
        data: fd,
        headers: { "Content-Type": "multipart/form-data" }
      });

      setTimeout(() => {
        fetchItems();
        setActiveItem(null);
        setLoading(false);
      }, 9000);

      form.resetFields();
    } catch (error) {
      setLoading(false);
      fetchItems();
    }
  };

  const removeItem = async (id) => {
    try {
      await axios.delete(`${API_URL}?id=${id}`);
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '25px', background: '#f5f5f5', minHeight: '100vh' }}>
      
      <Card style={{ marginBottom: 20, borderRadius: '10px', boxShadow: 'none' }}>
        <Form form={form} onFinish={(v) => sendData(v)} layout="inline">
          <Form.Item name="name" rules={[{ required: true }]}><Input placeholder="Name" /></Form.Item>
          <Form.Item name="description"><Input placeholder="Description" /></Form.Item>
          <Form.Item name="images" valuePropName="fileList" getValueFromEvent={e => e?.fileList}>
            <Upload beforeUpload={() => false} maxCount={1}><Button icon={<UploadOutlined />}>Photo</Button></Upload>
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>ADD TASK</Button>
        </Form>
      </Card>

      <Row gutter={[16, 16]}>
        {items.map(item => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              bordered={true}
              style={{ 
                borderRadius: '12px', 
                overflow: 'hidden', 
                boxShadow: 'none' // Убрали тень
              }}
              // hoverable={false} — убрали эффект увеличения
              cover={
                <div style={{ height: 160, background: '#eee', position: 'relative' }}>
                  <img
                    src={item.images?.[0] ? `${IMG_URL}/${item.images[0].imageName}` : ''}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    alt=""
                  />
                  <Tag color={item.isActive ? "green" : "red"} style={{ position: 'absolute', top: 10, right: 5 }}>
                    {item.isActive ? "Active" : "Inactive"}
                  </Tag>
                </div>
              }
              actions={[
                <EyeOutlined key="view" onClick={() => navigate(`/info/${item.id}`)} />,
                <EditOutlined key="edit" onClick={() => { setActiveItem(item); editForm.setFieldsValue(item); }} />,
                <Popconfirm key="delete" title="Delete?" onConfirm={() => removeItem(item.id)}>
                  <DeleteOutlined style={{ color: 'red' }} />
                </Popconfirm>
              ]}
            >
              <Card.Meta title={item.name} description={item.description} />

              <div style={{ marginTop: 15, paddingTop: 10, borderTop: '1px solid #f0f0f0' }}>
                <div 
                  className={`inline-flex items-center px-3 py-1 rounded-lg font-medium ${
                    item.isCompleted ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-600"
                  }`}
                  style={{ borderRadius: '8px', padding: '4px 12px' }}
                >
                  <input
                    type="checkbox"
                    checked={item.isCompleted || false}
                    onChange={() => chekboxEdit(item.id)}
                    style={{ marginRight: '8px', cursor: 'pointer' }}
                  />
                  <span style={{ fontSize: '14px' }}>
                    {item.isCompleted ? "Completed" : "Active"}
                  </span>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title="Edit Task"
        open={Boolean(activeItem)}
        onCancel={() => setActiveItem(null)}
        onOk={() => editForm.submit()}
      >
        <Form form={editForm} onFinish={(v) => sendData(v, activeItem.id)} layout="vertical">
          <Form.Item name="name" label="Name"><Input /></Form.Item>
          <Form.Item name="description" label="Description"><Input.TextArea /></Form.Item>
          <Form.Item name="isActive" valuePropName="checked" label="Status">
            <Checkbox>Is Active</Checkbox>
          </Form.Item>
          <Form.Item name="images" valuePropName="fileList" getValueFromEvent={e => e?.fileList}>
            <Upload beforeUpload={() => false} maxCount={1}><Button block icon={<UploadOutlined />}>Change Photo</Button></Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Add;
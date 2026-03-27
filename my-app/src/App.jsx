import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form, Input, Modal, Spin, Space } from "antd";
import Card from "./pages/Card";

const API_URL = "http://37.27.29.18:8001/api/categories";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  
  const [selectedItem, setSelectedItem] = useState(null); 
  const [addForm] = Form.useForm();
  const [editForm] = Form.useForm();

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(API_URL);
      setUsers(data.data.toReversed());
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const postData = async (values) => {
    await axios.post(API_URL, values);
    addForm.resetFields();
    getData();
  };

  const deleteData = async (id) => {
    await axios.delete(`${API_URL}?id=${id}`);
    getData();
  };

  const putData = async (values) => {
    await axios.put(API_URL, { id: selectedItem.id, ...values });
    setIsEditModalOpen(false);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  const openInfo = (item) => {
    setSelectedItem(item);
    setIsInfoModalOpen(true);
  };

  const openEdit = (item) => {
    setSelectedItem(item);
    editForm.setFieldsValue({ name: item.name });
    setIsEditModalOpen(true);
  };

  return (
    <div className="max-w-[1200px] mx-auto p-5">
      <div className="mb-8 p-4 border rounded bg-white">
        <Form form={addForm} onFinish={postData} layout="inline">
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input placeholder="Название новой категории" />
          </Form.Item>
          <Button type="primary" htmlType="submit">Добавить</Button>
        </Form>
      </div>

      {loading ? <Spin className="block mx-auto" /> : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {users.map((user) => (
            <Card
              key={user.id}
              {...user}
              handleDelBtn={() => deleteData(user.id)}
              handleInfoBtn={() => openInfo(user)}
              handleEditBtn={() => openEdit(user)}
            />
          ))}
        </div>
      )}

      <Modal
        title="Информация"
        open={isInfoModalOpen}
        onCancel={() => setIsInfoModalOpen(false)}
        footer={[
          <Button key="close" onClick={() => setIsInfoModalOpen(false)}>Закрыть</Button>
        ]}
      >
        {selectedItem && (
          <div className="p-4 bg-gray-50 rounded">
            <p><strong>ID:</strong> {selectedItem.id}</p>
            <p><strong>Название:</strong> {selectedItem.name}</p>
          </div>
        )}
      </Modal>

      <Modal
        title="Редактировать"
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        footer={null}
      >
        <Form form={editForm} onFinish={putData} layout="vertical">
          <Form.Item name="name" label="Имя" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Space className="w-full justify-end">
            <Button onClick={() => setIsEditModalOpen(false)}>Отмена</Button>
            <Button type="primary" htmlType="submit">Обновить</Button>
          </Space>
        </Form>
      </Modal>
    </div>
  );
};

export default App;
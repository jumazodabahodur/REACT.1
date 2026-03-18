import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, Space, Popconfirm, InputNumber } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";

const API = "http://localhost:3001/users";

const App = () => {
  const [items, setItems]=useState([]);
  const [search, setSearch] = useState("");
  const [isModal, setIsModal] =useState(false);
  const [selected, setSelected] = useState(null);
  
  const [form] = Form.useForm();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.get(API);
      setItems(data);
    } catch (error) {
      console.error(error);
    } 
  };

  const filteredData = items.filter(e=>e.name?.toLowerCase().includes(search.toLowerCase())
  );

  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (selected) {
        await axios.put(`${API}/${selected.id}`, {...selected, ...values});
      } else {
        await axios.post(API, {...values, status: false});
      }
      setIsModal(false);
      form.resetFields();
      setSelected(null);
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = (user = null) => {
    setSelected(user);
    if (user) {
      form.setFieldsValue(user);
    } else {
      form.resetFields();
    }
    setIsModal(true);
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "City", dataIndex: "city", key: "city" },
    { title: "Job", dataIndex: "job", key: "job" },
    {
      title: "Actions",
      key: "ops",
      render: (_, row) => (
        <Space>
          <Button type="link" onClick={() => openModal(row)}>Edit</Button>
          <Popconfirm title="Are you sure?" onConfirm={() => handleDelete(row.id)}>
            <Button type="link" danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <div style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between" }}>
        <Input
          placeholder="Search by name..."
          style={{ width: 250 }}
          prefix={<SearchOutlined />}
          onChange={e => setSearch(e.target.value)}
          allowClear
        />
        <Button type="primary" onClick={() => openModal()}>
          Add User
        </Button>
      </div>

      <Table 
        dataSource={filteredData} 
        columns={columns} 
        rowKey="id" 
        pagination={false}
        bordered
      />

      <Modal
        title={selected ? "Edit User" : "Create User"}
        open={isModal}
        onOk={onSubmit}
        onCancel={() => setIsModal(false)}
        destroyOnClose
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="age" label="Age">
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="city" label="City">
            <Input />
          </Form.Item>
          <Form.Item name="job" label="Job">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default App;
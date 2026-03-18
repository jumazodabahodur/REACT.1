import React, { useState } from 'react'
import {Button,Modal,Input,Space,InputNumber,Checkbox,Empty} from "antd";
import {useUser} from "./useUser"

const App = () => {
const {
  users,
  searchText,
  toggleStatus,
  saveUser,
   setSearchText, 
  deleteUser,
} = useUser()

const [isModalOpen,setItsModalOpen] = useState(false)
const [newName,setNewName] = useState("")
const [newAge,setNewAge] = useState(null)
const [editingId,setEditingId] = useState(null)

const handleOpenModal = (record = null)=>{
if(record){
  setEditingId(record.id)
  setNewAge(record.age)
  setNewName(record.name)
}
setItsModalOpen(true)
}

const handleClose = ()=>{
   setEditingId(null);
  setNewName("")
  setNewAge(null)
  setItsModalOpen(false)
}

const onFinish = ()=>{
  saveUser({name:newName,age:newAge},editingId)
  handleClose()
}




  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Input 
            placeholder="Search by name..." 
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)} 
            style={{ width: 250 }} 
          />
          <Button type="primary" size="large" onClick={() => handleOpenModal()}>
            + Add New User
          </Button>
        </div>

        <div style={{ border: '1px solid #f0f0f0', borderRadius: '8px', overflow: 'hidden' }}>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '2fr 1fr 1.5fr 1.5fr', 
            background: '#fafafa', 
            padding: '12px 20px', 
            fontWeight: 'bold',
            borderBottom: '2px solid #f0f0f0'
          }}>
            <div>Name</div>
            <div>Age</div>
            <div>Status</div>
            <div style={{ textAlign: 'right' }}>Actions</div>
          </div>

       
          {users.length > 0 ? (
            users.map((user) => (
              <div 
                key={user.id} 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '2fr 1fr 1.5fr 1.5fr', 
                  padding: '12px 20px', 
                  borderBottom: '1px solid #f0f0f0',
                  alignItems: 'center',
                  transition: 'background 0.3s'
                }}
              >
       
                <div style={{ fontWeight: 500 }}>{user.name}</div>
                <div>{user.age} yrs</div>
                
             
                <div>
                  <Checkbox checked={user.status} onChange={() => toggleStatus(user)}>
                    {user.status ? <span style={{ color: 'green' }}>Active</span> : <span style={{ color: 'red' }}>Inactive</span>}
                  </Checkbox>
                </div>

             
                <div style={{ textAlign: 'right' }}>
                  <Space>
                    <Button size="small" onClick={() => handleOpenModal(user)}>Edit</Button>
                    <Button size="small" danger onClick={() => deleteUser(user.id)}>Delete</Button>
                  </Space>
                </div>
              </div>
            ))
          ) : (
            <div style={{ padding: '40px' }}><Empty description="No users found" /></div>
          )}
        </div>
      </Space>

    
      <Modal 
        title={editingId ? "Update User Info" : "Register New User"} 
        open={isModalOpen} 
        onOk={onFinish} 
        onCancel={handleClose}
        okText="Save"
      >
        <Space direction="vertical" style={{ width: '100%', marginTop: '20px' }}>
          <label>Full Name:</label>
          <Input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Enter name" />
          
          <label>Age:</label>
          <InputNumber style={{ width: '100%' }} value={newAge} onChange={setNewAge} placeholder="Enter age" />
        </Space>
      </Modal>
    </div>
  );
}

export default App


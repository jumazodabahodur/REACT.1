import React from "react";
import {
  DeleteOutlined,
  EditOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";

const CardProf = ({
  id,            
  name,           
  handleInfoBtn,   
  handleEditBtn,  
  handleDelBtn,  
  disabled,      
}) => {

  const actions = [
    <Button disabled={disabled} onClick={handleEditBtn} type="link">
      <EditOutlined style={{ color: "green" }} key="edit" />
    </Button>,
    
    <Button disabled={disabled} onClick={handleDelBtn} type="link">
      <DeleteOutlined style={{ color: "red" }} key="delete" />
    </Button>,
    
    <Button disabled={disabled} onClick={handleInfoBtn} type="link">
      <InfoCircleTwoTone key="info" />
    </Button>,
  ];

  return (
    <div className="hover:shadow-lg transition-shadow"> 
      <Card actions={actions} style={{ minWidth: 350 }}>
        <Card.Meta
          avatar={<Avatar className="bg-blue-500">{id}</Avatar>}
          
          description={
            <div className="flex items-center h-full">
              <span className="text-[24px] font-bold text-gray-800">
                {name}
              </span>
            </div>
          }
        />
      </Card>
    </div>
  );
};

export default CardProf;
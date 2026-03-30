import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Spin, Upload, Popconfirm, Card, Divider, Empty } from 'antd';
import Button from "@mui/material/Button";
import { ArrowLeftOutlined, UploadOutlined, DeleteOutlined } from '@ant-design/icons';

const API_URL = "http://37.27.29.18:8001/api/to-dos";
const IMG_URL = "http://37.27.29.18:8001/images";

const InfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  const fetchItem = useCallback(async () => {
    try {
      const res = await axios.get(`${API_URL}?id=${id}`);
      const result = res.data?.data;
      const found = Array.isArray(result) ? result.find(t => String(t.id) === String(id)) : result;
      setItem(found || null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => { fetchItem(); }, [fetchItem]);

  const handleDeleteImage = async (imageId) => {
    setActionLoading(true);
    try {
      await axios.delete(`${API_URL}/images/${imageId}`);
      setItem(prev => ({
        ...prev,
        images: prev.images.filter(img => img.id !== imageId)
      }));
    } catch (err) {
      console.error(err);
    } finally {
      setActionLoading(false);
    }
  };

  const handleUpload = async (file) => {
    setActionLoading(true);
    const fd = new FormData();
    fd.append("Images", file);

    try {
      await axios.post(`${API_URL}/${id}/images`, fd, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setTimeout(fetchItem, 1000);
    } catch (err) {
      console.error(err);
    } finally {
      setActionLoading(false);
    }
    return false;
  };

  if (loading) return <div className="flex justify-center items-center h-screen"><Spin size="large" /></div>;
  if (!item) return <div className="text-center mt-20 text-xl font-bold">Задача не найдена</div>;

  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto min-h-screen bg-gray-50">
      <Button 
        variant="text" 
        startIcon={<ArrowLeftOutlined />} 
        onClick={() => navigate('/')}
        className="mb-6 !text-black font-bold"
      >
        Назад
      </Button>

      <Card className="!rounded-2xl" style={{ boxShadow: 'none' }} bordered={true}>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-black uppercase">{item.name}</h1>
            <p className="text-gray-500 text-lg">{item.description}</p>
          </div>
          <Upload beforeUpload={handleUpload} showUploadList={false}>
            <Button 
              variant="contained" 
              disabled={actionLoading}
              startIcon={<UploadOutlined />}
              className="!bg-blue-600 !rounded-lg !shadow-none"
            >
              Добавить фото
            </Button>
          </Upload>
        </div>

        <Divider>Галерея</Divider>

        {item.images && item.images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {item.images.map((img) => (
              <div key={img.id} className="relative group border rounded-xl overflow-hidden bg-white">
                <img 
                  src={`${IMG_URL}/${img.imageName}`} 
                  alt="todo" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-2">
                  <Popconfirm title="Удалить это фото?" onConfirm={() => handleDeleteImage(img.id)}>
                    <Button 
                      fullWidth 
                      color="error" 
                      variant="outlined"
                      size="small"
                      startIcon={<DeleteOutlined />}
                      disabled={actionLoading}
                      className="!shadow-none"
                    >
                      Удалить
                    </Button>
                  </Popconfirm>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Empty description="Фотографий пока нет" />
        )}
      </Card>
    </div>
  );
};

export default InfoPage;
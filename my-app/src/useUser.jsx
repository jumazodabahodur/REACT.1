import { useState, useEffect } from 'react';
import axios from 'axios';

const Api = "http://localhost:3001/user";

export const useUser = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(Api);
      setData(res.data);
    } catch (err) {
      console.error("Ошибка загрузки", err);
    }
  };

  useEffect(() => { getData(); }, []);

  const deleteUser = async (id) => {
    await axios.delete(`${Api}/${id}`);
    getData();
  };

  const toggleStatus = async (user) => {
    await axios.patch(`${Api}/${user.id}`, { status: !user.status });
    getData();
  };

  const saveUser = async (userPayload, editingId) => {
    if (editingId) {
      await axios.put(`${Api}/${editingId}`, userPayload);
    } else {
      await axios.post(Api, { ...userPayload, status: true });
    }
    getData();
  };

  // ВОТ ЗДЕСЬ ОБЫЧНО ОШИБКА: проверь скобки выше!
  const filterData = data.filter(item => 
    item.name?.toLowerCase().includes(searchText.toLowerCase())
  );

  return {
    users: filterData, // отдаем отфильтрованные данные под именем users
    searchText,
    setSearchText,
    deleteUser,
    toggleStatus,
    saveUser,
    refresh: getData
  };
};
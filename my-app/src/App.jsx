import React, { useEffect, useState, useCallback } from 'react';
import axios from "axios";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";


class ToDoService {
  constructor() {
    this.url = "http://37.27.29.18:8001/api/to-dos";
    this.imgUrl = "http://37.27.29.18:8001/images";
    this.base = "http://37.27.29.18:8001";
  }

  async fetchAll() {
    const { data } = await axios.get(this.url);
    return data.data || [];
  }

  async remove(id) {
    return await axios.delete(`${this.url}?id=${id}`);
  }

  async toggle(id) {
    return await axios.put(`${this.base}/completed?id=${id}`);
  }

  // Сабт (Post) ё Навсозӣ (Put)
  async save(values, id = null, file = null) {
    const fd = new FormData();
    fd.append("Name", values.name);
    fd.append("Description", values.description || "");
    fd.append("IsActive", values.isActive);
    
    if (id) fd.append("Id", id);
    if (file) fd.append("Images", file);

    return await axios({
      method: id ? 'put' : 'post',
      url: id ? `${this.url}?id=${id}` : this.url,
      data: fd,
      headers: { "Content-Type": "multipart/form-data" }
    });
  }
}

const service = new ToDoService();

const ToDoList = () => {
  const [items, setItems] = useState([]);     
  const [loading, setLoading] = useState(false); 
  const [editItem, setEditItem] = useState(null); 
  const navigate = useNavigate();

  // Функсия барои бор кардани маълумот аз сервер
  const loadData = useCallback(async () => {
    const data = await service.fetchAll();
    setItems(data);
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  // Функсия барои фиристодани форма
  const onSend = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.target;
    const values = {
      name: form.elements.name.value,
      description: form.elements.description.value,
      isActive: form.elements.isActive.checked
    };
    const file = form.elements.photo.files[0];

    try {
      await service.save(values, editItem?.id, file);
      
      setTimeout(() => {
        loadData();
        setEditItem(null);
        setLoading(false);
        form.reset();
      }, 1000);
    } catch { setLoading(false); }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-8 text-blue-600 uppercase tracking-widest">
        Рӯйхати Вазифаҳо
      </h2>

      <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 mb-10">
        <h3 className="font-bold mb-4 text-gray-700 text-lg">
          {editItem ? "Таҳрири вазифа" : "Иловаи нав"}
        </h3>
        <form onSubmit={onSend} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" placeholder="Номи вазифа" defaultValue={editItem?.name} required className="w-full p-3 border rounded-xl outline-none focus:border-blue-500 transition-all" />
            <input name="description" placeholder="Тавсиф (Description)" defaultValue={editItem?.description} className="w-full p-3 border rounded-xl outline-none focus:border-blue-500 transition-all" />
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <input type="file" name="photo" className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 cursor-pointer" />
            <label className="flex items-center gap-2 text-gray-600 font-medium">
              <input type="checkbox" name="isActive" defaultChecked={editItem?.isActive} className="w-5 h-5 accent-blue-600" />
              Фаъол
            </label>
          </div>

          <div className="flex gap-2">
            <button type="submit" disabled={loading} className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 disabled:bg-blue-300 transition-all">
              {loading ? "Дар ҳоли сабт..." : editItem ? "НАВ КАРДАН" : "ИЛОВА КАРДАН"}
            </button>
            {editItem && (
              <button type="button" onClick={() => setEditItem(null)} className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300">
                БЕКОР
              </button>
            )}
          </div>
        </form>
      </div>

  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.id} className="group border border-gray-100 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
            {/* СУРАТ */}
            <div className="relative h-40 bg-gray-100">
              <img src={item.images?.[0] ? `${service.imgUrl}/${item.images[0].imageName}` : 'https://via.placeholder.com/300'} className="w-full h-full object-cover" alt="" />
              <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase ${item.isActive ? 'bg-green-500' : 'bg-red-400'}`}>
                {item.isActive ? "Active" : "Inactive"}
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-bold text-gray-800 text-lg truncate">{item.name}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-1">{item.description}</p>
              
              <div className="flex items-center gap-2 mb-4 bg-gray-50 p-2 rounded-xl">
                <input type="checkbox" checked={item.isCompleted} onChange={() => service.toggle(item.id).then(loadData)} className="w-5 h-5 accent-green-600 cursor-pointer" />
                <span className={`text-xs font-bold ${item.isCompleted ? 'text-green-600' : 'text-gray-400'}`}>
                  {item.isCompleted ? "ТАМОМ ШУД" : "ДАР ИҶРО"}
                </span>
              </div>

              <div className="flex gap-1">
                <button onClick={() => navigate(`/info/${item.id}`)} className="flex-1 bg-gray-50 text-gray-600 py-2 rounded-lg text-[10px] font-bold hover:bg-gray-100 uppercase">Дидан</button>
                <button onClick={() => { setEditItem(item); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg text-[10px] font-bold hover:bg-blue-100 uppercase">Таҳрир</button>
                <button onClick={() => window.confirm("Нест кунем?") && service.remove(item.id).then(loadData)} className="flex-1 bg-red-50 text-red-500 py-2 rounded-lg text-[10px] font-bold hover:bg-red-100 uppercase">Нест</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/info/:id" element={<div className="flex items-center justify-center h-screen font-bold text-gray-400">САҲИФАИ МАЪЛУМОТИ ПУРРА</div>} />
      </Routes>
    </BrowserRouter>
  );
}










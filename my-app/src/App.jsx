import React, { useState } from 'react';

const App = () => {
  // Инициализируем состояние (базу данных) с начальными объектами
  const [data, setData] = useState([
    { id: 1, name: "Idibek", age: 17, status: false },
    { id: 2, name: "Ali", age: 20, status: true },
    { id: 3, name: "Ali", age: 2, status: true },
    { id: 4, name: "hjbi", age: 28, status: true },
    { id: 5, name: "Ali", age: 26, status: true },
    { id: 6, name: "Aljbi", age: 20, status: true },
    { id: 7, name: "Ali", age: 6, status: true },
    { id: 8, name: "Ali", age: 20, status: true },
  ]);

  // Состояния для хранения значений в полях формы
  const [nameEdit, setNameEdit] = useState("");
  const [ageEdit, setAgeEdit] = useState("");
  const [search, setSearch] = useState("");
  const [idx, setIdx] = useState(null); // Хранит ID объекта, который мы сейчас правим
  const [statusEdit, setStatusEdit] = useState(false);

  // Состояния для модального окна (Info)
  const [isInfoOpen, setIsInfoOpen] = useState(false); // Флаг: открыто окно или закрыто
  const [selectedUser, setSelectedUser] = useState(null); // Сюда записываем объект юзера для отображения

  // ФУНКЦИЯ УДАЛЕНИЯ: фильтрует массив, убирая элемент с нужным ID
  const deleteUser = (id) => {
    // filter() создает новый массив, куда попадают все, КРОМЕ того, чей ID совпал
    setData(data.filter((item) => item.id !== id));
  };

  // ФУНКЦИЯ РЕДАКТИРОВАНИЯ: берет данные выбранного юзера и закидывает их в форму
  const showEdit = (e) => {
    setAgeEdit(e.age);
    setNameEdit(e.name);
    setIdx(e.id); // Запоминаем, какой именно ID мы будем обновлять
    setStatusEdit(e.status);
  };

  // ФУНКЦИЯ СОХРАНЕНИЯ: срабатывает при нажатии кнопки "Save"
  const handleSubmit = (event) => {
    event.preventDefault();

    // 1. Тафтиш: Агар инпутҳо холӣ бошанд, идома надеҳ
    if (!nameEdit.trim() || !ageEdit) {
      alert("Лутфан ном ва синну солро нависед!");
      return;
    }

    if (idx === null) {
      // 2. ИЛОВА КАРДАН (ADD)
      const newUser = {
        id: Date.now(), 
        name: nameEdit,
        age: ageEdit,
        status: false
      };
      setData([...data, newUser]);
    } else {
      // 3. ТАҲРИР КАРДАН (EDIT)
      const obj = { id: idx, name: nameEdit, age: ageEdit, status: statusEdit };
      setData(data.map((item) => (item.id === idx ? obj : item)));
    }

    // 4. Тоза кардани форма
    setIdx(null);
    setNameEdit("");
    setAgeEdit("");
    setSearch("");
  };
  return (
    <div className='p-10'>
      {/* Форма для добавления или редактирования */}
      <form onSubmit={handleSubmit} className='mb-5'>
        <input className='border m-2 p-1' value={nameEdit} onChange={(e) => setNameEdit(e.target.value)} placeholder="Name" />
        <input className='border m-2 p-1' value={ageEdit} onChange={(e) => setAgeEdit(e.target.value)} placeholder="Age" />
        <button type='submit' className='bg-blue-500 text-white p-1 rounded'>Save</button>
      </form>
<input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" className='border rounded-lg p-2 outline-none' />

      {/* Таблица со списком */}
{/* Таблица со списком */}

<div className="overflow-hidden rounded-lg border border-gray-200 shadow-md mt-5">
  <table className='border-collapse w-full text-left bg-white'>
    <thead className='bg-gray-100'>
      <tr>
        <th className='p-4 font-bold text-gray-700 border-b'>Name</th>
        <th className='p-4 font-bold text-gray-700 border-b'>Age</th>
        <th className='p-4 font-bold text-gray-700 border-b text-center'>Actions</th>
      </tr>
    </thead>
    <tbody className='divide-y divide-gray-100'>
      {data
        .filter((e) => e.name.toLowerCase().includes(search.trim().toLowerCase()))
        .map((e) => (
          <tr key={e.id} className='hover:bg-blue-50 transition-colors'>
            <td className='p-4 text-gray-800 font-medium'>{e.name}</td>
            <td className='p-4 text-gray-600'>{e.age}</td>
            <td className='p-4 text-center'>
              <div className="flex justify-center gap-3">
                <button 
                  onClick={() => { setSelectedUser(e); setIsInfoOpen(true); }} 
                  className='text-blue-500 hover:scale-120 transition-transform' 
                  title="Info"
                >
                  ℹ️
                </button>
                <button 
                  onClick={() => showEdit(e)} 
                  className='text-orange-500 hover:scale-120 transition-transform' 
                  title="Edit"
                >
                  ✏️
                </button>
                <button 
                  onClick={() => deleteUser(e.id)} 
                  className='text-red-500 hover:scale-120 transition-transform' 
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </td>
          </tr>
        ))}
    </tbody>
  </table>
</div>

    {/* Модальное окно */}
{isInfoOpen && selectedUser && (
  <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
    <div className='bg-white p-6 rounded-lg shadow-xl border w-80'>
      <h2 className="text-xl font-bold mb-4 text-blue-600">User Info</h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> {selectedUser.name}</p>
        <p><strong>Age:</strong> {selectedUser.age}</p>
        <p><strong>Status:</strong> {selectedUser.status ? "Active" : "Inactive"}</p>
      </div>
      <button 
        onClick={() => setIsInfoOpen(false)} 
        className='bg-red-500 hover:bg-red-600 text-white p-2 w-full rounded mt-4 transition-colors'
      >
        Close
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default App;
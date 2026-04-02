import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.payload];
    case 'DELETE_USER':
      return state.filter(user => user.id !== action.payload);
    case 'UPDATE_USER':
      return state.map(user => 
        user.id === action.payload.id ? action.payload : user
      );
    default:
      return state;
  }
};

const initialUsers = [
  { id: 1, name: "Иван Иванов", email: "ivan@mail.ru" },
  { id: 2, name: "Анна Петрова", email: "anna@mail.ru" }
];

export default function CrudApp() {
  const [users, dispatch] = useReducer(reducer, initialUsers);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch({ type: 'UPDATE_USER', payload: { ...formData, id: editId } });
      setEditId(null);
    } else {
      dispatch({ type: 'ADD_USER', payload: { ...formData, id: Date.now() } });
    }
    setFormData({ name: '', email: '' });
  };

  const handleEdit = (user) => {
    setEditId(user.id);
    setFormData({ name: user.name, email: user.email });
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Tabel</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '25px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Имя"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button 
          type="submit" 
          style={{ 
            padding: '8px 20px', 
            backgroundColor: editId ? '#2196F3' : '#4CAF50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          {editId ? 'Сохранить' : 'Добавить'}
        </button>
        {editId && (
          <button onClick={() => {setEditId(null); setFormData({name:'', email:''})}} type="button">Отмена</button>
        )}
      </form>

      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button 
                    onClick={() => handleEdit(user)}
                    style={{ marginRight: '10px', backgroundColor: '#FFC107', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}
                  >
                    edit
                  </button>
                  <button 
                    onClick={() => dispatch({ type: 'DELETE_USER', payload: user.id })}
                    style={{ backgroundColor: '#F44336', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}
                  >
                   delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>Список пуст</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
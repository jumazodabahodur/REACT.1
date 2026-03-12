import React, { useState } from "react";

function App() {
const [data, setData] = useState([
  { id: 1, name: "Umar", city: "Bokhtar", status: false, phone: "+992911111111" },
  { id: 2, name: "Fatima", city: "Istaravshan", status: true, phone: "+992922222222" },
  { id: 3, name: "Siyovush", city: "Panjakent", status: true, phone: "+992933333333" },
  { id: 4, name: "Zuhra", city: "Murghab", status: false, phone: "+992944444444" },
  { id: 5, name: "Nekruz", city: "Khorugh", status: true, phone: "+992955555555" },
]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(true);
  const [editId, setEditId] = useState(null);

  const openForm = (user = null) => {
    if (user) {
      setEditId(user.id);
      setName(user.name);
      setCity(user.city);
      setPhone(user.phone);
      setStatus(user.status);
    } else {
      setEditId(null);
      setName(""); setCity(""); setPhone(""); setStatus(true);
    }
    setIsFormOpen(true);
  };

  const saveUser = (e) => {
    e.preventDefault();
    const userObj = { id: editId || Date.now(), name, city, phone, status };
    if (editId) {
      setData(data.map(u => u.id === editId ? userObj : u));
    } else {
      setData([...data, userObj]);
    }
    setIsFormOpen(false);
  };

  const commonBorderStyle = {
    border: "1px solid black",
    borderRadius: "10px",
    padding: "8px"
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <h1>Users</h1>
        <button onClick={() => openForm()} style={{ ...commonBorderStyle, cursor: "pointer", background: "white" }}>
          + Add New
        </button>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "10px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>City</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>Status</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
              <td style={{ border: "1px solid black", padding: "10px" }}>{user.name}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{user.city}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{user.status ? "Active" : "Inactive"}</td>
              <td style={{ border: "1px solid black", padding: "10px", textAlign: "center" }}>
                <button onClick={() => { setSelectedUser(user); setIsInfoOpen(true); }} style={{ marginRight: "5px" }}>Info</button>
                <button onClick={() => openForm(user)} style={{ marginRight: "5px" }}>Edit</button>
                <button onClick={() => setData(data.filter(u => u.id !== user.id))} style={{ color: "red" }}>Del</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isInfoOpen && selectedUser && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ background: "white", padding: "20px", border: "1px solid black", borderRadius: "10px", minWidth: "250px" }}>
            <h3>User Info</h3>
            <p>Name: {selectedUser.name}</p>
            <p>City: {selectedUser.city}</p>
            <p>Phone: {selectedUser.phone}</p>
            <button onClick={() => setIsInfoOpen(false)} style={{ ...commonBorderStyle, width: "100%", cursor: "pointer" }}>Close</button>
          </div>
        </div>
      )}

   
      {isFormOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <form onSubmit={saveUser} style={{ background: "white", padding: "20px", border: "1px solid black", borderRadius: "10px", display: "flex", flexDirection: "column", gap: "10px", minWidth: "300px" }}>
            <h3>{editId ? "Edit User" : "Add User"}</h3>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" style={commonBorderStyle} required />
            <input value={city} onChange={e => setCity(e.target.value)} placeholder="City" style={commonBorderStyle} required />
            <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" style={commonBorderStyle} required />
            <select value={status} onChange={e => setStatus(e.target.value === "true")} style={commonBorderStyle}>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
            <div style={{ display: "flex", gap: "10px" }}>
              <button type="submit" style={{ ...commonBorderStyle, flex: 1, background: "#eee", cursor: "pointer" }}>Save</button>
              <button type="button" onClick={() => setIsFormOpen(false)} style={{ ...commonBorderStyle, flex: 1, background: "white", cursor: "pointer" }}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
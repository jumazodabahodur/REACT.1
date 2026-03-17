import { Delete, Edit as EditIcon } from '@mui/icons-material';
import { Button, TextField, Switch, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const api = "http://localhost:3002/data";

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const [editForm, setEditForm] = useState({
    id: null,
    name: "",
    about: "",
    img: "",
    price: "",
    status: false
  });

  async function get() {
    try {
      const params = {};
      if (search) params.name_like = search;
      if (filterStatus !== "") params.status = filterStatus;

      const response = await axios.get(api, { params });
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get();
  }, [search, filterStatus]);

  const showEdit = (user) => {
    setEditForm(user);
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newUser = {
      name: formData.get("name"),
      about: formData.get("about"),
      img: formData.get("img"),
      price: formData.get("price"),
      status: false
    };
    try {
      await axios.post(api, newUser);
      get();
      event.target.reset();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmitEdit(event) {
    event.preventDefault();
    try {
      await axios.put(`${api}/${editForm.id}`, editForm);
      get();
      setEditForm({ id: null, name: "", about: "", img: "", price: "", status: false });
    } catch (error) {
      console.error(error);
    }
  }

  async function changeStatus(user) {
    try {
      await axios.patch(`${api}/${user.id}`, { status: !user.status });
      get();
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteUser(id) {
   {
      try {
        await axios.delete(`${api}/${id}`);
        get();
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <section style={{ padding: "40px" }}>
      <div style={{ display: "flex", gap: "20px", marginBottom: "40px", flexWrap: "wrap" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: 'column', width: "250px", gap: "10px" }}>
          <Typography variant="h6">Add New</Typography>
          <TextField name='name' label="Name" size="small" required />
          <TextField name='about' label="About" size="small" />
          <TextField name='img' label="Image URL" size="small" />
          <TextField name='price' label="Price" size="small" />
          <Button type='submit' variant='contained' color="success">Add</Button>
        </form>

        <form onSubmit={handleSubmitEdit} style={{ display: "flex", flexDirection: 'column', width: "250px", gap: "10px" }}>
          <Typography variant="h6">Edit Product</Typography>
          <TextField name='img' value={editForm.img} onChange={handleEditChange} label="Image" size="small" />
          <TextField name='name' value={editForm.name} onChange={handleEditChange} label="Name" size="small" />
          <TextField name='about' value={editForm.about} onChange={handleEditChange} label="About" size="small" />
          <TextField name='price' value={editForm.price} onChange={handleEditChange} label="Price" size="small" />
          <Button type='submit' variant='contained' disabled={!editForm.id}>Save Changes</Button>
        </form>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <TextField
            label="Search name..."
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)} 
            style={{ padding: "8px", borderRadius: "4px" }}
          >
            <option value="">All Status</option>
            <option value="true">On sale</option>
            <option value="false">Out of sale</option>
          </select>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
        {data.map((user) => (
          <Card key={user.id} sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 200 }} image={user.img || 'https://via.placeholder.com/200'} title={user.name} />
            <CardContent>
              <Typography gutterBottom variant="h5">{user.name}</Typography>
              <Typography variant="body2" color="text.secondary">{user.about}</Typography>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <Typography variant="h6" color="primary">{user.price}$</Typography>
                <Typography color={user.status ? "green" : "red"}>
                  {user.status ? "On sale" : "Out of sale"}
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              <Button onClick={() => deleteUser(user.id)} startIcon={<Delete />} color='error' size="small">Delete</Button>
              <Button onClick={() => showEdit(user)} startIcon={<EditIcon />} size="small">Edit</Button>
              <Switch checked={!!user.status} onChange={() => changeStatus(user)} />
            </CardActions>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default App;
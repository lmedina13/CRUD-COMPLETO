import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MascotaForm from './componentes/MascotaForm';
import MascotaList from './componentes/MascotaList';

function App() {
  const [mascotas, setMascotas] = useState([]);
  const [editando, setEditando] = useState(null);

  const obtenerMascotas = async () => {
    const res = await axios.get('http://localhost:3000/mascotas');
    setMascotas(res.data);
  };

  useEffect(() => {
    obtenerMascotas();
  }, []);

  const agregarMascota = async (nuevaMascota) => {
    await axios.post('http://localhost:3000/mascotas', nuevaMascota);
    obtenerMascotas();
  };

  const actualizarMascota = async (id, mascotaActualizada) => {
    await axios.put(`http://localhost:3000/mascotas/${id}`, mascotaActualizada);
    setEditando(null);
    obtenerMascotas();
  };

  const eliminarMascota = async (id) => {
    await axios.delete(`http://localhost:3000/mascotas/${id}`);
    obtenerMascotas();
  };

  return (
    <div>
      <h1>CRUD de Mascotas</h1>
      <MascotaForm
        onAgregar={agregarMascota}
        onActualizar={actualizarMascota}
        editando={editando}
      />
      <MascotaList
        mascotas={mascotas}
        onEditar={setEditando}
        onEliminar={eliminarMascota}
      />
    </div>
  );
}

export default App;

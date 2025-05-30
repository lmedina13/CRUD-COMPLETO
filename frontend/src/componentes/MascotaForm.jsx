import { useEffect, useState } from 'react';

function MascotaForm({ onAgregar, onActualizar, editando }) {
  const [form, setForm] = useState({ nombre: '', especie: '', edad: '' });

  useEffect(() => {
    if (editando) setForm(editando);
  }, [editando]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editando) {
      onActualizar(editando.id, form);
    } else {
      onAgregar(form);
    }
    setForm({ nombre: '', especie: '', edad: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        required
      />
      <input
        name="tipo"
        placeholder="Especie"
        value={form.tipo}
        onChange={handleChange}
        required
      />
      <input
        name="edad"
        type="number"
        placeholder="Edad"
        value={form.edad}
        onChange={handleChange}
        required
      />
      <button type="submit">
        {editando ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  );
}

export default MascotaForm;


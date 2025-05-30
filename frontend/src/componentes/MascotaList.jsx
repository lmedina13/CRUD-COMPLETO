function MascotaList({ mascotas, onEditar, onEliminar }) {
  console.log("Mascotas:", mascotas); 
  return (
    <div>
      <h2>Listado de Mascotas</h2>
      <ul>
        {mascotas.map((mascota) => (
          <li key={mascota.id}>
            {mascota.nombre} - {mascota.especie} - {mascota.edad} años
            <button onClick={() => onEditar(mascota)}>Editar</button>
            <button onClick={() => onEliminar(mascota.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MascotaList;

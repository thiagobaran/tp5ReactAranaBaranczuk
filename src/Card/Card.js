import React, { useState } from 'react';
import './Card.css';

function Card({ mascota, duenio, fecha, hora, sintomas, eliminarCita, id }) {
  const [confirmarEliminacion, setConfirmarEliminacion] = useState(false);

  const handleEliminarCita = () => {
    eliminarCita(id);
  };

  const handleConfirmarEliminacion = () => {
    setConfirmarEliminacion(true);
  };

  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{duenio}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Sintomas: <span>{sintomas}</span></p>
      {confirmarEliminacion ? (
        <div>
          <button onClick={handleEliminarCita} className="button eliminar-confirmar u-full-width">Confirmar Eliminar</button>
          <button onClick={() => setConfirmarEliminacion(false)} className="button cancelar-eliminar u-full-width">Cancelar</button>
        </div>
      ) : (
        <button onClick={handleConfirmarEliminacion} className="button u-full-width">Eliminar x</button>
      )}
    </div>
  );
}

export default Card;

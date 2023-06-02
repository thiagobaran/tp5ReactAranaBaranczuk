import './Card.css';

function Card({citas}) {
  return (
    <div class="cita">
        <p>Mascota: <span>{citas.mascota}</span></p>
        <p>Dueño: <span>{citas.dueño}</span></p>
        <p>Fecha: <span>{citas.fecha}</span></p>
        <p>Hora: <span>{citas.hora}</span></p>
        <p>Sintomas: <span>{citas.sintomas}</span></p>
        <button class="button elimnar u-full-width">Eliminar ×</button>
    </div>
  );
}

export default Card;
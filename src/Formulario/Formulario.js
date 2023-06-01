import { useCallback, useState } from 'react';
import './Formulario.css';

const Formulario = ({agregarCita})=>{

    const [nombre,setNombre]=useState('');
    const [dueno,setDueno]=useState('');
    const [fecha,setFecha]=useState('');
    const [hora,setHora]=useState('');
    const [sintomas,setSintomas]=useState('');

    const NombreOnChange = e => {
        setNombre(e.target.value)
    }
    const DuenoOnChange = e => {
        setDueno(e.target.value)
    }
    const FechaOnChange = e => {
        setFecha(e.target.value)
    }
    const HoraOnChange = e => {
        setHora(e.target.value)
    }
    const SintomasOnChange = e => {
        setSintomas(e.target.value)
    }

    const ButtonCita = e=>{
        e.preventDefault();
        console.log('listo')
        const citaNueva={
        nombre:nombre,
        dueno:dueno,
        fecha:fecha,
        hora:hora,
        sintomas:sintomas,
        }
        agregarCita(citaNueva);
        setNombre('');
        setDueno('');
        setFecha('');
        setHora('');
        setSintomas('');

    };

    return(
       <form onSubmit={ButtonCita}>
        
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value={nombre} onChange={NombreOnChange}/>

        <label>Nombre Dueño</label>
        <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota"  value={dueno} onChange={DuenoOnChange}/>

        <label>Fecha</label>
        <input type="date" name="fecha" class="u-full-width" value={fecha} onChange={FechaOnChange}/>

        <label>Hora</label>
        <input type="time" name="hora" class="u-full-width" value={hora} onChange={HoraOnChange}/>

        <label>Sintomas</label>
        <textarea name="sintomas" class="u-full-width" value={sintomas} onChange={SintomasOnChange}/>
        <button  class="u-full-width button-primary">Agregar Cita</button>
       </form>
       
    );
};
export default Formulario;
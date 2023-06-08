import Formulario from '../Formulario/Formulario';
import Titulos from '../Titulos/Titulos';
import Card from '../Card/Card';
import SubTitulos from '../SubTitulos/SubTitulos';
import './App.css';
import { useState } from 'react';

const random = () => Math.floor(Math.random() * 1000000000);

function App() {
  let contador=0
  let mascota=''
  let duenio=''
  let fecha=''
  let hora=''
  let sintomas=''

  const [citas, setCitas] = useState([
    {
      id: random(),
      mascota:'Nina',
      duenio:'Martin',
      fecha:'2021-08-05',
      hora:'08:20',
      sintomas:'Le duele la pierna'
    },
      
    {
      id:random(),
      mascota:'Sifon',
      duenio:'Flecha',
      fecha:'2023-08-05',
      hora:'09:24',
      sintomas:'Duerme mucho'
    },
    {
      id:random(),
      mascota:'Floki',
      duenio:'Ari',
      fecha:'2023-08-05',
      hora:'16:15',
      sintomas:'No está comiendo'
    }
  ]);
  
  const agregarCita = (citaAhora) => {
    citaAhora.id = random();
    console.log(citaAhora)
    const agregar = [...citas,citaAhora]
    setCitas(agregar)
    console.log(citas)
  
  }

  const eliminarCita = (id) => {
    setCitas(citas.filter(item => item.id !== id));
  }

  return (
    <div id="root">
      <header>
      <Titulos tituloH1='ADMINISTRADOR DE PACIENTES'/>
      <div class="container">
        <div class="row">
            <div class="one-half column">
            <SubTitulos tituloH2='Crear mi cita'/>
            <Formulario agregarCita={agregarCita} titulo='Nombre Mascota:' textoInput="Nombre Mascota"/>
            </div>
            <div class="one-half column">
            <SubTitulos tituloH2='Administra tus citas'/>

            {citas.map((cita)=>(
              <Card eliminarCita={eliminarCita} id={cita.id} mascota={cita.mascota} duenio={cita.duenio} fecha={cita.fecha} hora={cita.hora} sintomas={cita.sintomas}></Card>
            ))}
            
            </div>
      </div>
    </div>
    </header>
    </div>
    
  );
}

export default App;

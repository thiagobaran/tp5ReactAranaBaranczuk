import Formulario from '../Formulario/Formulario';
import Titulos from '../Titulos/Titulos';
import Card from '../Card/Card';
import SubTitulos from '../SubTitulos/SubTitulos';
import './App.css';
import { useState } from 'react';

function App() {
  let contador=0
  let id=contador
  let mascota=''
  let dueño=''
  let fecha=''
  let hora=''
  let sintomas=''

  const [citas, setCitas] = useState([
    {
      id:contador+1,
      mascota:'Nina',
      dueño:'Martin',
      fecha:'2021-08-05',
      hora:'08:20',
      sintomas:'Le duele la pierna'
    },
      
    {
      id:contador+1,
      mascota:'Sifon',
      dueño:'Flecha',
      fecha:'2023-08-05',
      hora:'09:24',
      sintomas:'Duerme mucho'
    },
    {
      id:contador+1,
      mascota:'Floki',
      dueño:'Ari',
      fecha:'2023-08-05',
      hora:'16:15',
      sintomas:'No está comiendo'
    }
  ]);
  
  const agregarCita = (citaAhora) => {
    console.log(citaAhora)
    const agregar = [...citas,citaAhora]
    setCitas(agregar)
    console.log(citas)
  
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

            {citas.map(({citas})=>(
              <Card mascota={citas.mascota} dueño={citas.dueño} fecha={citas.fecha} hora={citas.hora} sintomas={citas.sintomas}></Card>
            ))}
            
            </div>
      </div>
    </div>
    </header>
    </div>
    
  );
}

export default App;

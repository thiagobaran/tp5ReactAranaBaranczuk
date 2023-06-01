import Formulario from '../Formulario/Formulario';
import Titulos from '../Titulos/Titulos';
import Card from '../Card/Card';
import SubTitulos from '../SubTitulos/SubTitulos';
import './App.css';

function App() {
  return (
    <div id="root">
      <header>
      <Titulos tituloH1='ADMINISTRADOR DE PACIENTES'/>
      <div class="container">
        <div class="row">
            <div class="one-half column">
            <SubTitulos tituloH2='Crear mi cita'/>
            <form>
              <Formulario titulo='Nombre Mascota:' textoInput="Nombre Mascota"/>
            </form>
                
            </div>
            <div class="one-half column">
            <SubTitulos tituloH2='Administra tus citas'/>
            <Card mascota='Nina' dueño='Martin' fecha='2021-08-05' hora='08:20' sintomas='Le duele la pierna'/>
            <Card mascota='Sifon' dueño='Flecha' fecha='2023-08-05' hora='09:24' sintomas='Duerme mucho'/>
            <Card mascota='Floki' dueño='Ari' fecha='2023-08-05' hora='16:15' sintomas='No está comiendo'/>
            </div>
      </div>
    </div>
    </header>
    </div>
    
  );
}

export default App;

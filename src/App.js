import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import OnlineList from './components/container/online_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyle from './components/pure/greetingStyle';
import Clock from './components/pure/Clock';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import ColorRgb from './components/pure/colorRgb';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Componente propio de Greeting.jsx */}
        {/* <Greeting name= {"Cristian"}></Greeting> */}
        {/* Componente funcional */}
        {/* <GreetingF name= "Cristian"></GreetingF> */}
        {/* Componente de task_list */}
        {/* <TaskListComponent></TaskListComponent> */}
        
        {/* <OnlineList></OnlineList> */}

        {/* Ejemplos de usos de hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteContexto></MiComponenteContexto> */}
        {/* <Ejemplo4 nombre='Cristian'>
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}

        {/* <GreetingStyle name="Cristian"></GreetingStyle> */}
        {/* <Clock></Clock> */}


        {/* Gestion de eventos */}
        {/* <Father></Father> */}
        {/* Ejemplos de renderizado condicional */}
        {/* <OptionalRender></OptionalRender> */}
        {/* <ColorRgb></ColorRgb> */}

        {/* Uso de Formik y Yup */}
        {/* <LoginFormik></LoginFormik> */}
        <RegisterFormik></RegisterFormik>
      
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import OnlineList from './components/container/online_list';

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
        <OnlineList></OnlineList>
      </header>
    </div>
  );
}

export default App;

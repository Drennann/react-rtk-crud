import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route path='/' element={<TaskList/>}></Route>
      <Route path='/CreateTask' element={<TaskForm/>}></Route>
      <Route path='/EditTask/:id' element={<TaskForm/>}></Route>
    </Routes>
  );
}

export default App;

import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route path='/react-rtk-crud' element={<TaskList/>}></Route>
      <Route path='/react-rtk-crud/CreateTask' element={<TaskForm/>}></Route>
      <Route path='/react-rtk-crud/EditTask/:id' element={<TaskForm/>}></Route>
    </Routes>
  );
}

export default App;

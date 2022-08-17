import { useSelector, useDispatch } from "react-redux"
import { deleteTask } from "../features/tasks/taskSlice";
import {useNavigate, Link} from "react-router-dom";
import "./TaskList.css"

export default function TaskList(){

    const tasks = useSelector(state => state.tasks);    

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    const Redirect = () => {
        navigate("/CreateTask")
    }

    return(
        <div>
            <div className="TasksContainer">
            {tasks.map(task => <div key={task.id} className="Task"> 
                                    <h2>{task.title}</h2>
                                    <p>{task.description}</p>       
                                    <div>
                                        <button className="Button"><Link to={"./EditTask/"+task.id} className="Link">Edit</Link></button>
                                        <button className="Button" onClick={() => handleDelete(task.id)}>delete</button>
                                    </div>
                                </div>)}
            </div>
        <button onClick={Redirect} className="CreateTask">Create Task</button>
        </div>
    )
}
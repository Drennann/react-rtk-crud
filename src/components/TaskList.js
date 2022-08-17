import { useSelector, useDispatch } from "react-redux"
import { deleteTask } from "../features/tasks/taskSlice";
import {useNavigate, Link} from "react-router-dom";

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
            {tasks.map(task => <div key={task.id}> 
                                    <h2>{task.title}</h2>
                                    <p>{task.description}</p>       
                                    <Link to={"./EditTask/"+task.id}>Edit</Link>
                                    <button onClick={() => handleDelete(task.id)}>delete</button>
                                </div>)}
        <button onClick={Redirect}>Create Task</button>
        </div>
    )
}
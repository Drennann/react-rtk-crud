import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask} from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import "./TaskForm.css";

export default function TaskForm(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const tasks = useSelector(state => state.tasks);
    const [task, setTask] = useState({
        title: "",
        description: ""
    });

    const handleChange = (e) => {
        setTask({
          ...task,
          [e.target.name]: e.target.value,
        });
      };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (params.id) {
          dispatch(editTask({ ...task, id: params.id }));
        } else {
          dispatch(
            addTask({
              ...task,
              id: uuid(),
            })
          );
        }
    
        navigate("/react-rtk-crud");
    }

    useEffect(() => {
        if (params.id) {
          setTask(tasks.find((task) => task.id === params.id));
        }
      }, [params, tasks]);

    return(
      <div className="FormContainer">
        <form onSubmit={onSubmitHandler}>
            <input type="text" name="title" placeholder="title" onChange={handleChange} value={task.title}></input>
            <textarea name="description" placeholder="description" onChange={handleChange} value={task.description}></textarea>
            <button>Save</button>
        </form>
      </div>
    )
}
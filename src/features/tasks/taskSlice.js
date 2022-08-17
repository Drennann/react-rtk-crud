import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = [
    {
        id:"1",
        title: "task 1",
        description: "Task 1 description",
        completed: false
    },
    {
        id:"2",
        title: "task 2",
        description: "Task 2 description",
        completed: true
    } 

]

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers:{
        addTask: (state, action) => {
            state.push(action.payload);
        },
        deleteTask: (state, {payload}) => {
            const taskFound = state.find(task => task.id === payload);
            if(taskFound){
                state.splice(state.indexOf(taskFound), 1);
            }
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload;
            const foundTask = state.find((task) => task.id === id);
            if (foundTask) {
              foundTask.title = title;
              foundTask.description = description;
            }
          },
    }
})

export const {addTask, deleteTask, editTask} = taskSlice.actions; 

export default taskSlice.reducer;
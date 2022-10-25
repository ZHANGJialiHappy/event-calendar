import './styles.css';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";


export const Dialog = ({ visiable }) => {
    const schema = yup.object().shape({
        title: yup.string().required(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const [newTask, setNewTask] = useState("")
    const [todoList, setTodolist] = useState([])

    const handelChange = (event) => {
        setNewTask(event.target.value)
    }

    const addNewTask = () => {
        const task = {
            id: Math.floor(Math.random() * 10000),
            taskName: newTask,
        }
        setTodolist([...todoList, task])
        setNewTask("")
    }

    const deleteTask = (id) => {
        setTodolist(todoList.filter((task) => task.id !== id))
    }

    return (
        <div className={visiable ? "dialog" : "hide"}>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="label" >Event</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Add title"
                        required {...register("email")}
                        onChange={handelChange} />

                    <p className="validationMessage">{errors.email?.message}</p>
                </div>
                <div className="buttonContainer">
                    <button onClick={addNewTask}>Submit</button>
                    {todoList.map((task) => {
                        return (
                            <div key={task.id}>
                                {task.taskName}
                                <button onClick={() => deleteTask(task.id)}> x </button>
                            </div>
                        )
                    })}
                </div>
            </form>
        </div>
    )
}
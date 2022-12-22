import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Defaul description1', false, LEVELS.URGENT)
    const defaultTask2 = new Task('Example2', 'Defaul description2', true, LEVELS.NORMAL)
    const defaultTask3 = new Task('Example3', 'Defaul description3', false, LEVELS.BLOCKING)

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log("Modificacion de tareas");
        setLoading(false);
        return () => {
            console.log("Componente a punto de desaparecer")
        };
    }, [tasks]);

    function completeTask(task){
        console.log("complete this task:", task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        // Actualizamos el estado del componente de tareas
        setTasks(tempTask);
    }

    function deleteTask(task){
        console.log("delete this task:", task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index,1);
        setTasks(tempTask);
    }

    function addTask(task){
        console.log("delete this task:", task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }

    return (
        <div>
            <div className='tabla'>
                <div className='carta'>
                    <div className='card-title'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    {/* Card Body */}
                    <div className='card-body' style={{position: 'relative', heigth: '400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Priority</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => {
                                    return (
                                        <TaskComponent 
                                            key={index} 
                                            task={task}
                                            complete={completeTask}
                                            remove={deleteTask}>
                                        </TaskComponent>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                    
                </div>
                
            </div>
            <TaskForm add={addTask}></TaskForm>
        </div>
    );
};


export default TaskListComponent;

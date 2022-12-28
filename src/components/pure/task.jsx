import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

// Importamos la hoja de estilos de task.scss
import '../../App.css'
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log("Tarea creada");
        return () => {
            console.log('Task: ${task.name} is going to unmount')
        };
    }, [task]);

    function taskLevelBadge(){
        switch (task.level){
            case LEVELS.NORMAL:
                return(<h6><span style={{color: 'green'}}>{task.level}</span></h6>)
            
            case LEVELS.URGENT:
                return(<h6><span style={{color: 'red'}}>{task.level}</span></h6>)
            
            case LEVELS.BLOCKING:
                return(<h6><span>{task.level}</span></h6>)
            
            default:
                break;
        }
    }

    return (
        <tr className='tareas'>
            <th>
                <span>{task.name}</span>
            </th>
            <td>
                <span>{task.description}</span>
            </td>
            <td>
                {taskLevelBadge()}
            </td>
            <td>
                { task.completed ?
                    (<img onClick={() => complete(task)} className='icon1' src='https://png.monster/wp-content/uploads/2021/06/png.monster-9-370x370.png'></img>) : (<img onClick={() => complete(task)} className='icon1' src='https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/red-alert-icon.png'></img>)
                }
                <img onClick={() => remove(task)} className='papelera' src='https://static.vecteezy.com/system/resources/previews/010/161/272/non_2x/trash-can-recycle-bin-icon-free-png.png'></img>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;

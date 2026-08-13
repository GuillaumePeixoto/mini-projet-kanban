import { useState } from "react";
import TaskCard from "./TaskCard";
import ModalTask from "./Modal";

function BoardList({status, tasks, onDelete, onDragStart, onDrop}) {
    const [show, setShow] = useState(false);
    const [taskState, setTask] = useState(null);

    function clickModal (taskSelected){
        setTask(taskSelected);
        setShow(true);
        console.log(taskSelected)
    }

    return(
        <div className="task-list-per-status" onDragOver={(e) => e.preventDefault()} onDrop={() => onDrop(status)}>
            <h2>{status}</h2>
            <hr />
            {tasks.map((task) => {
                return(
                    <div key={"task-"+task.id}>
                        <TaskCard  taskDetails={task} onDelete={onDelete} onClick ={()=> clickModal(task)} onDragStart={onDragStart}></TaskCard>
                    </div>
                    
                )       
            })}
            <ModalTask show = {show} onHide={() => setShow(false)} task={taskState}/>
        </div>
    );
}

export default BoardList;
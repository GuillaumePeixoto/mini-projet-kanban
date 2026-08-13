import { useState } from "react";
import TaskCard from "./TaskCard";
import ModalTask from "./Modal";

function BoardList({status, tasks, onDelete}) {
    const [show, setShow] = useState(false);
    const [taskState, setTask] = useState(null);

    function clickModal (taskSelected){
        setTask(taskSelected);
        setShow(true);
        console.log(taskSelected)
    }

    return(
        <div className="task-list-per-status">
            <h2>{status}</h2>
            <hr />
            {tasks.map((task) => {
                return(
                    <div key={"task-"+task.id}>
                        <TaskCard  taskDetails={task} onDelete={onDelete} onClick ={()=> clickModal(task)}></TaskCard>
                    </div>
                    
                )       
            })}
            <ModalTask show = {show} onHide={() => setShow(false)} task={taskState}/>
        </div>
    );
}

export default BoardList;
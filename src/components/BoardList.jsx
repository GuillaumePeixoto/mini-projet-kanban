import TaskCard from "./TaskCard";


function BoardList({status, tasks, onDelete}) {

    return(
        <div className="task-list-per-status">
            <h2>{status}</h2>
            <hr />
            {tasks.map((task) => {
                return(
                    <TaskCard key={"task-"+task.id} taskDetails={task} onDelete={onDelete}></TaskCard>
                )
            })}
        </div>
    );
}

export default BoardList;
import TaskCard from "./TaskCard";


function BoardList({status, tasks}) {

    console.log(tasks)

    return(
        <div className="task-list-per-status">
            <h2>{status}</h2>
            <hr />
            {tasks.map((task) => {
                <TaskCard taskDetails={task}></TaskCard>
            })}
        </div>
    );
}

export default BoardList;
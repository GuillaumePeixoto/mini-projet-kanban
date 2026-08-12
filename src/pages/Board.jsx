import BoardList from "../components/BoardList";

function Board({tasks, onDelete}) {
  const statusType = ["To Do", "In Progress", "Done"];

  return (
    <>
      <h2>Board</h2>
      <div className="tasks-manager">
        {statusType.map((element, i) => {
            const dataPerStatus = tasks.filter((task) => task.status === element);
            return (<BoardList key={i} status={element} tasks={dataPerStatus} onDelete={onDelete} />)
        })}
      </div>
    </>
  );
}

export default Board;

import BoardList from "../components/BoardList";

function Board({tasks}) {
  const statusType = ["To Do", "In Progress", "Done"];
    console.log('test');
  return (
    <>
      <h2>Board</h2>
      <div className="tasks-manager">
        {statusType.map((element, i) => {
            console.log(element);
            const dataPerStatus = tasks.filter((task) => task.status === element);
            return (<BoardList key={i} status={element} tasks={dataPerStatus} />)
        })}
      </div>
    </>
  );
}

export default Board;

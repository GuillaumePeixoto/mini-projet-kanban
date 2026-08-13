import BoardList from "../components/BoardList";
import ModalTask from "../components/Modal";


function Board({tasks, onDelete, onDragStart, onDrop}) {
  const statusType = ["To Do", "In Progress", "Done"];

  return (
    <>
      <h2>Board</h2>
      <div className="tasks-manager">
        {statusType.map((element, i) => {
            const dataPerStatus = tasks.filter((task) => task.status === element);
            return (<BoardList key={i} status={element} tasks={dataPerStatus} onDelete={onDelete} onDragStart={onDragStart} onDrop={onDrop} />)
        })}
        <ModalTask/>
      </div>
 
    </>
  );
}

export default Board;

function TaskCard({taskDetails, onDelete, onClick, onDragStart}) {
  const colorByPriority = {
    High: "red",
    Medium: "orange",
    Low: "green",
  };

  return (
    <div onClick={()=> onClick(taskDetails)} draggable={true} onDragStart={() => onDragStart(taskDetails.id)} className="tasks-list" style={{ borderLeft: `6px solid ${colorByPriority[taskDetails.priority]}` }}>
        <h4>{taskDetails.title}</h4>
        
        <p><strong>{taskDetails.assignee}</strong></p>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
                              <p>Date limite : {taskDetails.dueDate}</p>
            </div>
            <button className="delete-task" onClick={() => onDelete(taskDetails.id)} style={{ borderRadius: '100%', border: '1px solid grey' }}>🗑️</button>
        </div>
        
    </div>
  );
}

export default TaskCard;

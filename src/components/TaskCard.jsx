function TaskCard({taskDetails, onClick, onDragStart}) {
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
        </div>
        
    </div>
  );
}

export default TaskCard;

function TaskCard({taskDetails, onDelete}) {
  const colorByPriority = {
    High: "red",
    Medium: "orange",
    Low: "green",
  };

  return (
    <div className="tasks-list" style={{ borderLeft: `6px solid ${colorByPriority[taskDetails.priority]}` }}>
        <h4>{taskDetails.title}</h4>
        <div className="task-description-container">
            <p className="task-description">{taskDetails.description}</p>
        </div>
        <p><strong>{taskDetails.assignee}</strong></p>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
                <p>Date creation : {taskDetails.createdDate}</p>
                <p>Date limite : {taskDetails.dueDate}</p>
            </div>
            <button className="delete-task" onClick={() => onDelete(taskDetails.id)} style={{ borderRadius: '100%', border: '1px solid grey' }}>🗑️</button>
        </div>
        
    </div>
  );
}

export default TaskCard;

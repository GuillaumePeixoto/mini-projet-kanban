function TaskCard({ taskDetails, onClick, onDragStart }) {
  const colorByPriority = {
    High: "red",
    Medium: "orange",
    Low: "#35CC7A",
  };

  const todayDate = new Date().toISOString().split("T")[0];

  const isWithinXDays = (date1, date2, XDays) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    const diffInMs = Math.abs(d2 - d1);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    return diffInDays <= XDays;
  };

  return (
    <div
      onClick={() => onClick(taskDetails)}
      draggable={true}
      onDragStart={() => onDragStart(taskDetails.id)}
      className="tasks-list"
      style={{
        borderLeft: `6px solid ${colorByPriority[taskDetails.priority]}`,
      }}
    >
      <h4>{taskDetails.title}</h4>

      <p>
        <strong>{taskDetails.assignee}</strong>
      </p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>
            Date limite :{" "}
            <strong
              style={{
                color: isWithinXDays(todayDate, taskDetails.dueDate, 3)
                  ? "red"
                  : "black",
              }}
            >
              {taskDetails.dueDate}
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;

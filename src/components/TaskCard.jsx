function TaskCard(taskDetails) {
  const colorByPriority = {
    High: "red",
    Medium: "orange",
    Low: "green",
  };

  return (
    <div className="tasks-list" style={{ borderLeft: colorByPriority[taskDetails.priority] }}>
      <div>
        <h4>Titre tache</h4>
        <div className="person-in-charge">
          {/* <img src="" /> */}
          <div
            style={{
              border: "1px solid black",
              borderRadius: "100%",
              backgroundColor: "blue",
              width: "40px",
              height: "40px",
            }}
          ></div>
          <p>Personne attribué</p>
        </div>
        <p>priority</p>
        <p>Date début : </p>
        <p>Date limite : </p>
      </div>
    </div>
  );
}

export default TaskCard;

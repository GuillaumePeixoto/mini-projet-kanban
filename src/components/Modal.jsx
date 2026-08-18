import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function ModalTask(props) {
  const colorByPriority = {
    High: "red",
    Medium: "orange",
    Low: "#35CC7A",
  };

  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div>
              {props.task?.title}{" "}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "16px",
                  marginBottom: "0px",
                  marginTop: "5px",
                }}
              >
                <div
                  style={{
                    height: "12px",
                    width: "12px",
                    borderRadius: "100%",
                    backgroundColor: colorByPriority[props.task?.priority],
                    marginRight: "10px",
                  }}
                ></div>
                {props.task?.priority}
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>
              👤 Assigned to <strong>{props.task?.assignee}</strong>
            </p>
            <p>📌 Status: {props.task?.status}</p>
            <p>📅 Creation Date: {props.task?.createdDate}</p>
            <p>📅 Due Date: {props.task?.dueDate}</p>
            <hr />
            <h5>Description :</h5>
            <p>{props.task?.description}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to={"/update-task/" + props.task?.id}>
            <Button variant="warning">
              <i className="fa-solid fa-pen-to-square"></i>
            </Button>
          </Link>
          <Button
            variant="danger"
            onClick={() => {
              props.onHide();
              props.onDelete(props.task.id);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalTask;

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function ModalTask(props) {
  
  return (
    <>

      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{props.task?.title }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <p>Description :{props.task?.description}</p>
                <p>Status: {props.task?.status}</p>
                <p>Assignee: {props.task?.assignee}</p>
                <p>Priority: {props.task?.priority}</p>
                <p>Creation Date: {props.task?.createdDate}</p>
                <p>Due Date: {props.task?.dueDate}</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to={'/update-task/' + props.task?.id}>
          <Button variant='warning'><i className="fa-solid fa-pen-to-square"></i></Button>
          </Link>
          <Button variant='danger' onClick={()=>{props.onHide(); props.onDelete(props.task.id)}}><i className="fa-solid fa-trash"></i></Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalTask;

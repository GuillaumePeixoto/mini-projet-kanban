import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalTask({show, onHide, task}) {
  return (
    <>

      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{task?.title }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <p>Description :{task?.description}</p>
                <p>Status: {task?.status}</p>
                <p>Assignee: {task?.assignee}</p>
                <p>Priority: {task?.priority}</p>
                <p>Creation Date: {task?.createdDate}</p>
                <p>Due Date: {task?.dueDate}</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <p>Button update</p>
          <p>Button delete</p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalTask;

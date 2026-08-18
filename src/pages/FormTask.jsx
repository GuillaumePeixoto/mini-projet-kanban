import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";

function FormTask(props) {

  const param = useParams();
  const navigate = useNavigate();

  let titlePage = "Add Task";
  let taskToUpdate;
  if (param["id"]) {
    taskToUpdate = props.tasks.find((task) => task.id === param["id"]);
    titlePage = "Update Task";
  }

  let defaultCreatedDate = new Date().toISOString().split("T")[0];
  let defaultDueDate = new Date( Date.now() + 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const [titleTask, setTitleTask] = useState(
    taskToUpdate?.title ? taskToUpdate.title : "",
  );
  const [description, setDescription] = useState(
    taskToUpdate?.description ? taskToUpdate.description : "",
  );
  const [assigneeTask, setAssigneeTask] = useState(
    taskToUpdate?.assignee ? taskToUpdate.assignee : "",
  );
  const [status, setStatus] = useState(
    taskToUpdate?.status ? taskToUpdate.status : "To Do",
  );
  const [priority, setPriority] = useState(
    taskToUpdate?.priority ? taskToUpdate.priority : "Low",
  );

  const createdDate = taskToUpdate?.createdDate ? taskToUpdate.createdDate : defaultCreatedDate;

  const [dueDate, setDueDate] = useState(
    taskToUpdate?.dueDate ? taskToUpdate.dueDate : defaultDueDate,
  );
  function handleSubmit(event) {
    event.preventDefault();
    let taskForm = {
      title: titleTask,
      description: description,
      assignee: assigneeTask,
      status: status,
      priority: priority,
      createdDate: createdDate,
      dueDate: dueDate,
    };

    if(param['id']){
      taskForm.id = taskToUpdate.id;
      props.updateTask(taskForm);
    }else{
      taskForm.id = crypto.randomUUID();
      props.addTask(taskForm);
    }

    navigate('/');
  }

  return (
    <div>
      <h1>{titlePage}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={titleTask}
            onChange={(e) => setTitleTask(e.target.value)}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.CntrolInput1">
          <Form.Label>Assignee Task</Form.Label>

          <Form.Control
            value={assigneeTask}
            onChange={(e) => setAssigneeTask(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> Status</Form.Label>

          <Form.Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            aria-label="Default select example"
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> Priority</Form.Label>

          <Form.Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            aria-label="Default select example"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Due Date</Form.Label>
          <div className="custom-datepicker-wrapper w-100">
            <DatePicker
              selected={dueDate}
              onChange={(date) => setDueDate(date.toISOString().split("T")[0])}
              className="form-control"
              dateFormat="yyyy-MM-dd"
            />
          </div>
        </Form.Group>
        <Button type="submit">{titlePage}</Button>
      </Form>
    </div>
  );
}
export default FormTask;

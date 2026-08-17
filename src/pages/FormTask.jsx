import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";

function FormTask(props) {
  const param = useParams();
  const taskToUpdate = props.tasks.find((task) => task.id === param["id"]);
  console.log(taskToUpdate);
  console.log(param);
  const [titleTask, setTitleTask] = useState("");
  const [description, setDescription] = useState("");
  const [assigneeTask, setAssigneeTask] = useState("");
  const [status, setStatus] = useState("To Do");
  const [priority, setPriority] = useState("Low");
  const [createdDate, setCreatedDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [dueDate, setDueDate] = useState(
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
  );
  function handleSubmit(event) {
    event.preventDefault();
    const taskForm = {
      title: titleTask,
      description: description,
      assignee: assigneeTask,
      status: status,
      priority: priority,
      createdDate: createdDate,
      dueDate: dueDate,
    };
    console.log(taskForm);
  }

  return (
    <div>
      <h2>Update Task</h2>
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
          <Form.Group className="mb-3" controlId="exampleForm.CntrolInput1">
            <Form.Label>Assignee Task</Form.Label>

            <Form.Control
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Form.Group>
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
        <Form.Group controlId="dateSelection">
          <Form.Label>Choisir une date</Form.Label>
          <div className="custom-datepicker-wrapper w-100">
            <DatePicker
              selected={createdDate}
              onChange={(date) => setCreatedDate(date)}
              className="form-control"
              dateFormat="yyyy-MM-dd"
            />
          </div>
          <Form.Label>Choisir une date</Form.Label>
          <div className="custom-datepicker-wrapper w-100">
            <DatePicker
              selected={dueDate}
              onChange={(date) => setDueDate(date)}
              className="form-control"
              dateFormat="yyyy-MM-dd"
            />
          </div>
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}
export default FormTask;

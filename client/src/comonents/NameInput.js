import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NameInput = ({ name, setName }) => {
  return (
    <>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
    </>
  );
};

export default NameInput;

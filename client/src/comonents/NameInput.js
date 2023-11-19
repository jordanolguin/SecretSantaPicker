import Form from "react-bootstrap/Form";

const NameInput = ({ name, setName }) => {
  return (
    <Form.Group controlId="formName">
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Form.Group>
  );
};

export default NameInput;

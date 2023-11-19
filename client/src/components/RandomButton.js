import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const RandomButton = () => {
  const secretSantas = ["John", "Jane", "Paul", "Mary", "Max"];

  const [userName, setUserNames] = useState("");
  const [assignedSanta, setAssignedSanta] = useState("");

  const handleAssignSanta = () => {
    const remainingSantas = secretSantas.filter((santa) => santa !== userName);
    const randomSanta =
      remainingSantas[Math.floor(Math.random() * remainingSantas.length)];
    setAssignedSanta(randomSanta);
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="formUserName">
          <Form.Label>Enter your name to recieve your secret Santa</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setUserNames(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="outline-danger
        "
          onClick={handleAssignSanta}
        >
          Assign Santa
        </Button>
        {assignedSanta && (
          <div className="mt-3">
            <p>
              {userName}, your secret santa is {assignedSanta}
            </p>
          </div>
        )}
      </Form>
    </Container>
  );
};

export default RandomButton;

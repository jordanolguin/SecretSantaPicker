import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const RandomButton = () => {
  const secretSantas = ["User1", "User2", "User3", "User4", "User5"];

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
          <Form.Label>Enter your name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setUserNames(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAssignSanta}>
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

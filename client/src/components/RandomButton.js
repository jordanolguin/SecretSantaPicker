import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const RandomButton = () => {
  const people = ["John", "Jane", "Paul", "Mary", "Max"];
  const exclusions = {
    John: ["Jane"],
    Jane: ["John"],
  };

  const [userName, setUserName] = useState("");
  const [assignedSanta, setAssignedSanta] = useState("");

  const handleAssignSanta = () => {
    if (userName.trim() === "") {
      alert("Please enter a valid name");
      return;
    }

    if (people.includes(userName)) {
      const remainingPeople = people.filter(
        (person) =>
          person !== userName && !exclusions[userName]?.includes(person)
      );
      const assignedSantaIndex = Math.floor(
        Math.random() * remainingPeople.length
      );
      const assignedSanta = remainingPeople[assignedSantaIndex];

      setAssignedSanta(assignedSanta);
    } else {
      alert("Please enter a valid name");
    }
  };

  return (
    <Container className="mt-5">
      <Form>
        <Form.Group controlId="formUserName">
          <Form.Label>Enter your name to receive your secret Santa</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Button variant="outline-danger" onClick={handleAssignSanta}>
          Assign Santa
        </Button>
        {assignedSanta && (
          <div className="mt-3">
            <p>
              {userName}, your secret Santa is {assignedSanta}
            </p>
          </div>
        )}
      </Form>
    </Container>
  );
};

export default RandomButton;

import { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

const RandomButton = () => {
  const participants = [
    { name: "John", pin: "1234" },
    { name: "Jane", pin: "5678" },
    { name: "Paul", pin: "9876" },
    { name: "Mary", pin: "4321" },
    { name: "Max", pin: "8765" },
  ];
  const exclusions = {
    John: ["Jane"],
    Jane: ["John"],
  };

  const [userName, setUserName] = useState("");
  const [userPins, setUserPins] = useState(["", "", "", ""]);
  const [assignedSanta, setAssignedSanta] = useState("");

  const handlePinInputChange = (index, value) => {
    const newPins = [...userPins];
    newPins[index] = value;
    setUserPins(newPins);
  };

  const handleAssignSanta = () => {
    const enteredPin = userPins.join("");

    if (userName.trim() === "" || enteredPin.trim() === "") {
      alert("Please enter your name and pin.");
      return;
    }

    const participant = participants.find(
      (p) => p.name === userName && p.pin === enteredPin
    );

    if (participant) {
      const remainingParticipants = participants.filter(
        (p) => p.name !== userName && !exclusions[userName]?.includes(p.name)
      );
      if (remainingParticipants.length > 0) {
        // Fisher-Yates shuffle
        for (let i = remainingParticipants.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [remainingParticipants[i], remainingParticipants[j]] = [
            remainingParticipants[j],
            remainingParticipants[i],
          ];
        }
        const assignedSanta = remainingParticipants[0].name;

        setAssignedSanta(assignedSanta);
      } else {
        alert("Uh oh! No eligible Secret Santas available.");
      }
    } else {
      alert("Uh oh! Invalid name or pin.");
    }
  };

  return (
    <Container className="mt-5">
      <Form>
        <Form.Group controlId="formUserName">
          <Form.Label>Enter your name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formUserPin">
          <Form.Label>Enter your 4-digit pin</Form.Label>
          <Row>
            {userPins.map((pin, index) => (
              <Col key={index}>
                <Form.Control
                  type="number"
                  placeholder="0"
                  min="0"
                  max="9"
                  value={pin}
                  onChange={(e) => handlePinInputChange(index, e.target.value)}
                />
              </Col>
            ))}
          </Row>
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

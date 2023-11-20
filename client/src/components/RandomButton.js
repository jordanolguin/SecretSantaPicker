import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Row, Col, Spinner } from "react-bootstrap";

const RandomButton = ({ participants, exclusions }) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userPins, setUserPins] = useState(["", "", "", ""]);
  const [assignedSanta, setAssignedSanta] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePinInputChange = (index, value) => {
    const newPins = [...userPins];
    newPins[index] = value;
    setUserPins(newPins);
  };

  const handleAssignSanta = () => {
    setLoading(true);
    const enteredPin = userPins.join("");

    if (userName.trim() === "" || enteredPin.trim() === "") {
      alert("Please enter your name and pin.");
      setLoading(false);
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
        const shuffledParticipants = remainingParticipants.slice();
        for (let i = shuffledParticipants.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledParticipants[i], shuffledParticipants[j]] = [
            shuffledParticipants[j],
            shuffledParticipants[i],
          ];
        }

        const assignedSanta = shuffledParticipants[0].name;
        setAssignedSanta(assignedSanta);

        // Redirect to EnterPin component with participant id
        const assignedParticipant = participants.find(
          (p) => p.name === assignedSanta
        );
        navigate(`/enter-pin/${assignedParticipant.id}`);
      } else {
        alert("Uh oh! No eligible Secret Santas available.");
      }
    } else {
      alert("Uh oh! Invalid name or pin.");
    }
    setLoading(false);
  };

  return (
    <Container className="mt-5 d-flex align-items-center text-center justify-content-center">
      <h2>Secret Santa</h2>
      <Form>
        <Form.Group controlId="formUserName">
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
        <Button
          variant="outline-danger"
          onClick={handleAssignSanta}
          className="mt-3"
          disabled={loading}
        >
          {loading ? (
            <Spinner animation="border" role="status" size="sm">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            "Assign Secret Santa"
          )}
        </Button>
        {assignedSanta && (
          <div className="mt-5 secretSanta">
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

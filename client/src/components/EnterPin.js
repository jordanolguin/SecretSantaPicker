import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Button, Form } from "react-bootstrap";

const EnterPin = ({ participants, exclusions }) => {
  const { id } = useParams();
  const participant = participants.find((p) => p.id.toString() === id);

  const [userPin, setUserPin] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAssignSanta = () => {
    setLoading(true);

    if (userPin.trim() === "") {
      alert("Please enter your pin.");
      setLoading(false);
      return;
    }

    if (participant) {
      const remainingParticipants = participants.filter(
        (p) =>
          p.id !== participant.id &&
          !exclusions[participant.name]?.includes(p.name)
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
        alert(`${participant.name}, your assigned Santa is ${assignedSanta}.`);
        setLoading(false);
      } else {
        alert("Uh oh! No eligible Secret Santas available.");
        setLoading(false);
      }
    }
  };
  return (
    <Container className="mt-5 d-flex align-items-center text-center justify-content-center">
      <h2>Enter Pin</h2>
      <p>
        {participant ? `Hello ${participant.name}!` : "Participant not found."}
      </p>
      <Form>
        <Form.Group controlId="formUserPin">
          <Form.Label>Enter your 4-digit pin</Form.Label>
          <Form.Control
            type="number"
            placeholder="0"
            min="0"
            max="9"
            value={userPin}
            onChange={(e) => setUserPin(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="outline-success"
          onClick={handleAssignSanta}
          className="mt-3"
          disabled={loading}
        >
          {loading ? "Assigning Secret Santa..." : "Assign Secret Santa"}
        </Button>
      </Form>
    </Container>
  );
};

export default EnterPin;

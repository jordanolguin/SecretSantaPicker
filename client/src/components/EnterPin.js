import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Button, Form, Modal } from "react-bootstrap";

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to assign Secret Santas
function assignSecretSantas(people) {
  const shuffledPeople = [...people];
  shuffleArray(shuffledPeople);

  const assignments = {};
  for (let i = 0; i < shuffledPeople.length; i++) {
    const currentPerson = shuffledPeople[i];
    const nextPerson = shuffledPeople[(i + 1) % shuffledPeople.length];
    assignments[currentPerson.name] = nextPerson.name;
  }

  return assignments;
}

const EnterPin = ({ participants, exclusions }) => {
  const { id } = useParams();
  const participant = participants.find((p) => p.id.toString() === id);

  const [userPins, setUserPins] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [assignedSanta, setAssignedSanta] = useState("");

  const handleAssignSanta = () => {
    setLoading(true);

    const enteredPin = userPins.join("");

    if (enteredPin.trim() === "") {
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
        const secretSantaAssignments = assignSecretSantas(
          remainingParticipants
        );
        const assignedSanta = secretSantaAssignments[participant.name];
        setAssignedSanta(assignedSanta);
        setShowModal(true);
      } else {
        setLoading(false);
      }
    }
  };

  const handlePinInputChange = (index, value) => {
    const newPins = [...userPins];
    newPins[index] = value;
    setUserPins(newPins);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
          <div style={{ display: "flex" }}>
            {userPins.map((pin, index) => (
              <Form.Control
                key={index}
                type="number"
                placeholder="0"
                min="0"
                max="9"
                value={pin}
                onChange={(e) => handlePinInputChange(index, e.target.value)}
                style={{ width: "25%", marginRight: "0.75em" }}
              />
            ))}
          </div>
        </Form.Group>
        <Button
          variant="outline-danger"
          onClick={handleAssignSanta}
          className="mt-3"
          disabled={loading}
        >
          {loading ? "Assigning Secret Santa..." : "Assign Secret Santa"}
        </Button>
      </Form>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        style={{ textAlign: "center" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Assigned Secret Santa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {assignedSanta && (
            <p>
              {participant.name}, your assigned Secret Santa is {assignedSanta}.
            </p>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default EnterPin;

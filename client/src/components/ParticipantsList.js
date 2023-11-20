import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const ParticipantsList = ({ participants }) => {
  const navigate = useNavigate();

  const handleParticipantClick = (id) => {
    navigate(`/enter-pin/${id}`);
  };

  return (
    <Container className="mt-5 d-flex align-items-center text-center justify-content-center">
      <h2>Participant List</h2>
      <div>
        {participants.map((participant) => (
          <Button
            key={participant.id}
            variant="outline-danger"
            className="m-2"
            onClick={() => handleParticipantClick(participant.id)}
          >
            {participant.name}
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default ParticipantsList;

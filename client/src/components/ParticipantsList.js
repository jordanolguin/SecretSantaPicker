import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const ParticipantsList = ({ participants }) => {
  return (
    <Container className="mt-5 d-flex align-items-center text-center justify-content-center">
      <h2>Participant List</h2>
      <div>
        {participants.map((participant) => (
          <Link
            key={participant.id}
            to={`/enter-pin/${participant.id}`}
            className="btn btn-outline-danger m-2"
          >
            {participant.name}
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default ParticipantsList;

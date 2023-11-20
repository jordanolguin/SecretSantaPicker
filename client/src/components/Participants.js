import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const Participants = ({ participants }) => {
  return (
    <Container className="mt-5 d-flex align-items-center text-center justify-content-center">
      <h2>Participant List</h2>
      <div>
        {participants.map((participant) => (
          <Link
            key={participant.id}
            to={`/participants/${participant.id}`}
            style={{ textDecoration: "none" }}
          >
            <Button variant="outline-danger" className="m-2">
              {participant.name}
            </Button>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Participants;

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ParticipantsList from "./components/ParticipantsList";
import EnterPin from "./components/EnterPin";

const App = () => {
  const participants = [
    { id: 1, name: "Tyler", pin: "1234" },
    { id: 2, name: "Cat", pin: "5678" },
    { id: 3, name: "Sam", pin: "9876" },
    { id: 4, name: "Jordan", pin: "4321" },
    { id: 5, name: "Nikki", pin: "8765" },
    { id: 6, name: "Ashley", pin: "1357" },
  ];

  const secretSantaAssignments = [2, 5, 1, 3, 6, 4];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ParticipantsList participants={participants} />}
        />
        <Route
          path="/enter-pin/:id"
          element={
            <EnterPin
              participants={participants}
              secretSantaAssignments={secretSantaAssignments}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

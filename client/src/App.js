import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ParticipantsList from "./components/ParticipantsList";
import EnterPin from "./components/EnterPin";

const App = () => {
  const participants = [
    { id: 1, name: "John", pin: "1234" },
    { id: 2, name: "Jane", pin: "5678" },
    { id: 3, name: "Paul", pin: "9876" },
    { id: 4, name: "Mary", pin: "4321" },
    { id: 5, name: "Max", pin: "8765" },
    { id: 6, name: "Sue", pin: "1357" },
  ];

  const secretSantaAssignments = [
    6, // John's secret Santa
    5, // Jane's secret Santa
    4, // Paul's secret Santa
    1, // Mary's secret Santa
    3, // Max's secret Santa
    2, // Sue's secret Santa
  ];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ParticipantsList participants={participants} />}
        />
        <Route
          path="/enter-pin/:id"
          element={<EnterPin participants={participants} secretSantaAssignments={secretSantaAssignments} />}
        />
      </Routes>
    </Router>
  );
};

export default App;

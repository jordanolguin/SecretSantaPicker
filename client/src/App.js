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

  const exclusions = {
    John: ["Jane"],
    Jane: ["John"],
  };

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
            <EnterPin participants={participants} exclusions={exclusions} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

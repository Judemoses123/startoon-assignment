import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homapage";
import SignupPage from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Graph from "./pages/Graph";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/graph" element={<Graph />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

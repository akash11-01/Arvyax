import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MySessions from "./pages/MySessions";
import Editor from "./pages/Editor";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!token ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/my-sessions"
          element={token ? <MySessions /> : <Navigate to="/login" />}
        />
        <Route
          path="/editor/:id?"
          element={token ? <Editor /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;

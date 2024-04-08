import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Integrations from "./pages/Integrations/Integrations";
import StatusPage from "./pages/StatusPage/StatusPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          <Route path="/integration" element={<Integrations />} />
          <Route path="/status-page" element={<StatusPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NormalStuff from "./pages/NormalStuff";
import ModalStuff from "./pages/ModalStuff";
import Home from "./pages/Home";
import StaggerList from "./pages/StaggerList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/normal-stuff" element={<NormalStuff />} />
        <Route path="/modal-stuff" element={<ModalStuff />} />
        <Route path="/stagger-list" element={<StaggerList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

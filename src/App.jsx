import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NormalStuff from "./pages/NormalStuff";
import ModalStuff from "./pages/ModalStuff";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/normal-stuff" element={<NormalStuff />} />
        <Route path="/modal-stuff" element={<ModalStuff />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

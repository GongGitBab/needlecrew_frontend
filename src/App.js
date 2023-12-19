import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import LoginPage from "./components/LoginPage/LoginPage";
import RepairRequest from "./components/RepairRequest/RepairRequest";
import Buy from "./components/Buy/Buy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/RepairRequest" element={<RepairRequest />}></Route>
        <Route path="/buy" element={<Buy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

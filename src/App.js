import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import LoginPage from "./components/LoginPage/LoginPage";
import RepairRequest from "./components/RepairRequest/RepairRequest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/RepairRequest" element={<RepairRequest />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

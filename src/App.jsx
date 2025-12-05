import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Personnel from "./pages/Personnel";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import PersonalData from "./pages/PersonalData";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/personnel" element={<Personnel />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/passwordreset" element={<PasswordReset />} />
      <Route path="/personalData" element={<PersonalData />} />
    </Routes>
  );
}

export default App;

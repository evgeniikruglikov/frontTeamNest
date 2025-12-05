import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ResponsiveAppBar from "../components/Layout/ResponsiveAppBar";
import FooterBlock from "../components/Layout/FooterBlock";
import BlackButton from "../components/UI/BlackButton";
import Backspace from "../assets/keyboard-backspace.svg";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleBack = () => navigate(-1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else if (response.status === 401) {
        setError("Неверный email или пароль");
      } else {
        setError("Произошла ошибка. Попробуйте снова.");
      }
    } catch (err) {
      console.error(err);
      setError("Сервер недоступен");
    }
  };

  return (
    <div className="register-page">
      <ResponsiveAppBar />

      <div className="register-container">
        {/* Back button */}
        <div className="back-container" onClick={handleBack}>
          <img src={Backspace} alt="back" className="back-icon" />
          <span className="back-text">Назад</span>
        </div>

        {/* Header */}
        <div className="register-text">
          <h1>Вход</h1>
          <h2>Добро пожаловать!</h2>
        </div>

        {/* Form */}
        <form className="register-fields-container" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Error Alert */}
          {error && (
            <Stack sx={{ width: "100%", marginBottom: 1 }}>
              <Alert severity="error">{error}</Alert>
            </Stack>
          )}

          <span className="forgot-password-text">
            <Link to="/passwordreset">Забыли пароль?</Link>
          </span>

          <BlackButton width="100%" height={45} fontSize={16} type="submit">
            Войти
          </BlackButton>
        </form>

        <span className="register-question-text">
          Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
        </span>
      </div>

      <FooterBlock />
    </div>
  );
}

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ResponsiveAppBar from "../components/Layout/ResponsiveAppBar";
import FooterBlock from "../components/Layout/FooterBlock";
import BlackButton from "../components/UI/BlackButton";
import Backspace from "../assets/keyboard-backspace.svg";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [over14, setOver14] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBack = () => navigate(-1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    if (!acceptedTerms || !over14) {
      setError("Необходимо принять условия и подтвердить возраст");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Сохраняем токен и пользователя
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        // Редирект на PersonalData
        navigate("/personaldata");
      } else if (response.status === 409) {
        setError("Email уже используется");
      } else {
        setError("Произошла ошибка. Попробуйте снова.");
      }
    } catch (err) {
      console.error(err);
      setError("Сервер недоступен");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <ResponsiveAppBar />

      <div className="register-container">
        <div className="back-container" onClick={handleBack}>
          <img src={Backspace} alt="back" className="back-icon" />
          <span className="back-text">Назад</span>
        </div>

        <div className="register-text">
          <h1>Регистрация</h1>
          <h2>Заполните данные, чтобы создать аккаунт</h2>
        </div>

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
          <input
            type="password"
            placeholder="Повторите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && (
            <Stack sx={{ width: "100%", marginBottom: 1 }}>
              <Alert severity="error">{error}</Alert>
            </Stack>
          )}

          <label className="questions-checkbox">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              required
            />
            <div className="checkbox-text">
              Я принимаю условия <a href="/privacy">публичной оферты</a> и
              подтверждаю своё согласие с ними.
            </div>
          </label>

          <label className="questions-checkbox">
            <input
              type="checkbox"
              checked={over14}
              onChange={(e) => setOver14(e.target.checked)}
              required
            />
            <div className="checkbox-text">
              Нажимая на кнопку, подтверждаете, что вам больше 14 лет
            </div>
          </label>

          <BlackButton
            width="100%"
            height={45}
            fontSize={16}
            type="submit"
            disabled={loading}
          >
            {loading ? "Регистрация..." : "Зарегистрироваться"}
          </BlackButton>
        </form>

        <span className="login-question-text">
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </span>
      </div>

      <FooterBlock />
    </div>
  );
}

import ResponsiveAppBar from "../components/Layout/ResponsiveAppBar";
import FooterBlock from "../components/Layout/FooterBlock";
import BlackButton from "../components/UI/BlackButton";
import Backspace from "../assets/keyboard-backspace.svg";
import { Link } from "react-router-dom";

import "./PasswordReset.css";

export default function Register() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="password-reset-page">
      <ResponsiveAppBar />
      <div className="password-resetr-container">
        <div className="back-container" onClick={handleBack}>
          <img src={Backspace} alt="back" className="back-icon" />
          <span className="back-text">Назад</span>
        </div>

        <div className="password-reset-text">
          <h1>Изменить пароль</h1>
          <h2>Введите и подтвердите новый пароль</h2>
        </div>

        <div className="reset-fields-container">
          <input type="newPassword" placeholder="Новый пароль" />
          <input type="repeatPassword" placeholder="Повторите пароль" />
        </div>

        <BlackButton width="100%" height={45} fontSize={16}>
          Изменить
        </BlackButton>
      </div>

      <FooterBlock />
    </div>
  );
}

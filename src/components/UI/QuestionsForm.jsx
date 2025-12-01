import React from "react";
import BlackButton from "./BlackButton";
import "./QuestionsForm.css";

function QuestionsForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="questions-form-overlay" onClick={onClose}>
      <div className="questions-form-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="questions-form-close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>

        <h3>Обратная связь</h3>

        <form
          className="questions-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Спасибо! Мы ответим вам в ближайшее время.");
            onClose();
          }}
        >
          <input type="text" placeholder="Имя" required />
          <input type="email" placeholder="Почта" required />
          <textarea placeholder="Ваш вопрос" rows="5" required></textarea>

          <label className="questions-checkbox">
            <input type="checkbox" required />
            <span></span>
            Я принимаю условия{" "}
            <a href="/privacy" target="_blank" rel="noopener noreferrer">
              публичной оферты
            </a>{" "}
            и подтверждаю своё согласие с ними.
          </label>

          <BlackButton
            type="submit"
            width={100}
            height={52}
            fontSize={16}
            style={{ alignSelf: "center", marginTop: "10px" }}
          >
            Задать вопрос
          </BlackButton>
        </form>
      </div>
    </div>
  );
}

export default QuestionsForm;
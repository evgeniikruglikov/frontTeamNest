import "./QuestionsCard.css";
import BlackButton from "../UI/BlackButton";
import qImage from "../../assets/qImage.svg";

function QuestionsCard() {
    return (
        <div class="questions-card">
            <div className="questions-left">
                <h2 className="questions-title">
                    Остались вопросы?
                </h2>
                <p className="questions-sub">
                    Хотите стать нашим автором или задать любой другой вопрос? <br />Напишите нам!
                </p>
                <BlackButton width={150} height={40} fontSize={14} className="question-button">
                    Задать вопрос
                </BlackButton>
            </div>
            <div className="questions-right">
                <img src={qImage} alt="questions-icon" className="questions-img"/>
            </div>
        </div>
    );
}

export default QuestionsCard;

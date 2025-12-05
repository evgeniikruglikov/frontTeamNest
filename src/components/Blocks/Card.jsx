import "./Card.css";
import card1 from "../../assets/card1.svg"; 
import card2 from "../../assets/card2.svg"; 
import card3 from "../../assets/card3.svg"; 

function Card() {
  return (
    <div className="cards">
      <div className="card">
        <img src={card1} alt="Поиск команд" />
        <h1>Поиск команд</h1>
        <p>Для тех, кто ищет команду для своего проекта или хочет присоединиться к существующему.</p>
      </div>
      <div className="card">
        <img src={card2} alt="Возможности для роста" />
        <h1>Возможности для роста</h1>
        <p>Мы предоставляем наставничество, ресурсы и поддержку для развития идей.</p>
      </div>
      <div className="card">
        <img src={card3} alt="Сеть партнеров и инвесторов" />
        <h1>Сеть партнеров и инвесторов</h1>
        <p>Мы связываем с потенциальными партнерами и инвесторами для масштабирования.</p>
      </div>
    </div>
  );
}

export default Card;
import ResponsiveAppBar from "../components/Layout/ResponsiveAppBar";
// import ResponsiveAppBarLogged from "../components/Layout/ResponsiveAppBarLogged";
import BlackButton from "../components/UI/BlackButton";
import Card from "../components/Blocks/Card";
import QuestionsCard from "../components/Blocks/QuestionsCard";
import FooterBlock from "../components/Layout/FooterBlock";
import "./Main.css";

export default function Main() {
  return (
    <div className="main-page">

      {/* <ResponsiveAppBarLogged /> */}

      <ResponsiveAppBar />

      <section className="hero-section">      
        <div className="hero-chip"> 
          Вместе сильнее!
        </div>
      
        <h1 className="hero-title">
          TEAMNEST объединяем амбициозных <br /> 
          для созднания больших проектов
        </h1>

        <p className="hero-sub">
          Мы объединяем амбициозных и молодых специалистов, чтобы <br />
          запускать сильные команды и воплощать смелые идеи в жизнь.
        </p>

        <BlackButton width ={200} height={56} fontSize={18}>
          Зарегистрироваться
        </BlackButton>
      </section>

      <section className="about-section">
        <div className="about-container">
          <h2 className="about-title">
            Платформа для тех, кто хочет <br />
            создавать, а не ждать
          </h2>

          <p className="about-sub">
            Мы помогаем находить команду, запускать стартапы и делать первые <br />
            шаги к настоящим изменениям.
          </p>

          <div className="about-cards">
            <Card />
          </div>

          <p className="about-mission">
            Наша миссия - дать каждому шанс воплотить идею в жизни и получить поддержку <br />
            на каждом этапе пути. Присоединяйтесь и начинайте строить будущее вместе с нами!
          </p>
        </div>
      </section>

      <QuestionsCard />

      <FooterBlock />

    </div>
  );
}
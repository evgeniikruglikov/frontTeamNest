import ResponsiveAppBar from "../components/Layout/ResponsiveAppBar";
import PersonnelCard from "../components/Blocks/PersonnelCard";
import QuestionsCard from "../components/Blocks/QuestionsCard";
import FooterBlock from "../components/Layout/FooterBlock";
import PersonnelFilters from "../components/Layout/PersonnelFilters";
import "./Personnel.css";

const specialists = [
  {
    id: 1,
    uname: "Антон Кучеренко",
    role: "Бухгалтер",
    bio: "Антон Кучеренко бухгалтер",
    tags: ["1С", "Excel"],
  },
  {
    id: 2,
    uname: "Антон Кучеренко",
    role: "UI/UX Дизайнер",
    bio: "Антон Кучеренко дизйнер",
    tags: ["Figma"],
  },
  {
    id: 3,
    uname: "Антон Кучеренко",
    role: "Фуллстэк-разработчик",
    bio: "Антон Кучеренко фуллстэк",
    tags: ["React", "Docker"],
  },
  {
    id: 4,
    uname: "Антон Кучеренко",
    role: "Маркетолог",
    bio: "Антон Кучеренко маркетолог",
    tags: ["SMM"],
  },
  {
    id: 1,
    uname: "Антон Кучеренко",
    role: "Пример",
    bio: "Антон Кучеренко пример с очень длинным описанием, которое должно быть обрезано в карточке специалиста для того, чтобы не занимать слишком много места на странице. Посмотрим, как это будет выглядеть на практике. Надеюсь, что всё будет хорошо и текст не выйдет за пределы отведённого пространства. Если всё же выйдет, то нужно будет что-то с этим делать. Посмотрим!",
    tags: ["1", "2", "3", "4"],
  },
];

export default function Personnel() {
  return (
    <div className="personnel-page">
      <ResponsiveAppBar />

      <h1 className="personnel-title">Кадры в поиске стартапа</h1>

      <p className="personnel-sub">
        Разместите информацию о себе в каталоге — дайте стартапам
        <br /> возможность найти вас и пригласить в команду! Переспективные
        <br /> проекты уже рядом.
      </p>

      <PersonnelFilters onFilterChange={(filters) => console.log(filters)} />

      <div className="personnel-grid">
        {specialists.map((person) => (
          <PersonnelCard
            key={person.id}
            uname={person.uname}
            role={person.role}
            bio={person.bio}
            tags={person.tags}
          />
        ))}
      </div>

      <QuestionsCard />

      <FooterBlock />
    </div>
  );
}

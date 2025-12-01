import ResponsiveAppBar from "../components/Layout/ResponsiveAppBar";
import PersonnelFilterCategories from "../components/Layout/PersonnelFilterCategories";
import PersonnelFilterMajor from "../components/Layout/PersonnelFilterMajor";
import PersonnelSearch from "../components/Layout/PersonnelSearch";
import PersonnelCard from "../components/Blocks/PersonnelCard";
import QuestionsCard from "../components/Blocks/QuestionsCard";
import FooterBlock from "../components/Layout/FooterBlock";
import "./Personnel.css";

export default function Personnel() {
    return (
        <div className="personnel-page">
            <ResponsiveAppBar />

            <h1 className="personnel-title">
                Кадры в поиске стартапа
            </h1>

            <p className="personnel-sub">
                Разместите информацию о себе в каталоге - дайте стартапам 
                <br /> воозможность найти вас и пригласить в команду! Переспективные
                <br /> проекты уже рядом.
            </p>
            
            <PersonnelFilterCategories />

            <PersonnelFilterMajor />

            <PersonnelSearch/>

            <PersonnelCard />
            
            <QuestionsCard />

            <FooterBlock />
        </div>
    );
}
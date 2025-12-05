import { useState, useRef, useEffect} from "react";
import profilepic from "../../assets/personnelprofilepic.svg";
import yellowstar from "../../assets/yellowstar.svg";
import star from "../../assets/star.svg";
import dividerline from "../../assets/dividerline.svg";
import "./PersonnelCard.css";

function PersonnelCard ({
    uname = "имя фамилия",
    role = "специальность",
    bio = "информация о себе",
    tags = ["HTML", "CSS", "NodeJS"],
    avatar = profilepic
}) {

  const [isFavorite, setIsFavorite] = useState(false)
  const bioRef = useRef(null);

  useEffect(() => {
    const el = bioRef.current;
    if (!el) return;

    if (el.scrollHeight > el.clientHeight + 5) {
      el.classList.add("truncated");
    } else {
      el.classList.remove("truncated");
    }
  }, [bio]); 

    return (
        <div className="personnel-card">
          <div className="personnel-header">
              <img className="personnel-avatar" src={avatar} alt="ava" />
              <div className="personnel-info">
                  <h3 className="personnel-name">{uname}</h3>
                  <p className="personnel-role">{role}</p> 
              </div>
              <button className="fav-btn" onClick={() => setIsFavorite(!isFavorite)} aria-label={isFavorite ? "Убрать из избранного" : "Добавить в избранное"}>
                <img src={isFavorite ? yellowstar : star} />
              </button>
          </div>

          <p className="personnel-bio" ref={bioRef}>
            {bio}
          </p>

          <img src={dividerline} alt="divider" className="divider-line" />

          <div className="personnel-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
    );
}

export default PersonnelCard;
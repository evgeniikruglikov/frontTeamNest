import React from "react";
import cardImage from "../../assets/personnelprofilepic.svg";
import yellowstar from "../../assets/yellowstar.svg"
import star from "../../assets/star.svg"
import "./PersonnelCard.css";

function PersonnelCard () {
    
    return (
        <div className="personnel-card">
            <img className="card-image" src={cardImage} />
            <div className="card-info">
                <h3 className="project-name" />
            </div>
        </div>
    );
}

export default PersonnelCard;
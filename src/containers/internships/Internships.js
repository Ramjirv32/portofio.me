import React, {useContext} from "react";
import "./Internships.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {internships} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Internships() {
  const {isDark} = useContext(StyleContext);
  if (internships.display) {
    return (
      <div id="internships">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="internshipSection">
            <div>
              <h1 className="experience-heading">Internships</h1>
              <div className="experience-cards-div">
                {internships.internships.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}

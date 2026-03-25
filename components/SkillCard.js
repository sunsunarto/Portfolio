import { useContext, useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Typography, Progress, Button } from "antd";
import { LanguageContext } from "../context/LanguageContext.js";
import { translations } from "../utils/i18n.js";

const { Title } = Typography;

const SkillCard = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [skills, setSkills] = useState([]);
  const [styleType, setStyleType] = useState("circle");

  useEffect(() => {
    fetch("/data/skill.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error loading skills:", err));
  }, []);

  return (
    <div>
      <Title level={2} style={{ color: "#000080" }}>
        {t.navSkills}
      </Title>
      <p className="descriptionSkill">{t.skill1}</p>

      <Button
        onClick={() => setStyleType(styleType === "circle" ? "bar" : "circle")}
        style={{ margin: "20px 0" }}
      >
        {t.skillChangeBtn} {styleType === "circle" ? t.barType : t.circleType}
      </Button>

      <div
        className="skills"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
          justifyContent: styleType === "circle" ? "center" : "flex-start",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="skill"
            style={{
              width: styleType === "circle" ? "120px" : "100%",
              maxWidth: styleType === "circle" ? "120px" : "500px",
              border: styleType === "circle" ? "none" : "1px solid #ddd",
              borderRadius: styleType === "circle" ? "0" : "8px",
              padding: styleType === "circle" ? "0" : "15px",
              background: styleType === "circle" ? "transparent" : "#fafafa",
              display: styleType === "circle" ? "flex" : "block",
              flexDirection: "column",
              alignItems: styleType === "circle" ? "center" : "flex-start",
            }}
          >
            {styleType === "circle" ? (
              <div style={{ textAlign: "center" }}>
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  styles={buildStyles({
                    pathColor: skill.color,
                    textColor: "black",
                  })}
                />
                <p
                  className="skill-name"
                  style={{
                    margin: "10px 0 0 0",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  {skill.name}
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <img
                    src={skill.image || "/images/default-skill.png"}
                    alt={skill.name}
                    style={{ width: "40px", height: "40px" }}
                  />
                  <p
                    className="skill-name"
                    style={{
                      margin: 0,
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    {skill.name}
                  </p>
                </div>
                <Progress
                  percent={skill.percentage}
                  strokeColor={skill.color}
                  status="active"
                  style={{ width: "100%" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;

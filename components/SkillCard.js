import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  { name: "Python", progress: 10, color: "#3498db" },
  { name: "HTML", progress: 80, color: "#E34C26" },
  { name: "CSS", progress: 70, color: "#2965F1" },
  { name: "JS", progress: 60, color: "#F7DF1E" },
  { name: "C++", progress: 10, color: "#61DAFB" },
  { name: "Canva", progress: 70, color: "#00C9B7" },
  { name: "Figma", progress: 40, color: "#FF0033" },
  { name: "Luncy", progress: 70, color: "lightblue" },
  { name: "Blender", progress: 5, color: "#E34C26" },
];

const SkillCard = () => {

  return (
    <div>
      <h1>Skills</h1>
      <p className="descriptionSkill">
        I'm a passionate software engineer with a strong interest in web development. I have experience with
        a variety of programming languages and frameworks, and I'm always looking to learn more.
      </p>

      <div className="skills" style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "40px" }}>
        {skills.map((skill, index) => (
          <div key={index} className="skill" style={{ width: "120px", textAlign: "center" }}>
            <CircularProgressbar
              value={skill.progress}
              text={`${skill.progress}%`}
              styles={buildStyles({
                pathColor: skill.color,
                textColor: "black",
              })}
            />
            <p className="skill-name" style={{ marginTop: "10px", color: "black", fontWeight: "bold", textAlign: "center" }}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;

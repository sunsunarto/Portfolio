"use client";
import { useContext } from 'react';
import { Typography } from 'antd';
import { LanguageContext } from "../context/LanguageContext.js";
import { translations } from "../utils/i18n.js";

const { Title, Paragraph } = Typography;


const AboutMe = () => {
    const { language } = useContext(LanguageContext);
    const t = translations[language];
  return (
    <div className="about-me" >
      <Typography>
        <h2 style={{ color: '#000080' }} >{t.navAbout}</h2>
        <Paragraph>{t.about1}</Paragraph>
        <Paragraph>{t.about2}</Paragraph>
        <Paragraph>{t.about3}</Paragraph>
      </Typography>
    </div>
  );
};

export default AboutMe;

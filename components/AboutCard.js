"use client";
import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const AboutMe = () => {
  return (
    <div className="about-me" >
      <Typography>
        <h2>About me</h2>
        <Paragraph>
          Coding is a journey filled with calm cruising and intense moments of turbulence.
          The most critical phases—starting a new project and deploying it with precision—
          are the moments I live for. My name is <strong>Sunaryo</strong>, and I bring
          discipline, focus, and responsibility into every line of code I write.
        </Paragraph>
        <Paragraph>
          I&apos;m a <strong>front-end Web developer</strong> with a passion for crafting modular,
          intuitive, and emotionally resonant digital experiences. My toolkit includes
          <strong> Next.js, React, Vite</strong>, and libraries like <strong>Ant Design</strong>,
          <strong> GSAP</strong>, and others that help me build interfaces that are not only
          functional but also elegant and responsive.
        </Paragraph>
        <Paragraph>
          I believe that every website should feel seamless—users deserve clarity, comfort,
          and confidence in their interactions.
        </Paragraph>
        <Paragraph>
          I&apos;m from <strong>SMK Tri Ratna</strong>, majoring in <em>Rekayasa Perangkat Lunak</em>
          (Software Engineering), where I built a strong foundation in website development,
          user experience, and performance optimization. But beyond the technical skills,
          I&apos;ve developed a mindset that treats every project as a mission—one that demands
          clarity, care, and a commitment to excellence.
        </Paragraph>
      </Typography>
    </div>
  );
};

export default AboutMe;

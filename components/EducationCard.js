import React from "react";
import { Typography, Card, Row, Col } from "antd";

const { Title, Text } = Typography;

const educationData = [
  {
    name: "Tzu Chi School",
    years: "2015-2019",
    level: "Primary School",
    logo: "R.jpg",
  },
  {
    name: "Mutiara Bangsa 3 School ",
    years: "2019-2021",
    level: "Primary School",
    logo: "/Screenshot 2025-03-26 122523.png", 
  },
  {
    name: "Mutiara Bangsa 3 School ",
    years: "2021-2024",
    level: "Junior High School",
    logo: "/Screenshot 2025-03-26 122523.png",
  },
  {
    name: "SMK Tri Ratna",
    years: "2024-Present",
    level: "Senior High School - Software Engineering",
    logo: "logo_tri_ratna-removebg-preview.png",
  }
];

const Education = () => {
  return (
    <div>
      <Title level={2}>Education</Title>
      <Row gutter={[16, 16]}>
        {educationData.map((school, index) => (
          <Col xs={24} sm={12} key={index}>
            <Card bordered style={{ textAlign: "center" }}>
              <img
                src={school.logo}
                alt={`${school.name} logo`}
                style={{ height: 60, marginBottom: 12 }}
              />
              <Title level={4}>{school.name}</Title>
              <Text type="secondary">{school.years}</Text>
              <br />
              <Text>{school.level}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Education;

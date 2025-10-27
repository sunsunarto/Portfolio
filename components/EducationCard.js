import React from "react";
import { Typography, Card, Row, Col } from "antd";
import Image from "next/image";

const { Title, Text } = Typography;

const educationData = [
    {
        name: "Tzu Chi School",
        years: "2015–2019",
        level: "Primary School",
        logo: "/R.jpg",
        width: 90,
        height: 60,
    },
    {
        name: "Mutiara Bangsa 3 School",
        years: "2019 2021",
        level: "Primary School",
        logo: "/Screenshot 2025-03-26 122523.png",
        width: 70,
        height: 60,
    },
    {
        name: "Mutiara Bangsa 3 School",
        years: "2021-2024",
        level: "Junior High School",
        logo: "/Screenshot 2025-03-26 122523.png",
        width: 70,
        height: 60,
    },
    {
        name: "SMK Tri Ratna",
        years: "2024-Present",
        level: "Senior High School - Software Engineering",
        logo: "/logo_tri_ratna-removebg-preview.png",
        width: 60,
        height: 60,
    },
];

const Education = () => {
    return (
        <div>
            <Title level={2} style={{ color: '#000080' }} >Education</Title>
            <Row gutter={[16, 16]}>
                {educationData.map((school, index) => (
                    <Col xs={24} sm={12} key={index}>
                        <Card bordered style={{ textAlign: "center", minHeight: 250 }}>
                            <div style={{ marginBottom: 16 }}>
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                                    <Image
                                        src={school.logo}
                                        alt={`${school.name} logo`}
                                        width={school.width}
                                        height={school.height}
                                    />
                                </div>

                            </div>
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

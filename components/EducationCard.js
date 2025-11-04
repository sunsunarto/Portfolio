import { useContext } from "react";
import { Typography, Card, Row, Col } from "antd";
import Image from "next/image";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../utils/i18n.js";

const { Title, Text } = Typography;
const Education = () => {
    const { language } = useContext(LanguageContext);
    const t = translations[language];
    const educationData = [

        {
            name: "Tzu Chi School",
            years: "2015-2019",
            level: t.edu1 ,
            logo: "/R.jpg",
            width: 90,
            height: 60,
        },
        {
            name: "Mutiara Bangsa 3 School",
            years: "2019-2021",
            level: t.edu2,
            logo: "/Screenshot 2025-03-26 122523.png",
            width: 70,
            height: 60,
        },
        {
            name: "Mutiara Bangsa 3 School",
            years: "2021-2024",
            level: t.edu3,
            logo: "/Screenshot 2025-03-26 122523.png",
            width: 70,
            height: 60,
        },
        {
            name: "SMK Tri Ratna",
            years: "2024- "+ t.time,
            level: t.edu4,
            logo: "/logo_tri_ratna-removebg-preview.png",
            width: 60,
            height: 60,
        },
    ];


    return (
        <div>
            <Title level={2} style={{ color: '#000080' }} >{t.navEducation}</Title>
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

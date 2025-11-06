import { useEffect, useState, useContext } from 'react';
import { Typography, Row, Col, Card, Button, Divider } from 'antd';
import Link from 'next/link';
import { LanguageContext } from "../context/LanguageContext.js";
import { translations } from "../utils/i18n.js";

const { Title, Text } = Typography;

export default function AchievementCard() {
  const [stats, setStats] = useState({
    total: 0,
    webinar: 0,
    competition: 0,
    Bootcamp: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/data/event.json');
        const events = await res.json();
        const total = events.length;
        const webinar = events.filter((e) => e.status === 'Webinar').length;
        const competition = events.filter((e) => e.status === 'competition').length;
        const Bootcamp = events.filter((e) => e.status === 'bootcamp').length;
        setStats({ total, webinar, competition, Bootcamp });
      } catch (error) {
        console.error('Failed to load events:', error);
      }
    };

    fetchStats();
  }, []);

  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <div>
      <Title level={2} style={{ color: '#000080' }} >{t.navAchievement}</Title>
      <Text type="secondary">{t.aboutAchievement}</Text>
      <Divider />
      <Row gutter={[16, 16]}>
        <Col xs={64} sm={8}>
          <Card title={t.total} bordered>
            <Title level={3}>{stats.total}</Title>
            <Link href="/achievement/AchievementTable"><Button type="link">{t.viewMore}</Button></Link>
          </Card>
        </Col>
      </Row>
      <Divider />
    </div>
  );
}
import { useEffect, useState } from 'react';
import { Typography, Row, Col, Card, Button, Divider } from 'antd';
import LayoutApp from '../../../components/LayoutApp.js';
import Link from 'next/link';
const { Title, Text } = Typography;

export default function AchievementCardTable() {
  const [stats, setStats] = useState({
    webinar: 0,
    competition: 0,
    Bootcamp: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/data/event.json');
        const events = await res.json();
        const webinar = events.filter((e) => e.status === 'Webinar').length;
        const competition = events.filter((e) => e.status === 'competition').length;
        const Bootcamp = events.filter((e) => e.status === 'bootcamp').length;
        setStats({ webinar, competition, Bootcamp });
      } catch (error) {
        console.error('Failed to load events:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <LayoutApp>
        <Divider />
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card title="Webinar" bordered>
            <Title level={3}>{stats.webinar}</Title>
            <Link href="/achievement/AchievementTable/Table-Webinar">
              <Button type="link">View Webinar</Button>
            </Link>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card title="Competition" bordered>
            <Title level={3}>{stats.competition}</Title>
            <Link href="/achievement/AchievementTable/Table-Competition">
              <Button type="link">View Competition</Button>
            </Link>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card title="bootcamp" bordered>
            <Title level={3}>{stats.Bootcamp}</Title>
          </Card>
        </Col>
      </Row>

      <Divider />
    </LayoutApp>
  );
}
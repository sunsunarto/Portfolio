import { useEffect, useState } from 'react';
import { Typography, Row, Col, Card, Button, Divider } from 'antd';
import Link from 'next/link';
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

  return (
    <div>
      <Title level={2}>Achievements</Title>
      <Text type="secondary">Here's a quick summary of your events.</Text>
      <Divider />
      <Row gutter={[16, 16]}>
        <Col xs={64} sm={8}>
          <Card title="Total Events" bordered>
            <Title level={3}>{stats.total}</Title>
            <Link href="/achievement/AchievementTable"><Button type="link">View Details</Button></Link>
          </Card>
        </Col>
      </Row>
      <Divider />
    </div>
  );
}
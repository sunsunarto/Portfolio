import { useEffect, useState } from 'react';
import { Typography, Row, Col, Card, Button, Divider } from 'antd';
import LayoutApp from '../components/LayoutApp';
import Link from 'next/link';

const { Title, Text } = Typography;

export default function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    upcoming: 0,
    completed: 0,
  });

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem('events') || '[]');
    const total = events.length;
    const upcoming = events.filter((e) => e.status === 'Upcoming').length;
    const completed = events.filter((e) => e.status === 'Completed').length;
    setStats({ total, upcoming, completed });
  }, []);

  return (
    <LayoutApp>
      <Title level={2}>Welcome to the Event Dashboard</Title>
      <Text type="secondary">Here's a quick summary of your events.</Text>
      <Divider />

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card title="Total Events" bordered>
            <Title level={3}>{stats.total}</Title>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card title="Upcoming Events" bordered>
            <Title level={3}>{stats.upcoming}</Title>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card title="Completed Events" bordered>
            <Title level={3}>{stats.completed}</Title>
          </Card>
        </Col>
      </Row>

      <Divider />

      <div style={{ marginTop: 16 }}>
        <Link href="/create-event">
          <Button type="primary">Create Event</Button>
        </Link>
        <Link href="/events">
          <Button style={{ marginLeft: 8 }}>View Events</Button>
        </Link>
      </div>
    </LayoutApp>
  );
}

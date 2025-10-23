import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Typography, Divider, Card, Row, Col } from 'antd';
import LayoutApp from '../components/LayoutApp';
import EventForm from '../components/EventForm';
import EventCard from '../components/EventCard';

const { Title } = Typography;

export default function CreateEvent() {
  const router = useRouter();
  const [preview, setPreview] = useState({});
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

  const handleSubmit = (values) => {
    const newEvent = {
      ...values,
      date: values.date.format('YYYY-MM-DD'),
      id: Date.now().toString(),
    };

    const existing = JSON.parse(localStorage.getItem('events') || '[]');
    localStorage.setItem('events', JSON.stringify([...existing, newEvent]));

    router.push('/events');
  };

  return (
    <LayoutApp>
      <Title>Create New Event</Title>
      <Divider />

      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={8}>
          <Card title="Total Events">
            <Title level={4}>{stats.total}</Title>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card title="Upcoming Events">
            <Title level={4}>{stats.upcoming}</Title>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card title="Completed Events">
            <Title level={4}>{stats.completed}</Title>
          </Card>
        </Col>
      </Row>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        <div style={{ flex: 1, minWidth: 300 }}>
          <EventForm
            onSubmit={handleSubmit}
            initialValues={{}}
            onValuesChange={(_, allValues) => setPreview(allValues)}
          />
        </div>

        <div style={{ flex: 1, minWidth: 300 }}>
          <EventCard event={preview} />
        </div>
      </div>
    </LayoutApp>
  );
}

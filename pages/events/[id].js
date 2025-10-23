import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LayoutApp from '../../components/LayoutApp';
import { Typography, Divider, Button, message } from 'antd';
import EventCard from '../../components/EventCard';

const { Title } = Typography;

export default function ViewEvent() {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem('events') || '[]');
    const found = events.find((e) => e.id === id);
    setEvent(found);
  }, [id]);

  const handleDelete = () => {
    const events = JSON.parse(localStorage.getItem('events') || '[]');
    const updated = events.filter((e) => e.id !== id);
    localStorage.setItem('events', JSON.stringify(updated));
    message.success('Event deleted');
    router.push('/events');
  };

  if (!event) {
    return (
      <LayoutApp>
        <Title>Event Not Found</Title>
      </LayoutApp>
    );
  }

  return (
    <LayoutApp>
      <Title>Event Details</Title>
      <Divider />
      <EventCard event={event} />
      <div style={{ marginTop: 16 }}>
        <Button type="primary" onClick={() => router.push(`/events/${id}/edit`)}>
          Edit
        </Button>
        <Button danger style={{ marginLeft: 8 }} onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </LayoutApp>
  );
}

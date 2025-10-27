import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Typography, Row, Col, Card, Button, Divider, Image } from 'antd';
import LayoutApp from '../../../../components/LayoutApp.js';
import AchievementDetailOtherCard from '../../../../components/AchievementDetailOtherCard.js';


const { Title, Text } = Typography;

export default function ViewEvent() {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch('/data/event.json');
        const data = await res.json();
        const found = data.find((e) => e.id === id);
        setEvent(found);
      } catch (error) {
        console.error('Error loading event:', error);
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  if (!event) {
    return (
      <LayoutApp>
        <Title>Event Not Found</Title>
      </LayoutApp>
    );
  }

  return (
    <LayoutApp>
      <div style={{ padding: '24px' }}>
        <Title level={2} style={{ color: '#000080' }}>Achievement Details</Title>
        <Divider />

        <AchievementDetailOtherCard event={event} />
      </div>
    </LayoutApp>
  );
}
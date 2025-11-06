import { useRouter } from 'next/router';
import { useEffect, useState, useContext } from 'react';
import { Typography, Row, Col, Card, Button, Divider, Image } from 'antd';
import LayoutApp from '../../../../components/LayoutApp.js';
import AchievementDetailWebinarCard from '../../../../components/AchievementDetailWebinarCard.js';
import { LanguageContext } from "../../../../context/LanguageContext.js";
import { translations } from "../../../../utils/i18n.js";


const { Title, Text } = Typography;

export default function ViewEvent() {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState(null);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

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
        <Title>{t.f404}</Title>
      </LayoutApp>
    );
  }

  return (
    <LayoutApp>
      <div style={{ padding: '24px' }}>
        <Title level={2} style={{ color: '#000080' }}>{t.detailWebinar}</Title>
        <Divider />
        <AchievementDetailWebinarCard event={event} />
        <Divider />
        <Button type="primary" style ={{ backgroundColor: '#000080' }} href="/achievement/AchievementTable/Table-Webinar">{t.backWebinar}</Button>
      </div>
    </LayoutApp>
  );
}
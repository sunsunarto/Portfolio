import React,{ useContext } from 'react';
import { Card, Typography, Image, Tag } from 'antd';
import { LanguageContext } from "../context/LanguageContext.js";
import { translations } from "../utils/i18n.js";

const { Title, Text, Paragraph } = Typography;

const EventInfo = ({ date, events, lang = 'en' }) => {
  const formattedDate = date.format('YYYY-MM-DD');
  const matchedEvents = events.filter(e => e.date?.iso === formattedDate);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  // Default width (safe for SSR)
  const [width, setWidth] = React.useState(350);

  React.useEffect(() => {
    // Runs only in browser
    const handleResize = () => {
      setWidth(window.innerWidth <= 768 ? 450 : 350);
    };

    // Set initial width
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (matchedEvents.length === 0) {
    return (
      <Card style={{ marginLeft: 16, width }}>
        <Title level={4}>{t.event}</Title>
        <Text>{t.empty + ' ' + formattedDate  } </Text>
      </Card>
    );
  }

  return (
    <div style={{ marginLeft: 16, width }}>
      {matchedEvents.map(event => (
        <Card key={event.id} bordered style={{ marginBottom: 16 }}>
          <Title level={4}>{event.title?.[language] || event.title?.en || 'Untitled'}</Title>
          <Text type="secondary">{event.date?.[language] || event.date?.en || ''}</Text>

          {event.status && (
            <div style={{ marginTop: 6 }}>
              <Tag color="blue">{event.status}</Tag>
            </div>
          )}

          {event.decription?.[lang] && (
            <Paragraph style={{ marginTop: 8 }}>
              {event.decription[lang]}
            </Paragraph>
          )}

          {event.from && <Text strong>{ t.from + " : " + event.from}</Text>}

          {event.pic && (
            <div style={{ marginTop: 12 }}>
              <Image
                src={event.pic}
                alt={event.title?.[lang] || ''}
                width="100%"
                style={{ borderRadius: 8 }}
              />
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default EventInfo;

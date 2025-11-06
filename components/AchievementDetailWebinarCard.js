import { Typography, Row, Col, Card, Image } from 'antd';
import { useContext } from 'react';
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../utils/i18n.js";

const { Title, Text } = Typography;

export default function AchievementDetailWebinarCard({ event }) {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  if (!event) return null;

  return (
    <div style={{ padding: '24px' }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Card title={t.title} bordered>
            <Text>{event.title?.[language] || event.title?.en || 'Untitled'}</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card title={t.date} bordered>
            <Text>{event.date?.[language] || event.date?.en || '-'}</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card title={t.status} bordered>
            <Text>{event.status}</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card title={t.organizer} bordered>
            <Text>{event.from}</Text>
          </Card>
        </Col>
        {event.decription && (
          <Col span={24}>
            <Card title={t.description} bordered>
              <Text>{event.decription?.[language] || event.decription?.en || '-'}</Text>
            </Card>
          </Col>
        )}
        {event.pic && (
          <Col span={24}>
            <Card title={t.certificate} bordered>
              <Image
                src={event.pic}
                alt="Certificate"
                width={300}
                style={{ borderRadius: 8 }}
              />
            </Card>
          </Col>
        )}
      </Row>
    </div>
  );
}
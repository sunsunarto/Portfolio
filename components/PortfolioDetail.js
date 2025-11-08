import { Typography, Row, Col, Card, Image, Button } from 'antd';
import { useContext } from 'react';
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../utils/i18n.js";

const { Title, Text } = Typography;

export default function PortfolioDetail({ event }) {
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
              <Text>{event.date?.[language] || event.date?.en || "-"}</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card title={t.update} bordered>
            <Text>{event.lastestUpdate?.[language] || event.lastestUpdate?.en || '-'}</Text>
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
            <Card title={t.tabProject} bordered>
              <Image
                src={event.pic}
                alt="Project Image"
                width={300}
                style={{ borderRadius: 8 }}
              />
            </Card>
          </Col>
        )}
      </Row>
      <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
        <Button type="primary" style ={{ backgroundColor: '#000080' }} href={event.link} target="_blank"> Link Website </Button>
        <Button type="primary" style ={{ backgroundColor: '#000080' }} href={event.github} target="_blank"> Link Github </Button>
      </div>
    </div>
  );
}
  
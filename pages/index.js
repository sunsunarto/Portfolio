import { useContext } from 'react';
import { Typography, Row, Col, Card, Button, Divider } from 'antd';
import LayoutApp from '../components/LayoutApp.js';
import Link from 'next/link';
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../utils/i18n.js";

const { Title, Text } = Typography;

export default function Dashboard() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <LayoutApp>
      <div style={{ background: '#e6f7ff', padding: '40px 24px' }}>
        <Title level={2} style={{ color: '#000080' }}>{t.titleHome}</Title>
        <Text style={{ fontSize: 16 }}>
          {t.greeting}<strong>{t.name}</strong>{t.greeting1}
        </Text>

        <Divider style={{ margin: '32px auto', maxWidth: 400 }} />

        <Row gutter={32} justify="center">
          <Col xs={24} sm={12}>
            <Title level={2} style={{ color: '#000080' }}>{t.rightNow}</Title>
            <Text>{t.class}</Text>
          </Col>
          <Col xs={24} sm={12}>
            <Title level={2} style={{ color: '#000080' }}>{t.location1}</Title>
            <Text>(Indonesia), DKI Jakarta</Text>
          </Col>
        </Row>

        <Divider style={{ margin: '32px auto', maxWidth: 400 }} />

        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="/Sunaryo_Soengkono_CV_13.pdf" target="_blank" rel="noopener noreferrer">
            <Button  size="large" style={{background: '#000080', color: '#fff'}}>{t.viewCV}</Button>
          </a>
          <Link href="/about">
            <Button size="large">{t.navAbout}</Button>
          </Link>
        </div>
      </div>
    </LayoutApp>
  );
}

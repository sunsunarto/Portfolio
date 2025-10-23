import React from 'react';
import { Typography, Row, Col, Card, Button, Divider } from 'antd';
import LayoutApp from '../components/LayoutApp.js';
import Link from 'next/link';

const { Title, Text } = Typography;

export default function Dashboard() {

  return (
    <LayoutApp>
      <div style={{ background: '#e6f7ff', padding: '40px 24px'}}>
        <Title level={2} style={{ color: '#000080' }}>
          Website Developer & UX/UI Design
        </Title>
        <Text style={{ fontSize: 16 }}>
          Hi, I&apos;m <strong>Sunaryo Soengkono</strong>. I&apos;m a Web Developer specialist in Front-end and UX/UI Design.
        </Text>

        <Divider style={{ margin: '32px auto', maxWidth: 400 }} />

        <Row gutter={32} justify="center">
          <Col xs={24} sm={12}>
            <Title level={2} style={{color: '#000080'}}>Right now</Title>
            <Text>Grade 11 Web Developer in SMK Tri Ratna</Text>
          </Col>
          <Col xs={24} sm={12}>
            <Title level={2}style={{color: '#000080'}}>Location</Title>
            <Text>(Indonesia), DKI Jakarta</Text>
          </Col>
        </Row>

        <Divider style={{ margin: '32px auto', maxWidth: 400 }} />

        <div style={{ display: 'flex', gap: '16px' }}>
          <Link href="/cv">
            <Button type="primary" size="large">View CV</Button>
          </Link>
          <Link href="/about">
            <Button size="large">About Me</Button>
          </Link>
        </div>
      </div>
    </LayoutApp>
  );
}

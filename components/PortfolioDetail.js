import { Typography, Row, Col, Card, Image, Button } from 'antd';

const { Title, Text } = Typography;

export default function PortfolioDetail({ event }) {
  if (!event) return null;

  return (
    <div style={{ padding: '24px' }}>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Card title="Title" bordered>
            <Text>{event.title}</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card title="Date" bordered>
            <Text>{event.date}</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card title="last Update" bordered>
            <Text>{event.lastestUpdate}</Text>
          </Card>
        </Col>
        {event.decription && (
          <Col span={24}>
            <Card title="Description" bordered>
              <Text>{event.decription}</Text>
            </Card>
          </Col>
        )}
        {event.pic && (
          <Col span={24}>
            <Card title="Projet Image" bordered>
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
        <Button type="primary" href={event.link} target="_blank"> Link Website </Button>
        <Button type="primary" href={event.github} target="_blank"> Link Github </Button>
      </div>
    </div>
  );
}
  
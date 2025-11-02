import { Typography, Row, Col, Card, Image, Button } from 'antd';

const { Title, Text } = Typography;

export default function AchievementDetailBootcampCard({ event }) {
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
          <Card title="Status" bordered>
            <Text>{event.status}</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card title="Organizer" bordered>
            <Text>{event.from}</Text>
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
            <Card title="Certificate" bordered>
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
  
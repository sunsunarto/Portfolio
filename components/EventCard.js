import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

export default function EventCard({ event }) {
  if (!event) return null;

  return (
    <Card title={event.name || 'Event Preview'} bordered>
      <Paragraph>
        <strong>Category:</strong> {event.category || '—'}
      </Paragraph>
      <Paragraph>
        <strong>Date:</strong> {event.date || '—'}
      </Paragraph>
      <Paragraph>
        <strong>Status:</strong> {event.status || '—'}
      </Paragraph>
      <Paragraph>
        <strong>Description:</strong> {event.description || '—'}
      </Paragraph>
    </Card>
  );
}

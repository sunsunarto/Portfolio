import LayoutApp from '../../components/LayoutApp';
import { Typography, Divider } from 'antd';
import EventTable from '../../components/EventTable';

export default function EventList() {
  return (
    <LayoutApp>
      <Typography.Title>Event List</Typography.Title>
      <Divider />
      <EventTable />
    </LayoutApp>
  );
}

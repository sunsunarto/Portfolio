import LayoutApp from '../../components/LayoutApp.js';
import { Typography, Divider } from 'antd';
import EventTable from '../../components/EventTable.js';

export default function EventList() {
  return (
    <LayoutApp>
      <Typography.Title>Event List</Typography.Title>
      <Divider />
      <EventTable />
    </LayoutApp>
  );
}

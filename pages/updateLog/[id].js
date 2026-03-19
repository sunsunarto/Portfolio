import LayoutApp from '../../components/LayoutApp.js';
import { Typography, Divider } from 'antd';
import SingleUpdateLog from '../../components/SingleUpdateLog.js';

export default function EventList() {
  return (
    <LayoutApp>
      <Divider />
      <SingleUpdateLog />
    </LayoutApp>
  );
}

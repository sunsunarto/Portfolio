import LayoutApp from '../components/LayoutApp.js';
import { Divider } from 'antd';
import AchievementCard from '../components/AchievementCard.js';

export default function EventList() {
  return (
    <LayoutApp>
      <Divider />
      <AchievementCard />
    </LayoutApp>
  );
}

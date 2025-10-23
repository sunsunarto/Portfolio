import LayoutApp from '../components/LayoutApp.js';
import { Divider } from 'antd';
import SkillCard from '../components/SkillCard.js';

export default function EventList() {
  return (
    <LayoutApp>
      <Divider />
      <SkillCard />
    </LayoutApp>
  );
}

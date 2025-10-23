import LayoutApp from '../components/LayoutApp.js';
import { Typography, Divider } from 'antd';
import AboutMe from '../components/AboutCard.js';

export default function EventList() {
  return (
    <LayoutApp>
      <Divider />
      <AboutMe />
    </LayoutApp>
  );
}

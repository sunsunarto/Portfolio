import LayoutApp from '../components/LayoutApp';
import { Typography, Divider } from 'antd';
import AboutMe from '../components/AboutCard';

export default function EventList() {
  return (
    <LayoutApp>
      <Divider />
      <AboutMe />
    </LayoutApp>
  );
}

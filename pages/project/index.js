import LayoutApp from '../../components/LayoutApp.js';
import { Typography, Divider } from 'antd';
import ProjectCard from '../../components/ProjectCard.js';

export default function EventList() {
  return (
    <LayoutApp>
      <Divider />
      <ProjectCard />
    </LayoutApp>
  );
}

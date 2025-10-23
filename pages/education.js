import LayoutApp from '../components/LayoutApp.js';
import { Divider } from 'antd';
import Education from '../components/EducationCard.js';

export default function EventList() {
  return (
    <LayoutApp>
      <Divider />
      <Education />
    </LayoutApp>
  );
}

import LayoutApp from '../components/LayoutApp';
import { Divider } from 'antd';
import Education from '../components/EducationCard';

export default function EventList() {
  return (
    <LayoutApp>
      <Divider />
      <Education />
    </LayoutApp>
  );
}

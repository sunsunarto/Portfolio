import LayoutApp from '../../../../components/LayoutApp.js';
import { Divider } from 'antd';
import TableCompetitionCard from '../../../../components/TableCompetitionCard.js';

export default function EventList() {
  return (
    <LayoutApp>
      <Divider />
      <TableCompetitionCard />
    </LayoutApp>
  );
}

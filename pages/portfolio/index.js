import LayoutApp from '../../components/LayoutApp.js';
import { Typography, Divider } from 'antd';
import PortfolioCard from '../../components/PortfolioCard.js';

export default function EventList() {
  return (
    <LayoutApp>
      <Divider />
      <PortfolioCard />
    </LayoutApp>
  );
}

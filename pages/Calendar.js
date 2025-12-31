import { useContext } from 'react';
import CalenderCard from '../components/CalenderCard.js';
import LayoutApp from '../components/LayoutApp.js';
import { Divider, Typography } from 'antd';
import { LanguageContext } from "../context/LanguageContext.js";
import { translations } from "../utils/i18n.js";

const { Title } = Typography;

export default function CalendarPage() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <LayoutApp>
      <Divider />
      <Title level={2} style={{ color: '#000080' }}>{t.navCalendar}</Title>
      <CalenderCard />
    </LayoutApp>
  );
}
import { useRouter } from 'next/router';
import { useEffect, useState, useContext } from 'react';
import { Typography, Row, Col, Card, Button, Divider, Image } from 'antd';
import LayoutApp from '../../components/LayoutApp.js';
import PortfolioDetail from '../../components/PortfolioDetail.js';
import Link from 'next/link.js';
import { LanguageContext } from "../../context/LanguageContext.js";
import { translations } from "../../utils/i18n.js";


const { Title, Text } = Typography;

export default function ViewProject() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch('/data/portfolio.json');
        const data = await res.json();
        const found = data.find((e) => e.id === id);
        setProject(found);
      } catch (error) {
        console.error('Error loading event:', error);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (!project) {
    return (
      <LayoutApp>
        <Title>{t.f404}</Title>
      </LayoutApp>
    );
  }

  return (
    <LayoutApp>
      <div style={{ padding: '24px' }}>
        <Title level={2} style={{ color: '#000080' }}>{t.titleProject}</Title>
        <Divider />

        <PortfolioDetail event={project} />
        <Link href="/portfolio">
          <Button type="primary" style={{ marginTop: '16px' }}> Back to Portfolio Table </Button>
        </Link>
      </div>

    </LayoutApp>
  );
}
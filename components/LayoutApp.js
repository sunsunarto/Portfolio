import { Layout, Menu, Avatar, Typography, Grid, Drawer, Button, Space, Divider } from 'antd';
import { DashboardOutlined, CalendarOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../utils/i18n.js";
import Breadcrumbnav from '../components/Breadcrumb.js';
import Languages from './Languages.js';

const { Content, Sider } = Layout;
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

export default function LayoutApp({ children }) {
  const router = useRouter();
  const path = router.pathname;
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const ProfileHeader = () => (
    <div style={{ textAlign: 'center', padding: '32px 16px' }}>
      <Avatar
        size={100}
        style={{ marginBottom: 16, border: '4px solid #3949AB' }}
        src="/WhatsApp Image 2025-09-23 at 15.59.59_5da190e1.jpg"
      />
      <Title level={4} style={{ marginBottom: 0 }}>{t.name}</Title>
      <Text type="secondary" style={{ fontSize: 14 }}>
        <span style={{ fontWeight: 'bold', color: '#3949AB' }}>{t.role} </span>
        <span style={{ fontWeight: 'bold', color: '#000' }}>{t.location}</span>
      </Text>
      <Divider></Divider>
      <Languages/>
    </div>
  );

  const menuItems = (
    <Menu
      mode="vertical"
      selectedKeys={[path]}
      style={{ background: 'white', borderRight: 'none' }}
      onClick={() => setDrawerVisible(false)}
    >
      <Menu.Item key="/" icon={<DashboardOutlined />}>
        <Link href="/">{t.navHome}</Link>
      </Menu.Item>
      <Menu.Item key="/about" icon={<UserOutlined />}>
        <Link href="/about">{t.navAbout}</Link>
      </Menu.Item>
      <Menu.Item key="/skill" icon={<UserOutlined />}>
        <Link href="/skill">{t.navSkills}</Link>
      </Menu.Item>
      <Menu.Item key="/education" icon={<UserOutlined />}>
        <Link href="/education">{t.navEducation}</Link>
      </Menu.Item>
      <Menu.Item key="/achievement" icon={<UserOutlined />}>
        <Link href="/achievement">{t.navAchievement}</Link>
      </Menu.Item>
      <Menu.Item key="/portfolio" icon={<CalendarOutlined />}>
        <Link href="/portfolio">{t.navPortfolio}</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Layout style={{ minHeight: '100vh', flexDirection: 'row' }}>
        {!isMobile && (
          <Sider width={280} style={{ background: 'white', boxShadow: '2px 0 8px rgba(0,0,0,0.1)' }}>
            <ProfileHeader />
            <div>{menuItems}</div>
          </Sider>
        )}

        {isMobile && (
          <>
            <Button
              icon={<MenuOutlined />}
              type="text"
              style={{
                position: 'fixed',
                top: 16,
                left: 16,
                zIndex: 1100,
                background: '#fff',
                borderRadius: 4,
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              }}
              onClick={() => setDrawerVisible(true)}
            />
            <Drawer
              placement="left"
              onClose={() => setDrawerVisible(false)}
              visible={drawerVisible}
              bodyStyle={{ padding: 0 }}
            >
              <ProfileHeader />
              {menuItems}
            </Drawer>
          </>
        )}

        <Content
          style={{
            background: '#e6f7ff',
            padding: isMobile ? '24px 16px' : '40px',
            flex: 1,
            position: 'relative',
          }}
        >
          {isMobile && <div style={{ height: 56 }} />}
          <Breadcrumbnav />
          {children}
        </Content>
      </Layout>
    </div>
  );
}

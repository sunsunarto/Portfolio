import { Layout, Menu, Avatar, Typography, Grid, Drawer, Button, Space, Divider } from 'antd';
import { DashboardOutlined, CalendarOutlined, MenuOutlined, UserOutlined, ContactsOutlined, TrophyOutlined, BookOutlined, SafetyCertificateOutlined, ToolOutlined, ProjectOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React,{ useState, useContext } from 'react';
import { LanguageContext } from "../context/LanguageContext.js";
import { translations } from "../utils/i18n.js";
import Breadcrumbnav from '../components/Breadcrumb.js';
import Languages from './Languages.js';
import UpdateLog from "../components/UpdateLog.js";
import { ThemeContext } from "../context/ThemeContext";

const { Content, Sider, Header } = Layout;
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

export default function LayoutApp({ children }) {
  const { tokens, setTheme, theme } = useContext(ThemeContext);
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
        style={{ marginBottom: 16, border: `4px solid ${tokens.borderPrimary}` }}
        src="/WhatsApp Image 2025-09-23 at 15.59.59_5da190e1.jpg"
      />
      <Title level={4} style={{ marginBottom: 0, color: tokens.textPrimary }}>{t.name}</Title>
      <Text type="secondary" style={{ fontSize: 14 }}>
        <span style={{ fontWeight: 'bold', color: tokens.textSecondary }}>{t.role} </span>
        <span style={{ fontWeight: 'bold', color: tokens.textPrimary }}>{t.location}</span>
      </Text>
    </div>
  );

  const TopHeader = () => (
    <Header
      style={{
        background: tokens.primary,
        color: tokens.textPrimary,
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      }}
    >
      <div className="left">
        <Languages />
      </div>
      <div className="right">
        <Button
          type="text"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          style={{ color: tokens.textPrimary }}
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </Button>
        <UpdateLog />
      </div>
    </Header>
  );

const menuItems = (
  <Menu
    mode="vertical"
    selectedKeys={[path]}
    style={{
      background: tokens.background,
      borderRight: "none",
      boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
      height: "450px",
    }}
    onClick={() => setDrawerVisible(false)}
  >
    {[
      { key: "/", icon: <DashboardOutlined />, label: t.navHome },
      { key: "/about", icon: <UserOutlined />, label: t.navAbout },
      { key: "/skill", icon: <SafetyCertificateOutlined />, label: t.navSkills },
      { key: "/education", icon: <BookOutlined />, label: t.navEducation },
      { key: "/achievement", icon: <TrophyOutlined />, label: t.navAchievement },
      { key: "/project", icon: <ProjectOutlined />, label: t.navProject },
      { key: "/Calendar", icon: <CalendarOutlined />, label: t.navCalendar },
      { key: "/3DModel", icon: <ToolOutlined />, label: t.nav3DModel },
      { key: "/getInTouch", icon: <ContactsOutlined />, label: t.navContact },
    ].map(({ key, icon, label }) => (
      <Menu.Item
        key={key}
        icon={React.cloneElement(icon, {
          style: { color: path === key ? tokens.primary : tokens.textPrimary },
        })}
      >
        <Link
          href={key}
          style={{
            color: path === key ? tokens.primary : tokens.textPrimary,
            fontWeight: path === key ? "bold" : "normal",
          }}
        >
          {label}
        </Link>
      </Menu.Item>
    ))}
  </Menu>
);

  return (
    <div>
      <Layout style={{ minHeight: '100vh', flexDirection: 'row' }}>
        {!isMobile && (
          <Sider width={280} style={{ background: tokens.background, boxShadow: '2px 0 8px rgba(0,0,0,0.1)' }}>
            <ProfileHeader />
            <div>{menuItems}</div>
          </Sider>
        )}

        {isMobile && (
          <>
            <Button icon={<MenuOutlined />} type="text" style={{ position: 'fixed', top: 16, left: 16, zIndex: 1100, background: '#fff', borderRadius: 4, boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }} onClick={() => setDrawerVisible(true)} />
            <Drawer placement="left" onClose={() => setDrawerVisible(false)} open={drawerVisible} bodyStyle={{ padding: 0 }}>
              <ProfileHeader />
              {menuItems}
            </Drawer>
          </>
        )}

        <Layout style={{ flex: 1 }}>
          <TopHeader />
          <Content style={{ background: '#e6f7ff', padding: isMobile ? '24px 16px' : '40px', flex: 1, position: 'relative' }}>
            {isMobile && <div style={{ height: 56 }} />}
            <Breadcrumbnav />
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

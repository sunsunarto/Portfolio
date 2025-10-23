import { Layout, Menu, Avatar, Typography, Grid, Drawer, Button } from 'antd';
import { DashboardOutlined, CalendarOutlined, PlusCircleOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Breadcrumbnav from '../components/Breadcrumb.js';
import Image from 'next/image';

const { Content, Sider } = Layout;
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

export default function LayoutApp({ children }) {
  const router = useRouter();
  const path = router.pathname;
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const [drawerVisible, setDrawerVisible] = useState(false);

  const menuItems = (
    <Menu
      mode="vertical"
      selectedKeys={[path]}
      style={{ width: '100%' }}
      onClick={() => setDrawerVisible(false)}
    >
      <Menu.Item key="/" icon={<DashboardOutlined />}>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="/about" icon={<UserOutlined />}>
        <Link href="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="/skill" icon={<UserOutlined />}>
        <Link href="/skill">Skills</Link>
      </Menu.Item>
      <Menu.Item key="/education" icon={<UserOutlined />}>
        <Link href="/education">Education</Link>
      </Menu.Item>
      <Menu.Item key="/achievement" icon={<UserOutlined />}>
        <Link href="/achievement">Achievement</Link>
      </Menu.Item>
      <Menu.Item key="/events" icon={<CalendarOutlined />}>
        <Link href="/events">Events</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh', flexDirection: 'row' }}>
      {!isMobile && (<Sider width={280} style={{ background: '#f0f2f5', }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
          <Avatar size={80}>
            <Image src='/WhatsApp Image 2025-09-23 at 15.59.59_5da190e1.jpg' alt="Profile avatar" width={80} height={80} />
          </Avatar>
        </div>
        <Title level={5} style={{ marginTop: 12, textAlign: 'center' }}>
          Sunaryo Soegkono
        </Title>
        <Text type="secondary" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', color: '#3949AB' }}>front-end developer |</span> 
          <span style={{ fontWeight: 'bold', color: 'black' }}>| from Indonesia</span>
        </Text>
        <div style={{ marginTop: 32, width: '100%' }}>{menuItems}</div>
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
              zIndex: 1000,
              background: '#fff',
              borderRadius: 4,
            }}
            onClick={() => setDrawerVisible(true)}
          />
          <Drawer
            title="Event Manager"
            placement="left"
            onClose={() => setDrawerVisible(false)}
            visible={drawerVisible}
            bodyStyle={{ padding: 0 }}
          >
            {menuItems}
          </Drawer>
        </>
      )}

      <Content
        style={{
          background: '#e6f7ff',
          padding: isMobile ? '24px 16px' : '40px',
          flex: 1,
        }}
      >
        <Breadcrumbnav />
        {children}
      </Content>
    </Layout>
  );
}

import { ConfigProvider } from 'antd';

export default function AppTheme({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3949AB',
          colorLink: '#3949AB',
          colorLinkHover: '#FF7043',
          borderRadius: 8,
          fontFamily: 'Inter, sans-serif',
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

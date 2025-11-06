import { useState, useContext } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { LanguageContext } from "../context/LanguageContext.js";
import { translations } from "../utils/i18n.js";

export default function Languages() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setDrawerVisible(false);
  };

  return (
    <div style={{ padding: '8px 16px' }}>
      <Button
        type="primary"
        style={{
          borderRadius: 4,
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
          backgroundColor: '#3949AB',
          color: '#fff',
        }}
        onClick={() => setDrawerVisible(true)}
      >
        {t.language}
      </Button>

      <Drawer
        title="Select Language"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        bodyStyle={{ padding: 24 }}
      >
        <Space direction="vertical">
          <Radio.Group onChange={handleLanguageChange} value={language}>
            <Space direction="vertical">
              <Radio value="en">English</Radio>
              <Radio value="id">Bahasa Indonesia (not fully done)</Radio>
              <Radio value="cn">中文 (in the next update)</Radio>
            </Space>
          </Radio.Group>
        </Space>
      </Drawer>
    </div>
  );
}

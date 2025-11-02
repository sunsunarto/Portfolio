import { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";

export default function Languages() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");

  const handleLanguageChange = (e) => {
    setSelectedLang(e.target.value);
    setDrawerVisible(false); 
  };

  return (
    <div style={{padding: '8px 16px' }}>
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
        Languages
      </Button>

      <Drawer
        title="Select Language"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        bodyStyle={{ padding: 24 }}
      >
        <Space direction="vertical">
          <Radio.Group onChange={handleLanguageChange} value={selectedLang}>
            <Space direction="vertical">
              <Radio value="en">English</Radio>
              <Radio value="id">Bahasa Indonesia (coming soon)</Radio>
              <Radio value="cn">中文 (coming soon)</Radio>
            </Space>
          </Radio.Group>
        </Space>
      </Drawer>
    </div>
  );
}

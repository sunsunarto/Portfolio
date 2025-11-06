import { useEffect, useState, useContext } from 'react';
import { Table, Typography, Image, Space, Button } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { LanguageContext } from "../context/LanguageContext.js";
import { translations } from "../utils/i18n.js";

const { Title } = Typography;

export default function TableWebinarCard() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [bootcamp, setBootcamp] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/event.json');
        const data = await res.json();
        const filtered = data.filter((item) => item.status === 'Webinar');
        setBootcamp(filtered);
      } catch (error) {
        console.error('Failed to load bootcamp data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: t.certificate,
      dataIndex: 'pic',
      key: 'pic',
      render: (pic) => (
        <Image
          src={pic}
          alt="Certificate"
          width={100}
          height={50}
          style={{ objectFit: 'cover', borderRadius: 8 }}
        />
      ),
    },
    {
      title: t.title,
      key: 'title',
      render: (_, record) => (
        <strong>{record.title?.[language] || record.title?.en || 'Untitled'}</strong>
      ),
    },
    {
      title: t.date,
      key: 'date',
      render: (_, record) => record.date?.[language] || record.date?.en || '-',
    },
    {
      title: t.information,
      key: 'information',
      render: (_, record) => (
        <Link href={`/achievement/AchievementTable/Table-Other/${record.id}`}>{t.viewMore}</Link>
      ),
    },
  ];

  return (
    <Space direction="vertical" style={{ width: '100%', backgroundColor: '#E6F7FF' }}>
      <Title style={{ color: '#000080' }} level={2}>
        <BookOutlined style={{ color: '#000080' }} /> {t.tabWebinar}
      </Title>
      <Table
        style={{ backgroundColor: '#E6F7FF' }}
        dataSource={bootcamp}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 7 }}
        bordered
      />
      <Button type="primary" style ={{ backgroundColor: '#000080' }} href="/achievement/AchievementTable">{t.back}</Button>
    </Space>
  );
}
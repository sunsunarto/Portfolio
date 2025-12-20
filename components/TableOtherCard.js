import { useEffect, useState, useContext } from 'react';
import { Table, Typography, Image, Space, Button } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { LanguageContext } from "../context/LanguageContext.js";
import { translations } from "../utils/i18n.js";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/id';

dayjs.extend(customParseFormat);

const { Title } = Typography;

export default function TableOtherCard() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [other, setOther] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/event.json');
        const data = await res.json();
        const filtered = data.filter((item) => item.status === 'other');

        const sorted = filtered.sort((a, b) => {
          const rawDateA = typeof a.date === 'string'
            ? a.date
            : (a.date?.[language] || a.date?.en);
          const rawDateB = typeof b.date === 'string'
            ? b.date
            : (b.date?.[language] || b.date?.en);

          const dateA = dayjs(rawDateA, 'DD MMMM YYYY', language === 'id' ? 'id' : 'en');
          const dateB = dayjs(rawDateB, 'DD MMMM YYYY', language === 'id' ? 'id' : 'en');

          return dateB.valueOf() - dateA.valueOf();
        });

        setOther(sorted);
      } catch (error) {
        console.error('Failed to load Webinar data:', error);
      }
    };

    fetchData();
  }, [language]);

  const columns = [
    {
      title: t.certificate,
      dataIndex: 'pic',
      key: 'pic',
      render: (pic) =>
        pic ? (
          <Image
            src={pic}
            alt="Certificate"
            width={100}
            height={50}
            style={{ objectFit: 'cover', borderRadius: 8 }}
          />
        ) : (
          '-'
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
      render: (_, record) => {
        const rawDate =
          typeof record.date === 'string'
            ? record.date
            : (record.date?.[language] || record.date?.en);
        return rawDate || '-';
      },
    },
    {
      title: t.information,
      key: 'information',
      render: (_, record) => (
        <Link href={`/achievement/AchievementTable/Table-Other/${record.id}`}>
          {t.viewMore}
        </Link>
      ),
    },
  ];

  return (
    <Space direction="vertical" style={{ width: '100%', backgroundColor: '#E6F7FF' }}>
      <Title style={{ color: '#000080' }} level={2}>
        <BookOutlined style={{ color: '#000080' }} /> {t.tabOther}
      </Title>
      <Table
        style={{ backgroundColor: '#E6F7FF' }}
        dataSource={other}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 7 }}
        bordered
      />
      <Button
        type="primary"
        style={{ backgroundColor: '#000080' }}
        href="/achievement/AchievementTable"
      >
        {t.back}
      </Button>
    </Space>
  );
}
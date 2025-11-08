import { useEffect, useState, useContext } from 'react';
import { Table, Typography, Image, Space } from 'antd';
import { VideoCameraOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { LanguageContext } from "../context/LanguageContext.js";
import { translations } from "../utils/i18n.js";

const { Title } = Typography;

export default function PortfolioCard() {
    const [portfolio, setPortfolio] = useState([]);
    const { language } = useContext(LanguageContext);
    const t = translations[language];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data/portfolio.json');
                const data = await res.json();
                const filtered = data.filter((item) => item.status === 'Project');
                setPortfolio(filtered);
            } catch (error) {
                console.error('Failed to load webinar data:', error);
            }
        };

        fetchData();
    }, []);

    const columns = [
  {
    title: t.tabProject,
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
    dataIndex: 'title',
    key: 'title',
    render: (_, record) => <strong>{record.title?.[language] || record.title?.en || 'Untitled'}</strong>,
  },
  {
    title: t.date,
    dataIndex: 'date',
    key: 'date',
    render: (_, record) => record.date?.[language] || record.date?.en || '-',
  },
  {
    title: 'Information',
    key: 'information',
    render: (_, record) => (
      <Link href={`/portfolio/${record.id}`}>{t.viewMore}</Link>
    ),
  },
];

    return (
        <Space direction="vertical" style={{ width: '100%', backgroundColor: '#E6F7FF' }}>
            <Title level={2} style={{ color: '#000080' }}> <VideoCameraOutlined style={{ color: '#000080' }}/> {t.navPortfolio}</Title>
            <Table style={{backgroundColor: '#E6F7FF' }}
                dataSource={portfolio}
                columns={columns}
                rowKey="id"
                pagination={{ pageSize: 7 }}
                bordered
            />
        </Space>
    );
}


import { useEffect, useState } from 'react';
import { Table, Typography, Image, Space } from 'antd';
import { TrophyOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Title } = Typography;

export default function TableCompetitionCard() {
  const [competition, setCompetition] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/event.json');
        const data = await res.json();
        const filtered = data.filter((item) => item.status === 'competition');
        setCompetition(filtered);
      } catch (error) {
        console.error('Failed to load webinar data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: 'Certificate',
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
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Information',
      key: 'information',
      render: (_, record) => {
        console.log("Competition record:", record); // ✅ Correct placement
        return (
          <Link href={`/achievement/AchievementTable/Table-Competition/${record.id}`}>
            View Details
          </Link>
        );
      },
    }
  ];

  return (
    <Space direction="vertical" style={{ width: '100%', backgroundColor: '#E6F7FF' }}>
      <Title style={{ color: '#000080' }} level={2}><TrophyOutlined style={{ color: '#000080' }} /> Competition Achievements</Title>
      <Table style={{ backgroundColor: '#E6F7FF' }}
        dataSource={competition}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 7 }}
        bordered
      />
    </Space>
  );
}


import { useEffect, useState } from 'react';
import { Table, Typography, Image, Space } from 'antd';
import { TrophyOutlined } from '@ant-design/icons';

const { Title } = Typography;

export default function TableCompetitionCard() {
    const [webinars, setWebinars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data/event.json');
                const data = await res.json();
                const filtered = data.filter((item) => item.status === 'competition');
                setWebinars(filtered);
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
    render: (_, record) => (
      <Link href={`/achievement/AchievementTable/table-competition/${record.id}`}>
        <a>View Details</a>
      </Link>
    ),
  },
    ];

    return (
        <Space direction="vertical" style={{ width: '100%', backgroundColor: '#E6F7FF' }}>
            <Title level={2}>< TrophyOutlined /> Competition Achievements</Title>
            <Table
                dataSource={webinars}
                columns={columns}
                rowKey="id"
                pagination={{ pageSize: 7 }}
                bordered
            />
        </Space>
    );
}


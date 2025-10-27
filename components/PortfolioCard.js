import { useEffect, useState } from 'react';
import { Table, Typography, Image, Space } from 'antd';
import { VideoCameraOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Title } = Typography;

export default function PortfolioCard() {
    const [portfolio, setPortfolio] = useState([]);

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
    title: 'Project Image ',
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
      <Link href={`/portfolio/${record.id}`}>
        View Details
      </Link>
    ),
  },
];

    return (
        <Space direction="vertical" style={{ width: '100%', backgroundColor: '#E6F7FF' }}>
            <Title level={2} style={{ color: '#000080' }}> <VideoCameraOutlined style={{ color: '#000080' }}/> Portfolio</Title>
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


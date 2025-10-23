import { Table, Button, Space, Popconfirm, message } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function EventTable() {
  const router = useRouter();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('events') || '[]');
    setEvents(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = events.filter((e) => e.id !== id);
    localStorage.setItem('events', JSON.stringify(updated));
    setEvents(updated);
    message.success('Event deleted');
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Action',
      render: (_, record) => (
        <Space>
          <Button size="small" onClick={() => router.push(`/events/${record.id}`)}>
            View
          </Button>
          <Button size="small" onClick={() => router.push(`/events/${record.id}/edit`)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this event?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger size="small">Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={events}
      rowKey="id"
      pagination={{ pageSize: 5 }}
    />
  );
}

import { useEffect, useState, useContext } from 'react';
import { Table, Typography, Image, Space, Tag, Popover, Button } from 'antd';
import { VideoCameraOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { LanguageContext } from "../context/LanguageContext.js";
import { translations } from "../utils/i18n.js";

const { Title } = Typography;

export default function ProjectCard() {
  const [project, setProject] = useState([]);
  const [tools, setTools] = useState([]);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/Project.json');
        const data = await res.json();
        const filtered = data.filter((item) => item.status === 'Project');
        setProject(filtered);

        const toolRes = await fetch('/data/tools.json');
        const toolData = await toolRes.json();
        setTools(toolData);
      } catch (error) {
        console.error('Failed to load data:', error);
      }
    };

    fetchData();
  }, []);

  const getToolInfo = (code) => tools.find((t) => t.code === code);

  const columns = [
    {
      title: t.tabProject,
      dataIndex: 'pic',
      key: 'pic',
      render: (pic) => (
        <Image
          src={pic}
          alt="Project"
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
      render: (_, record) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <strong>{record.title?.[language] || record.title?.en || 'Untitled'}</strong>
          <Space style={{ maxWidth: "400px" }} wrap>
            {record.tools?.map((toolCode, i,) => {
              const tool = getToolInfo(toolCode);
              const content = (
                <Button
                  type="link"
                  style={{ color: tool?.colorText }}
                  onClick={() =>
                    window.open(
                      tool?.link,
                      '_blank',
                      'width=800,height=600,scrollbars=yes,resizable=yes'
                    )
                  }
                >
                  {tool?.link}
                </Button>

              );
              return (
                <Popover
                  key={i}
                  content={content}
                  title={
                    <span style={{ color: tool?.colorText || '#000' }}>
                      {tool?.name || toolCode}
                    </span>}
                  trigger="click"
                  overlayInnerStyle={{
                    backgroundColor: tool?.color || '#fff',
                    borderRadius: 6,
                    color: tool?.colorText,
                  }}
                >
                  <Tag
                    color={tool?.color || 'default'}
                    style={{ cursor: 'pointer' }}
                  >
                    {tool?.name || toolCode}
                  </Tag>
                </Popover>
              );
            })}
          </Space>
        </div>
      ),
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
        <Link href={`/project/${record.id}`}>{t.viewMore}</Link>
      ),
    },
  ];

  return (
    <Space direction="vertical" style={{ width: '100%', backgroundColor: '#E6F7FF' }}>
      <Title level={2} style={{ color: '#000080' }}>
        <VideoCameraOutlined style={{ color: '#000080' }} /> {t.navProject}
      </Title>
      <Table
        style={{ backgroundColor: '#E6F7FF' }}
        dataSource={project}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 7 }}
        bordered
      />
      <Typography>{t.projectTotal}{ project.length}</Typography>
    </Space>
  );
}

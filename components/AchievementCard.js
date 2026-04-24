import { useEffect, useState, useContext } from 'react';
import { Table, Typography, Image, Space, Collapse } from 'antd';
import {
  TrophyOutlined,
  PlayCircleOutlined,
  CheckCircleOutlined,
  RocketOutlined,
  StarOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { LanguageContext } from "../context/LanguageContext.js";
import { translations } from "../utils/i18n.js";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/id';

dayjs.extend(customParseFormat);

const { Title } = Typography;
const { Panel } = Collapse;

const STATUS_CONFIG = [
  { key: 'other',       icon: <StarOutlined />,        labelKey: 'tabOther' },
  { key: 'Webinar',     icon: <PlayCircleOutlined />,   labelKey: 'tabWebinar' },
  { key: 'competition', icon: <CheckCircleOutlined />,  labelKey: 'tabCompletion' },
  { key: 'Bootcamp',    icon: <RocketOutlined />,       labelKey: 'tabBootcamp' },
];

function AchievementTable({ data, language, t, status }) {
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
        ) : '-',
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
        <Link href={`/achievement/Single-${status.charAt(0).toUpperCase() + status.slice(1)}/${record.id}`}>
          {t.viewMore}
        </Link>
      ),
    },
  ];

  return (
    <Table
      style={{ backgroundColor: '#ffffff' }}
      dataSource={data}
      columns={columns}
      rowKey="id"
      pagination={{ pageSize: 7 }}
      bordered
    />
  );
}

export default function TableAllCards() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [dataByStatus, setDataByStatus] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/event.json');
        const data = await res.json();

        const grouped = {};
        for (const { key } of STATUS_CONFIG) {
          const filtered = data.filter((item) => item.status === key);

          grouped[key] = filtered.sort((a, b) => {
            const getRaw = (item) =>
              typeof item.date === 'string'
                ? item.date
                : (item.date?.[language] || item.date?.en);

            const locale = language === 'id' ? 'id' : 'en';

            const extractDate = (raw) => {
              if (!raw) return dayjs(null);
              // Handle range like "03-05 October 2025" → "05 October 2025"
              const normalized = raw.replace(/^\d{2}-(\d{2}\s)/, '$1');
              const parsed = dayjs(normalized, 'DD MMMM YYYY', locale);
              return parsed.isValid() ? parsed : dayjs(raw);
            };

            const valA = extractDate(getRaw(a)).valueOf();
            const valB = extractDate(getRaw(b)).valueOf();

            return valB - valA;
          });
        }

        setDataByStatus(grouped);
      } catch (error) {
        console.error('Failed to load achievement data:', error);
      }
    };

    fetchData();
  }, [language]);

  return (
    <Space direction="vertical" style={{ width: '100%', backgroundColor: '#E6F7FF', padding: 16 }}>
      <Title style={{ color: '#000080' }} level={2}>
        <TrophyOutlined style={{ color: '#000080' }} /> {t.navAchievement}
      </Title>

      <Collapse accordion>
        {STATUS_CONFIG.map(({ key, icon, labelKey }) => (
          <Panel
            key={key}
            header={
              <Space>
                <span style={{ color: '#000080' }}>{icon}</span>
                <span style={{ color: '#000080', fontWeight: 600 }}>
                  {t[labelKey] || key}
                </span>
                <span style={{ color: '#888', fontSize: 12 }}>
                  ({dataByStatus[key]?.length ?? 0})
                </span>
              </Space>
            }
            style={{ backgroundColor: '#ffffff', borderColor: '#91caff' }}
          >
            <AchievementTable
              data={dataByStatus[key] || []}
              language={language}
              t={t}
              status={key}
            />
          </Panel>
        ))}
      </Collapse>
    </Space>
  );
}
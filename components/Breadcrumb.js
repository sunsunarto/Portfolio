import { Breadcrumb } from 'antd';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ThemeContext } from "../context/ThemeContext";

export default function BreadcrumbNav() {
  const router = useRouter();
  const { pathname, query } = router;
  const { tokens, setTheme, theme } = useContext(ThemeContext);

  const segments = pathname.split('/').filter(Boolean);

  const items = segments.length === 0
    ? [
      <Breadcrumb.Item key="home">
        <Link href="/" style={{ color: tokens.textPrimary }}>
          Dashboard
        </Link>
      </Breadcrumb.Item>

    ]
    : segments.map((segment, index, arr) => {
      let label = segment;
      let url = '/' + arr.slice(0, index + 1).join('/');

      if (segment === '[id]' && query.id) {
        label = `${query.id}`;
        url = `/${query.id}`;
      } else if (segment === 'edit') {
        label = 'Edit Event';
        url = `${query.id}/edit`;
      } else {
        label = label.replace(/[-_]/g, ' ');
        label = label.charAt(0).toUpperCase() + label.slice(1);
      }

      return (
        <Breadcrumb.Item key={url}>
          <Link href={url}>
            <span style={{ color: tokens.textPrimary }}>{label}</span>
          </Link>
        </Breadcrumb.Item>
      );
    });

  return <Breadcrumb style={{ marginBottom: 16 }}>{items}</Breadcrumb>;
}

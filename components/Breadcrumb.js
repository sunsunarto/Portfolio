import { Breadcrumb } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function BreadcrumbNav() {
  const router = useRouter();
  const { pathname, query } = router;

  const segments = pathname.split('/').filter(Boolean);

  const items = segments.length === 0
    ? [
        <Breadcrumb.Item key="home">
          <Link href="/">Dashboard</Link>
        </Breadcrumb.Item>,
      ]
    : segments.map((segment, index, arr) => {
        let label = segment;
        let url = '/' + arr.slice(0, index + 1).join('/');

        if (segment === '[id]' && query.id) {
          label = `Event ${query.id}`;
          url = `/events/${query.id}`;
        } else if (segment === 'edit') {
          label = 'Edit Event';
          url = `/events/${query.id}/edit`;
        } else {
          label = label.replace(/[-_]/g, ' ');
          label = label.charAt(0).toUpperCase() + label.slice(1);
        }

        return (
          <Breadcrumb.Item key={url}>
            <Link href={url}>{label}</Link>
          </Breadcrumb.Item>
        );
      });

  return <Breadcrumb style={{ marginBottom: 16 }}>{items}</Breadcrumb>;
}

// assets
import { DashboardOutlined, CalendarOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  CalendarOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const meetings = {
  id: 'group-meetings',
  title: '',
  type: 'group',
  children: [
    {
      id: 'meetings',
      title: 'Meetings',
      type: 'item',
      url: '/meetings',
      icon: icons.CalendarOutlined,
      breadcrumbs: false
    }
  ]
};

export default meetings;

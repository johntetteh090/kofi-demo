// assets
import { BellOutlined } from '@ant-design/icons';

// icons
const icons = {
  BellOutlined,
  
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const notifications = {
  id: 'group-notifications',
  title: '',
  type: 'group',
  children: [
    {
      id: 'notifications',
      title: 'Notifications',
      type: 'item',
      url: '/notifications',
      icon: icons.BellOutlined,
      breadcrumbs: false
    }
  ]
};

export default notifications;

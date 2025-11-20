// assets
import { BarChartOutlined } from '@ant-design/icons';

// icons
const icons = {
  BarChartOutlined,
  
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const reports = {
  id: 'group-reports',
  title: '',
  type: 'group',
  children: [
    {
      id: 'reports',
      title: 'Reports',
      type: 'item',
      url: '/reports',
      icon: icons.BarChartOutlined,
      breadcrumbs: false
    }
  ]
};

export default reports;

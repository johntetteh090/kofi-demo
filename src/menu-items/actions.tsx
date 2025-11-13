// assets
import { FormOutlined } from '@ant-design/icons';
// import { FormOutlined } from '@ant-design/icons';

// icons
const icons = {
  FormOutlined,
  
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const actions = {
  id: 'group-actions',
  title: '',
  type: 'group',
  children: [
    {
      id: 'actions',
      title: 'Actions',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.FormOutlined,
      breadcrumbs: false
    }
  ]
};

export default actions;

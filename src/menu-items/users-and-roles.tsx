// assets
import { TeamOutlined } from '@ant-design/icons';

// icons
const icons = {
  TeamOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const usersAndRoles = {
  id: 'group-users-and-roles',
  title: '',
  type: 'group',
  children: [
    {
      id: 'users-and-roles',
      title: 'UsersAndRoles',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.TeamOutlined,
      breadcrumbs: false
    }
  ]
};

export default usersAndRoles;

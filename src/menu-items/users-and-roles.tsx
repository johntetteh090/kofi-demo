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
      title: 'Users & Roles',
      type: 'item',
      url: '/users-and-roles',
      icon: icons.TeamOutlined,
      breadcrumbs: false
    }
  ]
};

export default usersAndRoles;

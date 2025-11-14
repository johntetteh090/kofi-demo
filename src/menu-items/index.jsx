// project import
import dashboard from './dashboard';
import pages from './page';
import utilities from './utilities';
import support from './support';
import meetings from './meetings';
import actions from './actions';
import notifications from './notifications';
import reports from './reports';
import usersAndRoles from './users-and-roles';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  // items: [dashboard, pages, utilities, support]
  items: [dashboard, meetings, actions, notifications, reports, usersAndRoles]
};

export default menuItems;

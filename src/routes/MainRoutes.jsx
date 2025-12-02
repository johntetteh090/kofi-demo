import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));
const Meetings = Loadable(lazy(() => import('pages/meetings/index')));
const Actions = Loadable(lazy(() => import('pages/actions/index')));
const Notifications = Loadable(lazy(() => import('pages/notifications/index')));
const Reports = Loadable(lazy(() => import('pages/reports/index')));
const UsersAndRoles = Loadable(lazy(() => import('pages/users-and-roles/index')));
const BookAppointments = Loadable(lazy(() => import('pages/staffs/book-appointment/index')));
const Login = Loadable(lazy(() => import('pages/auth/Login')));




// render - color
const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  // path: '/',
  // element: <Login />,
  path: '/',
  element: <DashboardLayout />, 
  children: [
    
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'meetings',
      element: <Meetings />
    },
    {
      path: 'actions',
      element: <Actions />
    },
    {
      path: 'notifications',
      element: <Notifications />
    },
    {
      path: 'reports',
      element: <Reports />
    },
    {
      path: 'users-and-roles',
      element: <UsersAndRoles />
    },
    // {
    //   path: 'dashboard',
    //   children: [
    //     {
    //       path: 'default',
    //       element: <DashboardDefault />
    //     }
    //   ]
    // },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;

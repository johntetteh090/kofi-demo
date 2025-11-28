import { createBrowserRouter } from 'react-router-dom';

// project imports
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import StaffsRoutes from './StaffsRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([LoginRoutes, MainRoutes,StaffsRoutes], { basename: import.meta.env.VITE_APP_BASE_NAME });

export default router;

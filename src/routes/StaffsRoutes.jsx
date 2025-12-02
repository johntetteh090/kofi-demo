import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';

// jwt auth
const BookAppointments = Loadable(lazy(() => import('pages/staffs/book-appointment/index')));


const StaffsRoutes = {
    path: '/',
    children: [
        {
            path: 'book-appointment',
            element: <BookAppointments />
        },

    ]
};

export default StaffsRoutes;

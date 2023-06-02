/* eslint-disable arrow-body-style */
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { setAuthToken } from '../../network/utils';

const PrivateRoutes = () => {

    const user = useSelector((state) => state.user);
    const { user: useraleas } = user
    if (user.authenticated) {
        setAuthToken(useraleas.token);
    }

    return (
        user.authenticated ? <Outlet /> : <Navigate to="/login" replace={true} />
    )
};

export default PrivateRoutes;

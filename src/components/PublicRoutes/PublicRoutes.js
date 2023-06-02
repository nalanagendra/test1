/* eslint-disable arrow-body-style */
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

const PublicRoutes = () => {
    const user = useSelector((state) => state.user);

    return (
        user.authenticated ? <Navigate to="/" replace={true} /> : <Outlet />
    )
};

export default PublicRoutes;

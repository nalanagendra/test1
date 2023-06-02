import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import PrivateRoutes from '../components/PrivateRoutes/PrivateRoutes';
import PublicRoutes from '../components/PublicRoutes';
import Login from '../pages/Login'
import Home from '../pages/Home';

const RootRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PrivateRoutes />}>
                    <Route exact index element={<Home />} />
                    <Route exact path="products" element={<h1>Products Page</h1>} />
                    <Route exact path="replay" element={<h1>Replay Page</h1>} />
                    <Route exact path="settings" element={<h1>Settings Page</h1>} />
                </Route>
                <Route exact path="/" element={<PublicRoutes />}>
                    <Route exact path="login" element={<Login />} />
                    <Route exact path="signup" element={<h1>Sign Up Page</h1>} />
                    <Route exact path="test" element={<h1>test Page</h1>} />
                </Route>
            </Routes>

        </BrowserRouter>
    );
}

export default RootRouter;

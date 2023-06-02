import React from 'react';
import { useLocation } from 'react-router-dom';
import { List } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import RouteIcon from '@mui/icons-material/Route';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { makeStyles } from 'tss-react/mui';

import NavItemLg from '../NavItem/NavItemLg';

const useStyles = makeStyles()((theme) => ({}));

const NavLinksLg = () => {
    const location = useLocation();

    return (
        <>
            <List
                sx={{
                    display: { lg: 'flex', md: 'flex' },
                }}
            >
                <NavItemLg
                    title="Home"
                    link="/"
                    icon={<TimelineIcon />}
                    selected={location.pathname === '/'}
                />
                <NavItemLg
                    title="Products"
                    link="/products"
                    icon={<NotificationsActiveIcon />}
                    selected={location.pathname === '/products'}
                />
                <NavItemLg
                    title="Replay"
                    link="/replay"
                    icon={<RouteIcon />}
                    selected={location.pathname === '/replay'}
                />
                <NavItemLg
                    title="Settings"
                    link="/replay"
                    icon={<RouteIcon />}
                    selected={location.pathname === '/settings'}
                />
            </List>

        </>
    );
};

export default NavLinksLg;

import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    List, Divider, Hidden,
} from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import RouteIcon from '@mui/icons-material/Route';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { makeStyles } from 'tss-react/mui';

import NavItem from '../NavItem';

const useStyles = makeStyles()((theme) => ({}));

const NavLinks = () => {
    const location = useLocation();

    return (
        <>
            <List
                sx={{
                    display: { md: 'flex'},
                  }}
            >
                <NavItem
                    title="Home"
                    link="/"
                    icon={<TimelineIcon />}
                    selected={location.pathname === '/'}
                />
                <NavItem
                    title="Products"
                    link="/products"
                    icon={<NotificationsActiveIcon />}
                    selected={location.pathname === '/products'}
                />
                <NavItem
                    title="Replay"
                    link="/replay"
                    icon={<RouteIcon />}
                    selected={location.pathname === '/replay'}
                />
                <NavItem
                    title="Settings"
                    link="/replay"
                    icon={<RouteIcon />}
                    selected={location.pathname === '/settings'}
                />
            </List>
                <List
                    style={{
                        display: { xl: 'none', md: 'block' },
                        position: 'absolute', bottom: 10, left: 0, right: 0,
                    }}
                >
                    <Divider />
                    <NavItem
                        title="Logout"
                        link="#"
                        onClick={() => {}}
                        icon={<ExitToAppIcon />}
                    />
                </List>
        </>
    );
};

export default NavLinks;

import React from 'react';
import { Link } from 'react-router-dom';
import {
    ListItemButton, ListItemIcon, ListItemText, Divider,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStylesNavItem = makeStyles()((theme) => ({
    root: {
        width: '100%',
    },
    selectedRoot: {
        backgroundColor: 'white!important',
    },
    icon: {
        color: 'white',
    },
    text: {
        color: 'white',
    },
    selected: {
        color: theme.palette.primary.main,
    },
}));

const NavItem = ({
    title, link, icon, selected, onClick = () => { }
}) => {
    const { classes } = useStylesNavItem();
    return (
        <ListItemButton
            className={`${classes.root} ${selected && classes.selectedRoot}`}
            key={link}
            component={Link}
            to={link}
            selected={selected}
            onClick={onClick}
        >
            <ListItemIcon
                sx={{ display: { xs: 'flex', md: 'none' } }}
                className={`${classes.icon} ${selected && classes.selected}`}
            >
                {icon}
            </ListItemIcon>
            <ListItemText className={`${classes.text} ${selected && classes.selected}`} primary={title} />
        </ListItemButton>
    );
};

export default NavItem;

import React from 'react';
import { Link } from 'react-router-dom';
import {
    ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStylesNavItem = makeStyles()((theme) => ({
    root: {
        width: '100%',
    },
    selectedRoot: {
        backgroundColor: 'white!important',
        bottom: 7,
        height: '129%',
    },
    icon: {
        color: 'white',
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
    selected: {
        color: theme.palette.primary.main,
    },
}));

const NavItemLg = ({
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

export default NavItemLg;

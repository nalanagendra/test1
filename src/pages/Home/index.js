import React, { useState } from 'react';
import {
    Box,
    Button,
    Hidden,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import RestaurantIcon from '@mui/icons-material/Restaurant';

import NavBar from '../../components/NavBar';
// import Carousel from '../../components/Carousel';
import SwipableTabs from '../../components/SwipableTabs/SwipableTabs';
// import SwipableTabsLg from '../../components/SwipableTabs/SwipableTabsLg';
import ScrollableTabsLg from '../../components/ScrollableTabs';
import strings from '../../globalization';

const useStyles = makeStyles()((theme) => ({
    menuBtn: {
        position: 'fixed',
        bottom: '7vw',
        left: '50%',
        borderRadius: '30px',
        transform: 'translateX(-50%)',
        fontSize: '12px',
        zIndex: 20,
    },
}));

const Home = () => {
    const [displayCategory, setDisplayCategory] = useState(false);
    const { classes } = useStyles();

    const closeCategory = () => {
        setDisplayCategory(false);
    }

    return (
        <Box>
            <NavBar />
            {/* <Carousel /> */}
            {/* Mobile View */}
            <Hidden mdUp>
                <SwipableTabs
                    displayCategory={displayCategory}
                    closeCategory={closeCategory}
                />
                <Button
                    className={classes.menuBtn}
                    variant="contained"
                    startIcon={<RestaurantIcon />}
                    onClick={() => {
                        setDisplayCategory((prevState) => !prevState)
                    }}
                >
                    {strings.browseMenu}
                </Button>
            </Hidden>

            {/* Desktop view */}
            <Hidden mdDown>
                {/* <Carousel /> */}
                <ScrollableTabsLg />
            </Hidden >
        </Box >
    );
}

export default Home;
